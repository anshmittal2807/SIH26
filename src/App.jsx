import { useEffect, useState } from 'react'

const Icon = ({ name, size = 22, className = '' }) => {
  const paths = {
    home: <><path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></>,
    fish: <><path d="M4 12c3-5 8-7 14-5l3-3v7l-3-2c-5 6-10 6-14 3Z"/><path d="M4 12 1 8v8l3-4ZM14 9h.01"/></>,
    cloud: <><path d="M17.5 19H6a4 4 0 0 1-.4-8 6.5 6.5 0 0 1 12.6-1.4A4.8 4.8 0 0 1 17.5 19Z"/><path d="M8 22v-1M12 22v-1M16 22v-1"/></>,
    route: <><circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M7.7 17.8c3.2-2 1.4-5.3 4.4-7.2 1.4-.9 2.9-.6 4.1-1.7"/></>,
    shield: <><path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z"/><path d="m8.5 12 2.2 2.2 4.8-4.8"/></>,
    message: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.5-5A7 7 0 0 1 3 12V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v7Z"/>,
    history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    wind: <><path d="M3 8h10c3 0 3-4 0-4-1 0-1.8.5-2.2 1.4M3 12h16c3 0 3-4 0-4-1 0-1.8.5-2.2 1.4M3 16h9c3 0 3 4 0 4-1 0-1.8-.5-2.2-1.4"/></>,
    waves: <><path d="M2 9c2.7 0 2.7-2 5.3-2s2.7 2 5.4 2 2.6-2 5.3-2 2.7 2 4 2M2 15c2.7 0 2.7-2 5.3-2s2.7 2 5.4 2 2.6-2 5.3-2 2.7 2 4 2"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>,
    contrast: <><circle cx="12" cy="12" r="9"/><path d="M12 3v18M12 7a5 5 0 0 1 0 10"/></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c1 .3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z"/>,
    mic: <><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5M8 22h8"/></>,
    send: <><path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    alert: <><path d="M10.3 3.7 2.2 18a2 2 0 0 0 1.7 3h16.2a2 2 0 0 0 1.7-3L13.7 3.7a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/></>,
    info: <><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/></>,
    bookmark: <path d="M6 3h12v18l-6-4-6 4V3Z"/>,
    speaker: <><path d="M11 5 6 9H3v6h3l5 4V5ZM15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12"/></>,
    plus: <path d="M12 5v14M5 12h14"/>,
    minus: <path d="M5 12h14"/>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></>,
    boat: <><path d="m3 14 2 6h14l2-6H3ZM7 14V6h7l3 8M7 9h9"/><path d="M2 22c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1"/></>,
  }
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

const copy = {
  en: {
    app: 'ORCA', tagline: 'Coastal decision service', connected: 'Data connected', location: 'Kochi Harbour', greeting: 'Good morning, Deepak', planTitle: 'Plan today’s trip', sub: 'Here is what the Arabian Sea looks like today.',
    safeTitle: 'Safe to leave until 11:00 AM', safeBody: 'Conditions are calm near the coast. Return before the afternoon wind strengthens.', ask: 'Ask ORCA anything', placeholder: 'Can I go fishing now?', recommended: 'Recommended fishing zone', why: 'Why this zone?', openRoute: 'Show safe route', todaysPlan: "Today's simple plan",
    nav: { home:'Home', zones:'Fishing zones', weather:'Sea & weather', route:'Safe route', safety:'Safety & alerts', assistant:'Ask ORCA', history:'Trip history', settings:'Accessibility' },
  },
  hi: {
    app: 'ORCA', tagline: 'तटीय निर्णय सेवा', connected: 'डेटा जुड़ा है', location: 'कोच्चि बंदरगाह', greeting: 'सुप्रभात, दीपक', planTitle: 'आज की यात्रा की योजना', sub: 'आज अरब सागर की स्थिति ऐसी है।',
    safeTitle: 'सुबह 11 बजे तक समुद्र सुरक्षित है', safeBody: 'तट के पास समुद्र शांत है। दोपहर की हवा तेज़ होने से पहले लौटें।', ask: 'ORCA से पूछें', placeholder: 'क्या मैं अभी मछली पकड़ने जा सकता हूँ?', recommended: 'सुझाया गया मछली क्षेत्र', why: 'यह क्षेत्र क्यों?', openRoute: 'सुरक्षित रास्ता देखें', todaysPlan: 'आज की सरल योजना',
    nav: { home:'होम', zones:'मछली क्षेत्र', weather:'समुद्र और मौसम', route:'सुरक्षित रास्ता', safety:'सुरक्षा अलर्ट', assistant:'ORCA से पूछें', history:'यात्रा इतिहास', settings:'पहुंच सुविधाएँ' },
  },
  ml: {
    app: 'ഓർക്ക', tagline: 'തീരദേശ തീരുമാന സേവനം', connected: 'ഡാറ്റ ലഭ്യമാണ്', location: 'കൊച്ചി തുറമുഖം', greeting: 'സുപ്രഭാതം, ദീപക്', planTitle: 'ഇന്നത്തെ യാത്ര ആസൂത്രണം ചെയ്യുക', sub: 'ഇന്നത്തെ അറബിക്കടൽ സ്ഥിതി ഇതാണ്.',
    safeTitle: 'രാവിലെ 11 വരെ കടലിൽ പോകാം', safeBody: 'തീരത്തിനടുത്ത് കടൽ ശാന്തമാണ്. ഉച്ചകഴിഞ്ഞ് കാറ്റ് ശക്തമാകുന്നതിന് മുമ്പ് മടങ്ങുക.', ask: 'ഓർക്കയോട് ചോദിക്കൂ', placeholder: 'ഇപ്പോൾ മീൻപിടിക്കാൻ പോകാമോ?', recommended: 'ശുപാർശ ചെയ്യുന്ന മത്സ്യബന്ധന മേഖല', why: 'ഈ മേഖല എന്തുകൊണ്ട്?', openRoute: 'സുരക്ഷിത വഴി കാണിക്കുക', todaysPlan: 'ഇന്നത്തെ ലളിതമായ പദ്ധതി',
    nav: { home:'ഹോം', zones:'മത്സ്യ മേഖലകൾ', weather:'കടലും കാലാവസ്ഥയും', route:'സുരക്ഷിത വഴി', safety:'സുരക്ഷാ അറിയിപ്പുകൾ', assistant:'ഓർക്കയോട് ചോദിക്കൂ', history:'യാത്രാ ചരിത്രം', settings:'പ്രവേശന സൗകര്യം' },
  },
}

const zoneData = [
  { id:'B', name:'Bluefin Shelf', local:'ബ്ലൂഫിൻ ഷെൽഫ്', distance:'19.6 nm', time:'2 hr 18 min', fish:77, risk:'Low risk', riskLevel:'good', wave:'1.1 m', wind:'11 kn', note:'Good catch chance with calm water and a clear legal boundary.' },
  { id:'C', name:'Coral Reach', local:'കോറൽ റീച്ച്', distance:'23.1 nm', time:'2 hr 46 min', fish:71, risk:'Medium risk', riskLevel:'watch', wave:'1.8 m', wind:'17 kn', note:'Usable backup zone. Cross-current may use more fuel.' },
  { id:'A', name:'Aster Bank', local:'ആസ്റ്റർ ബാങ്ക്', distance:'28.4 nm', time:'3 hr 12 min', fish:82, risk:'High risk', riskLevel:'danger', wave:'2.7 m', wind:'26 kn', note:'Catch chance is high, but waves are building near a restricted boundary.' },
]

const navItems = [['home','home'],['zones','fish'],['weather','cloud'],['route','route'],['safety','shield'],['assistant','message'],['history','history'],['settings','settings']]

function App() {
  const [page, setPage] = useState('home')
  const [language, setLanguage] = useState('en')
  const [theme, setTheme] = useState('day')
  const [textSize, setTextSize] = useState('medium')
  const [reducedMotion, setReducedMotion] = useState(false)
  const [selectedZone, setSelectedZone] = useState('B')
  const [toast, setToast] = useState('')
  const [showEmergency, setShowEmergency] = useState(false)
  const t = copy[language]
  const zone = zoneData.find(item => item.id === selectedZone)
  const go = (next) => { setPage(next); window.scrollTo({top:0, behavior: reducedMotion ? 'auto' : 'smooth'}) }
  const notify = (message) => { setToast(message); window.setTimeout(() => setToast(''), 2500) }
  const nextLanguage = language === 'en' ? 'hi' : language === 'hi' ? 'ml' : 'en'
  const nextLanguageLabel = language === 'en' ? 'हिन्दी' : language === 'hi' ? 'മലയാളം' : 'English'
  useEffect(() => { document.documentElement.lang = language }, [language])

  return <div className={`app theme-${theme} text-${textSize} ${reducedMotion ? 'reduce-motion' : ''}`}>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <header className="topbar">
      <div className="brand" onClick={() => go('home')} role="button" tabIndex="0" onKeyDown={(e) => e.key === 'Enter' && go('home')}><span className="brand-mark"><Icon name="waves"/></span><span><strong>{t.app}</strong><small>{t.tagline}</small></span></div>
      <div className="sector-code"><span>SIH 2026 · Student prototype</span><strong>PS 176 / Coastal India</strong></div>
      <div className="harbour-pill"><Icon name="location" size={18}/><span><strong>{t.location}</strong><small><i/>{t.connected} · Updated 2 min ago</small></span></div>
      <div className="top-actions"><div className="service-time"><strong>05:42</strong><span>IST · 08 SEP</span></div><button className="language-button" onClick={() => setLanguage(nextLanguage)} aria-label={`Change language. Current language ${language}`}>{nextLanguageLabel}</button><button className="icon-button" onClick={() => go('settings')} aria-label="Open accessibility settings"><Icon name="settings"/></button><button className="header-emergency" onClick={() => go('safety')}><Icon name="phone" size={18}/><span>SOS · 1093</span></button></div>
    </header>
    <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(([id, icon], index) => <NavItem key={id} id={id} icon={icon} index={index + 1} label={t.nav[id]} current={page} onClick={go}/>)}<div className="india-pilot"><span className="india-wheel">✦</span><div><strong>INDIA COASTAL PILOT</strong><small>Built for low-connectivity use</small></div></div></nav>
    <div className="app-shell">
      <main id="main-content" className="main-content" tabIndex="-1">
        {page === 'home' && <Home t={t} language={language} go={go} zone={zone} notify={notify}/>} 
        {page === 'zones' && <Zones language={language} selected={selectedZone} setSelected={setSelectedZone} go={go}/>} 
        {page === 'weather' && <Weather/>}{page === 'route' && <Route zone={zone} language={language} setZone={setSelectedZone} notify={notify}/>} 
        {page === 'safety' && <Safety onEmergency={() => setShowEmergency(true)} notify={notify}/>} 
        {page === 'assistant' && <Assistant language={language}/>} {page === 'history' && <History go={go}/>} 
        {page === 'settings' && <Settings theme={theme} setTheme={setTheme} textSize={textSize} setTextSize={setTextSize} language={language} setLanguage={setLanguage} reducedMotion={reducedMotion} setReducedMotion={setReducedMotion} notify={notify}/>} 
      </main>
    </div>
    <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.slice(0,5).map(([id, icon]) => <NavItem key={id} id={id} icon={icon} label={t.nav[id]} current={page} onClick={go}/>)}</nav>
    {toast && <div className="toast" role="status" aria-live="polite"><Icon name="check" size={18}/>{toast}</div>}
    {showEmergency && <EmergencyDialog onClose={() => setShowEmergency(false)} notify={notify}/>} 
  </div>
}

