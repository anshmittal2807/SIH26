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
    app: 'ORCA', tagline: 'Coastal decision service', connected: 'Data connected', location: 'Kochi Harbour', greeting: 'Good morning, Deepak', planTitle: 'Today’s fishing plan', sub: 'Here is what the Arabian Sea looks like today.',
    safeTitle: 'Safe to leave until 11:00 AM', safeBody: 'Conditions are calm near the coast. Return before the afternoon wind strengthens.', ask: 'Ask ORCA anything', placeholder: 'Can I go fishing now?', recommended: 'Recommended fishing zone', why: 'Why this zone?', openRoute: 'Show safe route', todaysPlan: "Today's simple plan",
    nav: { home:'Home', zones:'Fishing zones', weather:'Sea & weather', route:'Safe route', safety:'Safety & alerts', assistant:'Ask ORCA', history:'Trip history', settings:'Accessibility' },
  },
  hi: {
    app: 'ORCA', tagline: 'तटीय निर्णय सेवा', connected: 'डेटा जुड़ा है', location: 'कोच्चि बंदरगाह', greeting: 'सुप्रभात, दीपक', planTitle: 'आज की मछली पकड़ने की योजना', sub: 'आज अरब सागर की स्थिति ऐसी है।',
    safeTitle: 'सुबह 11 बजे तक समुद्र सुरक्षित है', safeBody: 'तट के पास समुद्र शांत है। दोपहर की हवा तेज़ होने से पहले लौटें।', ask: 'ORCA से पूछें', placeholder: 'क्या मैं अभी मछली पकड़ने जा सकता हूँ?', recommended: 'सुझाया गया मछली क्षेत्र', why: 'यह क्षेत्र क्यों?', openRoute: 'सुरक्षित रास्ता देखें', todaysPlan: 'आज की सरल योजना',
    nav: { home:'होम', zones:'मछली क्षेत्र', weather:'समुद्र और मौसम', route:'सुरक्षित रास्ता', safety:'सुरक्षा अलर्ट', assistant:'ORCA से पूछें', history:'यात्रा इतिहास', settings:'पहुंच सुविधाएँ' },
  },
  ml: {
    app: 'ഓർക്ക', tagline: 'തീരദേശ തീരുമാന സേവനം', connected: 'ഡാറ്റ ലഭ്യമാണ്', location: 'കൊച്ചി തുറമുഖം', greeting: 'സുപ്രഭാതം, ദീപക്', planTitle: 'ഇന്നത്തെ മത്സ്യബന്ധന പദ്ധതി', sub: 'ഇന്നത്തെ അറബിക്കടൽ സ്ഥിതി ഇതാണ്.',
    safeTitle: 'രാവിലെ 11 വരെ കടലിൽ പോകാം', safeBody: 'തീരത്തിനടുത്ത് കടൽ ശാന്തമാണ്. ഉച്ചകഴിഞ്ഞ് കാറ്റ് ശക്തമാകുന്നതിന് മുമ്പ് മടങ്ങുക.', ask: 'ഓർക്കയോട് ചോദിക്കൂ', placeholder: 'ഇപ്പോൾ മീൻപിടിക്കാൻ പോകാമോ?', recommended: 'ശുപാർശ ചെയ്യുന്ന മത്സ്യബന്ധന മേഖല', why: 'ഈ മേഖല എന്തുകൊണ്ട്?', openRoute: 'സുരക്ഷിത വഴി കാണിക്കുക', todaysPlan: 'ഇന്നത്തെ ലളിതമായ പദ്ധതി',
    nav: { home:'ഹോം', zones:'മത്സ്യ മേഖലകൾ', weather:'കടലും കാലാവസ്ഥയും', route:'സുരക്ഷിത വഴി', safety:'സുരക്ഷാ അറിയിപ്പുകൾ', assistant:'ഓർക്കയോട് ചോദിക്കൂ', history:'യാത്രാ ചരിത്രം', settings:'പ്രവേശന സൗകര്യം' },
  },
}

