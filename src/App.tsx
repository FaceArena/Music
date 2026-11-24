import { motion } from 'framer-motion'
import { AudioLines, Disc3, Headphones, Library, Search } from 'lucide-react'

const navigation = [
  { label: 'Главная', icon: Headphones, active: true },
  { label: 'Поиск', icon: Search, active: false },
  { label: 'Моя музыка', icon: Library, active: false },
]

export default function App() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="/" aria-label="Kimo — главная">
          <img className="brand-mark" src="/kimo-mark.svg" alt="" />
          <span>kimo</span>
        </a>

        <nav className="navigation" aria-label="Основная навигация">
          {navigation.map(({ label, icon: Icon, active }) => (
            <button className={active ? 'nav-item active' : 'nav-item'} key={label} type="button">
              <Icon size={19} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-note">
          <span className="note-orb" />
          <p>Твоя музыка.<br />Твоё пространство.</p>
        </div>
      </aside>

      <section className="main-panel">
        <header className="topbar">
          <span className="eyebrow">ТВОЁ ЗВУЧАНИЕ</span>
          <button className="profile-button" type="button" aria-label="Профиль">K</button>
        </header>

        <motion.section
          className="welcome"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="welcome-copy">
            <span className="section-kicker">WELCOME TO KIMO</span>
            <h1>Почувствуй<br /><span>свой ритм.</span></h1>
            <p>Музыка для каждого момента.</p>
          </div>
          <motion.div
            className="disc-art"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            aria-hidden="true"
          >
            <div className="disc-ring"><div className="disc-center"><AudioLines size={25} /></div></div>
          </motion.div>
        </motion.section>

        <section className="content-section">
          <div className="section-heading">
            <div>
              <span className="section-kicker">ТВОЯ КОЛЛЕКЦИЯ</span>
              <h2>Начни с музыки</h2>
            </div>
            <span className="coming-soon">СКОРО</span>
          </div>
          <div className="empty-state">
            <div className="empty-icon"><Disc3 size={25} /></div>
            <h3>Здесь будет твоя музыка</h3>
            <p>Подключим источники, поиск и импорт плейлистов на следующих этапах.</p>
          </div>
        </section>
      </section>

      <footer className="player-bar">
        <div className="track-placeholder">
          <div className="track-art"><AudioLines size={17} /></div>
          <div><strong>Ничего не играет</strong><span>Выбери свой первый трек</span></div>
        </div>
        <div className="player-center">
          <button className="play-button" type="button" disabled aria-label="Воспроизвести">
            <span />
          </button>
          <div className="progress-track"><span /></div>
        </div>
        <span className="player-status">PLAYER READY</span>
      </footer>
    </main>
  )
}