function Home({ t, language, go, zone, notify }) {
  const [question, setQuestion] = useState('')
  const [listening, setListening] = useState(false)
  const submit = () => { if (question.trim()) { go('assistant'); notify('Question sent to ORCA') } }
  return <div className="page home-page">
    <header className="field-heading"><div><span>Kochi, Kerala · Arabian Sea · അറബിക്കടൽ</span><h1>{t.planTitle}</h1><p>{t.sub}</p></div><button onClick={() => notify('Reading today’s plan aloud')}><Icon name="speaker"/><span>Listen / सुनें / കേൾക്കുക</span></button></header>

    <section className="departure-board" aria-labelledby="sea-status-title">
      <div className="departure-verdict"><span>Departure advice</span><strong>GO</strong><small>Conditions are suitable</small></div>
      <div className="departure-window"><span className="board-label">BEST WINDOW</span><h2 id="sea-status-title">Leave by 6:30 AM.<br/>Begin return at 10:00 AM.</h2><p>{t.safeBody}</p></div>
      <div className="departure-conditions"><div><Icon name="wind"/><span>Wind · हवा · കാറ്റ്<strong>11 kn</strong><small>Gentle</small></span></div><div><Icon name="waves"/><span>Waves · लहर · തിര<strong>1.1 m</strong><small>Calm</small></span></div><div><Icon name="cloud"/><span>Rain · बारिश · മഴ<strong>20%</strong><small>Low chance</small></span></div><button onClick={() => go('weather')}>See full forecast <Icon name="arrow"/></button></div>
    </section>

    <div className="field-layout">
      <section className="route-story">
        <div className="story-head"><div><span className="board-label">TODAY’S RECOMMENDATION</span><h2>{language === 'ml' ? zone.local : zone.name}</h2><p>Zone {zone.id} · {zone.distance} from harbour</p></div><div className="hand-score"><strong>{zone.fish}</strong><span>catch<br/>chance</span></div></div>
        <div className="route-thread" aria-label="Suggested journey timeline"><div className="thread-stop start"><i><Icon name="boat"/></i><span><small>06:00</small><strong>Kochi Harbour</strong><em>Start</em></span></div><div className="thread-line"><span>19.6 nautical miles</span></div><div className="thread-stop"><i><Icon name="location"/></i><span><small>08:18</small><strong>Bluefin Shelf</strong><em>Fish inside marked area</em></span></div><div className="thread-line return"><span>Return before wind builds</span></div><div className="thread-stop finish"><i><Icon name="shield"/></i><span><small>10:55</small><strong>Back at harbour</strong><em>Safe arrival</em></span></div></div>
        <div className="editorial-note"><span>Why Zone B</span><p>{zone.note} It gives a better balance of catch, fuel use, and safety than the other available zones.</p></div>
        <div className="story-actions"><button className="primary-button" onClick={() => go('route')}>Open this route <Icon name="arrow"/></button><button className="text-button" onClick={() => go('zones')}>Compare all zones</button></div>
      </section>

      <aside className="field-sidebar">
        <section className="ask-strip"><span className="board-label">ASK ORCA</span><h2>What do you need to know?</h2><p>Ask in your own words.</p><label className="sr-only" htmlFor="home-question">Question for ORCA</label><div className="ask-line"><input id="home-question" value={question} onChange={e => setQuestion(e.target.value)} onKeyDown={e => e.key === 'Enter' && submit()} placeholder={t.placeholder}/><button className={listening ? 'is-listening' : ''} onClick={() => { setListening(!listening); notify(listening ? 'Voice input stopped' : 'Listening…') }} aria-label={listening ? 'Stop voice input' : 'Start voice input'}><Icon name="mic"/></button><button onClick={submit} aria-label="Send question"><Icon name="arrow"/></button></div></section>
        <section className="watch-list"><div className="watch-title"><span className="board-label">KEEP WATCH</span><button onClick={() => go('safety')}>All alerts</button></div><div className="watch-item warning"><Icon name="wind"/><div><strong>Wind rises after 11 AM</strong><p>Small boats should return early.</p></div><span>11:00</span></div><div className="watch-item"><Icon name="shield"/><div><strong>No cyclone warning</strong><p>Next 48 hours are clear.</p></div><span>Clear</span></div><div className="watch-item"><Icon name="location"/><div><strong>Boundary is clear</strong><p>Zone B has 9.4 nm clearance.</p></div><span>Safe</span></div></section>
        <div className="source-stamp"><Icon name="check"/><div><strong>Checked against Indian marine sources</strong><span>INCOIS · IMD · NavIC · Indian Coast Guard</span></div></div>
        <div className="offline-stamp"><Icon name="bookmark"/><div><strong>Available even when signal is weak</strong><span>Latest advice saved on this phone at 05:40 IST</span></div></div>
      </aside>
    </div>
  </div>
}

