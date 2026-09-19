const m = (hi, ml) => ({ hi, ml })

const translations = {
  'ORCA home': m('ORCA होम', 'ORCA ഹോം'),
  'Marine intelligence': m('समुद्री बुद्धिमत्ता', 'സമുദ്ര ഇന്റലിജൻസ്'),
  'COASTAL PILOT': m('तटीय पायलट', 'തീരദേശ പൈലറ്റ്'),
  'Kochi · Kerala': m('कोच्चि · केरल', 'കൊച്ചി · കേരളം'),
  'Plan your trip': m('अपनी यात्रा बनाएँ', 'യാത്ര ആസൂത്രണം ചെയ്യുക'),
  'PLAN YOUR TRIP': m('अपनी यात्रा बनाएँ', 'യാത്ര ആസൂത്രണം ചെയ്യുക'),
  'Overview': m('अवलोकन', 'അവലോകനം'),
  'Fishing zones': m('मछली पकड़ने के क्षेत्र', 'മത്സ്യബന്ധന മേഖലകൾ'),
  'Sea & weather': m('समुद्र और मौसम', 'കടലും കാലാവസ്ഥയും'),
  'Safe route': m('सुरक्षित रास्ता', 'സുരക്ഷിത പാത'),
  'Safety': m('सुरक्षा', 'സുരക്ഷ'),
  'Your ORCA': m('आपका ORCA', 'നിങ്ങളുടെ ORCA'),
  'YOUR ORCA': m('आपका ORCA', 'നിങ്ങളുടെ ORCA'),
  'Ask ORCA': m('ORCA से पूछें', 'ORCAയോട് ചോദിക്കുക'),
  'Trip history': m('यात्रा इतिहास', 'യാത്രാ ചരിത്രം'),
  'Settings': m('सेटिंग्स', 'ക്രമീകരണങ്ങൾ'),
  'All systems online': m('सभी प्रणालियाँ ऑनलाइन', 'എല്ലാ സംവിധാനങ്ങളും ഓൺലൈനിലാണ്'),
  'Updated 2 minutes ago': m('2 मिनट पहले अपडेट', '2 മിനിറ്റ് മുമ്പ് പുതുക്കി'),
  'Current harbour': m('वर्तमान बंदरगाह', 'നിലവിലെ തുറമുഖം'),
  'Kochi Harbour': m('कोच्चि बंदरगाह', 'കൊച്ചി തുറമുഖം'),
  'Live · 05:42 IST': m('लाइव · 05:42 भारतीय समय', 'തത്സമയം · 05:42 ഇന്ത്യൻ സമയം'),
  'Select language': m('भाषा चुनें', 'ഭാഷ തിരഞ്ഞെടുക്കുക'),
  'Open settings': m('सेटिंग्स खोलें', 'ക്രമീകരണങ്ങൾ തുറക്കുക'),
  'Open menu': m('मेनू खोलें', 'മെനു തുറക്കുക'),
  'Close menu': m('मेनू बंद करें', 'മെനു അടയ്ക്കുക'),
  'Main navigation': m('मुख्य नेविगेशन', 'പ്രധാന നാവിഗേഷൻ'),
  'Mobile navigation': m('मोबाइल नेविगेशन', 'മൊബൈൽ നാവിഗേഷൻ'),
  'More': m('और', 'കൂടുതൽ'),
  'Good morning, Deepak': m('सुप्रभात, दीपक', 'സുപ്രഭാതം, ദീപക്'),
  "Today's sea plan": m('आज की समुद्री योजना', 'ഇന്നത്തെ കടൽ പദ്ധതി'),
  'A clear, safety-first briefing for the Kochi coast.': m('कोच्चि तट के लिए साफ़ और सुरक्षा-प्रथम जानकारी।', 'കൊച്ചി തീരത്തേക്കുള്ള വ്യക്തമായ സുരക്ഷാ-പ്രഥമ വിവരം.'),
  'Listen': m('सुनें', 'കേൾക്കുക'),
  'Playing today’s sea briefing': m('आज की समुद्री जानकारी सुनाई जा रही है', 'ഇന്നത്തെ കടൽ വിവരം വായിക്കുന്നു'),
  'Saturday · 19 September': m('शनिवार · 19 सितंबर', 'ശനിയാഴ്ച · 19 സെപ്റ്റംബർ'),
  'DEPARTURE STATUS': m('प्रस्थान स्थिति', 'പുറപ്പെടൽ നില'),
  'GO': m('जाएँ', 'പോകാം'),
  'Safe to leave': m('निकलना सुरक्षित है', 'പുറപ്പെടാൻ സുരക്ഷിതം'),
  'BEST DEPARTURE WINDOW': m('प्रस्थान का सबसे अच्छा समय', 'പുറപ്പെടാനുള്ള മികച്ച സമയം'),
  'Leave by 6:30 AM.': m('सुबह 6:30 बजे तक निकलें।', 'രാവിലെ 6:30-നകം പുറപ്പെടുക.'),
  'Start back by 10:00 AM.': m('सुबह 10:00 बजे तक लौटना शुरू करें।', 'രാവിലെ 10:00-നകം മടക്കം തുടങ്ങുക.'),
  'Conditions are calm near the coast. Wind strengthens after 11:00 AM.': m('तट के पास स्थिति शांत है। सुबह 11:00 बजे के बाद हवा तेज़ होगी।', 'തീരത്തിനടുത്ത് സ്ഥിതി ശാന്തമാണ്. രാവിലെ 11:00-ന് ശേഷം കാറ്റ് ശക്തമാകും.'),
  'Wind': m('हवा', 'കാറ്റ്'),
  'Gentle': m('हल्की', 'മൃദു'),
  'Waves': m('लहरें', 'തിരമാലകൾ'),
  'Calm': m('शांत', 'ശാന്തം'),
  'Rain': m('बारिश', 'മഴ'),
  'Low chance': m('कम संभावना', 'കുറഞ്ഞ സാധ്യത'),
  'See detailed forecast': m('विस्तृत पूर्वानुमान देखें', 'വിശദമായ പ്രവചനം കാണുക'),
  'RECOMMENDED ZONE': m('सुझाया गया क्षेत्र', 'ശുപാർശ ചെയ്യുന്ന മേഖല'),
  'Balanced for safety, travel time, and catch potential.': m('सुरक्षा, यात्रा समय और मछली की संभावना का संतुलन।', 'സുരക്ഷ, യാത്രാസമയം, മീൻ ലഭ്യത എന്നിവയുടെ സന്തുലനം.'),
  'Low risk': m('कम जोखिम', 'കുറഞ്ഞ അപകടം'),
  'LOW RISK': m('कम जोखिम', 'കുറഞ്ഞ അപകടം'),
  'Moderate': m('मध्यम जोखिम', 'മിതമായ അപകടം'),
  'MODERATE': m('मध्यम जोखिम', 'മിതമായ അപകടം'),
  'High risk': m('अधिक जोखिम', 'കൂടിയ അപകടം'),
  'HIGH RISK': m('अधिक जोखिम', 'കൂടിയ അപകടം'),
  'Choose fishing zone': m('मछली पकड़ने का क्षेत्र चुनें', 'മത്സ്യബന്ധന മേഖല തിരഞ്ഞെടുക്കുക'),
  'Bluefin Shelf': m('ब्लूफिन शेल्फ', 'ബ്ലൂഫിൻ ഷെൽഫ്'),
  'Coral Reach': m('कोरल रीच', 'കോറൽ റീച്ച്'),
  'Aster Bank': m('एस्टर बैंक', 'ആസ്റ്റർ ബാങ്ക്'),
  'Sardine · Mackerel': m('सार्डिन · मैकेरल', 'മത്തി · അയല'),
  'Tuna · Anchovy': m('टूना · एन्कोवी', 'ചൂര · നെത്തോലി'),
  'Tuna · Mackerel': m('टूना · मैकेरल', 'ചൂര · അയല'),
  'RESTRICTED AREA': m('प्रतिबंधित क्षेत्र', 'നിയന്ത്രിത മേഖല'),
  'Keep 2 nm clear': m('2 समुद्री मील दूर रहें', '2 നോട്ടിക്കൽ മൈൽ അകലം പാലിക്കുക'),
  'KOCHI HARBOUR': m('कोच्चि बंदरगाह', 'കൊച്ചി തുറമുഖം'),
  'Safe': m('सुरक्षित', 'സുരക്ഷിതം'),
  'Use caution': m('सावधानी रखें', 'ജാഗ്രത പാലിക്കുക'),
  'Avoid': m('बचें', 'ഒഴിവാക്കുക'),
  'Distance': m('दूरी', 'ദൂരം'),
  'Travel time': m('यात्रा समय', 'യാത്രാസമയം'),
  'Likely catch': m('मछली की संभावना', 'മീൻ ലഭ്യത'),
  'Open safe route': m('सुरक्षित रास्ता खोलें', 'സുരക്ഷിത പാത തുറക്കുക'),
  'KEEP WATCH': m('ध्यान रखें', 'ശ്രദ്ധിക്കുക'),
  '2 things need attention': m('2 बातों पर ध्यान दें', '2 കാര്യങ്ങൾ ശ്രദ്ധിക്കണം'),
  'All alerts': m('सभी चेतावनियाँ', 'എല്ലാ മുന്നറിയിപ്പുകളും'),
  'Wind rises after 11 AM': m('सुबह 11 बजे के बाद हवा तेज़ होगी', 'രാവിലെ 11-ന് ശേഷം കാറ്റ് ശക്തമാകും'),
  'Return before it reaches 18 kn.': m('हवा 18 नॉट होने से पहले लौटें।', 'കാറ്റ് 18 നോട്ട് എത്തുന്നതിന് മുമ്പ് മടങ്ങുക.'),
  'No cyclone warning': m('चक्रवात चेतावनी नहीं', 'ചുഴലിക്കാറ്റ് മുന്നറിയിപ്പില്ല'),
  'The next 48 hours are clear.': m('अगले 48 घंटे साफ़ हैं।', 'അടുത്ത 48 മണിക്കൂർ സുരക്ഷിതമാണ്.'),
  'Clear': m('साफ़', 'വ്യക്തം'),
  'Boundary clearance': m('सीमा सुरक्षित है', 'അതിർത്തി സുരക്ഷിതമാണ്'),
  'Zone B stays 9.4 nm inside.': m('क्षेत्र B सीमा से 9.4 समुद्री मील अंदर है।', 'മേഖല B അതിർത്തിയിൽ നിന്ന് 9.4 നോട്ടിക്കൽ മൈൽ അകത്താണ്.'),
  'ORCA ASSISTANT': m('ORCA सहायक', 'ORCA സഹായി'),
  'Need a quick answer?': m('जल्दी जवाब चाहिए?', 'വേഗത്തിൽ മറുപടി വേണോ?'),
  'Ask about weather, routes, zones, or safety.': m('मौसम, रास्ते, क्षेत्र या सुरक्षा के बारे में पूछें।', 'കാലാവസ്ഥ, പാത, മേഖല, സുരക്ഷ എന്നിവ ചോദിക്കുക.'),
  'Open ORCA assistant': m('ORCA सहायक खोलें', 'ORCA സഹായി തുറക്കുക'),
  'MARINE INTELLIGENCE · INCOIS': m('समुद्री बुद्धिमत्ता · INCOIS', 'സമുദ്ര ഇന്റലിജൻസ് · INCOIS'),
  'How conditions change this morning': m('आज सुबह स्थितियाँ कैसे बदलेंगी', 'ഇന്ന് രാവിലെ സ്ഥിതി എങ്ങനെ മാറും'),
  'Switch metrics to see when fishing quality drops and risk starts to rise.': m('जानें कि मछली की संभावना कब घटती है और जोखिम कब बढ़ता है।', 'മീൻ ലഭ്യത എപ്പോൾ കുറയുകയും അപകടം എപ്പോൾ കൂടുകയും ചെയ്യുമെന്ന് കാണുക.'),
  '124 readings · updated 4 min ago': m('124 रीडिंग · 4 मिनट पहले अपडेट', '124 റീഡിംഗുകൾ · 4 മിനിറ്റ് മുമ്പ് പുതുക്കി'),
  'Catch potential': m('मछली की संभावना', 'മീൻ ലഭ്യത'),
  'Wind speed': m('हवा की गति', 'കാറ്റിന്റെ വേഗം'),
  'Wave height': m('लहर की ऊँचाई', 'തിരമാലയുടെ ഉയരം'),
  'Calm / productive': m('शांत / लाभदायक', 'ശാന്തം / ഫലപ്രദം'),
  'Conditions change': m('स्थिति बदलती है', 'സ്ഥിതി മാറുന്നു'),
  'Small-boat limit': m('छोटी नाव की सीमा', 'ചെറിയ വള്ളത്തിന്റെ പരിധി'),
  'WHAT THIS MEANS': m('इसका मतलब', 'ഇതിന്റെ അർത്ഥം'),
  'Best between 8:00–10:00 AM': m('सुबह 8:00–10:00 बजे सबसे अच्छा', 'രാവിലെ 8:00–10:00 ഏറ്റവും മികച്ച സമയം'),
  'Warm surface water and chlorophyll are aligned for sardine and mackerel.': m('गर्म सतही पानी और क्लोरोफिल सार्डिन व मैकेरल के लिए अनुकूल हैं।', 'ചൂടുള്ള ഉപരിതലജലവും ക്ലോറോഫിലും മത്തിക്കും അയലയ്ക്കും അനുകൂലമാണ്.'),
  'Wind rises sharply after 11:00 AM': m('सुबह 11:00 बजे के बाद हवा तेज़ी से बढ़ती है', 'രാവിലെ 11:00-ന് ശേഷം കാറ്റ് വേഗത്തിൽ കൂടും'),
  'Small boats should begin returning before the 18-knot threshold.': m('छोटी नावों को 18 नॉट की सीमा से पहले लौटना शुरू करना चाहिए।', 'ചെറിയ വള്ളങ്ങൾ 18 നോട്ട് പരിധിക്ക് മുമ്പ് മടങ്ങിത്തുടങ്ങണം.'),
  'Comfortable until late morning': m('देर सुबह तक आरामदायक', 'രാവിലെ വൈകുംവരെ സുഖകരം'),
  'Wave height remains below the 1.5 m small-boat limit until 11:00 AM.': m('सुबह 11:00 बजे तक लहरें छोटी नाव की 1.5 मीटर सीमा से नीचे रहेंगी।', 'രാവിലെ 11:00 വരെ തിരമാലകൾ 1.5 മീറ്റർ ചെറുവള്ള പരിധിക്ക് താഴെയായിരിക്കും.'),
  'Signal confidence': m('संकेत विश्वसनीयता', 'സിഗ്നൽ വിശ്വാസ്യത'),
  'YOUR SIMPLE PLAN': m('आपकी सरल योजना', 'നിങ്ങളുടെ ലളിതമായ പദ്ധതി'),
  'Out, fish, and home before the wind': m('हवा से पहले जाएँ, मछली पकड़ें और लौटें', 'കാറ്റിന് മുമ്പ് പോയി മീൻപിടിച്ച് മടങ്ങുക'),
  'Leave harbour': m('बंदरगाह से निकलें', 'തുറമുഖത്തിൽ നിന്ന് പുറപ്പെടുക'),
  'Fuel and safety check': m('ईंधन और सुरक्षा जाँच', 'ഇന്ധനവും സുരക്ഷയും പരിശോധിക്കുക'),
  'Begin return': m('वापसी शुरू करें', 'മടക്കം തുടങ്ങുക'),
  'Before wind rises': m('हवा तेज़ होने से पहले', 'കാറ്റ് ശക്തമാകുന്നതിന് മുമ്പ്'),
  'Back safely': m('सुरक्षित वापसी', 'സുരക്ഷിതമായി മടങ്ങുക'),
  'UPDATED 4 MINUTES AGO': m('4 मिनट पहले अपडेट', '4 മിനിറ്റ് മുമ്പ് പുതുക്കി'),
  'Ranked by safety first, then catch potential.': m('पहले सुरक्षा, फिर मछली की संभावना के अनुसार क्रम।', 'ആദ്യം സുരക്ഷയും തുടർന്ന് മീൻ ലഭ്യതയും അനുസരിച്ചുള്ള ക്രമം.'),
  'Safety comes first': m('सुरक्षा सबसे पहले', 'സുരക്ഷ ആദ്യം'),
  'Zone A may have more fish, but Zone B has safer waves and legal clearance.': m('क्षेत्र A में अधिक मछली हो सकती है, लेकिन क्षेत्र B में लहरें और कानूनी सीमा अधिक सुरक्षित हैं।', 'മേഖല A-യിൽ കൂടുതൽ മീൻ ഉണ്ടായേക്കാം, പക്ഷേ മേഖല B-യിലെ തിരമാലകളും നിയമപരമായ അകലവും കൂടുതൽ സുരക്ഷിതമാണ്.'),
  'catch': m('मछली', 'മീൻ'),
  '% catch': m('% मछली संभावना', '% മീൻ സാധ്യത'),
  'Waves': m('लहरें', 'തിരമാലകൾ'),
  'Plan route': m('रास्ता बनाएँ', 'പാത ആസൂത്രണം ചെയ്യുക'),
  'KOCHI COAST · TODAY': m('कोच्चि तट · आज', 'കൊച്ചി തീരം · ഇന്ന്'),
  'Only the conditions that matter for your trip.': m('आपकी यात्रा के लिए केवल ज़रूरी स्थितियाँ।', 'നിങ്ങളുടെ യാത്രയ്ക്ക് ആവശ്യമായ സാഹചര്യങ്ങൾ മാത്രം.'),
  'NOW · CLEAR': m('अभी · साफ़', 'ഇപ്പോൾ · തെളിഞ്ഞത്'),
  'Bright with a gentle westerly wind': m('हल्की पश्चिमी हवा के साथ धूप', 'മൃദുവായ പടിഞ്ഞാറൻ കാറ്റോടുകൂടിയ തെളിഞ്ഞ കാലാവസ്ഥ'),
  'Good conditions this morning': m('आज सुबह स्थिति अच्छी है', 'ഇന്ന് രാവിലെ നല്ല സാഹചര്യം'),
  'Plan to be back before 11 AM.': m('सुबह 11 बजे से पहले लौटने की योजना बनाएँ।', 'രാവിലെ 11-ന് മുമ്പ് മടങ്ങാൻ പദ്ധതിയിടുക.'),
  'HOURLY FORECAST': m('हर घंटे का पूर्वानुमान', 'മണിക്കൂർ പ്രവചനം'),
  'When the sea will change': m('समुद्र कब बदलेगा', 'കടൽ എപ്പോൾ മാറും'),
  'Use the metric tabs to compare the safe morning window.': m('सुबह के सुरक्षित समय की तुलना के लिए माप चुनें।', 'സുരക്ഷിതമായ രാവിലത്തെ സമയം താരതമ്യം ചെയ്യാൻ അളവ് തിരഞ്ഞെടുക്കുക.'),
  "TODAY'S TURNING POINT": m('आज का बदलाव बिंदु', 'ഇന്നത്തെ മാറ്റത്തിന്റെ സമയം'),
  'Conditions change at 11:00 AM': m('सुबह 11:00 बजे स्थिति बदलती है', 'രാവിലെ 11:00-ന് സ്ഥിതി മാറും'),
  'Wind and wave height both begin climbing. Treat 10:00 AM as your return trigger.': m('हवा और लहरें दोनों बढ़ने लगती हैं। सुबह 10:00 बजे वापसी शुरू करें।', 'കാറ്റും തിരമാലയും കൂടിത്തുടങ്ങും. രാവിലെ 10:00 മടക്കം തുടങ്ങാനുള്ള സമയമായി കാണുക.'),
  'SAFETY-CHECKED ROUTE': m('सुरक्षा-जाँचा रास्ता', 'സുരക്ഷ പരിശോധിച്ച പാത'),
  'A simple outward and return plan that avoids marked hazards.': m('चिह्नित खतरों से बचने वाली सरल आने-जाने की योजना।', 'അടയാളപ്പെടുത്തിയ അപകടങ്ങൾ ഒഴിവാക്കുന്ന ലളിതമായ യാത്രാ പദ്ധതി.'),
  'Save offline': m('ऑफ़लाइन सहेजें', 'ഓഫ്‌ലൈനായി സേവ് ചെയ്യുക'),
  'Route saved for offline use': m('रास्ता ऑफ़लाइन उपयोग के लिए सहेजा गया', 'പാത ഓഫ്‌ലൈൻ ഉപയോഗത്തിനായി സേവ് ചെയ്തു'),
  'Depart': m('प्रस्थान', 'പുറപ്പെടൽ'),
  'Arrive zone': m('क्षेत्र पहुँचें', 'മേഖലയിൽ എത്തുക'),
  'Return by': m('वापसी समय', 'മടങ്ങേണ്ട സമയം'),
  'TURN-BY-TURN': m('कदम-दर-कदम', 'ഘട്ടം ഘട്ടമായി'),
  'Follow these 4 steps': m('इन 4 चरणों का पालन करें', 'ഈ 4 ഘട്ടങ്ങൾ പിന്തുടരുക'),
  'Leave Kochi Harbour': m('कोच्चि बंदरगाह से निकलें', 'കൊച്ചി തുറമുഖത്തിൽ നിന്ന് പുറപ്പെടുക'),
  'Head west-southwest after the breakwater.': m('ब्रेकवॉटर के बाद पश्चिम-दक्षिणपश्चिम जाएँ।', 'ബ്രേക്ക്‌വാട്ടറിന് ശേഷം പടിഞ്ഞാറ്-തെക്കുപടിഞ്ഞാറോട്ട് പോകുക.'),
  'Hold 244° for 13.2 nm': m('13.2 समुद्री मील तक 244° दिशा रखें', '13.2 നോട്ടിക്കൽ മൈൽ 244° ദിശ പാലിക്കുക'),
  'Stay south of the main shipping lane.': m('मुख्य जहाज़ मार्ग के दक्षिण में रहें।', 'പ്രധാന കപ്പൽപ്പാതയുടെ തെക്കുഭാഗത്ത് തുടരുക.'),
  'Fish only inside the marked safe boundary.': m('केवल चिह्नित सुरक्षित सीमा के अंदर मछली पकड़ें।', 'അടയാളപ്പെടുത്തിയ സുരക്ഷിത അതിർത്തിക്കുള്ളിൽ മാത്രം മീൻപിടിക്കുക.'),
  'Begin return at 10:00': m('10:00 बजे वापसी शुरू करें', '10:00-ന് മടക്കം തുടങ്ങുക'),
  'Use the same checked route back.': m('वापसी में यही जाँचा हुआ रास्ता लें।', 'മടക്കത്തിന് ഇതേ പരിശോധിച്ച പാത ഉപയോഗിക്കുക.'),
  'HELP WHEN YOU NEED IT': m('ज़रूरत पर मदद', 'ആവശ്യമുള്ളപ്പോൾ സഹായം'),
  'Safety & alerts': m('सुरक्षा और चेतावनियाँ', 'സുരക്ഷയും മുന്നറിയിപ്പുകളും'),
  'Current warnings, emergency contacts, and your pre-trip check.': m('वर्तमान चेतावनियाँ, आपात संपर्क और यात्रा-पूर्व जाँच।', 'നിലവിലെ മുന്നറിയിപ്പുകൾ, അടിയന്തര ബന്ധങ്ങൾ, യാത്രയ്ക്കുമുമ്പുള്ള പരിശോധന.'),
  'EMERGENCY HELP': m('आपात सहायता', 'അടിയന്തര സഹായം'),
  'In danger at sea?': m('समुद्र में खतरे में हैं?', 'കടലിൽ അപകടത്തിലാണോ?'),
  'Send your boat location and call the Coast Guard.': m('अपनी नाव का स्थान भेजें और तटरक्षक को कॉल करें।', 'വള്ളത്തിന്റെ സ്ഥാനം അയച്ച് കോസ്റ്റ് ഗാർഡിനെ വിളിക്കുക.'),
  'Get emergency help': m('आपात सहायता लें', 'അടിയന്തര സഹായം നേടുക'),
  'Demo only — emergency alert not sent': m('केवल डेमो — आपात चेतावनी नहीं भेजी गई', 'ഡെമോ മാത്രം — അടിയന്തര അറിയിപ്പ് അയച്ചിട്ടില്ല'),
  'ACTIVE FOR YOUR AREA': m('आपके क्षेत्र के लिए सक्रिय', 'നിങ്ങളുടെ പ്രദേശത്ത് സജീവം'),
  'Current alerts': m('वर्तमान चेतावनियाँ', 'നിലവിലെ മുന്നറിയിപ്പുകൾ'),
  'Strong wind after 11 AM': m('सुबह 11 बजे के बाद तेज़ हवा', 'രാവിലെ 11-ന് ശേഷം ശക്തമായ കാറ്റ്'),
  'Small boats should return early.': m('छोटी नावों को जल्दी लौटना चाहिए।', 'ചെറിയ വള്ളങ്ങൾ നേരത്തെ മടങ്ങണം.'),
  'Restricted area near Aster Bank': m('एस्टर बैंक के पास प्रतिबंधित क्षेत्र', 'ആസ്റ്റർ ബാങ്കിന് സമീപം നിയന്ത്രിത മേഖല'),
  'Keep at least 2 nautical miles away.': m('कम से कम 2 समुद्री मील दूर रहें।', 'കുറഞ്ഞത് 2 നോട്ടിക്കൽ മൈൽ അകലം പാലിക്കുക.'),
  'Active': m('सक्रिय', 'സജീവം'),
  'No threat expected in the next 48 hours.': m('अगले 48 घंटों में कोई खतरा नहीं।', 'അടുത്ത 48 മണിക്കൂറിൽ ഭീഷണിയില്ല.'),
  'BEFORE YOU LEAVE': m('निकलने से पहले', 'പുറപ്പെടുന്നതിന് മുമ്പ്'),
  'Life jackets for everyone': m('सभी के लिए लाइफ जैकेट', 'എല്ലാവർക്കും ലൈഫ് ജാക്കറ്റ്'),
  'Enough fuel for the return': m('वापसी के लिए पर्याप्त ईंधन', 'മടക്കത്തിന് മതിയായ ഇന്ധനം'),
  'Phone and VHF radio charged': m('फोन और VHF रेडियो चार्ज', 'ഫോണും VHF റേഡിയോയും ചാർജ് ചെയ്തു'),
  'Drinking water on board': m('नाव में पीने का पानी', 'വള്ളത്തിൽ കുടിവെള്ളം'),
  'Family knows your plan': m('परिवार को आपकी योजना पता है', 'കുടുംബത്തിന് നിങ്ങളുടെ പദ്ധതി അറിയാം'),
  'PLAIN-LANGUAGE HELP': m('सरल भाषा में मदद', 'ലളിതമായ ഭാഷയിലെ സഹായം'),
  'Quick answers grounded in today’s marine briefing.': m('आज की समुद्री जानकारी पर आधारित त्वरित उत्तर।', 'ഇന്നത്തെ കടൽ വിവരത്തെ അടിസ്ഥാനമാക്കിയുള്ള വേഗത്തിലുള്ള മറുപടികൾ.'),
  'ORCA assistant': m('ORCA सहायक', 'ORCA സഹായി'),
  'Using current marine data': m('वर्तमान समुद्री डेटा का उपयोग', 'നിലവിലെ സമുദ്ര ഡാറ്റ ഉപയോഗിക്കുന്നു'),
  'Namaste! Ask me about today’s sea, fishing zones, routes, or safety.': m('नमस्ते! आज के समुद्र, मछली क्षेत्रों, रास्तों या सुरक्षा के बारे में पूछें।', 'നമസ്കാരം! ഇന്നത്തെ കടൽ, മത്സ്യമേഖലകൾ, പാതകൾ, സുരക്ഷ എന്നിവയെക്കുറിച്ച് ചോദിക്കുക.'),
  'Ask a question…': m('अपना सवाल लिखें…', 'ഒരു ചോദ്യം ചോദിക്കുക…'),
  'Send question': m('सवाल भेजें', 'ചോദ്യം അയയ്ക്കുക'),
  'TRY ASKING': m('यह पूछकर देखें', 'ഇവ ചോദിച്ചുനോക്കൂ'),
  'Common questions': m('आम सवाल', 'പൊതുവായ ചോദ്യങ്ങൾ'),
  'Is it safe to leave now?': m('क्या अभी निकलना सुरक्षित है?', 'ഇപ്പോൾ പുറപ്പെടുന്നത് സുരക്ഷിതമാണോ?'),
  'Which zone has sardines?': m('किस क्षेत्र में सार्डिन है?', 'ഏത് മേഖലയിലാണ് മത്തി?'),
  'When will the tide change?': m('ज्वार कब बदलेगा?', 'വേലിയേറ്റം എപ്പോൾ മാറും?'),
  'Show me the safest route': m('सबसे सुरक्षित रास्ता दिखाएँ', 'ഏറ്റവും സുരക്ഷിതമായ പാത കാണിക്കുക'),
  'Zone B is the safest choice this morning. Leave by 6:30 AM and begin your return by 10:00 AM, before wind rises.': m('आज सुबह क्षेत्र B सबसे सुरक्षित है। सुबह 6:30 बजे तक निकलें और हवा तेज़ होने से पहले 10:00 बजे वापसी शुरू करें।', 'ഇന്ന് രാവിലെ മേഖല B ആണ് ഏറ്റവും സുരക്ഷിതം. 6:30-നകം പുറപ്പെട്ട് കാറ്റ് ശക്തമാകുന്നതിന് മുമ്പ് 10:00-ന് മടക്കം തുടങ്ങുക.'),
  'PAST JOURNEYS': m('पिछली यात्राएँ', 'കഴിഞ്ഞ യാത്രകൾ'),
  'Review previous routes, warnings, and fishing results.': m('पिछले रास्ते, चेतावनियाँ और मछली परिणाम देखें।', 'മുൻപത്തെ പാതകൾ, മുന്നറിയിപ്പുകൾ, മീൻപിടിത്ത ഫലങ്ങൾ പരിശോധിക്കുക.'),
  'Trips this month': m('इस महीने की यात्राएँ', 'ഈ മാസത്തെ യാത്രകൾ'),
  '+2 vs August': m('अगस्त से 2 अधिक', 'ഓഗസ്റ്റിനേക്കാൾ 2 കൂടുതൽ'),
  'Total catch': m('कुल मछली', 'ആകെ മീൻ'),
  'Last 30 days': m('पिछले 30 दिन', 'കഴിഞ്ഞ 30 ദിവസം'),
  'Safety score': m('सुरक्षा स्कोर', 'സുരക്ഷാ സ്കോർ'),
  'No incidents': m('कोई घटना नहीं', 'അപകടങ്ങളില്ല'),
  'RECENT': m('हाल की', 'സമീപകാല'),
  'Your trips': m('आपकी यात्राएँ', 'നിങ്ങളുടെ യാത്രകൾ'),
  'Safe trip': m('सुरक्षित यात्रा', 'സുരക്ഷിത യാത്ര'),
  'Returned early': m('जल्दी लौटे', 'നേരത്തെ മടങ്ങി'),
  'Caution': m('सावधानी', 'ജാഗ്രത'),
  'MAKE ORCA COMFORTABLE': m('ORCA को अपने अनुकूल बनाएँ', 'ORCA സൗകര്യപ്രദമാക്കുക'),
  'Display & language': m('डिस्प्ले और भाषा', 'ഡിസ്‌പ്ലേയും ഭാഷയും'),
  'Changes apply immediately on this device.': m('बदलाव इस उपकरण पर तुरंत लागू होंगे।', 'മാറ്റങ്ങൾ ഈ ഉപകരണത്തിൽ ഉടൻ പ്രാബല്യത്തിൽ വരും.'),
  'Screen theme': m('स्क्रीन थीम', 'സ്ക്രീൻ തീം'),
  'Choose a view that stays clear on the water.': m('पानी पर भी साफ़ दिखने वाला दृश्य चुनें।', 'കടലിലും വ്യക്തമായി കാണുന്ന ദൃശ്യം തിരഞ്ഞെടുക്കുക.'),
  'Day': m('दिन', 'പകൽ'),
  'Night': m('रात', 'രാത്രി'),
  'Language': m('भाषा', 'ഭാഷ'),
  'Use the language you know best.': m('अपनी सबसे सहज भाषा चुनें।', 'നിങ്ങൾക്ക് ഏറ്റവും പരിചിതമായ ഭാഷ തിരഞ്ഞെടുക്കുക.'),
  'Language updated': m('भाषा अपडेट की गई', 'ഭാഷ പുതുക്കി'),
  'Read aloud': m('ज़ोर से पढ़ें', 'വായിച്ചുകേൾപ്പിക്കുക'),
  'Hear important weather and safety messages.': m('महत्वपूर्ण मौसम और सुरक्षा संदेश सुनें।', 'പ്രധാന കാലാവസ്ഥാ, സുരക്ഷാ സന്ദേശങ്ങൾ കേൾക്കുക.'),
  'Play preview': m('नमूना सुनें', 'മാതൃക കേൾക്കുക'),
  'Voice preview playing': m('आवाज़ का नमूना चल रहा है', 'ശബ്ദ മാതൃക കേൾപ്പിക്കുന്നു'),
  'English': m('अंग्रेज़ी', 'ഇംഗ്ലീഷ്'),
  'Hindi': m('हिन्दी', 'ഹിന്ദി'),
  'Malayalam': m('मलयालम', 'മലയാളം'),
  'Skip to content': m('मुख्य सामग्री पर जाएँ', 'ഉള്ളടക്കത്തിലേക്ക് കടക്കുക'),
}

