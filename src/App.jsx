import { useEffect, useState } from 'react'

const icons = {
  waves: <><path d="M3 8c2.4 0 2.4-1.6 4.8-1.6S10.2 8 12.6 8 15 6.4 17.4 6.4 19.8 8 22 8"/><path d="M3 13c2.4 0 2.4-1.6 4.8-1.6s2.4 1.6 4.8 1.6 2.4-1.6 4.8-1.6S19.8 13 22 13"/><path d="M3 18c2.4 0 2.4-1.6 4.8-1.6s2.4 1.6 4.8 1.6 2.4-1.6 4.8-1.6S19.8 18 22 18"/></>,
  home: <><path d="m3 11 9-8 9 8"/><path d="M5 10v11h14V10M9 21v-7h6v7"/></>,
  fish: <><path d="M4 12c3-5 8-7 14-5l3-3v7l-3-2c-5 6-10 6-14 3Z"/><path d="M4 12 1 8v8l3-4ZM14 9h.01"/></>,
  cloud: <><path d="M17.5 19H6a4 4 0 0 1-.4-8 6.5 6.5 0 0 1 12.6-1.4A4.8 4.8 0 0 1 17.5 19Z"/><path d="M8 22v-1M12 22v-1M16 22v-1"/></>,
  route: <><circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M7.7 17.8c3.2-2 1.4-5.3 4.4-7.2 1.4-.9 2.9-.6 4.1-1.7"/></>,
  shield: <><path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z"/><path d="m8.5 12 2.2 2.2 4.8-4.8"/></>,
  message: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.5-5A7 7 0 0 1 3 12V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v7Z"/>,
  history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/></>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3A1.7 1.7 0 0 0 14 21v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/></>,
  location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  wind: <><path d="M3 8h10c3 0 3-4 0-4-1 0-1.8.5-2.2 1.4M3 12h16c3 0 3-4 0-4-1 0-1.8.5-2.2 1.4M3 16h9c3 0 3 4 0 4-1 0-1.8-.5-2.2-1.4"/></>,
  sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c1 .3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z"/>,
  check: <path d="m5 12 4 4L19 6"/>,
  alert: <><path d="M10.3 3.7 2.2 18a2 2 0 0 0 1.7 3h16.2a2 2 0 0 0 1.7-3L13.7 3.7a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/></>,
  arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
  chevron: <path d="m9 18 6-6-6-6"/>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  compass: <><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/></>,
  download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5M5 21h14"/></>,
  volume: <><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12"/></>,
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  send: <><path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/></>,
  boat: <><path d="m3 14 2 6h14l2-6H3ZM7 14V6h7l3 8M7 9h9"/><path d="M2 22c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1"/></>,
}

const Icon = ({ name, size = 20, className = '' }) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>

const nav = [
  ['home','home','Overview'],['zones','fish','Fishing zones'],['weather','cloud','Sea & weather'],['route','route','Safe route'],
  ['safety','shield','Safety'],['assistant','message','Ask ORCA'],['history','history','Trip history'],['settings','settings','Settings'],
]

const zones = [
  { id:'B', name:'Bluefin Shelf', risk:'Low risk', level:'safe', distance:'19.6 nm', duration:'2h 18m', catch:77, wave:'1.1 m', wind:'11 kn', species:'Sardine · Mackerel', lat:'9.84° N', lon:'76.02° E' },
  { id:'C', name:'Coral Reach', risk:'Moderate', level:'watch', distance:'23.1 nm', duration:'2h 46m', catch:68, wave:'1.8 m', wind:'17 kn', species:'Tuna · Anchovy', lat:'9.72° N', lon:'75.91° E' },
  { id:'A', name:'Aster Bank', risk:'High risk', level:'danger', distance:'28.4 nm', duration:'3h 12m', catch:86, wave:'2.7 m', wind:'26 kn', species:'Tuna · Mackerel', lat:'10.01° N', lon:'75.82° E' },
]