const pageText = {
  en: {
    home: { departure:'Departure advice', go:'GO', suitable:'Conditions are suitable', best:'Best window', leave:'Leave by 6:30 AM.', return:'Begin return at 10:00 AM.', forecast:'See full forecast', recommendation:'Today’s recommendation', catch:'catch chance', from:'from harbour', why:'Why Zone B', route:'Open this route', compare:'Compare all zones', ask:'Ask ORCA', askTitle:'What do you need to know?', askHelp:'Ask in your own words.', watch:'Keep watch', alerts:'All alerts', wind:'Wind rises after 11 AM', windNote:'Small boats should return early.', cyclone:'No cyclone warning', cycloneNote:'Next 48 hours are clear.', boundary:'Boundary is clear', boundaryNote:'Zone B has 9.4 nm clearance.', checked:'Checked against Indian marine sources', offline:'Available even when signal is weak',
      mapEyebrow:'Live coastal map · Kochi', mapTitle:'Where it is safe today', mapDesc:'Tap a zone to see its safety, distance and catch chance. The dashed line is your checked route out and back.', mapLive:'LIVE', harbour:'Kochi Harbour', restricted:'Restricted area', shipping:'Shipping lane', depth:'20 m depth line', routeTo:'Safe route to', selectZone:'Select zone', viewZones:'View all zones', safeReturn:'Return before 11 AM',
      corrEyebrow:'Ocean ↔ catch links', corrTitle:'Why the sea behaves this way', corrDesc:'Three live correlations from 30 days of INCOIS readings. Strong links guide today’s GO call.', corrInsight:'Warm water + chlorophyll means more fish — but wind above 18 kn overrides everything. That is why Zone B wins today.', corrExplore:'Explore full marine data', readings:'124 readings · 30 days',
      placeLine:'Kochi, Kerala · Arabian Sea', listen:'Listen', windLabel:'Wind', gentle:'Gentle', waveLabel:'Waves', calm:'Calm', rainLabel:'Rain', lowChance:'Low chance', harbourStart:'Kochi Harbour', start:'Start', fishHere:'Fish inside marked area', backHarbour:'Back at harbour', safeArrival:'Safe arrival', zoneWord:'Zone', selectedVerb:'selected', questionSent:'Question sent to ORCA', listening:'Listening…', listeningStopped:'Voice input stopped', readingAloud:'Reading today’s plan aloud', insightPrefix:'ORCA insight', buffer:'2 nm buffer', scaleTen:'10 nm', coastShort:'KOCHI · KERALA' },
    zones: { eyebrow:'Updated 4 minutes ago', title:'Fishing zones', desc:'Zones are ranked by safety first, then by catch chance.', safety:'Safety comes first.', note:'Zone A has more fish, but ORCA recommends Zone B because its waves and legal clearance are safer.', selected:'Selected zone', plan:'Plan route', you:'You', safer:'Safer', care:'Take care', avoid:'Avoid', zoneWord:'Zone' },
    weather: { eyebrow:'Kochi coast · Today', title:'Sea and weather', desc:'A simple view of the conditions that matter while fishing.', now:'Now', bright:'Bright with gentle wind', good:'Good conditions this morning', back:'Plan to be back before 11 AM.', hourly:'Hour by hour', change:'How the sea will change', current:'Current conditions', know:'What you need to know', tide:'Tide', rising:'Rising until 9:40 AM', meaning:'What this means:', tideNote:'The rising tide and gentle current support an easier trip out of the harbour this morning.', correlations:'Marine correlation data', correlationDesc:'How ocean conditions relate to fishing potential and route safety.', low:'Low', high:'High', dataWindow:'30 days · 124 readings', model:'INCOIS · ORCA MODEL' },
    route: { eyebrow:'Safety-checked route', title:'Safe route', desc:'Follow the blue path and return before conditions change.', destination:'Your destination', leaving:'Leaving Kochi Harbour at 6:00 AM', distance:'Distance', travel:'Travel time', back:'Back at harbour', steps:'Follow these steps', directions:'Directions', save:'Save route offline', share:'Share plan with family', zoneWord:'Zone', start:'Start', restricted:'Restricted area' },
    safety: { eyebrow:'Help when you need it', title:'Safety and alerts', desc:'Important warnings are written clearly and can be heard aloud.', emergency:'Emergency help', danger:'Are you in danger at sea?', send:'Send your boat location and call the Coast Guard.', get:'Get emergency help', active:'Active for your area', current:'Current alerts', before:'Before you leave', check:'5-point boat check', complete:'Complete all five checks before leaving the harbour.' },
    assistant: { eyebrow:'Plain-language help', title:'Ask ORCA', desc:'Ask about fishing, weather, routes, or safety in your own words.', online:'Using Indian marine data', placeholder:'Type your question…', try:'Try asking', common:'Common questions' },
    history: { eyebrow:'Past journeys', title:'Trip history', desc:'Review previous routes, warnings, and fishing results.', trips:'Trips this month', catch:'Total catch', score:'Safety score', recent:'Recent', yours:'Your trips', safeTrip:'Safe trip', returnedEarly:'Returned early', daysLabel:'30 days', sep:'Sep', aug:'Aug' },
    settings: { eyebrow:'Make ORCA comfortable', title:'Accessibility and display', desc:'Choose how the app looks, reads, and moves. Changes apply immediately.', theme:'Screen theme', themeNote:'Choose the clearest view for where you are.', text:'Text size', textNote:'Make every word comfortable to read.', language:'Language', languageNote:'Use the language you know best.', voice:'Read information aloud', voiceNote:'Hear important weather and safety messages.', motion:'Reduce movement', motionNote:'Turn off moving and animated effects.', day:'Day', night:'Night', highContrast:'High contrast' },
  },
  hi: {
    home: { departure:'प्रस्थान सलाह', go:'जाएँ', suitable:'समुद्र की स्थिति अनुकूल है', best:'सबसे अच्छा समय', leave:'सुबह 6:30 तक निकलें।', return:'सुबह 10:00 बजे लौटना शुरू करें।', forecast:'पूरा मौसम देखें', recommendation:'आज का सुझाव', catch:'मछली मिलने की संभावना', from:'बंदरगाह से', why:'क्षेत्र B क्यों', route:'यह रास्ता खोलें', compare:'सभी क्षेत्र देखें', ask:'ORCA से पूछें', askTitle:'आप क्या जानना चाहते हैं?', askHelp:'अपने शब्दों में पूछें।', watch:'ध्यान रखें', alerts:'सभी अलर्ट', wind:'11 बजे के बाद हवा तेज़ होगी', windNote:'छोटी नावें जल्दी लौटें।', cyclone:'चक्रवात चेतावनी नहीं', cycloneNote:'अगले 48 घंटे साफ हैं।', boundary:'सीमा सुरक्षित है', boundaryNote:'क्षेत्र B से 9.4 समुद्री मील दूरी है।', checked:'भारतीय समुद्री स्रोतों से जाँच की गई', offline:'कमज़ोर सिग्नल में भी उपलब्ध',
      mapEyebrow:'लाइव तटीय मानचित्र · कोच्चि', mapTitle:'आज कहाँ सुरक्षित है', mapDesc:'सुरक्षा, दूरी और मछली की संभावना देखने के लिए क्षेत्र चुनें। धराशायी रेखा आपका जाँचा हुआ रास्ता है।', mapLive:'लाइव', harbour:'कोच्चि बंदरगाह', restricted:'प्रतिबंधित क्षेत्र', shipping:'जहाज़ मार्ग', depth:'20 मी गहराई रेखा', routeTo:'सुरक्षित रास्ता', selectZone:'क्षेत्र चुनें', viewZones:'सभी क्षेत्र देखें', safeReturn:'11 बजे से पहले लौटें',
      corrEyebrow:'समुद्र ↔ मछली संबंध', corrTitle:'समुद्र ऐसा क्यों व्यवहार करता है', corrDesc:'INCOIS के 30 दिनों के आंकड़ों से तीन लाइव सहसंबंध।', corrInsight:'गर्म पानी + क्लोरोफिल = अधिक मछली — पर 18 नॉट से तेज़ हवा सब बदल देती है। इसलिए आज क्षेत्र B बेहतर है।', corrExplore:'पूरा समुद्री डेटा देखें', readings:'124 रीडिंग · 30 दिन',
      placeLine:'कोच्चि, केरल · अरब सागर', listen:'सुनें', windLabel:'हवा', gentle:'हल्की', waveLabel:'लहरें', calm:'शांत', rainLabel:'बारिश', lowChance:'कम संभावना', harbourStart:'कोच्चि बंदरगाह', start:'शुरुआत', fishHere:'चिह्नित क्षेत्र में मछली पकड़ें', backHarbour:'बंदरगाह वापसी', safeArrival:'सुरक्षित आगमन', zoneWord:'क्षेत्र', selectedVerb:'चुना गया', questionSent:'प्रश्न ORCA को भेजा गया', listening:'सुन रहे हैं…', listeningStopped:'वॉइस इनपुट बंद', readingAloud:'आज की योजना पढ़ी जा रही है', insightPrefix:'ORCA जानकारी', buffer:'2 समुद्री मील बफर', scaleTen:'10 समुद्री मील', coastShort:'कोच्चि · केरल' },
    zones: { eyebrow:'4 मिनट पहले अपडेट', title:'मछली पकड़ने के क्षेत्र', desc:'क्षेत्र पहले सुरक्षा, फिर मछली मिलने की संभावना के अनुसार हैं।', safety:'सुरक्षा सबसे पहले।', note:'क्षेत्र A में अधिक मछली है, लेकिन शांत लहरों और सुरक्षित सीमा के कारण ORCA क्षेत्र B सुझाता है।', selected:'चुना गया क्षेत्र', plan:'रास्ता बनाएँ', you:'आप', safer:'सुरक्षित', care:'सावधान', avoid:'बचें', zoneWord:'क्षेत्र' },
    weather: { eyebrow:'कोच्चि तट · आज', title:'समुद्र और मौसम', desc:'मछली पकड़ने के लिए ज़रूरी परिस्थितियों का सरल विवरण।', now:'अभी', bright:'हल्की हवा के साथ धूप', good:'आज सुबह स्थिति अच्छी है', back:'सुबह 11 बजे से पहले लौटें।', hourly:'हर घंटे', change:'समुद्र कैसे बदलेगा', current:'वर्तमान स्थिति', know:'ज़रूरी जानकारी', tide:'ज्वार', rising:'सुबह 9:40 तक बढ़ता ज्वार', meaning:'इसका मतलब:', tideNote:'बढ़ता ज्वार और हल्की धारा सुबह बंदरगाह से निकलना आसान बनाते हैं।', correlations:'समुद्री सहसंबंध डेटा', correlationDesc:'समुद्री स्थिति मछली और रास्ते की सुरक्षा से कैसे जुड़ती है।', low:'निम्न', high:'उच्च', dataWindow:'30 दिन · 124 रीडिंग', model:'INCOIS · ORCA मॉडल' },
    route: { eyebrow:'सुरक्षा-जाँचा रास्ता', title:'सुरक्षित रास्ता', desc:'नीले रास्ते का पालन करें और मौसम बदलने से पहले लौटें।', destination:'आपकी मंज़िल', leaving:'सुबह 6:00 बजे कोच्चि बंदरगाह से प्रस्थान', distance:'दूरी', travel:'यात्रा समय', back:'बंदरगाह वापसी', steps:'इन चरणों का पालन करें', directions:'दिशाएँ', save:'रास्ता ऑफलाइन सहेजें', share:'परिवार के साथ योजना साझा करें', zoneWord:'क्षेत्र', start:'शुरुआत', restricted:'प्रतिबंधित क्षेत्र' },
    safety: { eyebrow:'ज़रूरत के समय सहायता', title:'सुरक्षा और अलर्ट', desc:'महत्वपूर्ण चेतावनियाँ स्पष्ट लिखी हैं और सुनी जा सकती हैं।', emergency:'आपातकालीन सहायता', danger:'क्या आप समुद्र में खतरे में हैं?', send:'अपनी नाव की जगह भेजें और तटरक्षक को कॉल करें।', get:'आपात सहायता लें', active:'आपके क्षेत्र में सक्रिय', current:'वर्तमान अलर्ट', before:'निकलने से पहले', check:'5-बिंदु नाव जाँच', complete:'बंदरगाह छोड़ने से पहले सभी पाँच जाँच पूरी करें।' },
    assistant: { eyebrow:'सरल भाषा में सहायता', title:'ORCA से पूछें', desc:'मछली, मौसम, रास्ते या सुरक्षा के बारे में अपने शब्दों में पूछें।', online:'भारतीय समुद्री डेटा का उपयोग', placeholder:'अपना प्रश्न लिखें…', try:'पूछकर देखें', common:'सामान्य प्रश्न' },
    history: { eyebrow:'पिछली यात्राएँ', title:'यात्रा इतिहास', desc:'पिछले रास्ते, चेतावनियाँ और मछली परिणाम देखें।', trips:'इस महीने की यात्राएँ', catch:'कुल मछली', score:'सुरक्षा स्कोर', recent:'हाल की', yours:'आपकी यात्राएँ', safeTrip:'सुरक्षित यात्रा', returnedEarly:'जल्दी लौटे', daysLabel:'30 दिन', sep:'सितं', aug:'अग' },
    settings: { eyebrow:'ORCA को सुविधाजनक बनाएँ', title:'पहुंच और डिस्प्ले', desc:'ऐप का रूप, पढ़ने का आकार और गति चुनें। बदलाव तुरंत लागू होंगे।', theme:'स्क्रीन थीम', themeNote:'अपनी जगह के अनुसार साफ दृश्य चुनें।', text:'अक्षर का आकार', textNote:'हर शब्द आसानी से पढ़ें।', language:'भाषा', languageNote:'अपनी परिचित भाषा चुनें।', voice:'जानकारी सुनें', voiceNote:'मौसम और सुरक्षा संदेश आवाज़ में सुनें।', motion:'गतिविधि कम करें', motionNote:'चलते और एनिमेटेड प्रभाव बंद करें।', day:'दिन', night:'रात', highContrast:'हाई कंट्रास्ट' },
  },
  ml: {
    home: { departure:'പുറപ്പെടൽ നിർദേശം', go:'പോകാം', suitable:'കടൽ സ്ഥിതി അനുകൂലമാണ്', best:'മികച്ച സമയം', leave:'രാവിലെ 6:30-ന് മുമ്പ് പുറപ്പെടുക.', return:'രാവിലെ 10:00-ന് മടക്കം തുടങ്ങുക.', forecast:'പൂർണ്ണ കാലാവസ്ഥ കാണുക', recommendation:'ഇന്നത്തെ ശുപാർശ', catch:'മീൻ സാധ്യത', from:'തുറമുഖത്തിൽ നിന്ന്', why:'മേഖല B എന്തുകൊണ്ട്', route:'ഈ വഴി തുറക്കുക', compare:'എല്ലാ മേഖലകളും താരതമ്യം ചെയ്യുക', ask:'ഓർക്കയോട് ചോദിക്കൂ', askTitle:'എന്താണ് അറിയേണ്ടത്?', askHelp:'നിങ്ങളുടെ വാക്കുകളിൽ ചോദിക്കൂ.', watch:'ശ്രദ്ധിക്കുക', alerts:'എല്ലാ അറിയിപ്പുകളും', wind:'11 മണിക്ക് ശേഷം കാറ്റ് കൂടും', windNote:'ചെറിയ വള്ളങ്ങൾ നേരത്തെ മടങ്ങുക.', cyclone:'ചുഴലിക്കാറ്റ് മുന്നറിയിപ്പില്ല', cycloneNote:'അടുത്ത 48 മണിക്കൂർ സുരക്ഷിതമാണ്.', boundary:'അതിർത്തി സുരക്ഷിതമാണ്', boundaryNote:'മേഖല B-ക്ക് 9.4 നോട്ടിക്കൽ മൈൽ അകലമുണ്ട്.', checked:'ഇന്ത്യൻ സമുദ്ര സ്രോതസ്സുകൾ പരിശോധിച്ചു', offline:'സിഗ്നൽ കുറവായാലും ലഭ്യമാണ്',
      mapEyebrow:'തത്സമയ തീരദേശ ഭൂപടം · കൊച്ചി', mapTitle:'ഇന്ന് എവിടെയാണ് സുരക്ഷിതം', mapDesc:'സുരക്ഷ, ദൂരം, മീൻ സാധ്യത എന്നിവ കാണാൻ മേഖല തിരഞ്ഞെടുക്കൂ. വരയുള്ള വര പരിശോധിച്ച വഴിയാണ്.', mapLive:'തത്സമയം', harbour:'കൊച്ചി തുറമുഖം', restricted:'നിയന്ത്രിത മേഖല', shipping:'കപ്പൽ പാത', depth:'20 മീ ആഴ രേഖ', routeTo:'സുരക്ഷിത വഴി', selectZone:'മേഖല തിരഞ്ഞെടുക്കൂ', viewZones:'എല്ലാ മേഖലകളും കാണുക', safeReturn:'11-ന് മുമ്പ് മടങ്ങുക',
      corrEyebrow:'കടൽ ↔ മീൻ ബന്ധങ്ങൾ', corrTitle:'കടൽ ഇങ്ങനെ പെരുമാറുന്നത് എന്തുകൊണ്ട്', corrDesc:'INCOIS-ന്റെ 30 ദിവസത്തെ ഡാറ്റയിൽ നിന്നുള്ള മൂന്ന് തത്സമയ പരസ്പരബന്ധങ്ങൾ.', corrInsight:'ചൂടുവെള്ളം + ക്ലോറോഫിൽ = കൂടുതൽ മീൻ — പക്ഷേ 18 നോട്ടിന് മുകളിലുള്ള കാറ്റ് എല്ലാം മാറ്റും. അതുകൊണ്ടാണ് ഇന്ന് മേഖല B മികച്ചത്.', corrExplore:'മുഴുവൻ സമുദ്ര ഡാറ്റ കാണുക', readings:'124 റീഡിംഗ് · 30 ദിവസം',
      placeLine:'കൊച്ചി, കേരളം · അറബിക്കടൽ', listen:'കേൾക്കുക', windLabel:'കാറ്റ്', gentle:'മൃദു', waveLabel:'തിര', calm:'ശാന്തം', rainLabel:'മഴ', lowChance:'കുറഞ്ഞ സാധ്യത', harbourStart:'കൊച്ചി തുറമുഖം', start:'തുടക്കം', fishHere:'അടയാളപ്പെടുത്തിയ മേഖലയിൽ മീൻപിടിക്കുക', backHarbour:'തുറമുഖത്ത് മടക്കം', safeArrival:'സുരക്ഷിത വരവ്', zoneWord:'മേഖല', selectedVerb:'തിരഞ്ഞെടുത്തു', questionSent:'ചോദ്യം ഓർക്കയ്ക്ക് അയച്ചു', listening:'കേൾക്കുന്നു…', listeningStopped:'വോയ്‌സ് ഇൻപുട്ട് നിർത്തി', readingAloud:'ഇന്നത്തെ പദ്ധതി വായിക്കുന്നു', insightPrefix:'ഓർക്ക ഉൾക്കാഴ്ച', buffer:'2 നോട്ടിക്കൽ മൈൽ ബഫർ', scaleTen:'10 നോട്ടിക്കൽ മൈൽ', coastShort:'കൊച്ചി · കേരളം' },
    zones: { eyebrow:'4 മിനിറ്റ് മുമ്പ് പുതുക്കി', title:'മത്സ്യബന്ധന മേഖലകൾ', desc:'ആദ്യം സുരക്ഷയും പിന്നീട് മീൻ സാധ്യതയും അനുസരിച്ചാണ് മേഖലകൾ ക്രമീകരിച്ചത്.', safety:'സുരക്ഷ ആദ്യം.', note:'മേഖല A-യിൽ മീൻ കൂടുതലാണ്, പക്ഷേ ശാന്തമായ തിരകളും സുരക്ഷിത അതിർത്തിയും കാരണം ഓർക്ക മേഖല B ശുപാർശ ചെയ്യുന്നു.', selected:'തിരഞ്ഞെടുത്ത മേഖല', plan:'വഴി തയ്യാറാക്കുക', you:'നിങ്ങൾ', safer:'സുരക്ഷിതം', care:'ശ്രദ്ധിക്കുക', avoid:'ഒഴിവാക്കുക', zoneWord:'മേഖല' },
    weather: { eyebrow:'കൊച്ചി തീരം · ഇന്ന്', title:'കടലും കാലാവസ്ഥയും', desc:'മത്സ്യബന്ധനത്തിന് ആവശ്യമായ കടൽ സാഹചര്യങ്ങളുടെ ലളിതമായ വിവരം.', now:'ഇപ്പോൾ', bright:'മൃദു കാറ്റോടെ തെളിഞ്ഞ കാലാവസ്ഥ', good:'ഇന്ന് രാവിലെ നല്ല സ്ഥിതി', back:'രാവിലെ 11-ന് മുമ്പ് മടങ്ങുക.', hourly:'മണിക്കൂർ വിവരം', change:'കടൽ എങ്ങനെ മാറും', current:'നിലവിലെ സ്ഥിതി', know:'അറിയേണ്ടത്', tide:'വേലിയേറ്റം', rising:'രാവിലെ 9:40 വരെ വേലിയേറ്റം', meaning:'ഇതിന്റെ അർത്ഥം:', tideNote:'വേലിയേറ്റവും മൃദു ഒഴുക്കും രാവിലെ തുറമുഖത്ത് നിന്ന് പുറപ്പെടാൻ സഹായിക്കും.', correlations:'സമുദ്ര പരസ്പരബന്ധ ഡാറ്റ', correlationDesc:'കടൽ സ്ഥിതി മീൻ സാധ്യതയെയും വഴിയുടെ സുരക്ഷയെയും എങ്ങനെ ബാധിക്കുന്നു.', low:'താഴ്ന്നത്', high:'ഉയർന്നത്', dataWindow:'30 ദിവസം · 124 റീഡിംഗ്', model:'INCOIS · ഓർക്ക മോഡൽ' },
    route: { eyebrow:'സുരക്ഷ പരിശോധിച്ച വഴി', title:'സുരക്ഷിത വഴി', desc:'നീല വഴി പിന്തുടർന്ന് കാലാവസ്ഥ മാറുന്നതിന് മുമ്പ് മടങ്ങുക.', destination:'നിങ്ങളുടെ ലക്ഷ്യം', leaving:'രാവിലെ 6:00-ന് കൊച്ചി തുറമുഖത്ത് നിന്ന് പുറപ്പെടുന്നു', distance:'ദൂരം', travel:'യാത്രാ സമയം', back:'തുറമുഖത്ത് മടക്കം', steps:'ഈ ഘട്ടങ്ങൾ പിന്തുടരുക', directions:'ദിശകൾ', save:'വഴി ഓഫ്‌ലൈനായി സൂക്ഷിക്കുക', share:'കുടുംബവുമായി പദ്ധതി പങ്കിടുക', zoneWord:'മേഖല', start:'തുടക്കം', restricted:'നിയന്ത്രിത മേഖല' },
    safety: { eyebrow:'ആവശ്യസമയത്ത് സഹായം', title:'സുരക്ഷയും അറിയിപ്പുകളും', desc:'പ്രധാന മുന്നറിയിപ്പുകൾ വ്യക്തമായി എഴുതുകയും കേൾക്കുകയും ചെയ്യാം.', emergency:'അടിയന്തര സഹായം', danger:'കടലിൽ അപകടത്തിലാണോ?', send:'വള്ളത്തിന്റെ സ്ഥാനം അയച്ച് കോസ്റ്റ് ഗാർഡിനെ വിളിക്കുക.', get:'അടിയന്തര സഹായം നേടുക', active:'നിങ്ങളുടെ പ്രദേശത്ത് സജീവം', current:'നിലവിലെ അറിയിപ്പുകൾ', before:'പുറപ്പെടുന്നതിന് മുമ്പ്', check:'5-ഘട്ട വള്ള പരിശോധന', complete:'തുറമുഖം വിടുന്നതിന് മുമ്പ് അഞ്ച് പരിശോധനകളും പൂർത്തിയാക്കുക.' },
    assistant: { eyebrow:'ലളിതമായ ഭാഷയിൽ സഹായം', title:'ഓർക്കയോട് ചോദിക്കൂ', desc:'മീൻ, കാലാവസ്ഥ, വഴി അല്ലെങ്കിൽ സുരക്ഷ എന്നിവയെക്കുറിച്ച് ചോദിക്കൂ.', online:'ഇന്ത്യൻ സമുദ്ര ഡാറ്റ ഉപയോഗിക്കുന്നു', placeholder:'ചോദ്യം എഴുതുക…', try:'ചോദിക്കാം', common:'സാധാരണ ചോദ്യങ്ങൾ' },
    history: { eyebrow:'മുൻ യാത്രകൾ', title:'യാത്രാ ചരിത്രം', desc:'മുൻ വഴികളും മുന്നറിയിപ്പുകളും മീൻ ഫലങ്ങളും കാണുക.', trips:'ഈ മാസത്തെ യാത്രകൾ', catch:'ആകെ മീൻ', score:'സുരക്ഷാ സ്കോർ', recent:'സമീപകാലം', yours:'നിങ്ങളുടെ യാത്രകൾ', safeTrip:'സുരക്ഷിത യാത്ര', returnedEarly:'നേരത്തെ മടങ്ങി', daysLabel:'30 ദിവസം', sep:'സെപ്റ്റം', aug:'ഓഗ' },
    settings: { eyebrow:'ഓർക്ക സൗകര്യപ്രദമാക്കുക', title:'പ്രവേശന സൗകര്യവും ഡിസ്പ്ലേയും', desc:'ആപ്പിന്റെ രൂപവും വായന വലുപ്പവും ചലനവും തിരഞ്ഞെടുക്കുക.', theme:'സ്ക്രീൻ തീം', themeNote:'നിങ്ങളുടെ സാഹചര്യത്തിന് അനുയോജ്യമായ കാഴ്ച തിരഞ്ഞെടുക്കുക.', text:'അക്ഷര വലുപ്പം', textNote:'ഓരോ വാക്കും എളുപ്പത്തിൽ വായിക്കുക.', language:'ഭാഷ', languageNote:'നിങ്ങൾക്ക് പരിചിതമായ ഭാഷ തിരഞ്ഞെടുക്കുക.', voice:'വിവരം കേൾക്കുക', voiceNote:'കാലാവസ്ഥയും സുരക്ഷാ സന്ദേശങ്ങളും ശബ്ദത്തിൽ കേൾക്കുക.', motion:'ചലനം കുറയ്ക്കുക', motionNote:'ആനിമേഷൻ പ്രഭാവങ്ങൾ ഓഫ് ചെയ്യുക.', day:'പകൽ', night:'രാത്രി', highContrast:'ഉയർന്ന ദൃശ്യതീവ്രത' },
  },
}

