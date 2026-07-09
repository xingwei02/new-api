package model

import (
	"testing"

	"github.com/QuantumNous/new-api/common"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestCreateAdminPendingTopUpCreatesWaffoPancakePendingOrder(t *testing.T) {
	truncateTables(t)
	insertUserForPaymentGuardTest(t, 501, 0)

	order, err := CreateAdminPendingTopUp(&AdminPendingTopUpInput{
		UserID:          501,
		Amount:          10,
		Money:           10.5,
		PaymentProvider: PaymentProviderWaffoPancake,
	})

	require.NoError(t, err)
	require.NotNil(t, order)
	assert.Equal(t, 501, order.UserId)
	assert.Equal(t, int64(10), order.Amount)
	assert.Equal(t, 10.5, order.Money)
	assert.Equal(t, PaymentMethodWaffoPancake, order.PaymentMethod)
	assert.Equal(t, PaymentProviderWaffoPancake, order.PaymentProvider)
	assert.Equal(t, common.TopUpStatusPending, order.Status)
	assert.NotEmpty(t, order.TradeNo)
	assert.NotZero(t, order.CreateTime)
}

func TestCreateAdminPendingTopUpRejectsUnsupportedProvider(t *testing.T) {
	truncateTables(t)
	insertUserForPaymentGuardTest(t, 502, 0)

	order, err := CreateAdminPendingTopUp(&AdminPendingTopUpInput{
		UserID:          502,
		Amount:          10,
		Money:           10.5,
		PaymentProvider: PaymentProviderEpay,
	})

	require.Error(t, err)
	assert.Nil(t, order)
}

func TestGetPendingTopUpForUserPaymentRequiresOwnerProviderAndPendingStatus(t *testing.T) {
	truncateTables(t)
	insertUserForPaymentGuardTest(t, 601, 0)
	insertUserForPaymentGuardTest(t, 602, 0)
	insertTopUpForPaymentGuardTest(t, "admin-pending-waffo", 601, PaymentProviderWaffoPancake)
	insertTopUpForPaymentGuardTest(t, "admin-pending-epay", 601, PaymentProviderEpay)

	order, err := GetPendingTopUpForUserPayment("admin-pending-waffo", 601, PaymentProviderWaffoPancake)
	require.NoError(t, err)
	require.NotNil(t, order)
	assert.Equal(t, "admin-pending-waffo", order.TradeNo)

	_, err = GetPendingTopUpForUserPayment("admin-pending-waffo", 602, PaymentProviderWaffoPancake)
	require.ErrorIs(t, err, ErrTopUpNotFound)

	_, err = GetPendingTopUpForUserPayment("admin-pending-epay", 601, PaymentProviderWaffoPancake)
	require.ErrorIs(t, err, ErrPaymentMethodMismatch)

	require.NoError(t, ManualCompleteTopUp("admin-pending-waffo", "127.0.0.1"))
	_, err = GetPendingTopUpForUserPayment("admin-pending-waffo", 601, PaymentProviderWaffoPancake)
	require.ErrorIs(t, err, ErrTopUpStatusInvalid)
}