function Zones({ language, selected, setSelected, go }) {
  const current = zoneData.find(z => z.id === selected)
  return <div className="page"><PageHeading eyebrow="UPDATED 4 MINUTES AGO" title="Fishing zones" description="Zones are ranked by safety first, then by catch chance."/><div className="zones-layout"><section className="zone-list" aria-label="Available fishing zones">{zoneData.map((zone, index) => <button key={zone.id} onClick={() => setSelected(zone.id)} className={`zone-list-item ${selected === zone.id ? 'selected' : ''}`} aria-pressed={selected === zone.id}><span className="rank">{index + 1}</span><span className={`zone-letter ${zone.riskLevel}`}>{zone.id}</span><span className="zone-list-copy"><strong>{language === 'ml' ? zone.local : zone.name}</strong><small>{zone.distance} · {zone.time}</small></span><span className={`status-badge ${zone.riskLevel}`}><Icon name={zone.riskLevel === 'danger' ? 'alert' : 'shield'} size={14}/>{zone.risk}</span><Icon name="chevron" size={18}/></button>)}<div className="simple-note"><Icon name="info"/><p><strong>Safety comes first.</strong> Zone A has more fish, but ORCA recommends Zone B because its waves and legal clearance are safer.</p></div></section>
      <section className="card simple-map" aria-label="Map of fishing zones"><div className="map-water"><div className="map-land"><span>KOCHI</span></div><div className="boat-marker"><Icon name="boat" size={26}/><span>You</span></div><div className="safe-route-line"/>{zoneData.map(z => <button key={z.id} onClick={() => setSelected(z.id)} className={`map-zone zone-${z.id.toLowerCase()} ${selected === z.id ? 'selected' : ''}`} aria-label={`${z.name}, ${z.risk}`}><b>{z.id}</b><span>{z.risk}</span></button>)}<div className="map-key"><span><i className="good"/>Safer</span><span><i className="watch"/>Take care</span><span><i className="danger"/>Avoid</span></div></div><div className="map-detail"><div><span className="plain-label">SELECTED ZONE</span><h2>{current.name}</h2><p>{current.note}</p></div><button className="primary-button" onClick={() => go('route')}>Plan route <Icon name="arrow"/></button></div></section></div></div>
}