const LANGS = [
  { code:'en', short:'EN', label:'English', native:'English' },
  { code:'hi', short:'हिं', label:'Hindi', native:'हिन्दी' },
  { code:'ml', short:'മ', label:'Malayalam', native:'മലയാളം' },
]

const zoneData = [
  { id:'B', name:'Bluefin Shelf', hindi:'ब्लूफिन शेल्फ', local:'ബ്ലൂഫിൻ ഷെൽഫ്', distance:'19.6 nm', time:'2 hr 18 min', fish:77, risk:'Low risk', riskLevel:'good', wave:'1.1 m', wind:'11 kn', note:'Good catch chance with calm water and a clear legal boundary.' },
  { id:'C', name:'Coral Reach', hindi:'कोरल रीच', local:'കോറൽ റീച്ച്', distance:'23.1 nm', time:'2 hr 46 min', fish:71, risk:'Medium risk', riskLevel:'watch', wave:'1.8 m', wind:'17 kn', note:'Usable backup zone. Cross-current may use more fuel.' },
  { id:'A', name:'Aster Bank', hindi:'एस्टर बैंक', local:'ആസ്റ്റർ ബാങ്ക്', distance:'28.4 nm', time:'3 hr 12 min', fish:82, risk:'High risk', riskLevel:'danger', wave:'2.7 m', wind:'26 kn', note:'Catch chance is high, but waves are building near a restricted boundary.' },
]

const zoneName = (z, language) => language === 'ml' ? z.local : language === 'hi' ? z.hindi : z.name

const navItems = [['home','home'],['zones','fish'],['weather','cloud'],['route','route'],['safety','shield'],['assistant','message'],['history','history'],['settings','settings']]