const reverse = { en: new Map(), hi: new Map(), ml: new Map() }
Object.entries(translations).forEach(([english, values]) => {
  reverse.en.set(english, english)
  if (!reverse.hi.has(values.hi)) reverse.hi.set(values.hi, english)
  if (!reverse.ml.has(values.ml)) reverse.ml.set(values.ml, english)
})

function translatePattern(english, language) {
  if (language === 'en') return english
  const zoneNames = {
    hi: { 'Bluefin Shelf':'ब्लूफिन शेल्फ', 'Coral Reach':'कोरल रीच', 'Aster Bank':'एस्टर बैंक' },
    ml: { 'Bluefin Shelf':'ബ്ലൂഫിൻ ഷെൽഫ്', 'Coral Reach':'കോറൽ റീച്ച്', 'Aster Bank':'ആസ്റ്റർ ബാങ്ക്' },
  }
  let match = english.match(/^(.+) · Zone ([ABC])$/)
  if (match) return language === 'hi' ? `${zoneNames.hi[match[1]] || match[1]} · क्षेत्र ${match[2]}` : `${zoneNames.ml[match[1]] || match[1]} · മേഖല ${match[2]}`
  match = english.match(/^Route to (.+)$/)
  if (match) return language === 'hi' ? `${zoneNames.hi[match[1]] || match[1]} का रास्ता` : `${zoneNames.ml[match[1]] || match[1]} ലേക്കുള്ള പാത`
  match = english.match(/^Reach Zone ([ABC])$/)
  if (match) return language === 'hi' ? `क्षेत्र ${match[1]} पहुँचें` : `മേഖല ${match[1]}-ൽ എത്തുക`
  match = english.match(/^Enter Zone ([ABC])$/)
  if (match) return language === 'hi' ? `क्षेत्र ${match[1]} में प्रवेश करें` : `മേഖല ${match[1]}-ൽ പ്രവേശിക്കുക`
  match = english.match(/^ZONE ([ABC])$/)
  if (match) return language === 'hi' ? `क्षेत्र ${match[1]}` : `മേഖല ${match[1]}`
  match = english.match(/^Zone ([ABC])$/)
  if (match) return language === 'hi' ? `क्षेत्र ${match[1]}` : `മേഖല ${match[1]}`
  match = english.match(/^Safe route from Kochi Harbour to Zone ([ABC])$/)
  if (match) return language === 'hi' ? `कोच्चि बंदरगाह से क्षेत्र ${match[1]} तक सुरक्षित रास्ता` : `കൊച്ചി തുറമുഖത്തിൽ നിന്ന് മേഖല ${match[1]} ലേക്കുള്ള സുരക്ഷിത പാത`
  match = english.match(/^([0-9]+) of 5 checks done$/)
  if (match) return language === 'hi' ? `5 में से ${match[1]} जाँच पूरी` : `5ൽ ${match[1]} പരിശോധന പൂർത്തിയായി`
  match = english.match(/^([0-9]+)\s*% catch$/)
  if (match) return language === 'hi' ? `${match[1]}% मछली संभावना` : `${match[1]}% മീൻ സാധ്യത`
  match = english.match(/^([ABC]) (Bluefin Shelf|Coral Reach|Aster Bank) ([0-9.]+) nm · ([0-9]+)% catch$/)
  if (match) return language === 'hi' ? `${match[1]} ${zoneNames.hi[match[2]]} ${match[3]} समुद्री मील · ${match[4]}% मछली संभावना` : `${match[1]} ${zoneNames.ml[match[2]]} ${match[3]} നോട്ടിക്കൽ മൈൽ · ${match[4]}% മീൻ സാധ്യത`
  match = english.match(/^([0-9.]+) nm · ([0-9]+)% catch$/)
  if (match) return language === 'hi' ? `${match[1]} समुद्री मील · ${match[2]}% मछली संभावना` : `${match[1]} നോട്ടിക്കൽ മൈൽ · ${match[2]}% മീൻ സാധ്യത`
  match = english.match(/^([0-9.]+) nm$/)
  if (match) return language === 'hi' ? `${match[1]} समुद्री मील` : `${match[1]} നോട്ടിക്കൽ മൈൽ`
  match = english.match(/^([0-9]+)h ([0-9]+)m$/)
  if (match) return language === 'hi' ? `${match[1]} घंटे ${match[2]} मिनट` : `${match[1]} മണിക്കൂർ ${match[2]} മിനിറ്റ്`
  match = english.match(/^([0-9.]+) kn$/)
  if (match) return language === 'hi' ? `${match[1]} नॉट` : `${match[1]} നോട്ട്`
  match = english.match(/^([0-9.]+) m$/)
  if (match) return language === 'hi' ? `${match[1]} मीटर` : `${match[1]} മീറ്റർ`
  match = english.match(/^([0-9.]+) kg$/)
  if (match) return language === 'hi' ? `${match[1]} किलो` : `${match[1]} കിലോ`
  match = english.match(/^([0-9]+) Sep$/)
  if (match) return language === 'hi' ? `${match[1]} सितंबर` : `${match[1]} സെപ്റ്റംബർ`
  match = english.match(/^([0-9]+) Aug$/)
  if (match) return language === 'hi' ? `${match[1]} अगस्त` : `${match[1]} ഓഗസ്റ്റ്`
  match = english.match(/^([0-9.]+)° N · ([0-9.]+)° E$/)
  if (match) return language === 'hi' ? `${match[1]}° उ · ${match[2]}° पू` : `${match[1]}° വ · ${match[2]}° കി`
  match = english.match(/^([0-9.]+)° N$/)
  if (match) return language === 'hi' ? `${match[1]}° उ` : `${match[1]}° വ`
  match = english.match(/^([0-9.]+)° E$/)
  if (match) return language === 'hi' ? `${match[1]}° पू` : `${match[1]}° കി`
  match = english.match(/^(Catch potential|Wind speed|Wave height) from 6 AM to 12 PM$/)
  if (match) {
    const label = translations[match[1]]?.[language] || match[1]
    return language === 'hi' ? `${label}: सुबह 6 से दोपहर 12 बजे तक` : `${label}: രാവിലെ 6 മുതൽ ഉച്ചയ്ക്ക് 12 വരെ`
  }
  match = english.match(/^(6 AM|7 AM|8 AM|9 AM|10 AM|11 AM|12 PM): (.+)$/)
  if (match) return `${translatePattern(match[1], language)}: ${match[2]}`
  if (english === 'N') return language === 'hi' ? 'उ' : 'വ'
  if (english === 'E') return language === 'hi' ? 'पू' : 'കി'
  if (english === '6 AM') return language === 'hi' ? 'सुबह 6' : 'രാവിലെ 6'
  if (english === '7 AM') return language === 'hi' ? 'सुबह 7' : 'രാവിലെ 7'
  if (english === '8 AM') return language === 'hi' ? 'सुबह 8' : 'രാവിലെ 8'
  if (english === '9 AM') return language === 'hi' ? 'सुबह 9' : 'രാവിലെ 9'
  if (english === '10 AM') return language === 'hi' ? 'सुबह 10' : 'രാവിലെ 10'
  if (english === '11 AM') return language === 'hi' ? 'सुबह 11' : 'രാവിലെ 11'
  if (english === '12 PM') return language === 'hi' ? 'दोपहर 12' : 'ഉച്ചയ്ക്ക് 12'
  return translations[english]?.[language] || english
}