function Weather() {
  const forecast = [['6 AM','10 kn','0.9 m','Good'],['8 AM','11 kn','1.1 m','Good'],['10 AM','15 kn','1.4 m','Watch'],['12 PM','20 kn','2.0 m','Avoid'],['2 PM','25 kn','2.6 m','Avoid']]
  return <div className="page"><PageHeading eyebrow="KOCHI COAST · TODAY" title="Sea and weather" description="A simple view of the conditions that matter while fishing."/><section className="weather-hero card"><div className="weather-main"><span className="weather-symbol"><Icon name="sun" size={38}/></span><div><span>NOW</span><strong>29°C</strong><p>Bright with gentle wind</p></div></div><div className="weather-advice"><span className="status-symbol good"><Icon name="check"/></span><div><strong>Good conditions this morning</strong><p>Plan to be back before 11 AM.</p></div></div></section><section className="card forecast-card"><div className="section-heading"><div><span className="plain-label">HOUR BY HOUR</span><h2>How the sea will change</h2></div></div><div className="forecast-scroll">{forecast.map(([time,wind,wave,label],i) => <div className={`forecast-item ${i > 2 ? 'danger' : i === 2 ? 'watch' : 'good'}`} key={time}><strong>{time}</strong><Icon name={i > 2 ? 'cloud' : 'sun'} /><span><Icon name="wind" size={15}/>{wind}</span><span><Icon name="waves" size={15}/>{wave}</span><b>{label}</b></div>)}</div></section><div className="weather-grid"><section className="card condition-list"><span className="plain-label">CURRENT CONDITIONS</span><h2>What you need to know</h2><Condition icon="wind" title="Wind" value="11 knots WSW" note="Gentle now; stronger after 11 AM" status="good"/><Condition icon="waves" title="Wave height" value="1.1 metres" note="Comfortable for small boats" status="good"/><Condition icon="cloud" title="Rain" value="20% chance" note="No heavy rain expected" status="good"/><Condition icon="alert" title="Lightning" value="No warning" note="Monitoring continues" status="good"/></section><section className="card tide-card"><span className="plain-label">TIDE</span><h2>Rising until 9:40 AM</h2><div className="tide-visual"><div className="tide-water"/><div className="tide-point p1"><i/><span>5:10<br/>Low</span></div><div className="tide-point p2"><i/><span>9:40<br/>High</span></div><div className="tide-point p3"><i/><span>3:55<br/>Low</span></div></div><div className="simple-note"><Icon name="info"/><p><strong>What this means:</strong> The rising tide and gentle current support an easier trip out of the harbour this morning.</p></div></section></div></div>
}