const globalText = {
  en: { skip:'Skip to main content', prototype:'SIH 2026 · Student prototype', coast:'PS 176 / Coastal India', updated:'Updated 2 min ago', settings:'Open accessibility settings', pilot:'INDIA COASTAL PILOT', pilotNote:'Built for low-connectivity use', assistant:'ORCA help', assistantHello:'Namaste! Ask me about today’s sea, fishing zones, routes, or safety.', assistantReply:'Zone B is the safer choice this morning. Waves are calm and the return window is before 11 AM.', thinking:'Checking today’s marine data…', send:'Send message', open:'Open ORCA help', close:'Close ORCA help', language:'Language', selectLanguage:'Select language', dateLine:'IST · 08 SEP', call:'Call', cancel:'Cancel', sendAlert:'Send alert', emergencyTitle:'Send an emergency alert?', emergencyBody:'This demo will simulate sending your current boat location to the Coast Guard and your family contact.', emergencySent:'Demo emergency alert sent', readAloud:'Read aloud', sos:'SOS · 1093' },
  hi: { skip:'मुख्य सामग्री पर जाएँ', prototype:'SIH 2026 · छात्र प्रोटोटाइप', coast:'PS 176 / तटीय भारत', updated:'2 मिनट पहले अपडेट', settings:'पहुंच सेटिंग खोलें', pilot:'भारत तटीय पायलट', pilotNote:'कम नेटवर्क में उपयोग के लिए', assistant:'ORCA सहायता', assistantHello:'नमस्ते! आज के समुद्र, मछली क्षेत्र, रास्ते या सुरक्षा के बारे में पूछें।', assistantReply:'आज सुबह क्षेत्र B अधिक सुरक्षित है। लहरें शांत हैं और वापसी का समय सुबह 11 बजे से पहले है।', thinking:'आज का समुद्री डेटा जाँच रहे हैं…', send:'संदेश भेजें', open:'ORCA सहायता खोलें', close:'ORCA सहायता बंद करें', language:'भाषा', selectLanguage:'भाषा चुनें', dateLine:'IST · 08 सितं', call:'कॉल करें', cancel:'रद्द करें', sendAlert:'अलर्ट भेजें', emergencyTitle:'आपातकालीन अलर्ट भेजें?', emergencyBody:'यह डेमो तटरक्षक और आपके परिवार को आपकी नाव की वर्तमान स्थिति भेजने का अनुकरण करेगा।', emergencySent:'डेमो आपातकालीन अलर्ट भेजा गया', readAloud:'ज़ोर से पढ़ें', sos:'SOS · 1093' },
  ml: { skip:'പ്രധാന ഉള്ളടക്കത്തിലേക്ക് പോകുക', prototype:'SIH 2026 · വിദ്യാർത്ഥി മാതൃക', coast:'PS 176 / തീരദേശ ഇന്ത്യ', updated:'2 മിനിറ്റ് മുമ്പ് പുതുക്കി', settings:'പ്രവേശന ക്രമീകരണം തുറക്കുക', pilot:'ഇന്ത്യ തീരദേശ പൈലറ്റ്', pilotNote:'കുറഞ്ഞ നെറ്റ്‌വർക്കിലും ഉപയോഗിക്കാം', assistant:'ഓർക്ക സഹായം', assistantHello:'നമസ്കാരം! ഇന്നത്തെ കടൽ, മത്സ്യമേഖല, വഴി, സുരക്ഷ എന്നിവ ചോദിക്കൂ.', assistantReply:'ഇന്ന് രാവിലെ മേഖല B കൂടുതൽ സുരക്ഷിതമാണ്. തിര ശാന്തമാണ്; 11 മണിക്ക് മുമ്പ് മടങ്ങുക.', thinking:'ഇന്നത്തെ സമുദ്ര ഡാറ്റ പരിശോധിക്കുന്നു…', send:'സന്ദേശം അയയ്ക്കുക', open:'ഓർക്ക സഹായം തുറക്കുക', close:'ഓർക്ക സഹായം അടയ്ക്കുക', language:'ഭാഷ', selectLanguage:'ഭാഷ തിരഞ്ഞെടുക്കുക', dateLine:'IST · 08 സെപ്റ്റം', call:'വിളിക്കുക', cancel:'റദ്ദാക്കുക', sendAlert:'അലേർട്ട് അയയ്ക്കുക', emergencyTitle:'അടിയന്തര അലേർട്ട് അയയ്ക്കണോ?', emergencyBody:'ഈ ഡെമോ കോസ്റ്റ് ഗാർഡിലേക്കും കുടുംബത്തിലേക്കും വള്ളത്തിന്റെ നിലവിലെ സ്ഥാനം അയയ്ക്കുന്നത് അനുകരിക്കും.', emergencySent:'ഡെമോ അടിയന്തര അലേർട്ട് അയച്ചു', readAloud:'ഉറക്കെ വായിക്കുക', sos:'SOS · 1093' },
}

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
  const g = globalText[language]
  const zone = zoneData.find(item => item.id === selectedZone)
  const go = (next) => { setPage(next); window.scrollTo({top:0, behavior: reducedMotion ? 'auto' : 'smooth'}) }
  const notify = (message) => { setToast(message); window.setTimeout(() => setToast(''), 2500) }
  useEffect(() => { document.documentElement.lang = language }, [language])

  return <div className={`app theme-${theme} text-${textSize} ${reducedMotion ? 'reduce-motion' : ''}`}>
    <a className="skip-link" href="#main-content">{g.skip}</a>
    <header className="topbar">
      <div className="brand" onClick={() => go('home')} role="button" tabIndex="0" onKeyDown={(e) => e.key === 'Enter' && go('home')}><span className="brand-mark"><Icon name="waves"/></span><span><strong>{t.app}</strong><small>{t.tagline}</small></span></div>
      <div className="sector-code"><span>{g.prototype}</span><strong>{g.coast}</strong></div>
      <div className="harbour-pill"><Icon name="location" size={18}/><span><strong>{t.location}</strong><small><i/>{t.connected} · {g.updated}</small></span></div>
      <div className="top-actions"><div className="service-time"><strong>05:42</strong><span>{g.dateLine}</span></div><LanguageDropdown language={language} setLanguage={setLanguage} notify={notify} /><button className="icon-button" onClick={() => go('settings')} aria-label={g.settings}><Icon name="settings"/></button><button className="header-emergency" onClick={() => go('safety')}><Icon name="phone" size={18}/><span>{g.sos}</span></button></div>
    </header>
    <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(([id, icon], index) => <NavItem key={id} id={id} icon={icon} index={index + 1} label={t.nav[id]} current={page} onClick={go}/>)}<div className="india-pilot"><span className="india-wheel">✦</span><div><strong>{g.pilot}</strong><small>{g.pilotNote}</small></div></div></nav>
    <div className="app-shell">
      <main id="main-content" className="main-content" tabIndex="-1">
        {page === 'home' && <Home t={t} language={language} go={go} zone={zone} selectedZone={selectedZone} setSelectedZone={setSelectedZone} notify={notify}/>} 
        {page === 'zones' && <Zones language={language} selected={selectedZone} setSelected={setSelectedZone} go={go}/>} 
        {page === 'weather' && <Weather language={language}/>} {page === 'route' && <Route zone={zone} language={language} setZone={setSelectedZone} notify={notify}/>} 
        {page === 'safety' && <Safety language={language} onEmergency={() => setShowEmergency(true)} notify={notify}/>} 
        {page === 'assistant' && <Assistant language={language}/>} {page === 'history' && <History language={language} go={go}/>} 
        {page === 'settings' && <Settings theme={theme} setTheme={setTheme} textSize={textSize} setTextSize={setTextSize} language={language} setLanguage={setLanguage} reducedMotion={reducedMotion} setReducedMotion={setReducedMotion} notify={notify}/>} 
      </main>
    </div>
    <nav className="mobile-nav" aria-label="Mobile navigation"><div className="mobile-nav-scroll">{navItems.map(([id, icon]) => <NavItem key={id} id={id} icon={icon} label={t.nav[id]} current={page} onClick={go}/>)}</div></nav>
    <GlobalChat language={language}/>
    {toast && <div className="toast" role="status" aria-live="polite"><Icon name="check" size={18}/>{toast}</div>}
    {showEmergency && <EmergencyDialog onClose={() => setShowEmergency(false)} notify={notify} language={language}/>} 
  </div>
}

function Home({ t, language, go, zone, selectedZone, setSelectedZone, notify }) {
  const [question, setQuestion] = useState('')
  const [listening, setListening] = useState(false)
  const c = pageText[language].home
  const submit = () => { if (question.trim()) { go('assistant'); notify(c.questionSent) } }
  const zName = zoneName(zone, language)
  return <div className="page home-page">
    <header className="field-heading"><div><span>{c.placeLine}</span><h1>{t.planTitle}</h1><p>{t.sub}</p></div><button onClick={() => notify(c.readingAloud)}><Icon name="speaker"/><span>{c.listen}</span></button></header>

    <section className="departure-board" aria-labelledby="sea-status-title">
      <div className="departure-verdict"><span>{c.departure}</span><strong>{c.go}</strong><small>{c.suitable}</small></div>
      <div className="departure-window"><span className="board-label">{c.best}</span><h2 id="sea-status-title">{c.leave}<br/>{c.return}</h2><p>{t.safeBody}</p></div>
      <div className="departure-conditions"><div><Icon name="wind"/><span>{c.windLabel}<strong>11 kn</strong><small>{c.gentle}</small></span></div><div><Icon name="waves"/><span>{c.waveLabel}<strong>1.1 m</strong><small>{c.calm}</small></span></div><div><Icon name="cloud"/><span>{c.rainLabel}<strong>20%</strong><small>{c.lowChance}</small></span></div><button onClick={() => go('weather')}>{c.forecast} <Icon name="arrow"/></button></div>
    </section>

    <HomeMap language={language} zone={zone} selectedZone={selectedZone} setSelectedZone={setSelectedZone} go={go} notify={notify} />

    <div className="field-layout">
      <section className="route-story">
        <div className="story-head"><div><span className="board-label">{c.recommendation}</span><h2>{zName}</h2><p>{c.zoneWord} {zone.id} · {zone.distance} {c.from} · {zone.time}</p></div><div className="hand-score"><strong>{zone.fish}</strong><span>{c.catch}</span></div></div>
        <div className="route-thread" aria-label="Suggested journey timeline"><div className="thread-stop start"><i><Icon name="boat"/></i><span><small>06:00</small><strong>{c.harbourStart}</strong><em>{c.start}</em></span></div><div className="thread-line"><span>{zone.distance}</span></div><div className="thread-stop"><i><Icon name="location"/></i><span><small>{zone.id === 'B' ? '08:18' : zone.id === 'C' ? '08:46' : '09:12'}</small><strong>{zName}</strong><em>{c.fishHere}</em></span></div><div className="thread-line return"><span>{c.safeReturn}</span></div><div className="thread-stop finish"><i><Icon name="shield"/></i><span><small>10:55</small><strong>{c.backHarbour}</strong><em>{c.safeArrival}</em></span></div></div>
        <div className="editorial-note"><span>{c.why}</span><p>{pageText[language].zones.note}</p></div>
        <div className="story-actions"><button className="primary-button" onClick={() => go('route')}>{c.route} <Icon name="arrow"/></button><button className="text-button" onClick={() => go('zones')}>{c.compare}</button></div>
      </section>

      <aside className="field-sidebar">
        <section className="ask-strip"><span className="board-label">{c.ask}</span><h2>{c.askTitle}</h2><p>{c.askHelp}</p><label className="sr-only" htmlFor="home-question">{c.ask}</label><div className="ask-line"><input id="home-question" value={question} onChange={e => setQuestion(e.target.value)} onKeyDown={e => e.key === 'Enter' && submit()} placeholder={t.placeholder}/><button className={listening ? 'is-listening' : ''} onClick={() => { setListening(!listening); notify(listening ? c.listeningStopped : c.listening) }} aria-label={c.ask}><Icon name="mic"/></button><button onClick={submit} aria-label={c.ask}><Icon name="arrow"/></button></div></section>
        <section className="watch-list"><div className="watch-title"><span className="board-label">{c.watch}</span><button onClick={() => go('safety')}>{c.alerts}</button></div><div className="watch-item warning"><Icon name="wind"/><div><strong>{c.wind}</strong><p>{c.windNote}</p></div><span>11:00</span></div><div className="watch-item"><Icon name="shield"/><div><strong>{c.cyclone}</strong><p>{c.cycloneNote}</p></div><span>✓</span></div><div className="watch-item"><Icon name="location"/><div><strong>{c.boundary}</strong><p>{c.boundaryNote}</p></div><span>✓</span></div></section>
        <div className="source-stamp"><Icon name="check"/><div><strong>{c.checked}</strong><span>INCOIS · IMD · NavIC · Indian Coast Guard</span></div></div>
        <div className="offline-stamp"><Icon name="bookmark"/><div><strong>{c.offline}</strong><span>05:40 IST</span></div></div>
      </aside>
    </div>

    <HomeCorrelations language={language} go={go} />
  </div>
}