function sourceEnglish(value) {
  const trimmed = value.trim()
  const exact = reverse.hi.get(trimmed) || reverse.ml.get(trimmed)
  if (exact) return exact
  const zoneReverse = {
    'ब्लूफिन शेल्फ':'Bluefin Shelf', 'कोरल रीच':'Coral Reach', 'एस्टर बैंक':'Aster Bank',
    'ബ്ലൂഫിൻ ഷെൽഫ്':'Bluefin Shelf', 'കോറൽ റീച്ച്':'Coral Reach', 'ആസ്റ്റർ ബാങ്ക്':'Aster Bank',
  }
  let match = trimmed.match(/^(.+) · (?:क्षेत्र|മേഖല) ([ABC])$/)
  if (match) return `${zoneReverse[match[1]] || match[1]} · Zone ${match[2]}`
  match = trimmed.match(/^(.+) का रास्ता$/)
  if (match) return `Route to ${zoneReverse[match[1]] || match[1]}`
  match = trimmed.match(/^(.+) ലേക്കുള്ള പാത$/)
  if (match) return `Route to ${zoneReverse[match[1]] || match[1]}`
  match = trimmed.match(/^क्षेत्र ([ABC]) पहुँचें$/)
  if (match) return `Reach Zone ${match[1]}`
  match = trimmed.match(/^മേഖല ([ABC])-ൽ എത്തുക$/)
  if (match) return `Reach Zone ${match[1]}`
  match = trimmed.match(/^क्षेत्र ([ABC]) में प्रवेश करें$/)
  if (match) return `Enter Zone ${match[1]}`
  match = trimmed.match(/^മേഖല ([ABC])-ൽ പ്രവേശിക്കുക$/)
  if (match) return `Enter Zone ${match[1]}`
  match = trimmed.match(/^(?:क्षेत्र|മേഖല) ([ABC])$/)
  if (match) return `Zone ${match[1]}`
  match = trimmed.match(/^कोच्चि बंदरगाह से क्षेत्र ([ABC]) तक सुरक्षित रास्ता$/)
  if (match) return `Safe route from Kochi Harbour to Zone ${match[1]}`
  match = trimmed.match(/^കൊച്ചി തുറമുഖത്തിൽ നിന്ന് മേഖല ([ABC]) ലേക്കുള്ള സുരക്ഷിത പാത$/)
  if (match) return `Safe route from Kochi Harbour to Zone ${match[1]}`
  match = trimmed.match(/^5 में से ([0-9]+) जाँच पूरी$/)
  if (match) return `${match[1]} of 5 checks done`
  match = trimmed.match(/^5ൽ ([0-9]+) പരിശോധന പൂർത്തിയായി$/)
  if (match) return `${match[1]} of 5 checks done`
  match = trimmed.match(/^(.+): सुबह 6 से दोपहर 12 बजे तक$/)
  if (match) return `${reverse.hi.get(match[1]) || match[1]} from 6 AM to 12 PM`
  match = trimmed.match(/^(.+): രാവിലെ 6 മുതൽ ഉച്ചയ്ക്ക് 12 വരെ$/)
  if (match) return `${reverse.ml.get(match[1]) || match[1]} from 6 AM to 12 PM`
  match = trimmed.match(/^([ABC]) (.+) ([0-9.]+) (?:समुद्री मील|നോട്ടിക്കൽ മൈൽ) · ([0-9]+)% (?:मछली संभावना|മീൻ സാധ്യത)$/)
  if (match) return `${match[1]} ${zoneReverse[match[2]] || match[2]} ${match[3]} nm · ${match[4]}% catch`
  match = trimmed.match(/^([0-9.]+) (?:समुद्री मील|നോട്ടിക്കൽ മൈൽ) · ([0-9]+)% (?:मछली संभावना|മീൻ സാധ്യത)$/)
  if (match) return `${match[1]} nm · ${match[2]}% catch`
  match = trimmed.match(/^([0-9]+)% (?:मछली संभावना|മീൻ സാധ്യത)$/)
  if (match) return `${match[1]}% catch`
  match = trimmed.match(/^([0-9.]+) (?:समुद्री मील|നോട്ടിക്കൽ മൈൽ)$/)
  if (match) return `${match[1]} nm`
  match = trimmed.match(/^([0-9]+) (?:घंटे|മണിക്കൂർ) ([0-9]+) (?:मिनट|മിനിറ്റ്)$/)
  if (match) return `${match[1]}h ${match[2]}m`
  match = trimmed.match(/^([0-9.]+) (?:नॉट|നോട്ട്)$/)
  if (match) return `${match[1]} kn`
  match = trimmed.match(/^([0-9.]+) (?:मीटर|മീറ്റർ)$/)
  if (match) return `${match[1]} m`
  match = trimmed.match(/^([0-9.]+) (?:किलो|കിലോ)$/)
  if (match) return `${match[1]} kg`
  match = trimmed.match(/^([0-9]+) (?:सितंबर|സെപ്റ്റംബർ)$/)
  if (match) return `${match[1]} Sep`
  match = trimmed.match(/^([0-9]+) (?:अगस्त|ഓഗസ്റ്റ്)$/)
  if (match) return `${match[1]} Aug`
  match = trimmed.match(/^([0-9.]+)° (?:उ|വ) · ([0-9.]+)° (?:पू|കി)$/)
  if (match) return `${match[1]}° N · ${match[2]}° E`
  match = trimmed.match(/^([0-9.]+)° (?:उ|വ)$/)
  if (match) return `${match[1]}° N`
  match = trimmed.match(/^([0-9.]+)° (?:पू|കി)$/)
  if (match) return `${match[1]}° E`
  const times = {
    'सुबह 6':'6 AM','सुबह 7':'7 AM','सुबह 8':'8 AM','सुबह 9':'9 AM','सुबह 10':'10 AM','सुबह 11':'11 AM','दोपहर 12':'12 PM',
    'രാവിലെ 6':'6 AM','രാവിലെ 7':'7 AM','രാവിലെ 8':'8 AM','രാവിലെ 9':'9 AM','രാവിലെ 10':'10 AM','രാവിലെ 11':'11 AM','ഉച്ചയ്ക്ക് 12':'12 PM',
  }
  if (times[trimmed]) return times[trimmed]
  if (trimmed === 'उ' || trimmed === 'വ') return 'N'
  if (trimmed === 'पू' || trimmed === 'കി') return 'E'
  return trimmed
}