const copy = {
  en: { title:"Today's sea plan", subtitle:'A clear, safety-first briefing for the Kochi coast.', status:'Good morning, Deepak', go:'GO', verdict:'Safe to leave' },
  hi: { title:'आज की समुद्री योजना', subtitle:'कोच्चि तट के लिए साफ़ और सुरक्षित जानकारी।', status:'सुप्रभात, दीपक', go:'जाएँ', verdict:'निकलना सुरक्षित है' },
  ml: { title:'ഇന്നത്തെ കടൽ പദ്ധതി', subtitle:'കൊച്ചി തീരത്തേക്കുള്ള വ്യക്തമായ സുരക്ഷാ വിവരം.', status:'സുപ്രഭാതം, ദീപക്', go:'പോകാം', verdict:'പുറപ്പെടാൻ സുരക്ഷിതം' },
}

const chartSets = {
  catch: { label:'Catch potential', color:'#22c7b8', unit:'%', values:[58,68,77,82,75,61,44], min:0, max:100, note:'Best between 8:00–10:00 AM', detail:'Warm surface water and chlorophyll are aligned for sardine and mackerel.' },
  wind: { label:'Wind speed', color:'#72a7ff', unit:' kn', values:[8,9,11,14,18,22,25], min:0, max:30, note:'Wind rises sharply after 11:00 AM', detail:'Small boats should begin returning before the 18-knot threshold.' },
  waves: { label:'Wave height', color:'#f4b45e', unit:' m', values:[0.8,0.9,1.1,1.4,1.8,2.2,2.5], min:0, max:3, note:'Comfortable until late morning', detail:'Wave height remains below the 1.5 m small-boat limit until 11:00 AM.' },
}
const chartTimes = ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM']

function App() {
  const [page, setPage] = useState('home')
  const [language, setLanguage] = useState('en')
  const [selectedZone, setSelectedZone] = useState('B')
  const [theme, setTheme] = useState('day')
  const [toast, setToast] = useState('')
  const [mobileMenu, setMobileMenu] = useState(false)
  const currentZone = zones.find(z => z.id === selectedZone)
  const t = copy[language]
  const go = next => { setPage(next); setMobileMenu(false); window.scrollTo({ top:0, behavior:'smooth' }) }
  const notify = message => { setToast(message); window.clearTimeout(window.__orcaToast); window.__orcaToast = window.setTimeout(() => setToast(''), 2400) }
  useEffect(() => { document.documentElement.lang = language }, [language])

  return <div className={`app theme-${theme}`}>
    <a className="skip-link" href="#main">Skip to content</a>
    <aside className={`sidebar ${mobileMenu ? 'open' : ''}`}>
      <button className="brand" onClick={() => go('home')} aria-label="ORCA home"><span className="brand-symbol"><Icon name="waves" size={23}/></span><span><strong>ORCA</strong><small>Marine intelligence</small></span></button>
      <div className="pilot-label"><span>COASTAL PILOT</span><strong>Kochi · Kerala</strong></div>
      <nav aria-label="Main navigation"><span className="nav-caption">Plan your trip</span>{nav.slice(0,5).map(item => <NavButton key={item[0]} item={item} active={page} go={go}/>)}<span className="nav-caption second">Your ORCA</span>{nav.slice(5).map(item => <NavButton key={item[0]} item={item} active={page} go={go}/>)}</nav>
      <div className="sidebar-card"><span className="live-pulse"/><div><strong>All systems online</strong><small>Updated 2 minutes ago</small></div></div>
      <p className="source-note">INCOIS · IMD · NavIC</p>
    </aside>
    {mobileMenu && <button className="menu-scrim" onClick={() => setMobileMenu(false)} aria-label="Close menu"/>}
    <div className="workspace">
      <header className="topbar">
        <button className="mobile-menu" onClick={() => setMobileMenu(v => !v)} aria-label="Open menu"><Icon name={mobileMenu ? 'close' : 'menu'}/></button>
        <div className="mobile-brand"><span className="brand-symbol"><Icon name="waves" size={18}/></span><strong>ORCA</strong></div>
        <div className="location-chip"><Icon name="location" size={17}/><span><small>Current harbour</small><strong>Kochi Harbour</strong></span></div>
        <div className="top-actions"><span className="last-sync"><i/> Live · 05:42 IST</span><label className="language-select"><span className="sr-only">Select language</span><select value={language} onChange={e => setLanguage(e.target.value)}><option value="en">English</option><option value="hi">हिन्दी</option><option value="ml">മലയാളം</option></select><Icon name="chevron" size={15}/></label><button className="icon-button" onClick={() => go('settings')} aria-label="Open settings"><Icon name="settings"/></button><button className="sos-button" onClick={() => go('safety')}><Icon name="phone" size={17}/><span>SOS · 1093</span></button></div>
      </header>
      <main id="main" className="main" tabIndex="-1">
        {page === 'home' && <Dashboard t={t} zone={currentZone} selectedZone={selectedZone} setSelectedZone={setSelectedZone} go={go} notify={notify}/>} 
        {page === 'zones' && <Zones selected={selectedZone} setSelected={setSelectedZone} go={go}/>} 
        {page === 'weather' && <Weather/>}{page === 'route' && <RoutePage zone={currentZone} notify={notify}/>} 
        {page === 'safety' && <Safety notify={notify}/>} {page === 'assistant' && <Assistant/>} 
        {page === 'history' && <History/>} {page === 'settings' && <Settings theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} notify={notify}/>} 
      </main>
    </div>
    <nav className="mobile-nav" aria-label="Mobile navigation">{nav.slice(0,5).map(item => <NavButton key={item[0]} item={item} active={page} go={go}/>)}<button className={nav.slice(5).some(n => n[0] === page) ? 'nav-button active' : 'nav-button'} onClick={() => setMobileMenu(true)}><Icon name="menu"/><span>More</span></button></nav>
    {toast && <div className="toast" role="status"><Icon name="check" size={17}/>{toast}</div>}
  </div>
}