function Route({ zone, language, setZone, notify }) {
  return <div className="page"><PageHeading eyebrow="SAFETY-CHECKED ROUTE" title="Safe route" description="Follow the green path and return before conditions change."/><div className="destination-switch" aria-label="Choose destination">{zoneData.map(z => <button key={z.id} onClick={() => setZone(z.id)} className={zone.id === z.id ? 'active' : ''}>Zone {z.id}<span>{z.name}</span></button>)}</div><section className="route-summary card"><div><span className="plain-label">YOUR DESTINATION</span><h2>{language === 'ml' ? zone.local : zone.name}</h2><p>Leaving Kochi Harbour at 6:00 AM</p></div><div className="route-numbers"><span><b>{zone.distance}</b>Distance</span><span><b>{zone.time}</b>Travel time</span><span><b>10:55 AM</b>Back at harbour</span></div></section><div className="route-layout"><section className="card route-map"><div className="route-water"><div className="map-land wide"><span>KOCHI<br/>HARBOUR</span></div><div className="route-path"><i/><i/><i/></div><div className="start-pin"><Icon name="boat"/><span>Start</span></div><div className={`destination-pin ${zone.riskLevel}`}><b>{zone.id}</b><span>{zone.name}</span></div><div className="avoid-area"><Icon name="alert" size={18}/><span>Stay outside<br/>restricted area</span></div></div></section><section className="card route-steps"><span className="plain-label">FOLLOW THESE STEPS</span><h2>Directions</h2><RouteStep n="1" title="Leave through the marked channel" text="Keep the green harbour buoys on your right."/><RouteStep n="2" title="Travel west for 11 nautical miles" text="Waves remain below 1.2 metres."/><RouteStep n="3" title="Turn southwest after the yellow buoy" text="This avoids the shipping lane."/><RouteStep n="4" title={`Enter fishing Zone ${zone.id}`} text="ORCA will alert you near the safe-area edge."/><button className="primary-button full" onClick={() => notify('Route saved for offline use')}><Icon name="bookmark"/>Save route offline</button><button className="secondary-button full" onClick={() => notify('Trip plan shared with registered family contact')}><Icon name="message"/>Share plan with family</button></section></div></div>
}