function HomeMap({ language, zone, selectedZone, setSelectedZone, go, notify }) {
  const c = pageText[language].home
  const pins = [
    { id:'B', x:300, y:212, label: zoneName(zoneData[0], language) },
    { id:'C', x:368, y:312, label: zoneName(zoneData[1], language) },
    { id:'A', x:388, y:96, label: zoneName(zoneData[2], language) },
  ]
  const routes = {
    B: 'M110,300 C170,280 230,250 292,218',
    C: 'M110,300 C180,300 280,310 360,312',
    A: 'M110,300 C160,240 280,160 380,102',
  }
  const risks = language === 'hi' ? { B:'कम जोखिम', C:'मध्यम जोखिम', A:'अधिक जोखिम' } : language === 'ml' ? { B:'കുറഞ്ഞ അപകടം', C:'ഇടത്തരം അപകടം', A:'കൂടിയ അപകടം' } : { B:'Low risk', C:'Medium risk', A:'High risk' }
  return <section className="home-map-section" aria-labelledby="home-map-title">
    <div className="home-map-head">
      <div><span className="board-label live-dot"><i/>{c.mapEyebrow} · <b>{c.mapLive}</b></span><h2 id="home-map-title">{c.mapTitle}</h2><p>{c.mapDesc}</p></div>
      <div className="home-map-actions"><button className="secondary-button" onClick={() => go('zones')}>{c.viewZones}</button><button className="primary-button" onClick={() => go('route')}>{c.routeTo} {zone.id} <Icon name="arrow" size={18}/></button></div>
    </div>
    <div className="home-map-grid">
      <div className="home-map-canvas">
        <svg viewBox="0 0 520 420" role="img" aria-label={`${c.mapTitle}. ${c.routeTo} Zone ${selectedZone}`}>
          <defs>
            <pattern id="seaGrid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="currentColor" strokeOpacity="0.09" strokeWidth="1"/></pattern>
            <pattern id="hatch" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="rgba(201,79,59,0.08)"/><line x1="0" y1="0" x2="0" y2="8" stroke="#c94f3b" strokeWidth="1.4" opacity="0.55"/></pattern>
          </defs>
          <rect x="0" y="0" width="520" height="420" rx="4" className="sea-bg"/>
          <rect x="0" y="0" width="520" height="420" fill="url(#seaGrid)"/>
          <path d="M0,0 H150 C140,60 118,110 128,170 C136,220 118,260 124,310 C128,350 118,390 122,420 H0 Z" className="coast-land"/>
          <path d="M150,0 C140,60 118,110 128,170 C136,220 118,260 124,310 C128,350 118,390 122,420" className="coast-line" fill="none"/>
          <text x="52" y="200" className="coast-label" transform="rotate(-78 52 200)">{c.coastShort}</text>
          <path d="M150,120 C230,130 320,150 470,140" className="depth-line" strokeDasharray="7 6" fill="none"/>
          <text x="350" y="132" className="depth-label">{c.depth}</text>
          <line x1="200" y1="392" x2="470" y2="330" className="shipping-lane" strokeDasharray="12 8"/>
          <text x="342" y="372" className="shipping-label">{c.shipping}</text>
          <rect x="352" y="30" width="132" height="72" rx="4" fill="url(#hatch)" stroke="#c94f3b" strokeDasharray="5 4"/>
          <text x="362" y="58" className="restricted-label">{c.restricted}</text>
          <text x="362" y="74" className="restricted-sub">{c.buffer}</text>
          {pins.filter(p => p.id !== selectedZone).map(p => <circle key={p.id} cx={p.x} cy={p.y} r="34" className={`zone-halo halo-${zoneData.find(z=>z.id===p.id).riskLevel}`}/>)}
          <path d={routes[selectedZone]} className="home-route-line" fill="none"/>
          <circle cx="110" cy="300" r="7" className="route-dot route-start"/>
          <circle cx={pins.find(p=>p.id===selectedZone).x} cy={pins.find(p=>p.id===selectedZone).y} r="7" className="route-dot route-end"/>
          <g className="harbour-pin"><rect x="88" y="272" width="44" height="22" rx="11" className="harbour-pill-bg"/><circle cx="110" cy="300" r="14" className="harbour-ring"/><text x="110" y="305" textAnchor="middle" className="harbour-anchor">⚓</text><text x="110" y="262" textAnchor="middle" className="harbour-text">{c.harbour}</text></g>
          {pins.map(p => {
            const z = zoneData.find(zz => zz.id === p.id)
            const active = p.id === selectedZone
            return <g key={p.id} className={`map-pin ${active ? 'active' : ''} risk-${z.riskLevel}`} transform={`translate(${p.x},${p.y})`} onClick={() => setSelectedZone(p.id)} role="button" tabIndex="0" aria-label={`${p.label}, ${risks[p.id]}`} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedZone(p.id)}>
              <circle r={active ? 24 : 20} className="pin-circle"/>
              <text textAnchor="middle" dy="7" className="pin-letter">{p.id}</text>
              {active && <circle r="31" className="pin-pulse"/>}
            </g>
          })}
          <g className="compass" transform="translate(472,52)"><circle r="20"/><text y="-4">N</text><path d="M0,8 L-5,-3 L0,-8 L5,-3 Z"/></g>
          <g className="map-scale" transform="translate(24,384)"><line x1="0" y1="0" x2="90" y2="0"/><line x1="0" y1="-5" x2="0" y2="5"/><line x1="45" y1="-5" x2="45" y2="5"/><line x1="90" y1="-5" x2="90" y2="5"/><text x="45" y="-8" textAnchor="middle">{c.scaleTen}</text></g>
        </svg>
        <div className="map-legend"><span><i className="dot good"/>{risks.B}</span><span><i className="dot watch"/>{risks.C}</span><span><i className="dot danger"/>{risks.A}</span><span className="route-key"><i className="dash"/> {c.routeTo} {selectedZone}</span></div>
      </div>
      <aside className="home-map-side">
        <span className="board-label">{c.selectZone}</span>
        {zoneData.map(z => <button key={z.id} onClick={() => { setSelectedZone(z.id); notify(`${c.zoneWord} ${z.id} ${c.selectedVerb}`) }} className={`map-zone-btn ${selectedZone === z.id ? 'active' : ''}`} aria-pressed={selectedZone === z.id}>
          <span className={`zone-letter ${z.riskLevel}`}>{z.id}</span>
          <span className="map-zone-copy"><strong>{zoneName(z, language)}</strong><small>{z.distance} · {z.time} · {z.wave} · {z.wind}</small></span>
          <span className={`status-badge ${z.riskLevel}`}>{risks[z.id]}</span>
        </button>)}
        <div className="map-detail-box"><div><small>{c.routeTo} {c.zoneWord} {zone.id}</small><strong>{zoneName(zone, language)} · {zone.distance}</strong><p>🌊 {zone.wave} · 💨 {zone.wind} · 🐟 {zone.fish}% · {c.safeReturn}</p></div><button className="primary-button full" onClick={() => go('route')}>{c.route} <Icon name="arrow" size={18}/></button></div>
      </aside>
    </div>
  </section>
}