const NavButton = ({ item, active, go }) => <button className={`nav-button ${active === item[0] ? 'active' : ''}`} onClick={() => go(item[0])} aria-current={active === item[0] ? 'page' : undefined}><Icon name={item[1]}/><span>{item[2]}</span>{active === item[0] && <i/>}</button>

function Dashboard({ t, zone, selectedZone, setSelectedZone, go, notify }) {
  const [metric, setMetric] = useState('catch')
  return <div className="dashboard page-enter">
    <header className="page-header"><div><p className="eyebrow">{t.status}</p><h1>{t.title}</h1><p>{t.subtitle}</p></div><div className="header-actions"><button className="listen-button" onClick={() => notify('Playing today’s sea briefing')}><Icon name="volume" size={18}/> Listen</button><span className="date-chip">Saturday · 19 September</span></div></header>
    <section className="decision-card"><div className="decision-status"><span className="status-icon"><Icon name="check" size={28}/></span><div><small>DEPARTURE STATUS</small><strong>{t.go}</strong><p>{t.verdict}</p></div></div><div className="decision-window"><span className="section-kicker">BEST DEPARTURE WINDOW</span><h2>Leave by 6:30 AM.<br/>Start back by 10:00 AM.</h2><p>Conditions are calm near the coast. Wind strengthens after 11:00 AM.</p></div><div className="decision-metrics"><Metric icon="wind" label="Wind" value="11 kn" note="Gentle"/><Metric icon="waves" label="Waves" value="1.1 m" note="Calm"/><Metric icon="cloud" label="Rain" value="20%" note="Low chance"/><button onClick={() => go('weather')}>See detailed forecast <Icon name="arrow" size={18}/></button></div></section>
    <div className="primary-grid"><section className="panel route-panel"><PanelHeader kicker="RECOMMENDED ZONE" title={`${zone.name} · Zone ${zone.id}`} description="Balanced for safety, travel time, and catch potential." action={<span className={`risk-pill ${zone.level}`}><i/>{zone.risk}</span>}/><div className="zone-tabs" role="tablist" aria-label="Choose fishing zone">{zones.map(z => <button key={z.id} className={selectedZone === z.id ? 'active' : ''} onClick={() => setSelectedZone(z.id)} aria-pressed={selectedZone === z.id}><span>{z.id}</span><div><strong>{z.name}</strong><small>{z.distance} · {z.catch}% catch</small></div></button>)}</div><SeaMap zone={zone}/><div className="route-summary"><div><small>Distance</small><strong>{zone.distance}</strong></div><div><small>Travel time</small><strong>{zone.duration}</strong></div><div><small>Likely catch</small><strong>{zone.catch}%</strong></div><button className="primary-button" onClick={() => go('route')}>Open safe route <Icon name="arrow" size={18}/></button></div></section><aside className="side-stack"><section className="panel watch-panel"><PanelHeader kicker="KEEP WATCH" title="2 things need attention" action={<button className="text-link" onClick={() => go('safety')}>All alerts <Icon name="arrow" size={15}/></button>}/><AlertRow type="watch" icon="wind" title="Wind rises after 11 AM" text="Return before it reaches 18 kn." time="11:00"/><AlertRow type="safe" icon="shield" title="No cyclone warning" text="The next 48 hours are clear." time="Clear"/><AlertRow type="safe" icon="location" title="Boundary clearance" text="Zone B stays 9.4 nm inside." time="Safe"/></section><section className="assistant-card"><div className="assistant-mark"><Icon name="message"/></div><div><span>ORCA ASSISTANT</span><h3>Need a quick answer?</h3><p>Ask about weather, routes, zones, or safety.</p></div><button onClick={() => go('assistant')} aria-label="Open ORCA assistant"><Icon name="arrow"/></button></section></aside></div>
    <section className="panel intelligence-panel"><PanelHeader kicker="MARINE INTELLIGENCE · INCOIS" title="How conditions change this morning" description="Switch metrics to see when fishing quality drops and risk starts to rise." action={<span className="freshness"><i/>124 readings · updated 4 min ago</span>}/><div className="metric-tabs" role="tablist">{Object.entries(chartSets).map(([key,item]) => <button key={key} className={metric === key ? 'active' : ''} onClick={() => setMetric(key)} aria-pressed={metric === key}><span style={{background:item.color}}/>{item.label}</button>)}</div><div className="chart-layout"><DecisionChart metric={metric}/><aside className="chart-insight"><span className="insight-icon"><Icon name={metric === 'catch' ? 'fish' : metric === 'wind' ? 'wind' : 'waves'}/></span><small>WHAT THIS MEANS</small><h3>{chartSets[metric].note}</h3><p>{chartSets[metric].detail}</p><div className="confidence"><span>Signal confidence</span><strong>{metric === 'wind' ? '91%' : metric === 'catch' ? '82%' : '88%'}</strong></div></aside></div></section>
    <section className="journey-strip"><div className="journey-title"><span>YOUR SIMPLE PLAN</span><h2>Out, fish, and home before the wind</h2></div><JourneyStep icon="home" time="06:00" title="Leave harbour" text="Fuel and safety check"/><span className="journey-arrow"><Icon name="arrow"/></span><JourneyStep icon="fish" time="08:18" title={`Reach Zone ${zone.id}`} text={zone.species}/><span className="journey-arrow"><Icon name="arrow"/></span><JourneyStep icon="route" time="10:00" title="Begin return" text="Before wind rises"/><span className="journey-arrow"><Icon name="arrow"/></span><JourneyStep icon="shield" time="10:55" title="Back safely" text="Kochi Harbour"/></section>
  </div>
}