function Safety({ onEmergency, notify }) {
  return <div className="page"><PageHeading eyebrow="HELP WHEN YOU NEED IT" title="Safety and alerts" description="Important warnings are written clearly and can be heard aloud."/><section className="emergency-card"><div className="emergency-icon"><Icon name="phone" size={30}/></div><div><span>EMERGENCY HELP</span><h2>Are you in danger at sea?</h2><p>Send your boat location and call the Coast Guard.</p></div><button onClick={onEmergency}>Get emergency help</button></section><div className="alert-layout"><section className="card alerts-list"><div className="section-heading"><div><span className="plain-label">ACTIVE FOR YOUR AREA</span><h2>Current alerts</h2></div><button className="icon-button" aria-label="Read alerts aloud" onClick={() => notify('Reading alerts aloud')}><Icon name="speaker"/></button></div><AlertItem status="watch" title="Strong wind after 11 AM" time="Today · 11:00 AM to 5:00 PM" text="Small boats should return to harbour before the wind strengthens."/><AlertItem status="danger" title="Restricted area near Aster Bank" time="Always active" text="Keep at least 2 nautical miles away from the marked boundary."/><AlertItem status="good" title="No cyclone warning" time="Checked 6 minutes ago" text="No cyclone threat is expected in the next 48 hours."/></section><section className="card safety-checklist"><span className="plain-label">BEFORE YOU LEAVE</span><h2>5-point boat check</h2>{['Life jackets for everyone','Enough fuel for return','Phone and VHF radio charged','Drinking water on board','Family knows your plan'].map((item,i) => <label key={item}><input type="checkbox" defaultChecked={i < 2}/><span><i><Icon name="check" size={15}/></i>{item}</span></label>)}<p>Complete all five checks before leaving the harbour.</p></section></div><section className="contacts-row"><Contact name="Indian Coast Guard" number="1554"/><Contact name="Marine Police" number="1093"/><Contact name="INCOIS Helpdesk" number="1800 425 3227"/></section></div>
}