function HomeCorrelations({ language, go }) {
  const c = pageText[language].home
  const cards = language === 'hi' ? [
    { n:'01', title:'समुद्र तापमान → मछली', r:'+0.82', strength:82, label:'मजबूत संबंध', x:'तापमान °C', y:'मछली %', points:[22,30,41,52,64,74,82], note:'28.5°C पर सबसे अच्छी पकड़' },
    { n:'02', title:'क्लोरोफिल → PFZ', r:'+0.76', strength:76, label:'मजबूत संबंध', x:'क्लोरोफिल', y:'PFZ %', points:[18,27,36,55,60,70,78], note:'हरा पानी = अधिक सार्डिन' },
    { n:'03', title:'हवा → लहर जोखिम', r:'+0.91', strength:91, label:'बहुत मजबूत', x:'हवा kn', y:'जोखिम %', points:[12,18,27,39,55,70,89], note:'18 kn के बाद खतरा तेज़' },
  ] : language === 'ml' ? [
    { n:'01', title:'കടൽ താപനില → മീൻ', r:'+0.82', strength:82, label:'ശക്തമായ ബന്ധം', x:'താപനില °C', y:'മീൻ %', points:[22,30,41,52,64,74,82], note:'28.5°C-ൽ മികച്ച മീൻ' },
    { n:'02', title:'ക്ലോറോഫിൽ → PFZ', r:'+0.76', strength:76, label:'ശക്തമായ ബന്ധം', x:'ക്ലോറോഫിൽ', y:'PFZ %', points:[18,27,36,55,60,70,78], note:'പച്ച വെള്ളം = കൂടുതൽ ചാള' },
    { n:'03', title:'കാറ്റ് → തിര അപകടം', r:'+0.91', strength:91, label:'വളരെ ശക്തം', x:'കാറ്റ് kn', y:'അപകടം %', points:[12,18,27,39,55,70,89], note:'18 kn-ന് ശേഷം അപകടം കൂടും' },
  ] : [
    { n:'01', title:'Sea temperature → catch', r:'+0.82', strength:82, label:'Strong link', x:'Temp °C', y:'Catch %', points:[22,30,41,52,64,74,82], note:'Best catch near 28.5°C' },
    { n:'02', title:'Chlorophyll → PFZ', r:'+0.76', strength:76, label:'Strong link', x:'Chlorophyll', y:'PFZ %', points:[18,27,36,55,60,70,78], note:'Green water = more sardines' },
    { n:'03', title:'Wind → wave risk', r:'+0.91', strength:91, label:'Very strong', x:'Wind kn', y:'Risk %', points:[12,18,27,39,55,70,89], note:'Risk spikes past 18 kn' },
  ]
  return <section className="home-corr-section" aria-labelledby="home-corr-title">
    <div className="home-corr-head"><div><span className="board-label">{c.corrEyebrow} · INCOIS</span><h2 id="home-corr-title">{c.corrTitle}</h2><p>{c.corrDesc}</p></div><span className="data-window">{c.readings}</span></div>
    <div className="home-corr-grid">{cards.map(card => {
      const coords = card.points.map((p,i) => `${34 + i * 38},${140 - p}`).join(' ')
      return <article key={card.n} className="corr-card">
        <div className="corr-top"><span className="corr-num">{card.n}</span><div><h3>{card.title}</h3><small>{card.note}</small></div><strong className="corr-r">r {card.r}</strong></div>
        <svg viewBox="0 0 300 178" role="img" aria-label={`${card.title}, correlation ${card.r}`}>
          <line x1="34" y1="16" x2="34" y2="144" className="chart-axis"/><line x1="34" y1="144" x2="284" y2="144" className="chart-axis"/>
          <line x1="34" y1="102" x2="284" y2="102" className="chart-gridline"/><line x1="34" y1="60" x2="284" y2="60" className="chart-gridline"/>
          <line x1="34" y1="128" x2="284" y2="48" className="trend-line" strokeDasharray="6 5"/>
          <polyline points={coords} className="chart-line"/>
          {card.points.map((p,i) => <g key={i}><circle cx={34 + i * 38} cy={140 - p} r="6" className="chart-point"/><title>{`${card.x}: ${i+1}, ${card.y}: ${p}%`}</title></g>)}
          <text x="159" y="170" textAnchor="middle" className="chart-label">{card.x}</text>
          <text x="11" y="80" textAnchor="middle" transform="rotate(-90 11 80)" className="chart-label">{card.y}</text>
        </svg>
        <div className="corr-strength"><span>{card.label}</span><div className="strength-bar"><i style={{ width: `${card.strength}%` }}/></div><b>{card.strength}%</b></div>
      </article>
    })}</div>
    <div className="corr-insight"><Icon name="info" size={20}/><p><strong>{c.insightPrefix} · </strong>{c.corrInsight}</p><button className="text-button" onClick={() => go('weather')}>{c.corrExplore} <Icon name="arrow" size={18}/></button></div>
  </section>
}

function Zones({ language, selected, setSelected, go }) {
  const current = zoneData.find(z => z.id === selected)
  const c = pageText[language].zones
  const risks = language === 'hi' ? ['कम जोखिम','मध्यम जोखिम','अधिक जोखिम'] : language === 'ml' ? ['കുറഞ്ഞ അപകടം','ഇടത്തരം അപകടം','കൂടിയ അപകടം'] : ['Low risk','Medium risk','High risk']
  return <div className="page"><PageHeading eyebrow={c.eyebrow} title={c.title} description={c.desc}/><div className="zones-layout"><section className="zone-list" aria-label={c.title}>{zoneData.map((zone, index) => <button key={zone.id} onClick={() => setSelected(zone.id)} className={`zone-list-item ${selected === zone.id ? 'selected' : ''}`} aria-pressed={selected === zone.id}><span className="rank">{index + 1}</span><span className={`zone-letter ${zone.riskLevel}`}>{zone.id}</span><span className="zone-list-copy"><strong>{zoneName(zone, language)}</strong><small>{zone.distance} · {zone.time}</small></span><span className={`status-badge ${zone.riskLevel}`}><Icon name={zone.riskLevel === 'danger' ? 'alert' : 'shield'} size={14}/>{risks[index]}</span><Icon name="chevron" size={18}/></button>)}<div className="simple-note"><Icon name="info"/><p><strong>{c.safety}</strong> {c.note}</p></div></section>
      <section className="card simple-map" aria-label={c.title}><div className="map-water"><div className="map-land"><span>KOCHI</span></div><div className="boat-marker"><Icon name="boat" size={26}/><span>{c.you}</span></div><div className="safe-route-line"/>{zoneData.map((z,index) => <button key={z.id} onClick={() => setSelected(z.id)} className={`map-zone zone-${z.id.toLowerCase()} ${selected === z.id ? 'selected' : ''}`} aria-label={`${zoneName(z, language)}, ${risks[index]}`}><b>{z.id}</b><span>{risks[index]}</span></button>)}<div className="map-key"><span><i className="good"/>{c.safer}</span><span><i className="watch"/>{c.care}</span><span><i className="danger"/>{c.avoid}</span></div></div><div className="map-detail"><div><span className="plain-label">{c.selected}</span><h2>{zoneName(current, language)}</h2><p>{c.note}</p></div><button className="primary-button" onClick={() => go('route')}>{c.plan} <Icon name="arrow"/></button></div></section></div></div>
}

function Weather({ language }) {
  const forecast = [['6 AM','10 kn','0.9 m','Good'],['8 AM','11 kn','1.1 m','Good'],['10 AM','15 kn','1.4 m','Watch'],['12 PM','20 kn','2.0 m','Avoid'],['2 PM','25 kn','2.6 m','Avoid']]
  const c = pageText[language].weather
  const state = language === 'hi' ? ['अच्छा','अच्छा','ध्यान','बचें','बचें'] : language === 'ml' ? ['നല്ലത്','നല്ലത്','ശ്രദ്ധ','ഒഴിവാക്കുക','ഒഴിവാക്കുക'] : forecast.map(x=>x[3])
  const conditions = language === 'hi' ? [['हवा','11 नॉट WSW','अभी हल्की; 11 बजे बाद तेज़'],['लहर की ऊँचाई','1.1 मीटर','छोटी नावों के लिए ठीक'],['बारिश','20% संभावना','भारी बारिश की उम्मीद नहीं'],['बिजली','कोई चेतावनी नहीं','निगरानी जारी']] : language === 'ml' ? [['കാറ്റ്','11 നോട് WSW','ഇപ്പോൾ മൃദു; 11-ന് ശേഷം ശക്തം'],['തിര ഉയരം','1.1 മീറ്റർ','ചെറിയ വള്ളങ്ങൾക്ക് അനുയോജ്യം'],['മഴ','20% സാധ്യത','കനത്ത മഴ പ്രതീക്ഷിക്കുന്നില്ല'],['മിന്നൽ','മുന്നറിയിപ്പില്ല','നിരീക്ഷണം തുടരുന്നു']] : [['Wind','11 knots WSW','Gentle now; stronger after 11 AM'],['Wave height','1.1 metres','Comfortable for small boats'],['Rain','20% chance','No heavy rain expected'],['Lightning','No warning','Monitoring continues']]
  return <div className="page"><PageHeading eyebrow={c.eyebrow} title={c.title} description={c.desc}/><section className="weather-hero card"><div className="weather-main"><span className="weather-symbol"><Icon name="sun" size={38}/></span><div><span>{c.now}</span><strong>29°C</strong><p>{c.bright}</p></div></div><div className="weather-advice"><span className="status-symbol good"><Icon name="check"/></span><div><strong>{c.good}</strong><p>{c.back}</p></div></div></section><section className="card forecast-card"><div className="section-heading"><div><span className="plain-label">{c.hourly}</span><h2>{c.change}</h2></div></div><div className="forecast-scroll">{forecast.map(([time,wind,wave],i) => <div className={`forecast-item ${i > 2 ? 'danger' : i === 2 ? 'watch' : 'good'}`} key={time}><strong>{time}</strong><Icon name={i > 2 ? 'cloud' : 'sun'} /><span><Icon name="wind" size={15}/>{wind}</span><span><Icon name="waves" size={15}/>{wave}</span><b>{state[i]}</b></div>)}</div></section><div className="weather-grid"><section className="card condition-list"><span className="plain-label">{c.current}</span><h2>{c.know}</h2>{conditions.map((item,i)=><Condition key={item[0]} icon={['wind','waves','cloud','alert'][i]} title={item[0]} value={item[1]} note={item[2]} status="good"/>)}</section><section className="card tide-card"><span className="plain-label">{c.tide}</span><h2>{c.rising}</h2><div className="tide-visual"><div className="tide-water"/><div className="tide-point p1"><i/><span>5:10<br/>{c.low}</span></div><div className="tide-point p2"><i/><span>9:40<br/>{c.high}</span></div><div className="tide-point p3"><i/><span>3:55<br/>{c.low}</span></div></div><div className="simple-note"><Icon name="info"/><p><strong>{c.meaning}</strong> {c.tideNote}</p></div></section></div><CorrelationPanel language={language}/></div>
}

function Route({ zone, language, setZone, notify }) {
  const c = pageText[language].route
  const steps = language === 'hi' ? [['चिह्नित चैनल से निकलें','हरे बंदरगाह संकेत दाईं ओर रखें।'],['पश्चिम में 11 समुद्री मील जाएँ','लहरें 1.2 मीटर से कम रहेंगी।'],['पीली बोया के बाद दक्षिण-पश्चिम मुड़ें','इससे जहाज़ मार्ग से बचेंगे।'],[`मछली क्षेत्र ${zone.id} में प्रवेश करें`,'सुरक्षित क्षेत्र के किनारे ORCA चेतावनी देगा।']] : language === 'ml' ? [['അടയാളപ്പെടുത്തിയ ചാനലിലൂടെ പുറപ്പെടുക','പച്ച തുറമുഖ ബോയകൾ വലതുവശത്ത് വയ്ക്കുക.'],['പടിഞ്ഞാറേക്ക് 11 നോട്ടിക്കൽ മൈൽ പോകുക','തിര 1.2 മീറ്ററിൽ താഴെയായിരിക്കും.'],['മഞ്ഞ ബോയ്ക്ക് ശേഷം തെക്കുപടിഞ്ഞാറോട്ട് തിരിയുക','കപ്പൽ പാത ഒഴിവാക്കാം.'],[`മത്സ്യമേഖല ${zone.id}-ൽ പ്രവേശിക്കുക`,'സുരക്ഷിത അതിർത്തിക്കരികിൽ ഓർക്ക അറിയിക്കും.']] : [['Leave through the marked channel','Keep the green harbour buoys on your right.'],['Travel west for 11 nautical miles','Waves remain below 1.2 metres.'],['Turn southwest after the yellow buoy','This avoids the shipping lane.'],[`Enter fishing Zone ${zone.id}`,'ORCA will alert you near the safe-area edge.']]
  return <div className="page"><PageHeading eyebrow={c.eyebrow} title={c.title} description={c.desc}/><div className="destination-switch" aria-label={c.destination}>{zoneData.map(z => <button key={z.id} onClick={() => setZone(z.id)} className={zone.id === z.id ? 'active' : ''}>{c.zoneWord} {z.id}<span>{zoneName(z, language)}</span></button>)}</div><section className="route-summary card"><div><span className="plain-label">{c.destination}</span><h2>{zoneName(zone, language)}</h2><p>{c.leaving}</p></div><div className="route-numbers"><span><b>{zone.distance}</b>{c.distance}</span><span><b>{zone.time}</b>{c.travel}</span><span><b>10:55 AM</b>{c.back}</span></div></section><div className="route-layout"><section className="card route-map"><div className="route-water"><div className="map-land wide"><span>KOCHI<br/>HARBOUR</span></div><div className="route-path"><i/><i/><i/></div><div className="start-pin"><Icon name="boat"/><span>{c.start}</span></div><div className={`destination-pin ${zone.riskLevel}`}><b>{zone.id}</b><span>{zoneName(zone, language)}</span></div><div className="avoid-area"><Icon name="alert" size={18}/><span>{c.restricted}</span></div></div></section><section className="card route-steps"><span className="plain-label">{c.steps}</span><h2>{c.directions}</h2>{steps.map((s,i)=><RouteStep key={s[0]} n={String(i+1)} title={s[0]} text={s[1]}/>) }<button className="primary-button full" onClick={() => notify(c.save)}><Icon name="bookmark"/>{c.save}</button><button className="secondary-button full" onClick={() => notify(c.share)}><Icon name="message"/>{c.share}</button></section></div></div>
}

