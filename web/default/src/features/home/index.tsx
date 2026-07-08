/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { PublicLayout } from '@/components/layout'

export function Home() {
  return (
    <PublicLayout showMainContainer={false}>
      <style>{aiUnionHomeCss}</style>
      <main className='ai-union-page'>
        <div className='ai-union-glow-line' />
        <div className='ai-union-wrap'>
          <section className='ai-union-hero'>
            <div>
              <div className='ai-union-eyebrow'>
                <span className='ai-union-dot' />
                AI服务新生意，轻资产合作
              </div>
              <h1>
                加入AI联盟，<br />
                <span>做AI服务主理人</span>
              </h1>
              <p className='ai-union-sub'>
                不搭系统，不碰技术。你只负责拓展客户、管理充值；总部负责平台、服务器、接口和维护。
              </p>
              <div className='ai-union-slogan'>
                客户你来拓，收款你来管；<strong>技术总部做，收益大家分。</strong>
              </div>
              <div className='ai-union-cta-row'>
                <a className='ai-union-btn ai-union-primary' href='/register'>
                  申请主理人 →
                </a>
                <a className='ai-union-btn ai-union-secondary' href='/about'>
                  开始咨询合作
                </a>
              </div>
            </div>

            <div className='ai-union-visual' aria-hidden='true'>
              <div className='ai-union-orb ai-union-one' />
              <div className='ai-union-orb ai-union-two' />
              <div className='ai-union-phone-card'>
                <div className='ai-union-mock'>
                  <div className='ai-union-mock-top'>
                    <span className='ai-union-mini-logo'>AI联盟后台</span>
                    <span className='ai-union-status'>收益流动中</span>
                  </div>
                  <div className='ai-union-caption'>本月客户充值</div>
                  <div className='ai-union-money'>¥ 28,640</div>
                  <div className='ai-union-caption'>客户、充值、续费，由主理人自己管理</div>
                  <div className='ai-union-bars'>
                    <div className='ai-union-bar'><i style={{ width: '86%' }} /></div>
                    <div className='ai-union-bar'><i style={{ width: '64%' }} /></div>
                    <div className='ai-union-bar'><i style={{ width: '72%' }} /></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id='model' className='ai-union-steps' aria-label='合作流程'>
            <div className='ai-union-step'><div className='ai-union-num'>1</div><b>拓展客户</b><span>企业、团队、商家、开发者，有AI需求就能对接。</span></div>
            <div className='ai-union-step'><div className='ai-union-num'>2</div><b>客户充值</b><span>客户充值到你这里，收款和客户关系你自己掌握。</span></div>
            <div className='ai-union-step'><div className='ai-union-num'>3</div><b>开通使用</b><span>你管理账号、额度、续费，总部保障平台稳定。</span></div>
            <div className='ai-union-step'><div className='ai-union-num'>4</div><b>分账结算</b><span>按合作规则与平台结算，客户复购越多收益越稳。</span></div>
          </section>

          <section className='ai-union-section'>
            <h2>主理人最关心的三件事</h2>
            <p className='ai-union-section-desc'>
              招商页不用讲复杂技术，只讲代理真正想要的安全感、掌控感和赚钱路径。
            </p>
            <div className='ai-union-cards'>
              <article className='ai-union-card'>
                <div className='ai-union-icon'>客</div>
                <h3>客户在你手</h3>
                <p>客户由你拓展、你维护、你服务。不是简单介绍给平台，而是做自己的客户池。</p>
              </article>
              <article className='ai-union-card ai-union-gold'>
                <div className='ai-union-icon'>款</div>
                <h3>收款你来管</h3>
                <p>客户充值先到主理人这里，再按规则与平台分账结算，合作更踏实。</p>
              </article>
              <article className='ai-union-card ai-union-green'>
                <div className='ai-union-icon'>技</div>
                <h3>技术总部扛</h3>
                <p>平台、服务器、接口、系统维护由总部负责。你不用懂技术，只管市场。</p>
              </article>
            </div>
          </section>

          <section className='ai-union-section ai-union-split'>
            <div className='ai-union-quote'>
              <h2>这是一个能长期复购的AI服务项目。</h2>
              <p>
                客户不是买一次就结束。只要持续使用AI服务，就会持续充值、持续续费。主理人前端做客户，总部后端做支撑，生意才容易做久。
              </p>
            </div>
            <div>
              <p className='ai-union-tag-title'>适合这些人加入：</p>
              <div className='ai-union-tags'>
                <span>企业服务商</span><span>软件网站服务商</span><span>电商 / 跨境团队</span>
                <span>自媒体资源</span><span>本地商家渠道</span><span>社群运营者</span><span>想做轻资产副业的人</span>
              </div>
            </div>
          </section>

          <section id='join' className='ai-union-final'>
            <h2>有客户，就能一起做。</h2>
            <p>加入AI联盟，成为AI服务主理人。客户你来拓，收款你来管；技术总部做，收益大家分。</p>
            <a className='ai-union-btn' href='/about'>立即开始合作咨询</a>
          </section>
        </div>
      </main>
    </PublicLayout>
  )
}

