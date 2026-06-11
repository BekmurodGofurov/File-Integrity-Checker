import { useNavigate } from 'react-router-dom'
import { useLang } from '../contexts/LangContext'
import Topbar from '../components/Topbar'
import {
  ShieldCheckIcon,
  ArrowRightIcon,
  SenderHeroIcon,
  ReceiverHeroIcon,
} from '../components/Icons'

export default function Home() {
  const { t } = useLang()
  const navigate = useNavigate()
  const h = t.home

  return (
    <>
      <Topbar />
      <div className="page">
        {/* Hero */}
        <div className="home-hero">
          <div className="home-logo-wrap">
            <div className="home-logo">
              <ShieldCheckIcon size={36} />
            </div>
            <span className="home-ring-1" />
            <span className="home-ring-2" />
          </div>
          <h1 className="home-title">{t.appName}</h1>
          <p className="home-sub">{h.subtitle}</p>
        </div>

        {/* Role cards */}
        <div className="home-grid">
          <RoleCard
            icon={<SenderHeroIcon />}
            tag="TX"
            tagClass="tx"
            accentColor="var(--blue)"
            name={h.senderTitle}
            sub={h.senderSub}
            desc={h.senderDesc}
            steps={h.senderSteps}
            cta={h.start}
            onClick={() => navigate('/sender')}
          />
          <RoleCard
            icon={<ReceiverHeroIcon />}
            tag="RX"
            tagClass="rx"
            accentColor="var(--purple)"
            name={h.receiverTitle}
            sub={h.receiverSub}
            desc={h.receiverDesc}
            steps={h.receiverSteps}
            cta={h.start}
            onClick={() => navigate('/receiver')}
          />
        </div>

        <p className="home-footer">{h.footer}</p>
      </div>
    </>
  )
}

function RoleCard({ icon, tag, tagClass, accentColor, name, sub, desc, steps, cta, onClick }) {
  return (
    <button className="role-card" onClick={onClick}>
      <div className="role-card-top">
        <div className="role-icon-wrap">{icon}</div>
        <span className={`role-tag ${tagClass}`}>{tag}</span>
      </div>
      <div className="role-card-body">
        <div>
          <div className="role-name">{name}</div>
          <div className="role-sub" style={{ color: accentColor }}>{sub}</div>
        </div>
        <p className="role-desc">{desc}</p>
        <div className="role-steps">
          {steps.map((s, i) => (
            <div className="role-step" key={i}>
              <div
                className="role-step-dot"
                style={{ background: tagClass === 'tx' ? 'var(--blue-dim)' : 'var(--purple-dim)', color: accentColor, border: '1px solid transparent' }}
              >
                {i + 1}
              </div>
              {s}
            </div>
          ))}
        </div>
        <div className="role-cta" style={{ color: accentColor }}>
          <span>{cta}</span>
          <ArrowRightIcon size={16} />
        </div>
      </div>
    </button>
  )
}