function Safety({ language, onEmergency, notify }) {
  const c = pageText[language].safety
  const alerts = language === 'hi' ? [['11 बजे बाद तेज़ हवा','आज · 11:00 से 5:00','हवा तेज़ होने से पहले छोटी नावें लौटें।'],['एस्टर बैंक के पास प्रतिबंधित क्षेत्र','हमेशा सक्रिय','चिह्नित सीमा से कम से कम 2 समुद्री मील दूर रहें।'],['चक्रवात चेतावनी नहीं','6 मिनट पहले जाँचा','अगले 48 घंटों में चक्रवात का खतरा नहीं।']] : language === 'ml' ? [['11 മണിക്ക് ശേഷം ശക്തമായ കാറ്റ്','ഇന്ന് · 11:00 മുതൽ 5:00','കാറ്റ് ശക്തമാകുന്നതിന് മുമ്പ് ചെറിയ വള്ളങ്ങൾ മടങ്ങുക.'],['ആസ്റ്റർ ബാങ്കിന് സമീപം നിയന്ത്രിത മേഖല','എപ്പോഴും സജീവം','അടയാളപ്പെടുത്തിയ അതിർത്തിയിൽ നിന്ന് 2 നോട്ടിക്കൽ മൈൽ മാറി നിൽക്കുക.'],['ചുഴലിക്കാറ്റ് മുന്നറിയിപ്പില്ല','6 മിനിറ്റ് മുമ്പ് പരിശോധിച്ചു','അടുത്ത 48 മണിക്കൂറിൽ ഭീഷണിയില്ല.']] : [['Strong wind after 11 AM','Today · 11:00 AM to 5:00 PM','Small boats should return to harbour before the wind strengthens.'],['Restricted area near Aster Bank','Always active','Keep at least 2 nautical miles away from the marked boundary.'],['No cyclone warning','Checked 6 minutes ago','No cyclone threat is expected in the next 48 hours.']]
  const checks = language === 'hi' ? ['सबके लिए जीवन जैकेट','वापसी के लिए पर्याप्त ईंधन','फोन और VHF रेडियो चार्ज','नाव में पीने का पानी','परिवार को योजना पता है'] : language === 'ml' ? ['എല്ലാവർക്കും ലൈഫ് ജാക്കറ്റ്','മടക്കത്തിന് മതിയായ ഇന്ധനം','ഫോണും VHF റേഡിയോയും ചാർജ്','വള്ളത്തിൽ കുടിവെള്ളം','കുടുംബത്തിന് പദ്ധതി അറിയാം'] : ['Life jackets for everyone','Enough fuel for return','Phone and VHF radio charged','Drinking water on board','Family knows your plan']
  return <div className="page"><PageHeading eyebrow={c.eyebrow} title={c.title} description={c.desc}/><section className="emergency-card"><div className="emergency-icon"><Icon name="phone" size={30}/></div><div><span>{c.emergency}</span><h2>{c.danger}</h2><p>{c.send}</p></div><button onClick={onEmergency}>{c.get}</button></section><div className="alert-layout"><section className="card alerts-list"><div className="section-heading"><div><span className="plain-label">{c.active}</span><h2>{c.current}</h2></div><button className="icon-button" aria-label={c.current} onClick={() => notify(c.current)}><Icon name="speaker"/></button></div>{alerts.map((a,i)=><AlertItem key={a[0]} language={language} status={['watch','danger','good'][i]} title={a[0]} time={a[1]} text={a[2]}/>)}</section><section className="card safety-checklist"><span className="plain-label">{c.before}</span><h2>{c.check}</h2>{checks.map((item,i) => <label key={item}><input type="checkbox" defaultChecked={i < 2}/><span><i><Icon name="check" size={15}/></i>{item}</span></label>)}<p>{c.complete}</p></section></div><section className="contacts-row"><Contact language={language} name="Indian Coast Guard" number="1554"/><Contact language={language} name="Marine Police" number="1093"/><Contact language={language} name="INCOIS Helpdesk" number="1800 425 3227"/></section></div>
}