function Assistant({ language }) {
  const [messages, setMessages] = useState([{from:'user',text:'Can I go fishing tomorrow morning?'},{from:'orca',text:'Yes. The safest window is from 6:00 AM to 10:00 AM. I recommend Zone B because the sea is calmer and the legal boundary is clear.'}])
  const [value, setValue] = useState(''); const [thinking, setThinking] = useState(false)
  const send = (prompt=value) => { if (!prompt.trim()) return; setMessages(m=>[...m,{from:'user',text:prompt}]); setValue(''); setThinking(true); setTimeout(()=>{setMessages(m=>[...m,{from:'orca',text:'Zone B is the safer choice. Waves are 1.1 metres, wind is gentle, and you can return before conditions worsen. I can also show the route.'}]);setThinking(false)},900) }
  const assistantTitle = language === 'ml' ? 'ഓർക്കയോട് ചോദിക്കൂ' : language === 'hi' ? 'ORCA से पूछें' : 'Ask ORCA'
  return <div className="page assistant-page"><PageHeading eyebrow="PLAIN-LANGUAGE HELP" title={assistantTitle} description="Ask about fishing, weather, routes, or safety in your own words."/><div className="assistant-layout"><section className="chat-card card" aria-label="Conversation with ORCA"><div className="chat-top"><span className="brand-mark small"><Icon name="waves"/></span><div><strong>ORCA assistant</strong><span><i/>Using Indian marine data</span></div><button className="icon-button" aria-label="Read conversation aloud"><Icon name="speaker"/></button></div><div className="messages" aria-live="polite">{messages.map((m,i)=><div className={`message ${m.from}`} key={i}>{m.from === 'orca' && <span className="message-avatar">O</span>}<p>{m.text}</p></div>)}{thinking && <div className="message orca"><span className="message-avatar">O</span><p className="thinking">Checking weather, waves, and boundaries…</p></div>}</div><div className="chat-input"><label className="sr-only" htmlFor="chat-message">Message ORCA</label><input id="chat-message" value={value} onChange={e=>setValue(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="Type your question…"/><button aria-label="Use voice"><Icon name="mic"/></button><button className="send-button" onClick={()=>send()} aria-label="Send message"><Icon name="send"/></button></div></section><aside className="ask-examples"><span className="plain-label">TRY ASKING</span><h2>Common questions</h2>{['Is it safe to leave now?','Which zone has sardines?','Show me a safe route','When will the tide change?','Are there any warnings?'].map(q=><button key={q} onClick={()=>send(q)}><Icon name="message" size={18}/><span>{q}</span><Icon name="chevron" size={17}/></button>)}<div className="privacy-note"><Icon name="shield"/><p>Your questions stay on this device in this demo.</p></div></aside></div></div>
}

function History({ go }) {
  const trips = [['06 Sep','Bluefin Shelf','Safe trip','18.2 kg','4h 22m'],['02 Sep','Coral Reach','Safe trip','12.6 kg','5h 05m'],['28 Aug','Bluefin Shelf','Returned early','9.4 kg','3h 10m']]
  return <div className="page"><PageHeading eyebrow="PAST JOURNEYS" title="Trip history" description="Review previous routes, warnings, and fishing results."/><section className="history-summary"><Stat icon="boat" label="Trips this month" value="8" note="All returned safely" status="good"/><Stat icon="fish" label="Total catch" value="96 kg" note="This month" status="plain"/><Stat icon="shield" label="Safety score" value="100%" note="No incidents" status="good"/></section><section className="card trips-card"><div className="section-heading"><div><span className="plain-label">RECENT</span><h2>Your trips</h2></div></div>{trips.map(([date,place,status,catchKg,duration],i)=><button className="trip-row" key={date} onClick={()=>go('route')}><span className="trip-date">{date}</span><span className="trip-place"><strong>{place}</strong><small>{duration}</small></span><span className={`status-badge ${i===2?'watch':'good'}`}><Icon name={i===2?'alert':'check'} size={14}/>{status}</span><span><strong>{catchKg}</strong><small>Catch</small></span><Icon name="chevron"/></button>)}</section></div>
}

function Settings({ theme, setTheme, textSize, setTextSize, language, setLanguage, reducedMotion, setReducedMotion, notify }) {
  return <div className="page settings-page"><PageHeading eyebrow="MAKE ORCA COMFORTABLE" title="Accessibility and display" description="Choose how the app looks, reads, and moves. Changes apply immediately."/><section className="settings-section card"><div className="setting-copy"><span className="setting-icon"><Icon name="contrast"/></span><div><h2>Screen theme</h2><p>Choose the clearest view for where you are.</p></div></div><div className="choice-grid theme-choices"><Choice active={theme==='day'} onClick={()=>setTheme('day')} icon="sun" title="Day" note="Bright sunlight"/><Choice active={theme==='night'} onClick={()=>setTheme('night')} icon="moon" title="Night" note="Low light"/><Choice active={theme==='contrast'} onClick={()=>setTheme('contrast')} icon="contrast" title="High contrast" note="Strong edges"/></div></section><section className="settings-section card"><div className="setting-copy"><span className="setting-icon"><Icon name="eye"/></span><div><h2>Text size</h2><p>Make every word comfortable to read.</p></div></div><div className="choice-grid"><Choice active={textSize==='medium'} onClick={()=>setTextSize('medium')} icon="minus" title="Standard" note="Default size"/><Choice active={textSize==='large'} onClick={()=>setTextSize('large')} icon="plus" title="Large" note="Easier to read"/><Choice active={textSize==='xlarge'} onClick={()=>setTextSize('xlarge')} icon="plus" title="Extra large" note="Largest text"/></div></section><section className="settings-section card"><div className="setting-copy"><span className="setting-icon language-icon">अ</span><div><h2>Language</h2><p>Use the language you know best.</p></div></div><div className="choice-grid language-choices"><button className={language==='en'?'active':''} onClick={()=>setLanguage('en')}><span>English</span><Icon name="check"/></button><button className={language==='hi'?'active':''} onClick={()=>setLanguage('hi')}><span>हिन्दी</span><Icon name="check"/></button><button className={language==='ml'?'active':''} onClick={()=>setLanguage('ml')}><span>മലയാളം</span><Icon name="check"/></button></div></section><section className="settings-section card compact"><div className="setting-copy"><span className="setting-icon"><Icon name="speaker"/></span><div><h2>Read information aloud</h2><p>Hear important weather and safety messages.</p></div></div><button className="secondary-button" onClick={()=>notify('Reading the current sea status aloud')}>Test voice</button></section><section className="settings-section card compact"><div className="setting-copy"><span className="setting-icon"><Icon name="route"/></span><div><h2>Reduce movement</h2><p>Turn off moving and animated effects.</p></div></div><Switch checked={reducedMotion} onChange={setReducedMotion} label="Reduce movement"/></section></div>
}

const PageHeading = ({ eyebrow, title, description }) => <header className="page-heading"><span>{eyebrow}</span><h1>{title}</h1><p>{description}</p></header>
const NavItem = ({ id, icon, label, current, onClick, index }) => <button onClick={() => onClick(id)} className={`nav-item ${current === id ? 'active' : ''}`} aria-current={current === id ? 'page' : undefined}>{index && <small className="nav-index">{String(index).padStart(2,'0')}</small>}<Icon name={icon}/><span>{label}</span></button>
const Stat = ({ icon,label,value,note,status }) => <div className="stat"><span className={`stat-icon ${status}`}><Icon name={icon}/></span><span><small>{label}</small><strong>{value}</strong><em>{note}</em></span></div>
const PlanStep = ({ number,time,title,text,status,last }) => <div className={`plan-step ${last?'last':''}`}><span className="step-number">{number}</span><time>{time}</time><div><strong>{title}</strong><p>{text}</p></div><span className="step-tag">{status}</span></div>
const Condition = ({ icon,title,value,note,status }) => <div className="condition"><span className={`stat-icon ${status}`}><Icon name={icon}/></span><div><strong>{title}</strong><p>{note}</p></div><b>{value}</b></div>
const RouteStep = ({ n,title,text }) => <div className="route-step"><span>{n}</span><div><strong>{title}</strong><p>{text}</p></div></div>
const AlertItem = ({ status,title,time,text }) => <article className={`alert-item ${status}`}><span className="alert-symbol"><Icon name={status==='good'?'check':'alert'}/></span><div><span>{time}</span><h3>{title}</h3><p>{text}</p></div><button aria-label={`Read ${title} aloud`}><Icon name="speaker"/></button></article>
const Contact = ({ name,number }) => <div className="contact"><span className="stat-icon"><Icon name="phone"/></span><div><strong>{name}</strong><span>{number}</span></div><button onClick={()=>{}} aria-label={`Call ${name}`}>Call</button></div>
const Choice = ({active,onClick,icon,title,note}) => <button onClick={onClick} className={active?'active':''} aria-pressed={active}><Icon name={icon}/><span><strong>{title}</strong><small>{note}</small></span>{active&&<Icon name="check" size={18}/>}</button>
const Switch = ({checked,onChange,label}) => <button className={`switch ${checked?'on':''}`} role="switch" aria-checked={checked} aria-label={label} onClick={()=>onChange(!checked)}><span/></button>

function EmergencyDialog({ onClose, notify }) {
  return <div className="dialog-backdrop" role="presentation" onMouseDown={e=>e.target===e.currentTarget&&onClose()}><section className="dialog" role="dialog" aria-modal="true" aria-labelledby="emergency-title"><span className="emergency-icon"><Icon name="alert" size={30}/></span><h2 id="emergency-title">Send an emergency alert?</h2><p>This demo will simulate sending your current boat location to the Coast Guard and your family contact.</p><div className="dialog-actions"><button className="secondary-button" onClick={onClose}>Cancel</button><button className="danger-button" onClick={()=>{onClose();notify('Demo emergency alert sent')}}><Icon name="phone"/>Send alert</button></div></section></div>
}

export default App