function translateValue(value, language) {
  if (!value || !value.trim()) return value
  const leading = value.match(/^\s*/)?.[0] || ''
  const trailing = value.match(/\s*$/)?.[0] || ''
  const english = sourceEnglish(value)
  return `${leading}${translatePattern(english, language)}${trailing}`
}

function translateNode(node, language) {
  if (node.nodeType === Node.TEXT_NODE) {
    const next = translateValue(node.nodeValue, language)
    if (next !== node.nodeValue) node.nodeValue = next
    return
  }
  if (!(node instanceof Element)) return
  if (node.matches('input,textarea') && node.placeholder) {
    const next = translateValue(node.placeholder, language)
    if (next !== node.placeholder) node.placeholder = next
  }
  for (const attr of ['aria-label','title']) {
    if (node.hasAttribute(attr)) {
      const current = node.getAttribute(attr)
      const next = translateValue(current, language)
      if (next !== current) node.setAttribute(attr, next)
    }
  }
  const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT)
  while (walker.nextNode()) translateNode(walker.currentNode, language)
  node.querySelectorAll('[placeholder],[aria-label],[title]').forEach(el => {
    if (el.placeholder) {
      const next = translateValue(el.placeholder, language)
      if (next !== el.placeholder) el.placeholder = next
    }
    for (const attr of ['aria-label','title']) if (el.hasAttribute(attr)) {
      const current = el.getAttribute(attr)
      const next = translateValue(current, language)
      if (next !== current) el.setAttribute(attr, next)
    }
  })
}

export function localizeUI(root, language) {
  if (!root) return () => {}
  translateNode(root, language)
  document.title = language === 'hi' ? 'ORCA समुद्री बुद्धिमत्ता' : language === 'ml' ? 'ORCA സമുദ്ര ഇന്റലിജൻസ്' : 'ORCA Marine Intelligence'
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'characterData') translateNode(mutation.target, language)
      if (mutation.type === 'childList') mutation.addedNodes.forEach(node => translateNode(node, language))
      if (mutation.type === 'attributes') translateNode(mutation.target, language)
    })
  })
  observer.observe(root, { subtree:true, childList:true, characterData:true, attributes:true, attributeFilter:['placeholder','aria-label','title'] })
  return () => observer.disconnect()
}