function Assistant({ language }) {
  const [messages, setMessages] = useState([{from:'orca',text:globalText[language].assistantHello}])
  const [value, setValue] = useState(''); const [thinking, setThinking] = useState(false)
  useEffect(() => setMessages([{from:'orca',text:globalText[language].assistantHello}]), [language])
  const send = (prompt=value) => { if (!prompt.trim()) return; setMessages(m=>[...m,{from:'user',text:prompt}]); setValue(''); setThinking(true); setTimeout(()=>{setMessages(m=>[...m,{from:'orca',text:globalText[language].assistantReply}]);setThinking(false)},900) }
  const c = pageText[language].assistant
  const questions = language === 'hi' ? ['क्या अभी निकलना सुरक्षित है?','किस क्षेत्र में सार्डिन है?','सुरक्षित रास्ता दिखाएँ','ज्वार कब बदलेगा?','कोई चेतावनी है?'] : language === 'ml' ? ['ഇപ്പോൾ പുറപ്പെടുന്നത് സുരക്ഷിതമാണോ?','സാർഡിൻ ഏത് മേഖലയിലാണ്?','സുരക്ഷിത വഴി കാണിക്കൂ','വേലിയേറ്റം എപ്പോൾ മാറും?','മുന്നറിയിപ്പുണ്ടോ?'] : ['Is it safe to leave now?','Which zone has sardines?','Show me a safe route','When will the tide change?','Are there any warnings?']
  return <div className="page assistant-page"><PageHeading eyebrow={c.eyebrow} title={c.title} description={c.desc}/><div className="assistant-layout"><section className="chat-card card" aria-label={c.title}><div className="chat-top"><span className="brand-mark small"><Icon name="waves"/></span><div><strong>ORCA</strong><span><i/>{c.online}</span></div><button className="icon-button" aria-label={c.title}><Icon name="speaker"/></button></div><div className="messages" aria-live="polite">{messages.map((m,i)=><div className={`message ${m.from}`} key={i}>{m.from === 'orca' && <span className="message-avatar">O</span>}<p>{m.text}</p></div>)}{thinking && <div className="message orca"><span className="message-avatar">O</span><p className="thinking">{globalText[language].thinking}</p></div>}</div><div className="chat-input"><label className="sr-only" htmlFor="chat-message">{c.title}</label><input id="chat-message" value={value} onChange={e=>setValue(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder={c.placeholder}/><button aria-label={c.title}><Icon name="mic"/></button><button className="send-button" onClick={()=>send()} aria-label={globalText[language].send}><Icon name="send"/></button></div></section><aside className="ask-examples"><span className="plain-label">{c.try}</span><h2>{c.common}</h2>{questions.map(q=><button key={q} onClick={()=>send(q)}><Icon name="message" size={18}/><span>{q}</span><Icon name="chevron" size={17}/></button>)}</aside></div></div>
}

function History({ language, go }) {
  const c = pageText[language].history
  const trips = [
    { date:`06 ${c.sep}`, zone:zoneData[0], status:c.safeTrip, catchKg:'18.2 kg', duration:'4h 22m', level:'good' },
    { date:`02 ${c.sep}`, zone:zoneData[1], status:c.safeTrip, catchKg:'12.6 kg', duration:'5h 05m', level:'good' },
    { date:`28 ${c.aug}`, zone:zoneData[0], status:c.returnedEarly, catchKg:'9.4 kg', duration:'3h 10m', level:'watch' },
  ]
  return <div className="page"><PageHeading eyebrow={c.eyebrow} title={c.title} description={c.desc}/><section className="history-summary"><Stat icon="boat" label={c.trips} value="8" note="✓" status="good"/><Stat icon="fish" label={c.catch} value="96 kg" note={c.daysLabel} status="plain"/><Stat icon="shield" label={c.score} value="100%" note="✓" status="good"/></section><section className="card trips-card"><div className="section-heading"><div><span className="plain-label">{c.recent}</span><h2>{c.yours}</h2></div></div>{trips.map((trip,i)=><button className="trip-row" key={trip.date} onClick={()=>go('route')} aria-label={`${trip.date}, ${zoneName(trip.zone, language)}, ${trip.status}`}><span className="trip-date">{trip.date}</span><span className="trip-place"><strong>{zoneName(trip.zone, language)}</strong><small>{trip.duration} · {trip.status}</small></span><span className={`status-badge ${trip.level}`}><Icon name={trip.level==='watch'?'alert':'check'} size={14}/>{trip.level==='watch'?'!':'✓'}</span><span><strong>{trip.catchKg}</strong><small>{c.catch}</small></span><Icon name="chevron"/></button>)}</section></div>
}

function Settings({ theme, setTheme, textSize, setTextSize, language, setLanguage, reducedMotion, setReducedMotion, notify }) {
  const c = pageText[language].settings
  return <div className="page settings-page"><PageHeading eyebrow={c.eyebrow} title={c.title} description={c.desc}/><section className="settings-section card"><div className="setting-copy"><span className="setting-icon"><Icon name="contrast"/></span><div><h2>{c.theme}</h2><p>{c.themeNote}</p></div></div><div className="choice-grid theme-choices"><Choice active={theme==='day'} onClick={()=>setTheme('day')} icon="sun" title={c.day} note="☀"/><Choice active={theme==='night'} onClick={()=>setTheme('night')} icon="moon" title={c.night} note="☾"/><Choice active={theme==='contrast'} onClick={()=>setTheme('contrast')} icon="contrast" title={c.highContrast} note="◐"/></div></section><section className="settings-section card"><div className="setting-copy"><span className="setting-icon"><Icon name="eye"/></span><div><h2>{c.text}</h2><p>{c.textNote}</p></div></div><div className="choice-grid"><Choice active={textSize==='medium'} onClick={()=>setTextSize('medium')} icon="minus" title="A" note="100%"/><Choice active={textSize==='large'} onClick={()=>setTextSize('large')} icon="plus" title="A+" note="112%"/><Choice active={textSize==='xlarge'} onClick={()=>setTextSize('xlarge')} icon="plus" title="A++" note="125%"/></div></section><section className="settings-section card"><div className="setting-copy"><span className="setting-icon language-icon">{language === 'hi' ? 'अ' : language === 'ml' ? 'അ' : 'A'}</span><div><h2>{c.language}</h2><p>{c.languageNote}</p></div></div><div className="choice-grid language-choices">{LANGS.map(l => <button key={l.code} className={language===l.code?'active':''} onClick={()=>{setLanguage(l.code); notify(`${globalText[l.code].language}: ${l.native}`)}} aria-pressed={language===l.code}><span>{l.native}</span><small>{l.label}</small>{language===l.code&&<Icon name="check" size={18}/>}</button>)}</div><div className="settings-lang-dropdown"><LanguageDropdown language={language} setLanguage={setLanguage} notify={notify} variant="settings" /></div></section><section className="settings-section card compact"><div className="setting-copy"><span className="setting-icon"><Icon name="speaker"/></span><div><h2>{c.voice}</h2><p>{c.voiceNote}</p></div></div><button className="secondary-button" onClick={()=>notify(c.voice)}>▶</button></section><section className="settings-section card compact"><div className="setting-copy"><span className="setting-icon"><Icon name="route"/></span><div><h2>{c.motion}</h2><p>{c.motionNote}</p></div></div><Switch checked={reducedMotion} onChange={setReducedMotion} label={c.motion}/></section></div>
}

function CorrelationPanel({ language }) {
  const c = pageText[language].weather
  const charts = language === 'hi' ? [
    { title:'समुद्र तापमान और मछली', x:'तापमान °C', y:'मछली संभावना', value:'मजबूत संबंध · +0.82', points:[24,32,43,54,66,76,83] },
    { title:'क्लोरोफिल और PFZ', x:'क्लोरोफिल', y:'PFZ संभावना', value:'मजबूत संबंध · +0.76', points:[20,29,38,57,62,72,79] },
    { title:'लहर और रास्ते का जोखिम', x:'लहर मीटर', y:'जोखिम', value:'बहुत मजबूत · +0.91', points:[14,20,29,41,57,72,90] },
  ] : language === 'ml' ? [
    { title:'കടൽ താപനിലയും മീൻ സാധ്യതയും', x:'താപനില °C', y:'മീൻ സാധ്യത', value:'ശക്തമായ ബന്ധം · +0.82', points:[24,32,43,54,66,76,83] },
    { title:'ക്ലോറോഫിലും PFZ-ഉം', x:'ക്ലോറോഫിൽ', y:'PFZ സാധ്യത', value:'ശക്തമായ ബന്ധം · +0.76', points:[20,29,38,57,62,72,79] },
    { title:'തിര ഉയരവും വഴി അപകടവും', x:'തിര മീറ്റർ', y:'അപകടം', value:'വളരെ ശക്തം · +0.91', points:[14,20,29,41,57,72,90] },
  ] : [
    { title:'Sea temperature & catch', x:'Temperature °C', y:'Catch chance', value:'Strong link · +0.82', points:[24,32,43,54,66,76,83] },
    { title:'Chlorophyll & PFZ', x:'Chlorophyll', y:'PFZ probability', value:'Strong link · +0.76', points:[20,29,38,57,62,72,79] },
    { title:'Wave height & route risk', x:'Wave height m', y:'Risk', value:'Very strong · +0.91', points:[14,20,29,41,57,72,90] },
  ]
  return <section className="correlation-section" aria-labelledby="correlation-title"><div className="section-heading correlation-heading"><div><span className="plain-label">{c.model}</span><h2 id="correlation-title">{c.correlations}</h2><p>{c.correlationDesc}</p></div><span className="data-window">{c.dataWindow}</span></div><div className="correlation-grid">{charts.map((chart,i)=><CorrelationChart key={chart.title} {...chart} index={i}/>)}</div></section>
}

function CorrelationChart({ title, x, y, value, points, index }) {
  const coords = points.map((p,i) => `${34 + i * 38},${138 - p}`).join(' ')
  return <article className="correlation-card card"><div className="chart-title"><div><span>0{index + 1}</span><h3>{title}</h3></div><strong>{value}</strong></div><svg className="chart-svg" viewBox="0 0 300 175" role="img" aria-label={`${title}. ${value}`}><line x1="34" y1="18" x2="34" y2="142" className="chart-axis"/><line x1="34" y1="142" x2="282" y2="142" className="chart-axis"/><line x1="34" y1="100" x2="282" y2="100" className="chart-gridline"/><line x1="34" y1="59" x2="282" y2="59" className="chart-gridline"/><polyline points={coords} className="chart-line"/>{points.map((p,i)=><circle key={i} cx={34 + i * 38} cy={138-p} r="4.5" className="chart-point"/>)}<text x="158" y="168" textAnchor="middle" className="chart-label">{x}</text><text x="12" y="80" textAnchor="middle" transform="rotate(-90 12 80)" className="chart-label">{y}</text></svg></article>
}

function GlobalChat({ language }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState([])
  const [thinking, setThinking] = useState(false)
  const g = globalText[language]
  const c = pageText[language].assistant
  useEffect(() => { setMessages([]); setValue(''); setThinking(false) }, [language])
  const send = () => {
    if (!value.trim()) return
    setMessages(items => [...items, { from:'user', text:value }])
    setValue('')
    setThinking(true)
    window.setTimeout(() => { setMessages(items => [...items, { from:'orca', text:g.assistantReply }]); setThinking(false) }, 650)
  }
  return <aside className={`global-chat ${open ? 'open' : ''}`} aria-label={g.assistant}><section className="mini-chat-panel" hidden={!open}><header><span className="mini-orca"><Icon name="waves"/></span><span><strong>{g.assistant}</strong><small><i/>{c.online}</small></span><button onClick={()=>setOpen(false)} aria-label={g.close}>×</button></header><div className="mini-messages" aria-live="polite"><div className="mini-message orca">{g.assistantHello}</div>{messages.map((m,i)=><div key={i} className={`mini-message ${m.from}`}>{m.text}</div>)}{thinking&&<div className="mini-message orca thinking">{g.thinking}</div>}</div><div className="mini-chat-input"><input value={value} onChange={e=>setValue(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder={c.placeholder} aria-label={c.placeholder}/><button onClick={send} aria-label={g.send}><Icon name="send" size={18}/></button></div></section><button className="chat-launcher" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label={open?g.close:g.open}><span className="launcher-rings"/><Icon name={open?'minus':'message'} size={25}/><span>{g.assistant}</span></button></aside>
}

function LanguageDropdown({ language, setLanguage, notify, variant = 'header' }) {
  const g = globalText[language]
  return <label className={`lang-dropdown ${variant}`}>
    <span className="sr-only">{g.selectLanguage}</span>
    <span className="lang-globe" aria-hidden="true">🌐</span>
    <select value={language} onChange={(e) => { setLanguage(e.target.value); notify && notify(`${g.language}: ${LANGS.find(l => l.code === e.target.value).native}`) }} aria-label={g.selectLanguage}>
      {LANGS.map(l => <option key={l.code} value={l.code}>{l.native} · {l.label}</option>)}
    </select>
    <span className="lang-chevron" aria-hidden="true">▾</span>
  </label>
}

const PageHeading = ({ eyebrow, title, description }) => <header className="page-heading"><span>{eyebrow}</span><h1>{title}</h1><p>{description}</p></header>
const NavItem = ({ id, icon, label, current, onClick, index }) => <button onClick={() => onClick(id)} className={`nav-item ${current === id ? 'active' : ''}`} aria-current={current === id ? 'page' : undefined}>{index && <small className="nav-index">{String(index).padStart(2,'0')}</small>}<Icon name={icon}/><span>{label}</span></button>
const Stat = ({ icon,label,value,note,status }) => <div className="stat"><span className={`stat-icon ${status}`}><Icon name={icon}/></span><span><small>{label}</small><strong>{value}</strong><em>{note}</em></span></div>
const PlanStep = ({ number,time,title,text,status,last }) => <div className={`plan-step ${last?'last':''}`}><span className="step-number">{number}</span><time>{time}</time><div><strong>{title}</strong><p>{text}</p></div><span className="step-tag">{status}</span></div>
const Condition = ({ icon,title,value,note,status }) => <div className="condition"><span className={`stat-icon ${status}`}><Icon name={icon}/></span><div><strong>{title}</strong><p>{note}</p></div><b>{value}</b></div>
const RouteStep = ({ n,title,text }) => <div className="route-step"><span>{n}</span><div><strong>{title}</strong><p>{text}</p></div></div>
const AlertItem = ({ status,title,time,text,language }) => <article className={`alert-item ${status}`}><span className="alert-symbol"><Icon name={status==='good'?'check':'alert'}/></span><div><span>{time}</span><h3>{title}</h3><p>{text}</p></div><button aria-label={`${(globalText[language || 'en'] || globalText.en).readAloud}: ${title}`}><Icon name="speaker"/></button></article>
const Contact = ({ name,number,language }) => <div className="contact"><span className="stat-icon"><Icon name="phone"/></span><div><strong>{name}</strong><span>{number}</span></div><button onClick={()=>{}} aria-label={`${(globalText[language || 'en'] || globalText.en).call}: ${name}`}>{(globalText[language || 'en'] || globalText.en).call}</button></div>
const Choice = ({active,onClick,icon,title,note}) => <button onClick={onClick} className={active?'active':''} aria-pressed={active}><Icon name={icon}/><span><strong>{title}</strong><small>{note}</small></span>{active&&<Icon name="check" size={18}/>}</button>
const Switch = ({checked,onChange,label}) => <button className={`switch ${checked?'on':''}`} role="switch" aria-checked={checked} aria-label={label} onClick={()=>onChange(!checked)}><span/></button>

function EmergencyDialog({ onClose, notify, language = 'en' }) {
  const g = globalText[language] || globalText.en
  return <div className="dialog-backdrop" role="presentation" onMouseDown={e=>e.target===e.currentTarget&&onClose()}><section className="dialog" role="dialog" aria-modal="true" aria-labelledby="emergency-title"><span className="emergency-icon"><Icon name="alert" size={30}/></span><h2 id="emergency-title">{g.emergencyTitle}</h2><p>{g.emergencyBody}</p><div className="dialog-actions"><button className="secondary-button" onClick={onClose}>{g.cancel}</button><button className="danger-button" onClick={()=>{onClose();notify(g.emergencySent)}}><Icon name="phone"/>{g.sendAlert}</button></div></section></div>
}

export default App