const aiUnionHomeCss = `
.ai-union-page{--bg:#f8fbff;--ink:#102033;--muted:#607089;--soft:#eef5ff;--card:#ffffffcc;--line:#dfeaf7;--blue:#2563eb;--violet:#7c3aed;--cyan:#06b6d4;--gold:#f59e0b;--green:#12b981;--shadow:0 24px 70px rgba(30,64,175,.14),0 8px 24px rgba(15,23,42,.06);--radius:28px;position:relative;min-height:100vh;padding:24px;color:var(--ink);background:radial-gradient(circle at 12% 8%,rgba(124,58,237,.16),transparent 30%),radial-gradient(circle at 88% 18%,rgba(6,182,212,.18),transparent 28%),linear-gradient(180deg,#fbfdff 0%,#f4f8ff 50%,#fff 100%);overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",Arial,sans-serif}.ai-union-page *{box-sizing:border-box}.ai-union-glow-line{position:absolute;inset:0;pointer-events:none;opacity:.58;background-image:linear-gradient(115deg,transparent 0 18%,rgba(37,99,235,.10) 18.2%,transparent 18.6% 48%,rgba(124,58,237,.08) 48.3%,transparent 48.8%),linear-gradient(75deg,transparent 0 68%,rgba(6,182,212,.12) 68.2%,transparent 68.7%);mask-image:linear-gradient(180deg,#000,transparent 78%)}.ai-union-wrap{position:relative;max-width:1160px;margin:0 auto}.ai-union-nav{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px;border:1px solid rgba(223,234,247,.9);border-radius:999px;background:rgba(255,255,255,.72);backdrop-filter:blur(18px);box-shadow:0 10px 35px rgba(30,64,175,.08)}.ai-union-brand{display:flex;align-items:center;gap:10px;font-weight:800;letter-spacing:-.04em;font-size:18px}.ai-union-logo{width:34px;height:34px;border-radius:12px;background:linear-gradient(135deg,var(--blue),var(--violet),var(--cyan));box-shadow:0 10px 24px rgba(37,99,235,.24);position:relative}.ai-union-logo:after{content:"";position:absolute;inset:9px;border-radius:50%;background:rgba(255,255,255,.9)}.ai-union-pill{font-size:14px;color:#34506b;background:#eff6ff;border:1px solid #dbeafe;border-radius:999px;padding:9px 14px;white-space:nowrap}.ai-union-hero{display:grid;grid-template-columns:1.08fr .92fr;gap:34px;align-items:center;padding:68px 0 36px}.ai-union-eyebrow{display:inline-flex;align-items:center;gap:8px;color:#1d4ed8;background:rgba(219,234,254,.72);border:1px solid #bfdbfe;border-radius:999px;padding:9px 13px;font-size:14px;font-weight:700;margin-bottom:22px}.ai-union-dot{width:8px;height:8px;border-radius:50%;background:var(--green);box-shadow:0 0 0 6px rgba(18,185,129,.14)}.ai-union-hero h1{font-size:clamp(42px,7vw,76px);line-height:.98;letter-spacing:-.075em;margin:0 0 20px;font-weight:900;text-wrap:balance;color:#0b1b31}.ai-union-hero h1 span{background:linear-gradient(90deg,#1d4ed8,#7c3aed,#0891b2);-webkit-background-clip:text;background-clip:text;color:transparent}.ai-union-sub{font-size:clamp(18px,2.2vw,24px);line-height:1.55;color:#465b75;max-width:650px;margin:0 0 28px;font-weight:500}.ai-union-slogan{display:inline-block;background:#0f1f35;color:white;border-radius:22px;padding:15px 18px;font-size:18px;font-weight:800;box-shadow:var(--shadow);margin-bottom:24px}.ai-union-slogan strong{color:#93c5fd}.ai-union-cta-row{display:flex;flex-wrap:wrap;gap:13px;align-items:center}.ai-union-btn{appearance:none;border:0;text-decoration:none;border-radius:999px;padding:15px 22px;font-weight:800;font-size:16px;display:inline-flex;align-items:center;gap:9px;transition:.25s ease;cursor:pointer}.ai-union-primary{color:white;background:linear-gradient(135deg,#2563eb,#7c3aed);box-shadow:0 18px 40px rgba(79,70,229,.25)}.ai-union-secondary{color:#1d4ed8;background:white;border:1px solid #cfe0f5;box-shadow:0 8px 26px rgba(37,99,235,.08)}.ai-union-btn:hover{transform:translateY(-2px)}.ai-union-visual{position:relative;min-height:520px}.ai-union-orb{position:absolute;border-radius:999px;filter:blur(1px);animation:aiUnionFloat 7s ease-in-out infinite}.ai-union-one{width:230px;height:230px;right:40px;top:0;background:linear-gradient(135deg,rgba(37,99,235,.25),rgba(6,182,212,.18))}.ai-union-two{width:160px;height:160px;left:20px;bottom:54px;background:linear-gradient(135deg,rgba(245,158,11,.22),rgba(124,58,237,.16));animation-delay:-2s}.ai-union-phone-card{position:absolute;right:28px;top:56px;width:min(390px,90%);border-radius:34px;background:rgba(255,255,255,.76);backdrop-filter:blur(22px);border:1px solid rgba(255,255,255,.8);box-shadow:var(--shadow);padding:20px;overflow:hidden}.ai-union-phone-card:before{content:"";position:absolute;inset:-2px;background:linear-gradient(135deg,rgba(37,99,235,.18),transparent 38%,rgba(6,182,212,.18));pointer-events:none}.ai-union-mock{position:relative;background:#fff;border:1px solid #e6eef8;border-radius:24px;padding:18px;box-shadow:0 12px 30px rgba(15,23,42,.06)}.ai-union-mock-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}.ai-union-mini-logo{font-weight:900;color:#1d4ed8}.ai-union-status{font-size:12px;color:#059669;background:#dcfce7;padding:5px 8px;border-radius:999px}.ai-union-money{font-size:38px;font-weight:900;letter-spacing:-.05em;margin:6px 0;color:#0f172a}.ai-union-caption{color:#64748b;font-size:14px}.ai-union-bars{display:grid;gap:10px;margin-top:20px}.ai-union-bar{height:12px;background:#eff6ff;border-radius:999px;overflow:hidden}.ai-union-bar i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#2563eb,#06b6d4)}.ai-union-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:34px 0 18px}.ai-union-step{background:white;border:1px solid var(--line);border-radius:22px;padding:18px;box-shadow:0 14px 40px rgba(30,64,175,.08)}.ai-union-step b{display:block;font-size:18px;margin-bottom:7px}.ai-union-step span{color:var(--muted);font-size:14px;line-height:1.5}.ai-union-num{width:30px;height:30px;border-radius:10px;background:linear-gradient(135deg,#dbeafe,#ede9fe);display:grid;place-items:center;color:#1d4ed8;font-weight:900;margin-bottom:12px}.ai-union-section{padding:44px 0}.ai-union-section>h2{font-size:clamp(30px,4.2vw,48px);line-height:1.1;letter-spacing:-.055em;margin:0 0 12px;text-align:center;font-weight:900}.ai-union-section-desc{text-align:center;margin:0 auto 28px;max-width:620px;color:var(--muted);font-size:18px;line-height:1.65}.ai-union-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.ai-union-card{position:relative;background:rgba(255,255,255,.78);backdrop-filter:blur(14px);border:1px solid rgba(223,234,247,.95);border-radius:var(--radius);padding:26px;box-shadow:0 16px 52px rgba(37,99,235,.09);overflow:hidden}.ai-union-card:after{content:"";position:absolute;right:-50px;top:-50px;width:150px;height:150px;border-radius:50%;background:linear-gradient(135deg,rgba(37,99,235,.12),rgba(124,58,237,.10))}.ai-union-icon{width:46px;height:46px;border-radius:17px;display:grid;place-items:center;margin-bottom:18px;color:white;font-weight:900;background:linear-gradient(135deg,#2563eb,#7c3aed)}.ai-union-card h3{font-size:24px;margin:0 0 10px;letter-spacing:-.04em;font-weight:900}.ai-union-card p{color:var(--muted);line-height:1.68;margin:0;font-size:16px}.ai-union-gold .ai-union-icon{background:linear-gradient(135deg,#f59e0b,#ef4444)}.ai-union-green .ai-union-icon{background:linear-gradient(135deg,#10b981,#06b6d4)}.ai-union-split{display:grid;grid-template-columns:.9fr 1.1fr;gap:22px;align-items:stretch}.ai-union-quote{background:#0f1f35;color:white;border-radius:32px;padding:34px;box-shadow:var(--shadow);position:relative;overflow:hidden}.ai-union-quote:before{content:"";position:absolute;right:-90px;top:-120px;width:280px;height:280px;border-radius:50%;background:rgba(37,99,235,.35)}.ai-union-quote h2{position:relative;font-size:36px;line-height:1.12;letter-spacing:-.055em;margin:0 0 16px;font-weight:900}.ai-union-quote p{position:relative;color:#cbd5e1;line-height:1.7;font-size:17px;margin:0}.ai-union-tag-title{text-align:left;margin:0 0 18px;color:var(--muted);font-size:18px}.ai-union-tags{display:flex;flex-wrap:wrap;gap:10px}.ai-union-tags span{padding:13px 15px;background:white;border:1px solid var(--line);border-radius:999px;color:#34506b;font-weight:700;box-shadow:0 8px 24px rgba(30,64,175,.06)}.ai-union-final{margin:42px 0 16px;padding:34px;border-radius:34px;background:linear-gradient(135deg,#2563eb,#7c3aed 55%,#06b6d4);color:white;text-align:center;box-shadow:0 28px 80px rgba(79,70,229,.26)}.ai-union-final h2{font-size:clamp(30px,4.5vw,52px);letter-spacing:-.06em;line-height:1.05;margin:0 0 12px;font-weight:900}.ai-union-final p{margin:0 auto 22px;max-width:720px;color:rgba(255,255,255,.86);font-size:18px;line-height:1.65}.ai-union-final .ai-union-btn{background:white;color:#1d4ed8}@keyframes aiUnionFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(18px)}}@media(max-width:860px){.ai-union-page{padding:14px}.ai-union-hero,.ai-union-split{grid-template-columns:1fr}.ai-union-hero{padding-top:42px}.ai-union-visual{min-height:430px}.ai-union-phone-card{left:50%;right:auto;transform:translateX(-50%);top:20px}.ai-union-steps,.ai-union-cards{grid-template-columns:1fr}.ai-union-pill{display:none}.ai-union-slogan{font-size:16px}.ai-union-section{padding:28px 0}}@media(prefers-reduced-motion:reduce){.ai-union-page *,.ai-union-page *:before,.ai-union-page *:after{animation:none!important;transition:none!important}}
`