const Metric = ({ icon, label, value, note }) => <div className="metric"><span><Icon name={icon}/></span><div><small>{label}</small><strong>{value}</strong><em>{note}</em></div></div>
const PanelHeader = ({ kicker, title, description, action }) => <header className="panel-header"><div><span>{kicker}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>{action && <div className="panel-action">{action}</div>}</header>
const AlertRow = ({ type, icon, title, text, time }) => <div className={`alert-row ${type}`}><span><Icon name={icon}/></span><div><strong>{title}</strong><p>{text}</p></div><em>{time}</em></div>
const JourneyStep = ({ icon, time, title, text }) => <div className="journey-step"><span><Icon name={icon}/></span><div><small>{time}</small><strong>{title}</strong><p>{text}</p></div></div>

function SeaMap({ zone }) {
  const points = { B:[292,158], C:[355,245], A:[374,76] }, [x,y] = points[zone.id]
  return <div className="sea-map" role="img" aria-label={`Safe route from Kochi Harbour to Zone ${zone.id}`}><svg viewBox="0 0 560 315" preserveAspectRatio="xMidYMid meet"><defs><pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="currentColor" strokeOpacity=".07"/></pattern><pattern id="dangerHatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line y2="8" stroke="currentColor" strokeOpacity=".2" strokeWidth="2"/></pattern></defs><rect width="560" height="315" className="map-sea"/><rect width="560" height="315" fill="url(#grid)"/><path className="map-land" d="M0 0h135c-12 42-18 79-9 116 8 34 2 65-8 97-10 33-5 67 1 102H0Z"/><path className="coast-line" d="M135 0c-12 42-18 79-9 116 8 34 2 65-8 97-10 33-5 67 1 102"/><rect x="394" y="22" width="132" height="64" rx="10" fill="url(#dangerHatch)" className="restricted"/><text x="410" y="48" className="map-label danger-text">RESTRICTED AREA</text><text x="410" y="67" className="map-sub">Keep 2 nm clear</text><path className="route-line" d={`M112 241 C175 220 215 190 ${x} ${y}`}/><circle cx="112" cy="241" r="8" className="harbour-dot"/><circle cx="112" cy="241" r="18" className="harbour-ring"/><text x="35" y="273" className="map-label">KOCHI HARBOUR</text>{zones.map(z => { const [px,py] = points[z.id]; return <g key={z.id} transform={`translate(${px} ${py})`} className={z.id === zone.id ? 'map-zone active' : `map-zone ${z.level}`}><circle r={z.id === zone.id ? 27 : 19}/><text textAnchor="middle" dy="6">{z.id}</text>{z.id === zone.id && <circle r="37" className="zone-ring"/>}</g> })}<g transform="translate(510 265)" className="map-compass"><circle r="21"/><path d="m0-13 5 14-5-3-5 3Z"/><text y="-26" textAnchor="middle">N</text></g></svg><div className="map-legend"><span><i className="safe"/>Safe</span><span><i className="watch"/>Use caution</span><span><i className="danger"/>Avoid</span><strong>{zone.lat} · {zone.lon}</strong></div></div>
}

function DecisionChart({ metric }) {
  const set = chartSets[metric], width = 700, height = 250, left = 48, right = 18, top = 18, bottom = 42
  const xStep = (width-left-right)/(set.values.length-1), y = v => top + (set.max-v)/(set.max-set.min)*(height-top-bottom)
  const coords = set.values.map((v,i) => [left+i*xStep,y(v)]), line = coords.map((p,i) => `${i ? 'L' : 'M'}${p[0]},${p[1]}`).join(' '), area = `${line} L${coords.at(-1)[0]},${height-bottom} L${left},${height-bottom} Z`
  const ticks = metric === 'waves' ? [0,1,2,3] : metric === 'wind' ? [0,10,20,30] : [0,25,50,75,100], threshold = metric === 'waves' ? 1.5 : metric === 'wind' ? 18 : null
  return <div className="chart-wrap"><svg className="decision-chart" viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`${set.label} from 6 AM to 12 PM`}><defs><linearGradient id={`area-${metric}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={set.color} stopOpacity=".28"/><stop offset="100%" stopColor={set.color} stopOpacity="0"/></linearGradient></defs>{ticks.map(t => <g key={t}><line x1={left} x2={width-right} y1={y(t)} y2={y(t)} className="chart-grid"/><text x={left-10} y={y(t)+4} textAnchor="end" className="axis-label">{t}{set.unit}</text></g>)}{threshold !== null && <g><line x1={left} x2={width-right} y1={y(threshold)} y2={y(threshold)} className="threshold-line"/><rect x={width-161} y={y(threshold)-14} width="142" height="23" rx="6" className="threshold-bg"/><text x={width-90} y={y(threshold)+2} textAnchor="middle" className="threshold-text">Small-boat limit</text></g>}<path d={area} fill={`url(#area-${metric})`}/><path d={line} fill="none" stroke={set.color} className="data-line"/>{coords.map(([cx,cy],i) => <g key={chartTimes[i]}><circle cx={cx} cy={cy} r="5.5" fill={set.color} className="data-point"/><circle cx={cx} cy={cy} r="11" fill={set.color} opacity="0"><title>{chartTimes[i]}: {set.values[i]}{set.unit}</title></circle><text x={cx} y={height-15} textAnchor="middle" className="time-label">{chartTimes[i]}</text>{i === 2 && <g><rect x={cx-31} y={cy-38} width="62" height="25" rx="7" className="value-bg"/><text x={cx} y={cy-21} textAnchor="middle" className="value-text">{set.values[i]}{set.unit}</text></g>}</g>)}<line x1={left} x2={width-right} y1={height-bottom} y2={height-bottom} className="axis-line"/></svg><div className="chart-caption"><span>Calm / productive</span><span>Conditions change</span></div></div>
}

function PageTitle({ kicker, title, description, action }) { return <header className="inner-header"><div><span>{kicker}</span><h1>{title}</h1><p>{description}</p></div>{action}</header> }

function Zones({ selected, setSelected, go }) {
  const current = zones.find(z => z.id === selected)
  return <div className="inner-page page-enter"><PageTitle kicker="UPDATED 4 MINUTES AGO" title="Fishing zones" description="Ranked by safety first, then catch potential."/><div className="zones-page-grid"><section className="panel zone-list"><div className="notice"><Icon name="shield"/><div><strong>Safety comes first</strong><p>Zone A may have more fish, but Zone B has safer waves and legal clearance.</p></div></div>{zones.map(z => <button key={z.id} className={selected === z.id ? 'zone-row active' : 'zone-row'} onClick={() => setSelected(z.id)}><span className={`zone-letter ${z.level}`}>{z.id}</span><span><strong>{z.name}</strong><small>{z.species}</small></span><span className="zone-value"><strong>{z.catch}%</strong><small>catch</small></span><span className={`risk-pill ${z.level}`}><i/>{z.risk}</span><Icon name="chevron"/></button>)}</section><section className="panel zone-preview"><PanelHeader kicker={`ZONE ${current.id}`} title={current.name} description={`${current.lat} · ${current.lon}`} action={<span className={`risk-pill ${current.level}`}><i/>{current.risk}</span>}/><SeaMap zone={current}/><div className="route-summary"><div><small>Distance</small><strong>{current.distance}</strong></div><div><small>Waves</small><strong>{current.wave}</strong></div><div><small>Wind</small><strong>{current.wind}</strong></div><button className="primary-button" onClick={() => go('route')}>Plan route <Icon name="arrow"/></button></div></section></div></div>
}

function Weather() {
  const [metric,setMetric] = useState('wind')
  return <div className="inner-page page-enter"><PageTitle kicker="KOCHI COAST · TODAY" title="Sea & weather" description="Only the conditions that matter for your trip."/><section className="weather-hero panel"><div className="weather-now"><span><Icon name="sun" size={34}/></span><div><small>NOW · CLEAR</small><strong>29°C</strong><p>Bright with a gentle westerly wind</p></div></div><div className="weather-verdict"><Icon name="check"/><div><strong>Good conditions this morning</strong><span>Plan to be back before 11 AM.</span></div></div></section><section className="panel weather-chart"><PanelHeader kicker="HOURLY FORECAST" title="When the sea will change" description="Use the metric tabs to compare the safe morning window."/><div className="metric-tabs">{Object.entries(chartSets).map(([key,item]) => <button key={key} className={metric===key?'active':''} onClick={()=>setMetric(key)}><span style={{background:item.color}}/>{item.label}</button>)}</div><div className="chart-layout"><DecisionChart metric={metric}/><aside className="chart-insight"><span className="insight-icon"><Icon name="clock"/></span><small>TODAY'S TURNING POINT</small><h3>Conditions change at 11:00 AM</h3><p>Wind and wave height both begin climbing. Treat 10:00 AM as your return trigger.</p></aside></div></section></div>
}

function RoutePage({ zone, notify }) { return <div className="inner-page page-enter"><PageTitle kicker="SAFETY-CHECKED ROUTE" title={`Route to ${zone.name}`} description="A simple outward and return plan that avoids marked hazards." action={<button className="secondary-button" onClick={() => notify('Route saved for offline use')}><Icon name="download"/> Save offline</button>}/><section className="panel route-page-card"><SeaMap zone={zone}/><div className="route-summary large"><div><small>Depart</small><strong>06:00</strong></div><div><small>Distance</small><strong>{zone.distance}</strong></div><div><small>Arrive zone</small><strong>08:18</strong></div><div><small>Return by</small><strong>10:55</strong></div></div></section><section className="panel directions"><PanelHeader kicker="TURN-BY-TURN" title="Follow these 4 steps"/><JourneyStep icon="home" time="1" title="Leave Kochi Harbour" text="Head west-southwest after the breakwater."/><JourneyStep icon="compass" time="2" title="Hold 244° for 13.2 nm" text="Stay south of the main shipping lane."/><JourneyStep icon="location" time="3" title={`Enter Zone ${zone.id}`} text="Fish only inside the marked safe boundary."/><JourneyStep icon="shield" time="4" title="Begin return at 10:00" text="Use the same checked route back."/></section></div> }

function Safety({ notify }) {
  const [checks,setChecks] = useState([true,true,false,false,false]), items = ['Life jackets for everyone','Enough fuel for the return','Phone and VHF radio charged','Drinking water on board','Family knows your plan']
  return <div className="inner-page page-enter"><PageTitle kicker="HELP WHEN YOU NEED IT" title="Safety & alerts" description="Current warnings, emergency contacts, and your pre-trip check."/><section className="emergency-banner"><span><Icon name="phone" size={27}/></span><div><small>EMERGENCY HELP</small><h2>In danger at sea?</h2><p>Send your boat location and call the Coast Guard.</p></div><button onClick={() => notify('Demo only — emergency alert not sent')}>Get emergency help</button></section><div className="safety-grid"><section className="panel watch-panel"><PanelHeader kicker="ACTIVE FOR YOUR AREA" title="Current alerts"/><AlertRow type="watch" icon="wind" title="Strong wind after 11 AM" text="Small boats should return early." time="11:00"/><AlertRow type="danger" icon="location" title="Restricted area near Aster Bank" text="Keep at least 2 nautical miles away." time="Active"/><AlertRow type="safe" icon="shield" title="No cyclone warning" text="No threat expected in the next 48 hours." time="Clear"/></section><section className="panel checklist"><PanelHeader kicker="BEFORE YOU LEAVE" title={`${checks.filter(Boolean).length} of 5 checks done`}/>{items.map((item,i) => <label key={item}><input type="checkbox" checked={checks[i]} onChange={() => setChecks(v => v.map((x,n) => n===i?!x:x))}/><span><i><Icon name="check" size={15}/></i>{item}</span></label>)}<div className="check-progress"><i style={{width:`${checks.filter(Boolean).length*20}%`}}/></div></section></div></div>
}

function Assistant() {
  const [messages,setMessages] = useState([{from:'orca',text:'Namaste! Ask me about today’s sea, fishing zones, routes, or safety.'}]), [value,setValue] = useState('')
  const send = text => { const q=(text||value).trim(); if(!q)return; setMessages(m=>[...m,{from:'user',text:q},{from:'orca',text:'Zone B is the safest choice this morning. Leave by 6:30 AM and begin your return by 10:00 AM, before wind rises.'}]); setValue('') }
  return <div className="inner-page page-enter"><PageTitle kicker="PLAIN-LANGUAGE HELP" title="Ask ORCA" description="Quick answers grounded in today’s marine briefing."/><section className="assistant-layout"><div className="panel chat-card"><div className="chat-status"><span className="assistant-mark"><Icon name="waves"/></span><div><strong>ORCA assistant</strong><small><i/>Using current marine data</small></div></div><div className="messages">{messages.map((m,i)=><div key={i} className={`message ${m.from}`}>{m.text}</div>)}</div><div className="chat-input"><input value={value} onChange={e=>setValue(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="Ask a question…"/><button onClick={()=>send()} aria-label="Send question"><Icon name="send"/></button></div></div><aside className="panel suggested"><PanelHeader kicker="TRY ASKING" title="Common questions"/>{['Is it safe to leave now?','Which zone has sardines?','When will the tide change?','Show me the safest route'].map(q=><button key={q} onClick={()=>send(q)}><Icon name="message" size={17}/>{q}<Icon name="chevron" size={16}/></button>)}</aside></section></div>
}

function History() { return <div className="inner-page page-enter"><PageTitle kicker="PAST JOURNEYS" title="Trip history" description="Review previous routes, warnings, and fishing results."/><div className="stat-grid"><Metric icon="boat" label="Trips this month" value="8" note="+2 vs August"/><Metric icon="fish" label="Total catch" value="96 kg" note="Last 30 days"/><Metric icon="shield" label="Safety score" value="100%" note="No incidents"/></div><section className="panel trip-list"><PanelHeader kicker="RECENT" title="Your trips"/>{[['06 Sep','Bluefin Shelf','18.2 kg','Safe trip'],['02 Sep','Coral Reach','12.6 kg','Safe trip'],['28 Aug','Bluefin Shelf','9.4 kg','Returned early']].map((x,i)=><button key={x[0]}><span className="trip-date">{x[0]}</span><span><strong>{x[1]}</strong><small>{i===2?'3h 10m':'4h 22m'} · {x[3]}</small></span><span className={`risk-pill ${i===2?'watch':'safe'}`}><i/>{i===2?'Caution':'Safe'}</span><strong>{x[2]}</strong><Icon name="chevron"/></button>)}</section></div> }

function Settings({ theme, setTheme, language, setLanguage, notify }) { return <div className="inner-page page-enter"><PageTitle kicker="MAKE ORCA COMFORTABLE" title="Display & language" description="Changes apply immediately on this device."/><section className="settings-grid"><div className="panel setting-card"><span><Icon name="sun"/></span><div><h2>Screen theme</h2><p>Choose a view that stays clear on the water.</p></div><div className="segmented"><button className={theme==='day'?'active':''} onClick={()=>setTheme('day')}>Day</button><button className={theme==='night'?'active':''} onClick={()=>setTheme('night')}>Night</button></div></div><div className="panel setting-card"><span><Icon name="message"/></span><div><h2>Language</h2><p>Use the language you know best.</p></div><select value={language} onChange={e=>{setLanguage(e.target.value);notify('Language updated')}}><option value="en">English</option><option value="hi">हिन्दी</option><option value="ml">മലയാളം</option></select></div><div className="panel setting-card"><span><Icon name="volume"/></span><div><h2>Read aloud</h2><p>Hear important weather and safety messages.</p></div><button className="secondary-button" onClick={()=>notify('Voice preview playing')}>Play preview</button></div></section></div> }

export default App
