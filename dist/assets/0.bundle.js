webpackJsonp([0],{

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var m = __webpack_require__(316),
	    IntlPolyfill = m['default'];
	
	// Expose `IntlPolyfill` as global to add locale data into runtime later on.
	global.IntlPolyfill = IntlPolyfill;
	
	// Require all locale data for `Intl`. This module will be
	// ignored when bundling for the browser with Browserify/Webpack.
	__webpack_require__(455);
	
	// hack to export the polyfill as global Intl if needed
	if (!global.Intl) {
	    global.Intl = IntlPolyfill;
	    IntlPolyfill.__applyLocaleSensitivePrototypes();
	}
	
	// providing an idiomatic api for the nodejs version of this module
	module.exports = exports = IntlPolyfill;
	// preserving the original api in case another module is relying on that
	exports['default'] = IntlPolyfill;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 136:
/***/ function(module, exports) {

	IntlPolyfill.__addLocaleData({locale:"en",date:{ca:["gregory","buddhist","chinese","coptic","dangi","ethioaa","ethiopic","generic","hebrew","indian","islamic","islamicc","japanese","persian","roc"],hourNo0:true,hour12:true,formats:{short:"{1}, {0}",medium:"{1}, {0}",full:"{1} 'at' {0}",long:"{1} 'at' {0}",availableFormats:{"d":"d","E":"ccc",Ed:"d E",Ehm:"E h:mm a",EHm:"E HH:mm",Ehms:"E h:mm:ss a",EHms:"E HH:mm:ss",Gy:"y G",GyMMM:"MMM y G",GyMMMd:"MMM d, y G",GyMMMEd:"E, MMM d, y G","h":"h a","H":"HH",hm:"h:mm a",Hm:"HH:mm",hms:"h:mm:ss a",Hms:"HH:mm:ss",hmsv:"h:mm:ss a v",Hmsv:"HH:mm:ss v",hmv:"h:mm a v",Hmv:"HH:mm v","M":"L",Md:"M/d",MEd:"E, M/d",MMM:"LLL",MMMd:"MMM d",MMMEd:"E, MMM d",MMMMd:"MMMM d",ms:"mm:ss","y":"y",yM:"M/y",yMd:"M/d/y",yMEd:"E, M/d/y",yMMM:"MMM y",yMMMd:"MMM d, y",yMMMEd:"E, MMM d, y",yMMMM:"MMMM y",yQQQ:"QQQ y",yQQQQ:"QQQQ y"},dateFormats:{yMMMMEEEEd:"EEEE, MMMM d, y",yMMMMd:"MMMM d, y",yMMMd:"MMM d, y",yMd:"M/d/yy"},timeFormats:{hmmsszzzz:"h:mm:ss a zzzz",hmsz:"h:mm:ss a z",hms:"h:mm:ss a",hm:"h:mm a"}},calendars:{buddhist:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],long:["January","February","March","April","May","June","July","August","September","October","November","December"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["BE"],short:["BE"],long:["BE"]},dayPeriods:{am:"AM",pm:"PM"}},chinese:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Mo1","Mo2","Mo3","Mo4","Mo5","Mo6","Mo7","Mo8","Mo9","Mo10","Mo11","Mo12"],long:["Month1","Month2","Month3","Month4","Month5","Month6","Month7","Month8","Month9","Month10","Month11","Month12"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dayPeriods:{am:"AM",pm:"PM"}},coptic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["Tout","Baba","Hator","Kiahk","Toba","Amshir","Baramhat","Baramouda","Bashans","Paona","Epep","Mesra","Nasie"],long:["Tout","Baba","Hator","Kiahk","Toba","Amshir","Baramhat","Baramouda","Bashans","Paona","Epep","Mesra","Nasie"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"AM",pm:"PM"}},dangi:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Mo1","Mo2","Mo3","Mo4","Mo5","Mo6","Mo7","Mo8","Mo9","Mo10","Mo11","Mo12"],long:["Month1","Month2","Month3","Month4","Month5","Month6","Month7","Month8","Month9","Month10","Month11","Month12"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dayPeriods:{am:"AM",pm:"PM"}},ethiopic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"],long:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"AM",pm:"PM"}},ethioaa:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"],long:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["ERA0"],short:["ERA0"],long:["ERA0"]},dayPeriods:{am:"AM",pm:"PM"}},generic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"],long:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"AM",pm:"PM"}},gregory:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],long:["January","February","March","April","May","June","July","August","September","October","November","December"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["B","A","BCE","CE"],short:["BC","AD","BCE","CE"],long:["Before Christ","Anno Domini","Before Common Era","Common Era"]},dayPeriods:{am:"AM",pm:"PM"}},hebrew:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13","7"],short:["Tishri","Heshvan","Kislev","Tevet","Shevat","Adar I","Adar","Nisan","Iyar","Sivan","Tamuz","Av","Elul","Adar II"],long:["Tishri","Heshvan","Kislev","Tevet","Shevat","Adar I","Adar","Nisan","Iyar","Sivan","Tamuz","Av","Elul","Adar II"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["AM"],short:["AM"],long:["AM"]},dayPeriods:{am:"AM",pm:"PM"}},indian:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Chaitra","Vaisakha","Jyaistha","Asadha","Sravana","Bhadra","Asvina","Kartika","Agrahayana","Pausa","Magha","Phalguna"],long:["Chaitra","Vaisakha","Jyaistha","Asadha","Sravana","Bhadra","Asvina","Kartika","Agrahayana","Pausa","Magha","Phalguna"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["Saka"],short:["Saka"],long:["Saka"]},dayPeriods:{am:"AM",pm:"PM"}},islamic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Muh.","Saf.","Rab. I","Rab. II","Jum. I","Jum. II","Raj.","Sha.","Ram.","Shaw.","Dhuʻl-Q.","Dhuʻl-H."],long:["Muharram","Safar","Rabiʻ I","Rabiʻ II","Jumada I","Jumada II","Rajab","Shaʻban","Ramadan","Shawwal","Dhuʻl-Qiʻdah","Dhuʻl-Hijjah"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["AH"],short:["AH"],long:["AH"]},dayPeriods:{am:"AM",pm:"PM"}},islamicc:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Muh.","Saf.","Rab. I","Rab. II","Jum. I","Jum. II","Raj.","Sha.","Ram.","Shaw.","Dhuʻl-Q.","Dhuʻl-H."],long:["Muharram","Safar","Rabiʻ I","Rabiʻ II","Jumada I","Jumada II","Rajab","Shaʻban","Ramadan","Shawwal","Dhuʻl-Qiʻdah","Dhuʻl-Hijjah"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["AH"],short:["AH"],long:["AH"]},dayPeriods:{am:"AM",pm:"PM"}},japanese:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],long:["January","February","March","April","May","June","July","August","September","October","November","December"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["Taika (645–650)","Hakuchi (650–671)","Hakuhō (672–686)","Shuchō (686–701)","Taihō (701–704)","Keiun (704–708)","Wadō (708–715)","Reiki (715–717)","Yōrō (717–724)","Jinki (724–729)","Tenpyō (729–749)","Tenpyō-kampō (749-749)","Tenpyō-shōhō (749-757)","Tenpyō-hōji (757-765)","Tenpyō-jingo (765-767)","Jingo-keiun (767-770)","Hōki (770–780)","Ten-ō (781-782)","Enryaku (782–806)","Daidō (806–810)","Kōnin (810–824)","Tenchō (824–834)","Jōwa (834–848)","Kajō (848–851)","Ninju (851–854)","Saikō (854–857)","Ten-an (857-859)","Jōgan (859–877)","Gangyō (877–885)","Ninna (885–889)","Kanpyō (889–898)","Shōtai (898–901)","Engi (901–923)","Enchō (923–931)","Jōhei (931–938)","Tengyō (938–947)","Tenryaku (947–957)","Tentoku (957–961)","Ōwa (961–964)","Kōhō (964–968)","Anna (968–970)","Tenroku (970–973)","Ten’en (973–976)","Jōgen (976–978)","Tengen (978–983)","Eikan (983–985)","Kanna (985–987)","Eien (987–989)","Eiso (989–990)","Shōryaku (990–995)","Chōtoku (995–999)","Chōhō (999–1004)","Kankō (1004–1012)","Chōwa (1012–1017)","Kannin (1017–1021)","Jian (1021–1024)","Manju (1024–1028)","Chōgen (1028–1037)","Chōryaku (1037–1040)","Chōkyū (1040–1044)","Kantoku (1044–1046)","Eishō (1046–1053)","Tengi (1053–1058)","Kōhei (1058–1065)","Jiryaku (1065–1069)","Enkyū (1069–1074)","Shōho (1074–1077)","Shōryaku (1077–1081)","Eihō (1081–1084)","Ōtoku (1084–1087)","Kanji (1087–1094)","Kahō (1094–1096)","Eichō (1096–1097)","Jōtoku (1097–1099)","Kōwa (1099–1104)","Chōji (1104–1106)","Kashō (1106–1108)","Tennin (1108–1110)","Ten-ei (1110-1113)","Eikyū (1113–1118)","Gen’ei (1118–1120)","Hōan (1120–1124)","Tenji (1124–1126)","Daiji (1126–1131)","Tenshō (1131–1132)","Chōshō (1132–1135)","Hōen (1135–1141)","Eiji (1141–1142)","Kōji (1142–1144)","Ten’yō (1144–1145)","Kyūan (1145–1151)","Ninpei (1151–1154)","Kyūju (1154–1156)","Hōgen (1156–1159)","Heiji (1159–1160)","Eiryaku (1160–1161)","Ōho (1161–1163)","Chōkan (1163–1165)","Eiman (1165–1166)","Nin’an (1166–1169)","Kaō (1169–1171)","Shōan (1171–1175)","Angen (1175–1177)","Jishō (1177–1181)","Yōwa (1181–1182)","Juei (1182–1184)","Genryaku (1184–1185)","Bunji (1185–1190)","Kenkyū (1190–1199)","Shōji (1199–1201)","Kennin (1201–1204)","Genkyū (1204–1206)","Ken’ei (1206–1207)","Jōgen (1207–1211)","Kenryaku (1211–1213)","Kenpō (1213–1219)","Jōkyū (1219–1222)","Jōō (1222–1224)","Gennin (1224–1225)","Karoku (1225–1227)","Antei (1227–1229)","Kanki (1229–1232)","Jōei (1232–1233)","Tenpuku (1233–1234)","Bunryaku (1234–1235)","Katei (1235–1238)","Ryakunin (1238–1239)","En’ō (1239–1240)","Ninji (1240–1243)","Kangen (1243–1247)","Hōji (1247–1249)","Kenchō (1249–1256)","Kōgen (1256–1257)","Shōka (1257–1259)","Shōgen (1259–1260)","Bun’ō (1260–1261)","Kōchō (1261–1264)","Bun’ei (1264–1275)","Kenji (1275–1278)","Kōan (1278–1288)","Shōō (1288–1293)","Einin (1293–1299)","Shōan (1299–1302)","Kengen (1302–1303)","Kagen (1303–1306)","Tokuji (1306–1308)","Enkyō (1308–1311)","Ōchō (1311–1312)","Shōwa (1312–1317)","Bunpō (1317–1319)","Genō (1319–1321)","Genkō (1321–1324)","Shōchū (1324–1326)","Karyaku (1326–1329)","Gentoku (1329–1331)","Genkō (1331–1334)","Kenmu (1334–1336)","Engen (1336–1340)","Kōkoku (1340–1346)","Shōhei (1346–1370)","Kentoku (1370–1372)","Bunchū (1372–1375)","Tenju (1375–1379)","Kōryaku (1379–1381)","Kōwa (1381–1384)","Genchū (1384–1392)","Meitoku (1384–1387)","Kakei (1387–1389)","Kōō (1389–1390)","Meitoku (1390–1394)","Ōei (1394–1428)","Shōchō (1428–1429)","Eikyō (1429–1441)","Kakitsu (1441–1444)","Bun’an (1444–1449)","Hōtoku (1449–1452)","Kyōtoku (1452–1455)","Kōshō (1455–1457)","Chōroku (1457–1460)","Kanshō (1460–1466)","Bunshō (1466–1467)","Ōnin (1467–1469)","Bunmei (1469–1487)","Chōkyō (1487–1489)","Entoku (1489–1492)","Meiō (1492–1501)","Bunki (1501–1504)","Eishō (1504–1521)","Taiei (1521–1528)","Kyōroku (1528–1532)","Tenbun (1532–1555)","Kōji (1555–1558)","Eiroku (1558–1570)","Genki (1570–1573)","Tenshō (1573–1592)","Bunroku (1592–1596)","Keichō (1596–1615)","Genna (1615–1624)","Kan’ei (1624–1644)","Shōho (1644–1648)","Keian (1648–1652)","Jōō (1652–1655)","Meireki (1655–1658)","Manji (1658–1661)","Kanbun (1661–1673)","Enpō (1673–1681)","Tenna (1681–1684)","Jōkyō (1684–1688)","Genroku (1688–1704)","Hōei (1704–1711)","Shōtoku (1711–1716)","Kyōhō (1716–1736)","Genbun (1736–1741)","Kanpō (1741–1744)","Enkyō (1744–1748)","Kan’en (1748–1751)","Hōreki (1751–1764)","Meiwa (1764–1772)","An’ei (1772–1781)","Tenmei (1781–1789)","Kansei (1789–1801)","Kyōwa (1801–1804)","Bunka (1804–1818)","Bunsei (1818–1830)","Tenpō (1830–1844)","Kōka (1844–1848)","Kaei (1848–1854)","Ansei (1854–1860)","Man’en (1860–1861)","Bunkyū (1861–1864)","Genji (1864–1865)","Keiō (1865–1868)","M","T","S","H"],short:["Taika (645–650)","Hakuchi (650–671)","Hakuhō (672–686)","Shuchō (686–701)","Taihō (701–704)","Keiun (704–708)","Wadō (708–715)","Reiki (715–717)","Yōrō (717–724)","Jinki (724–729)","Tenpyō (729–749)","Tenpyō-kampō (749-749)","Tenpyō-shōhō (749-757)","Tenpyō-hōji (757-765)","Tenpyō-jingo (765-767)","Jingo-keiun (767-770)","Hōki (770–780)","Ten-ō (781-782)","Enryaku (782–806)","Daidō (806–810)","Kōnin (810–824)","Tenchō (824–834)","Jōwa (834–848)","Kajō (848–851)","Ninju (851–854)","Saikō (854–857)","Ten-an (857-859)","Jōgan (859–877)","Gangyō (877–885)","Ninna (885–889)","Kanpyō (889–898)","Shōtai (898–901)","Engi (901–923)","Enchō (923–931)","Jōhei (931–938)","Tengyō (938–947)","Tenryaku (947–957)","Tentoku (957–961)","Ōwa (961–964)","Kōhō (964–968)","Anna (968–970)","Tenroku (970–973)","Ten’en (973–976)","Jōgen (976–978)","Tengen (978–983)","Eikan (983–985)","Kanna (985–987)","Eien (987–989)","Eiso (989–990)","Shōryaku (990–995)","Chōtoku (995–999)","Chōhō (999–1004)","Kankō (1004–1012)","Chōwa (1012–1017)","Kannin (1017–1021)","Jian (1021–1024)","Manju (1024–1028)","Chōgen (1028–1037)","Chōryaku (1037–1040)","Chōkyū (1040–1044)","Kantoku (1044–1046)","Eishō (1046–1053)","Tengi (1053–1058)","Kōhei (1058–1065)","Jiryaku (1065–1069)","Enkyū (1069–1074)","Shōho (1074–1077)","Shōryaku (1077–1081)","Eihō (1081–1084)","Ōtoku (1084–1087)","Kanji (1087–1094)","Kahō (1094–1096)","Eichō (1096–1097)","Jōtoku (1097–1099)","Kōwa (1099–1104)","Chōji (1104–1106)","Kashō (1106–1108)","Tennin (1108–1110)","Ten-ei (1110-1113)","Eikyū (1113–1118)","Gen’ei (1118–1120)","Hōan (1120–1124)","Tenji (1124–1126)","Daiji (1126–1131)","Tenshō (1131–1132)","Chōshō (1132–1135)","Hōen (1135–1141)","Eiji (1141–1142)","Kōji (1142–1144)","Ten’yō (1144–1145)","Kyūan (1145–1151)","Ninpei (1151–1154)","Kyūju (1154–1156)","Hōgen (1156–1159)","Heiji (1159–1160)","Eiryaku (1160–1161)","Ōho (1161–1163)","Chōkan (1163–1165)","Eiman (1165–1166)","Nin’an (1166–1169)","Kaō (1169–1171)","Shōan (1171–1175)","Angen (1175–1177)","Jishō (1177–1181)","Yōwa (1181–1182)","Juei (1182–1184)","Genryaku (1184–1185)","Bunji (1185–1190)","Kenkyū (1190–1199)","Shōji (1199–1201)","Kennin (1201–1204)","Genkyū (1204–1206)","Ken’ei (1206–1207)","Jōgen (1207–1211)","Kenryaku (1211–1213)","Kenpō (1213–1219)","Jōkyū (1219–1222)","Jōō (1222–1224)","Gennin (1224–1225)","Karoku (1225–1227)","Antei (1227–1229)","Kanki (1229–1232)","Jōei (1232–1233)","Tenpuku (1233–1234)","Bunryaku (1234–1235)","Katei (1235–1238)","Ryakunin (1238–1239)","En’ō (1239–1240)","Ninji (1240–1243)","Kangen (1243–1247)","Hōji (1247–1249)","Kenchō (1249–1256)","Kōgen (1256–1257)","Shōka (1257–1259)","Shōgen (1259–1260)","Bun’ō (1260–1261)","Kōchō (1261–1264)","Bun’ei (1264–1275)","Kenji (1275–1278)","Kōan (1278–1288)","Shōō (1288–1293)","Einin (1293–1299)","Shōan (1299–1302)","Kengen (1302–1303)","Kagen (1303–1306)","Tokuji (1306–1308)","Enkyō (1308–1311)","Ōchō (1311–1312)","Shōwa (1312–1317)","Bunpō (1317–1319)","Genō (1319–1321)","Genkō (1321–1324)","Shōchū (1324–1326)","Karyaku (1326–1329)","Gentoku (1329–1331)","Genkō (1331–1334)","Kenmu (1334–1336)","Engen (1336–1340)","Kōkoku (1340–1346)","Shōhei (1346–1370)","Kentoku (1370–1372)","Bunchū (1372–1375)","Tenju (1375–1379)","Kōryaku (1379–1381)","Kōwa (1381–1384)","Genchū (1384–1392)","Meitoku (1384–1387)","Kakei (1387–1389)","Kōō (1389–1390)","Meitoku (1390–1394)","Ōei (1394–1428)","Shōchō (1428–1429)","Eikyō (1429–1441)","Kakitsu (1441–1444)","Bun’an (1444–1449)","Hōtoku (1449–1452)","Kyōtoku (1452–1455)","Kōshō (1455–1457)","Chōroku (1457–1460)","Kanshō (1460–1466)","Bunshō (1466–1467)","Ōnin (1467–1469)","Bunmei (1469–1487)","Chōkyō (1487–1489)","Entoku (1489–1492)","Meiō (1492–1501)","Bunki (1501–1504)","Eishō (1504–1521)","Taiei (1521–1528)","Kyōroku (1528–1532)","Tenbun (1532–1555)","Kōji (1555–1558)","Eiroku (1558–1570)","Genki (1570–1573)","Tenshō (1573–1592)","Bunroku (1592–1596)","Keichō (1596–1615)","Genna (1615–1624)","Kan’ei (1624–1644)","Shōho (1644–1648)","Keian (1648–1652)","Jōō (1652–1655)","Meireki (1655–1658)","Manji (1658–1661)","Kanbun (1661–1673)","Enpō (1673–1681)","Tenna (1681–1684)","Jōkyō (1684–1688)","Genroku (1688–1704)","Hōei (1704–1711)","Shōtoku (1711–1716)","Kyōhō (1716–1736)","Genbun (1736–1741)","Kanpō (1741–1744)","Enkyō (1744–1748)","Kan’en (1748–1751)","Hōreki (1751–1764)","Meiwa (1764–1772)","An’ei (1772–1781)","Tenmei (1781–1789)","Kansei (1789–1801)","Kyōwa (1801–1804)","Bunka (1804–1818)","Bunsei (1818–1830)","Tenpō (1830–1844)","Kōka (1844–1848)","Kaei (1848–1854)","Ansei (1854–1860)","Man’en (1860–1861)","Bunkyū (1861–1864)","Genji (1864–1865)","Keiō (1865–1868)","Meiji","Taishō","Shōwa","Heisei"],long:["Taika (645–650)","Hakuchi (650–671)","Hakuhō (672–686)","Shuchō (686–701)","Taihō (701–704)","Keiun (704–708)","Wadō (708–715)","Reiki (715–717)","Yōrō (717–724)","Jinki (724–729)","Tenpyō (729–749)","Tenpyō-kampō (749-749)","Tenpyō-shōhō (749-757)","Tenpyō-hōji (757-765)","Tenpyō-jingo (765-767)","Jingo-keiun (767-770)","Hōki (770–780)","Ten-ō (781-782)","Enryaku (782–806)","Daidō (806–810)","Kōnin (810–824)","Tenchō (824–834)","Jōwa (834–848)","Kajō (848–851)","Ninju (851–854)","Saikō (854–857)","Ten-an (857-859)","Jōgan (859–877)","Gangyō (877–885)","Ninna (885–889)","Kanpyō (889–898)","Shōtai (898–901)","Engi (901–923)","Enchō (923–931)","Jōhei (931–938)","Tengyō (938–947)","Tenryaku (947–957)","Tentoku (957–961)","Ōwa (961–964)","Kōhō (964–968)","Anna (968–970)","Tenroku (970–973)","Ten’en (973–976)","Jōgen (976–978)","Tengen (978–983)","Eikan (983–985)","Kanna (985–987)","Eien (987–989)","Eiso (989–990)","Shōryaku (990–995)","Chōtoku (995–999)","Chōhō (999–1004)","Kankō (1004–1012)","Chōwa (1012–1017)","Kannin (1017–1021)","Jian (1021–1024)","Manju (1024–1028)","Chōgen (1028–1037)","Chōryaku (1037–1040)","Chōkyū (1040–1044)","Kantoku (1044–1046)","Eishō (1046–1053)","Tengi (1053–1058)","Kōhei (1058–1065)","Jiryaku (1065–1069)","Enkyū (1069–1074)","Shōho (1074–1077)","Shōryaku (1077–1081)","Eihō (1081–1084)","Ōtoku (1084–1087)","Kanji (1087–1094)","Kahō (1094–1096)","Eichō (1096–1097)","Jōtoku (1097–1099)","Kōwa (1099–1104)","Chōji (1104–1106)","Kashō (1106–1108)","Tennin (1108–1110)","Ten-ei (1110-1113)","Eikyū (1113–1118)","Gen’ei (1118–1120)","Hōan (1120–1124)","Tenji (1124–1126)","Daiji (1126–1131)","Tenshō (1131–1132)","Chōshō (1132–1135)","Hōen (1135–1141)","Eiji (1141–1142)","Kōji (1142–1144)","Ten’yō (1144–1145)","Kyūan (1145–1151)","Ninpei (1151–1154)","Kyūju (1154–1156)","Hōgen (1156–1159)","Heiji (1159–1160)","Eiryaku (1160–1161)","Ōho (1161–1163)","Chōkan (1163–1165)","Eiman (1165–1166)","Nin’an (1166–1169)","Kaō (1169–1171)","Shōan (1171–1175)","Angen (1175–1177)","Jishō (1177–1181)","Yōwa (1181–1182)","Juei (1182–1184)","Genryaku (1184–1185)","Bunji (1185–1190)","Kenkyū (1190–1199)","Shōji (1199–1201)","Kennin (1201–1204)","Genkyū (1204–1206)","Ken’ei (1206–1207)","Jōgen (1207–1211)","Kenryaku (1211–1213)","Kenpō (1213–1219)","Jōkyū (1219–1222)","Jōō (1222–1224)","Gennin (1224–1225)","Karoku (1225–1227)","Antei (1227–1229)","Kanki (1229–1232)","Jōei (1232–1233)","Tenpuku (1233–1234)","Bunryaku (1234–1235)","Katei (1235–1238)","Ryakunin (1238–1239)","En’ō (1239–1240)","Ninji (1240–1243)","Kangen (1243–1247)","Hōji (1247–1249)","Kenchō (1249–1256)","Kōgen (1256–1257)","Shōka (1257–1259)","Shōgen (1259–1260)","Bun’ō (1260–1261)","Kōchō (1261–1264)","Bun’ei (1264–1275)","Kenji (1275–1278)","Kōan (1278–1288)","Shōō (1288–1293)","Einin (1293–1299)","Shōan (1299–1302)","Kengen (1302–1303)","Kagen (1303–1306)","Tokuji (1306–1308)","Enkyō (1308–1311)","Ōchō (1311–1312)","Shōwa (1312–1317)","Bunpō (1317–1319)","Genō (1319–1321)","Genkō (1321–1324)","Shōchū (1324–1326)","Karyaku (1326–1329)","Gentoku (1329–1331)","Genkō (1331–1334)","Kenmu (1334–1336)","Engen (1336–1340)","Kōkoku (1340–1346)","Shōhei (1346–1370)","Kentoku (1370–1372)","Bunchū (1372–1375)","Tenju (1375–1379)","Kōryaku (1379–1381)","Kōwa (1381–1384)","Genchū (1384–1392)","Meitoku (1384–1387)","Kakei (1387–1389)","Kōō (1389–1390)","Meitoku (1390–1394)","Ōei (1394–1428)","Shōchō (1428–1429)","Eikyō (1429–1441)","Kakitsu (1441–1444)","Bun’an (1444–1449)","Hōtoku (1449–1452)","Kyōtoku (1452–1455)","Kōshō (1455–1457)","Chōroku (1457–1460)","Kanshō (1460–1466)","Bunshō (1466–1467)","Ōnin (1467–1469)","Bunmei (1469–1487)","Chōkyō (1487–1489)","Entoku (1489–1492)","Meiō (1492–1501)","Bunki (1501–1504)","Eishō (1504–1521)","Taiei (1521–1528)","Kyōroku (1528–1532)","Tenbun (1532–1555)","Kōji (1555–1558)","Eiroku (1558–1570)","Genki (1570–1573)","Tenshō (1573–1592)","Bunroku (1592–1596)","Keichō (1596–1615)","Genna (1615–1624)","Kan’ei (1624–1644)","Shōho (1644–1648)","Keian (1648–1652)","Jōō (1652–1655)","Meireki (1655–1658)","Manji (1658–1661)","Kanbun (1661–1673)","Enpō (1673–1681)","Tenna (1681–1684)","Jōkyō (1684–1688)","Genroku (1688–1704)","Hōei (1704–1711)","Shōtoku (1711–1716)","Kyōhō (1716–1736)","Genbun (1736–1741)","Kanpō (1741–1744)","Enkyō (1744–1748)","Kan’en (1748–1751)","Hōreki (1751–1764)","Meiwa (1764–1772)","An’ei (1772–1781)","Tenmei (1781–1789)","Kansei (1789–1801)","Kyōwa (1801–1804)","Bunka (1804–1818)","Bunsei (1818–1830)","Tenpō (1830–1844)","Kōka (1844–1848)","Kaei (1848–1854)","Ansei (1854–1860)","Man’en (1860–1861)","Bunkyū (1861–1864)","Genji (1864–1865)","Keiō (1865–1868)","Meiji","Taishō","Shōwa","Heisei"]},dayPeriods:{am:"AM",pm:"PM"}},persian:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Farvardin","Ordibehesht","Khordad","Tir","Mordad","Shahrivar","Mehr","Aban","Azar","Dey","Bahman","Esfand"],long:["Farvardin","Ordibehesht","Khordad","Tir","Mordad","Shahrivar","Mehr","Aban","Azar","Dey","Bahman","Esfand"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["AP"],short:["AP"],long:["AP"]},dayPeriods:{am:"AM",pm:"PM"}},roc:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],long:["January","February","March","April","May","June","July","August","September","October","November","December"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["Before R.O.C.","Minguo"],short:["Before R.O.C.","Minguo"],long:["Before R.O.C.","Minguo"]},dayPeriods:{am:"AM",pm:"PM"}}}},number:{nu:["latn"],patterns:{decimal:{positivePattern:"{number}",negativePattern:"-{number}"},currency:{positivePattern:"{currency}{number}",negativePattern:"-{currency}{number}"},percent:{positivePattern:"{number}%",negativePattern:"-{number}%"}},symbols:{latn:{decimal:".",group:",",nan:"NaN",percent:"%",infinity:"∞"}},currencies:{AUD:"A$",BRL:"R$",CAD:"CA$",CNY:"CN¥",EUR:"€",GBP:"£",HKD:"HK$",ILS:"₪",INR:"₹",JPY:"¥",KRW:"₩",MXN:"MX$",NZD:"NZ$",TWD:"NT$",USD:"$",VND:"₫",XAF:"FCFA",XCD:"EC$",XOF:"CFA",XPF:"CFPF"}}});

/***/ },

/***/ 137:
/***/ function(module, exports) {

	IntlPolyfill.__addLocaleData({locale:"zh",date:{ca:["gregory","buddhist","chinese","coptic","dangi","ethioaa","ethiopic","generic","hebrew","indian","islamic","islamicc","japanese","persian","roc"],hourNo0:true,hour12:true,formats:{short:"{1} {0}",medium:"{1} {0}",full:"{1} {0}",long:"{1} {0}",availableFormats:{"d":"d日","E":"ccc",Ed:"d日E",Ehm:"E ah:mm",EHm:"EHH:mm",Ehms:"E ah:mm:ss",EHms:"EHH:mm:ss",Gy:"Gy年",GyMMM:"Gy年M月",GyMMMd:"Gy年M月d日",GyMMMEd:"Gy年M月d日E","h":"ah时","H":"H时",hm:"ah:mm",Hm:"HH:mm",hms:"ah:mm:ss",Hms:"HH:mm:ss",hmsv:"v ah:mm:ss",Hmsv:"v HH:mm:ss",hmv:"v ah:mm",Hmv:"v HH:mm","M":"M月",Md:"M/d",MEd:"M/dE",MMdd:"MM/dd",MMM:"LLL",MMMd:"M月d日",MMMEd:"M月d日E",MMMMd:"M月d日",ms:"mm:ss","y":"y年",yM:"y年M月",yMd:"y/M/d",yMEd:"y/M/dE",yMM:"y年M月",yMMM:"y年M月",yMMMd:"y年M月d日",yMMMEd:"y年M月d日E",yMMMM:"y年M月",yQQQ:"y年第Q季度",yQQQQ:"y年第Q季度"},dateFormats:{yMMMMEEEEd:"y年M月d日EEEE",yMMMMd:"y年M月d日",yMMMd:"y年M月d日",yMd:"y/M/d"},timeFormats:{hmmsszzzz:"zzzz ah:mm:ss",hmsz:"z ah:mm:ss",hms:"ah:mm:ss",hm:"ah:mm"}},calendars:{buddhist:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],long:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},days:{narrow:["日","一","二","三","四","五","六"],short:["周日","周一","周二","周三","周四","周五","周六"],long:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},eras:{narrow:["佛历"],short:["佛历"],long:["佛历"]},dayPeriods:{am:"上午",pm:"下午"}},chinese:{months:{narrow:["正","二","三","四","五","六","七","八","九","十","冬","腊"],short:["正月","二月","三月","四月","五月","六月","七月","八月","九月","十月","冬月","腊月"],long:["正月","二月","三月","四月","五月","六月","七月","八月","九月","十月","冬月","腊月"]},days:{narrow:["日","一","二","三","四","五","六"],short:["周日","周一","周二","周三","周四","周五","周六"],long:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},dayPeriods:{am:"上午",pm:"下午"}},coptic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月","13月"],long:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月","十三月"]},days:{narrow:["日","一","二","三","四","五","六"],short:["周日","周一","周二","周三","周四","周五","周六"],long:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"上午",pm:"下午"}},dangi:{months:{narrow:["正","二","三","四","五","六","七","八","九","十","冬","腊"],short:["正月","二月","三月","四月","五月","六月","七月","八月","九月","十月","冬月","腊月"],long:["正月","二月","三月","四月","五月","六月","七月","八月","九月","十月","冬月","腊月"]},days:{narrow:["日","一","二","三","四","五","六"],short:["周日","周一","周二","周三","周四","周五","周六"],long:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},dayPeriods:{am:"上午",pm:"下午"}},ethiopic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月","13月"],long:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月","十三月"]},days:{narrow:["日","一","二","三","四","五","六"],short:["周日","周一","周二","周三","周四","周五","周六"],long:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"上午",pm:"下午"}},ethioaa:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月","13月"],long:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月","十三月"]},days:{narrow:["日","一","二","三","四","五","六"],short:["周日","周一","周二","周三","周四","周五","周六"],long:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},eras:{narrow:["ERA0"],short:["ERA0"],long:["ERA0"]},dayPeriods:{am:"上午",pm:"下午"}},generic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"],long:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"]},days:{narrow:["日","一","二","三","四","五","六"],short:["周日","周一","周二","周三","周四","周五","周六"],long:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"上午",pm:"下午"}},gregory:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],long:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},days:{narrow:["日","一","二","三","四","五","六"],short:["周日","周一","周二","周三","周四","周五","周六"],long:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},eras:{narrow:["公元前","公元","西元前","西元"],short:["公元前","公元","西元前","西元"],long:["公元前","公元","西元前","西元"]},dayPeriods:{am:"上午",pm:"下午"}},hebrew:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13","7"],short:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月","13月","闰7月"],long:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月","十三月","闰七月"]},days:{narrow:["日","一","二","三","四","五","六"],short:["周日","周一","周二","周三","周四","周五","周六"],long:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},eras:{narrow:["希伯来历"],short:["希伯来历"],long:["希伯来历"]},dayPeriods:{am:"上午",pm:"下午"}},indian:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],long:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},days:{narrow:["日","一","二","三","四","五","六"],short:["周日","周一","周二","周三","周四","周五","周六"],long:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},eras:{narrow:["印度历"],short:["印度历"],long:["印度历"]},dayPeriods:{am:"上午",pm:"下午"}},islamic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],long:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},days:{narrow:["日","一","二","三","四","五","六"],short:["周日","周一","周二","周三","周四","周五","周六"],long:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},eras:{narrow:["伊斯兰历"],short:["伊斯兰历"],long:["伊斯兰历"]},dayPeriods:{am:"上午",pm:"下午"}},islamicc:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],long:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},days:{narrow:["日","一","二","三","四","五","六"],short:["周日","周一","周二","周三","周四","周五","周六"],long:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},eras:{narrow:["伊斯兰历"],short:["伊斯兰历"],long:["伊斯兰历"]},dayPeriods:{am:"上午",pm:"下午"}},japanese:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],long:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},days:{narrow:["日","一","二","三","四","五","六"],short:["周日","周一","周二","周三","周四","周五","周六"],long:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},eras:{narrow:["Taika (645–650)","Hakuchi (650–671)","Hakuhō (672–686)","Shuchō (686–701)","Taihō (701–704)","Keiun (704–708)","Wadō (708–715)","Reiki (715–717)","Yōrō (717–724)","Jinki (724–729)","Tenpyō (729–749)","Tenpyō-kampō (749-749)","Tenpyō-shōhō (749-757)","Tenpyō-hōji (757-765)","Tenpyō-jingo (765-767)","Jingo-keiun (767-770)","Hōki (770–780)","Ten-ō (781-782)","Enryaku (782–806)","Daidō (806–810)","Kōnin (810–824)","Tenchō (824–834)","Jōwa (834–848)","Kajō (848–851)","Ninju (851–854)","Saikō (854–857)","Ten-an (857-859)","Jōgan (859–877)","Gangyō (877–885)","Ninna (885–889)","Kanpyō (889–898)","Shōtai (898–901)","Engi (901–923)","Enchō (923–931)","Jōhei (931–938)","Tengyō (938–947)","Tenryaku (947–957)","Tentoku (957–961)","Ōwa (961–964)","Kōhō (964–968)","Anna (968–970)","Tenroku (970–973)","Ten’en (973–976)","Jōgen (976–978)","Tengen (978–983)","Eikan (983–985)","Kanna (985–987)","Eien (987–989)","Eiso (989–990)","Shōryaku (990–995)","Chōtoku (995–999)","Chōhō (999–1004)","Kankō (1004–1012)","Chōwa (1012–1017)","Kannin (1017–1021)","Jian (1021–1024)","Manju (1024–1028)","Chōgen (1028–1037)","Chōryaku (1037–1040)","Chōkyū (1040–1044)","Kantoku (1044–1046)","Eishō (1046–1053)","Tengi (1053–1058)","Kōhei (1058–1065)","Jiryaku (1065–1069)","Enkyū (1069–1074)","Shōho (1074–1077)","Shōryaku (1077–1081)","Eihō (1081–1084)","Ōtoku (1084–1087)","Kanji (1087–1094)","Kahō (1094–1096)","Eichō (1096–1097)","Jōtoku (1097–1099)","Kōwa (1099–1104)","Chōji (1104–1106)","Kashō (1106–1108)","Tennin (1108–1110)","Ten-ei (1110-1113)","Eikyū (1113–1118)","Gen’ei (1118–1120)","Hōan (1120–1124)","Tenji (1124–1126)","Daiji (1126–1131)","Tenshō (1131–1132)","Chōshō (1132–1135)","Hōen (1135–1141)","Eiji (1141–1142)","Kōji (1142–1144)","Ten’yō (1144–1145)","Kyūan (1145–1151)","Ninpei (1151–1154)","Kyūju (1154–1156)","Hōgen (1156–1159)","Heiji (1159–1160)","Eiryaku (1160–1161)","Ōho (1161–1163)","Chōkan (1163–1165)","Eiman (1165–1166)","Nin’an (1166–1169)","Kaō (1169–1171)","Shōan (1171–1175)","Angen (1175–1177)","Jishō (1177–1181)","Yōwa (1181–1182)","Juei (1182–1184)","Genryaku (1184–1185)","Bunji (1185–1190)","Kenkyū (1190–1199)","Shōji (1199–1201)","Kennin (1201–1204)","Genkyū (1204–1206)","Ken’ei (1206–1207)","Jōgen (1207–1211)","Kenryaku (1211–1213)","Kenpō (1213–1219)","Jōkyū (1219–1222)","Jōō (1222–1224)","Gennin (1224–1225)","Karoku (1225–1227)","Antei (1227–1229)","Kanki (1229–1232)","Jōei (1232–1233)","Tenpuku (1233–1234)","Bunryaku (1234–1235)","Katei (1235–1238)","Ryakunin (1238–1239)","En’ō (1239–1240)","Ninji (1240–1243)","Kangen (1243–1247)","Hōji (1247–1249)","Kenchō (1249–1256)","Kōgen (1256–1257)","Shōka (1257–1259)","Shōgen (1259–1260)","Bun’ō (1260–1261)","Kōchō (1261–1264)","Bun’ei (1264–1275)","Kenji (1275–1278)","Kōan (1278–1288)","Shōō (1288–1293)","Einin (1293–1299)","Shōan (1299–1302)","Kengen (1302–1303)","Kagen (1303–1306)","Tokuji (1306–1308)","Enkyō (1308–1311)","Ōchō (1311–1312)","Shōwa (1312–1317)","Bunpō (1317–1319)","Genō (1319–1321)","Genkō (1321–1324)","Shōchū (1324–1326)","Karyaku (1326–1329)","Gentoku (1329–1331)","Genkō (1331–1334)","Kenmu (1334–1336)","Engen (1336–1340)","Kōkoku (1340–1346)","Shōhei (1346–1370)","Kentoku (1370–1372)","Bunchū (1372–1375)","Tenju (1375–1379)","Kōryaku (1379–1381)","Kōwa (1381–1384)","Genchū (1384–1392)","Meitoku (1384–1387)","Kakei (1387–1389)","Kōō (1389–1390)","Meitoku (1390–1394)","Ōei (1394–1428)","Shōchō (1428–1429)","Eikyō (1429–1441)","Kakitsu (1441–1444)","Bun’an (1444–1449)","Hōtoku (1449–1452)","Kyōtoku (1452–1455)","Kōshō (1455–1457)","Chōroku (1457–1460)","Kanshō (1460–1466)","Bunshō (1466–1467)","Ōnin (1467–1469)","Bunmei (1469–1487)","Chōkyō (1487–1489)","Entoku (1489–1492)","Meiō (1492–1501)","Bunki (1501–1504)","Eishō (1504–1521)","Taiei (1521–1528)","Kyōroku (1528–1532)","Tenbun (1532–1555)","Kōji (1555–1558)","Eiroku (1558–1570)","Genki (1570–1573)","Tenshō (1573–1592)","Bunroku (1592–1596)","Keichō (1596–1615)","Genna (1615–1624)","Kan’ei (1624–1644)","Shōho (1644–1648)","Keian (1648–1652)","Jōō (1652–1655)","Meireki (1655–1658)","Manji (1658–1661)","Kanbun (1661–1673)","Enpō (1673–1681)","Tenna (1681–1684)","Jōkyō (1684–1688)","Genroku (1688–1704)","Hōei (1704–1711)","Shōtoku (1711–1716)","Kyōhō (1716–1736)","Genbun (1736–1741)","Kanpō (1741–1744)","Enkyō (1744–1748)","Kan’en (1748–1751)","Hōreki (1751–1764)","Meiwa (1764–1772)","An’ei (1772–1781)","Tenmei (1781–1789)","Kansei (1789–1801)","Kyōwa (1801–1804)","Bunka (1804–1818)","Bunsei (1818–1830)","Tenpō (1830–1844)","Kōka (1844–1848)","Kaei (1848–1854)","Ansei (1854–1860)","Man’en (1860–1861)","Bunkyū (1861–1864)","Genji (1864–1865)","Keiō (1865–1868)","M","T","S","H"],short:["大化 (645–650)","白雉 (650–671)","白凤 (672–686)","朱鸟 (686–701)","大宝 (701–704)","庆云 (704–708)","和铜 (708–715)","灵龟 (715–717)","养老 (717–724)","神龟 (724–729)","天平 (729–749)","天平感宝 (749–749)","天平胜宝 (749–757)","天平宝字 (757–765)","天平神护 (765–767)","神护景云 (767–770)","宝龟 (770–780)","天应 (781–782)","延历 (782–806)","大同 (806–810)","弘仁 (810–824)","天长 (824–834)","承和 (834–848)","嘉祥 (848–851)","仁寿 (851–854)","齐衡 (854–857)","天安 (857–859)","贞观 (859–877)","元庆 (877–885)","仁和 (885–889)","宽平 (889–898)","昌泰 (898–901)","延喜 (901–923)","延长 (923–931)","承平 (931–938)","天庆 (938–947)","天历 (947–957)","天德 (957–961)","应和 (961–964)","康保 (964–968)","安和 (968–970)","天禄 (970–973)","天延 (973–976)","贞元 (976–978)","天元 (978–983)","永观 (983–985)","宽和 (985–987)","永延 (987–989)","永祚 (989–990)","正历 (990–995)","长德 (995–999)","长保 (999–1004)","宽弘 (1004–1012)","长和 (1012–1017)","宽仁 (1017–1021)","治安 (1021–1024)","万寿 (1024–1028)","长元 (1028–1037)","长历 (1037–1040)","长久 (1040–1044)","宽德 (1044–1046)","永承 (1046–1053)","天喜 (1053–1058)","康平 (1058–1065)","治历 (1065–1069)","延久 (1069–1074)","承保 (1074–1077)","正历 (1077–1081)","永保 (1081–1084)","应德 (1084–1087)","宽治 (1087–1094)","嘉保 (1094–1096)","永长 (1096–1097)","承德 (1097–1099)","康和 (1099–1104)","长治 (1104–1106)","嘉承 (1106–1108)","天仁 (1108–1110)","天永 (1110–1113)","永久 (1113–1118)","元永 (1118–1120)","保安 (1120–1124)","天治 (1124–1126)","大治 (1126–1131)","天承 (1131–1132)","长承 (1132–1135)","保延 (1135–1141)","永治 (1141–1142)","康治 (1142–1144)","天养 (1144–1145)","久安 (1145–1151)","仁平 (1151–1154)","久寿 (1154–1156)","保元 (1156–1159)","平治 (1159–1160)","永历 (1160–1161)","应保 (1161–1163)","长宽 (1163–1165)","永万 (1165–1166)","仁安 (1166–1169)","嘉应 (1169–1171)","承安 (1171–1175)","安元 (1175–1177)","治承 (1177–1181)","养和 (1181–1182)","寿永 (1182–1184)","元历 (1184–1185)","文治 (1185–1190)","建久 (1190–1199)","正治 (1199–1201)","建仁 (1201–1204)","元久 (1204–1206)","建永 (1206–1207)","承元 (1207–1211)","建历 (1211–1213)","建保 (1213–1219)","承久 (1219–1222)","贞应 (1222–1224)","元仁 (1224–1225)","嘉禄 (1225–1227)","安贞 (1227–1229)","宽喜 (1229–1232)","贞永 (1232–1233)","天福 (1233–1234)","文历 (1234–1235)","嘉祯 (1235–1238)","历仁 (1238–1239)","延应 (1239–1240)","仁治 (1240–1243)","宽元 (1243–1247)","宝治 (1247–1249)","建长 (1249–1256)","康元 (1256–1257)","正嘉 (1257–1259)","正元 (1259–1260)","文应 (1260–1261)","弘长 (1261–1264)","文永 (1264–1275)","建治 (1275–1278)","弘安 (1278–1288)","正应 (1288–1293)","永仁 (1293–1299)","正安 (1299–1302)","干元 (1302–1303)","嘉元 (1303–1306)","德治 (1306–1308)","延庆 (1308–1311)","应长 (1311–1312)","正和 (1312–1317)","文保 (1317–1319)","元应 (1319–1321)","元亨 (1321–1324)","正中 (1324–1326)","嘉历 (1326–1329)","元德 (1329–1331)","元弘 (1331–1334)","建武 (1334–1336)","延元 (1336–1340)","兴国 (1340–1346)","正平 (1346–1370)","建德 (1370–1372)","文中 (1372–1375)","天授 (1375–1379)","康历 (1379–1381)","弘和 (1381–1384)","元中 (1384–1392)","至德 (1384–1387)","嘉庆 (1387–1389)","康应 (1389–1390)","明德 (1390–1394)","应永 (1394–1428)","正长 (1428–1429)","永享 (1429–1441)","嘉吉 (1441–1444)","文安 (1444–1449)","宝德 (1449–1452)","享德 (1452–1455)","康正 (1455–1457)","长禄 (1457–1460)","宽正 (1460–1466)","文正 (1466–1467)","应仁 (1467–1469)","文明 (1469–1487)","长享 (1487–1489)","延德 (1489–1492)","明应 (1492–1501)","文龟 (1501–1504)","永正 (1504–1521)","大永 (1521–1528)","享禄 (1528–1532)","天文 (1532–1555)","弘治 (1555–1558)","永禄 (1558–1570)","元龟 (1570–1573)","天正 (1573–1592)","文禄 (1592–1596)","庆长 (1596–1615)","元和 (1615–1624)","宽永 (1624–1644)","正保 (1644–1648)","庆安 (1648–1652)","承应 (1652–1655)","明历 (1655–1658)","万治 (1658–1661)","宽文 (1661–1673)","延宝 (1673–1681)","天和 (1681–1684)","贞享 (1684–1688)","元禄 (1688–1704)","宝永 (1704–1711)","正德 (1711–1716)","享保 (1716–1736)","元文 (1736–1741)","宽保 (1741–1744)","延享 (1744–1748)","宽延 (1748–1751)","宝历 (1751–1764)","明和 (1764–1772)","安永 (1772–1781)","天明 (1781–1789)","宽政 (1789–1801)","享和 (1801–1804)","文化 (1804–1818)","文政 (1818–1830)","天保 (1830–1844)","弘化 (1844–1848)","嘉永 (1848–1854)","安政 (1854–1860)","万延 (1860–1861)","文久 (1861–1864)","元治 (1864–1865)","庆应 (1865–1868)","明治","大正","昭和","平成"],long:["大化 (645–650)","白雉 (650–671)","白凤 (672–686)","朱鸟 (686–701)","大宝 (701–704)","庆云 (704–708)","和铜 (708–715)","灵龟 (715–717)","养老 (717–724)","神龟 (724–729)","天平 (729–749)","天平感宝 (749–749)","天平胜宝 (749–757)","天平宝字 (757–765)","天平神护 (765–767)","神护景云 (767–770)","宝龟 (770–780)","天应 (781–782)","延历 (782–806)","大同 (806–810)","弘仁 (810–824)","天长 (824–834)","承和 (834–848)","嘉祥 (848–851)","仁寿 (851–854)","齐衡 (854–857)","天安 (857–859)","贞观 (859–877)","元庆 (877–885)","仁和 (885–889)","宽平 (889–898)","昌泰 (898–901)","延喜 (901–923)","延长 (923–931)","承平 (931–938)","天庆 (938–947)","天历 (947–957)","天德 (957–961)","应和 (961–964)","康保 (964–968)","安和 (968–970)","天禄 (970–973)","天延 (973–976)","贞元 (976–978)","天元 (978–983)","永观 (983–985)","宽和 (985–987)","永延 (987–989)","永祚 (989–990)","正历 (990–995)","长德 (995–999)","长保 (999–1004)","宽弘 (1004–1012)","长和 (1012–1017)","宽仁 (1017–1021)","治安 (1021–1024)","万寿 (1024–1028)","长元 (1028–1037)","长历 (1037–1040)","长久 (1040–1044)","宽德 (1044–1046)","永承 (1046–1053)","天喜 (1053–1058)","康平 (1058–1065)","治历 (1065–1069)","延久 (1069–1074)","承保 (1074–1077)","正历 (1077–1081)","永保 (1081–1084)","应德 (1084–1087)","宽治 (1087–1094)","嘉保 (1094–1096)","永长 (1096–1097)","承德 (1097–1099)","康和 (1099–1104)","长治 (1104–1106)","嘉承 (1106–1108)","天仁 (1108–1110)","天永 (1110–1113)","永久 (1113–1118)","元永 (1118–1120)","保安 (1120–1124)","天治 (1124–1126)","大治 (1126–1131)","天承 (1131–1132)","长承 (1132–1135)","保延 (1135–1141)","永治 (1141–1142)","康治 (1142–1144)","天养 (1144–1145)","久安 (1145–1151)","仁平 (1151–1154)","久寿 (1154–1156)","保元 (1156–1159)","平治 (1159–1160)","永历 (1160–1161)","应保 (1161–1163)","长宽 (1163–1165)","永万 (1165–1166)","仁安 (1166–1169)","嘉应 (1169–1171)","承安 (1171–1175)","安元 (1175–1177)","治承 (1177–1181)","养和 (1181–1182)","寿永 (1182–1184)","元历 (1184–1185)","文治 (1185–1190)","建久 (1190–1199)","正治 (1199–1201)","建仁 (1201–1204)","元久 (1204–1206)","建永 (1206–1207)","承元 (1207–1211)","建历 (1211–1213)","建保 (1213–1219)","承久 (1219–1222)","贞应 (1222–1224)","元仁 (1224–1225)","嘉禄 (1225–1227)","安贞 (1227–1229)","宽喜 (1229–1232)","贞永 (1232–1233)","天福 (1233–1234)","文历 (1234–1235)","嘉祯 (1235–1238)","历仁 (1238–1239)","延应 (1239–1240)","仁治 (1240–1243)","宽元 (1243–1247)","宝治 (1247–1249)","建长 (1249–1256)","康元 (1256–1257)","正嘉 (1257–1259)","正元 (1259–1260)","文应 (1260–1261)","弘长 (1261–1264)","文永 (1264–1275)","建治 (1275–1278)","弘安 (1278–1288)","正应 (1288–1293)","永仁 (1293–1299)","正安 (1299–1302)","干元 (1302–1303)","嘉元 (1303–1306)","德治 (1306–1308)","延庆 (1308–1311)","应长 (1311–1312)","正和 (1312–1317)","文保 (1317–1319)","元应 (1319–1321)","元亨 (1321–1324)","正中 (1324–1326)","嘉历 (1326–1329)","元德 (1329–1331)","元弘 (1331–1334)","建武 (1334–1336)","延元 (1336–1340)","兴国 (1340–1346)","正平 (1346–1370)","建德 (1370–1372)","文中 (1372–1375)","天授 (1375–1379)","康历 (1379–1381)","弘和 (1381–1384)","元中 (1384–1392)","至德 (1384–1387)","嘉庆 (1387–1389)","康应 (1389–1390)","明德 (1390–1394)","应永 (1394–1428)","正长 (1428–1429)","永享 (1429–1441)","嘉吉 (1441–1444)","文安 (1444–1449)","宝德 (1449–1452)","享德 (1452–1455)","康正 (1455–1457)","长禄 (1457–1460)","宽正 (1460–1466)","文正 (1466–1467)","应仁 (1467–1469)","文明 (1469–1487)","长享 (1487–1489)","延德 (1489–1492)","明应 (1492–1501)","文龟 (1501–1504)","永正 (1504–1521)","大永 (1521–1528)","享禄 (1528–1532)","天文 (1532–1555)","弘治 (1555–1558)","永禄 (1558–1570)","元龟 (1570–1573)","天正 (1573–1592)","文禄 (1592–1596)","庆长 (1596–1615)","元和 (1615–1624)","宽永 (1624–1644)","正保 (1644–1648)","庆安 (1648–1652)","承应 (1652–1655)","明历 (1655–1658)","万治 (1658–1661)","宽文 (1661–1673)","延宝 (1673–1681)","天和 (1681–1684)","贞享 (1684–1688)","元禄 (1688–1704)","宝永 (1704–1711)","正德 (1711–1716)","享保 (1716–1736)","元文 (1736–1741)","宽保 (1741–1744)","延享 (1744–1748)","宽延 (1748–1751)","宝历 (1751–1764)","明和 (1764–1772)","安永 (1772–1781)","天明 (1781–1789)","宽政 (1789–1801)","享和 (1801–1804)","文化 (1804–1818)","文政 (1818–1830)","天保 (1830–1844)","弘化 (1844–1848)","嘉永 (1848–1854)","安政 (1854–1860)","万延 (1860–1861)","文久 (1861–1864)","元治 (1864–1865)","庆应 (1865–1868)","明治","大正","昭和","平成"]},dayPeriods:{am:"上午",pm:"下午"}},persian:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],long:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},days:{narrow:["日","一","二","三","四","五","六"],short:["周日","周一","周二","周三","周四","周五","周六"],long:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},eras:{narrow:["波斯历"],short:["波斯历"],long:["波斯历"]},dayPeriods:{am:"上午",pm:"下午"}},roc:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],long:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},days:{narrow:["日","一","二","三","四","五","六"],short:["周日","周一","周二","周三","周四","周五","周六"],long:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},eras:{narrow:["民国前","民国"],short:["民国前","民国"],long:["民国前","民国"]},dayPeriods:{am:"上午",pm:"下午"}}}},number:{nu:["latn"],patterns:{decimal:{positivePattern:"{number}",negativePattern:"-{number}"},currency:{positivePattern:"{currency}{number}",negativePattern:"-{currency}{number}"},percent:{positivePattern:"{number}%",negativePattern:"-{number}%"}},symbols:{hanidec:{decimal:".",group:",",nan:"NaN",percent:"%",infinity:"∞"},latn:{decimal:".",group:",",nan:"NaN",percent:"%",infinity:"∞"}},currencies:{AUD:"AU$",BRL:"R$",CAD:"CA$",CNY:"￥",EUR:"€",GBP:"£",HKD:"HK$",ILR:"ILS",ILS:"₪",INR:"₹",JPY:"JP¥",KRW:"￦",MXN:"MX$",NZD:"NZ$",TWD:"NT$",USD:"US$",VND:"₫",XAF:"FCFA",XCD:"EC$",XOF:"CFA",XPF:"CFPF"}}});

/***/ },

/***/ 315:
/***/ function(module, exports) {

	/* jslint esnext: true */
	
	// Match these datetime components in a CLDR pattern, except those in single quotes
	"use strict";
	exports.createDateTimeFormat = createDateTimeFormat, exports.createDateTimeFormats = createDateTimeFormats;
	var expDTComponents = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
	// trim patterns after transformations
	var expPatternTrimmer = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	// Skip over patterns with these datetime components because we don't have data
	// to back them up:
	// timezone, weekday, amoung others
	var unwantedDTCs = /[rqQxXVOvZASjJgwWIQq]/;
	
	var dtKeys = ["weekday", "era", "year", "month", "day", "weekday", "quarter"];
	var tmKeys = ["hour", "minute", "second", "hour12", "timeZoneName"];
	
	function isDateFormatOnly(obj) {
	    for (var i = 0; i < tmKeys.length; i += 1) {
	        if (obj.hasOwnProperty(tmKeys[i])) {
	            return false;
	        }
	    }
	    return true;
	}
	
	function isTimeFormatOnly(obj) {
	    for (var i = 0; i < dtKeys.length; i += 1) {
	        if (obj.hasOwnProperty(dtKeys[i])) {
	            return false;
	        }
	    }
	    return true;
	}
	
	function joinDateAndTimeFormats(dateFormatObj, timeFormatObj) {
	    var o = {};
	    for (var i = 0; i < dtKeys.length; i += 1) {
	        if (dateFormatObj[dtKeys[i]]) {
	            o[dtKeys[i]] = dateFormatObj[dtKeys[i]];
	        }
	    }
	    for (var j = 0; j < tmKeys.length; j += 1) {
	        if (timeFormatObj[tmKeys[j]]) {
	            o[tmKeys[j]] = timeFormatObj[tmKeys[j]];
	        }
	    }
	    return o;
	}
	
	function computeFinalPatterns(formatObj) {
	    // From http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns:
	    //  'In patterns, two single quotes represents a literal single quote, either
	    //   inside or outside single quotes. Text within single quotes is not
	    //   interpreted in any way (except for two adjacent single quotes).'
	    formatObj.pattern12 = formatObj.extendedPattern.replace(/'([^']*)'/g, function ($0, literal) {
	        return literal ? literal : "'";
	    });
	
	    // pattern 12 is always the default. we can produce the 24 by removing {ampm}
	    formatObj.pattern = formatObj.pattern12.replace('{ampm}', '').replace(expPatternTrimmer, '');
	    return formatObj;
	}
	
	function createDateTimeFormat(skeleton, pattern) {
	    // we ignore certain patterns that are unsupported to avoid this expensive op.
	    if (unwantedDTCs.test(pattern))
	        return undefined;
	
	    var formatObj = {
	        originalPattern: pattern
	    };
	
	    // Replace the pattern string with the one required by the specification, whilst
	    // at the same time evaluating it for the subsets and formats
	    formatObj.extendedPattern = pattern.replace(expDTComponents, function ($0) {
	        // See which symbol we're dealing with
	        switch ($0.charAt(0)) {
	
	            // --- Era
	            case 'G':
	                return '{era}';
	
	            // --- Year
	            case 'y':
	            case 'Y':
	            case 'u':
	            case 'U':
	            case 'r':
	                return '{year}';
	
	            // --- Quarter (not supported in this polyfill)
	            case 'Q':
	            case 'q':
	                return '{quarter}';
	
	            // --- Month
	            case 'M':
	            case 'L':
	                return '{month}';
	
	            // --- Week (not supported in this polyfill)
	            case 'w':
	            case 'W':
	                return '{weekday}';
	
	            // --- Day
	            case 'd':
	            case 'D':
	            case 'F':
	            case 'g':
	                return '{day}';
	
	            // --- Week Day
	            case 'E':
	            case 'e':
	            case 'c':
	                return '{weekday}';
	
	            // --- Period
	            case 'a':
	            case 'b':
	            case 'B':
	                return '{ampm}';
	
	            // --- Hour
	            case 'h':
	            case 'H':
	            case 'k':
	            case 'K':
	                return '{hour}';
	
	            // --- Minute
	            case 'm':
	                return '{minute}';
	
	            // --- Second
	            case 's':
	            case 'S':
	            case 'A':
	                return '{second}';
	
	            // --- Timezone
	            case 'z':
	            case 'Z':
	            case 'O':
	            case 'v':
	            case 'V':
	            case 'X':
	            case 'x':
	                return '{timeZoneName}';
	
	        }
	    });
	
	    // Match the skeleton string with the one required by the specification
	    // this implementation is based on the Date Field Symbol Table:
	    // http://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
	    // Note: we are adding extra data to the formatObject even though this polyfill
	    //       might not support it.
	    skeleton.replace(expDTComponents, function ($0) {
	        // See which symbol we're dealing with
	        switch ($0.charAt(0)) {
	
	            // --- Era
	            case 'G':
	                formatObj.era = [ 'short', 'short', 'short', 'long', 'narrow' ][$0.length-1];
	                break;
	
	            // --- Year
	            case 'y':
	            case 'Y':
	            case 'u':
	            case 'U':
	                formatObj.year = $0.length === 2 ? '2-digit' : 'numeric';
	                break;
	            // case 'r':
	                // r: 1..n - For the Gregorian calendar, the 'r' year is the same as the 'u' year.
	                // break;
	
	            // --- Quarter (not supported in this polyfill)
	            case 'Q':
	            case 'q':
	                formatObj.quarter = [ 'numeric', '2-digit', 'short', 'long', 'narrow' ][$0.length-1];
	                break;
	
	            // --- Month
	            case 'M':
	            case 'L':
	                formatObj.month = [ 'numeric', '2-digit', 'short', 'long', 'narrow' ][$0.length-1];
	                break;
	
	            // --- Week (not supported in this polyfill)
	            case 'w':
	                // week of the year
	                formatObj.week = $0.length === 2 ? '2-digit' : 'numeric';
	                break;
	            case 'W':
	                // week of the month
	                formatObj.week = 'numeric';
	                break;
	
	            // --- Day
	            case 'd':
	                // day of the month
	                formatObj.day = $0.length === 2 ? '2-digit' : 'numeric';
	                break;
	            case 'D':
	                // day of the year
	                formatObj.day = 'numeric';
	                break;
	            case 'F':
	                // day of the week
	                formatObj.day = 'numeric';
	                break;
	            // case 'g':
	                // 1..n: Modified Julian day
	                // break;
	
	            // --- Week Day
	            case 'E':
	                // day of the week
	                formatObj.weekday = [ 'short', 'short', 'short', 'long', 'narrow', 'short' ][$0.length-1];
	                break;
	            case 'e':
	                // local day of the week
	                formatObj.weekday = [ 'numeric', '2-digit', 'short', 'long', 'narrow', 'short' ][$0.length-1];
	                break;
	            case 'c':
	                // stand alone local day of the week
	                formatObj.weekday = [ 'numeric', undefined, 'short', 'long', 'narrow', 'short' ][$0.length-1];
	                break;
	
	            // --- Period
	            case 'a': // AM, PM
	            case 'b': // am, pm, noon, midnight
	            case 'B': // flexible day periods
	                formatObj.hour12 = true;
	                break;
	
	            // --- Hour
	            case 'H':
	            case 'k':
	                formatObj.hour = $0.length === 2 ? '2-digit' : 'numeric';
	                break;
	            case 'h':
	            case 'K':
	                formatObj.hour12 = true; // 12-hour-cycle time formats (using h or K)
	                formatObj.hour = $0.length === 2 ? '2-digit' : 'numeric';
	                break;
	
	            // --- Minute
	            case 'm':
	                formatObj.minute = $0.length === 2 ? '2-digit' : 'numeric';
	                break;
	
	            // --- Second
	            case 's':
	                formatObj.second = $0.length === 2 ? '2-digit' : 'numeric';
	                break;
	            // case 'S': // 1..n: factional seconds
	            // case 'A': // 1..n: miliseconds in day
	
	            // --- Timezone
	            case 'z': // 1..3, 4: specific non-location format
	            case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
	            case 'O': // 1, 4: miliseconds in day short, long
	            case 'v': // 1, 4: generic non-location format
	            case 'V': // 1, 2, 3, 4: time zone ID or city
	            case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
	            case 'x': // 1, 2, 3, 4: The ISO8601 varios formats
	                // this polyfill only supports much, for now, we are just doing something dummy
	                formatObj.timeZoneName = $0.length < 4 ? 'short' : 'long';
	                break;
	
	        }
	    });
	
	    return computeFinalPatterns(formatObj);
	}
	
	function createDateTimeFormats(formats) {
	    var availableFormats = formats.availableFormats;
	    var timeFormats = formats.timeFormats;
	    var dateFormats = formats.dateFormats;
	    var result = [];
	    var skeleton, pattern, computed, i, j;
	    var timeRelatedFormats = [];
	    var dateRelatedFormats = [];
	
	    // Map available (custom) formats into a pattern for createDateTimeFormats
	    for (skeleton in availableFormats) {
	        if (availableFormats.hasOwnProperty(skeleton)) {
	            pattern = availableFormats[skeleton];
	            computed = createDateTimeFormat(skeleton, pattern);
	            if (computed) {
	                result.push(computed);
	                // in some cases, the format is only displaying date specific props
	                // or time specific props, in which case we need to also produce the
	                // combined formats.
	                if (isDateFormatOnly(computed)) {
	                    dateRelatedFormats.push(computed);
	                } else if (isTimeFormatOnly(computed)) {
	                    timeRelatedFormats.push(computed);
	                }
	            }
	        }
	    }
	
	    // Map time formats into a pattern for createDateTimeFormats
	    for (skeleton in timeFormats) {
	        if (timeFormats.hasOwnProperty(skeleton)) {
	            pattern = timeFormats[skeleton];
	            computed = createDateTimeFormat(skeleton, pattern);
	            if (computed) {
	                result.push(computed);
	                timeRelatedFormats.push(computed);
	            }
	        }
	    }
	
	    // Map date formats into a pattern for createDateTimeFormats
	    for (skeleton in dateFormats) {
	        if (dateFormats.hasOwnProperty(skeleton)) {
	            pattern = dateFormats[skeleton];
	            computed = createDateTimeFormat(skeleton, pattern);
	            if (computed) {
	                result.push(computed);
	                dateRelatedFormats.push(computed);
	            }
	        }
	    }
	
	    // combine custom time and custom date formats when they are orthogonals to complete the
	    // formats supported by CLDR.
	    // This Algo is based on section "Missing Skeleton Fields" from:
	    // http://unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems
	    for (i = 0; i < timeRelatedFormats.length; i += 1) {
	        for (j = 0; j < dateRelatedFormats.length; j += 1) {
	            if (dateRelatedFormats[j].month === 'long') {
	                pattern = dateRelatedFormats[j].weekday ? formats.full : formats.long;
	            } else if (dateRelatedFormats[j].month === 'short') {
	                pattern = formats.medium;
	            } else {
	                pattern = formats.short;
	            }
	            computed = joinDateAndTimeFormats(dateRelatedFormats[j], timeRelatedFormats[i]);
	            computed.originalPattern = pattern;
	            computed.extendedPattern = pattern
	                .replace('{0}', timeRelatedFormats[i].extendedPattern)
	                .replace('{1}', dateRelatedFormats[j].extendedPattern)
	                .replace(/^[,\s]+|[,\s]+$/gi, '');
	            result.push(computeFinalPatterns(computed));
	        }
	    }
	
	    return result;
	}
	
	//# sourceMappingURL=cldr.js.map

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license Copyright 2013 Andy Earnshaw, MIT License
	 *
	 * Implements the ECMAScript Internationalization API in ES5-compatible environments,
	 * following the ECMA-402 specification as closely as possible
	 *
	 * ECMA-402: http://ecma-international.org/ecma-402/1.0/
	 *
	 * CLDR format locale data should be provided using IntlPolyfill.__addLocaleData().
	 */
	/*jshint esnext: true, proto:true, eqnull:true, boss:true, laxbreak:true, newcap:false, shadow:true, funcscope:true */
	
	"use strict";
	var src$exp$$ = __webpack_require__(317), src$cldr$$ = __webpack_require__(315);
	
	var Intl = {},
	
	    realDefineProp = (function () {
	        var sentinel = {};
	        try {
	            Object.defineProperty(sentinel, 'a', {});
	            return 'a' in sentinel;
	        } catch (e) {
	            return false;
	        }
	    })(),
	
	    // Need a workaround for getters in ES3
	    es3  = !realDefineProp && !Object.prototype.__defineGetter__,
	
	    // We use this a lot (and need it for proto-less objects)
	    hop = Object.prototype.hasOwnProperty,
	
	    // Naive defineProperty for compatibility
	    defineProperty = realDefineProp ? Object.defineProperty : function (obj, name, desc) {
	        if ('get' in desc && obj.__defineGetter__)
	            obj.__defineGetter__(name, desc.get);
	
	        else if (!hop.call(obj, name) || 'value' in desc)
	            obj[name] = desc.value;
	    },
	
	    // Array.prototype.indexOf, as good as we need it to be
	    arrIndexOf = Array.prototype.indexOf || function (search) {
	        /*jshint validthis:true */
	        var t = this;
	        if (!t.length)
	            return -1;
	
	        for (var i = arguments[1] || 0, max = t.length; i < max; i++) {
	            if (t[i] === search)
	                return i;
	        }
	
	        return -1;
	    },
	
	    // Create an object with the specified prototype (2nd arg required for Record)
	    objCreate = Object.create || function (proto, props) {
	        var obj;
	
	        function F() {}
	        F.prototype = proto;
	        obj = new F();
	
	        for (var k in props) {
	            if (hop.call(props, k))
	                defineProperty(obj, k, props[k]);
	        }
	
	        return obj;
	    },
	
	    // Snapshot some (hopefully still) native built-ins
	    arrSlice  = Array.prototype.slice,
	    arrConcat = Array.prototype.concat,
	    arrPush   = Array.prototype.push,
	    arrJoin   = Array.prototype.join,
	    arrShift  = Array.prototype.shift,
	    arrUnshift= Array.prototype.unshift,
	
	    // Naive Function.prototype.bind for compatibility
	    fnBind = Function.prototype.bind || function (thisObj) {
	        var fn = this,
	            args = arrSlice.call(arguments, 1);
	
	        // All our (presently) bound functions have either 1 or 0 arguments. By returning
	        // different function signatures, we can pass some tests in ES3 environments
	        if (fn.length === 1) {
	            return function (a) {
	                return fn.apply(thisObj, arrConcat.call(args, arrSlice.call(arguments)));
	            };
	        }
	        else {
	            return function () {
	                return fn.apply(thisObj, arrConcat.call(args, arrSlice.call(arguments)));
	            };
	        }
	    },
	
	    // Default locale is the first-added locale data for us
	    defaultLocale,
	
	    // Object housing internal properties for constructors
	    internals = objCreate(null),
	
	    // Keep internal properties internal
	    secret = Math.random(),
	
	    // An object map of date component keys, saves using a regex later
	    dateWidths = objCreate(null, { narrow:{}, short:{}, long:{} }),
	
	    // Each constructor prototype should be an instance of the constructor itself, but we
	    // can't initialise them as such until some locale data has been added, so this is how
	    // we keep track
	    numberFormatProtoInitialised = false,
	    dateTimeFormatProtoInitialised = false,
	
	    // Some regular expressions we're using
	    expCurrencyCode = /^[A-Z]{3}$/,
	    expUnicodeExSeq = /-u(?:-[0-9a-z]{2,8})+/gi, // See `extension` below
	
	    // IANA Subtag Registry redundant tag and subtag maps
	    redundantTags = {
	        tags: {
	            "art-lojban":   "jbo",       "i-ami":        "ami",       "i-bnn":       "bnn",  "i-hak":      "hak",
	            "i-klingon":    "tlh",       "i-lux":        "lb",        "i-navajo":    "nv",   "i-pwn":      "pwn",
	            "i-tao":        "tao",       "i-tay":        "tay",       "i-tsu":       "tsu",  "no-bok":     "nb",
	            "no-nyn":       "nn",        "sgn-BE-FR":    "sfb",       "sgn-BE-NL":   "vgt",  "sgn-CH-DE":  "sgg",
	            "zh-guoyu":     "cmn",       "zh-hakka":     "hak",       "zh-min-nan":  "nan",  "zh-xiang":   "hsn",
	            "sgn-BR":       "bzs",       "sgn-CO":       "csn",       "sgn-DE":      "gsg",  "sgn-DK":     "dsl",
	            "sgn-ES":       "ssp",       "sgn-FR":       "fsl",       "sgn-GB":      "bfi",  "sgn-GR":     "gss",
	            "sgn-IE":       "isg",       "sgn-IT":       "ise",       "sgn-JP":      "jsl",  "sgn-MX":     "mfs",
	            "sgn-NI":       "ncs",       "sgn-NL":       "dse",       "sgn-NO":      "nsl",  "sgn-PT":     "psr",
	            "sgn-SE":       "swl",       "sgn-US":       "ase",       "sgn-ZA":      "sfs",  "zh-cmn":     "cmn",
	            "zh-cmn-Hans":  "cmn-Hans",  "zh-cmn-Hant":  "cmn-Hant",  "zh-gan":      "gan",  "zh-wuu":     "wuu",
	            "zh-yue":       "yue"
	        },
	        subtags: {
	              BU: "MM",   DD: "DE",   FX: "FR",   TP: "TL",   YD: "YE",   ZR: "CD",  heploc: "alalc97",
	            'in': "id",   iw: "he",   ji:  "yi",  jw: "jv",   mo: "ro",  ayx: "nun", bjd: "drl",
	             ccq: "rki", cjr: "mom", cka: "cmr", cmk: "xch", drh: "khk", drw: "prs", gav: "dev",
	             hrr: "jal", ibi: "opa", kgh: "kml", lcq: "ppr", mst: "mry", myt: "mry", sca: "hle",
	             tie: "ras", tkk: "twm", tlw: "weo", tnf: "prs", ybd: "rki", yma: "lrr"
	        },
	        extLang: {
	            aao: [ "aao", "ar"  ], abh: [ "abh", "ar"  ], abv: [ "abv", "ar"  ], acm: [ "acm", "ar"  ],
	            acq: [ "acq", "ar"  ], acw: [ "acw", "ar"  ], acx: [ "acx", "ar"  ], acy: [ "acy", "ar"  ],
	            adf: [ "adf", "ar"  ], ads: [ "ads", "sgn" ], aeb: [ "aeb", "ar"  ], aec: [ "aec", "ar"  ],
	            aed: [ "aed", "sgn" ], aen: [ "aen", "sgn" ], afb: [ "afb", "ar"  ], afg: [ "afg", "sgn" ],
	            ajp: [ "ajp", "ar"  ], apc: [ "apc", "ar"  ], apd: [ "apd", "ar"  ], arb: [ "arb", "ar"  ],
	            arq: [ "arq", "ar"  ], ars: [ "ars", "ar"  ], ary: [ "ary", "ar"  ], arz: [ "arz", "ar"  ],
	            ase: [ "ase", "sgn" ], asf: [ "asf", "sgn" ], asp: [ "asp", "sgn" ], asq: [ "asq", "sgn" ],
	            asw: [ "asw", "sgn" ], auz: [ "auz", "ar"  ], avl: [ "avl", "ar"  ], ayh: [ "ayh", "ar"  ],
	            ayl: [ "ayl", "ar"  ], ayn: [ "ayn", "ar"  ], ayp: [ "ayp", "ar"  ], bbz: [ "bbz", "ar"  ],
	            bfi: [ "bfi", "sgn" ], bfk: [ "bfk", "sgn" ], bjn: [ "bjn", "ms"  ], bog: [ "bog", "sgn" ],
	            bqn: [ "bqn", "sgn" ], bqy: [ "bqy", "sgn" ], btj: [ "btj", "ms"  ], bve: [ "bve", "ms"  ],
	            bvl: [ "bvl", "sgn" ], bvu: [ "bvu", "ms"  ], bzs: [ "bzs", "sgn" ], cdo: [ "cdo", "zh"  ],
	            cds: [ "cds", "sgn" ], cjy: [ "cjy", "zh"  ], cmn: [ "cmn", "zh"  ], coa: [ "coa", "ms"  ],
	            cpx: [ "cpx", "zh"  ], csc: [ "csc", "sgn" ], csd: [ "csd", "sgn" ], cse: [ "cse", "sgn" ],
	            csf: [ "csf", "sgn" ], csg: [ "csg", "sgn" ], csl: [ "csl", "sgn" ], csn: [ "csn", "sgn" ],
	            csq: [ "csq", "sgn" ], csr: [ "csr", "sgn" ], czh: [ "czh", "zh"  ], czo: [ "czo", "zh"  ],
	            doq: [ "doq", "sgn" ], dse: [ "dse", "sgn" ], dsl: [ "dsl", "sgn" ], dup: [ "dup", "ms"  ],
	            ecs: [ "ecs", "sgn" ], esl: [ "esl", "sgn" ], esn: [ "esn", "sgn" ], eso: [ "eso", "sgn" ],
	            eth: [ "eth", "sgn" ], fcs: [ "fcs", "sgn" ], fse: [ "fse", "sgn" ], fsl: [ "fsl", "sgn" ],
	            fss: [ "fss", "sgn" ], gan: [ "gan", "zh"  ], gds: [ "gds", "sgn" ], gom: [ "gom", "kok" ],
	            gse: [ "gse", "sgn" ], gsg: [ "gsg", "sgn" ], gsm: [ "gsm", "sgn" ], gss: [ "gss", "sgn" ],
	            gus: [ "gus", "sgn" ], hab: [ "hab", "sgn" ], haf: [ "haf", "sgn" ], hak: [ "hak", "zh"  ],
	            hds: [ "hds", "sgn" ], hji: [ "hji", "ms"  ], hks: [ "hks", "sgn" ], hos: [ "hos", "sgn" ],
	            hps: [ "hps", "sgn" ], hsh: [ "hsh", "sgn" ], hsl: [ "hsl", "sgn" ], hsn: [ "hsn", "zh"  ],
	            icl: [ "icl", "sgn" ], ils: [ "ils", "sgn" ], inl: [ "inl", "sgn" ], ins: [ "ins", "sgn" ],
	            ise: [ "ise", "sgn" ], isg: [ "isg", "sgn" ], isr: [ "isr", "sgn" ], jak: [ "jak", "ms"  ],
	            jax: [ "jax", "ms"  ], jcs: [ "jcs", "sgn" ], jhs: [ "jhs", "sgn" ], jls: [ "jls", "sgn" ],
	            jos: [ "jos", "sgn" ], jsl: [ "jsl", "sgn" ], jus: [ "jus", "sgn" ], kgi: [ "kgi", "sgn" ],
	            knn: [ "knn", "kok" ], kvb: [ "kvb", "ms"  ], kvk: [ "kvk", "sgn" ], kvr: [ "kvr", "ms"  ],
	            kxd: [ "kxd", "ms"  ], lbs: [ "lbs", "sgn" ], lce: [ "lce", "ms"  ], lcf: [ "lcf", "ms"  ],
	            liw: [ "liw", "ms"  ], lls: [ "lls", "sgn" ], lsg: [ "lsg", "sgn" ], lsl: [ "lsl", "sgn" ],
	            lso: [ "lso", "sgn" ], lsp: [ "lsp", "sgn" ], lst: [ "lst", "sgn" ], lsy: [ "lsy", "sgn" ],
	            ltg: [ "ltg", "lv"  ], lvs: [ "lvs", "lv"  ], lzh: [ "lzh", "zh"  ], max: [ "max", "ms"  ],
	            mdl: [ "mdl", "sgn" ], meo: [ "meo", "ms"  ], mfa: [ "mfa", "ms"  ], mfb: [ "mfb", "ms"  ],
	            mfs: [ "mfs", "sgn" ], min: [ "min", "ms"  ], mnp: [ "mnp", "zh"  ], mqg: [ "mqg", "ms"  ],
	            mre: [ "mre", "sgn" ], msd: [ "msd", "sgn" ], msi: [ "msi", "ms"  ], msr: [ "msr", "sgn" ],
	            mui: [ "mui", "ms"  ], mzc: [ "mzc", "sgn" ], mzg: [ "mzg", "sgn" ], mzy: [ "mzy", "sgn" ],
	            nan: [ "nan", "zh"  ], nbs: [ "nbs", "sgn" ], ncs: [ "ncs", "sgn" ], nsi: [ "nsi", "sgn" ],
	            nsl: [ "nsl", "sgn" ], nsp: [ "nsp", "sgn" ], nsr: [ "nsr", "sgn" ], nzs: [ "nzs", "sgn" ],
	            okl: [ "okl", "sgn" ], orn: [ "orn", "ms"  ], ors: [ "ors", "ms"  ], pel: [ "pel", "ms"  ],
	            pga: [ "pga", "ar"  ], pks: [ "pks", "sgn" ], prl: [ "prl", "sgn" ], prz: [ "prz", "sgn" ],
	            psc: [ "psc", "sgn" ], psd: [ "psd", "sgn" ], pse: [ "pse", "ms"  ], psg: [ "psg", "sgn" ],
	            psl: [ "psl", "sgn" ], pso: [ "pso", "sgn" ], psp: [ "psp", "sgn" ], psr: [ "psr", "sgn" ],
	            pys: [ "pys", "sgn" ], rms: [ "rms", "sgn" ], rsi: [ "rsi", "sgn" ], rsl: [ "rsl", "sgn" ],
	            sdl: [ "sdl", "sgn" ], sfb: [ "sfb", "sgn" ], sfs: [ "sfs", "sgn" ], sgg: [ "sgg", "sgn" ],
	            sgx: [ "sgx", "sgn" ], shu: [ "shu", "ar"  ], slf: [ "slf", "sgn" ], sls: [ "sls", "sgn" ],
	            sqk: [ "sqk", "sgn" ], sqs: [ "sqs", "sgn" ], ssh: [ "ssh", "ar"  ], ssp: [ "ssp", "sgn" ],
	            ssr: [ "ssr", "sgn" ], svk: [ "svk", "sgn" ], swc: [ "swc", "sw"  ], swh: [ "swh", "sw"  ],
	            swl: [ "swl", "sgn" ], syy: [ "syy", "sgn" ], tmw: [ "tmw", "ms"  ], tse: [ "tse", "sgn" ],
	            tsm: [ "tsm", "sgn" ], tsq: [ "tsq", "sgn" ], tss: [ "tss", "sgn" ], tsy: [ "tsy", "sgn" ],
	            tza: [ "tza", "sgn" ], ugn: [ "ugn", "sgn" ], ugy: [ "ugy", "sgn" ], ukl: [ "ukl", "sgn" ],
	            uks: [ "uks", "sgn" ], urk: [ "urk", "ms"  ], uzn: [ "uzn", "uz"  ], uzs: [ "uzs", "uz"  ],
	            vgt: [ "vgt", "sgn" ], vkk: [ "vkk", "ms"  ], vkt: [ "vkt", "ms"  ], vsi: [ "vsi", "sgn" ],
	            vsl: [ "vsl", "sgn" ], vsv: [ "vsv", "sgn" ], wuu: [ "wuu", "zh"  ], xki: [ "xki", "sgn" ],
	            xml: [ "xml", "sgn" ], xmm: [ "xmm", "ms"  ], xms: [ "xms", "sgn" ], yds: [ "yds", "sgn" ],
	            ysl: [ "ysl", "sgn" ], yue: [ "yue", "zh"  ], zib: [ "zib", "sgn" ], zlm: [ "zlm", "ms"  ],
	            zmi: [ "zmi", "ms"  ], zsl: [ "zsl", "sgn" ], zsm: [ "zsm", "ms"  ]
	        }
	    },
	
	    // Currency minor units output from get-4217 grunt task, formatted
	    currencyMinorUnits = {
	        BHD: 3, BYR: 0, XOF: 0, BIF: 0, XAF: 0, CLF: 4, CLP: 0, KMF: 0, DJF: 0,
	        XPF: 0, GNF: 0, ISK: 0, IQD: 3, JPY: 0, JOD: 3, KRW: 0, KWD: 3, LYD: 3,
	        OMR: 3, PYG: 0, RWF: 0, TND: 3, UGX: 0, UYI: 0, VUV: 0, VND: 0
	    };
	
	// Sect 6.2 Language Tags
	// ======================
	
	/**
	 * The IsStructurallyValidLanguageTag abstract operation verifies that the locale
	 * argument (which must be a String value)
	 *
	 * - represents a well-formed BCP 47 language tag as specified in RFC 5646 section
	 *   2.1, or successor,
	 * - does not include duplicate variant subtags, and
	 * - does not include duplicate singleton subtags.
	 *
	 * The abstract operation returns true if locale can be generated from the ABNF
	 * grammar in section 2.1 of the RFC, starting with Language-Tag, and does not
	 * contain duplicate variant or singleton subtags (other than as a private use
	 * subtag). It returns false otherwise. Terminal value characters in the grammar are
	 * interpreted as the Unicode equivalents of the ASCII octet values given.
	 */
	function /* 6.2.2 */IsStructurallyValidLanguageTag(locale) {
	    // represents a well-formed BCP 47 language tag as specified in RFC 5646
	    if (!src$exp$$.expBCP47Syntax.test(locale))
	        return false;
	
	    // does not include duplicate variant subtags, and
	    if (src$exp$$.expVariantDupes.test(locale))
	        return false;
	
	    // does not include duplicate singleton subtags.
	    if (src$exp$$.expSingletonDupes.test(locale))
	        return false;
	
	    return true;
	}
	
	/**
	 * The CanonicalizeLanguageTag abstract operation returns the canonical and case-
	 * regularized form of the locale argument (which must be a String value that is
	 * a structurally valid BCP 47 language tag as verified by the
	 * IsStructurallyValidLanguageTag abstract operation). It takes the steps
	 * specified in RFC 5646 section 4.5, or successor, to bring the language tag
	 * into canonical form, and to regularize the case of the subtags, but does not
	 * take the steps to bring a language tag into “extlang form” and to reorder
	 * variant subtags.
	
	 * The specifications for extensions to BCP 47 language tags, such as RFC 6067,
	 * may include canonicalization rules for the extension subtag sequences they
	 * define that go beyond the canonicalization rules of RFC 5646 section 4.5.
	 * Implementations are allowed, but not required, to apply these additional rules.
	 */
	function /* 6.2.3 */CanonicalizeLanguageTag (locale) {
	    var match, parts;
	
	    // A language tag is in 'canonical form' when the tag is well-formed
	    // according to the rules in Sections 2.1 and 2.2
	
	    // Section 2.1 says all subtags use lowercase...
	    locale = locale.toLowerCase();
	
	    // ...with 2 exceptions: 'two-letter and four-letter subtags that neither
	    // appear at the start of the tag nor occur after singletons.  Such two-letter
	    // subtags are all uppercase (as in the tags "en-CA-x-ca" or "sgn-BE-FR") and
	    // four-letter subtags are titlecase (as in the tag "az-Latn-x-latn").
	    parts = locale.split('-');
	    for (var i = 1, max = parts.length; i < max; i++) {
	        // Two-letter subtags are all uppercase
	        if (parts[i].length === 2)
	            parts[i] = parts[i].toUpperCase();
	
	        // Four-letter subtags are titlecase
	        else if (parts[i].length === 4)
	            parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
	
	        // Is it a singleton?
	        else if (parts[i].length === 1 && parts[i] !== 'x')
	            break;
	    }
	    locale = arrJoin.call(parts, '-');
	
	    // The steps laid out in RFC 5646 section 4.5 are as follows:
	
	    // 1.  Extension sequences are ordered into case-insensitive ASCII order
	    //     by singleton subtag.
	    if ((match = locale.match(src$exp$$.expExtSequences)) && match.length > 1) {
	        // The built-in sort() sorts by ASCII order, so use that
	        match.sort();
	
	        // Replace all extensions with the joined, sorted array
	        locale = locale.replace(
	            RegExp('(?:' + src$exp$$.expExtSequences.source + ')+', 'i'),
	            arrJoin.call(match, '')
	        );
	    }
	
	    // 2.  Redundant or grandfathered tags are replaced by their 'Preferred-
	    //     Value', if there is one.
	    if (hop.call(redundantTags.tags, locale))
	        locale = redundantTags.tags[locale];
	
	    // 3.  Subtags are replaced by their 'Preferred-Value', if there is one.
	    //     For extlangs, the original primary language subtag is also
	    //     replaced if there is a primary language subtag in the 'Preferred-
	    //     Value'.
	    parts = locale.split('-');
	
	    for (var i = 1, max = parts.length; i < max; i++) {
	        if (hop.call(redundantTags.subtags, parts[i]))
	            parts[i] = redundantTags.subtags[parts[i]];
	
	        else if (hop.call(redundantTags.extLang, parts[i])) {
	            parts[i] = redundantTags.extLang[parts[i]][0];
	
	            // For extlang tags, the prefix needs to be removed if it is redundant
	            if (i === 1 && redundantTags.extLang[parts[1]][1] === parts[0]) {
	                parts = arrSlice.call(parts, i++);
	                max -= 1;
	            }
	        }
	    }
	
	    return arrJoin.call(parts, '-');
	}
	
	/**
	 * The DefaultLocale abstract operation returns a String value representing the
	 * structurally valid (6.2.2) and canonicalized (6.2.3) BCP 47 language tag for the
	 * host environment’s current locale.
	 */
	function /* 6.2.4 */DefaultLocale () {
	    return defaultLocale;
	}
	
	// Sect 6.3 Currency Codes
	// =======================
	
	/**
	 * The IsWellFormedCurrencyCode abstract operation verifies that the currency argument
	 * (after conversion to a String value) represents a well-formed 3-letter ISO currency
	 * code. The following steps are taken:
	 */
	function /* 6.3.1 */IsWellFormedCurrencyCode(currency) {
	    var
	        // 1. Let `c` be ToString(currency)
	        c = String(currency),
	
	        // 2. Let `normalized` be the result of mapping c to upper case as described
	        //    in 6.1.
	        normalized = toLatinUpperCase(c);
	
	    // 3. If the string length of normalized is not 3, return false.
	    // 4. If normalized contains any character that is not in the range "A" to "Z"
	    //    (U+0041 to U+005A), return false.
	    if (expCurrencyCode.test(normalized) === false)
	        return false;
	
	    // 5. Return true
	    return true;
	}
	
	// Sect 9.2 Abstract Operations
	// ============================
	function /* 9.2.1 */CanonicalizeLocaleList (locales) {
	// The abstract operation CanonicalizeLocaleList takes the following steps:
	
	    // 1. If locales is undefined, then a. Return a new empty List
	    if (locales === undefined)
	        return new List();
	
	    var
	        // 2. Let seen be a new empty List.
	        seen = new List(),
	
	        // 3. If locales is a String value, then
	        //    a. Let locales be a new array created as if by the expression new
	        //    Array(locales) where Array is the standard built-in constructor with
	        //    that name and locales is the value of locales.
	        locales = typeof locales === 'string' ? [ locales ] : locales,
	
	        // 4. Let O be ToObject(locales).
	        O = toObject(locales),
	
	        // 5. Let lenValue be the result of calling the [[Get]] internal method of
	        //    O with the argument "length".
	        // 6. Let len be ToUint32(lenValue).
	        len = O.length,
	
	        // 7. Let k be 0.
	        k = 0;
	
	    // 8. Repeat, while k < len
	    while (k < len) {
	        var
	            // a. Let Pk be ToString(k).
	            Pk = String(k),
	
	            // b. Let kPresent be the result of calling the [[HasProperty]] internal
	            //    method of O with argument Pk.
	            kPresent = Pk in O;
	
	        // c. If kPresent is true, then
	        if (kPresent) {
	            var
	                // i. Let kValue be the result of calling the [[Get]] internal
	                //     method of O with argument Pk.
	                kValue = O[Pk];
	
	            // ii. If the type of kValue is not String or Object, then throw a
	            //     TypeError exception.
	            if (kValue == null || (typeof kValue !== 'string' && typeof kValue !== 'object'))
	                throw new TypeError('String or Object type expected');
	
	            var
	                // iii. Let tag be ToString(kValue).
	                tag = String(kValue);
	
	            // iv. If the result of calling the abstract operation
	            //     IsStructurallyValidLanguageTag (defined in 6.2.2), passing tag as
	            //     the argument, is false, then throw a RangeError exception.
	            if (!IsStructurallyValidLanguageTag(tag))
	                throw new RangeError("'" + tag + "' is not a structurally valid language tag");
	
	            // v. Let tag be the result of calling the abstract operation
	            //    CanonicalizeLanguageTag (defined in 6.2.3), passing tag as the
	            //    argument.
	            tag = CanonicalizeLanguageTag(tag);
	
	            // vi. If tag is not an element of seen, then append tag as the last
	            //     element of seen.
	            if (arrIndexOf.call(seen, tag) === -1)
	                arrPush.call(seen, tag);
	        }
	
	        // d. Increase k by 1.
	        k++;
	    }
	
	    // 9. Return seen.
	    return seen;
	}
	
	/**
	 * The BestAvailableLocale abstract operation compares the provided argument
	 * locale, which must be a String value with a structurally valid and
	 * canonicalized BCP 47 language tag, against the locales in availableLocales and
	 * returns either the longest non-empty prefix of locale that is an element of
	 * availableLocales, or undefined if there is no such element. It uses the
	 * fallback mechanism of RFC 4647, section 3.4. The following steps are taken:
	 */
	function /* 9.2.2 */BestAvailableLocale (availableLocales, locale) {
	    var
	       // 1. Let candidate be locale
	       candidate = locale;
	
	    // 2. Repeat
	    while (true) {
	        // a. If availableLocales contains an element equal to candidate, then return
	        // candidate.
	        if (arrIndexOf.call(availableLocales, candidate) > -1)
	            return candidate;
	
	        var
	            // b. Let pos be the character index of the last occurrence of "-"
	            // (U+002D) within candidate. If that character does not occur, return
	            // undefined.
	            pos = candidate.lastIndexOf('-');
	
	        if (pos < 0)
	            return;
	
	        // c. If pos ≥ 2 and the character "-" occurs at index pos-2 of candidate,
	        //    then decrease pos by 2.
	        if (pos >= 2 && candidate.charAt(pos - 2) === '-')
	            pos -= 2;
	
	        // d. Let candidate be the substring of candidate from position 0, inclusive,
	        //    to position pos, exclusive.
	        candidate = candidate.substring(0, pos);
	    }
	}
	
	/**
	 * The LookupMatcher abstract operation compares requestedLocales, which must be
	 * a List as returned by CanonicalizeLocaleList, against the locales in
	 * availableLocales and determines the best available language to meet the
	 * request. The following steps are taken:
	 */
	function /* 9.2.3 */LookupMatcher (availableLocales, requestedLocales) {
	    var
	        // 1. Let i be 0.
	        i = 0,
	
	        // 2. Let len be the number of elements in requestedLocales.
	        len = requestedLocales.length,
	
	        // 3. Let availableLocale be undefined.
	        availableLocale;
	
	    // 4. Repeat while i < len and availableLocale is undefined:
	    while (i < len && !availableLocale) {
	        var
	            // a. Let locale be the element of requestedLocales at 0-origined list
	            //    position i.
	            locale = requestedLocales[i],
	
	            // b. Let noExtensionsLocale be the String value that is locale with all
	            //    Unicode locale extension sequences removed.
	            noExtensionsLocale = String(locale).replace(expUnicodeExSeq, ''),
	
	            // c. Let availableLocale be the result of calling the
	            //    BestAvailableLocale abstract operation (defined in 9.2.2) with
	            //    arguments availableLocales and noExtensionsLocale.
	            availableLocale = BestAvailableLocale(availableLocales, noExtensionsLocale);
	
	        // d. Increase i by 1.
	        i++;
	    }
	
	    var
	        // 5. Let result be a new Record.
	        result = new Record();
	
	    // 6. If availableLocale is not undefined, then
	    if (availableLocale !== undefined) {
	        // a. Set result.[[locale]] to availableLocale.
	        result['[[locale]]'] = availableLocale;
	
	        // b. If locale and noExtensionsLocale are not the same String value, then
	        if (String(locale) !== String(noExtensionsLocale)) {
	            var
	                // i. Let extension be the String value consisting of the first
	                //    substring of locale that is a Unicode locale extension sequence.
	                extension = locale.match(expUnicodeExSeq)[0],
	
	                // ii. Let extensionIndex be the character position of the initial
	                //     "-" of the first Unicode locale extension sequence within locale.
	                extensionIndex = locale.indexOf('-u-');
	
	            // iii. Set result.[[extension]] to extension.
	            result['[[extension]]'] = extension;
	
	            // iv. Set result.[[extensionIndex]] to extensionIndex.
	            result['[[extensionIndex]]'] = extensionIndex;
	        }
	    }
	    // 7. Else
	    else
	        // a. Set result.[[locale]] to the value returned by the DefaultLocale abstract
	        //    operation (defined in 6.2.4).
	        result['[[locale]]'] = DefaultLocale();
	
	    // 8. Return result
	    return result;
	}
	
	/**
	 * The BestFitMatcher abstract operation compares requestedLocales, which must be
	 * a List as returned by CanonicalizeLocaleList, against the locales in
	 * availableLocales and determines the best available language to meet the
	 * request. The algorithm is implementation dependent, but should produce results
	 * that a typical user of the requested locales would perceive as at least as
	 * good as those produced by the LookupMatcher abstract operation. Options
	 * specified through Unicode locale extension sequences must be ignored by the
	 * algorithm. Information about such subsequences is returned separately.
	 * The abstract operation returns a record with a [[locale]] field, whose value
	 * is the language tag of the selected locale, which must be an element of
	 * availableLocales. If the language tag of the request locale that led to the
	 * selected locale contained a Unicode locale extension sequence, then the
	 * returned record also contains an [[extension]] field whose value is the first
	 * Unicode locale extension sequence, and an [[extensionIndex]] field whose value
	 * is the index of the first Unicode locale extension sequence within the request
	 * locale language tag.
	 */
	function /* 9.2.4 */BestFitMatcher (availableLocales, requestedLocales) {
	    return LookupMatcher(availableLocales, requestedLocales);
	}
	
	/**
	 * The ResolveLocale abstract operation compares a BCP 47 language priority list
	 * requestedLocales against the locales in availableLocales and determines the
	 * best available language to meet the request. availableLocales and
	 * requestedLocales must be provided as List values, options as a Record.
	 */
	function /* 9.2.5 */ResolveLocale (availableLocales, requestedLocales, options, relevantExtensionKeys, localeData) {
	    if (availableLocales.length === 0) {
	        throw new ReferenceError('No locale data has been provided for this object yet.');
	    }
	
	    // The following steps are taken:
	    var
	        // 1. Let matcher be the value of options.[[localeMatcher]].
	        matcher = options['[[localeMatcher]]'];
	
	    // 2. If matcher is "lookup", then
	    if (matcher === 'lookup')
	        var
	            // a. Let r be the result of calling the LookupMatcher abstract operation
	            //    (defined in 9.2.3) with arguments availableLocales and
	            //    requestedLocales.
	            r = LookupMatcher(availableLocales, requestedLocales);
	
	    // 3. Else
	    else
	        var
	            // a. Let r be the result of calling the BestFitMatcher abstract
	            //    operation (defined in 9.2.4) with arguments availableLocales and
	            //    requestedLocales.
	            r = BestFitMatcher(availableLocales, requestedLocales);
	
	    var
	        // 4. Let foundLocale be the value of r.[[locale]].
	        foundLocale = r['[[locale]]'];
	
	    // 5. If r has an [[extension]] field, then
	    if (hop.call(r, '[[extension]]'))
	        var
	            // a. Let extension be the value of r.[[extension]].
	            extension = r['[[extension]]'],
	            // b. Let extensionIndex be the value of r.[[extensionIndex]].
	            extensionIndex = r['[[extensionIndex]]'],
	            // c. Let split be the standard built-in function object defined in ES5,
	            //    15.5.4.14.
	            split = String.prototype.split,
	            // d. Let extensionSubtags be the result of calling the [[Call]] internal
	            //    method of split with extension as the this value and an argument
	            //    list containing the single item "-".
	            extensionSubtags = split.call(extension, '-'),
	            // e. Let extensionSubtagsLength be the result of calling the [[Get]]
	            //    internal method of extensionSubtags with argument "length".
	            extensionSubtagsLength = extensionSubtags.length;
	
	    var
	        // 6. Let result be a new Record.
	        result = new Record();
	
	    // 7. Set result.[[dataLocale]] to foundLocale.
	    result['[[dataLocale]]'] = foundLocale;
	
	    var
	        // 8. Let supportedExtension be "-u".
	        supportedExtension = '-u',
	        // 9. Let i be 0.
	        i = 0,
	        // 10. Let len be the result of calling the [[Get]] internal method of
	        //     relevantExtensionKeys with argument "length".
	        len = relevantExtensionKeys.length;
	
	    // 11 Repeat while i < len:
	    while (i < len) {
	        var
	            // a. Let key be the result of calling the [[Get]] internal method of
	            //    relevantExtensionKeys with argument ToString(i).
	            key = relevantExtensionKeys[i],
	            // b. Let foundLocaleData be the result of calling the [[Get]] internal
	            //    method of localeData with the argument foundLocale.
	            foundLocaleData = localeData[foundLocale],
	            // c. Let keyLocaleData be the result of calling the [[Get]] internal
	            //    method of foundLocaleData with the argument key.
	            keyLocaleData = foundLocaleData[key],
	            // d. Let value be the result of calling the [[Get]] internal method of
	            //    keyLocaleData with argument "0".
	            value = keyLocaleData['0'],
	            // e. Let supportedExtensionAddition be "".
	            supportedExtensionAddition = '',
	            // f. Let indexOf be the standard built-in function object defined in
	            //    ES5, 15.4.4.14.
	            indexOf = arrIndexOf;
	
	        // g. If extensionSubtags is not undefined, then
	        if (extensionSubtags !== undefined) {
	            var
	                // i. Let keyPos be the result of calling the [[Call]] internal
	                //    method of indexOf with extensionSubtags as the this value and
	                // an argument list containing the single item key.
	                keyPos = indexOf.call(extensionSubtags, key);
	
	            // ii. If keyPos ≠ -1, then
	            if (keyPos !== -1) {
	                // 1. If keyPos + 1 < extensionSubtagsLength and the length of the
	                //    result of calling the [[Get]] internal method of
	                //    extensionSubtags with argument ToString(keyPos +1) is greater
	                //    than 2, then
	                if (keyPos + 1 < extensionSubtagsLength
	                        && extensionSubtags[keyPos + 1].length > 2) {
	                    var
	                        // a. Let requestedValue be the result of calling the [[Get]]
	                        //    internal method of extensionSubtags with argument
	                        //    ToString(keyPos + 1).
	                        requestedValue = extensionSubtags[keyPos + 1],
	                        // b. Let valuePos be the result of calling the [[Call]]
	                        //    internal method of indexOf with keyLocaleData as the
	                        //    this value and an argument list containing the single
	                        //    item requestedValue.
	                        valuePos = indexOf.call(keyLocaleData, requestedValue);
	
	                    // c. If valuePos ≠ -1, then
	                    if (valuePos !== -1)
	                        var
	                            // i. Let value be requestedValue.
	                            value = requestedValue,
	                            // ii. Let supportedExtensionAddition be the
	                            //     concatenation of "-", key, "-", and value.
	                            supportedExtensionAddition = '-' + key + '-' + value;
	                }
	                // 2. Else
	                else {
	                    var
	                        // a. Let valuePos be the result of calling the [[Call]]
	                        // internal method of indexOf with keyLocaleData as the this
	                        // value and an argument list containing the single item
	                        // "true".
	                        valuePos = indexOf(keyLocaleData, 'true');
	
	                    // b. If valuePos ≠ -1, then
	                    if (valuePos !== -1)
	                        var
	                            // i. Let value be "true".
	                            value = 'true';
	                }
	            }
	        }
	        // h. If options has a field [[<key>]], then
	        if (hop.call(options, '[[' + key + ']]')) {
	            var
	                // i. Let optionsValue be the value of options.[[<key>]].
	                optionsValue = options['[[' + key + ']]'];
	
	            // ii. If the result of calling the [[Call]] internal method of indexOf
	            //     with keyLocaleData as the this value and an argument list
	            //     containing the single item optionsValue is not -1, then
	            if (indexOf.call(keyLocaleData, optionsValue) !== -1) {
	                // 1. If optionsValue is not equal to value, then
	                if (optionsValue !== value) {
	                    // a. Let value be optionsValue.
	                    value = optionsValue;
	                    // b. Let supportedExtensionAddition be "".
	                    supportedExtensionAddition = '';
	                }
	            }
	        }
	        // i. Set result.[[<key>]] to value.
	        result['[[' + key + ']]'] = value;
	
	        // j. Append supportedExtensionAddition to supportedExtension.
	        supportedExtension += supportedExtensionAddition;
	
	        // k. Increase i by 1.
	        i++;
	    }
	    // 12. If the length of supportedExtension is greater than 2, then
	    if (supportedExtension.length > 2) {
	        var
	            // a. Let preExtension be the substring of foundLocale from position 0,
	            //    inclusive, to position extensionIndex, exclusive.
	            preExtension = foundLocale.substring(0, extensionIndex),
	            // b. Let postExtension be the substring of foundLocale from position
	            //    extensionIndex to the end of the string.
	            postExtension = foundLocale.substring(extensionIndex),
	            // c. Let foundLocale be the concatenation of preExtension,
	            //    supportedExtension, and postExtension.
	            foundLocale = preExtension + supportedExtension + postExtension;
	    }
	    // 13. Set result.[[locale]] to foundLocale.
	    result['[[locale]]'] = foundLocale;
	
	    // 14. Return result.
	    return result;
	}
	
	/**
	 * The LookupSupportedLocales abstract operation returns the subset of the
	 * provided BCP 47 language priority list requestedLocales for which
	 * availableLocales has a matching locale when using the BCP 47 Lookup algorithm.
	 * Locales appear in the same order in the returned list as in requestedLocales.
	 * The following steps are taken:
	 */
	function /* 9.2.6 */LookupSupportedLocales (availableLocales, requestedLocales) {
	    var
	        // 1. Let len be the number of elements in requestedLocales.
	        len = requestedLocales.length,
	        // 2. Let subset be a new empty List.
	        subset = new List(),
	        // 3. Let k be 0.
	        k = 0;
	
	    // 4. Repeat while k < len
	    while (k < len) {
	        var
	            // a. Let locale be the element of requestedLocales at 0-origined list
	            //    position k.
	            locale = requestedLocales[k],
	            // b. Let noExtensionsLocale be the String value that is locale with all
	            //    Unicode locale extension sequences removed.
	            noExtensionsLocale = String(locale).replace(expUnicodeExSeq, ''),
	            // c. Let availableLocale be the result of calling the
	            //    BestAvailableLocale abstract operation (defined in 9.2.2) with
	            //    arguments availableLocales and noExtensionsLocale.
	            availableLocale = BestAvailableLocale(availableLocales, noExtensionsLocale);
	
	        // d. If availableLocale is not undefined, then append locale to the end of
	        //    subset.
	        if (availableLocale !== undefined)
	            arrPush.call(subset, locale);
	
	        // e. Increment k by 1.
	        k++;
	    }
	
	    var
	        // 5. Let subsetArray be a new Array object whose elements are the same
	        //    values in the same order as the elements of subset.
	        subsetArray = arrSlice.call(subset);
	
	    // 6. Return subsetArray.
	    return subsetArray;
	}
	
	/**
	 * The BestFitSupportedLocales abstract operation returns the subset of the
	 * provided BCP 47 language priority list requestedLocales for which
	 * availableLocales has a matching locale when using the Best Fit Matcher
	 * algorithm. Locales appear in the same order in the returned list as in
	 * requestedLocales. The steps taken are implementation dependent.
	 */
	function /*9.2.7 */BestFitSupportedLocales (availableLocales, requestedLocales) {
	    // ###TODO: implement this function as described by the specification###
	    return LookupSupportedLocales(availableLocales, requestedLocales);
	}
	
	/**
	 * The SupportedLocales abstract operation returns the subset of the provided BCP
	 * 47 language priority list requestedLocales for which availableLocales has a
	 * matching locale. Two algorithms are available to match the locales: the Lookup
	 * algorithm described in RFC 4647 section 3.4, and an implementation dependent
	 * best-fit algorithm. Locales appear in the same order in the returned list as
	 * in requestedLocales. The following steps are taken:
	 */
	function /*9.2.8 */SupportedLocales (availableLocales, requestedLocales, options) {
	    // 1. If options is not undefined, then
	    if (options !== undefined) {
	        var
	            // a. Let options be ToObject(options).
	            options = new Record(toObject(options)),
	            // b. Let matcher be the result of calling the [[Get]] internal method of
	            //    options with argument "localeMatcher".
	            matcher = options.localeMatcher;
	
	        // c. If matcher is not undefined, then
	        if (matcher !== undefined) {
	            // i. Let matcher be ToString(matcher).
	            matcher = String(matcher);
	
	            // ii. If matcher is not "lookup" or "best fit", then throw a RangeError
	            //     exception.
	            if (matcher !== 'lookup' && matcher !== 'best fit')
	                throw new RangeError('matcher should be "lookup" or "best fit"');
	        }
	    }
	    // 2. If matcher is undefined or "best fit", then
	    if (matcher === undefined || matcher === 'best fit')
	        var
	            // a. Let subset be the result of calling the BestFitSupportedLocales
	            //    abstract operation (defined in 9.2.7) with arguments
	            //    availableLocales and requestedLocales.
	            subset = BestFitSupportedLocales(availableLocales, requestedLocales);
	    // 3. Else
	    else
	        var
	            // a. Let subset be the result of calling the LookupSupportedLocales
	            //    abstract operation (defined in 9.2.6) with arguments
	            //    availableLocales and requestedLocales.
	            subset = LookupSupportedLocales(availableLocales, requestedLocales);
	
	    // 4. For each named own property name P of subset,
	    for (var P in subset) {
	        if (!hop.call(subset, P))
	            continue;
	
	        // a. Let desc be the result of calling the [[GetOwnProperty]] internal
	        //    method of subset with P.
	        // b. Set desc.[[Writable]] to false.
	        // c. Set desc.[[Configurable]] to false.
	        // d. Call the [[DefineOwnProperty]] internal method of subset with P, desc,
	        //    and true as arguments.
	        defineProperty(subset, P, {
	            writable: false, configurable: false, value: subset[P]
	        });
	    }
	    // "Freeze" the array so no new elements can be added
	    defineProperty(subset, 'length', { writable: false });
	
	    // 5. Return subset
	    return subset;
	}
	
	/**
	 * The GetOption abstract operation extracts the value of the property named
	 * property from the provided options object, converts it to the required type,
	 * checks whether it is one of a List of allowed values, and fills in a fallback
	 * value if necessary.
	 */
	function /*9.2.9 */GetOption (options, property, type, values, fallback) {
	    var
	        // 1. Let value be the result of calling the [[Get]] internal method of
	        //    options with argument property.
	        value = options[property];
	
	    // 2. If value is not undefined, then
	    if (value !== undefined) {
	        // a. Assert: type is "boolean" or "string".
	        // b. If type is "boolean", then let value be ToBoolean(value).
	        // c. If type is "string", then let value be ToString(value).
	        value = type === 'boolean' ? Boolean(value)
	                  : (type === 'string' ? String(value) : value);
	
	        // d. If values is not undefined, then
	        if (values !== undefined) {
	            // i. If values does not contain an element equal to value, then throw a
	            //    RangeError exception.
	            if (arrIndexOf.call(values, value) === -1)
	                throw new RangeError("'" + value + "' is not an allowed value for `" + property +'`');
	        }
	
	        // e. Return value.
	        return value;
	    }
	    // Else return fallback.
	    return fallback;
	}
	
	/**
	 * The GetNumberOption abstract operation extracts a property value from the
	 * provided options object, converts it to a Number value, checks whether it is
	 * in the allowed range, and fills in a fallback value if necessary.
	 */
	function /* 9.2.10 */GetNumberOption (options, property, minimum, maximum, fallback) {
	    var
	        // 1. Let value be the result of calling the [[Get]] internal method of
	        //    options with argument property.
	        value = options[property];
	
	    // 2. If value is not undefined, then
	    if (value !== undefined) {
	        // a. Let value be ToNumber(value).
	        value = Number(value);
	
	        // b. If value is NaN or less than minimum or greater than maximum, throw a
	        //    RangeError exception.
	        if (isNaN(value) || value < minimum || value > maximum)
	            throw new RangeError('Value is not a number or outside accepted range');
	
	        // c. Return floor(value).
	        return Math.floor(value);
	    }
	    // 3. Else return fallback.
	    return fallback;
	}
	
	// 11.1 The Intl.NumberFormat constructor
	// ======================================
	
	// Define the NumberFormat constructor internally so it cannot be tainted
	function NumberFormatConstructor () {
	    var locales = arguments[0];
	    var options = arguments[1];
	
	    if (!this || this === Intl) {
	        return new Intl.NumberFormat(locales, options);
	    }
	
	    return InitializeNumberFormat(toObject(this), locales, options);
	}
	
	defineProperty(Intl, 'NumberFormat', {
	    configurable: true,
	    writable: true,
	    value: NumberFormatConstructor
	});
	
	// Must explicitly set prototypes as unwritable
	defineProperty(Intl.NumberFormat, 'prototype', {
	    writable: false
	});
	
	/**
	 * The abstract operation InitializeNumberFormat accepts the arguments
	 * numberFormat (which must be an object), locales, and options. It initializes
	 * numberFormat as a NumberFormat object.
	 */
	function /*11.1.1.1 */InitializeNumberFormat (numberFormat, locales, options) {
	    var
	    // This will be a internal properties object if we're not already initialized
	        internal = getInternalProperties(numberFormat),
	
	    // Create an object whose props can be used to restore the values of RegExp props
	        regexpState = createRegExpRestore();
	
	    // 1. If numberFormat has an [[initializedIntlObject]] internal property with
	    // value true, throw a TypeError exception.
	    if (internal['[[initializedIntlObject]]'] === true)
	        throw new TypeError('`this` object has already been initialized as an Intl object');
	
	    // Need this to access the `internal` object
	    defineProperty(numberFormat, '__getInternalProperties', {
	        value: function () {
	            // NOTE: Non-standard, for internal use only
	            if (arguments[0] === secret)
	                return internal;
	        }
	    });
	
	    // 2. Set the [[initializedIntlObject]] internal property of numberFormat to true.
	    internal['[[initializedIntlObject]]'] = true;
	
	    var
	    // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
	    //    abstract operation (defined in 9.2.1) with argument locales.
	        requestedLocales = CanonicalizeLocaleList(locales);
	
	    // 4. If options is undefined, then
	    if (options === undefined)
	        // a. Let options be the result of creating a new object as if by the
	        // expression new Object() where Object is the standard built-in constructor
	        // with that name.
	        options = {};
	
	    // 5. Else
	    else
	        // a. Let options be ToObject(options).
	        options = toObject(options);
	
	    var
	    // 6. Let opt be a new Record.
	        opt = new Record(),
	
	    // 7. Let matcher be the result of calling the GetOption abstract operation
	    //    (defined in 9.2.9) with the arguments options, "localeMatcher", "string",
	    //    a List containing the two String values "lookup" and "best fit", and
	    //    "best fit".
	        matcher =  GetOption(options, 'localeMatcher', 'string', new List('lookup', 'best fit'), 'best fit');
	
	    // 8. Set opt.[[localeMatcher]] to matcher.
	    opt['[[localeMatcher]]'] = matcher;
	
	    var
	    // 9. Let NumberFormat be the standard built-in object that is the initial value
	    //    of Intl.NumberFormat.
	    // 10. Let localeData be the value of the [[localeData]] internal property of
	    //     NumberFormat.
	        localeData = internals.NumberFormat['[[localeData]]'],
	
	    // 11. Let r be the result of calling the ResolveLocale abstract operation
	    //     (defined in 9.2.5) with the [[availableLocales]] internal property of
	    //     NumberFormat, requestedLocales, opt, the [[relevantExtensionKeys]]
	    //     internal property of NumberFormat, and localeData.
	        r = ResolveLocale(
	                internals.NumberFormat['[[availableLocales]]'], requestedLocales,
	                opt, internals.NumberFormat['[[relevantExtensionKeys]]'], localeData
	            );
	
	    // 12. Set the [[locale]] internal property of numberFormat to the value of
	    //     r.[[locale]].
	    internal['[[locale]]'] = r['[[locale]]'];
	
	    // 13. Set the [[numberingSystem]] internal property of numberFormat to the value
	    //     of r.[[nu]].
	    internal['[[numberingSystem]]'] = r['[[nu]]'];
	
	    // The specification doesn't tell us to do this, but it's helpful later on
	    internal['[[dataLocale]]'] = r['[[dataLocale]]'];
	
	    var
	    // 14. Let dataLocale be the value of r.[[dataLocale]].
	        dataLocale = r['[[dataLocale]]'],
	
	    // 15. Let s be the result of calling the GetOption abstract operation with the
	    //     arguments options, "style", "string", a List containing the three String
	    //     values "decimal", "percent", and "currency", and "decimal".
	        s = GetOption(options, 'style', 'string', new List('decimal', 'percent', 'currency'), 'decimal');
	
	    // 16. Set the [[style]] internal property of numberFormat to s.
	    internal['[[style]]'] = s;
	
	    var
	    // 17. Let c be the result of calling the GetOption abstract operation with the
	    //     arguments options, "currency", "string", undefined, and undefined.
	        c = GetOption(options, 'currency', 'string');
	
	    // 18. If c is not undefined and the result of calling the
	    //     IsWellFormedCurrencyCode abstract operation (defined in 6.3.1) with
	    //     argument c is false, then throw a RangeError exception.
	    if (c !== undefined && !IsWellFormedCurrencyCode(c))
	        throw new RangeError("'" + c + "' is not a valid currency code");
	
	    // 19. If s is "currency" and c is undefined, throw a TypeError exception.
	    if (s === 'currency' && c === undefined)
	        throw new TypeError('Currency code is required when style is currency');
	
	    // 20. If s is "currency", then
	    if (s === 'currency') {
	        // a. Let c be the result of converting c to upper case as specified in 6.1.
	        c = c.toUpperCase();
	
	        // b. Set the [[currency]] internal property of numberFormat to c.
	        internal['[[currency]]'] = c;
	
	        var
	        // c. Let cDigits be the result of calling the CurrencyDigits abstract
	        //    operation (defined below) with argument c.
	            cDigits = CurrencyDigits(c);
	    }
	
	    var
	    // 21. Let cd be the result of calling the GetOption abstract operation with the
	    //     arguments options, "currencyDisplay", "string", a List containing the
	    //     three String values "code", "symbol", and "name", and "symbol".
	        cd = GetOption(options, 'currencyDisplay', 'string', new List('code', 'symbol', 'name'), 'symbol');
	
	    // 22. If s is "currency", then set the [[currencyDisplay]] internal property of
	    //     numberFormat to cd.
	    if (s === 'currency')
	        internal['[[currencyDisplay]]'] = cd;
	
	    var
	    // 23. Let mnid be the result of calling the GetNumberOption abstract operation
	    //     (defined in 9.2.10) with arguments options, "minimumIntegerDigits", 1, 21,
	    //     and 1.
	        mnid = GetNumberOption(options, 'minimumIntegerDigits', 1, 21, 1);
	
	    // 24. Set the [[minimumIntegerDigits]] internal property of numberFormat to mnid.
	    internal['[[minimumIntegerDigits]]'] = mnid;
	
	    var
	    // 25. If s is "currency", then let mnfdDefault be cDigits; else let mnfdDefault
	    //     be 0.
	        mnfdDefault = s === 'currency' ? cDigits : 0,
	
	    // 26. Let mnfd be the result of calling the GetNumberOption abstract operation
	    //     with arguments options, "minimumFractionDigits", 0, 20, and mnfdDefault.
	        mnfd = GetNumberOption(options, 'minimumFractionDigits', 0, 20, mnfdDefault);
	
	    // 27. Set the [[minimumFractionDigits]] internal property of numberFormat to mnfd.
	    internal['[[minimumFractionDigits]]'] = mnfd;
	
	    var
	    // 28. If s is "currency", then let mxfdDefault be max(mnfd, cDigits); else if s
	    //     is "percent", then let mxfdDefault be max(mnfd, 0); else let mxfdDefault
	    //     be max(mnfd, 3).
	        mxfdDefault = s === 'currency' ? Math.max(mnfd, cDigits)
	                    : (s === 'percent' ? Math.max(mnfd, 0) : Math.max(mnfd, 3)),
	
	    // 29. Let mxfd be the result of calling the GetNumberOption abstract operation
	    //     with arguments options, "maximumFractionDigits", mnfd, 20, and mxfdDefault.
	        mxfd = GetNumberOption(options, 'maximumFractionDigits', mnfd, 20, mxfdDefault);
	
	    // 30. Set the [[maximumFractionDigits]] internal property of numberFormat to mxfd.
	    internal['[[maximumFractionDigits]]'] = mxfd;
	
	    var
	    // 31. Let mnsd be the result of calling the [[Get]] internal method of options
	    //     with argument "minimumSignificantDigits".
	        mnsd = options.minimumSignificantDigits,
	
	    // 32. Let mxsd be the result of calling the [[Get]] internal method of options
	    //     with argument "maximumSignificantDigits".
	        mxsd = options.maximumSignificantDigits;
	
	    // 33. If mnsd is not undefined or mxsd is not undefined, then:
	    if (mnsd !== undefined || mxsd !== undefined) {
	        // a. Let mnsd be the result of calling the GetNumberOption abstract
	        //    operation with arguments options, "minimumSignificantDigits", 1, 21,
	        //    and 1.
	        mnsd = GetNumberOption(options, 'minimumSignificantDigits', 1, 21, 1);
	
	        // b. Let mxsd be the result of calling the GetNumberOption abstract
	        //     operation with arguments options, "maximumSignificantDigits", mnsd,
	        //     21, and 21.
	        mxsd = GetNumberOption(options, 'maximumSignificantDigits', mnsd, 21, 21);
	
	        // c. Set the [[minimumSignificantDigits]] internal property of numberFormat
	        //    to mnsd, and the [[maximumSignificantDigits]] internal property of
	        //    numberFormat to mxsd.
	        internal['[[minimumSignificantDigits]]'] = mnsd;
	        internal['[[maximumSignificantDigits]]'] = mxsd;
	    }
	    var
	    // 34. Let g be the result of calling the GetOption abstract operation with the
	    //     arguments options, "useGrouping", "boolean", undefined, and true.
	        g = GetOption(options, 'useGrouping', 'boolean', undefined, true);
	
	    // 35. Set the [[useGrouping]] internal property of numberFormat to g.
	    internal['[[useGrouping]]'] = g;
	
	    var
	    // 36. Let dataLocaleData be the result of calling the [[Get]] internal method of
	    //     localeData with argument dataLocale.
	        dataLocaleData = localeData[dataLocale],
	
	    // 37. Let patterns be the result of calling the [[Get]] internal method of
	    //     dataLocaleData with argument "patterns".
	        patterns = dataLocaleData.patterns;
	
	    // 38. Assert: patterns is an object (see 11.2.3)
	
	    var
	    // 39. Let stylePatterns be the result of calling the [[Get]] internal method of
	    //     patterns with argument s.
	        stylePatterns = patterns[s];
	
	    // 40. Set the [[positivePattern]] internal property of numberFormat to the
	    //     result of calling the [[Get]] internal method of stylePatterns with the
	    //     argument "positivePattern".
	    internal['[[positivePattern]]'] = stylePatterns.positivePattern;
	
	    // 41. Set the [[negativePattern]] internal property of numberFormat to the
	    //     result of calling the [[Get]] internal method of stylePatterns with the
	    //     argument "negativePattern".
	    internal['[[negativePattern]]'] = stylePatterns.negativePattern;
	
	    // 42. Set the [[boundFormat]] internal property of numberFormat to undefined.
	    internal['[[boundFormat]]'] = undefined;
	
	    // 43. Set the [[initializedNumberFormat]] internal property of numberFormat to
	    //     true.
	    internal['[[initializedNumberFormat]]'] = true;
	
	    // In ES3, we need to pre-bind the format() function
	    if (es3)
	        numberFormat.format = GetFormatNumber.call(numberFormat);
	
	    // Restore the RegExp properties
	    regexpState.exp.test(regexpState.input);
	
	    // Return the newly initialised object
	    return numberFormat;
	}
	
	function CurrencyDigits(currency) {
	    // When the CurrencyDigits abstract operation is called with an argument currency
	    // (which must be an upper case String value), the following steps are taken:
	
	    // 1. If the ISO 4217 currency and funds code list contains currency as an
	    // alphabetic code, then return the minor unit value corresponding to the
	    // currency from the list; else return 2.
	    return currencyMinorUnits[currency] !== undefined
	                ? currencyMinorUnits[currency]
	                : 2;
	}
	
	/* 11.2.3 */internals.NumberFormat = {
	    '[[availableLocales]]': [],
	    '[[relevantExtensionKeys]]': ['nu'],
	    '[[localeData]]': {}
	};
	
	/**
	 * When the supportedLocalesOf method of Intl.NumberFormat is called, the
	 * following steps are taken:
	 */
	/* 11.2.2 */defineProperty(Intl.NumberFormat, 'supportedLocalesOf', {
	    configurable: true,
	    writable: true,
	    value: fnBind.call(supportedLocalesOf, internals.NumberFormat)
	});
	
	/**
	 * This named accessor property returns a function that formats a number
	 * according to the effective locale and the formatting options of this
	 * NumberFormat object.
	 */
	/* 11.3.2 */defineProperty(Intl.NumberFormat.prototype, 'format', {
	    configurable: true,
	    get: GetFormatNumber
	});
	
	function GetFormatNumber() {
	        var internal = this != null && typeof this === 'object' && getInternalProperties(this);
	
	        // Satisfy test 11.3_b
	        if (!internal || !internal['[[initializedNumberFormat]]'])
	            throw new TypeError('`this` value for format() is not an initialized Intl.NumberFormat object.');
	
	        // The value of the [[Get]] attribute is a function that takes the following
	        // steps:
	
	        // 1. If the [[boundFormat]] internal property of this NumberFormat object
	        //    is undefined, then:
	        if (internal['[[boundFormat]]'] === undefined) {
	            var
	            // a. Let F be a Function object, with internal properties set as
	            //    specified for built-in functions in ES5, 15, or successor, and the
	            //    length property set to 1, that takes the argument value and
	            //    performs the following steps:
	                F = function (value) {
	                    // i. If value is not provided, then let value be undefined.
	                    // ii. Let x be ToNumber(value).
	                    // iii. Return the result of calling the FormatNumber abstract
	                    //      operation (defined below) with arguments this and x.
	                    return FormatNumber(this, /* x = */Number(value));
	                },
	
	            // b. Let bind be the standard built-in function object defined in ES5,
	            //    15.3.4.5.
	            // c. Let bf be the result of calling the [[Call]] internal method of
	            //    bind with F as the this value and an argument list containing
	            //    the single item this.
	                bf = fnBind.call(F, this);
	
	            // d. Set the [[boundFormat]] internal property of this NumberFormat
	            //    object to bf.
	            internal['[[boundFormat]]'] = bf;
	        }
	        // Return the value of the [[boundFormat]] internal property of this
	        // NumberFormat object.
	        return internal['[[boundFormat]]'];
	    }
	
	/**
	 * When the FormatNumber abstract operation is called with arguments numberFormat
	 * (which must be an object initialized as a NumberFormat) and x (which must be a
	 * Number value), it returns a String value representing x according to the
	 * effective locale and the formatting options of numberFormat.
	 */
	function FormatNumber (numberFormat, x) {
	    var n,
	
	    // Create an object whose props can be used to restore the values of RegExp props
	        regexpState = createRegExpRestore(),
	
	        internal = getInternalProperties(numberFormat),
	        locale = internal['[[dataLocale]]'],
	        nums   = internal['[[numberingSystem]]'],
	        data   = internals.NumberFormat['[[localeData]]'][locale],
	        ild    = data.symbols[nums] || data.symbols.latn,
	
	    // 1. Let negative be false.
	        negative = false;
	
	    // 2. If the result of isFinite(x) is false, then
	    if (isFinite(x) === false) {
	        // a. If x is NaN, then let n be an ILD String value indicating the NaN value.
	        if (isNaN(x))
	            n = ild.nan;
	
	        // b. Else
	        else {
	            // a. Let n be an ILD String value indicating infinity.
	            n = ild.infinity;
	            // b. If x < 0, then let negative be true.
	            if (x < 0)
	                negative = true;
	        }
	    }
	    // 3. Else
	    else {
	        // a. If x < 0, then
	        if (x < 0) {
	            // i. Let negative be true.
	            negative = true;
	            // ii. Let x be -x.
	            x = -x;
	        }
	
	        // b. If the value of the [[style]] internal property of numberFormat is
	        //    "percent", let x be 100 × x.
	        if (internal['[[style]]'] === 'percent')
	            x *= 100;
	
	        // c. If the [[minimumSignificantDigits]] and [[maximumSignificantDigits]]
	        //    internal properties of numberFormat are present, then
	        if (hop.call(internal, '[[minimumSignificantDigits]]') &&
	                hop.call(internal, '[[maximumSignificantDigits]]'))
	            // i. Let n be the result of calling the ToRawPrecision abstract operation
	            //    (defined below), passing as arguments x and the values of the
	            //    [[minimumSignificantDigits]] and [[maximumSignificantDigits]]
	            //    internal properties of numberFormat.
	            n = ToRawPrecision(x,
	                  internal['[[minimumSignificantDigits]]'],
	                  internal['[[maximumSignificantDigits]]']);
	        // d. Else
	        else
	            // i. Let n be the result of calling the ToRawFixed abstract operation
	            //    (defined below), passing as arguments x and the values of the
	            //    [[minimumIntegerDigits]], [[minimumFractionDigits]], and
	            //    [[maximumFractionDigits]] internal properties of numberFormat.
	            n = ToRawFixed(x,
	                  internal['[[minimumIntegerDigits]]'],
	                  internal['[[minimumFractionDigits]]'],
	                  internal['[[maximumFractionDigits]]']);
	
	        // e. If the value of the [[numberingSystem]] internal property of
	        //    numberFormat matches one of the values in the “Numbering System” column
	        //    of Table 2 below, then
	        if (numSys[nums]) {
	            // i. Let digits be an array whose 10 String valued elements are the
	            //    UTF-16 string representations of the 10 digits specified in the
	            //    “Digits” column of Table 2 in the row containing the value of the
	            //    [[numberingSystem]] internal property.
	            var digits = numSys[internal['[[numberingSystem]]']];
	            // ii. Replace each digit in n with the value of digits[digit].
	            n = String(n).replace(/\d/g, function (digit) {
	                return digits[digit];
	            });
	        }
	        // f. Else use an implementation dependent algorithm to map n to the
	        //    appropriate representation of n in the given numbering system.
	        else
	            n = String(n); // ###TODO###
	
	        // g. If n contains the character ".", then replace it with an ILND String
	        //    representing the decimal separator.
	        n = n.replace(/\./g, ild.decimal);
	
	        // h. If the value of the [[useGrouping]] internal property of numberFormat
	        //    is true, then insert an ILND String representing a grouping separator
	        //    into an ILND set of locations within the integer part of n.
	        if (internal['[[useGrouping]]'] === true) {
	            var
	                parts  = n.split(ild.decimal),
	                igr    = parts[0],
	
	                // Primary group represents the group closest to the decimal
	                pgSize = data.patterns.primaryGroupSize || 3,
	
	                // Secondary group is every other group
	                sgSize = data.patterns.secondaryGroupSize || pgSize;
	
	            // Group only if necessary
	            if (igr.length > pgSize) {
	                var
	                    groups = new List(),
	
	                    // Index of the primary grouping separator
	                    end    = igr.length - pgSize,
	
	                    // Starting index for our loop
	                    idx    = end % sgSize,
	
	                    start  = igr.slice(0, idx);
	
	                if (start.length)
	                    arrPush.call(groups, start);
	
	                // Loop to separate into secondary grouping digits
	                while (idx < end) {
	                    arrPush.call(groups, igr.slice(idx, idx + sgSize));
	                    idx += sgSize;
	                }
	
	                // Add the primary grouping digits
	                arrPush.call(groups, igr.slice(end));
	
	                parts[0] = arrJoin.call(groups, ild.group);
	            }
	
	            n = arrJoin.call(parts, ild.decimal);
	        }
	    }
	
	    var
	    // 4. If negative is true, then let result be the value of the [[negativePattern]]
	    //    internal property of numberFormat; else let result be the value of the
	    //    [[positivePattern]] internal property of numberFormat.
	        result = internal[negative === true ? '[[negativePattern]]' : '[[positivePattern]]'];
	
	    // 5. Replace the substring "{number}" within result with n.
	    result = result.replace('{number}', n);
	
	    // 6. If the value of the [[style]] internal property of numberFormat is
	    //    "currency", then:
	    if (internal['[[style]]'] === 'currency') {
	        var cd,
	        // a. Let currency be the value of the [[currency]] internal property of
	        //    numberFormat.
	            currency = internal['[[currency]]'],
	
	        // Shorthand for the currency data
	            cData = data.currencies[currency];
	
	        // b. If the value of the [[currencyDisplay]] internal property of
	        //    numberFormat is "code", then let cd be currency.
	        // c. Else if the value of the [[currencyDisplay]] internal property of
	        //    numberFormat is "symbol", then let cd be an ILD string representing
	        //    currency in short form. If the implementation does not have such a
	        //    representation of currency, then use currency itself.
	        // d. Else if the value of the [[currencyDisplay]] internal property of
	        //    numberFormat is "name", then let cd be an ILD string representing
	        //    currency in long form. If the implementation does not have such a
	        //    representation of currency, then use currency itself.
	        switch (internal['[[currencyDisplay]]']) {
	            case 'symbol':
	                cd = cData || currency;
	                break;
	
	            default:
	            case 'code':
	            case 'name':
	                cd = currency;
	        }
	
	        // e. Replace the substring "{currency}" within result with cd.
	        result = result.replace('{currency}', cd);
	    }
	
	    // Restore the RegExp properties
	    regexpState.exp.test(regexpState.input);
	
	    // 7. Return result.
	    return result;
	}
	
	/**
	 * When the ToRawPrecision abstract operation is called with arguments x (which
	 * must be a finite non-negative number), minPrecision, and maxPrecision (both
	 * must be integers between 1 and 21) the following steps are taken:
	 */
	function ToRawPrecision (x, minPrecision, maxPrecision) {
	    var
	    // 1. Let p be maxPrecision.
	        p = maxPrecision;
	
	    // 2. If x = 0, then
	    if (x === 0) {
	        var
	        // a. Let m be the String consisting of p occurrences of the character "0".
	            m = arrJoin.call(Array (p + 1), '0'),
	        // b. Let e be 0.
	            e = 0;
	    }
	    // 3. Else
	    else {
	        // a. Let e and n be integers such that 10ᵖ⁻¹ ≤ n < 10ᵖ and for which the
	        //    exact mathematical value of n × 10ᵉ⁻ᵖ⁺¹ – x is as close to zero as
	        //    possible. If there are two such sets of e and n, pick the e and n for
	        //    which n × 10ᵉ⁻ᵖ⁺¹ is larger.
	        var
	            e = log10Floor(Math.abs(x)),
	
	            // Easier to get to m from here
	            f = Math.round(Math.exp((Math.abs(e - p + 1)) * Math.LN10)),
	
	        // b. Let m be the String consisting of the digits of the decimal
	        //    representation of n (in order, with no leading zeroes)
	            m = String(Math.round(e - p + 1 < 0 ? x * f : x / f));
	    }
	
	    // 4. If e ≥ p, then
	    if (e >= p)
	        // a. Return the concatenation of m and e-p+1 occurrences of the character "0".
	        return m + arrJoin.call(Array(e-p+1 + 1), '0');
	
	    // 5. If e = p-1, then
	    else if (e === p - 1)
	        // a. Return m.
	        return m;
	
	    // 6. If e ≥ 0, then
	    else if (e >= 0)
	        // a. Let m be the concatenation of the first e+1 characters of m, the character
	        //    ".", and the remaining p–(e+1) characters of m.
	        m = m.slice(0, e + 1) + '.' + m.slice(e + 1);
	
	    // 7. If e < 0, then
	    else if (e < 0)
	        // a. Let m be the concatenation of the String "0.", –(e+1) occurrences of the
	        //    character "0", and the string m.
	        m = '0.' + arrJoin.call(Array (-(e+1) + 1), '0') + m;
	
	    // 8. If m contains the character ".", and maxPrecision > minPrecision, then
	    if (m.indexOf(".") >= 0 && maxPrecision > minPrecision) {
	        var
	        // a. Let cut be maxPrecision – minPrecision.
	            cut = maxPrecision - minPrecision;
	
	        // b. Repeat while cut > 0 and the last character of m is "0":
	        while (cut > 0 && m.charAt(m.length-1) === '0') {
	            //  i. Remove the last character from m.
	            m = m.slice(0, -1);
	
	            //  ii. Decrease cut by 1.
	            cut--;
	        }
	
	        // c. If the last character of m is ".", then
	        if (m.charAt(m.length-1) === '.')
	            //    i. Remove the last character from m.
	            m = m.slice(0, -1);
	    }
	    // 9. Return m.
	    return m;
	}
	
	/**
	 * When the ToRawFixed abstract operation is called with arguments x (which must
	 * be a finite non-negative number), minInteger (which must be an integer between
	 * 1 and 21), minFraction, and maxFraction (which must be integers between 0 and
	 * 20) the following steps are taken:
	 */
	function ToRawFixed (x, minInteger, minFraction, maxFraction) {
	    // (or not because Number.toPrototype.toFixed does a lot of it for us)
	    var idx,
	
	        // We can pick up after the fixed formatted string (m) is created
	        m   = Number.prototype.toFixed.call(x, maxFraction),
	
	        // 4. If [maxFraction] ≠ 0, then
	        //    ...
	        //    e. Let int be the number of characters in a.
	        //
	        // 5. Else let int be the number of characters in m.
	        igr = m.split(".")[0].length,  // int is a reserved word
	
	        // 6. Let cut be maxFraction – minFraction.
	        cut = maxFraction - minFraction,
	
	        exp = (idx = m.indexOf('e')) > -1 ? m.slice(idx + 1) : 0;
	
	    if (exp) {
	        m = m.slice(0, idx).replace('.', '');
	        m += arrJoin.call(Array(exp - (m.length - 1) + 1), '0')
	          + '.' + arrJoin.call(Array(maxFraction + 1), '0');
	
	        igr = m.length;
	    }
	
	    // 7. Repeat while cut > 0 and the last character of m is "0":
	    while (cut > 0 && m.slice(-1) === "0") {
	        // a. Remove the last character from m.
	        m = m.slice(0, -1);
	
	        // b. Decrease cut by 1.
	        cut--;
	    }
	
	    // 8. If the last character of m is ".", then
	    if (m.slice(-1) === ".")
	        // a. Remove the last character from m.
	        m = m.slice(0, -1);
	
	    // 9. If int < minInteger, then
	    if (igr < minInteger)
	        // a. Let z be the String consisting of minInteger–int occurrences of the
	        //    character "0".
	        var z = arrJoin.call(Array(minInteger - igr + 1), '0');
	
	    // 10. Let m be the concatenation of Strings z and m.
	    // 11. Return m.
	    return (z ? z : '') + m;
	}
	
	// Sect 11.3.2 Table 2, Numbering systems
	// ======================================
	var numSys = {
	    arab:    [ '\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669' ],
	    arabext: [ '\u06F0', '\u06F1', '\u06F2', '\u06F3', '\u06F4', '\u06F5', '\u06F6', '\u06F7', '\u06F8', '\u06F9' ],
	    bali:    [ '\u1B50', '\u1B51', '\u1B52', '\u1B53', '\u1B54', '\u1B55', '\u1B56', '\u1B57', '\u1B58', '\u1B59' ],
	    beng:    [ '\u09E6', '\u09E7', '\u09E8', '\u09E9', '\u09EA', '\u09EB', '\u09EC', '\u09ED', '\u09EE', '\u09EF' ],
	    deva:    [ '\u0966', '\u0967', '\u0968', '\u0969', '\u096A', '\u096B', '\u096C', '\u096D', '\u096E', '\u096F' ],
	    fullwide:[ '\uFF10', '\uFF11', '\uFF12', '\uFF13', '\uFF14', '\uFF15', '\uFF16', '\uFF17', '\uFF18', '\uFF19' ],
	    gujr:    [ '\u0AE6', '\u0AE7', '\u0AE8', '\u0AE9', '\u0AEA', '\u0AEB', '\u0AEC', '\u0AED', '\u0AEE', '\u0AEF' ],
	    guru:    [ '\u0A66', '\u0A67', '\u0A68', '\u0A69', '\u0A6A', '\u0A6B', '\u0A6C', '\u0A6D', '\u0A6E', '\u0A6F' ],
	    hanidec: [ '\u3007', '\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D', '\u4E03', '\u516B', '\u4E5D' ],
	    khmr:    [ '\u17E0', '\u17E1', '\u17E2', '\u17E3', '\u17E4', '\u17E5', '\u17E6', '\u17E7', '\u17E8', '\u17E9' ],
	    knda:    [ '\u0CE6', '\u0CE7', '\u0CE8', '\u0CE9', '\u0CEA', '\u0CEB', '\u0CEC', '\u0CED', '\u0CEE', '\u0CEF' ],
	    laoo:    [ '\u0ED0', '\u0ED1', '\u0ED2', '\u0ED3', '\u0ED4', '\u0ED5', '\u0ED6', '\u0ED7', '\u0ED8', '\u0ED9' ],
	    latn:    [ '\u0030', '\u0031', '\u0032', '\u0033', '\u0034', '\u0035', '\u0036', '\u0037', '\u0038', '\u0039' ],
	    limb:    [ '\u1946', '\u1947', '\u1948', '\u1949', '\u194A', '\u194B', '\u194C', '\u194D', '\u194E', '\u194F' ],
	    mlym:    [ '\u0D66', '\u0D67', '\u0D68', '\u0D69', '\u0D6A', '\u0D6B', '\u0D6C', '\u0D6D', '\u0D6E', '\u0D6F' ],
	    mong:    [ '\u1810', '\u1811', '\u1812', '\u1813', '\u1814', '\u1815', '\u1816', '\u1817', '\u1818', '\u1819' ],
	    mymr:    [ '\u1040', '\u1041', '\u1042', '\u1043', '\u1044', '\u1045', '\u1046', '\u1047', '\u1048', '\u1049' ],
	    orya:    [ '\u0B66', '\u0B67', '\u0B68', '\u0B69', '\u0B6A', '\u0B6B', '\u0B6C', '\u0B6D', '\u0B6E', '\u0B6F' ],
	    tamldec: [ '\u0BE6', '\u0BE7', '\u0BE8', '\u0BE9', '\u0BEA', '\u0BEB', '\u0BEC', '\u0BED', '\u0BEE', '\u0BEF' ],
	    telu:    [ '\u0C66', '\u0C67', '\u0C68', '\u0C69', '\u0C6A', '\u0C6B', '\u0C6C', '\u0C6D', '\u0C6E', '\u0C6F' ],
	    thai:    [ '\u0E50', '\u0E51', '\u0E52', '\u0E53', '\u0E54', '\u0E55', '\u0E56', '\u0E57', '\u0E58', '\u0E59' ],
	    tibt:    [ '\u0F20', '\u0F21', '\u0F22', '\u0F23', '\u0F24', '\u0F25', '\u0F26', '\u0F27', '\u0F28', '\u0F29' ]
	};
	
	/**
	 * This function provides access to the locale and formatting options computed
	 * during initialization of the object.
	 *
	 * The function returns a new object whose properties and attributes are set as
	 * if constructed by an object literal assigning to each of the following
	 * properties the value of the corresponding internal property of this
	 * NumberFormat object (see 11.4): locale, numberingSystem, style, currency,
	 * currencyDisplay, minimumIntegerDigits, minimumFractionDigits,
	 * maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits, and
	 * useGrouping. Properties whose corresponding internal properties are not present
	 * are not assigned.
	 */
	/* 11.3.3 */defineProperty(Intl.NumberFormat.prototype, 'resolvedOptions', {
	    configurable: true,
	    writable: true,
	    value: function () {
	        var prop,
	            descs = new Record(),
	            props = [
	                'locale', 'numberingSystem', 'style', 'currency', 'currencyDisplay',
	                'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits',
	                'minimumSignificantDigits', 'maximumSignificantDigits', 'useGrouping'
	            ],
	            internal = this != null && typeof this === 'object' && getInternalProperties(this);
	
	        // Satisfy test 11.3_b
	        if (!internal || !internal['[[initializedNumberFormat]]'])
	            throw new TypeError('`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.');
	
	        for (var i = 0, max = props.length; i < max; i++) {
	            if (hop.call(internal, prop = '[['+ props[i] +']]'))
	                descs[props[i]] = { value: internal[prop], writable: true, configurable: true, enumerable: true };
	        }
	
	        return objCreate({}, descs);
	    }
	});
	
	// 12.1 The Intl.DateTimeFormat constructor
	// ==================================
	
	// Define the DateTimeFormat constructor internally so it cannot be tainted
	function DateTimeFormatConstructor () {
	    var locales = arguments[0];
	    var options = arguments[1];
	
	    if (!this || this === Intl) {
	        return new Intl.DateTimeFormat(locales, options);
	    }
	    return InitializeDateTimeFormat(toObject(this), locales, options);
	}
	
	defineProperty(Intl, 'DateTimeFormat', {
	    configurable: true,
	    writable: true,
	    value: DateTimeFormatConstructor
	});
	
	// Must explicitly set prototypes as unwritable
	defineProperty(DateTimeFormatConstructor, 'prototype', {
	    writable: false
	});
	
	/**
	 * The abstract operation InitializeDateTimeFormat accepts the arguments dateTimeFormat
	 * (which must be an object), locales, and options. It initializes dateTimeFormat as a
	 * DateTimeFormat object.
	 */
	function/* 12.1.1.1 */InitializeDateTimeFormat (dateTimeFormat, locales, options) {
	    var
	    // This will be a internal properties object if we're not already initialized
	        internal = getInternalProperties(dateTimeFormat),
	
	    // Create an object whose props can be used to restore the values of RegExp props
	        regexpState = createRegExpRestore();
	
	    // 1. If dateTimeFormat has an [[initializedIntlObject]] internal property with
	    //    value true, throw a TypeError exception.
	    if (internal['[[initializedIntlObject]]'] === true)
	        throw new TypeError('`this` object has already been initialized as an Intl object');
	
	    // Need this to access the `internal` object
	    defineProperty(dateTimeFormat, '__getInternalProperties', {
	        value: function () {
	            // NOTE: Non-standard, for internal use only
	            if (arguments[0] === secret)
	                return internal;
	        }
	    });
	
	    // 2. Set the [[initializedIntlObject]] internal property of numberFormat to true.
	    internal['[[initializedIntlObject]]'] = true;
	
	    var
	    // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
	    //    abstract operation (defined in 9.2.1) with argument locales.
	        requestedLocales = CanonicalizeLocaleList(locales),
	
	    // 4. Let options be the result of calling the ToDateTimeOptions abstract
	    //    operation (defined below) with arguments options, "any", and "date".
	        options = ToDateTimeOptions(options, 'any', 'date'),
	
	    // 5. Let opt be a new Record.
	        opt = new Record();
	
	    // 6. Let matcher be the result of calling the GetOption abstract operation
	    //    (defined in 9.2.9) with arguments options, "localeMatcher", "string", a List
	    //    containing the two String values "lookup" and "best fit", and "best fit".
	        matcher = GetOption(options, 'localeMatcher', 'string', new List('lookup', 'best fit'), 'best fit');
	
	    // 7. Set opt.[[localeMatcher]] to matcher.
	    opt['[[localeMatcher]]'] = matcher;
	
	    var
	    // 8. Let DateTimeFormat be the standard built-in object that is the initial
	    //    value of Intl.DateTimeFormat.
	        DateTimeFormat = internals.DateTimeFormat, // This is what we *really* need
	
	    // 9. Let localeData be the value of the [[localeData]] internal property of
	    //    DateTimeFormat.
	        localeData = DateTimeFormat['[[localeData]]'],
	
	    // 10. Let r be the result of calling the ResolveLocale abstract operation
	    //     (defined in 9.2.5) with the [[availableLocales]] internal property of
	    //      DateTimeFormat, requestedLocales, opt, the [[relevantExtensionKeys]]
	    //      internal property of DateTimeFormat, and localeData.
	        r = ResolveLocale(DateTimeFormat['[[availableLocales]]'], requestedLocales,
	                opt, DateTimeFormat['[[relevantExtensionKeys]]'], localeData);
	
	    // 11. Set the [[locale]] internal property of dateTimeFormat to the value of
	    //     r.[[locale]].
	    internal['[[locale]]'] = r['[[locale]]'];
	
	    // 12. Set the [[calendar]] internal property of dateTimeFormat to the value of
	    //     r.[[ca]].
	    internal['[[calendar]]'] = r['[[ca]]'];
	
	    // 13. Set the [[numberingSystem]] internal property of dateTimeFormat to the value of
	    //     r.[[nu]].
	    internal['[[numberingSystem]]'] = r['[[nu]]'];
	
	    // The specification doesn't tell us to do this, but it's helpful later on
	    internal['[[dataLocale]]'] = r['[[dataLocale]]'];
	
	    var
	    // 14. Let dataLocale be the value of r.[[dataLocale]].
	        dataLocale = r['[[dataLocale]]'],
	
	    // 15. Let tz be the result of calling the [[Get]] internal method of options with
	    //     argument "timeZone".
	        tz = options.timeZone;
	
	    // 16. If tz is not undefined, then
	    if (tz !== undefined) {
	        // a. Let tz be ToString(tz).
	        // b. Convert tz to upper case as described in 6.1.
	        //    NOTE: If an implementation accepts additional time zone values, as permitted
	        //          under certain conditions by the Conformance clause, different casing
	        //          rules apply.
	        tz = toLatinUpperCase(tz);
	
	        // c. If tz is not "UTC", then throw a RangeError exception.
	        // ###TODO: accept more time zones###
	        if (tz !== 'UTC')
	            throw new RangeError('timeZone is not supported.');
	    }
	
	    // 17. Set the [[timeZone]] internal property of dateTimeFormat to tz.
	    internal['[[timeZone]]'] = tz;
	
	    // 18. Let opt be a new Record.
	    opt = new Record();
	
	    // 19. For each row of Table 3, except the header row, do:
	    for (var prop in dateTimeComponents) {
	        if (!hop.call(dateTimeComponents, prop))
	            continue;
	
	        var
	        // 20. Let prop be the name given in the Property column of the row.
	        // 21. Let value be the result of calling the GetOption abstract operation,
	        //     passing as argument options, the name given in the Property column of the
	        //     row, "string", a List containing the strings given in the Values column of
	        //     the row, and undefined.
	            value = GetOption(options, prop, 'string', dateTimeComponents[prop]);
	
	        // 22. Set opt.[[<prop>]] to value.
	        opt['[['+prop+']]'] = value;
	    }
	
	    var
	        // Assigned a value below
	        bestFormat,
	
	        // 23. Let dataLocaleData be the result of calling the [[Get]] internal method of
	        //     localeData with argument dataLocale.
	        dataLocaleData = localeData[dataLocale],
	
	        // 24. Let formats be the result of calling the [[Get]] internal method of
	        //     dataLocaleData with argument "formats".
	        //     Note: we process the CLDR formats into the spec'd structure
	        formats = ToDateTimeFormats(dataLocaleData.formats),
	
	        // 25. Let matcher be the result of calling the GetOption abstract operation with
	        //     arguments options, "formatMatcher", "string", a List containing the two String
	        //     values "basic" and "best fit", and "best fit".
	        matcher = GetOption(options, 'formatMatcher', 'string', new List('basic', 'best fit'), 'best fit');
	
	    // Optimization: caching the processed formats as a one time operation by
	    // replacing the initial structure from localeData
	    dataLocaleData.formats = formats;
	
	    // 26. If matcher is "basic", then
	    if (matcher === 'basic')
	        // 27. Let bestFormat be the result of calling the BasicFormatMatcher abstract
	        //     operation (defined below) with opt and formats.
	        bestFormat = BasicFormatMatcher(opt, formats);
	
	    // 28. Else
	    else
	        // 29. Let bestFormat be the result of calling the BestFitFormatMatcher
	        //     abstract operation (defined below) with opt and formats.
	        bestFormat = BestFitFormatMatcher(opt, formats);
	
	    // 30. For each row in Table 3, except the header row, do
	    for (var prop in dateTimeComponents) {
	        if (!hop.call(dateTimeComponents, prop))
	            continue;
	
	        // a. Let prop be the name given in the Property column of the row.
	        // b. Let pDesc be the result of calling the [[GetOwnProperty]] internal method of
	        //    bestFormat with argument prop.
	        // c. If pDesc is not undefined, then
	        if (hop.call(bestFormat, prop)) {
	            var
	            // i. Let p be the result of calling the [[Get]] internal method of bestFormat
	            //    with argument prop.
	                p = bestFormat[prop];
	
	            // ii. Set the [[<prop>]] internal property of dateTimeFormat to p.
	            // Diverging from spec becuase of bug #58
	            // https://github.com/tc39/ecma402/issues/58
	            internal['[['+prop+']]'] = opt['[['+prop+']]'] || p;
	        }
	    }
	
	    var
	        // Assigned a value below
	        pattern,
	
	    // 31. Let hr12 be the result of calling the GetOption abstract operation with
	    //     arguments options, "hour12", "boolean", undefined, and undefined.
	        hr12 = GetOption(options, 'hour12', 'boolean'/*, undefined, undefined*/);
	
	    // 32. If dateTimeFormat has an internal property [[hour]], then
	    if (internal['[[hour]]']) {
	        // a. If hr12 is undefined, then let hr12 be the result of calling the [[Get]]
	        //    internal method of dataLocaleData with argument "hour12".
	        hr12 = hr12 === undefined ? dataLocaleData.hour12 : hr12;
	
	        // b. Set the [[hour12]] internal property of dateTimeFormat to hr12.
	        internal['[[hour12]]'] = hr12;
	
	        // c. If hr12 is true, then
	        if (hr12 === true) {
	            var
	            // i. Let hourNo0 be the result of calling the [[Get]] internal method of
	            //    dataLocaleData with argument "hourNo0".
	                hourNo0 = dataLocaleData.hourNo0;
	
	            // ii. Set the [[hourNo0]] internal property of dateTimeFormat to hourNo0.
	            internal['[[hourNo0]]'] = hourNo0;
	
	            // iii. Let pattern be the result of calling the [[Get]] internal method of
	            //      bestFormat with argument "pattern12".
	            pattern = bestFormat.pattern12;
	        }
	
	        // d. Else
	        else
	            // i. Let pattern be the result of calling the [[Get]] internal method of
	            //    bestFormat with argument "pattern".
	            pattern = bestFormat.pattern;
	    }
	
	    // 33. Else
	    else
	        // a. Let pattern be the result of calling the [[Get]] internal method of
	        //    bestFormat with argument "pattern".
	        pattern = bestFormat.pattern;
	
	    // 34. Set the [[pattern]] internal property of dateTimeFormat to pattern.
	    internal['[[pattern]]'] = pattern;
	
	    // 35. Set the [[boundFormat]] internal property of dateTimeFormat to undefined.
	    internal['[[boundFormat]]'] = undefined;
	
	    // 36. Set the [[initializedDateTimeFormat]] internal property of dateTimeFormat to
	    //     true.
	    internal['[[initializedDateTimeFormat]]'] = true;
	
	    // In ES3, we need to pre-bind the format() function
	    if (es3)
	        dateTimeFormat.format = GetFormatDateTime.call(dateTimeFormat);
	
	    // Restore the RegExp properties
	    regexpState.exp.test(regexpState.input);
	
	    // Return the newly initialised object
	    return dateTimeFormat;
	}
	
	/**
	 * Several DateTimeFormat algorithms use values from the following table, which provides
	 * property names and allowable values for the components of date and time formats:
	 */
	var dateTimeComponents = {
	         weekday: [ "narrow", "short", "long" ],
	             era: [ "narrow", "short", "long" ],
	            year: [ "2-digit", "numeric" ],
	           month: [ "2-digit", "numeric", "narrow", "short", "long" ],
	             day: [ "2-digit", "numeric" ],
	            hour: [ "2-digit", "numeric" ],
	          minute: [ "2-digit", "numeric" ],
	          second: [ "2-digit", "numeric" ],
	    timeZoneName: [ "short", "long" ]
	};
	
	/**
	 * When the ToDateTimeOptions abstract operation is called with arguments options,
	 * required, and defaults, the following steps are taken:
	 */
	function ToDateTimeFormats(formats) {
	    if (Object.prototype.toString.call(formats) === '[object Array]') {
	        return formats;
	    }
	    return src$cldr$$.createDateTimeFormats(formats);
	}
	
	/**
	 * When the ToDateTimeOptions abstract operation is called with arguments options,
	 * required, and defaults, the following steps are taken:
	 */
	function ToDateTimeOptions (options, required, defaults) {
	    // 1. If options is undefined, then let options be null, else let options be
	    //    ToObject(options).
	    if (options === undefined)
	        options = null;
	
	    else {
	        // (#12) options needs to be a Record, but it also needs to inherit properties
	        var opt2 = toObject(options);
	        options = new Record();
	
	        for (var k in opt2)
	            options[k] = opt2[k];
	    }
	
	    var
	    // 2. Let create be the standard built-in function object defined in ES5, 15.2.3.5.
	        create = objCreate,
	
	    // 3. Let options be the result of calling the [[Call]] internal method of create with
	    //    undefined as the this value and an argument list containing the single item
	    //    options.
	        options = create(options),
	
	    // 4. Let needDefaults be true.
	        needDefaults = true;
	
	    // 5. If required is "date" or "any", then
	    if (required === 'date' || required === 'any') {
	        // a. For each of the property names "weekday", "year", "month", "day":
	            // i. If the result of calling the [[Get]] internal method of options with the
	            //    property name is not undefined, then let needDefaults be false.
	        if (options.weekday !== undefined || options.year !== undefined
	                || options.month !== undefined || options.day !== undefined)
	            needDefaults = false;
	    }
	
	    // 6. If required is "time" or "any", then
	    if (required === 'time' || required === 'any') {
	        // a. For each of the property names "hour", "minute", "second":
	            // i. If the result of calling the [[Get]] internal method of options with the
	            //    property name is not undefined, then let needDefaults be false.
	        if (options.hour !== undefined || options.minute !== undefined || options.second !== undefined)
	                needDefaults = false;
	    }
	
	    // 7. If needDefaults is true and defaults is either "date" or "all", then
	    if (needDefaults && (defaults === 'date' || defaults === 'all'))
	        // a. For each of the property names "year", "month", "day":
	            // i. Call the [[DefineOwnProperty]] internal method of options with the
	            //    property name, Property Descriptor {[[Value]]: "numeric", [[Writable]]:
	            //    true, [[Enumerable]]: true, [[Configurable]]: true}, and false.
	        options.year = options.month = options.day = 'numeric';
	
	    // 8. If needDefaults is true and defaults is either "time" or "all", then
	    if (needDefaults && (defaults === 'time' || defaults === 'all'))
	        // a. For each of the property names "hour", "minute", "second":
	            // i. Call the [[DefineOwnProperty]] internal method of options with the
	            //    property name, Property Descriptor {[[Value]]: "numeric", [[Writable]]:
	            //    true, [[Enumerable]]: true, [[Configurable]]: true}, and false.
	        options.hour = options.minute = options.second = 'numeric';
	
	    // 9. Return options.
	    return options;
	}
	
	/**
	 * When the BasicFormatMatcher abstract operation is called with two arguments options and
	 * formats, the following steps are taken:
	 */
	function BasicFormatMatcher (options, formats) {
	    return calculateScore(options, formats);
	}
	
	/**
	 * Calculates score for BestFitFormatMatcher and BasicFormatMatcher.
	 * Abstracted from BasicFormatMatcher section.
	 */
	function calculateScore (options, formats, bestFit) {
	    var
	    // Additional penalty type when bestFit === true
	       diffDataTypePenalty = 8,
	
	    // 1. Let removalPenalty be 120.
	        removalPenalty = 120,
	
	    // 2. Let additionPenalty be 20.
	        additionPenalty = 20,
	
	    // 3. Let longLessPenalty be 8.
	        longLessPenalty = 8,
	
	    // 4. Let longMorePenalty be 6.
	        longMorePenalty = 6,
	
	    // 5. Let shortLessPenalty be 6.
	        shortLessPenalty = 6,
	
	    // 6. Let shortMorePenalty be 3.
	        shortMorePenalty = 3,
	
	    // 7. Let bestScore be -Infinity.
	        bestScore = -Infinity,
	
	    // 8. Let bestFormat be undefined.
	        bestFormat,
	
	    // 9. Let i be 0.
	        i = 0,
	
	    // 10. Let len be the result of calling the [[Get]] internal method of formats with argument "length".
	        len = formats.length;
	
	    // 11. Repeat while i < len:
	    while (i < len) {
	        var
	        // a. Let format be the result of calling the [[Get]] internal method of formats with argument ToString(i).
	            format = formats[i],
	
	        // b. Let score be 0.
	            score = 0;
	
	        // c. For each property shown in Table 3:
	        for (var property in dateTimeComponents) {
	            if (!hop.call(dateTimeComponents, property))
	                continue;
	
	            var
	            // i. Let optionsProp be options.[[<property>]].
	                optionsProp = options['[['+ property +']]'],
	
	            // ii. Let formatPropDesc be the result of calling the [[GetOwnProperty]] internal method of format
	            //     with argument property.
	            // iii. If formatPropDesc is not undefined, then
	            //     1. Let formatProp be the result of calling the [[Get]] internal method of format with argument property.
	                formatProp = hop.call(format, property) ? format[property] : undefined;
	
	            // iv. If optionsProp is undefined and formatProp is not undefined, then decrease score by
	            //     additionPenalty.
	            if (optionsProp === undefined && formatProp !== undefined)
	                score -= additionPenalty;
	
	            // v. Else if optionsProp is not undefined and formatProp is undefined, then decrease score by
	            //    removalPenalty.
	            else if (optionsProp !== undefined && formatProp === undefined)
	                score -= removalPenalty;
	
	            // vi. Else
	            else {
	                var
	                // 1. Let values be the array ["2-digit", "numeric", "narrow", "short",
	                //    "long"].
	                    values = [ '2-digit', 'numeric', 'narrow', 'short', 'long' ],
	
	                // 2. Let optionsPropIndex be the index of optionsProp within values.
	                    optionsPropIndex = arrIndexOf.call(values, optionsProp),
	
	                // 3. Let formatPropIndex be the index of formatProp within values.
	                    formatPropIndex = arrIndexOf.call(values, formatProp),
	
	                // 4. Let delta be max(min(formatPropIndex - optionsPropIndex, 2), -2).
	                    delta = Math.max(Math.min(formatPropIndex - optionsPropIndex, 2), -2);
	
	                // When the bestFit argument is true, subtract additional penalty where data types are not the same
	                if (bestFit && (
	                    ((optionsProp === 'numeric' || optionsProp === '2-digit') && (formatProp !== 'numeric' && formatProp !== '2-digit') || (optionsProp !== 'numeric' && optionsProp !== '2-digit') && (formatProp === '2-digit' || formatProp === 'numeric'))
	                ))
	                    score -= diffDataTypePenalty;
	
	                // 5. If delta = 2, decrease score by longMorePenalty.
	                if (delta === 2)
	                    score -= longMorePenalty;
	
	                // 6. Else if delta = 1, decrease score by shortMorePenalty.
	                else if (delta === 1)
	                    score -= shortMorePenalty;
	
	                // 7. Else if delta = -1, decrease score by shortLessPenalty.
	                else if (delta === -1)
	                    score -= shortLessPenalty;
	
	                // 8. Else if delta = -2, decrease score by longLessPenalty.
	                else if (delta === -2)
	                    score -= longLessPenalty;
	            }
	        }
	
	        // d. If score > bestScore, then
	        if (score > bestScore) {
	            // i. Let bestScore be score.
	            bestScore = score;
	
	            // ii. Let bestFormat be format.
	            bestFormat = format;
	        }
	
	        // e. Increase i by 1.
	        i++;
	    }
	
	    // 12. Return bestFormat.
	    return bestFormat;
	}
	
	/**
	 * When the BestFitFormatMatcher abstract operation is called with two arguments options
	 * and formats, it performs implementation dependent steps, which should return a set of
	 * component representations that a typical user of the selected locale would perceive as
	 * at least as good as the one returned by BasicFormatMatcher.
	 *
	 * This polyfill defines the algorithm to be the same as BasicFormatMatcher,
	 * with the addition of bonus points awarded where the requested format is of
	 * the same data type as the potentially matching format.
	 *
	 * For example,
	 *
	 *     { month: 'numeric', day: 'numeric' }
	 *
	 * should match
	 *
	 *     { month: '2-digit', day: '2-digit' }
	 *
	 * rather than
	 *
	 *     { month: 'short', day: 'numeric' }
	 *
	 * This makes sense because a user requesting a formatted date with numeric parts would
	 * not expect to see the returned format containing narrow, short or long part names
	 */
	function BestFitFormatMatcher (options, formats) {
	    return calculateScore(options, formats, true);
	}
	
	/* 12.2.3 */internals.DateTimeFormat = {
	    '[[availableLocales]]': [],
	    '[[relevantExtensionKeys]]': ['ca', 'nu'],
	    '[[localeData]]': {}
	};
	
	/**
	 * When the supportedLocalesOf method of Intl.DateTimeFormat is called, the
	 * following steps are taken:
	 */
	/* 12.2.2 */defineProperty(Intl.DateTimeFormat, 'supportedLocalesOf', {
	    configurable: true,
	    writable: true,
	    value: fnBind.call(supportedLocalesOf, internals.DateTimeFormat)
	});
	
	/**
	 * This named accessor property returns a function that formats a number
	 * according to the effective locale and the formatting options of this
	 * DateTimeFormat object.
	 */
	/* 12.3.2 */defineProperty(Intl.DateTimeFormat.prototype, 'format', {
	    configurable: true,
	    get: GetFormatDateTime
	});
	
	function GetFormatDateTime() {
	    var internal = this != null && typeof this === 'object' && getInternalProperties(this);
	
	    // Satisfy test 12.3_b
	    if (!internal || !internal['[[initializedDateTimeFormat]]'])
	        throw new TypeError('`this` value for format() is not an initialized Intl.DateTimeFormat object.');
	
	    // The value of the [[Get]] attribute is a function that takes the following
	    // steps:
	
	    // 1. If the [[boundFormat]] internal property of this DateTimeFormat object
	    //    is undefined, then:
	    if (internal['[[boundFormat]]'] === undefined) {
	        var
	        // a. Let F be a Function object, with internal properties set as
	        //    specified for built-in functions in ES5, 15, or successor, and the
	        //    length property set to 0, that takes the argument date and
	        //    performs the following steps:
	            F = function () {
	                //   i. If date is not provided or is undefined, then let x be the
	                //      result as if by the expression Date.now() where Date.now is
	                //      the standard built-in function defined in ES5, 15.9.4.4.
	                //  ii. Else let x be ToNumber(date).
	                // iii. Return the result of calling the FormatDateTime abstract
	                //      operation (defined below) with arguments this and x.
	                var x = Number(arguments.length === 0 ? Date.now() : arguments[0]);
	                return FormatDateTime(this, x);
	            },
	        // b. Let bind be the standard built-in function object defined in ES5,
	        //    15.3.4.5.
	        // c. Let bf be the result of calling the [[Call]] internal method of
	        //    bind with F as the this value and an argument list containing
	        //    the single item this.
	            bf = fnBind.call(F, this);
	        // d. Set the [[boundFormat]] internal property of this NumberFormat
	        //    object to bf.
	        internal['[[boundFormat]]'] = bf;
	    }
	    // Return the value of the [[boundFormat]] internal property of this
	    // NumberFormat object.
	    return internal['[[boundFormat]]'];
	}
	
	/**
	 * When the FormatDateTime abstract operation is called with arguments dateTimeFormat
	 * (which must be an object initialized as a DateTimeFormat) and x (which must be a Number
	 * value), it returns a String value representing x (interpreted as a time value as
	 * specified in ES5, 15.9.1.1) according to the effective locale and the formatting
	 * options of dateTimeFormat.
	 */
	function FormatDateTime(dateTimeFormat, x) {
	    // 1. If x is not a finite Number, then throw a RangeError exception.
	    if (!isFinite(x))
	        throw new RangeError('Invalid valid date passed to format');
	
	    var
	        internal = dateTimeFormat.__getInternalProperties(secret),
	
	    // Creating restore point for properties on the RegExp object... please wait
	        regexpState = createRegExpRestore(),
	
	    // 2. Let locale be the value of the [[locale]] internal property of dateTimeFormat.
	        locale = internal['[[locale]]'],
	
	    // 3. Let nf be the result of creating a new NumberFormat object as if by the
	    // expression new Intl.NumberFormat([locale], {useGrouping: false}) where
	    // Intl.NumberFormat is the standard built-in constructor defined in 11.1.3.
	        nf = new Intl.NumberFormat([locale], {useGrouping: false}),
	
	    // 4. Let nf2 be the result of creating a new NumberFormat object as if by the
	    // expression new Intl.NumberFormat([locale], {minimumIntegerDigits: 2, useGrouping:
	    // false}) where Intl.NumberFormat is the standard built-in constructor defined in
	    // 11.1.3.
	        nf2 = new Intl.NumberFormat([locale], {minimumIntegerDigits: 2, useGrouping: false}),
	
	    // 5. Let tm be the result of calling the ToLocalTime abstract operation (defined
	    // below) with x, the value of the [[calendar]] internal property of dateTimeFormat,
	    // and the value of the [[timeZone]] internal property of dateTimeFormat.
	        tm = ToLocalTime(x, internal['[[calendar]]'], internal['[[timeZone]]']),
	
	    // 6. Let result be the value of the [[pattern]] internal property of dateTimeFormat.
	        result = internal['[[pattern]]'],
	
	    // Need the locale minus any extensions
	        dataLocale = internal['[[dataLocale]]'],
	
	    // Need the calendar data from CLDR
	        localeData = internals.DateTimeFormat['[[localeData]]'][dataLocale].calendars,
	        ca = internal['[[calendar]]'];
	
	    // 7. For each row of Table 3, except the header row, do:
	    for (var p in dateTimeComponents) {
	        // a. If dateTimeFormat has an internal property with the name given in the
	        //    Property column of the row, then:
	        if (hop.call(internal, '[['+ p +']]')) {
	            var
	            // Assigned values below
	                pm, fv,
	
	            //   i. Let p be the name given in the Property column of the row.
	            //  ii. Let f be the value of the [[<p>]] internal property of dateTimeFormat.
	                f = internal['[['+ p +']]'],
	
	            // iii. Let v be the value of tm.[[<p>]].
	                v = tm['[['+ p +']]'];
	
	            //  iv. If p is "year" and v ≤ 0, then let v be 1 - v.
	            if (p === 'year' && v <= 0)
	                v = 1 - v;
	
	            //   v. If p is "month", then increase v by 1.
	            else if (p === 'month')
	                v++;
	
	            //  vi. If p is "hour" and the value of the [[hour12]] internal property of
	            //      dateTimeFormat is true, then
	            else if (p === 'hour' && internal['[[hour12]]'] === true) {
	                // 1. Let v be v modulo 12.
	                v = v % 12;
	
	                // 2. If v is equal to the value of tm.[[<p>]], then let pm be false; else
	                //    let pm be true.
	                pm = v !== tm['[['+ p +']]'];
	
	                // 3. If v is 0 and the value of the [[hourNo0]] internal property of
	                //    dateTimeFormat is true, then let v be 12.
	                if (v === 0 && internal['[[hourNo0]]'] === true)
	                    v = 12;
	            }
	
	            // vii. If f is "numeric", then
	            if (f === 'numeric')
	                // 1. Let fv be the result of calling the FormatNumber abstract operation
	                //    (defined in 11.3.2) with arguments nf and v.
	                fv = FormatNumber(nf, v);
	
	            // viii. Else if f is "2-digit", then
	            else if (f === '2-digit') {
	                // 1. Let fv be the result of calling the FormatNumber abstract operation
	                //    with arguments nf2 and v.
	                fv = FormatNumber(nf2, v);
	
	                // 2. If the length of fv is greater than 2, let fv be the substring of fv
	                //    containing the last two characters.
	                if (fv.length > 2)
	                    fv = fv.slice(-2);
	            }
	
	            // ix. Else if f is "narrow", "short", or "long", then let fv be a String
	            //     value representing f in the desired form; the String value depends upon
	            //     the implementation and the effective locale and calendar of
	            //     dateTimeFormat. If p is "month", then the String value may also depend
	            //     on whether dateTimeFormat has a [[day]] internal property. If p is
	            //     "timeZoneName", then the String value may also depend on the value of
	            //     the [[inDST]] field of tm.
	            else if (f in dateWidths) {
	                switch (p) {
	                    case 'month':
	                        fv = resolveDateString(localeData, ca, 'months', f, tm['[['+ p +']]']);
	                        break;
	
	                    case 'weekday':
	                        try {
	                            fv = resolveDateString(localeData, ca, 'days', f, tm['[['+ p +']]']);
	                            // fv = resolveDateString(ca.days, f)[tm['[['+ p +']]']];
	                        } catch (e) {
	                            throw new Error('Could not find weekday data for locale '+locale);
	                        }
	                        break;
	
	                    case 'timeZoneName':
	                        fv = ''; // TODO
	                        break;
	
	                    // TODO: Era
	                    default:
	                        fv = tm['[['+ p +']]'];
	                }
	            }
	
	            // x. Replace the substring of result that consists of "{", p, and "}", with
	            //    fv.
	            result = result.replace('{'+ p +'}', fv);
	        }
	    }
	    // 8. If dateTimeFormat has an internal property [[hour12]] whose value is true, then
	    if (internal['[[hour12]]'] === true) {
	        // a. If pm is true, then let fv be an implementation and locale dependent String
	        //    value representing “post meridiem”; else let fv be an implementation and
	        //    locale dependent String value representing “ante meridiem”.
	        fv = resolveDateString(localeData, ca, 'dayPeriods', pm ? 'pm' : 'am');
	
	        // b. Replace the substring of result that consists of "{ampm}", with fv.
	        result = result.replace('{ampm}', fv);
	    }
	
	    // Restore properties of the RegExp object
	    regexpState.exp.test(regexpState.input);
	
	    // 9. Return result.
	    return result;
	}
	
	/**
	 * When the ToLocalTime abstract operation is called with arguments date, calendar, and
	 * timeZone, the following steps are taken:
	 */
	function ToLocalTime(date, calendar, timeZone) {
	    // 1. Apply calendrical calculations on date for the given calendar and time zone to
	    //    produce weekday, era, year, month, day, hour, minute, second, and inDST values.
	    //    The calculations should use best available information about the specified
	    //    calendar and time zone. If the calendar is "gregory", then the calculations must
	    //    match the algorithms specified in ES5, 15.9.1, except that calculations are not
	    //    bound by the restrictions on the use of best available information on time zones
	    //    for local time zone adjustment and daylight saving time adjustment imposed by
	    //    ES5, 15.9.1.7 and 15.9.1.8.
	    // ###TODO###
	    var d = new Date(date),
	        m = 'get' + (timeZone || '');
	
	    // 2. Return a Record with fields [[weekday]], [[era]], [[year]], [[month]], [[day]],
	    //    [[hour]], [[minute]], [[second]], and [[inDST]], each with the corresponding
	    //    calculated value.
	    return new Record({
	        '[[weekday]]': d[m + 'Day'](),
	        '[[era]]'    : +(d[m + 'FullYear']() >= 0),
	        '[[year]]'   : d[m + 'FullYear'](),
	        '[[month]]'  : d[m + 'Month'](),
	        '[[day]]'    : d[m + 'Date'](),
	        '[[hour]]'   : d[m + 'Hours'](),
	        '[[minute]]' : d[m + 'Minutes'](),
	        '[[second]]' : d[m + 'Seconds'](),
	        '[[inDST]]'  : false // ###TODO###
	    });
	}
	
	/**
	 * The function returns a new object whose properties and attributes are set as if
	 * constructed by an object literal assigning to each of the following properties the
	 * value of the corresponding internal property of this DateTimeFormat object (see 12.4):
	 * locale, calendar, numberingSystem, timeZone, hour12, weekday, era, year, month, day,
	 * hour, minute, second, and timeZoneName. Properties whose corresponding internal
	 * properties are not present are not assigned.
	 */
	/* 12.3.3 */defineProperty(Intl.DateTimeFormat.prototype, 'resolvedOptions', {
	    writable: true,
	    configurable: true,
	    value: function () {
	        var prop,
	            descs = new Record(),
	            props = [
	                'locale', 'calendar', 'numberingSystem', 'timeZone', 'hour12', 'weekday',
	                'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName'
	            ],
	            internal = this != null && typeof this === 'object' && getInternalProperties(this);
	
	        // Satisfy test 12.3_b
	        if (!internal || !internal['[[initializedDateTimeFormat]]'])
	            throw new TypeError('`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.');
	
	        for (var i = 0, max = props.length; i < max; i++) {
	            if (hop.call(internal, prop = '[[' + props[i] + ']]'))
	                descs[props[i]] = { value: internal[prop], writable: true, configurable: true, enumerable: true };
	        }
	
	        return objCreate({}, descs);
	    }
	});
	
	// Sect 13 Locale Sensitive Functions of the ECMAScript Language Specification
	// ===========================================================================
	
	var ls = Intl.__localeSensitiveProtos = {
	    Number: {},
	    Date:   {}
	};
	
	/**
	 * When the toLocaleString method is called with optional arguments locales and options,
	 * the following steps are taken:
	 */
	/* 13.2.1 */ls.Number.toLocaleString = function () {
	    // Satisfy test 13.2.1_1
	    if (Object.prototype.toString.call(this) !== '[object Number]')
	        throw new TypeError('`this` value must be a number for Number.prototype.toLocaleString()');
	
	    // 1. Let x be this Number value (as defined in ES5, 15.7.4).
	    // 2. If locales is not provided, then let locales be undefined.
	    // 3. If options is not provided, then let options be undefined.
	    // 4. Let numberFormat be the result of creating a new object as if by the
	    //    expression new Intl.NumberFormat(locales, options) where
	    //    Intl.NumberFormat is the standard built-in constructor defined in 11.1.3.
	    // 5. Return the result of calling the FormatNumber abstract operation
	    //    (defined in 11.3.2) with arguments numberFormat and x.
	    return FormatNumber(new NumberFormatConstructor(arguments[0], arguments[1]), this);
	};
	
	/**
	 * When the toLocaleString method is called with optional arguments locales and options,
	 * the following steps are taken:
	 */
	/* 13.3.1 */ls.Date.toLocaleString = function () {
	    // Satisfy test 13.3.0_1
	    if (Object.prototype.toString.call(this) !== '[object Date]')
	        throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleString()');
	
	    var
	    // 1. Let x be this time value (as defined in ES5, 15.9.5).
	        x = +this;
	
	    // 2. If x is NaN, then return "Invalid Date".
	    if (isNaN(x))
	        return 'Invalid Date';
	
	    var
	    // 3. If locales is not provided, then let locales be undefined.
	        locales = arguments[0],
	
	    // 4. If options is not provided, then let options be undefined.
	        options = arguments[1],
	
	    // 5. Let options be the result of calling the ToDateTimeOptions abstract
	    //    operation (defined in 12.1.1) with arguments options, "any", and "all".
	        options = ToDateTimeOptions(options, 'any', 'all'),
	
	    // 6. Let dateTimeFormat be the result of creating a new object as if by the
	    //    expression new Intl.DateTimeFormat(locales, options) where
	    //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
	        dateTimeFormat = new DateTimeFormatConstructor(locales, options);
	
	    // 7. Return the result of calling the FormatDateTime abstract operation (defined
	    //    in 12.3.2) with arguments dateTimeFormat and x.
	    return FormatDateTime(dateTimeFormat, x);
	};
	
	/**
	 * When the toLocaleDateString method is called with optional arguments locales and
	 * options, the following steps are taken:
	 */
	/* 13.3.2 */ls.Date.toLocaleDateString = function () {
	    // Satisfy test 13.3.0_1
	    if (Object.prototype.toString.call(this) !== '[object Date]')
	        throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleDateString()');
	
	    var
	    // 1. Let x be this time value (as defined in ES5, 15.9.5).
	        x = +this;
	
	    // 2. If x is NaN, then return "Invalid Date".
	    if (isNaN(x))
	        return 'Invalid Date';
	
	    var
	    // 3. If locales is not provided, then let locales be undefined.
	        locales = arguments[0],
	
	    // 4. If options is not provided, then let options be undefined.
	        options = arguments[1],
	
	    // 5. Let options be the result of calling the ToDateTimeOptions abstract
	    //    operation (defined in 12.1.1) with arguments options, "date", and "date".
	        options = ToDateTimeOptions(options, 'date', 'date'),
	
	    // 6. Let dateTimeFormat be the result of creating a new object as if by the
	    //    expression new Intl.DateTimeFormat(locales, options) where
	    //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
	        dateTimeFormat = new DateTimeFormatConstructor(locales, options);
	
	    // 7. Return the result of calling the FormatDateTime abstract operation (defined
	    //    in 12.3.2) with arguments dateTimeFormat and x.
	    return FormatDateTime(dateTimeFormat, x);
	};
	
	/**
	 * When the toLocaleTimeString method is called with optional arguments locales and
	 * options, the following steps are taken:
	 */
	/* 13.3.3 */ls.Date.toLocaleTimeString = function () {
	    // Satisfy test 13.3.0_1
	    if (Object.prototype.toString.call(this) !== '[object Date]')
	        throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleTimeString()');
	
	    var
	    // 1. Let x be this time value (as defined in ES5, 15.9.5).
	        x = +this;
	
	    // 2. If x is NaN, then return "Invalid Date".
	    if (isNaN(x))
	        return 'Invalid Date';
	
	    var
	    // 3. If locales is not provided, then let locales be undefined.
	        locales = arguments[0],
	
	    // 4. If options is not provided, then let options be undefined.
	        options = arguments[1],
	
	    // 5. Let options be the result of calling the ToDateTimeOptions abstract
	    //    operation (defined in 12.1.1) with arguments options, "time", and "time".
	        options = ToDateTimeOptions(options, 'time', 'time'),
	
	    // 6. Let dateTimeFormat be the result of creating a new object as if by the
	    //    expression new Intl.DateTimeFormat(locales, options) where
	    //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
	        dateTimeFormat = new DateTimeFormatConstructor(locales, options);
	
	    // 7. Return the result of calling the FormatDateTime abstract operation (defined
	    //    in 12.3.2) with arguments dateTimeFormat and x.
	    return FormatDateTime(dateTimeFormat, x);
	};
	
	defineProperty(Intl, '__applyLocaleSensitivePrototypes', {
	    writable: true,
	    configurable: true,
	    value: function () {
	        defineProperty(Number.prototype, 'toLocaleString', { writable: true, configurable: true, value: ls.Number.toLocaleString });
	        // Need this here for IE 8, to avoid the _DontEnum_ bug
	        defineProperty(Date.prototype, 'toLocaleString', { writable: true, configurable: true, value: ls.Date.toLocaleString });
	
	        for (var k in ls.Date) {
	            if (hop.call(ls.Date, k))
	                defineProperty(Date.prototype, k, { writable: true, configurable: true, value: ls.Date[k] });
	        }
	    }
	});
	
	/**
	 * Can't really ship a single script with data for hundreds of locales, so we provide
	 * this __addLocaleData method as a means for the developer to add the data on an
	 * as-needed basis
	 */
	defineProperty(Intl, '__addLocaleData', {
	    value: function (data) {
	        if (!IsStructurallyValidLanguageTag(data.locale))
	            throw new Error("Object passed doesn't identify itself with a valid language tag");
	
	        addLocaleData(data, data.locale);
	    }
	});
	
	function addLocaleData (data, tag) {
	    // Both NumberFormat and DateTimeFormat require number data, so throw if it isn't present
	    if (!data.number)
	        throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat");
	
	    var locale,
	        locales = [ tag ],
	        parts   = tag.split('-');
	
	    // Create fallbacks for locale data with scripts, e.g. Latn, Hans, Vaii, etc
	    if (parts.length > 2 && parts[1].length === 4)
	        arrPush.call(locales, parts[0] + '-' + parts[2]);
	
	    while (locale = arrShift.call(locales)) {
	        // Add to NumberFormat internal properties as per 11.2.3
	        arrPush.call(internals.NumberFormat['[[availableLocales]]'], locale);
	        internals.NumberFormat['[[localeData]]'][locale] = data.number;
	
	        // ...and DateTimeFormat internal properties as per 12.2.3
	        if (data.date) {
	            data.date.nu = data.number.nu;
	            arrPush.call(internals.DateTimeFormat['[[availableLocales]]'], locale);
	            internals.DateTimeFormat['[[localeData]]'][locale] = data.date;
	        }
	    }
	
	    // If this is the first set of locale data added, make it the default
	    if (defaultLocale === undefined)
	        defaultLocale = tag;
	
	    // 11.3 (the NumberFormat prototype object is an Intl.NumberFormat instance)
	    if (!numberFormatProtoInitialised) {
	        InitializeNumberFormat(Intl.NumberFormat.prototype);
	        numberFormatProtoInitialised = true;
	    }
	
	    // 11.3 (the NumberFormat prototype object is an Intl.NumberFormat instance)
	    if (data.date && !dateTimeFormatProtoInitialised) {
	        InitializeDateTimeFormat(Intl.DateTimeFormat.prototype);
	        dateTimeFormatProtoInitialised = true;
	    }
	}
	
	// Helper functions
	// ================
	
	/**
	 * A function to deal with the inaccuracy of calculating log10 in pre-ES6
	 * JavaScript environments. Math.log(num) / Math.LN10 was responsible for
	 * causing issue #62.
	 */
	function log10Floor (n) {
	    // ES6 provides the more accurate Math.log10
	    if (typeof Math.log10 === 'function')
	        return Math.floor(Math.log10(n));
	
	    var x = Math.round(Math.log(n) * Math.LOG10E);
	    return x - (Number('1e' + x) > n);
	}
	
	/**
	 * A merge of the Intl.{Constructor}.supportedLocalesOf functions
	 * To make life easier, the function should be bound to the constructor's internal
	 * properties object.
	 */
	function supportedLocalesOf(locales) {
	    /*jshint validthis:true */
	
	    // Bound functions only have the `this` value altered if being used as a constructor,
	    // this lets us imitate a native function that has no constructor
	    if (!hop.call(this, '[[availableLocales]]'))
	        throw new TypeError('supportedLocalesOf() is not a constructor');
	
	    var
	    // Create an object whose props can be used to restore the values of RegExp props
	        regexpState = createRegExpRestore(),
	
	    // 1. If options is not provided, then let options be undefined.
	        options = arguments[1],
	
	    // 2. Let availableLocales be the value of the [[availableLocales]] internal
	    //    property of the standard built-in object that is the initial value of
	    //    Intl.NumberFormat.
	
	        availableLocales = this['[[availableLocales]]'],
	
	    // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
	    //    abstract operation (defined in 9.2.1) with argument locales.
	        requestedLocales = CanonicalizeLocaleList(locales);
	
	    // Restore the RegExp properties
	    regexpState.exp.test(regexpState.input);
	
	    // 4. Return the result of calling the SupportedLocales abstract operation
	    //    (defined in 9.2.8) with arguments availableLocales, requestedLocales,
	    //    and options.
	    return SupportedLocales(availableLocales, requestedLocales, options);
	}
	
	/**
	 * Returns a string for a date component, resolved using multiple inheritance as specified
	 * as specified in the Unicode Technical Standard 35.
	 */
	function resolveDateString(data, ca, component, width, key) {
	    // From http://www.unicode.org/reports/tr35/tr35.html#Multiple_Inheritance:
	    // 'In clearly specified instances, resources may inherit from within the same locale.
	    //  For example, ... the Buddhist calendar inherits from the Gregorian calendar.'
	    var obj = data[ca] && data[ca][component]
	                ? data[ca][component]
	                : data.gregory[component],
	
	        // "sideways" inheritance resolves strings when a key doesn't exist
	        alts = {
	            narrow: ['short', 'long'],
	            short:  ['long', 'narrow'],
	            long:   ['short', 'narrow']
	        },
	
	        //
	        resolved = hop.call(obj, width)
	                  ? obj[width]
	                  : hop.call(obj, alts[width][0])
	                      ? obj[alts[width][0]]
	                      : obj[alts[width][1]];
	
	    // `key` wouldn't be specified for components 'dayPeriods'
	    return key != null ? resolved[key] : resolved;
	}
	
	/**
	 * A map that doesn't contain Object in its prototype chain
	 */
	Record.prototype = objCreate(null);
	function Record (obj) {
	    // Copy only own properties over unless this object is already a Record instance
	    for (var k in obj) {
	        if (obj instanceof Record || hop.call(obj, k))
	            defineProperty(this, k, { value: obj[k], enumerable: true, writable: true, configurable: true });
	    }
	}
	
	/**
	 * An ordered list
	 */
	List.prototype = objCreate(null);
	function List() {
	    defineProperty(this, 'length', { writable:true, value: 0 });
	
	    if (arguments.length)
	        arrPush.apply(this, arrSlice.call(arguments));
	}
	
	/**
	 * Constructs a regular expression to restore tainted RegExp properties
	 */
	function createRegExpRestore () {
	    var esc = /[.?*+^$[\]\\(){}|-]/g,
	        lm  = RegExp.lastMatch || '',
	        ml  = RegExp.multiline ? 'm' : '',
	        ret = { input: RegExp.input },
	        reg = new List(),
	        has = false,
	        cap = {};
	
	    // Create a snapshot of all the 'captured' properties
	    for (var i = 1; i <= 9; i++)
	        has = (cap['$'+i] = RegExp['$'+i]) || has;
	
	    // Now we've snapshotted some properties, escape the lastMatch string
	    lm = lm.replace(esc, '\\$&');
	
	    // If any of the captured strings were non-empty, iterate over them all
	    if (has) {
	        for (var i = 1; i <= 9; i++) {
	            var m = cap['$'+i];
	
	            // If it's empty, add an empty capturing group
	            if (!m)
	                lm = '()' + lm;
	
	            // Else find the string in lm and escape & wrap it to capture it
	            else {
	                m = m.replace(esc, '\\$&');
	                lm = lm.replace(m, '(' + m + ')');
	            }
	
	            // Push it to the reg and chop lm to make sure further groups come after
	            arrPush.call(reg, lm.slice(0, lm.indexOf('(') + 1));
	            lm = lm.slice(lm.indexOf('(') + 1);
	        }
	    }
	
	    // Create the regular expression that will reconstruct the RegExp properties
	    ret.exp = new RegExp(arrJoin.call(reg, '') + lm, ml);
	
	    return ret;
	}
	
	/**
	 * Convert only a-z to uppercase as per section 6.1 of the spec
	 */
	function toLatinUpperCase (str) {
	    var i = str.length;
	
	    while (i--) {
	        var ch = str.charAt(i);
	
	        if (ch >= "a" && ch <= "z")
	            str = str.slice(0, i) + ch.toUpperCase() + str.slice(i+1);
	    }
	
	    return str;
	}
	
	/**
	 * Mimics ES5's abstract ToObject() function
	 */
	function toObject (arg) {
	    if (arg == null)
	        throw new TypeError('Cannot convert null or undefined to object');
	
	    return Object(arg);
	}
	
	/**
	 * Returns "internal" properties for an object
	 */
	function getInternalProperties (obj) {
	    if (hop.call(obj, '__getInternalProperties'))
	        return obj.__getInternalProperties(secret);
	    else
	        return objCreate(null);
	}
	
	exports["default"] = Intl;
	
	//# sourceMappingURL=core.js.map

/***/ },

/***/ 317:
/***/ function(module, exports) {

	/* jshint esnext: true, laxbreak:true */
	
	/**
	* Defines regular expressions for various operations related to the BCP 47 syntax,
	* as defined at http://tools.ietf.org/html/bcp47#section-2.1
	*/
	
	"use strict";
	
	var
	    // extlang       = 3ALPHA              ; selected ISO 639 codes
	    //                 *2("-" 3ALPHA)      ; permanently reserved
	    extlang = '[a-z]{3}(?:-[a-z]{3}){0,2}',
	
	    // language      = 2*3ALPHA            ; shortest ISO 639 code
	    //                 ["-" extlang]       ; sometimes followed by
	    //                                     ; extended language subtags
	    //               / 4ALPHA              ; or reserved for future use
	    //               / 5*8ALPHA            ; or registered language subtag
	    language = '(?:[a-z]{2,3}(?:-' + extlang + ')?|[a-z]{4}|[a-z]{5,8})',
	
	    // script        = 4ALPHA              ; ISO 15924 code
	    script = '[a-z]{4}',
	
	    // region        = 2ALPHA              ; ISO 3166-1 code
	    //               / 3DIGIT              ; UN M.49 code
	    region = '(?:[a-z]{2}|\\d{3})',
	
	    // variant       = 5*8alphanum         ; registered variants
	    //               / (DIGIT 3alphanum)
	    variant = '(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})',
	
	    //                                     ; Single alphanumerics
	    //                                     ; "x" reserved for private use
	    // singleton     = DIGIT               ; 0 - 9
	    //               / %x41-57             ; A - W
	    //               / %x59-5A             ; Y - Z
	    //               / %x61-77             ; a - w
	    //               / %x79-7A             ; y - z
	    singleton = '[0-9a-wy-z]',
	
	    // extension     = singleton 1*("-" (2*8alphanum))
	    extension = singleton + '(?:-[a-z0-9]{2,8})+',
	
	    // privateuse    = "x" 1*("-" (1*8alphanum))
	    privateuse = 'x(?:-[a-z0-9]{1,8})+',
	
	    // irregular     = "en-GB-oed"         ; irregular tags do not match
	    //               / "i-ami"             ; the 'langtag' production and
	    //               / "i-bnn"             ; would not otherwise be
	    //               / "i-default"         ; considered 'well-formed'
	    //               / "i-enochian"        ; These tags are all valid,
	    //               / "i-hak"             ; but most are deprecated
	    //               / "i-klingon"         ; in favor of more modern
	    //               / "i-lux"             ; subtags or subtag
	    //               / "i-mingo"           ; combination
	    //               / "i-navajo"
	    //               / "i-pwn"
	    //               / "i-tao"
	    //               / "i-tay"
	    //               / "i-tsu"
	    //               / "sgn-BE-FR"
	    //               / "sgn-BE-NL"
	    //               / "sgn-CH-DE"
	    irregular = '(?:en-GB-oed'
	              + '|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)'
	              + '|sgn-(?:BE-FR|BE-NL|CH-DE))',
	
	    // regular       = "art-lojban"        ; these tags match the 'langtag'
	    //               / "cel-gaulish"       ; production, but their subtags
	    //               / "no-bok"            ; are not extended language
	    //               / "no-nyn"            ; or variant subtags: their meaning
	    //               / "zh-guoyu"          ; is defined by their registration
	    //               / "zh-hakka"          ; and all of these are deprecated
	    //               / "zh-min"            ; in favor of a more modern
	    //               / "zh-min-nan"        ; subtag or sequence of subtags
	    //               / "zh-xiang"
	    regular = '(?:art-lojban|cel-gaulish|no-bok|no-nyn'
	            + '|zh-(?:guoyu|hakka|min|min-nan|xiang))',
	
	    // grandfathered = irregular           ; non-redundant tags registered
	    //               / regular             ; during the RFC 3066 era
	    grandfathered = '(?:' + irregular + '|' + regular + ')',
	
	    // langtag       = language
	    //                 ["-" script]
	    //                 ["-" region]
	    //                 *("-" variant)
	    //                 *("-" extension)
	    //                 ["-" privateuse]
	    langtag = language + '(?:-' + script + ')?(?:-' + region + ')?(?:-'
	            + variant + ')*(?:-' + extension + ')*(?:-' + privateuse + ')?';
	
	var expBCP47Syntax = RegExp('^(?:'+langtag+'|'+privateuse+'|'+grandfathered+')$', 'i');
	
	var expVariantDupes = RegExp('^(?!x).*?-('+variant+')-(?:\\w{4,8}-(?!x-))*\\1\\b', 'i');
	
	var expSingletonDupes = RegExp('^(?!x).*?-('+singleton+')-(?:\\w+-(?!x-))*\\1\\b', 'i');
	
	var expExtSequences = RegExp('-'+extension, 'ig');
	exports.expBCP47Syntax = expBCP47Syntax, exports.expVariantDupes = expVariantDupes, exports.expSingletonDupes = expSingletonDupes, exports.expExtSequences = expExtSequences;
	
	//# sourceMappingURL=exp.js.map

/***/ },

/***/ 455:
/***/ function(module, exports) {

	/* (ignored) */

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2ludGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbnRsL2xvY2FsZS1kYXRhL2pzb25wL2VuLmpzIiwid2VicGFjazovLy8uL34vaW50bC9sb2NhbGUtZGF0YS9qc29ucC96aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ludGwvbGliL2NsZHIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbnRsL2xpYi9jb3JlLmpzIiwid2VicGFjazovLy8uL34vaW50bC9saWIvZXhwLmpzIiwid2VicGFjazovLy8uL2xvY2FsZS1kYXRhL2NvbXBsZXRlLmpzIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbkJBLCtCQUE4QixrQkFBa0Isd0xBQXdMLFFBQVEsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLHdoQkFBd2hCLGNBQWMsOEVBQThFLGNBQWMsMkVBQTJFLFlBQVksVUFBVSxRQUFRLDhQQUE4UCxPQUFPLHFLQUFxSyxPQUFPLHVDQUF1QyxhQUFhLGlCQUFpQixVQUFVLFFBQVEscVFBQXFRLE9BQU8scUtBQXFLLGFBQWEsaUJBQWlCLFNBQVMsUUFBUSw0U0FBNFMsT0FBTyxxS0FBcUssT0FBTyxrRUFBa0UsYUFBYSxpQkFBaUIsUUFBUSxRQUFRLHFRQUFxUSxPQUFPLHFLQUFxSyxhQUFhLGlCQUFpQixXQUFXLFFBQVEsd1RBQXdULE9BQU8scUtBQXFLLE9BQU8sa0VBQWtFLGFBQWEsaUJBQWlCLFVBQVUsUUFBUSx3VEFBd1QsT0FBTyxxS0FBcUssT0FBTyw2Q0FBNkMsYUFBYSxpQkFBaUIsVUFBVSxRQUFRLDJOQUEyTixPQUFPLHFLQUFxSyxPQUFPLGtFQUFrRSxhQUFhLGlCQUFpQixVQUFVLFFBQVEsOFBBQThQLE9BQU8scUtBQXFLLE9BQU8sK0hBQStILGFBQWEsaUJBQWlCLFNBQVMsUUFBUSx3VEFBd1QsT0FBTyxxS0FBcUssT0FBTyx1Q0FBdUMsYUFBYSxpQkFBaUIsU0FBUyxRQUFRLHlUQUF5VCxPQUFPLHFLQUFxSyxPQUFPLDZDQUE2QyxhQUFhLGlCQUFpQixVQUFVLFFBQVEscVRBQXFULE9BQU8scUtBQXFLLE9BQU8sdUNBQXVDLGFBQWEsaUJBQWlCLFdBQVcsUUFBUSxxVEFBcVQsT0FBTyxxS0FBcUssT0FBTyx1Q0FBdUMsYUFBYSxpQkFBaUIsV0FBVyxRQUFRLDhQQUE4UCxPQUFPLHFLQUFxSyxPQUFPLG12YkFBbXZiLGFBQWEsaUJBQWlCLFVBQVUsUUFBUSxtU0FBbVMsT0FBTyxxS0FBcUssT0FBTyx1Q0FBdUMsYUFBYSxpQkFBaUIsTUFBTSxRQUFRLDhQQUE4UCxPQUFPLHFLQUFxSyxPQUFPLG1HQUFtRyxhQUFhLG1CQUFtQixTQUFTLHNCQUFzQixTQUFTLGtCQUFrQixPQUFPLHFCQUFxQixPQUFPLEVBQUUsV0FBVyxrQkFBa0IsVUFBVSxPQUFPLHFCQUFxQixVQUFVLE9BQU8sRUFBRSxVQUFVLGtCQUFrQixPQUFPLHNCQUFzQixPQUFPLElBQUksVUFBVSxNQUFNLDBEQUEwRCxhQUFhLDBMQUEwTCxFOzs7Ozs7O0FDQWw1dUIsK0JBQThCLGtCQUFrQix3TEFBd0wsUUFBUSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxvQkFBb0IsZ2hCQUFnaEIsY0FBYyxtRUFBbUUsY0FBYyx1RUFBdUUsWUFBWSxVQUFVLFFBQVEsd01BQXdNLE9BQU8saUlBQWlJLE9BQU8sdUNBQXVDLGFBQWEsaUJBQWlCLFVBQVUsUUFBUSxnTUFBZ00sT0FBTyxpSUFBaUksYUFBYSxpQkFBaUIsU0FBUyxRQUFRLHlOQUF5TixPQUFPLGlJQUFpSSxPQUFPLGtFQUFrRSxhQUFhLGlCQUFpQixRQUFRLFFBQVEsZ01BQWdNLE9BQU8saUlBQWlJLGFBQWEsaUJBQWlCLFdBQVcsUUFBUSx5TkFBeU4sT0FBTyxpSUFBaUksT0FBTyxrRUFBa0UsYUFBYSxpQkFBaUIsVUFBVSxRQUFRLHlOQUF5TixPQUFPLGlJQUFpSSxPQUFPLDZDQUE2QyxhQUFhLGlCQUFpQixVQUFVLFFBQVEsMk5BQTJOLE9BQU8saUlBQWlJLE9BQU8sa0VBQWtFLGFBQWEsaUJBQWlCLFVBQVUsUUFBUSx3TUFBd00sT0FBTyxpSUFBaUksT0FBTywwRkFBMEYsYUFBYSxpQkFBaUIsU0FBUyxRQUFRLHlPQUF5TyxPQUFPLGlJQUFpSSxPQUFPLDZDQUE2QyxhQUFhLGlCQUFpQixTQUFTLFFBQVEsd01BQXdNLE9BQU8saUlBQWlJLE9BQU8sMENBQTBDLGFBQWEsaUJBQWlCLFVBQVUsUUFBUSx3TUFBd00sT0FBTyxpSUFBaUksT0FBTyw2Q0FBNkMsYUFBYSxpQkFBaUIsV0FBVyxRQUFRLHdNQUF3TSxPQUFPLGlJQUFpSSxPQUFPLDZDQUE2QyxhQUFhLGlCQUFpQixXQUFXLFFBQVEsd01BQXdNLE9BQU8saUlBQWlJLE9BQU8sbXBZQUFtcFksYUFBYSxpQkFBaUIsVUFBVSxRQUFRLHdNQUF3TSxPQUFPLGlJQUFpSSxPQUFPLDBDQUEwQyxhQUFhLGlCQUFpQixNQUFNLFFBQVEsd01BQXdNLE9BQU8saUlBQWlJLE9BQU8seURBQXlELGFBQWEsbUJBQW1CLFNBQVMsc0JBQXNCLFNBQVMsa0JBQWtCLE9BQU8scUJBQXFCLE9BQU8sRUFBRSxXQUFXLGtCQUFrQixVQUFVLE9BQU8scUJBQXFCLFVBQVUsT0FBTyxFQUFFLFVBQVUsa0JBQWtCLE9BQU8sc0JBQXNCLE9BQU8sSUFBSSxVQUFVLFNBQVMseURBQXlELE9BQU8sMERBQTBELGFBQWEsdU1BQXVNLEU7Ozs7Ozs7QUNBOXBvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBZ0MsSUFBSSxHQUFHLElBQUksTUFBTSxJQUFJLGNBQWMsSUFBSSxPQUFPLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsT0FBTyxJQUFJLFFBQVEsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksV0FBVyxJQUFJO0FBQ3JLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTCw2RUFBNEU7QUFDNUUsdURBQXNELEtBQUs7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQXlCLElBQUk7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QixLQUFLOztBQUU5QjtBQUNBO0FBQ0E7QUFDQSwwQkFBeUIsUUFBUTs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCLE1BQU07O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QixRQUFROztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCLElBQUk7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCLFFBQVE7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCLEtBQUs7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUIsS0FBSzs7QUFFOUI7QUFDQTtBQUNBLDBCQUF5QixPQUFPOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QixPQUFPOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCLGFBQWE7O0FBRXRDO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXdDO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSwrQkFBK0I7QUFDOUMsb0JBQW1CLCtCQUErQjtBQUNsRDtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsRUFBRTtBQUM3Qiw0QkFBMkIsRUFBRTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7O0FDdFdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLG9EQUFtRDtBQUNuRDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdEQUF1RCxTQUFTO0FBQ2hFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1DQUFrQyxVQUFVLFVBQVUsU0FBUyxFQUFFOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQThCLEVBQUU7QUFDaEMsdUNBQXNDLElBQUk7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLHVDQUFzQyxrQkFBa0I7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0VBQStEO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyRUFBMEU7QUFDMUUsK0RBQThEO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTRDO0FBQzVDO0FBQ0E7O0FBRUEsbUNBQWtDLE9BQU87QUFDekMsK0JBQThCLE9BQU87O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUFzQyxTQUFTO0FBQy9DLG1DQUFrQyxTQUFTO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTJDLFNBQVM7QUFDcEQ7QUFDQSxvQ0FBbUM7QUFDbkM7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0EsRUFBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFzRDtBQUN0RCxzRUFBcUU7QUFDckU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBc0Q7QUFDdEQsc0VBQXFFO0FBQ3JFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFNBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW1ELG1CQUFtQjtBQUN0RTtBQUNBLCtDQUE4QyxtQkFBbUI7O0FBRWpFO0FBQ0Esb0RBQW1EO0FBQ25ELGNBQWE7QUFDYjtBQUNBLGdEQUErQyw0Q0FBNEM7O0FBRTNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXFGO0FBQ3JGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZEQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRUFBcUUsWUFBWTtBQUNqRjtBQUNBLHVDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBaUQ7QUFDakQ7QUFDQTs7QUFFQSxrRUFBaUUsS0FBSztBQUN0RSxtQ0FBa0MsS0FBSztBQUN2Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTJDLFNBQVM7QUFDcEQ7QUFDQSxvQ0FBbUM7QUFDbkM7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0EsRUFBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0EsZUFBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE0RCxzRUFBc0U7QUFDbEk7QUFDQSwyREFBMEQsb0VBQW9FOztBQUU5SDtBQUNBO0FBQ0Esb0RBQW1ELHdEQUF3RDtBQUMzRztBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQyxzRUFBc0U7QUFDM0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DLDBCQUEwQjs7QUFFOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCO0FBQy9CO0FBQ0E7QUFDQSxnQkFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW1CLFFBQVE7QUFDM0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXVCLFFBQVE7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQzs7Ozs7OztBQ3Y1RkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw2Q0FBNEM7QUFDNUMsNkNBQTRDO0FBQzVDLHNCQUFxQixFQUFFLFVBQVUsRUFBRSxFQUFFLElBQUk7O0FBRXpDLDZDQUE0QztBQUM1Qyw2Q0FBNEM7QUFDNUMsNkNBQTRDO0FBQzVDLDZDQUE0QztBQUM1Qyw2Q0FBNEM7QUFDNUMsMEJBQXlCLElBQUksNEJBQTRCLEVBQUUsT0FBTyxJQUFJOztBQUV0RSw2Q0FBNEM7QUFDNUMscUJBQW9CLEVBQUU7O0FBRXRCLDZDQUE0QztBQUM1Qyw2Q0FBNEM7QUFDNUMsd0JBQXVCLEVBQUUsS0FBSyxFQUFFOztBQUVoQyw2Q0FBNEM7QUFDNUM7QUFDQSw0QkFBMkIsSUFBSSxhQUFhLEVBQUU7O0FBRTlDLDZDQUE0QztBQUM1Qyw2Q0FBNEM7QUFDNUMsNkNBQTRDO0FBQzVDLDZDQUE0QztBQUM1Qyw2Q0FBNEM7QUFDNUMsNkNBQTRDO0FBQzVDLDZDQUE0QztBQUM1Qzs7QUFFQTtBQUNBLDJDQUEwQyxJQUFJOztBQUU5QztBQUNBLGlDQUFnQyxJQUFJOztBQUVwQyw2Q0FBNEM7QUFDNUMsNkNBQTRDO0FBQzVDLDZDQUE0QztBQUM1Qyw2Q0FBNEM7QUFDNUMsNkNBQTRDO0FBQzVDLDZDQUE0QztBQUM1Qyw2Q0FBNEM7QUFDNUMsNkNBQTRDO0FBQzVDLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE0QztBQUM1Qyw2Q0FBNEM7QUFDNUMsNkNBQTRDO0FBQzVDLDZDQUE0QztBQUM1Qyw2Q0FBNEM7QUFDNUMsNkNBQTRDO0FBQzVDLDZDQUE0QztBQUM1Qyw2Q0FBNEM7QUFDNUM7QUFDQTtBQUNBOztBQUVBLDZDQUE0QztBQUM1Qyw2Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw4REFBNkQsSUFBSTs7QUFFakU7O0FBRUE7QUFDQTs7QUFFQSxnQzs7Ozs7OztBQ3RHQSxnQiIsImZpbGUiOiIwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtID0gcmVxdWlyZSgnLi9saWIvY29yZS5qcycpLFxuICAgIEludGxQb2x5ZmlsbCA9IG1bJ2RlZmF1bHQnXTtcblxuLy8gRXhwb3NlIGBJbnRsUG9seWZpbGxgIGFzIGdsb2JhbCB0byBhZGQgbG9jYWxlIGRhdGEgaW50byBydW50aW1lIGxhdGVyIG9uLlxuZ2xvYmFsLkludGxQb2x5ZmlsbCA9IEludGxQb2x5ZmlsbDtcblxuLy8gUmVxdWlyZSBhbGwgbG9jYWxlIGRhdGEgZm9yIGBJbnRsYC4gVGhpcyBtb2R1bGUgd2lsbCBiZVxuLy8gaWdub3JlZCB3aGVuIGJ1bmRsaW5nIGZvciB0aGUgYnJvd3NlciB3aXRoIEJyb3dzZXJpZnkvV2VicGFjay5cbnJlcXVpcmUoJy4vbG9jYWxlLWRhdGEvY29tcGxldGUuanMnKTtcblxuLy8gaGFjayB0byBleHBvcnQgdGhlIHBvbHlmaWxsIGFzIGdsb2JhbCBJbnRsIGlmIG5lZWRlZFxuaWYgKCFnbG9iYWwuSW50bCkge1xuICAgIGdsb2JhbC5JbnRsID0gSW50bFBvbHlmaWxsO1xuICAgIEludGxQb2x5ZmlsbC5fX2FwcGx5TG9jYWxlU2Vuc2l0aXZlUHJvdG90eXBlcygpO1xufVxuXG4vLyBwcm92aWRpbmcgYW4gaWRpb21hdGljIGFwaSBmb3IgdGhlIG5vZGVqcyB2ZXJzaW9uIG9mIHRoaXMgbW9kdWxlXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBJbnRsUG9seWZpbGw7XG4vLyBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCBhcGkgaW4gY2FzZSBhbm90aGVyIG1vZHVsZSBpcyByZWx5aW5nIG9uIHRoYXRcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEludGxQb2x5ZmlsbDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ludGwvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIkludGxQb2x5ZmlsbC5fX2FkZExvY2FsZURhdGEoe2xvY2FsZTpcImVuXCIsZGF0ZTp7Y2E6W1wiZ3JlZ29yeVwiLFwiYnVkZGhpc3RcIixcImNoaW5lc2VcIixcImNvcHRpY1wiLFwiZGFuZ2lcIixcImV0aGlvYWFcIixcImV0aGlvcGljXCIsXCJnZW5lcmljXCIsXCJoZWJyZXdcIixcImluZGlhblwiLFwiaXNsYW1pY1wiLFwiaXNsYW1pY2NcIixcImphcGFuZXNlXCIsXCJwZXJzaWFuXCIsXCJyb2NcIl0saG91ck5vMDp0cnVlLGhvdXIxMjp0cnVlLGZvcm1hdHM6e3Nob3J0OlwiezF9LCB7MH1cIixtZWRpdW06XCJ7MX0sIHswfVwiLGZ1bGw6XCJ7MX0gJ2F0JyB7MH1cIixsb25nOlwiezF9ICdhdCcgezB9XCIsYXZhaWxhYmxlRm9ybWF0czp7XCJkXCI6XCJkXCIsXCJFXCI6XCJjY2NcIixFZDpcImQgRVwiLEVobTpcIkUgaDptbSBhXCIsRUhtOlwiRSBISDptbVwiLEVobXM6XCJFIGg6bW06c3MgYVwiLEVIbXM6XCJFIEhIOm1tOnNzXCIsR3k6XCJ5IEdcIixHeU1NTTpcIk1NTSB5IEdcIixHeU1NTWQ6XCJNTU0gZCwgeSBHXCIsR3lNTU1FZDpcIkUsIE1NTSBkLCB5IEdcIixcImhcIjpcImggYVwiLFwiSFwiOlwiSEhcIixobTpcImg6bW0gYVwiLEhtOlwiSEg6bW1cIixobXM6XCJoOm1tOnNzIGFcIixIbXM6XCJISDptbTpzc1wiLGhtc3Y6XCJoOm1tOnNzIGEgdlwiLEhtc3Y6XCJISDptbTpzcyB2XCIsaG12OlwiaDptbSBhIHZcIixIbXY6XCJISDptbSB2XCIsXCJNXCI6XCJMXCIsTWQ6XCJNL2RcIixNRWQ6XCJFLCBNL2RcIixNTU06XCJMTExcIixNTU1kOlwiTU1NIGRcIixNTU1FZDpcIkUsIE1NTSBkXCIsTU1NTWQ6XCJNTU1NIGRcIixtczpcIm1tOnNzXCIsXCJ5XCI6XCJ5XCIseU06XCJNL3lcIix5TWQ6XCJNL2QveVwiLHlNRWQ6XCJFLCBNL2QveVwiLHlNTU06XCJNTU0geVwiLHlNTU1kOlwiTU1NIGQsIHlcIix5TU1NRWQ6XCJFLCBNTU0gZCwgeVwiLHlNTU1NOlwiTU1NTSB5XCIseVFRUTpcIlFRUSB5XCIseVFRUVE6XCJRUVFRIHlcIn0sZGF0ZUZvcm1hdHM6e3lNTU1NRUVFRWQ6XCJFRUVFLCBNTU1NIGQsIHlcIix5TU1NTWQ6XCJNTU1NIGQsIHlcIix5TU1NZDpcIk1NTSBkLCB5XCIseU1kOlwiTS9kL3l5XCJ9LHRpbWVGb3JtYXRzOntobW1zc3p6eno6XCJoOm1tOnNzIGEgenp6elwiLGhtc3o6XCJoOm1tOnNzIGEgelwiLGhtczpcImg6bW06c3MgYVwiLGhtOlwiaDptbSBhXCJ9fSxjYWxlbmRhcnM6e2J1ZGRoaXN0Onttb250aHM6e25hcnJvdzpbXCJKXCIsXCJGXCIsXCJNXCIsXCJBXCIsXCJNXCIsXCJKXCIsXCJKXCIsXCJBXCIsXCJTXCIsXCJPXCIsXCJOXCIsXCJEXCJdLHNob3J0OltcIkphblwiLFwiRmViXCIsXCJNYXJcIixcIkFwclwiLFwiTWF5XCIsXCJKdW5cIixcIkp1bFwiLFwiQXVnXCIsXCJTZXBcIixcIk9jdFwiLFwiTm92XCIsXCJEZWNcIl0sbG9uZzpbXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl19LGRheXM6e25hcnJvdzpbXCJTXCIsXCJNXCIsXCJUXCIsXCJXXCIsXCJUXCIsXCJGXCIsXCJTXCJdLHNob3J0OltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSxsb25nOltcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdfSxlcmFzOntuYXJyb3c6W1wiQkVcIl0sc2hvcnQ6W1wiQkVcIl0sbG9uZzpbXCJCRVwiXX0sZGF5UGVyaW9kczp7YW06XCJBTVwiLHBtOlwiUE1cIn19LGNoaW5lc2U6e21vbnRoczp7bmFycm93OltcIjFcIixcIjJcIixcIjNcIixcIjRcIixcIjVcIixcIjZcIixcIjdcIixcIjhcIixcIjlcIixcIjEwXCIsXCIxMVwiLFwiMTJcIl0sc2hvcnQ6W1wiTW8xXCIsXCJNbzJcIixcIk1vM1wiLFwiTW80XCIsXCJNbzVcIixcIk1vNlwiLFwiTW83XCIsXCJNbzhcIixcIk1vOVwiLFwiTW8xMFwiLFwiTW8xMVwiLFwiTW8xMlwiXSxsb25nOltcIk1vbnRoMVwiLFwiTW9udGgyXCIsXCJNb250aDNcIixcIk1vbnRoNFwiLFwiTW9udGg1XCIsXCJNb250aDZcIixcIk1vbnRoN1wiLFwiTW9udGg4XCIsXCJNb250aDlcIixcIk1vbnRoMTBcIixcIk1vbnRoMTFcIixcIk1vbnRoMTJcIl19LGRheXM6e25hcnJvdzpbXCJTXCIsXCJNXCIsXCJUXCIsXCJXXCIsXCJUXCIsXCJGXCIsXCJTXCJdLHNob3J0OltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSxsb25nOltcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdfSxkYXlQZXJpb2RzOnthbTpcIkFNXCIscG06XCJQTVwifX0sY29wdGljOnttb250aHM6e25hcnJvdzpbXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCIxMFwiLFwiMTFcIixcIjEyXCIsXCIxM1wiXSxzaG9ydDpbXCJUb3V0XCIsXCJCYWJhXCIsXCJIYXRvclwiLFwiS2lhaGtcIixcIlRvYmFcIixcIkFtc2hpclwiLFwiQmFyYW1oYXRcIixcIkJhcmFtb3VkYVwiLFwiQmFzaGFuc1wiLFwiUGFvbmFcIixcIkVwZXBcIixcIk1lc3JhXCIsXCJOYXNpZVwiXSxsb25nOltcIlRvdXRcIixcIkJhYmFcIixcIkhhdG9yXCIsXCJLaWFoa1wiLFwiVG9iYVwiLFwiQW1zaGlyXCIsXCJCYXJhbWhhdFwiLFwiQmFyYW1vdWRhXCIsXCJCYXNoYW5zXCIsXCJQYW9uYVwiLFwiRXBlcFwiLFwiTWVzcmFcIixcIk5hc2llXCJdfSxkYXlzOntuYXJyb3c6W1wiU1wiLFwiTVwiLFwiVFwiLFwiV1wiLFwiVFwiLFwiRlwiLFwiU1wiXSxzaG9ydDpbXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIl0sbG9uZzpbXCJTdW5kYXlcIixcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiXX0sZXJhczp7bmFycm93OltcIkVSQTBcIixcIkVSQTFcIl0sc2hvcnQ6W1wiRVJBMFwiLFwiRVJBMVwiXSxsb25nOltcIkVSQTBcIixcIkVSQTFcIl19LGRheVBlcmlvZHM6e2FtOlwiQU1cIixwbTpcIlBNXCJ9fSxkYW5naTp7bW9udGhzOntuYXJyb3c6W1wiMVwiLFwiMlwiLFwiM1wiLFwiNFwiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiLFwiMTBcIixcIjExXCIsXCIxMlwiXSxzaG9ydDpbXCJNbzFcIixcIk1vMlwiLFwiTW8zXCIsXCJNbzRcIixcIk1vNVwiLFwiTW82XCIsXCJNbzdcIixcIk1vOFwiLFwiTW85XCIsXCJNbzEwXCIsXCJNbzExXCIsXCJNbzEyXCJdLGxvbmc6W1wiTW9udGgxXCIsXCJNb250aDJcIixcIk1vbnRoM1wiLFwiTW9udGg0XCIsXCJNb250aDVcIixcIk1vbnRoNlwiLFwiTW9udGg3XCIsXCJNb250aDhcIixcIk1vbnRoOVwiLFwiTW9udGgxMFwiLFwiTW9udGgxMVwiLFwiTW9udGgxMlwiXX0sZGF5czp7bmFycm93OltcIlNcIixcIk1cIixcIlRcIixcIldcIixcIlRcIixcIkZcIixcIlNcIl0sc2hvcnQ6W1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdLGxvbmc6W1wiU3VuZGF5XCIsXCJNb25kYXlcIixcIlR1ZXNkYXlcIixcIldlZG5lc2RheVwiLFwiVGh1cnNkYXlcIixcIkZyaWRheVwiLFwiU2F0dXJkYXlcIl19LGRheVBlcmlvZHM6e2FtOlwiQU1cIixwbTpcIlBNXCJ9fSxldGhpb3BpYzp7bW9udGhzOntuYXJyb3c6W1wiMVwiLFwiMlwiLFwiM1wiLFwiNFwiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiLFwiMTBcIixcIjExXCIsXCIxMlwiLFwiMTNcIl0sc2hvcnQ6W1wiTWVza2VyZW1cIixcIlRla2VtdFwiLFwiSGVkYXJcIixcIlRhaHNhc1wiLFwiVGVyXCIsXCJZZWthdGl0XCIsXCJNZWdhYml0XCIsXCJNaWF6aWFcIixcIkdlbmJvdFwiLFwiU2VuZVwiLFwiSGFtbGVcIixcIk5laGFzc2VcIixcIlBhZ3VtZW5cIl0sbG9uZzpbXCJNZXNrZXJlbVwiLFwiVGVrZW10XCIsXCJIZWRhclwiLFwiVGFoc2FzXCIsXCJUZXJcIixcIllla2F0aXRcIixcIk1lZ2FiaXRcIixcIk1pYXppYVwiLFwiR2VuYm90XCIsXCJTZW5lXCIsXCJIYW1sZVwiLFwiTmVoYXNzZVwiLFwiUGFndW1lblwiXX0sZGF5czp7bmFycm93OltcIlNcIixcIk1cIixcIlRcIixcIldcIixcIlRcIixcIkZcIixcIlNcIl0sc2hvcnQ6W1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdLGxvbmc6W1wiU3VuZGF5XCIsXCJNb25kYXlcIixcIlR1ZXNkYXlcIixcIldlZG5lc2RheVwiLFwiVGh1cnNkYXlcIixcIkZyaWRheVwiLFwiU2F0dXJkYXlcIl19LGVyYXM6e25hcnJvdzpbXCJFUkEwXCIsXCJFUkExXCJdLHNob3J0OltcIkVSQTBcIixcIkVSQTFcIl0sbG9uZzpbXCJFUkEwXCIsXCJFUkExXCJdfSxkYXlQZXJpb2RzOnthbTpcIkFNXCIscG06XCJQTVwifX0sZXRoaW9hYTp7bW9udGhzOntuYXJyb3c6W1wiMVwiLFwiMlwiLFwiM1wiLFwiNFwiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiLFwiMTBcIixcIjExXCIsXCIxMlwiLFwiMTNcIl0sc2hvcnQ6W1wiTWVza2VyZW1cIixcIlRla2VtdFwiLFwiSGVkYXJcIixcIlRhaHNhc1wiLFwiVGVyXCIsXCJZZWthdGl0XCIsXCJNZWdhYml0XCIsXCJNaWF6aWFcIixcIkdlbmJvdFwiLFwiU2VuZVwiLFwiSGFtbGVcIixcIk5laGFzc2VcIixcIlBhZ3VtZW5cIl0sbG9uZzpbXCJNZXNrZXJlbVwiLFwiVGVrZW10XCIsXCJIZWRhclwiLFwiVGFoc2FzXCIsXCJUZXJcIixcIllla2F0aXRcIixcIk1lZ2FiaXRcIixcIk1pYXppYVwiLFwiR2VuYm90XCIsXCJTZW5lXCIsXCJIYW1sZVwiLFwiTmVoYXNzZVwiLFwiUGFndW1lblwiXX0sZGF5czp7bmFycm93OltcIlNcIixcIk1cIixcIlRcIixcIldcIixcIlRcIixcIkZcIixcIlNcIl0sc2hvcnQ6W1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdLGxvbmc6W1wiU3VuZGF5XCIsXCJNb25kYXlcIixcIlR1ZXNkYXlcIixcIldlZG5lc2RheVwiLFwiVGh1cnNkYXlcIixcIkZyaWRheVwiLFwiU2F0dXJkYXlcIl19LGVyYXM6e25hcnJvdzpbXCJFUkEwXCJdLHNob3J0OltcIkVSQTBcIl0sbG9uZzpbXCJFUkEwXCJdfSxkYXlQZXJpb2RzOnthbTpcIkFNXCIscG06XCJQTVwifX0sZ2VuZXJpYzp7bW9udGhzOntuYXJyb3c6W1wiMVwiLFwiMlwiLFwiM1wiLFwiNFwiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiLFwiMTBcIixcIjExXCIsXCIxMlwiXSxzaG9ydDpbXCJNMDFcIixcIk0wMlwiLFwiTTAzXCIsXCJNMDRcIixcIk0wNVwiLFwiTTA2XCIsXCJNMDdcIixcIk0wOFwiLFwiTTA5XCIsXCJNMTBcIixcIk0xMVwiLFwiTTEyXCJdLGxvbmc6W1wiTTAxXCIsXCJNMDJcIixcIk0wM1wiLFwiTTA0XCIsXCJNMDVcIixcIk0wNlwiLFwiTTA3XCIsXCJNMDhcIixcIk0wOVwiLFwiTTEwXCIsXCJNMTFcIixcIk0xMlwiXX0sZGF5czp7bmFycm93OltcIlNcIixcIk1cIixcIlRcIixcIldcIixcIlRcIixcIkZcIixcIlNcIl0sc2hvcnQ6W1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdLGxvbmc6W1wiU3VuZGF5XCIsXCJNb25kYXlcIixcIlR1ZXNkYXlcIixcIldlZG5lc2RheVwiLFwiVGh1cnNkYXlcIixcIkZyaWRheVwiLFwiU2F0dXJkYXlcIl19LGVyYXM6e25hcnJvdzpbXCJFUkEwXCIsXCJFUkExXCJdLHNob3J0OltcIkVSQTBcIixcIkVSQTFcIl0sbG9uZzpbXCJFUkEwXCIsXCJFUkExXCJdfSxkYXlQZXJpb2RzOnthbTpcIkFNXCIscG06XCJQTVwifX0sZ3JlZ29yeTp7bW9udGhzOntuYXJyb3c6W1wiSlwiLFwiRlwiLFwiTVwiLFwiQVwiLFwiTVwiLFwiSlwiLFwiSlwiLFwiQVwiLFwiU1wiLFwiT1wiLFwiTlwiLFwiRFwiXSxzaG9ydDpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCJdLGxvbmc6W1wiSmFudWFyeVwiLFwiRmVicnVhcnlcIixcIk1hcmNoXCIsXCJBcHJpbFwiLFwiTWF5XCIsXCJKdW5lXCIsXCJKdWx5XCIsXCJBdWd1c3RcIixcIlNlcHRlbWJlclwiLFwiT2N0b2JlclwiLFwiTm92ZW1iZXJcIixcIkRlY2VtYmVyXCJdfSxkYXlzOntuYXJyb3c6W1wiU1wiLFwiTVwiLFwiVFwiLFwiV1wiLFwiVFwiLFwiRlwiLFwiU1wiXSxzaG9ydDpbXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIl0sbG9uZzpbXCJTdW5kYXlcIixcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiXX0sZXJhczp7bmFycm93OltcIkJcIixcIkFcIixcIkJDRVwiLFwiQ0VcIl0sc2hvcnQ6W1wiQkNcIixcIkFEXCIsXCJCQ0VcIixcIkNFXCJdLGxvbmc6W1wiQmVmb3JlIENocmlzdFwiLFwiQW5ubyBEb21pbmlcIixcIkJlZm9yZSBDb21tb24gRXJhXCIsXCJDb21tb24gRXJhXCJdfSxkYXlQZXJpb2RzOnthbTpcIkFNXCIscG06XCJQTVwifX0saGVicmV3Onttb250aHM6e25hcnJvdzpbXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCIxMFwiLFwiMTFcIixcIjEyXCIsXCIxM1wiLFwiN1wiXSxzaG9ydDpbXCJUaXNocmlcIixcIkhlc2h2YW5cIixcIktpc2xldlwiLFwiVGV2ZXRcIixcIlNoZXZhdFwiLFwiQWRhciBJXCIsXCJBZGFyXCIsXCJOaXNhblwiLFwiSXlhclwiLFwiU2l2YW5cIixcIlRhbXV6XCIsXCJBdlwiLFwiRWx1bFwiLFwiQWRhciBJSVwiXSxsb25nOltcIlRpc2hyaVwiLFwiSGVzaHZhblwiLFwiS2lzbGV2XCIsXCJUZXZldFwiLFwiU2hldmF0XCIsXCJBZGFyIElcIixcIkFkYXJcIixcIk5pc2FuXCIsXCJJeWFyXCIsXCJTaXZhblwiLFwiVGFtdXpcIixcIkF2XCIsXCJFbHVsXCIsXCJBZGFyIElJXCJdfSxkYXlzOntuYXJyb3c6W1wiU1wiLFwiTVwiLFwiVFwiLFwiV1wiLFwiVFwiLFwiRlwiLFwiU1wiXSxzaG9ydDpbXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIl0sbG9uZzpbXCJTdW5kYXlcIixcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiXX0sZXJhczp7bmFycm93OltcIkFNXCJdLHNob3J0OltcIkFNXCJdLGxvbmc6W1wiQU1cIl19LGRheVBlcmlvZHM6e2FtOlwiQU1cIixwbTpcIlBNXCJ9fSxpbmRpYW46e21vbnRoczp7bmFycm93OltcIjFcIixcIjJcIixcIjNcIixcIjRcIixcIjVcIixcIjZcIixcIjdcIixcIjhcIixcIjlcIixcIjEwXCIsXCIxMVwiLFwiMTJcIl0sc2hvcnQ6W1wiQ2hhaXRyYVwiLFwiVmFpc2FraGFcIixcIkp5YWlzdGhhXCIsXCJBc2FkaGFcIixcIlNyYXZhbmFcIixcIkJoYWRyYVwiLFwiQXN2aW5hXCIsXCJLYXJ0aWthXCIsXCJBZ3JhaGF5YW5hXCIsXCJQYXVzYVwiLFwiTWFnaGFcIixcIlBoYWxndW5hXCJdLGxvbmc6W1wiQ2hhaXRyYVwiLFwiVmFpc2FraGFcIixcIkp5YWlzdGhhXCIsXCJBc2FkaGFcIixcIlNyYXZhbmFcIixcIkJoYWRyYVwiLFwiQXN2aW5hXCIsXCJLYXJ0aWthXCIsXCJBZ3JhaGF5YW5hXCIsXCJQYXVzYVwiLFwiTWFnaGFcIixcIlBoYWxndW5hXCJdfSxkYXlzOntuYXJyb3c6W1wiU1wiLFwiTVwiLFwiVFwiLFwiV1wiLFwiVFwiLFwiRlwiLFwiU1wiXSxzaG9ydDpbXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIl0sbG9uZzpbXCJTdW5kYXlcIixcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiXX0sZXJhczp7bmFycm93OltcIlNha2FcIl0sc2hvcnQ6W1wiU2FrYVwiXSxsb25nOltcIlNha2FcIl19LGRheVBlcmlvZHM6e2FtOlwiQU1cIixwbTpcIlBNXCJ9fSxpc2xhbWljOnttb250aHM6e25hcnJvdzpbXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCIxMFwiLFwiMTFcIixcIjEyXCJdLHNob3J0OltcIk11aC5cIixcIlNhZi5cIixcIlJhYi4gSVwiLFwiUmFiLiBJSVwiLFwiSnVtLiBJXCIsXCJKdW0uIElJXCIsXCJSYWouXCIsXCJTaGEuXCIsXCJSYW0uXCIsXCJTaGF3LlwiLFwiRGh1yrtsLVEuXCIsXCJEaHXKu2wtSC5cIl0sbG9uZzpbXCJNdWhhcnJhbVwiLFwiU2FmYXJcIixcIlJhYmnKuyBJXCIsXCJSYWJpyrsgSUlcIixcIkp1bWFkYSBJXCIsXCJKdW1hZGEgSUlcIixcIlJhamFiXCIsXCJTaGHKu2JhblwiLFwiUmFtYWRhblwiLFwiU2hhd3dhbFwiLFwiRGh1yrtsLVFpyrtkYWhcIixcIkRodcq7bC1IaWpqYWhcIl19LGRheXM6e25hcnJvdzpbXCJTXCIsXCJNXCIsXCJUXCIsXCJXXCIsXCJUXCIsXCJGXCIsXCJTXCJdLHNob3J0OltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSxsb25nOltcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdfSxlcmFzOntuYXJyb3c6W1wiQUhcIl0sc2hvcnQ6W1wiQUhcIl0sbG9uZzpbXCJBSFwiXX0sZGF5UGVyaW9kczp7YW06XCJBTVwiLHBtOlwiUE1cIn19LGlzbGFtaWNjOnttb250aHM6e25hcnJvdzpbXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCIxMFwiLFwiMTFcIixcIjEyXCJdLHNob3J0OltcIk11aC5cIixcIlNhZi5cIixcIlJhYi4gSVwiLFwiUmFiLiBJSVwiLFwiSnVtLiBJXCIsXCJKdW0uIElJXCIsXCJSYWouXCIsXCJTaGEuXCIsXCJSYW0uXCIsXCJTaGF3LlwiLFwiRGh1yrtsLVEuXCIsXCJEaHXKu2wtSC5cIl0sbG9uZzpbXCJNdWhhcnJhbVwiLFwiU2FmYXJcIixcIlJhYmnKuyBJXCIsXCJSYWJpyrsgSUlcIixcIkp1bWFkYSBJXCIsXCJKdW1hZGEgSUlcIixcIlJhamFiXCIsXCJTaGHKu2JhblwiLFwiUmFtYWRhblwiLFwiU2hhd3dhbFwiLFwiRGh1yrtsLVFpyrtkYWhcIixcIkRodcq7bC1IaWpqYWhcIl19LGRheXM6e25hcnJvdzpbXCJTXCIsXCJNXCIsXCJUXCIsXCJXXCIsXCJUXCIsXCJGXCIsXCJTXCJdLHNob3J0OltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSxsb25nOltcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdfSxlcmFzOntuYXJyb3c6W1wiQUhcIl0sc2hvcnQ6W1wiQUhcIl0sbG9uZzpbXCJBSFwiXX0sZGF5UGVyaW9kczp7YW06XCJBTVwiLHBtOlwiUE1cIn19LGphcGFuZXNlOnttb250aHM6e25hcnJvdzpbXCJKXCIsXCJGXCIsXCJNXCIsXCJBXCIsXCJNXCIsXCJKXCIsXCJKXCIsXCJBXCIsXCJTXCIsXCJPXCIsXCJOXCIsXCJEXCJdLHNob3J0OltcIkphblwiLFwiRmViXCIsXCJNYXJcIixcIkFwclwiLFwiTWF5XCIsXCJKdW5cIixcIkp1bFwiLFwiQXVnXCIsXCJTZXBcIixcIk9jdFwiLFwiTm92XCIsXCJEZWNcIl0sbG9uZzpbXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl19LGRheXM6e25hcnJvdzpbXCJTXCIsXCJNXCIsXCJUXCIsXCJXXCIsXCJUXCIsXCJGXCIsXCJTXCJdLHNob3J0OltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSxsb25nOltcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdfSxlcmFzOntuYXJyb3c6W1wiVGFpa2EgKDY0NeKAkzY1MClcIixcIkhha3VjaGkgKDY1MOKAkzY3MSlcIixcIkhha3VoxY0gKDY3MuKAkzY4NilcIixcIlNodWNoxY0gKDY4NuKAkzcwMSlcIixcIlRhaWjFjSAoNzAx4oCTNzA0KVwiLFwiS2VpdW4gKDcwNOKAkzcwOClcIixcIldhZMWNICg3MDjigJM3MTUpXCIsXCJSZWlraSAoNzE14oCTNzE3KVwiLFwiWcWNcsWNICg3MTfigJM3MjQpXCIsXCJKaW5raSAoNzI04oCTNzI5KVwiLFwiVGVucHnFjSAoNzI54oCTNzQ5KVwiLFwiVGVucHnFjS1rYW1wxY0gKDc0OS03NDkpXCIsXCJUZW5wecWNLXNoxY1oxY0gKDc0OS03NTcpXCIsXCJUZW5wecWNLWjFjWppICg3NTctNzY1KVwiLFwiVGVucHnFjS1qaW5nbyAoNzY1LTc2NylcIixcIkppbmdvLWtlaXVuICg3NjctNzcwKVwiLFwiSMWNa2kgKDc3MOKAkzc4MClcIixcIlRlbi3FjSAoNzgxLTc4MilcIixcIkVucnlha3UgKDc4MuKAkzgwNilcIixcIkRhaWTFjSAoODA24oCTODEwKVwiLFwiS8WNbmluICg4MTDigJM4MjQpXCIsXCJUZW5jaMWNICg4MjTigJM4MzQpXCIsXCJKxY13YSAoODM04oCTODQ4KVwiLFwiS2FqxY0gKDg0OOKAkzg1MSlcIixcIk5pbmp1ICg4NTHigJM4NTQpXCIsXCJTYWlrxY0gKDg1NOKAkzg1NylcIixcIlRlbi1hbiAoODU3LTg1OSlcIixcIkrFjWdhbiAoODU54oCTODc3KVwiLFwiR2FuZ3nFjSAoODc34oCTODg1KVwiLFwiTmlubmEgKDg4NeKAkzg4OSlcIixcIkthbnB5xY0gKDg4OeKAkzg5OClcIixcIlNoxY10YWkgKDg5OOKAkzkwMSlcIixcIkVuZ2kgKDkwMeKAkzkyMylcIixcIkVuY2jFjSAoOTIz4oCTOTMxKVwiLFwiSsWNaGVpICg5MzHigJM5MzgpXCIsXCJUZW5necWNICg5MzjigJM5NDcpXCIsXCJUZW5yeWFrdSAoOTQ34oCTOTU3KVwiLFwiVGVudG9rdSAoOTU34oCTOTYxKVwiLFwixYx3YSAoOTYx4oCTOTY0KVwiLFwiS8WNaMWNICg5NjTigJM5NjgpXCIsXCJBbm5hICg5NjjigJM5NzApXCIsXCJUZW5yb2t1ICg5NzDigJM5NzMpXCIsXCJUZW7igJllbiAoOTcz4oCTOTc2KVwiLFwiSsWNZ2VuICg5NzbigJM5NzgpXCIsXCJUZW5nZW4gKDk3OOKAkzk4MylcIixcIkVpa2FuICg5ODPigJM5ODUpXCIsXCJLYW5uYSAoOTg14oCTOTg3KVwiLFwiRWllbiAoOTg34oCTOTg5KVwiLFwiRWlzbyAoOTg54oCTOTkwKVwiLFwiU2jFjXJ5YWt1ICg5OTDigJM5OTUpXCIsXCJDaMWNdG9rdSAoOTk14oCTOTk5KVwiLFwiQ2jFjWjFjSAoOTk54oCTMTAwNClcIixcIkthbmvFjSAoMTAwNOKAkzEwMTIpXCIsXCJDaMWNd2EgKDEwMTLigJMxMDE3KVwiLFwiS2FubmluICgxMDE34oCTMTAyMSlcIixcIkppYW4gKDEwMjHigJMxMDI0KVwiLFwiTWFuanUgKDEwMjTigJMxMDI4KVwiLFwiQ2jFjWdlbiAoMTAyOOKAkzEwMzcpXCIsXCJDaMWNcnlha3UgKDEwMzfigJMxMDQwKVwiLFwiQ2jFjWt5xasgKDEwNDDigJMxMDQ0KVwiLFwiS2FudG9rdSAoMTA0NOKAkzEwNDYpXCIsXCJFaXNoxY0gKDEwNDbigJMxMDUzKVwiLFwiVGVuZ2kgKDEwNTPigJMxMDU4KVwiLFwiS8WNaGVpICgxMDU44oCTMTA2NSlcIixcIkppcnlha3UgKDEwNjXigJMxMDY5KVwiLFwiRW5recWrICgxMDY54oCTMTA3NClcIixcIlNoxY1obyAoMTA3NOKAkzEwNzcpXCIsXCJTaMWNcnlha3UgKDEwNzfigJMxMDgxKVwiLFwiRWloxY0gKDEwODHigJMxMDg0KVwiLFwixYx0b2t1ICgxMDg04oCTMTA4NylcIixcIkthbmppICgxMDg34oCTMTA5NClcIixcIkthaMWNICgxMDk04oCTMTA5NilcIixcIkVpY2jFjSAoMTA5NuKAkzEwOTcpXCIsXCJKxY10b2t1ICgxMDk34oCTMTA5OSlcIixcIkvFjXdhICgxMDk54oCTMTEwNClcIixcIkNoxY1qaSAoMTEwNOKAkzExMDYpXCIsXCJLYXNoxY0gKDExMDbigJMxMTA4KVwiLFwiVGVubmluICgxMTA44oCTMTExMClcIixcIlRlbi1laSAoMTExMC0xMTEzKVwiLFwiRWlrecWrICgxMTEz4oCTMTExOClcIixcIkdlbuKAmWVpICgxMTE44oCTMTEyMClcIixcIkjFjWFuICgxMTIw4oCTMTEyNClcIixcIlRlbmppICgxMTI04oCTMTEyNilcIixcIkRhaWppICgxMTI24oCTMTEzMSlcIixcIlRlbnNoxY0gKDExMzHigJMxMTMyKVwiLFwiQ2jFjXNoxY0gKDExMzLigJMxMTM1KVwiLFwiSMWNZW4gKDExMzXigJMxMTQxKVwiLFwiRWlqaSAoMTE0MeKAkzExNDIpXCIsXCJLxY1qaSAoMTE0MuKAkzExNDQpXCIsXCJUZW7igJl5xY0gKDExNDTigJMxMTQ1KVwiLFwiS3nFq2FuICgxMTQ14oCTMTE1MSlcIixcIk5pbnBlaSAoMTE1MeKAkzExNTQpXCIsXCJLecWranUgKDExNTTigJMxMTU2KVwiLFwiSMWNZ2VuICgxMTU24oCTMTE1OSlcIixcIkhlaWppICgxMTU54oCTMTE2MClcIixcIkVpcnlha3UgKDExNjDigJMxMTYxKVwiLFwixYxobyAoMTE2MeKAkzExNjMpXCIsXCJDaMWNa2FuICgxMTYz4oCTMTE2NSlcIixcIkVpbWFuICgxMTY14oCTMTE2NilcIixcIk5pbuKAmWFuICgxMTY24oCTMTE2OSlcIixcIkthxY0gKDExNjnigJMxMTcxKVwiLFwiU2jFjWFuICgxMTcx4oCTMTE3NSlcIixcIkFuZ2VuICgxMTc14oCTMTE3NylcIixcIkppc2jFjSAoMTE3N+KAkzExODEpXCIsXCJZxY13YSAoMTE4MeKAkzExODIpXCIsXCJKdWVpICgxMTgy4oCTMTE4NClcIixcIkdlbnJ5YWt1ICgxMTg04oCTMTE4NSlcIixcIkJ1bmppICgxMTg14oCTMTE5MClcIixcIktlbmt5xasgKDExOTDigJMxMTk5KVwiLFwiU2jFjWppICgxMTk54oCTMTIwMSlcIixcIktlbm5pbiAoMTIwMeKAkzEyMDQpXCIsXCJHZW5recWrICgxMjA04oCTMTIwNilcIixcIktlbuKAmWVpICgxMjA24oCTMTIwNylcIixcIkrFjWdlbiAoMTIwN+KAkzEyMTEpXCIsXCJLZW5yeWFrdSAoMTIxMeKAkzEyMTMpXCIsXCJLZW5wxY0gKDEyMTPigJMxMjE5KVwiLFwiSsWNa3nFqyAoMTIxOeKAkzEyMjIpXCIsXCJKxY3FjSAoMTIyMuKAkzEyMjQpXCIsXCJHZW5uaW4gKDEyMjTigJMxMjI1KVwiLFwiS2Fyb2t1ICgxMjI14oCTMTIyNylcIixcIkFudGVpICgxMjI34oCTMTIyOSlcIixcIkthbmtpICgxMjI54oCTMTIzMilcIixcIkrFjWVpICgxMjMy4oCTMTIzMylcIixcIlRlbnB1a3UgKDEyMzPigJMxMjM0KVwiLFwiQnVucnlha3UgKDEyMzTigJMxMjM1KVwiLFwiS2F0ZWkgKDEyMzXigJMxMjM4KVwiLFwiUnlha3VuaW4gKDEyMzjigJMxMjM5KVwiLFwiRW7igJnFjSAoMTIzOeKAkzEyNDApXCIsXCJOaW5qaSAoMTI0MOKAkzEyNDMpXCIsXCJLYW5nZW4gKDEyNDPigJMxMjQ3KVwiLFwiSMWNamkgKDEyNDfigJMxMjQ5KVwiLFwiS2VuY2jFjSAoMTI0OeKAkzEyNTYpXCIsXCJLxY1nZW4gKDEyNTbigJMxMjU3KVwiLFwiU2jFjWthICgxMjU34oCTMTI1OSlcIixcIlNoxY1nZW4gKDEyNTnigJMxMjYwKVwiLFwiQnVu4oCZxY0gKDEyNjDigJMxMjYxKVwiLFwiS8WNY2jFjSAoMTI2MeKAkzEyNjQpXCIsXCJCdW7igJllaSAoMTI2NOKAkzEyNzUpXCIsXCJLZW5qaSAoMTI3NeKAkzEyNzgpXCIsXCJLxY1hbiAoMTI3OOKAkzEyODgpXCIsXCJTaMWNxY0gKDEyODjigJMxMjkzKVwiLFwiRWluaW4gKDEyOTPigJMxMjk5KVwiLFwiU2jFjWFuICgxMjk54oCTMTMwMilcIixcIktlbmdlbiAoMTMwMuKAkzEzMDMpXCIsXCJLYWdlbiAoMTMwM+KAkzEzMDYpXCIsXCJUb2t1amkgKDEzMDbigJMxMzA4KVwiLFwiRW5recWNICgxMzA44oCTMTMxMSlcIixcIsWMY2jFjSAoMTMxMeKAkzEzMTIpXCIsXCJTaMWNd2EgKDEzMTLigJMxMzE3KVwiLFwiQnVucMWNICgxMzE34oCTMTMxOSlcIixcIkdlbsWNICgxMzE54oCTMTMyMSlcIixcIkdlbmvFjSAoMTMyMeKAkzEzMjQpXCIsXCJTaMWNY2jFqyAoMTMyNOKAkzEzMjYpXCIsXCJLYXJ5YWt1ICgxMzI24oCTMTMyOSlcIixcIkdlbnRva3UgKDEzMjnigJMxMzMxKVwiLFwiR2Vua8WNICgxMzMx4oCTMTMzNClcIixcIktlbm11ICgxMzM04oCTMTMzNilcIixcIkVuZ2VuICgxMzM24oCTMTM0MClcIixcIkvFjWtva3UgKDEzNDDigJMxMzQ2KVwiLFwiU2jFjWhlaSAoMTM0NuKAkzEzNzApXCIsXCJLZW50b2t1ICgxMzcw4oCTMTM3MilcIixcIkJ1bmNoxasgKDEzNzLigJMxMzc1KVwiLFwiVGVuanUgKDEzNzXigJMxMzc5KVwiLFwiS8WNcnlha3UgKDEzNznigJMxMzgxKVwiLFwiS8WNd2EgKDEzODHigJMxMzg0KVwiLFwiR2VuY2jFqyAoMTM4NOKAkzEzOTIpXCIsXCJNZWl0b2t1ICgxMzg04oCTMTM4NylcIixcIktha2VpICgxMzg34oCTMTM4OSlcIixcIkvFjcWNICgxMzg54oCTMTM5MClcIixcIk1laXRva3UgKDEzOTDigJMxMzk0KVwiLFwixYxlaSAoMTM5NOKAkzE0MjgpXCIsXCJTaMWNY2jFjSAoMTQyOOKAkzE0MjkpXCIsXCJFaWt5xY0gKDE0MjnigJMxNDQxKVwiLFwiS2FraXRzdSAoMTQ0MeKAkzE0NDQpXCIsXCJCdW7igJlhbiAoMTQ0NOKAkzE0NDkpXCIsXCJIxY10b2t1ICgxNDQ54oCTMTQ1MilcIixcIkt5xY10b2t1ICgxNDUy4oCTMTQ1NSlcIixcIkvFjXNoxY0gKDE0NTXigJMxNDU3KVwiLFwiQ2jFjXJva3UgKDE0NTfigJMxNDYwKVwiLFwiS2Fuc2jFjSAoMTQ2MOKAkzE0NjYpXCIsXCJCdW5zaMWNICgxNDY24oCTMTQ2NylcIixcIsWMbmluICgxNDY34oCTMTQ2OSlcIixcIkJ1bm1laSAoMTQ2OeKAkzE0ODcpXCIsXCJDaMWNa3nFjSAoMTQ4N+KAkzE0ODkpXCIsXCJFbnRva3UgKDE0ODnigJMxNDkyKVwiLFwiTWVpxY0gKDE0OTLigJMxNTAxKVwiLFwiQnVua2kgKDE1MDHigJMxNTA0KVwiLFwiRWlzaMWNICgxNTA04oCTMTUyMSlcIixcIlRhaWVpICgxNTIx4oCTMTUyOClcIixcIkt5xY1yb2t1ICgxNTI44oCTMTUzMilcIixcIlRlbmJ1biAoMTUzMuKAkzE1NTUpXCIsXCJLxY1qaSAoMTU1NeKAkzE1NTgpXCIsXCJFaXJva3UgKDE1NTjigJMxNTcwKVwiLFwiR2Vua2kgKDE1NzDigJMxNTczKVwiLFwiVGVuc2jFjSAoMTU3M+KAkzE1OTIpXCIsXCJCdW5yb2t1ICgxNTky4oCTMTU5NilcIixcIktlaWNoxY0gKDE1OTbigJMxNjE1KVwiLFwiR2VubmEgKDE2MTXigJMxNjI0KVwiLFwiS2Fu4oCZZWkgKDE2MjTigJMxNjQ0KVwiLFwiU2jFjWhvICgxNjQ04oCTMTY0OClcIixcIktlaWFuICgxNjQ44oCTMTY1MilcIixcIkrFjcWNICgxNjUy4oCTMTY1NSlcIixcIk1laXJla2kgKDE2NTXigJMxNjU4KVwiLFwiTWFuamkgKDE2NTjigJMxNjYxKVwiLFwiS2FuYnVuICgxNjYx4oCTMTY3MylcIixcIkVucMWNICgxNjcz4oCTMTY4MSlcIixcIlRlbm5hICgxNjgx4oCTMTY4NClcIixcIkrFjWt5xY0gKDE2ODTigJMxNjg4KVwiLFwiR2Vucm9rdSAoMTY4OOKAkzE3MDQpXCIsXCJIxY1laSAoMTcwNOKAkzE3MTEpXCIsXCJTaMWNdG9rdSAoMTcxMeKAkzE3MTYpXCIsXCJLecWNaMWNICgxNzE24oCTMTczNilcIixcIkdlbmJ1biAoMTczNuKAkzE3NDEpXCIsXCJLYW5wxY0gKDE3NDHigJMxNzQ0KVwiLFwiRW5recWNICgxNzQ04oCTMTc0OClcIixcIkthbuKAmWVuICgxNzQ44oCTMTc1MSlcIixcIkjFjXJla2kgKDE3NTHigJMxNzY0KVwiLFwiTWVpd2EgKDE3NjTigJMxNzcyKVwiLFwiQW7igJllaSAoMTc3MuKAkzE3ODEpXCIsXCJUZW5tZWkgKDE3ODHigJMxNzg5KVwiLFwiS2Fuc2VpICgxNzg54oCTMTgwMSlcIixcIkt5xY13YSAoMTgwMeKAkzE4MDQpXCIsXCJCdW5rYSAoMTgwNOKAkzE4MTgpXCIsXCJCdW5zZWkgKDE4MTjigJMxODMwKVwiLFwiVGVucMWNICgxODMw4oCTMTg0NClcIixcIkvFjWthICgxODQ04oCTMTg0OClcIixcIkthZWkgKDE4NDjigJMxODU0KVwiLFwiQW5zZWkgKDE4NTTigJMxODYwKVwiLFwiTWFu4oCZZW4gKDE4NjDigJMxODYxKVwiLFwiQnVua3nFqyAoMTg2MeKAkzE4NjQpXCIsXCJHZW5qaSAoMTg2NOKAkzE4NjUpXCIsXCJLZWnFjSAoMTg2NeKAkzE4NjgpXCIsXCJNXCIsXCJUXCIsXCJTXCIsXCJIXCJdLHNob3J0OltcIlRhaWthICg2NDXigJM2NTApXCIsXCJIYWt1Y2hpICg2NTDigJM2NzEpXCIsXCJIYWt1aMWNICg2NzLigJM2ODYpXCIsXCJTaHVjaMWNICg2ODbigJM3MDEpXCIsXCJUYWloxY0gKDcwMeKAkzcwNClcIixcIktlaXVuICg3MDTigJM3MDgpXCIsXCJXYWTFjSAoNzA44oCTNzE1KVwiLFwiUmVpa2kgKDcxNeKAkzcxNylcIixcIlnFjXLFjSAoNzE34oCTNzI0KVwiLFwiSmlua2kgKDcyNOKAkzcyOSlcIixcIlRlbnB5xY0gKDcyOeKAkzc0OSlcIixcIlRlbnB5xY0ta2FtcMWNICg3NDktNzQ5KVwiLFwiVGVucHnFjS1zaMWNaMWNICg3NDktNzU3KVwiLFwiVGVucHnFjS1oxY1qaSAoNzU3LTc2NSlcIixcIlRlbnB5xY0tamluZ28gKDc2NS03NjcpXCIsXCJKaW5nby1rZWl1biAoNzY3LTc3MClcIixcIkjFjWtpICg3NzDigJM3ODApXCIsXCJUZW4txY0gKDc4MS03ODIpXCIsXCJFbnJ5YWt1ICg3ODLigJM4MDYpXCIsXCJEYWlkxY0gKDgwNuKAkzgxMClcIixcIkvFjW5pbiAoODEw4oCTODI0KVwiLFwiVGVuY2jFjSAoODI04oCTODM0KVwiLFwiSsWNd2EgKDgzNOKAkzg0OClcIixcIkthasWNICg4NDjigJM4NTEpXCIsXCJOaW5qdSAoODUx4oCTODU0KVwiLFwiU2Fpa8WNICg4NTTigJM4NTcpXCIsXCJUZW4tYW4gKDg1Ny04NTkpXCIsXCJKxY1nYW4gKDg1OeKAkzg3NylcIixcIkdhbmd5xY0gKDg3N+KAkzg4NSlcIixcIk5pbm5hICg4ODXigJM4ODkpXCIsXCJLYW5wecWNICg4ODnigJM4OTgpXCIsXCJTaMWNdGFpICg4OTjigJM5MDEpXCIsXCJFbmdpICg5MDHigJM5MjMpXCIsXCJFbmNoxY0gKDkyM+KAkzkzMSlcIixcIkrFjWhlaSAoOTMx4oCTOTM4KVwiLFwiVGVuZ3nFjSAoOTM44oCTOTQ3KVwiLFwiVGVucnlha3UgKDk0N+KAkzk1NylcIixcIlRlbnRva3UgKDk1N+KAkzk2MSlcIixcIsWMd2EgKDk2MeKAkzk2NClcIixcIkvFjWjFjSAoOTY04oCTOTY4KVwiLFwiQW5uYSAoOTY44oCTOTcwKVwiLFwiVGVucm9rdSAoOTcw4oCTOTczKVwiLFwiVGVu4oCZZW4gKDk3M+KAkzk3NilcIixcIkrFjWdlbiAoOTc24oCTOTc4KVwiLFwiVGVuZ2VuICg5NzjigJM5ODMpXCIsXCJFaWthbiAoOTgz4oCTOTg1KVwiLFwiS2FubmEgKDk4NeKAkzk4NylcIixcIkVpZW4gKDk4N+KAkzk4OSlcIixcIkVpc28gKDk4OeKAkzk5MClcIixcIlNoxY1yeWFrdSAoOTkw4oCTOTk1KVwiLFwiQ2jFjXRva3UgKDk5NeKAkzk5OSlcIixcIkNoxY1oxY0gKDk5OeKAkzEwMDQpXCIsXCJLYW5rxY0gKDEwMDTigJMxMDEyKVwiLFwiQ2jFjXdhICgxMDEy4oCTMTAxNylcIixcIkthbm5pbiAoMTAxN+KAkzEwMjEpXCIsXCJKaWFuICgxMDIx4oCTMTAyNClcIixcIk1hbmp1ICgxMDI04oCTMTAyOClcIixcIkNoxY1nZW4gKDEwMjjigJMxMDM3KVwiLFwiQ2jFjXJ5YWt1ICgxMDM34oCTMTA0MClcIixcIkNoxY1recWrICgxMDQw4oCTMTA0NClcIixcIkthbnRva3UgKDEwNDTigJMxMDQ2KVwiLFwiRWlzaMWNICgxMDQ24oCTMTA1MylcIixcIlRlbmdpICgxMDUz4oCTMTA1OClcIixcIkvFjWhlaSAoMTA1OOKAkzEwNjUpXCIsXCJKaXJ5YWt1ICgxMDY14oCTMTA2OSlcIixcIkVua3nFqyAoMTA2OeKAkzEwNzQpXCIsXCJTaMWNaG8gKDEwNzTigJMxMDc3KVwiLFwiU2jFjXJ5YWt1ICgxMDc34oCTMTA4MSlcIixcIkVpaMWNICgxMDgx4oCTMTA4NClcIixcIsWMdG9rdSAoMTA4NOKAkzEwODcpXCIsXCJLYW5qaSAoMTA4N+KAkzEwOTQpXCIsXCJLYWjFjSAoMTA5NOKAkzEwOTYpXCIsXCJFaWNoxY0gKDEwOTbigJMxMDk3KVwiLFwiSsWNdG9rdSAoMTA5N+KAkzEwOTkpXCIsXCJLxY13YSAoMTA5OeKAkzExMDQpXCIsXCJDaMWNamkgKDExMDTigJMxMTA2KVwiLFwiS2FzaMWNICgxMTA24oCTMTEwOClcIixcIlRlbm5pbiAoMTEwOOKAkzExMTApXCIsXCJUZW4tZWkgKDExMTAtMTExMylcIixcIkVpa3nFqyAoMTExM+KAkzExMTgpXCIsXCJHZW7igJllaSAoMTExOOKAkzExMjApXCIsXCJIxY1hbiAoMTEyMOKAkzExMjQpXCIsXCJUZW5qaSAoMTEyNOKAkzExMjYpXCIsXCJEYWlqaSAoMTEyNuKAkzExMzEpXCIsXCJUZW5zaMWNICgxMTMx4oCTMTEzMilcIixcIkNoxY1zaMWNICgxMTMy4oCTMTEzNSlcIixcIkjFjWVuICgxMTM14oCTMTE0MSlcIixcIkVpamkgKDExNDHigJMxMTQyKVwiLFwiS8WNamkgKDExNDLigJMxMTQ0KVwiLFwiVGVu4oCZecWNICgxMTQ04oCTMTE0NSlcIixcIkt5xathbiAoMTE0NeKAkzExNTEpXCIsXCJOaW5wZWkgKDExNTHigJMxMTU0KVwiLFwiS3nFq2p1ICgxMTU04oCTMTE1NilcIixcIkjFjWdlbiAoMTE1NuKAkzExNTkpXCIsXCJIZWlqaSAoMTE1OeKAkzExNjApXCIsXCJFaXJ5YWt1ICgxMTYw4oCTMTE2MSlcIixcIsWMaG8gKDExNjHigJMxMTYzKVwiLFwiQ2jFjWthbiAoMTE2M+KAkzExNjUpXCIsXCJFaW1hbiAoMTE2NeKAkzExNjYpXCIsXCJOaW7igJlhbiAoMTE2NuKAkzExNjkpXCIsXCJLYcWNICgxMTY54oCTMTE3MSlcIixcIlNoxY1hbiAoMTE3MeKAkzExNzUpXCIsXCJBbmdlbiAoMTE3NeKAkzExNzcpXCIsXCJKaXNoxY0gKDExNzfigJMxMTgxKVwiLFwiWcWNd2EgKDExODHigJMxMTgyKVwiLFwiSnVlaSAoMTE4MuKAkzExODQpXCIsXCJHZW5yeWFrdSAoMTE4NOKAkzExODUpXCIsXCJCdW5qaSAoMTE4NeKAkzExOTApXCIsXCJLZW5recWrICgxMTkw4oCTMTE5OSlcIixcIlNoxY1qaSAoMTE5OeKAkzEyMDEpXCIsXCJLZW5uaW4gKDEyMDHigJMxMjA0KVwiLFwiR2Vua3nFqyAoMTIwNOKAkzEyMDYpXCIsXCJLZW7igJllaSAoMTIwNuKAkzEyMDcpXCIsXCJKxY1nZW4gKDEyMDfigJMxMjExKVwiLFwiS2Vucnlha3UgKDEyMTHigJMxMjEzKVwiLFwiS2VucMWNICgxMjEz4oCTMTIxOSlcIixcIkrFjWt5xasgKDEyMTnigJMxMjIyKVwiLFwiSsWNxY0gKDEyMjLigJMxMjI0KVwiLFwiR2VubmluICgxMjI04oCTMTIyNSlcIixcIkthcm9rdSAoMTIyNeKAkzEyMjcpXCIsXCJBbnRlaSAoMTIyN+KAkzEyMjkpXCIsXCJLYW5raSAoMTIyOeKAkzEyMzIpXCIsXCJKxY1laSAoMTIzMuKAkzEyMzMpXCIsXCJUZW5wdWt1ICgxMjMz4oCTMTIzNClcIixcIkJ1bnJ5YWt1ICgxMjM04oCTMTIzNSlcIixcIkthdGVpICgxMjM14oCTMTIzOClcIixcIlJ5YWt1bmluICgxMjM44oCTMTIzOSlcIixcIkVu4oCZxY0gKDEyMznigJMxMjQwKVwiLFwiTmluamkgKDEyNDDigJMxMjQzKVwiLFwiS2FuZ2VuICgxMjQz4oCTMTI0NylcIixcIkjFjWppICgxMjQ34oCTMTI0OSlcIixcIktlbmNoxY0gKDEyNDnigJMxMjU2KVwiLFwiS8WNZ2VuICgxMjU24oCTMTI1NylcIixcIlNoxY1rYSAoMTI1N+KAkzEyNTkpXCIsXCJTaMWNZ2VuICgxMjU54oCTMTI2MClcIixcIkJ1buKAmcWNICgxMjYw4oCTMTI2MSlcIixcIkvFjWNoxY0gKDEyNjHigJMxMjY0KVwiLFwiQnVu4oCZZWkgKDEyNjTigJMxMjc1KVwiLFwiS2VuamkgKDEyNzXigJMxMjc4KVwiLFwiS8WNYW4gKDEyNzjigJMxMjg4KVwiLFwiU2jFjcWNICgxMjg44oCTMTI5MylcIixcIkVpbmluICgxMjkz4oCTMTI5OSlcIixcIlNoxY1hbiAoMTI5OeKAkzEzMDIpXCIsXCJLZW5nZW4gKDEzMDLigJMxMzAzKVwiLFwiS2FnZW4gKDEzMDPigJMxMzA2KVwiLFwiVG9rdWppICgxMzA24oCTMTMwOClcIixcIkVua3nFjSAoMTMwOOKAkzEzMTEpXCIsXCLFjGNoxY0gKDEzMTHigJMxMzEyKVwiLFwiU2jFjXdhICgxMzEy4oCTMTMxNylcIixcIkJ1bnDFjSAoMTMxN+KAkzEzMTkpXCIsXCJHZW7FjSAoMTMxOeKAkzEzMjEpXCIsXCJHZW5rxY0gKDEzMjHigJMxMzI0KVwiLFwiU2jFjWNoxasgKDEzMjTigJMxMzI2KVwiLFwiS2FyeWFrdSAoMTMyNuKAkzEzMjkpXCIsXCJHZW50b2t1ICgxMzI54oCTMTMzMSlcIixcIkdlbmvFjSAoMTMzMeKAkzEzMzQpXCIsXCJLZW5tdSAoMTMzNOKAkzEzMzYpXCIsXCJFbmdlbiAoMTMzNuKAkzEzNDApXCIsXCJLxY1rb2t1ICgxMzQw4oCTMTM0NilcIixcIlNoxY1oZWkgKDEzNDbigJMxMzcwKVwiLFwiS2VudG9rdSAoMTM3MOKAkzEzNzIpXCIsXCJCdW5jaMWrICgxMzcy4oCTMTM3NSlcIixcIlRlbmp1ICgxMzc14oCTMTM3OSlcIixcIkvFjXJ5YWt1ICgxMzc54oCTMTM4MSlcIixcIkvFjXdhICgxMzgx4oCTMTM4NClcIixcIkdlbmNoxasgKDEzODTigJMxMzkyKVwiLFwiTWVpdG9rdSAoMTM4NOKAkzEzODcpXCIsXCJLYWtlaSAoMTM4N+KAkzEzODkpXCIsXCJLxY3FjSAoMTM4OeKAkzEzOTApXCIsXCJNZWl0b2t1ICgxMzkw4oCTMTM5NClcIixcIsWMZWkgKDEzOTTigJMxNDI4KVwiLFwiU2jFjWNoxY0gKDE0MjjigJMxNDI5KVwiLFwiRWlrecWNICgxNDI54oCTMTQ0MSlcIixcIktha2l0c3UgKDE0NDHigJMxNDQ0KVwiLFwiQnVu4oCZYW4gKDE0NDTigJMxNDQ5KVwiLFwiSMWNdG9rdSAoMTQ0OeKAkzE0NTIpXCIsXCJLecWNdG9rdSAoMTQ1MuKAkzE0NTUpXCIsXCJLxY1zaMWNICgxNDU14oCTMTQ1NylcIixcIkNoxY1yb2t1ICgxNDU34oCTMTQ2MClcIixcIkthbnNoxY0gKDE0NjDigJMxNDY2KVwiLFwiQnVuc2jFjSAoMTQ2NuKAkzE0NjcpXCIsXCLFjG5pbiAoMTQ2N+KAkzE0NjkpXCIsXCJCdW5tZWkgKDE0NjnigJMxNDg3KVwiLFwiQ2jFjWt5xY0gKDE0ODfigJMxNDg5KVwiLFwiRW50b2t1ICgxNDg54oCTMTQ5MilcIixcIk1lacWNICgxNDky4oCTMTUwMSlcIixcIkJ1bmtpICgxNTAx4oCTMTUwNClcIixcIkVpc2jFjSAoMTUwNOKAkzE1MjEpXCIsXCJUYWllaSAoMTUyMeKAkzE1MjgpXCIsXCJLecWNcm9rdSAoMTUyOOKAkzE1MzIpXCIsXCJUZW5idW4gKDE1MzLigJMxNTU1KVwiLFwiS8WNamkgKDE1NTXigJMxNTU4KVwiLFwiRWlyb2t1ICgxNTU44oCTMTU3MClcIixcIkdlbmtpICgxNTcw4oCTMTU3MylcIixcIlRlbnNoxY0gKDE1NzPigJMxNTkyKVwiLFwiQnVucm9rdSAoMTU5MuKAkzE1OTYpXCIsXCJLZWljaMWNICgxNTk24oCTMTYxNSlcIixcIkdlbm5hICgxNjE14oCTMTYyNClcIixcIkthbuKAmWVpICgxNjI04oCTMTY0NClcIixcIlNoxY1obyAoMTY0NOKAkzE2NDgpXCIsXCJLZWlhbiAoMTY0OOKAkzE2NTIpXCIsXCJKxY3FjSAoMTY1MuKAkzE2NTUpXCIsXCJNZWlyZWtpICgxNjU14oCTMTY1OClcIixcIk1hbmppICgxNjU44oCTMTY2MSlcIixcIkthbmJ1biAoMTY2MeKAkzE2NzMpXCIsXCJFbnDFjSAoMTY3M+KAkzE2ODEpXCIsXCJUZW5uYSAoMTY4MeKAkzE2ODQpXCIsXCJKxY1recWNICgxNjg04oCTMTY4OClcIixcIkdlbnJva3UgKDE2ODjigJMxNzA0KVwiLFwiSMWNZWkgKDE3MDTigJMxNzExKVwiLFwiU2jFjXRva3UgKDE3MTHigJMxNzE2KVwiLFwiS3nFjWjFjSAoMTcxNuKAkzE3MzYpXCIsXCJHZW5idW4gKDE3MzbigJMxNzQxKVwiLFwiS2FucMWNICgxNzQx4oCTMTc0NClcIixcIkVua3nFjSAoMTc0NOKAkzE3NDgpXCIsXCJLYW7igJllbiAoMTc0OOKAkzE3NTEpXCIsXCJIxY1yZWtpICgxNzUx4oCTMTc2NClcIixcIk1laXdhICgxNzY04oCTMTc3MilcIixcIkFu4oCZZWkgKDE3NzLigJMxNzgxKVwiLFwiVGVubWVpICgxNzgx4oCTMTc4OSlcIixcIkthbnNlaSAoMTc4OeKAkzE4MDEpXCIsXCJLecWNd2EgKDE4MDHigJMxODA0KVwiLFwiQnVua2EgKDE4MDTigJMxODE4KVwiLFwiQnVuc2VpICgxODE44oCTMTgzMClcIixcIlRlbnDFjSAoMTgzMOKAkzE4NDQpXCIsXCJLxY1rYSAoMTg0NOKAkzE4NDgpXCIsXCJLYWVpICgxODQ44oCTMTg1NClcIixcIkFuc2VpICgxODU04oCTMTg2MClcIixcIk1hbuKAmWVuICgxODYw4oCTMTg2MSlcIixcIkJ1bmt5xasgKDE4NjHigJMxODY0KVwiLFwiR2VuamkgKDE4NjTigJMxODY1KVwiLFwiS2VpxY0gKDE4NjXigJMxODY4KVwiLFwiTWVpamlcIixcIlRhaXNoxY1cIixcIlNoxY13YVwiLFwiSGVpc2VpXCJdLGxvbmc6W1wiVGFpa2EgKDY0NeKAkzY1MClcIixcIkhha3VjaGkgKDY1MOKAkzY3MSlcIixcIkhha3VoxY0gKDY3MuKAkzY4NilcIixcIlNodWNoxY0gKDY4NuKAkzcwMSlcIixcIlRhaWjFjSAoNzAx4oCTNzA0KVwiLFwiS2VpdW4gKDcwNOKAkzcwOClcIixcIldhZMWNICg3MDjigJM3MTUpXCIsXCJSZWlraSAoNzE14oCTNzE3KVwiLFwiWcWNcsWNICg3MTfigJM3MjQpXCIsXCJKaW5raSAoNzI04oCTNzI5KVwiLFwiVGVucHnFjSAoNzI54oCTNzQ5KVwiLFwiVGVucHnFjS1rYW1wxY0gKDc0OS03NDkpXCIsXCJUZW5wecWNLXNoxY1oxY0gKDc0OS03NTcpXCIsXCJUZW5wecWNLWjFjWppICg3NTctNzY1KVwiLFwiVGVucHnFjS1qaW5nbyAoNzY1LTc2NylcIixcIkppbmdvLWtlaXVuICg3NjctNzcwKVwiLFwiSMWNa2kgKDc3MOKAkzc4MClcIixcIlRlbi3FjSAoNzgxLTc4MilcIixcIkVucnlha3UgKDc4MuKAkzgwNilcIixcIkRhaWTFjSAoODA24oCTODEwKVwiLFwiS8WNbmluICg4MTDigJM4MjQpXCIsXCJUZW5jaMWNICg4MjTigJM4MzQpXCIsXCJKxY13YSAoODM04oCTODQ4KVwiLFwiS2FqxY0gKDg0OOKAkzg1MSlcIixcIk5pbmp1ICg4NTHigJM4NTQpXCIsXCJTYWlrxY0gKDg1NOKAkzg1NylcIixcIlRlbi1hbiAoODU3LTg1OSlcIixcIkrFjWdhbiAoODU54oCTODc3KVwiLFwiR2FuZ3nFjSAoODc34oCTODg1KVwiLFwiTmlubmEgKDg4NeKAkzg4OSlcIixcIkthbnB5xY0gKDg4OeKAkzg5OClcIixcIlNoxY10YWkgKDg5OOKAkzkwMSlcIixcIkVuZ2kgKDkwMeKAkzkyMylcIixcIkVuY2jFjSAoOTIz4oCTOTMxKVwiLFwiSsWNaGVpICg5MzHigJM5MzgpXCIsXCJUZW5necWNICg5MzjigJM5NDcpXCIsXCJUZW5yeWFrdSAoOTQ34oCTOTU3KVwiLFwiVGVudG9rdSAoOTU34oCTOTYxKVwiLFwixYx3YSAoOTYx4oCTOTY0KVwiLFwiS8WNaMWNICg5NjTigJM5NjgpXCIsXCJBbm5hICg5NjjigJM5NzApXCIsXCJUZW5yb2t1ICg5NzDigJM5NzMpXCIsXCJUZW7igJllbiAoOTcz4oCTOTc2KVwiLFwiSsWNZ2VuICg5NzbigJM5NzgpXCIsXCJUZW5nZW4gKDk3OOKAkzk4MylcIixcIkVpa2FuICg5ODPigJM5ODUpXCIsXCJLYW5uYSAoOTg14oCTOTg3KVwiLFwiRWllbiAoOTg34oCTOTg5KVwiLFwiRWlzbyAoOTg54oCTOTkwKVwiLFwiU2jFjXJ5YWt1ICg5OTDigJM5OTUpXCIsXCJDaMWNdG9rdSAoOTk14oCTOTk5KVwiLFwiQ2jFjWjFjSAoOTk54oCTMTAwNClcIixcIkthbmvFjSAoMTAwNOKAkzEwMTIpXCIsXCJDaMWNd2EgKDEwMTLigJMxMDE3KVwiLFwiS2FubmluICgxMDE34oCTMTAyMSlcIixcIkppYW4gKDEwMjHigJMxMDI0KVwiLFwiTWFuanUgKDEwMjTigJMxMDI4KVwiLFwiQ2jFjWdlbiAoMTAyOOKAkzEwMzcpXCIsXCJDaMWNcnlha3UgKDEwMzfigJMxMDQwKVwiLFwiQ2jFjWt5xasgKDEwNDDigJMxMDQ0KVwiLFwiS2FudG9rdSAoMTA0NOKAkzEwNDYpXCIsXCJFaXNoxY0gKDEwNDbigJMxMDUzKVwiLFwiVGVuZ2kgKDEwNTPigJMxMDU4KVwiLFwiS8WNaGVpICgxMDU44oCTMTA2NSlcIixcIkppcnlha3UgKDEwNjXigJMxMDY5KVwiLFwiRW5recWrICgxMDY54oCTMTA3NClcIixcIlNoxY1obyAoMTA3NOKAkzEwNzcpXCIsXCJTaMWNcnlha3UgKDEwNzfigJMxMDgxKVwiLFwiRWloxY0gKDEwODHigJMxMDg0KVwiLFwixYx0b2t1ICgxMDg04oCTMTA4NylcIixcIkthbmppICgxMDg34oCTMTA5NClcIixcIkthaMWNICgxMDk04oCTMTA5NilcIixcIkVpY2jFjSAoMTA5NuKAkzEwOTcpXCIsXCJKxY10b2t1ICgxMDk34oCTMTA5OSlcIixcIkvFjXdhICgxMDk54oCTMTEwNClcIixcIkNoxY1qaSAoMTEwNOKAkzExMDYpXCIsXCJLYXNoxY0gKDExMDbigJMxMTA4KVwiLFwiVGVubmluICgxMTA44oCTMTExMClcIixcIlRlbi1laSAoMTExMC0xMTEzKVwiLFwiRWlrecWrICgxMTEz4oCTMTExOClcIixcIkdlbuKAmWVpICgxMTE44oCTMTEyMClcIixcIkjFjWFuICgxMTIw4oCTMTEyNClcIixcIlRlbmppICgxMTI04oCTMTEyNilcIixcIkRhaWppICgxMTI24oCTMTEzMSlcIixcIlRlbnNoxY0gKDExMzHigJMxMTMyKVwiLFwiQ2jFjXNoxY0gKDExMzLigJMxMTM1KVwiLFwiSMWNZW4gKDExMzXigJMxMTQxKVwiLFwiRWlqaSAoMTE0MeKAkzExNDIpXCIsXCJLxY1qaSAoMTE0MuKAkzExNDQpXCIsXCJUZW7igJl5xY0gKDExNDTigJMxMTQ1KVwiLFwiS3nFq2FuICgxMTQ14oCTMTE1MSlcIixcIk5pbnBlaSAoMTE1MeKAkzExNTQpXCIsXCJLecWranUgKDExNTTigJMxMTU2KVwiLFwiSMWNZ2VuICgxMTU24oCTMTE1OSlcIixcIkhlaWppICgxMTU54oCTMTE2MClcIixcIkVpcnlha3UgKDExNjDigJMxMTYxKVwiLFwixYxobyAoMTE2MeKAkzExNjMpXCIsXCJDaMWNa2FuICgxMTYz4oCTMTE2NSlcIixcIkVpbWFuICgxMTY14oCTMTE2NilcIixcIk5pbuKAmWFuICgxMTY24oCTMTE2OSlcIixcIkthxY0gKDExNjnigJMxMTcxKVwiLFwiU2jFjWFuICgxMTcx4oCTMTE3NSlcIixcIkFuZ2VuICgxMTc14oCTMTE3NylcIixcIkppc2jFjSAoMTE3N+KAkzExODEpXCIsXCJZxY13YSAoMTE4MeKAkzExODIpXCIsXCJKdWVpICgxMTgy4oCTMTE4NClcIixcIkdlbnJ5YWt1ICgxMTg04oCTMTE4NSlcIixcIkJ1bmppICgxMTg14oCTMTE5MClcIixcIktlbmt5xasgKDExOTDigJMxMTk5KVwiLFwiU2jFjWppICgxMTk54oCTMTIwMSlcIixcIktlbm5pbiAoMTIwMeKAkzEyMDQpXCIsXCJHZW5recWrICgxMjA04oCTMTIwNilcIixcIktlbuKAmWVpICgxMjA24oCTMTIwNylcIixcIkrFjWdlbiAoMTIwN+KAkzEyMTEpXCIsXCJLZW5yeWFrdSAoMTIxMeKAkzEyMTMpXCIsXCJLZW5wxY0gKDEyMTPigJMxMjE5KVwiLFwiSsWNa3nFqyAoMTIxOeKAkzEyMjIpXCIsXCJKxY3FjSAoMTIyMuKAkzEyMjQpXCIsXCJHZW5uaW4gKDEyMjTigJMxMjI1KVwiLFwiS2Fyb2t1ICgxMjI14oCTMTIyNylcIixcIkFudGVpICgxMjI34oCTMTIyOSlcIixcIkthbmtpICgxMjI54oCTMTIzMilcIixcIkrFjWVpICgxMjMy4oCTMTIzMylcIixcIlRlbnB1a3UgKDEyMzPigJMxMjM0KVwiLFwiQnVucnlha3UgKDEyMzTigJMxMjM1KVwiLFwiS2F0ZWkgKDEyMzXigJMxMjM4KVwiLFwiUnlha3VuaW4gKDEyMzjigJMxMjM5KVwiLFwiRW7igJnFjSAoMTIzOeKAkzEyNDApXCIsXCJOaW5qaSAoMTI0MOKAkzEyNDMpXCIsXCJLYW5nZW4gKDEyNDPigJMxMjQ3KVwiLFwiSMWNamkgKDEyNDfigJMxMjQ5KVwiLFwiS2VuY2jFjSAoMTI0OeKAkzEyNTYpXCIsXCJLxY1nZW4gKDEyNTbigJMxMjU3KVwiLFwiU2jFjWthICgxMjU34oCTMTI1OSlcIixcIlNoxY1nZW4gKDEyNTnigJMxMjYwKVwiLFwiQnVu4oCZxY0gKDEyNjDigJMxMjYxKVwiLFwiS8WNY2jFjSAoMTI2MeKAkzEyNjQpXCIsXCJCdW7igJllaSAoMTI2NOKAkzEyNzUpXCIsXCJLZW5qaSAoMTI3NeKAkzEyNzgpXCIsXCJLxY1hbiAoMTI3OOKAkzEyODgpXCIsXCJTaMWNxY0gKDEyODjigJMxMjkzKVwiLFwiRWluaW4gKDEyOTPigJMxMjk5KVwiLFwiU2jFjWFuICgxMjk54oCTMTMwMilcIixcIktlbmdlbiAoMTMwMuKAkzEzMDMpXCIsXCJLYWdlbiAoMTMwM+KAkzEzMDYpXCIsXCJUb2t1amkgKDEzMDbigJMxMzA4KVwiLFwiRW5recWNICgxMzA44oCTMTMxMSlcIixcIsWMY2jFjSAoMTMxMeKAkzEzMTIpXCIsXCJTaMWNd2EgKDEzMTLigJMxMzE3KVwiLFwiQnVucMWNICgxMzE34oCTMTMxOSlcIixcIkdlbsWNICgxMzE54oCTMTMyMSlcIixcIkdlbmvFjSAoMTMyMeKAkzEzMjQpXCIsXCJTaMWNY2jFqyAoMTMyNOKAkzEzMjYpXCIsXCJLYXJ5YWt1ICgxMzI24oCTMTMyOSlcIixcIkdlbnRva3UgKDEzMjnigJMxMzMxKVwiLFwiR2Vua8WNICgxMzMx4oCTMTMzNClcIixcIktlbm11ICgxMzM04oCTMTMzNilcIixcIkVuZ2VuICgxMzM24oCTMTM0MClcIixcIkvFjWtva3UgKDEzNDDigJMxMzQ2KVwiLFwiU2jFjWhlaSAoMTM0NuKAkzEzNzApXCIsXCJLZW50b2t1ICgxMzcw4oCTMTM3MilcIixcIkJ1bmNoxasgKDEzNzLigJMxMzc1KVwiLFwiVGVuanUgKDEzNzXigJMxMzc5KVwiLFwiS8WNcnlha3UgKDEzNznigJMxMzgxKVwiLFwiS8WNd2EgKDEzODHigJMxMzg0KVwiLFwiR2VuY2jFqyAoMTM4NOKAkzEzOTIpXCIsXCJNZWl0b2t1ICgxMzg04oCTMTM4NylcIixcIktha2VpICgxMzg34oCTMTM4OSlcIixcIkvFjcWNICgxMzg54oCTMTM5MClcIixcIk1laXRva3UgKDEzOTDigJMxMzk0KVwiLFwixYxlaSAoMTM5NOKAkzE0MjgpXCIsXCJTaMWNY2jFjSAoMTQyOOKAkzE0MjkpXCIsXCJFaWt5xY0gKDE0MjnigJMxNDQxKVwiLFwiS2FraXRzdSAoMTQ0MeKAkzE0NDQpXCIsXCJCdW7igJlhbiAoMTQ0NOKAkzE0NDkpXCIsXCJIxY10b2t1ICgxNDQ54oCTMTQ1MilcIixcIkt5xY10b2t1ICgxNDUy4oCTMTQ1NSlcIixcIkvFjXNoxY0gKDE0NTXigJMxNDU3KVwiLFwiQ2jFjXJva3UgKDE0NTfigJMxNDYwKVwiLFwiS2Fuc2jFjSAoMTQ2MOKAkzE0NjYpXCIsXCJCdW5zaMWNICgxNDY24oCTMTQ2NylcIixcIsWMbmluICgxNDY34oCTMTQ2OSlcIixcIkJ1bm1laSAoMTQ2OeKAkzE0ODcpXCIsXCJDaMWNa3nFjSAoMTQ4N+KAkzE0ODkpXCIsXCJFbnRva3UgKDE0ODnigJMxNDkyKVwiLFwiTWVpxY0gKDE0OTLigJMxNTAxKVwiLFwiQnVua2kgKDE1MDHigJMxNTA0KVwiLFwiRWlzaMWNICgxNTA04oCTMTUyMSlcIixcIlRhaWVpICgxNTIx4oCTMTUyOClcIixcIkt5xY1yb2t1ICgxNTI44oCTMTUzMilcIixcIlRlbmJ1biAoMTUzMuKAkzE1NTUpXCIsXCJLxY1qaSAoMTU1NeKAkzE1NTgpXCIsXCJFaXJva3UgKDE1NTjigJMxNTcwKVwiLFwiR2Vua2kgKDE1NzDigJMxNTczKVwiLFwiVGVuc2jFjSAoMTU3M+KAkzE1OTIpXCIsXCJCdW5yb2t1ICgxNTky4oCTMTU5NilcIixcIktlaWNoxY0gKDE1OTbigJMxNjE1KVwiLFwiR2VubmEgKDE2MTXigJMxNjI0KVwiLFwiS2Fu4oCZZWkgKDE2MjTigJMxNjQ0KVwiLFwiU2jFjWhvICgxNjQ04oCTMTY0OClcIixcIktlaWFuICgxNjQ44oCTMTY1MilcIixcIkrFjcWNICgxNjUy4oCTMTY1NSlcIixcIk1laXJla2kgKDE2NTXigJMxNjU4KVwiLFwiTWFuamkgKDE2NTjigJMxNjYxKVwiLFwiS2FuYnVuICgxNjYx4oCTMTY3MylcIixcIkVucMWNICgxNjcz4oCTMTY4MSlcIixcIlRlbm5hICgxNjgx4oCTMTY4NClcIixcIkrFjWt5xY0gKDE2ODTigJMxNjg4KVwiLFwiR2Vucm9rdSAoMTY4OOKAkzE3MDQpXCIsXCJIxY1laSAoMTcwNOKAkzE3MTEpXCIsXCJTaMWNdG9rdSAoMTcxMeKAkzE3MTYpXCIsXCJLecWNaMWNICgxNzE24oCTMTczNilcIixcIkdlbmJ1biAoMTczNuKAkzE3NDEpXCIsXCJLYW5wxY0gKDE3NDHigJMxNzQ0KVwiLFwiRW5recWNICgxNzQ04oCTMTc0OClcIixcIkthbuKAmWVuICgxNzQ44oCTMTc1MSlcIixcIkjFjXJla2kgKDE3NTHigJMxNzY0KVwiLFwiTWVpd2EgKDE3NjTigJMxNzcyKVwiLFwiQW7igJllaSAoMTc3MuKAkzE3ODEpXCIsXCJUZW5tZWkgKDE3ODHigJMxNzg5KVwiLFwiS2Fuc2VpICgxNzg54oCTMTgwMSlcIixcIkt5xY13YSAoMTgwMeKAkzE4MDQpXCIsXCJCdW5rYSAoMTgwNOKAkzE4MTgpXCIsXCJCdW5zZWkgKDE4MTjigJMxODMwKVwiLFwiVGVucMWNICgxODMw4oCTMTg0NClcIixcIkvFjWthICgxODQ04oCTMTg0OClcIixcIkthZWkgKDE4NDjigJMxODU0KVwiLFwiQW5zZWkgKDE4NTTigJMxODYwKVwiLFwiTWFu4oCZZW4gKDE4NjDigJMxODYxKVwiLFwiQnVua3nFqyAoMTg2MeKAkzE4NjQpXCIsXCJHZW5qaSAoMTg2NOKAkzE4NjUpXCIsXCJLZWnFjSAoMTg2NeKAkzE4NjgpXCIsXCJNZWlqaVwiLFwiVGFpc2jFjVwiLFwiU2jFjXdhXCIsXCJIZWlzZWlcIl19LGRheVBlcmlvZHM6e2FtOlwiQU1cIixwbTpcIlBNXCJ9fSxwZXJzaWFuOnttb250aHM6e25hcnJvdzpbXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCIxMFwiLFwiMTFcIixcIjEyXCJdLHNob3J0OltcIkZhcnZhcmRpblwiLFwiT3JkaWJlaGVzaHRcIixcIktob3JkYWRcIixcIlRpclwiLFwiTW9yZGFkXCIsXCJTaGFocml2YXJcIixcIk1laHJcIixcIkFiYW5cIixcIkF6YXJcIixcIkRleVwiLFwiQmFobWFuXCIsXCJFc2ZhbmRcIl0sbG9uZzpbXCJGYXJ2YXJkaW5cIixcIk9yZGliZWhlc2h0XCIsXCJLaG9yZGFkXCIsXCJUaXJcIixcIk1vcmRhZFwiLFwiU2hhaHJpdmFyXCIsXCJNZWhyXCIsXCJBYmFuXCIsXCJBemFyXCIsXCJEZXlcIixcIkJhaG1hblwiLFwiRXNmYW5kXCJdfSxkYXlzOntuYXJyb3c6W1wiU1wiLFwiTVwiLFwiVFwiLFwiV1wiLFwiVFwiLFwiRlwiLFwiU1wiXSxzaG9ydDpbXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIl0sbG9uZzpbXCJTdW5kYXlcIixcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiXX0sZXJhczp7bmFycm93OltcIkFQXCJdLHNob3J0OltcIkFQXCJdLGxvbmc6W1wiQVBcIl19LGRheVBlcmlvZHM6e2FtOlwiQU1cIixwbTpcIlBNXCJ9fSxyb2M6e21vbnRoczp7bmFycm93OltcIkpcIixcIkZcIixcIk1cIixcIkFcIixcIk1cIixcIkpcIixcIkpcIixcIkFcIixcIlNcIixcIk9cIixcIk5cIixcIkRcIl0sc2hvcnQ6W1wiSmFuXCIsXCJGZWJcIixcIk1hclwiLFwiQXByXCIsXCJNYXlcIixcIkp1blwiLFwiSnVsXCIsXCJBdWdcIixcIlNlcFwiLFwiT2N0XCIsXCJOb3ZcIixcIkRlY1wiXSxsb25nOltcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXX0sZGF5czp7bmFycm93OltcIlNcIixcIk1cIixcIlRcIixcIldcIixcIlRcIixcIkZcIixcIlNcIl0sc2hvcnQ6W1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdLGxvbmc6W1wiU3VuZGF5XCIsXCJNb25kYXlcIixcIlR1ZXNkYXlcIixcIldlZG5lc2RheVwiLFwiVGh1cnNkYXlcIixcIkZyaWRheVwiLFwiU2F0dXJkYXlcIl19LGVyYXM6e25hcnJvdzpbXCJCZWZvcmUgUi5PLkMuXCIsXCJNaW5ndW9cIl0sc2hvcnQ6W1wiQmVmb3JlIFIuTy5DLlwiLFwiTWluZ3VvXCJdLGxvbmc6W1wiQmVmb3JlIFIuTy5DLlwiLFwiTWluZ3VvXCJdfSxkYXlQZXJpb2RzOnthbTpcIkFNXCIscG06XCJQTVwifX19fSxudW1iZXI6e251OltcImxhdG5cIl0scGF0dGVybnM6e2RlY2ltYWw6e3Bvc2l0aXZlUGF0dGVybjpcIntudW1iZXJ9XCIsbmVnYXRpdmVQYXR0ZXJuOlwiLXtudW1iZXJ9XCJ9LGN1cnJlbmN5Ontwb3NpdGl2ZVBhdHRlcm46XCJ7Y3VycmVuY3l9e251bWJlcn1cIixuZWdhdGl2ZVBhdHRlcm46XCIte2N1cnJlbmN5fXtudW1iZXJ9XCJ9LHBlcmNlbnQ6e3Bvc2l0aXZlUGF0dGVybjpcIntudW1iZXJ9JVwiLG5lZ2F0aXZlUGF0dGVybjpcIi17bnVtYmVyfSVcIn19LHN5bWJvbHM6e2xhdG46e2RlY2ltYWw6XCIuXCIsZ3JvdXA6XCIsXCIsbmFuOlwiTmFOXCIscGVyY2VudDpcIiVcIixpbmZpbml0eTpcIuKInlwifX0sY3VycmVuY2llczp7QVVEOlwiQSRcIixCUkw6XCJSJFwiLENBRDpcIkNBJFwiLENOWTpcIkNOwqVcIixFVVI6XCLigqxcIixHQlA6XCLCo1wiLEhLRDpcIkhLJFwiLElMUzpcIuKCqlwiLElOUjpcIuKCuVwiLEpQWTpcIsKlXCIsS1JXOlwi4oKpXCIsTVhOOlwiTVgkXCIsTlpEOlwiTlokXCIsVFdEOlwiTlQkXCIsVVNEOlwiJFwiLFZORDpcIuKCq1wiLFhBRjpcIkZDRkFcIixYQ0Q6XCJFQyRcIixYT0Y6XCJDRkFcIixYUEY6XCJDRlBGXCJ9fX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ludGwvbG9jYWxlLWRhdGEvanNvbnAvZW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIkludGxQb2x5ZmlsbC5fX2FkZExvY2FsZURhdGEoe2xvY2FsZTpcInpoXCIsZGF0ZTp7Y2E6W1wiZ3JlZ29yeVwiLFwiYnVkZGhpc3RcIixcImNoaW5lc2VcIixcImNvcHRpY1wiLFwiZGFuZ2lcIixcImV0aGlvYWFcIixcImV0aGlvcGljXCIsXCJnZW5lcmljXCIsXCJoZWJyZXdcIixcImluZGlhblwiLFwiaXNsYW1pY1wiLFwiaXNsYW1pY2NcIixcImphcGFuZXNlXCIsXCJwZXJzaWFuXCIsXCJyb2NcIl0saG91ck5vMDp0cnVlLGhvdXIxMjp0cnVlLGZvcm1hdHM6e3Nob3J0OlwiezF9IHswfVwiLG1lZGl1bTpcInsxfSB7MH1cIixmdWxsOlwiezF9IHswfVwiLGxvbmc6XCJ7MX0gezB9XCIsYXZhaWxhYmxlRm9ybWF0czp7XCJkXCI6XCJk5pelXCIsXCJFXCI6XCJjY2NcIixFZDpcImTml6VFXCIsRWhtOlwiRSBhaDptbVwiLEVIbTpcIkVISDptbVwiLEVobXM6XCJFIGFoOm1tOnNzXCIsRUhtczpcIkVISDptbTpzc1wiLEd5OlwiR3nlubRcIixHeU1NTTpcIkd55bm0TeaciFwiLEd5TU1NZDpcIkd55bm0TeaciGTml6VcIixHeU1NTUVkOlwiR3nlubRN5pyIZOaXpUVcIixcImhcIjpcImFo5pe2XCIsXCJIXCI6XCJI5pe2XCIsaG06XCJhaDptbVwiLEhtOlwiSEg6bW1cIixobXM6XCJhaDptbTpzc1wiLEhtczpcIkhIOm1tOnNzXCIsaG1zdjpcInYgYWg6bW06c3NcIixIbXN2OlwidiBISDptbTpzc1wiLGhtdjpcInYgYWg6bW1cIixIbXY6XCJ2IEhIOm1tXCIsXCJNXCI6XCJN5pyIXCIsTWQ6XCJNL2RcIixNRWQ6XCJNL2RFXCIsTU1kZDpcIk1NL2RkXCIsTU1NOlwiTExMXCIsTU1NZDpcIk3mnIhk5pelXCIsTU1NRWQ6XCJN5pyIZOaXpUVcIixNTU1NZDpcIk3mnIhk5pelXCIsbXM6XCJtbTpzc1wiLFwieVwiOlwieeW5tFwiLHlNOlwieeW5tE3mnIhcIix5TWQ6XCJ5L00vZFwiLHlNRWQ6XCJ5L00vZEVcIix5TU06XCJ55bm0TeaciFwiLHlNTU06XCJ55bm0TeaciFwiLHlNTU1kOlwieeW5tE3mnIhk5pelXCIseU1NTUVkOlwieeW5tE3mnIhk5pelRVwiLHlNTU1NOlwieeW5tE3mnIhcIix5UVFROlwieeW5tOesrFHlraPluqZcIix5UVFRUTpcInnlubTnrKxR5a2j5bqmXCJ9LGRhdGVGb3JtYXRzOnt5TU1NTUVFRUVkOlwieeW5tE3mnIhk5pelRUVFRVwiLHlNTU1NZDpcInnlubRN5pyIZOaXpVwiLHlNTU1kOlwieeW5tE3mnIhk5pelXCIseU1kOlwieS9NL2RcIn0sdGltZUZvcm1hdHM6e2htbXNzenp6ejpcInp6enogYWg6bW06c3NcIixobXN6OlwieiBhaDptbTpzc1wiLGhtczpcImFoOm1tOnNzXCIsaG06XCJhaDptbVwifX0sY2FsZW5kYXJzOntidWRkaGlzdDp7bW9udGhzOntuYXJyb3c6W1wiMVwiLFwiMlwiLFwiM1wiLFwiNFwiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiLFwiMTBcIixcIjExXCIsXCIxMlwiXSxzaG9ydDpbXCIx5pyIXCIsXCIy5pyIXCIsXCIz5pyIXCIsXCI05pyIXCIsXCI15pyIXCIsXCI25pyIXCIsXCI35pyIXCIsXCI45pyIXCIsXCI55pyIXCIsXCIxMOaciFwiLFwiMTHmnIhcIixcIjEy5pyIXCJdLGxvbmc6W1wi5LiA5pyIXCIsXCLkuozmnIhcIixcIuS4ieaciFwiLFwi5Zub5pyIXCIsXCLkupTmnIhcIixcIuWFreaciFwiLFwi5LiD5pyIXCIsXCLlhavmnIhcIixcIuS5neaciFwiLFwi5Y2B5pyIXCIsXCLljYHkuIDmnIhcIixcIuWNgeS6jOaciFwiXX0sZGF5czp7bmFycm93OltcIuaXpVwiLFwi5LiAXCIsXCLkuoxcIixcIuS4iVwiLFwi5ZubXCIsXCLkupRcIixcIuWFrVwiXSxzaG9ydDpbXCLlkajml6VcIixcIuWRqOS4gFwiLFwi5ZGo5LqMXCIsXCLlkajkuIlcIixcIuWRqOWbm1wiLFwi5ZGo5LqUXCIsXCLlkajlha1cIl0sbG9uZzpbXCLmmJ/mnJ/ml6VcIixcIuaYn+acn+S4gFwiLFwi5pif5pyf5LqMXCIsXCLmmJ/mnJ/kuIlcIixcIuaYn+acn+Wbm1wiLFwi5pif5pyf5LqUXCIsXCLmmJ/mnJ/lha1cIl19LGVyYXM6e25hcnJvdzpbXCLkvZvljoZcIl0sc2hvcnQ6W1wi5L2b5Y6GXCJdLGxvbmc6W1wi5L2b5Y6GXCJdfSxkYXlQZXJpb2RzOnthbTpcIuS4iuWNiFwiLHBtOlwi5LiL5Y2IXCJ9fSxjaGluZXNlOnttb250aHM6e25hcnJvdzpbXCLmraNcIixcIuS6jFwiLFwi5LiJXCIsXCLlm5tcIixcIuS6lFwiLFwi5YWtXCIsXCLkuINcIixcIuWFq1wiLFwi5LmdXCIsXCLljYFcIixcIuWGrFwiLFwi6IWKXCJdLHNob3J0OltcIuato+aciFwiLFwi5LqM5pyIXCIsXCLkuInmnIhcIixcIuWbm+aciFwiLFwi5LqU5pyIXCIsXCLlha3mnIhcIixcIuS4g+aciFwiLFwi5YWr5pyIXCIsXCLkuZ3mnIhcIixcIuWNgeaciFwiLFwi5Yas5pyIXCIsXCLohYrmnIhcIl0sbG9uZzpbXCLmraPmnIhcIixcIuS6jOaciFwiLFwi5LiJ5pyIXCIsXCLlm5vmnIhcIixcIuS6lOaciFwiLFwi5YWt5pyIXCIsXCLkuIPmnIhcIixcIuWFq+aciFwiLFwi5Lmd5pyIXCIsXCLljYHmnIhcIixcIuWGrOaciFwiLFwi6IWK5pyIXCJdfSxkYXlzOntuYXJyb3c6W1wi5pelXCIsXCLkuIBcIixcIuS6jFwiLFwi5LiJXCIsXCLlm5tcIixcIuS6lFwiLFwi5YWtXCJdLHNob3J0OltcIuWRqOaXpVwiLFwi5ZGo5LiAXCIsXCLlkajkuoxcIixcIuWRqOS4iVwiLFwi5ZGo5ZubXCIsXCLlkajkupRcIixcIuWRqOWFrVwiXSxsb25nOltcIuaYn+acn+aXpVwiLFwi5pif5pyf5LiAXCIsXCLmmJ/mnJ/kuoxcIixcIuaYn+acn+S4iVwiLFwi5pif5pyf5ZubXCIsXCLmmJ/mnJ/kupRcIixcIuaYn+acn+WFrVwiXX0sZGF5UGVyaW9kczp7YW06XCLkuIrljYhcIixwbTpcIuS4i+WNiFwifX0sY29wdGljOnttb250aHM6e25hcnJvdzpbXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCIxMFwiLFwiMTFcIixcIjEyXCIsXCIxM1wiXSxzaG9ydDpbXCIx5pyIXCIsXCIy5pyIXCIsXCIz5pyIXCIsXCI05pyIXCIsXCI15pyIXCIsXCI25pyIXCIsXCI35pyIXCIsXCI45pyIXCIsXCI55pyIXCIsXCIxMOaciFwiLFwiMTHmnIhcIixcIjEy5pyIXCIsXCIxM+aciFwiXSxsb25nOltcIuS4gOaciFwiLFwi5LqM5pyIXCIsXCLkuInmnIhcIixcIuWbm+aciFwiLFwi5LqU5pyIXCIsXCLlha3mnIhcIixcIuS4g+aciFwiLFwi5YWr5pyIXCIsXCLkuZ3mnIhcIixcIuWNgeaciFwiLFwi5Y2B5LiA5pyIXCIsXCLljYHkuozmnIhcIixcIuWNgeS4ieaciFwiXX0sZGF5czp7bmFycm93OltcIuaXpVwiLFwi5LiAXCIsXCLkuoxcIixcIuS4iVwiLFwi5ZubXCIsXCLkupRcIixcIuWFrVwiXSxzaG9ydDpbXCLlkajml6VcIixcIuWRqOS4gFwiLFwi5ZGo5LqMXCIsXCLlkajkuIlcIixcIuWRqOWbm1wiLFwi5ZGo5LqUXCIsXCLlkajlha1cIl0sbG9uZzpbXCLmmJ/mnJ/ml6VcIixcIuaYn+acn+S4gFwiLFwi5pif5pyf5LqMXCIsXCLmmJ/mnJ/kuIlcIixcIuaYn+acn+Wbm1wiLFwi5pif5pyf5LqUXCIsXCLmmJ/mnJ/lha1cIl19LGVyYXM6e25hcnJvdzpbXCJFUkEwXCIsXCJFUkExXCJdLHNob3J0OltcIkVSQTBcIixcIkVSQTFcIl0sbG9uZzpbXCJFUkEwXCIsXCJFUkExXCJdfSxkYXlQZXJpb2RzOnthbTpcIuS4iuWNiFwiLHBtOlwi5LiL5Y2IXCJ9fSxkYW5naTp7bW9udGhzOntuYXJyb3c6W1wi5q2jXCIsXCLkuoxcIixcIuS4iVwiLFwi5ZubXCIsXCLkupRcIixcIuWFrVwiLFwi5LiDXCIsXCLlhatcIixcIuS5nVwiLFwi5Y2BXCIsXCLlhqxcIixcIuiFilwiXSxzaG9ydDpbXCLmraPmnIhcIixcIuS6jOaciFwiLFwi5LiJ5pyIXCIsXCLlm5vmnIhcIixcIuS6lOaciFwiLFwi5YWt5pyIXCIsXCLkuIPmnIhcIixcIuWFq+aciFwiLFwi5Lmd5pyIXCIsXCLljYHmnIhcIixcIuWGrOaciFwiLFwi6IWK5pyIXCJdLGxvbmc6W1wi5q2j5pyIXCIsXCLkuozmnIhcIixcIuS4ieaciFwiLFwi5Zub5pyIXCIsXCLkupTmnIhcIixcIuWFreaciFwiLFwi5LiD5pyIXCIsXCLlhavmnIhcIixcIuS5neaciFwiLFwi5Y2B5pyIXCIsXCLlhqzmnIhcIixcIuiFiuaciFwiXX0sZGF5czp7bmFycm93OltcIuaXpVwiLFwi5LiAXCIsXCLkuoxcIixcIuS4iVwiLFwi5ZubXCIsXCLkupRcIixcIuWFrVwiXSxzaG9ydDpbXCLlkajml6VcIixcIuWRqOS4gFwiLFwi5ZGo5LqMXCIsXCLlkajkuIlcIixcIuWRqOWbm1wiLFwi5ZGo5LqUXCIsXCLlkajlha1cIl0sbG9uZzpbXCLmmJ/mnJ/ml6VcIixcIuaYn+acn+S4gFwiLFwi5pif5pyf5LqMXCIsXCLmmJ/mnJ/kuIlcIixcIuaYn+acn+Wbm1wiLFwi5pif5pyf5LqUXCIsXCLmmJ/mnJ/lha1cIl19LGRheVBlcmlvZHM6e2FtOlwi5LiK5Y2IXCIscG06XCLkuIvljYhcIn19LGV0aGlvcGljOnttb250aHM6e25hcnJvdzpbXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCIxMFwiLFwiMTFcIixcIjEyXCIsXCIxM1wiXSxzaG9ydDpbXCIx5pyIXCIsXCIy5pyIXCIsXCIz5pyIXCIsXCI05pyIXCIsXCI15pyIXCIsXCI25pyIXCIsXCI35pyIXCIsXCI45pyIXCIsXCI55pyIXCIsXCIxMOaciFwiLFwiMTHmnIhcIixcIjEy5pyIXCIsXCIxM+aciFwiXSxsb25nOltcIuS4gOaciFwiLFwi5LqM5pyIXCIsXCLkuInmnIhcIixcIuWbm+aciFwiLFwi5LqU5pyIXCIsXCLlha3mnIhcIixcIuS4g+aciFwiLFwi5YWr5pyIXCIsXCLkuZ3mnIhcIixcIuWNgeaciFwiLFwi5Y2B5LiA5pyIXCIsXCLljYHkuozmnIhcIixcIuWNgeS4ieaciFwiXX0sZGF5czp7bmFycm93OltcIuaXpVwiLFwi5LiAXCIsXCLkuoxcIixcIuS4iVwiLFwi5ZubXCIsXCLkupRcIixcIuWFrVwiXSxzaG9ydDpbXCLlkajml6VcIixcIuWRqOS4gFwiLFwi5ZGo5LqMXCIsXCLlkajkuIlcIixcIuWRqOWbm1wiLFwi5ZGo5LqUXCIsXCLlkajlha1cIl0sbG9uZzpbXCLmmJ/mnJ/ml6VcIixcIuaYn+acn+S4gFwiLFwi5pif5pyf5LqMXCIsXCLmmJ/mnJ/kuIlcIixcIuaYn+acn+Wbm1wiLFwi5pif5pyf5LqUXCIsXCLmmJ/mnJ/lha1cIl19LGVyYXM6e25hcnJvdzpbXCJFUkEwXCIsXCJFUkExXCJdLHNob3J0OltcIkVSQTBcIixcIkVSQTFcIl0sbG9uZzpbXCJFUkEwXCIsXCJFUkExXCJdfSxkYXlQZXJpb2RzOnthbTpcIuS4iuWNiFwiLHBtOlwi5LiL5Y2IXCJ9fSxldGhpb2FhOnttb250aHM6e25hcnJvdzpbXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCIxMFwiLFwiMTFcIixcIjEyXCIsXCIxM1wiXSxzaG9ydDpbXCIx5pyIXCIsXCIy5pyIXCIsXCIz5pyIXCIsXCI05pyIXCIsXCI15pyIXCIsXCI25pyIXCIsXCI35pyIXCIsXCI45pyIXCIsXCI55pyIXCIsXCIxMOaciFwiLFwiMTHmnIhcIixcIjEy5pyIXCIsXCIxM+aciFwiXSxsb25nOltcIuS4gOaciFwiLFwi5LqM5pyIXCIsXCLkuInmnIhcIixcIuWbm+aciFwiLFwi5LqU5pyIXCIsXCLlha3mnIhcIixcIuS4g+aciFwiLFwi5YWr5pyIXCIsXCLkuZ3mnIhcIixcIuWNgeaciFwiLFwi5Y2B5LiA5pyIXCIsXCLljYHkuozmnIhcIixcIuWNgeS4ieaciFwiXX0sZGF5czp7bmFycm93OltcIuaXpVwiLFwi5LiAXCIsXCLkuoxcIixcIuS4iVwiLFwi5ZubXCIsXCLkupRcIixcIuWFrVwiXSxzaG9ydDpbXCLlkajml6VcIixcIuWRqOS4gFwiLFwi5ZGo5LqMXCIsXCLlkajkuIlcIixcIuWRqOWbm1wiLFwi5ZGo5LqUXCIsXCLlkajlha1cIl0sbG9uZzpbXCLmmJ/mnJ/ml6VcIixcIuaYn+acn+S4gFwiLFwi5pif5pyf5LqMXCIsXCLmmJ/mnJ/kuIlcIixcIuaYn+acn+Wbm1wiLFwi5pif5pyf5LqUXCIsXCLmmJ/mnJ/lha1cIl19LGVyYXM6e25hcnJvdzpbXCJFUkEwXCJdLHNob3J0OltcIkVSQTBcIl0sbG9uZzpbXCJFUkEwXCJdfSxkYXlQZXJpb2RzOnthbTpcIuS4iuWNiFwiLHBtOlwi5LiL5Y2IXCJ9fSxnZW5lcmljOnttb250aHM6e25hcnJvdzpbXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCIxMFwiLFwiMTFcIixcIjEyXCJdLHNob3J0OltcIk0wMVwiLFwiTTAyXCIsXCJNMDNcIixcIk0wNFwiLFwiTTA1XCIsXCJNMDZcIixcIk0wN1wiLFwiTTA4XCIsXCJNMDlcIixcIk0xMFwiLFwiTTExXCIsXCJNMTJcIl0sbG9uZzpbXCJNMDFcIixcIk0wMlwiLFwiTTAzXCIsXCJNMDRcIixcIk0wNVwiLFwiTTA2XCIsXCJNMDdcIixcIk0wOFwiLFwiTTA5XCIsXCJNMTBcIixcIk0xMVwiLFwiTTEyXCJdfSxkYXlzOntuYXJyb3c6W1wi5pelXCIsXCLkuIBcIixcIuS6jFwiLFwi5LiJXCIsXCLlm5tcIixcIuS6lFwiLFwi5YWtXCJdLHNob3J0OltcIuWRqOaXpVwiLFwi5ZGo5LiAXCIsXCLlkajkuoxcIixcIuWRqOS4iVwiLFwi5ZGo5ZubXCIsXCLlkajkupRcIixcIuWRqOWFrVwiXSxsb25nOltcIuaYn+acn+aXpVwiLFwi5pif5pyf5LiAXCIsXCLmmJ/mnJ/kuoxcIixcIuaYn+acn+S4iVwiLFwi5pif5pyf5ZubXCIsXCLmmJ/mnJ/kupRcIixcIuaYn+acn+WFrVwiXX0sZXJhczp7bmFycm93OltcIkVSQTBcIixcIkVSQTFcIl0sc2hvcnQ6W1wiRVJBMFwiLFwiRVJBMVwiXSxsb25nOltcIkVSQTBcIixcIkVSQTFcIl19LGRheVBlcmlvZHM6e2FtOlwi5LiK5Y2IXCIscG06XCLkuIvljYhcIn19LGdyZWdvcnk6e21vbnRoczp7bmFycm93OltcIjFcIixcIjJcIixcIjNcIixcIjRcIixcIjVcIixcIjZcIixcIjdcIixcIjhcIixcIjlcIixcIjEwXCIsXCIxMVwiLFwiMTJcIl0sc2hvcnQ6W1wiMeaciFwiLFwiMuaciFwiLFwiM+aciFwiLFwiNOaciFwiLFwiNeaciFwiLFwiNuaciFwiLFwiN+aciFwiLFwiOOaciFwiLFwiOeaciFwiLFwiMTDmnIhcIixcIjEx5pyIXCIsXCIxMuaciFwiXSxsb25nOltcIuS4gOaciFwiLFwi5LqM5pyIXCIsXCLkuInmnIhcIixcIuWbm+aciFwiLFwi5LqU5pyIXCIsXCLlha3mnIhcIixcIuS4g+aciFwiLFwi5YWr5pyIXCIsXCLkuZ3mnIhcIixcIuWNgeaciFwiLFwi5Y2B5LiA5pyIXCIsXCLljYHkuozmnIhcIl19LGRheXM6e25hcnJvdzpbXCLml6VcIixcIuS4gFwiLFwi5LqMXCIsXCLkuIlcIixcIuWbm1wiLFwi5LqUXCIsXCLlha1cIl0sc2hvcnQ6W1wi5ZGo5pelXCIsXCLlkajkuIBcIixcIuWRqOS6jFwiLFwi5ZGo5LiJXCIsXCLlkajlm5tcIixcIuWRqOS6lFwiLFwi5ZGo5YWtXCJdLGxvbmc6W1wi5pif5pyf5pelXCIsXCLmmJ/mnJ/kuIBcIixcIuaYn+acn+S6jFwiLFwi5pif5pyf5LiJXCIsXCLmmJ/mnJ/lm5tcIixcIuaYn+acn+S6lFwiLFwi5pif5pyf5YWtXCJdfSxlcmFzOntuYXJyb3c6W1wi5YWs5YWD5YmNXCIsXCLlhazlhYNcIixcIuilv+WFg+WJjVwiLFwi6KW/5YWDXCJdLHNob3J0OltcIuWFrOWFg+WJjVwiLFwi5YWs5YWDXCIsXCLopb/lhYPliY1cIixcIuilv+WFg1wiXSxsb25nOltcIuWFrOWFg+WJjVwiLFwi5YWs5YWDXCIsXCLopb/lhYPliY1cIixcIuilv+WFg1wiXX0sZGF5UGVyaW9kczp7YW06XCLkuIrljYhcIixwbTpcIuS4i+WNiFwifX0saGVicmV3Onttb250aHM6e25hcnJvdzpbXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCIxMFwiLFwiMTFcIixcIjEyXCIsXCIxM1wiLFwiN1wiXSxzaG9ydDpbXCIx5pyIXCIsXCIy5pyIXCIsXCIz5pyIXCIsXCI05pyIXCIsXCI15pyIXCIsXCI25pyIXCIsXCI35pyIXCIsXCI45pyIXCIsXCI55pyIXCIsXCIxMOaciFwiLFwiMTHmnIhcIixcIjEy5pyIXCIsXCIxM+aciFwiLFwi6ZewN+aciFwiXSxsb25nOltcIuS4gOaciFwiLFwi5LqM5pyIXCIsXCLkuInmnIhcIixcIuWbm+aciFwiLFwi5LqU5pyIXCIsXCLlha3mnIhcIixcIuS4g+aciFwiLFwi5YWr5pyIXCIsXCLkuZ3mnIhcIixcIuWNgeaciFwiLFwi5Y2B5LiA5pyIXCIsXCLljYHkuozmnIhcIixcIuWNgeS4ieaciFwiLFwi6Zew5LiD5pyIXCJdfSxkYXlzOntuYXJyb3c6W1wi5pelXCIsXCLkuIBcIixcIuS6jFwiLFwi5LiJXCIsXCLlm5tcIixcIuS6lFwiLFwi5YWtXCJdLHNob3J0OltcIuWRqOaXpVwiLFwi5ZGo5LiAXCIsXCLlkajkuoxcIixcIuWRqOS4iVwiLFwi5ZGo5ZubXCIsXCLlkajkupRcIixcIuWRqOWFrVwiXSxsb25nOltcIuaYn+acn+aXpVwiLFwi5pif5pyf5LiAXCIsXCLmmJ/mnJ/kuoxcIixcIuaYn+acn+S4iVwiLFwi5pif5pyf5ZubXCIsXCLmmJ/mnJ/kupRcIixcIuaYn+acn+WFrVwiXX0sZXJhczp7bmFycm93OltcIuW4jOS8r+adpeWOhlwiXSxzaG9ydDpbXCLluIzkvK/mnaXljoZcIl0sbG9uZzpbXCLluIzkvK/mnaXljoZcIl19LGRheVBlcmlvZHM6e2FtOlwi5LiK5Y2IXCIscG06XCLkuIvljYhcIn19LGluZGlhbjp7bW9udGhzOntuYXJyb3c6W1wiMVwiLFwiMlwiLFwiM1wiLFwiNFwiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiLFwiMTBcIixcIjExXCIsXCIxMlwiXSxzaG9ydDpbXCIx5pyIXCIsXCIy5pyIXCIsXCIz5pyIXCIsXCI05pyIXCIsXCI15pyIXCIsXCI25pyIXCIsXCI35pyIXCIsXCI45pyIXCIsXCI55pyIXCIsXCIxMOaciFwiLFwiMTHmnIhcIixcIjEy5pyIXCJdLGxvbmc6W1wi5LiA5pyIXCIsXCLkuozmnIhcIixcIuS4ieaciFwiLFwi5Zub5pyIXCIsXCLkupTmnIhcIixcIuWFreaciFwiLFwi5LiD5pyIXCIsXCLlhavmnIhcIixcIuS5neaciFwiLFwi5Y2B5pyIXCIsXCLljYHkuIDmnIhcIixcIuWNgeS6jOaciFwiXX0sZGF5czp7bmFycm93OltcIuaXpVwiLFwi5LiAXCIsXCLkuoxcIixcIuS4iVwiLFwi5ZubXCIsXCLkupRcIixcIuWFrVwiXSxzaG9ydDpbXCLlkajml6VcIixcIuWRqOS4gFwiLFwi5ZGo5LqMXCIsXCLlkajkuIlcIixcIuWRqOWbm1wiLFwi5ZGo5LqUXCIsXCLlkajlha1cIl0sbG9uZzpbXCLmmJ/mnJ/ml6VcIixcIuaYn+acn+S4gFwiLFwi5pif5pyf5LqMXCIsXCLmmJ/mnJ/kuIlcIixcIuaYn+acn+Wbm1wiLFwi5pif5pyf5LqUXCIsXCLmmJ/mnJ/lha1cIl19LGVyYXM6e25hcnJvdzpbXCLljbDluqbljoZcIl0sc2hvcnQ6W1wi5Y2w5bqm5Y6GXCJdLGxvbmc6W1wi5Y2w5bqm5Y6GXCJdfSxkYXlQZXJpb2RzOnthbTpcIuS4iuWNiFwiLHBtOlwi5LiL5Y2IXCJ9fSxpc2xhbWljOnttb250aHM6e25hcnJvdzpbXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCIxMFwiLFwiMTFcIixcIjEyXCJdLHNob3J0OltcIjHmnIhcIixcIjLmnIhcIixcIjPmnIhcIixcIjTmnIhcIixcIjXmnIhcIixcIjbmnIhcIixcIjfmnIhcIixcIjjmnIhcIixcIjnmnIhcIixcIjEw5pyIXCIsXCIxMeaciFwiLFwiMTLmnIhcIl0sbG9uZzpbXCLkuIDmnIhcIixcIuS6jOaciFwiLFwi5LiJ5pyIXCIsXCLlm5vmnIhcIixcIuS6lOaciFwiLFwi5YWt5pyIXCIsXCLkuIPmnIhcIixcIuWFq+aciFwiLFwi5Lmd5pyIXCIsXCLljYHmnIhcIixcIuWNgeS4gOaciFwiLFwi5Y2B5LqM5pyIXCJdfSxkYXlzOntuYXJyb3c6W1wi5pelXCIsXCLkuIBcIixcIuS6jFwiLFwi5LiJXCIsXCLlm5tcIixcIuS6lFwiLFwi5YWtXCJdLHNob3J0OltcIuWRqOaXpVwiLFwi5ZGo5LiAXCIsXCLlkajkuoxcIixcIuWRqOS4iVwiLFwi5ZGo5ZubXCIsXCLlkajkupRcIixcIuWRqOWFrVwiXSxsb25nOltcIuaYn+acn+aXpVwiLFwi5pif5pyf5LiAXCIsXCLmmJ/mnJ/kuoxcIixcIuaYn+acn+S4iVwiLFwi5pif5pyf5ZubXCIsXCLmmJ/mnJ/kupRcIixcIuaYn+acn+WFrVwiXX0sZXJhczp7bmFycm93OltcIuS8iuaWr+WFsOWOhlwiXSxzaG9ydDpbXCLkvIrmlq/lhbDljoZcIl0sbG9uZzpbXCLkvIrmlq/lhbDljoZcIl19LGRheVBlcmlvZHM6e2FtOlwi5LiK5Y2IXCIscG06XCLkuIvljYhcIn19LGlzbGFtaWNjOnttb250aHM6e25hcnJvdzpbXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCIxMFwiLFwiMTFcIixcIjEyXCJdLHNob3J0OltcIjHmnIhcIixcIjLmnIhcIixcIjPmnIhcIixcIjTmnIhcIixcIjXmnIhcIixcIjbmnIhcIixcIjfmnIhcIixcIjjmnIhcIixcIjnmnIhcIixcIjEw5pyIXCIsXCIxMeaciFwiLFwiMTLmnIhcIl0sbG9uZzpbXCLkuIDmnIhcIixcIuS6jOaciFwiLFwi5LiJ5pyIXCIsXCLlm5vmnIhcIixcIuS6lOaciFwiLFwi5YWt5pyIXCIsXCLkuIPmnIhcIixcIuWFq+aciFwiLFwi5Lmd5pyIXCIsXCLljYHmnIhcIixcIuWNgeS4gOaciFwiLFwi5Y2B5LqM5pyIXCJdfSxkYXlzOntuYXJyb3c6W1wi5pelXCIsXCLkuIBcIixcIuS6jFwiLFwi5LiJXCIsXCLlm5tcIixcIuS6lFwiLFwi5YWtXCJdLHNob3J0OltcIuWRqOaXpVwiLFwi5ZGo5LiAXCIsXCLlkajkuoxcIixcIuWRqOS4iVwiLFwi5ZGo5ZubXCIsXCLlkajkupRcIixcIuWRqOWFrVwiXSxsb25nOltcIuaYn+acn+aXpVwiLFwi5pif5pyf5LiAXCIsXCLmmJ/mnJ/kuoxcIixcIuaYn+acn+S4iVwiLFwi5pif5pyf5ZubXCIsXCLmmJ/mnJ/kupRcIixcIuaYn+acn+WFrVwiXX0sZXJhczp7bmFycm93OltcIuS8iuaWr+WFsOWOhlwiXSxzaG9ydDpbXCLkvIrmlq/lhbDljoZcIl0sbG9uZzpbXCLkvIrmlq/lhbDljoZcIl19LGRheVBlcmlvZHM6e2FtOlwi5LiK5Y2IXCIscG06XCLkuIvljYhcIn19LGphcGFuZXNlOnttb250aHM6e25hcnJvdzpbXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCIxMFwiLFwiMTFcIixcIjEyXCJdLHNob3J0OltcIjHmnIhcIixcIjLmnIhcIixcIjPmnIhcIixcIjTmnIhcIixcIjXmnIhcIixcIjbmnIhcIixcIjfmnIhcIixcIjjmnIhcIixcIjnmnIhcIixcIjEw5pyIXCIsXCIxMeaciFwiLFwiMTLmnIhcIl0sbG9uZzpbXCLkuIDmnIhcIixcIuS6jOaciFwiLFwi5LiJ5pyIXCIsXCLlm5vmnIhcIixcIuS6lOaciFwiLFwi5YWt5pyIXCIsXCLkuIPmnIhcIixcIuWFq+aciFwiLFwi5Lmd5pyIXCIsXCLljYHmnIhcIixcIuWNgeS4gOaciFwiLFwi5Y2B5LqM5pyIXCJdfSxkYXlzOntuYXJyb3c6W1wi5pelXCIsXCLkuIBcIixcIuS6jFwiLFwi5LiJXCIsXCLlm5tcIixcIuS6lFwiLFwi5YWtXCJdLHNob3J0OltcIuWRqOaXpVwiLFwi5ZGo5LiAXCIsXCLlkajkuoxcIixcIuWRqOS4iVwiLFwi5ZGo5ZubXCIsXCLlkajkupRcIixcIuWRqOWFrVwiXSxsb25nOltcIuaYn+acn+aXpVwiLFwi5pif5pyf5LiAXCIsXCLmmJ/mnJ/kuoxcIixcIuaYn+acn+S4iVwiLFwi5pif5pyf5ZubXCIsXCLmmJ/mnJ/kupRcIixcIuaYn+acn+WFrVwiXX0sZXJhczp7bmFycm93OltcIlRhaWthICg2NDXigJM2NTApXCIsXCJIYWt1Y2hpICg2NTDigJM2NzEpXCIsXCJIYWt1aMWNICg2NzLigJM2ODYpXCIsXCJTaHVjaMWNICg2ODbigJM3MDEpXCIsXCJUYWloxY0gKDcwMeKAkzcwNClcIixcIktlaXVuICg3MDTigJM3MDgpXCIsXCJXYWTFjSAoNzA44oCTNzE1KVwiLFwiUmVpa2kgKDcxNeKAkzcxNylcIixcIlnFjXLFjSAoNzE34oCTNzI0KVwiLFwiSmlua2kgKDcyNOKAkzcyOSlcIixcIlRlbnB5xY0gKDcyOeKAkzc0OSlcIixcIlRlbnB5xY0ta2FtcMWNICg3NDktNzQ5KVwiLFwiVGVucHnFjS1zaMWNaMWNICg3NDktNzU3KVwiLFwiVGVucHnFjS1oxY1qaSAoNzU3LTc2NSlcIixcIlRlbnB5xY0tamluZ28gKDc2NS03NjcpXCIsXCJKaW5nby1rZWl1biAoNzY3LTc3MClcIixcIkjFjWtpICg3NzDigJM3ODApXCIsXCJUZW4txY0gKDc4MS03ODIpXCIsXCJFbnJ5YWt1ICg3ODLigJM4MDYpXCIsXCJEYWlkxY0gKDgwNuKAkzgxMClcIixcIkvFjW5pbiAoODEw4oCTODI0KVwiLFwiVGVuY2jFjSAoODI04oCTODM0KVwiLFwiSsWNd2EgKDgzNOKAkzg0OClcIixcIkthasWNICg4NDjigJM4NTEpXCIsXCJOaW5qdSAoODUx4oCTODU0KVwiLFwiU2Fpa8WNICg4NTTigJM4NTcpXCIsXCJUZW4tYW4gKDg1Ny04NTkpXCIsXCJKxY1nYW4gKDg1OeKAkzg3NylcIixcIkdhbmd5xY0gKDg3N+KAkzg4NSlcIixcIk5pbm5hICg4ODXigJM4ODkpXCIsXCJLYW5wecWNICg4ODnigJM4OTgpXCIsXCJTaMWNdGFpICg4OTjigJM5MDEpXCIsXCJFbmdpICg5MDHigJM5MjMpXCIsXCJFbmNoxY0gKDkyM+KAkzkzMSlcIixcIkrFjWhlaSAoOTMx4oCTOTM4KVwiLFwiVGVuZ3nFjSAoOTM44oCTOTQ3KVwiLFwiVGVucnlha3UgKDk0N+KAkzk1NylcIixcIlRlbnRva3UgKDk1N+KAkzk2MSlcIixcIsWMd2EgKDk2MeKAkzk2NClcIixcIkvFjWjFjSAoOTY04oCTOTY4KVwiLFwiQW5uYSAoOTY44oCTOTcwKVwiLFwiVGVucm9rdSAoOTcw4oCTOTczKVwiLFwiVGVu4oCZZW4gKDk3M+KAkzk3NilcIixcIkrFjWdlbiAoOTc24oCTOTc4KVwiLFwiVGVuZ2VuICg5NzjigJM5ODMpXCIsXCJFaWthbiAoOTgz4oCTOTg1KVwiLFwiS2FubmEgKDk4NeKAkzk4NylcIixcIkVpZW4gKDk4N+KAkzk4OSlcIixcIkVpc28gKDk4OeKAkzk5MClcIixcIlNoxY1yeWFrdSAoOTkw4oCTOTk1KVwiLFwiQ2jFjXRva3UgKDk5NeKAkzk5OSlcIixcIkNoxY1oxY0gKDk5OeKAkzEwMDQpXCIsXCJLYW5rxY0gKDEwMDTigJMxMDEyKVwiLFwiQ2jFjXdhICgxMDEy4oCTMTAxNylcIixcIkthbm5pbiAoMTAxN+KAkzEwMjEpXCIsXCJKaWFuICgxMDIx4oCTMTAyNClcIixcIk1hbmp1ICgxMDI04oCTMTAyOClcIixcIkNoxY1nZW4gKDEwMjjigJMxMDM3KVwiLFwiQ2jFjXJ5YWt1ICgxMDM34oCTMTA0MClcIixcIkNoxY1recWrICgxMDQw4oCTMTA0NClcIixcIkthbnRva3UgKDEwNDTigJMxMDQ2KVwiLFwiRWlzaMWNICgxMDQ24oCTMTA1MylcIixcIlRlbmdpICgxMDUz4oCTMTA1OClcIixcIkvFjWhlaSAoMTA1OOKAkzEwNjUpXCIsXCJKaXJ5YWt1ICgxMDY14oCTMTA2OSlcIixcIkVua3nFqyAoMTA2OeKAkzEwNzQpXCIsXCJTaMWNaG8gKDEwNzTigJMxMDc3KVwiLFwiU2jFjXJ5YWt1ICgxMDc34oCTMTA4MSlcIixcIkVpaMWNICgxMDgx4oCTMTA4NClcIixcIsWMdG9rdSAoMTA4NOKAkzEwODcpXCIsXCJLYW5qaSAoMTA4N+KAkzEwOTQpXCIsXCJLYWjFjSAoMTA5NOKAkzEwOTYpXCIsXCJFaWNoxY0gKDEwOTbigJMxMDk3KVwiLFwiSsWNdG9rdSAoMTA5N+KAkzEwOTkpXCIsXCJLxY13YSAoMTA5OeKAkzExMDQpXCIsXCJDaMWNamkgKDExMDTigJMxMTA2KVwiLFwiS2FzaMWNICgxMTA24oCTMTEwOClcIixcIlRlbm5pbiAoMTEwOOKAkzExMTApXCIsXCJUZW4tZWkgKDExMTAtMTExMylcIixcIkVpa3nFqyAoMTExM+KAkzExMTgpXCIsXCJHZW7igJllaSAoMTExOOKAkzExMjApXCIsXCJIxY1hbiAoMTEyMOKAkzExMjQpXCIsXCJUZW5qaSAoMTEyNOKAkzExMjYpXCIsXCJEYWlqaSAoMTEyNuKAkzExMzEpXCIsXCJUZW5zaMWNICgxMTMx4oCTMTEzMilcIixcIkNoxY1zaMWNICgxMTMy4oCTMTEzNSlcIixcIkjFjWVuICgxMTM14oCTMTE0MSlcIixcIkVpamkgKDExNDHigJMxMTQyKVwiLFwiS8WNamkgKDExNDLigJMxMTQ0KVwiLFwiVGVu4oCZecWNICgxMTQ04oCTMTE0NSlcIixcIkt5xathbiAoMTE0NeKAkzExNTEpXCIsXCJOaW5wZWkgKDExNTHigJMxMTU0KVwiLFwiS3nFq2p1ICgxMTU04oCTMTE1NilcIixcIkjFjWdlbiAoMTE1NuKAkzExNTkpXCIsXCJIZWlqaSAoMTE1OeKAkzExNjApXCIsXCJFaXJ5YWt1ICgxMTYw4oCTMTE2MSlcIixcIsWMaG8gKDExNjHigJMxMTYzKVwiLFwiQ2jFjWthbiAoMTE2M+KAkzExNjUpXCIsXCJFaW1hbiAoMTE2NeKAkzExNjYpXCIsXCJOaW7igJlhbiAoMTE2NuKAkzExNjkpXCIsXCJLYcWNICgxMTY54oCTMTE3MSlcIixcIlNoxY1hbiAoMTE3MeKAkzExNzUpXCIsXCJBbmdlbiAoMTE3NeKAkzExNzcpXCIsXCJKaXNoxY0gKDExNzfigJMxMTgxKVwiLFwiWcWNd2EgKDExODHigJMxMTgyKVwiLFwiSnVlaSAoMTE4MuKAkzExODQpXCIsXCJHZW5yeWFrdSAoMTE4NOKAkzExODUpXCIsXCJCdW5qaSAoMTE4NeKAkzExOTApXCIsXCJLZW5recWrICgxMTkw4oCTMTE5OSlcIixcIlNoxY1qaSAoMTE5OeKAkzEyMDEpXCIsXCJLZW5uaW4gKDEyMDHigJMxMjA0KVwiLFwiR2Vua3nFqyAoMTIwNOKAkzEyMDYpXCIsXCJLZW7igJllaSAoMTIwNuKAkzEyMDcpXCIsXCJKxY1nZW4gKDEyMDfigJMxMjExKVwiLFwiS2Vucnlha3UgKDEyMTHigJMxMjEzKVwiLFwiS2VucMWNICgxMjEz4oCTMTIxOSlcIixcIkrFjWt5xasgKDEyMTnigJMxMjIyKVwiLFwiSsWNxY0gKDEyMjLigJMxMjI0KVwiLFwiR2VubmluICgxMjI04oCTMTIyNSlcIixcIkthcm9rdSAoMTIyNeKAkzEyMjcpXCIsXCJBbnRlaSAoMTIyN+KAkzEyMjkpXCIsXCJLYW5raSAoMTIyOeKAkzEyMzIpXCIsXCJKxY1laSAoMTIzMuKAkzEyMzMpXCIsXCJUZW5wdWt1ICgxMjMz4oCTMTIzNClcIixcIkJ1bnJ5YWt1ICgxMjM04oCTMTIzNSlcIixcIkthdGVpICgxMjM14oCTMTIzOClcIixcIlJ5YWt1bmluICgxMjM44oCTMTIzOSlcIixcIkVu4oCZxY0gKDEyMznigJMxMjQwKVwiLFwiTmluamkgKDEyNDDigJMxMjQzKVwiLFwiS2FuZ2VuICgxMjQz4oCTMTI0NylcIixcIkjFjWppICgxMjQ34oCTMTI0OSlcIixcIktlbmNoxY0gKDEyNDnigJMxMjU2KVwiLFwiS8WNZ2VuICgxMjU24oCTMTI1NylcIixcIlNoxY1rYSAoMTI1N+KAkzEyNTkpXCIsXCJTaMWNZ2VuICgxMjU54oCTMTI2MClcIixcIkJ1buKAmcWNICgxMjYw4oCTMTI2MSlcIixcIkvFjWNoxY0gKDEyNjHigJMxMjY0KVwiLFwiQnVu4oCZZWkgKDEyNjTigJMxMjc1KVwiLFwiS2VuamkgKDEyNzXigJMxMjc4KVwiLFwiS8WNYW4gKDEyNzjigJMxMjg4KVwiLFwiU2jFjcWNICgxMjg44oCTMTI5MylcIixcIkVpbmluICgxMjkz4oCTMTI5OSlcIixcIlNoxY1hbiAoMTI5OeKAkzEzMDIpXCIsXCJLZW5nZW4gKDEzMDLigJMxMzAzKVwiLFwiS2FnZW4gKDEzMDPigJMxMzA2KVwiLFwiVG9rdWppICgxMzA24oCTMTMwOClcIixcIkVua3nFjSAoMTMwOOKAkzEzMTEpXCIsXCLFjGNoxY0gKDEzMTHigJMxMzEyKVwiLFwiU2jFjXdhICgxMzEy4oCTMTMxNylcIixcIkJ1bnDFjSAoMTMxN+KAkzEzMTkpXCIsXCJHZW7FjSAoMTMxOeKAkzEzMjEpXCIsXCJHZW5rxY0gKDEzMjHigJMxMzI0KVwiLFwiU2jFjWNoxasgKDEzMjTigJMxMzI2KVwiLFwiS2FyeWFrdSAoMTMyNuKAkzEzMjkpXCIsXCJHZW50b2t1ICgxMzI54oCTMTMzMSlcIixcIkdlbmvFjSAoMTMzMeKAkzEzMzQpXCIsXCJLZW5tdSAoMTMzNOKAkzEzMzYpXCIsXCJFbmdlbiAoMTMzNuKAkzEzNDApXCIsXCJLxY1rb2t1ICgxMzQw4oCTMTM0NilcIixcIlNoxY1oZWkgKDEzNDbigJMxMzcwKVwiLFwiS2VudG9rdSAoMTM3MOKAkzEzNzIpXCIsXCJCdW5jaMWrICgxMzcy4oCTMTM3NSlcIixcIlRlbmp1ICgxMzc14oCTMTM3OSlcIixcIkvFjXJ5YWt1ICgxMzc54oCTMTM4MSlcIixcIkvFjXdhICgxMzgx4oCTMTM4NClcIixcIkdlbmNoxasgKDEzODTigJMxMzkyKVwiLFwiTWVpdG9rdSAoMTM4NOKAkzEzODcpXCIsXCJLYWtlaSAoMTM4N+KAkzEzODkpXCIsXCJLxY3FjSAoMTM4OeKAkzEzOTApXCIsXCJNZWl0b2t1ICgxMzkw4oCTMTM5NClcIixcIsWMZWkgKDEzOTTigJMxNDI4KVwiLFwiU2jFjWNoxY0gKDE0MjjigJMxNDI5KVwiLFwiRWlrecWNICgxNDI54oCTMTQ0MSlcIixcIktha2l0c3UgKDE0NDHigJMxNDQ0KVwiLFwiQnVu4oCZYW4gKDE0NDTigJMxNDQ5KVwiLFwiSMWNdG9rdSAoMTQ0OeKAkzE0NTIpXCIsXCJLecWNdG9rdSAoMTQ1MuKAkzE0NTUpXCIsXCJLxY1zaMWNICgxNDU14oCTMTQ1NylcIixcIkNoxY1yb2t1ICgxNDU34oCTMTQ2MClcIixcIkthbnNoxY0gKDE0NjDigJMxNDY2KVwiLFwiQnVuc2jFjSAoMTQ2NuKAkzE0NjcpXCIsXCLFjG5pbiAoMTQ2N+KAkzE0NjkpXCIsXCJCdW5tZWkgKDE0NjnigJMxNDg3KVwiLFwiQ2jFjWt5xY0gKDE0ODfigJMxNDg5KVwiLFwiRW50b2t1ICgxNDg54oCTMTQ5MilcIixcIk1lacWNICgxNDky4oCTMTUwMSlcIixcIkJ1bmtpICgxNTAx4oCTMTUwNClcIixcIkVpc2jFjSAoMTUwNOKAkzE1MjEpXCIsXCJUYWllaSAoMTUyMeKAkzE1MjgpXCIsXCJLecWNcm9rdSAoMTUyOOKAkzE1MzIpXCIsXCJUZW5idW4gKDE1MzLigJMxNTU1KVwiLFwiS8WNamkgKDE1NTXigJMxNTU4KVwiLFwiRWlyb2t1ICgxNTU44oCTMTU3MClcIixcIkdlbmtpICgxNTcw4oCTMTU3MylcIixcIlRlbnNoxY0gKDE1NzPigJMxNTkyKVwiLFwiQnVucm9rdSAoMTU5MuKAkzE1OTYpXCIsXCJLZWljaMWNICgxNTk24oCTMTYxNSlcIixcIkdlbm5hICgxNjE14oCTMTYyNClcIixcIkthbuKAmWVpICgxNjI04oCTMTY0NClcIixcIlNoxY1obyAoMTY0NOKAkzE2NDgpXCIsXCJLZWlhbiAoMTY0OOKAkzE2NTIpXCIsXCJKxY3FjSAoMTY1MuKAkzE2NTUpXCIsXCJNZWlyZWtpICgxNjU14oCTMTY1OClcIixcIk1hbmppICgxNjU44oCTMTY2MSlcIixcIkthbmJ1biAoMTY2MeKAkzE2NzMpXCIsXCJFbnDFjSAoMTY3M+KAkzE2ODEpXCIsXCJUZW5uYSAoMTY4MeKAkzE2ODQpXCIsXCJKxY1recWNICgxNjg04oCTMTY4OClcIixcIkdlbnJva3UgKDE2ODjigJMxNzA0KVwiLFwiSMWNZWkgKDE3MDTigJMxNzExKVwiLFwiU2jFjXRva3UgKDE3MTHigJMxNzE2KVwiLFwiS3nFjWjFjSAoMTcxNuKAkzE3MzYpXCIsXCJHZW5idW4gKDE3MzbigJMxNzQxKVwiLFwiS2FucMWNICgxNzQx4oCTMTc0NClcIixcIkVua3nFjSAoMTc0NOKAkzE3NDgpXCIsXCJLYW7igJllbiAoMTc0OOKAkzE3NTEpXCIsXCJIxY1yZWtpICgxNzUx4oCTMTc2NClcIixcIk1laXdhICgxNzY04oCTMTc3MilcIixcIkFu4oCZZWkgKDE3NzLigJMxNzgxKVwiLFwiVGVubWVpICgxNzgx4oCTMTc4OSlcIixcIkthbnNlaSAoMTc4OeKAkzE4MDEpXCIsXCJLecWNd2EgKDE4MDHigJMxODA0KVwiLFwiQnVua2EgKDE4MDTigJMxODE4KVwiLFwiQnVuc2VpICgxODE44oCTMTgzMClcIixcIlRlbnDFjSAoMTgzMOKAkzE4NDQpXCIsXCJLxY1rYSAoMTg0NOKAkzE4NDgpXCIsXCJLYWVpICgxODQ44oCTMTg1NClcIixcIkFuc2VpICgxODU04oCTMTg2MClcIixcIk1hbuKAmWVuICgxODYw4oCTMTg2MSlcIixcIkJ1bmt5xasgKDE4NjHigJMxODY0KVwiLFwiR2VuamkgKDE4NjTigJMxODY1KVwiLFwiS2VpxY0gKDE4NjXigJMxODY4KVwiLFwiTVwiLFwiVFwiLFwiU1wiLFwiSFwiXSxzaG9ydDpbXCLlpKfljJYgKDY0NeKAkzY1MClcIixcIueZvembiSAoNjUw4oCTNjcxKVwiLFwi55m95YekICg2NzLigJM2ODYpXCIsXCLmnLHpuJ8gKDY4NuKAkzcwMSlcIixcIuWkp+WunSAoNzAx4oCTNzA0KVwiLFwi5bqG5LqRICg3MDTigJM3MDgpXCIsXCLlkozpk5wgKDcwOOKAkzcxNSlcIixcIueBtem+nyAoNzE14oCTNzE3KVwiLFwi5YW76ICBICg3MTfigJM3MjQpXCIsXCLnpZ7pvp8gKDcyNOKAkzcyOSlcIixcIuWkqeW5syAoNzI54oCTNzQ5KVwiLFwi5aSp5bmz5oSf5a6dICg3NDnigJM3NDkpXCIsXCLlpKnlubPog5zlrp0gKDc0OeKAkzc1NylcIixcIuWkqeW5s+WuneWtlyAoNzU34oCTNzY1KVwiLFwi5aSp5bmz56We5oqkICg3NjXigJM3NjcpXCIsXCLnpZ7miqTmma/kupEgKDc2N+KAkzc3MClcIixcIuWunem+nyAoNzcw4oCTNzgwKVwiLFwi5aSp5bqUICg3ODHigJM3ODIpXCIsXCLlu7bljoYgKDc4MuKAkzgwNilcIixcIuWkp+WQjCAoODA24oCTODEwKVwiLFwi5byY5LuBICg4MTDigJM4MjQpXCIsXCLlpKnplb8gKDgyNOKAkzgzNClcIixcIuaJv+WSjCAoODM04oCTODQ4KVwiLFwi5ZiJ56WlICg4NDjigJM4NTEpXCIsXCLku4Hlr78gKDg1MeKAkzg1NClcIixcIum9kOihoSAoODU04oCTODU3KVwiLFwi5aSp5a6JICg4NTfigJM4NTkpXCIsXCLotJ7op4IgKDg1OeKAkzg3NylcIixcIuWFg+W6hiAoODc34oCTODg1KVwiLFwi5LuB5ZKMICg4ODXigJM4ODkpXCIsXCLlrr3lubMgKDg4OeKAkzg5OClcIixcIuaYjOazsCAoODk44oCTOTAxKVwiLFwi5bu25ZacICg5MDHigJM5MjMpXCIsXCLlu7bplb8gKDkyM+KAkzkzMSlcIixcIuaJv+W5syAoOTMx4oCTOTM4KVwiLFwi5aSp5bqGICg5MzjigJM5NDcpXCIsXCLlpKnljoYgKDk0N+KAkzk1NylcIixcIuWkqeW+tyAoOTU34oCTOTYxKVwiLFwi5bqU5ZKMICg5NjHigJM5NjQpXCIsXCLlurfkv50gKDk2NOKAkzk2OClcIixcIuWuieWSjCAoOTY44oCTOTcwKVwiLFwi5aSp56aEICg5NzDigJM5NzMpXCIsXCLlpKnlu7YgKDk3M+KAkzk3NilcIixcIui0nuWFgyAoOTc24oCTOTc4KVwiLFwi5aSp5YWDICg5NzjigJM5ODMpXCIsXCLmsLjop4IgKDk4M+KAkzk4NSlcIixcIuWuveWSjCAoOTg14oCTOTg3KVwiLFwi5rC45bu2ICg5ODfigJM5ODkpXCIsXCLmsLjnpZogKDk4OeKAkzk5MClcIixcIuato+WOhiAoOTkw4oCTOTk1KVwiLFwi6ZW/5b63ICg5OTXigJM5OTkpXCIsXCLplb/kv50gKDk5OeKAkzEwMDQpXCIsXCLlrr3lvJggKDEwMDTigJMxMDEyKVwiLFwi6ZW/5ZKMICgxMDEy4oCTMTAxNylcIixcIuWuveS7gSAoMTAxN+KAkzEwMjEpXCIsXCLmsrvlrokgKDEwMjHigJMxMDI0KVwiLFwi5LiH5a+/ICgxMDI04oCTMTAyOClcIixcIumVv+WFgyAoMTAyOOKAkzEwMzcpXCIsXCLplb/ljoYgKDEwMzfigJMxMDQwKVwiLFwi6ZW/5LmFICgxMDQw4oCTMTA0NClcIixcIuWuveW+tyAoMTA0NOKAkzEwNDYpXCIsXCLmsLjmib8gKDEwNDbigJMxMDUzKVwiLFwi5aSp5ZacICgxMDUz4oCTMTA1OClcIixcIuW6t+W5syAoMTA1OOKAkzEwNjUpXCIsXCLmsrvljoYgKDEwNjXigJMxMDY5KVwiLFwi5bu25LmFICgxMDY54oCTMTA3NClcIixcIuaJv+S/nSAoMTA3NOKAkzEwNzcpXCIsXCLmraPljoYgKDEwNzfigJMxMDgxKVwiLFwi5rC45L+dICgxMDgx4oCTMTA4NClcIixcIuW6lOW+tyAoMTA4NOKAkzEwODcpXCIsXCLlrr3msrsgKDEwODfigJMxMDk0KVwiLFwi5ZiJ5L+dICgxMDk04oCTMTA5NilcIixcIuawuOmVvyAoMTA5NuKAkzEwOTcpXCIsXCLmib/lvrcgKDEwOTfigJMxMDk5KVwiLFwi5bq35ZKMICgxMDk54oCTMTEwNClcIixcIumVv+ayuyAoMTEwNOKAkzExMDYpXCIsXCLlmInmib8gKDExMDbigJMxMTA4KVwiLFwi5aSp5LuBICgxMTA44oCTMTExMClcIixcIuWkqeawuCAoMTExMOKAkzExMTMpXCIsXCLmsLjkuYUgKDExMTPigJMxMTE4KVwiLFwi5YWD5rC4ICgxMTE44oCTMTEyMClcIixcIuS/neWuiSAoMTEyMOKAkzExMjQpXCIsXCLlpKnmsrsgKDExMjTigJMxMTI2KVwiLFwi5aSn5rK7ICgxMTI24oCTMTEzMSlcIixcIuWkqeaJvyAoMTEzMeKAkzExMzIpXCIsXCLplb/mib8gKDExMzLigJMxMTM1KVwiLFwi5L+d5bu2ICgxMTM14oCTMTE0MSlcIixcIuawuOayuyAoMTE0MeKAkzExNDIpXCIsXCLlurfmsrsgKDExNDLigJMxMTQ0KVwiLFwi5aSp5YW7ICgxMTQ04oCTMTE0NSlcIixcIuS5heWuiSAoMTE0NeKAkzExNTEpXCIsXCLku4HlubMgKDExNTHigJMxMTU0KVwiLFwi5LmF5a+/ICgxMTU04oCTMTE1NilcIixcIuS/neWFgyAoMTE1NuKAkzExNTkpXCIsXCLlubPmsrsgKDExNTnigJMxMTYwKVwiLFwi5rC45Y6GICgxMTYw4oCTMTE2MSlcIixcIuW6lOS/nSAoMTE2MeKAkzExNjMpXCIsXCLplb/lrr0gKDExNjPigJMxMTY1KVwiLFwi5rC45LiHICgxMTY14oCTMTE2NilcIixcIuS7geWuiSAoMTE2NuKAkzExNjkpXCIsXCLlmInlupQgKDExNjnigJMxMTcxKVwiLFwi5om/5a6JICgxMTcx4oCTMTE3NSlcIixcIuWuieWFgyAoMTE3NeKAkzExNzcpXCIsXCLmsrvmib8gKDExNzfigJMxMTgxKVwiLFwi5YW75ZKMICgxMTgx4oCTMTE4MilcIixcIuWvv+awuCAoMTE4MuKAkzExODQpXCIsXCLlhYPljoYgKDExODTigJMxMTg1KVwiLFwi5paH5rK7ICgxMTg14oCTMTE5MClcIixcIuW7uuS5hSAoMTE5MOKAkzExOTkpXCIsXCLmraPmsrsgKDExOTnigJMxMjAxKVwiLFwi5bu65LuBICgxMjAx4oCTMTIwNClcIixcIuWFg+S5hSAoMTIwNOKAkzEyMDYpXCIsXCLlu7rmsLggKDEyMDbigJMxMjA3KVwiLFwi5om/5YWDICgxMjA34oCTMTIxMSlcIixcIuW7uuWOhiAoMTIxMeKAkzEyMTMpXCIsXCLlu7rkv50gKDEyMTPigJMxMjE5KVwiLFwi5om/5LmFICgxMjE54oCTMTIyMilcIixcIui0nuW6lCAoMTIyMuKAkzEyMjQpXCIsXCLlhYPku4EgKDEyMjTigJMxMjI1KVwiLFwi5ZiJ56aEICgxMjI14oCTMTIyNylcIixcIuWuiei0niAoMTIyN+KAkzEyMjkpXCIsXCLlrr3llpwgKDEyMjnigJMxMjMyKVwiLFwi6LSe5rC4ICgxMjMy4oCTMTIzMylcIixcIuWkqeemjyAoMTIzM+KAkzEyMzQpXCIsXCLmlofljoYgKDEyMzTigJMxMjM1KVwiLFwi5ZiJ56WvICgxMjM14oCTMTIzOClcIixcIuWOhuS7gSAoMTIzOOKAkzEyMzkpXCIsXCLlu7blupQgKDEyMznigJMxMjQwKVwiLFwi5LuB5rK7ICgxMjQw4oCTMTI0MylcIixcIuWuveWFgyAoMTI0M+KAkzEyNDcpXCIsXCLlrp3msrsgKDEyNDfigJMxMjQ5KVwiLFwi5bu66ZW/ICgxMjQ54oCTMTI1NilcIixcIuW6t+WFgyAoMTI1NuKAkzEyNTcpXCIsXCLmraPlmIkgKDEyNTfigJMxMjU5KVwiLFwi5q2j5YWDICgxMjU54oCTMTI2MClcIixcIuaWh+W6lCAoMTI2MOKAkzEyNjEpXCIsXCLlvJjplb8gKDEyNjHigJMxMjY0KVwiLFwi5paH5rC4ICgxMjY04oCTMTI3NSlcIixcIuW7uuayuyAoMTI3NeKAkzEyNzgpXCIsXCLlvJjlrokgKDEyNzjigJMxMjg4KVwiLFwi5q2j5bqUICgxMjg44oCTMTI5MylcIixcIuawuOS7gSAoMTI5M+KAkzEyOTkpXCIsXCLmraPlrokgKDEyOTnigJMxMzAyKVwiLFwi5bmy5YWDICgxMzAy4oCTMTMwMylcIixcIuWYieWFgyAoMTMwM+KAkzEzMDYpXCIsXCLlvrfmsrsgKDEzMDbigJMxMzA4KVwiLFwi5bu25bqGICgxMzA44oCTMTMxMSlcIixcIuW6lOmVvyAoMTMxMeKAkzEzMTIpXCIsXCLmraPlkowgKDEzMTLigJMxMzE3KVwiLFwi5paH5L+dICgxMzE34oCTMTMxOSlcIixcIuWFg+W6lCAoMTMxOeKAkzEzMjEpXCIsXCLlhYPkuqggKDEzMjHigJMxMzI0KVwiLFwi5q2j5LitICgxMzI04oCTMTMyNilcIixcIuWYieWOhiAoMTMyNuKAkzEzMjkpXCIsXCLlhYPlvrcgKDEzMjnigJMxMzMxKVwiLFwi5YWD5byYICgxMzMx4oCTMTMzNClcIixcIuW7uuatpiAoMTMzNOKAkzEzMzYpXCIsXCLlu7blhYMgKDEzMzbigJMxMzQwKVwiLFwi5YW05Zu9ICgxMzQw4oCTMTM0NilcIixcIuato+W5syAoMTM0NuKAkzEzNzApXCIsXCLlu7rlvrcgKDEzNzDigJMxMzcyKVwiLFwi5paH5LitICgxMzcy4oCTMTM3NSlcIixcIuWkqeaOiCAoMTM3NeKAkzEzNzkpXCIsXCLlurfljoYgKDEzNznigJMxMzgxKVwiLFwi5byY5ZKMICgxMzgx4oCTMTM4NClcIixcIuWFg+S4rSAoMTM4NOKAkzEzOTIpXCIsXCLoh7PlvrcgKDEzODTigJMxMzg3KVwiLFwi5ZiJ5bqGICgxMzg34oCTMTM4OSlcIixcIuW6t+W6lCAoMTM4OeKAkzEzOTApXCIsXCLmmI7lvrcgKDEzOTDigJMxMzk0KVwiLFwi5bqU5rC4ICgxMzk04oCTMTQyOClcIixcIuato+mVvyAoMTQyOOKAkzE0MjkpXCIsXCLmsLjkuqsgKDE0MjnigJMxNDQxKVwiLFwi5ZiJ5ZCJICgxNDQx4oCTMTQ0NClcIixcIuaWh+WuiSAoMTQ0NOKAkzE0NDkpXCIsXCLlrp3lvrcgKDE0NDnigJMxNDUyKVwiLFwi5Lqr5b63ICgxNDUy4oCTMTQ1NSlcIixcIuW6t+atoyAoMTQ1NeKAkzE0NTcpXCIsXCLplb/npoQgKDE0NTfigJMxNDYwKVwiLFwi5a695q2jICgxNDYw4oCTMTQ2NilcIixcIuaWh+atoyAoMTQ2NuKAkzE0NjcpXCIsXCLlupTku4EgKDE0NjfigJMxNDY5KVwiLFwi5paH5piOICgxNDY54oCTMTQ4NylcIixcIumVv+S6qyAoMTQ4N+KAkzE0ODkpXCIsXCLlu7blvrcgKDE0ODnigJMxNDkyKVwiLFwi5piO5bqUICgxNDky4oCTMTUwMSlcIixcIuaWh+m+nyAoMTUwMeKAkzE1MDQpXCIsXCLmsLjmraMgKDE1MDTigJMxNTIxKVwiLFwi5aSn5rC4ICgxNTIx4oCTMTUyOClcIixcIuS6q+emhCAoMTUyOOKAkzE1MzIpXCIsXCLlpKnmlocgKDE1MzLigJMxNTU1KVwiLFwi5byY5rK7ICgxNTU14oCTMTU1OClcIixcIuawuOemhCAoMTU1OOKAkzE1NzApXCIsXCLlhYPpvp8gKDE1NzDigJMxNTczKVwiLFwi5aSp5q2jICgxNTcz4oCTMTU5MilcIixcIuaWh+emhCAoMTU5MuKAkzE1OTYpXCIsXCLluobplb8gKDE1OTbigJMxNjE1KVwiLFwi5YWD5ZKMICgxNjE14oCTMTYyNClcIixcIuWuveawuCAoMTYyNOKAkzE2NDQpXCIsXCLmraPkv50gKDE2NDTigJMxNjQ4KVwiLFwi5bqG5a6JICgxNjQ44oCTMTY1MilcIixcIuaJv+W6lCAoMTY1MuKAkzE2NTUpXCIsXCLmmI7ljoYgKDE2NTXigJMxNjU4KVwiLFwi5LiH5rK7ICgxNjU44oCTMTY2MSlcIixcIuWuveaWhyAoMTY2MeKAkzE2NzMpXCIsXCLlu7blrp0gKDE2NzPigJMxNjgxKVwiLFwi5aSp5ZKMICgxNjgx4oCTMTY4NClcIixcIui0nuS6qyAoMTY4NOKAkzE2ODgpXCIsXCLlhYPnpoQgKDE2ODjigJMxNzA0KVwiLFwi5a6d5rC4ICgxNzA04oCTMTcxMSlcIixcIuato+W+tyAoMTcxMeKAkzE3MTYpXCIsXCLkuqvkv50gKDE3MTbigJMxNzM2KVwiLFwi5YWD5paHICgxNzM24oCTMTc0MSlcIixcIuWuveS/nSAoMTc0MeKAkzE3NDQpXCIsXCLlu7bkuqsgKDE3NDTigJMxNzQ4KVwiLFwi5a695bu2ICgxNzQ44oCTMTc1MSlcIixcIuWuneWOhiAoMTc1MeKAkzE3NjQpXCIsXCLmmI7lkowgKDE3NjTigJMxNzcyKVwiLFwi5a6J5rC4ICgxNzcy4oCTMTc4MSlcIixcIuWkqeaYjiAoMTc4MeKAkzE3ODkpXCIsXCLlrr3mlL8gKDE3ODnigJMxODAxKVwiLFwi5Lqr5ZKMICgxODAx4oCTMTgwNClcIixcIuaWh+WMliAoMTgwNOKAkzE4MTgpXCIsXCLmlofmlL8gKDE4MTjigJMxODMwKVwiLFwi5aSp5L+dICgxODMw4oCTMTg0NClcIixcIuW8mOWMliAoMTg0NOKAkzE4NDgpXCIsXCLlmInmsLggKDE4NDjigJMxODU0KVwiLFwi5a6J5pS/ICgxODU04oCTMTg2MClcIixcIuS4h+W7tiAoMTg2MOKAkzE4NjEpXCIsXCLmlofkuYUgKDE4NjHigJMxODY0KVwiLFwi5YWD5rK7ICgxODY04oCTMTg2NSlcIixcIuW6huW6lCAoMTg2NeKAkzE4NjgpXCIsXCLmmI7msrtcIixcIuWkp+ato1wiLFwi5pit5ZKMXCIsXCLlubPmiJBcIl0sbG9uZzpbXCLlpKfljJYgKDY0NeKAkzY1MClcIixcIueZvembiSAoNjUw4oCTNjcxKVwiLFwi55m95YekICg2NzLigJM2ODYpXCIsXCLmnLHpuJ8gKDY4NuKAkzcwMSlcIixcIuWkp+WunSAoNzAx4oCTNzA0KVwiLFwi5bqG5LqRICg3MDTigJM3MDgpXCIsXCLlkozpk5wgKDcwOOKAkzcxNSlcIixcIueBtem+nyAoNzE14oCTNzE3KVwiLFwi5YW76ICBICg3MTfigJM3MjQpXCIsXCLnpZ7pvp8gKDcyNOKAkzcyOSlcIixcIuWkqeW5syAoNzI54oCTNzQ5KVwiLFwi5aSp5bmz5oSf5a6dICg3NDnigJM3NDkpXCIsXCLlpKnlubPog5zlrp0gKDc0OeKAkzc1NylcIixcIuWkqeW5s+WuneWtlyAoNzU34oCTNzY1KVwiLFwi5aSp5bmz56We5oqkICg3NjXigJM3NjcpXCIsXCLnpZ7miqTmma/kupEgKDc2N+KAkzc3MClcIixcIuWunem+nyAoNzcw4oCTNzgwKVwiLFwi5aSp5bqUICg3ODHigJM3ODIpXCIsXCLlu7bljoYgKDc4MuKAkzgwNilcIixcIuWkp+WQjCAoODA24oCTODEwKVwiLFwi5byY5LuBICg4MTDigJM4MjQpXCIsXCLlpKnplb8gKDgyNOKAkzgzNClcIixcIuaJv+WSjCAoODM04oCTODQ4KVwiLFwi5ZiJ56WlICg4NDjigJM4NTEpXCIsXCLku4Hlr78gKDg1MeKAkzg1NClcIixcIum9kOihoSAoODU04oCTODU3KVwiLFwi5aSp5a6JICg4NTfigJM4NTkpXCIsXCLotJ7op4IgKDg1OeKAkzg3NylcIixcIuWFg+W6hiAoODc34oCTODg1KVwiLFwi5LuB5ZKMICg4ODXigJM4ODkpXCIsXCLlrr3lubMgKDg4OeKAkzg5OClcIixcIuaYjOazsCAoODk44oCTOTAxKVwiLFwi5bu25ZacICg5MDHigJM5MjMpXCIsXCLlu7bplb8gKDkyM+KAkzkzMSlcIixcIuaJv+W5syAoOTMx4oCTOTM4KVwiLFwi5aSp5bqGICg5MzjigJM5NDcpXCIsXCLlpKnljoYgKDk0N+KAkzk1NylcIixcIuWkqeW+tyAoOTU34oCTOTYxKVwiLFwi5bqU5ZKMICg5NjHigJM5NjQpXCIsXCLlurfkv50gKDk2NOKAkzk2OClcIixcIuWuieWSjCAoOTY44oCTOTcwKVwiLFwi5aSp56aEICg5NzDigJM5NzMpXCIsXCLlpKnlu7YgKDk3M+KAkzk3NilcIixcIui0nuWFgyAoOTc24oCTOTc4KVwiLFwi5aSp5YWDICg5NzjigJM5ODMpXCIsXCLmsLjop4IgKDk4M+KAkzk4NSlcIixcIuWuveWSjCAoOTg14oCTOTg3KVwiLFwi5rC45bu2ICg5ODfigJM5ODkpXCIsXCLmsLjnpZogKDk4OeKAkzk5MClcIixcIuato+WOhiAoOTkw4oCTOTk1KVwiLFwi6ZW/5b63ICg5OTXigJM5OTkpXCIsXCLplb/kv50gKDk5OeKAkzEwMDQpXCIsXCLlrr3lvJggKDEwMDTigJMxMDEyKVwiLFwi6ZW/5ZKMICgxMDEy4oCTMTAxNylcIixcIuWuveS7gSAoMTAxN+KAkzEwMjEpXCIsXCLmsrvlrokgKDEwMjHigJMxMDI0KVwiLFwi5LiH5a+/ICgxMDI04oCTMTAyOClcIixcIumVv+WFgyAoMTAyOOKAkzEwMzcpXCIsXCLplb/ljoYgKDEwMzfigJMxMDQwKVwiLFwi6ZW/5LmFICgxMDQw4oCTMTA0NClcIixcIuWuveW+tyAoMTA0NOKAkzEwNDYpXCIsXCLmsLjmib8gKDEwNDbigJMxMDUzKVwiLFwi5aSp5ZacICgxMDUz4oCTMTA1OClcIixcIuW6t+W5syAoMTA1OOKAkzEwNjUpXCIsXCLmsrvljoYgKDEwNjXigJMxMDY5KVwiLFwi5bu25LmFICgxMDY54oCTMTA3NClcIixcIuaJv+S/nSAoMTA3NOKAkzEwNzcpXCIsXCLmraPljoYgKDEwNzfigJMxMDgxKVwiLFwi5rC45L+dICgxMDgx4oCTMTA4NClcIixcIuW6lOW+tyAoMTA4NOKAkzEwODcpXCIsXCLlrr3msrsgKDEwODfigJMxMDk0KVwiLFwi5ZiJ5L+dICgxMDk04oCTMTA5NilcIixcIuawuOmVvyAoMTA5NuKAkzEwOTcpXCIsXCLmib/lvrcgKDEwOTfigJMxMDk5KVwiLFwi5bq35ZKMICgxMDk54oCTMTEwNClcIixcIumVv+ayuyAoMTEwNOKAkzExMDYpXCIsXCLlmInmib8gKDExMDbigJMxMTA4KVwiLFwi5aSp5LuBICgxMTA44oCTMTExMClcIixcIuWkqeawuCAoMTExMOKAkzExMTMpXCIsXCLmsLjkuYUgKDExMTPigJMxMTE4KVwiLFwi5YWD5rC4ICgxMTE44oCTMTEyMClcIixcIuS/neWuiSAoMTEyMOKAkzExMjQpXCIsXCLlpKnmsrsgKDExMjTigJMxMTI2KVwiLFwi5aSn5rK7ICgxMTI24oCTMTEzMSlcIixcIuWkqeaJvyAoMTEzMeKAkzExMzIpXCIsXCLplb/mib8gKDExMzLigJMxMTM1KVwiLFwi5L+d5bu2ICgxMTM14oCTMTE0MSlcIixcIuawuOayuyAoMTE0MeKAkzExNDIpXCIsXCLlurfmsrsgKDExNDLigJMxMTQ0KVwiLFwi5aSp5YW7ICgxMTQ04oCTMTE0NSlcIixcIuS5heWuiSAoMTE0NeKAkzExNTEpXCIsXCLku4HlubMgKDExNTHigJMxMTU0KVwiLFwi5LmF5a+/ICgxMTU04oCTMTE1NilcIixcIuS/neWFgyAoMTE1NuKAkzExNTkpXCIsXCLlubPmsrsgKDExNTnigJMxMTYwKVwiLFwi5rC45Y6GICgxMTYw4oCTMTE2MSlcIixcIuW6lOS/nSAoMTE2MeKAkzExNjMpXCIsXCLplb/lrr0gKDExNjPigJMxMTY1KVwiLFwi5rC45LiHICgxMTY14oCTMTE2NilcIixcIuS7geWuiSAoMTE2NuKAkzExNjkpXCIsXCLlmInlupQgKDExNjnigJMxMTcxKVwiLFwi5om/5a6JICgxMTcx4oCTMTE3NSlcIixcIuWuieWFgyAoMTE3NeKAkzExNzcpXCIsXCLmsrvmib8gKDExNzfigJMxMTgxKVwiLFwi5YW75ZKMICgxMTgx4oCTMTE4MilcIixcIuWvv+awuCAoMTE4MuKAkzExODQpXCIsXCLlhYPljoYgKDExODTigJMxMTg1KVwiLFwi5paH5rK7ICgxMTg14oCTMTE5MClcIixcIuW7uuS5hSAoMTE5MOKAkzExOTkpXCIsXCLmraPmsrsgKDExOTnigJMxMjAxKVwiLFwi5bu65LuBICgxMjAx4oCTMTIwNClcIixcIuWFg+S5hSAoMTIwNOKAkzEyMDYpXCIsXCLlu7rmsLggKDEyMDbigJMxMjA3KVwiLFwi5om/5YWDICgxMjA34oCTMTIxMSlcIixcIuW7uuWOhiAoMTIxMeKAkzEyMTMpXCIsXCLlu7rkv50gKDEyMTPigJMxMjE5KVwiLFwi5om/5LmFICgxMjE54oCTMTIyMilcIixcIui0nuW6lCAoMTIyMuKAkzEyMjQpXCIsXCLlhYPku4EgKDEyMjTigJMxMjI1KVwiLFwi5ZiJ56aEICgxMjI14oCTMTIyNylcIixcIuWuiei0niAoMTIyN+KAkzEyMjkpXCIsXCLlrr3llpwgKDEyMjnigJMxMjMyKVwiLFwi6LSe5rC4ICgxMjMy4oCTMTIzMylcIixcIuWkqeemjyAoMTIzM+KAkzEyMzQpXCIsXCLmlofljoYgKDEyMzTigJMxMjM1KVwiLFwi5ZiJ56WvICgxMjM14oCTMTIzOClcIixcIuWOhuS7gSAoMTIzOOKAkzEyMzkpXCIsXCLlu7blupQgKDEyMznigJMxMjQwKVwiLFwi5LuB5rK7ICgxMjQw4oCTMTI0MylcIixcIuWuveWFgyAoMTI0M+KAkzEyNDcpXCIsXCLlrp3msrsgKDEyNDfigJMxMjQ5KVwiLFwi5bu66ZW/ICgxMjQ54oCTMTI1NilcIixcIuW6t+WFgyAoMTI1NuKAkzEyNTcpXCIsXCLmraPlmIkgKDEyNTfigJMxMjU5KVwiLFwi5q2j5YWDICgxMjU54oCTMTI2MClcIixcIuaWh+W6lCAoMTI2MOKAkzEyNjEpXCIsXCLlvJjplb8gKDEyNjHigJMxMjY0KVwiLFwi5paH5rC4ICgxMjY04oCTMTI3NSlcIixcIuW7uuayuyAoMTI3NeKAkzEyNzgpXCIsXCLlvJjlrokgKDEyNzjigJMxMjg4KVwiLFwi5q2j5bqUICgxMjg44oCTMTI5MylcIixcIuawuOS7gSAoMTI5M+KAkzEyOTkpXCIsXCLmraPlrokgKDEyOTnigJMxMzAyKVwiLFwi5bmy5YWDICgxMzAy4oCTMTMwMylcIixcIuWYieWFgyAoMTMwM+KAkzEzMDYpXCIsXCLlvrfmsrsgKDEzMDbigJMxMzA4KVwiLFwi5bu25bqGICgxMzA44oCTMTMxMSlcIixcIuW6lOmVvyAoMTMxMeKAkzEzMTIpXCIsXCLmraPlkowgKDEzMTLigJMxMzE3KVwiLFwi5paH5L+dICgxMzE34oCTMTMxOSlcIixcIuWFg+W6lCAoMTMxOeKAkzEzMjEpXCIsXCLlhYPkuqggKDEzMjHigJMxMzI0KVwiLFwi5q2j5LitICgxMzI04oCTMTMyNilcIixcIuWYieWOhiAoMTMyNuKAkzEzMjkpXCIsXCLlhYPlvrcgKDEzMjnigJMxMzMxKVwiLFwi5YWD5byYICgxMzMx4oCTMTMzNClcIixcIuW7uuatpiAoMTMzNOKAkzEzMzYpXCIsXCLlu7blhYMgKDEzMzbigJMxMzQwKVwiLFwi5YW05Zu9ICgxMzQw4oCTMTM0NilcIixcIuato+W5syAoMTM0NuKAkzEzNzApXCIsXCLlu7rlvrcgKDEzNzDigJMxMzcyKVwiLFwi5paH5LitICgxMzcy4oCTMTM3NSlcIixcIuWkqeaOiCAoMTM3NeKAkzEzNzkpXCIsXCLlurfljoYgKDEzNznigJMxMzgxKVwiLFwi5byY5ZKMICgxMzgx4oCTMTM4NClcIixcIuWFg+S4rSAoMTM4NOKAkzEzOTIpXCIsXCLoh7PlvrcgKDEzODTigJMxMzg3KVwiLFwi5ZiJ5bqGICgxMzg34oCTMTM4OSlcIixcIuW6t+W6lCAoMTM4OeKAkzEzOTApXCIsXCLmmI7lvrcgKDEzOTDigJMxMzk0KVwiLFwi5bqU5rC4ICgxMzk04oCTMTQyOClcIixcIuato+mVvyAoMTQyOOKAkzE0MjkpXCIsXCLmsLjkuqsgKDE0MjnigJMxNDQxKVwiLFwi5ZiJ5ZCJICgxNDQx4oCTMTQ0NClcIixcIuaWh+WuiSAoMTQ0NOKAkzE0NDkpXCIsXCLlrp3lvrcgKDE0NDnigJMxNDUyKVwiLFwi5Lqr5b63ICgxNDUy4oCTMTQ1NSlcIixcIuW6t+atoyAoMTQ1NeKAkzE0NTcpXCIsXCLplb/npoQgKDE0NTfigJMxNDYwKVwiLFwi5a695q2jICgxNDYw4oCTMTQ2NilcIixcIuaWh+atoyAoMTQ2NuKAkzE0NjcpXCIsXCLlupTku4EgKDE0NjfigJMxNDY5KVwiLFwi5paH5piOICgxNDY54oCTMTQ4NylcIixcIumVv+S6qyAoMTQ4N+KAkzE0ODkpXCIsXCLlu7blvrcgKDE0ODnigJMxNDkyKVwiLFwi5piO5bqUICgxNDky4oCTMTUwMSlcIixcIuaWh+m+nyAoMTUwMeKAkzE1MDQpXCIsXCLmsLjmraMgKDE1MDTigJMxNTIxKVwiLFwi5aSn5rC4ICgxNTIx4oCTMTUyOClcIixcIuS6q+emhCAoMTUyOOKAkzE1MzIpXCIsXCLlpKnmlocgKDE1MzLigJMxNTU1KVwiLFwi5byY5rK7ICgxNTU14oCTMTU1OClcIixcIuawuOemhCAoMTU1OOKAkzE1NzApXCIsXCLlhYPpvp8gKDE1NzDigJMxNTczKVwiLFwi5aSp5q2jICgxNTcz4oCTMTU5MilcIixcIuaWh+emhCAoMTU5MuKAkzE1OTYpXCIsXCLluobplb8gKDE1OTbigJMxNjE1KVwiLFwi5YWD5ZKMICgxNjE14oCTMTYyNClcIixcIuWuveawuCAoMTYyNOKAkzE2NDQpXCIsXCLmraPkv50gKDE2NDTigJMxNjQ4KVwiLFwi5bqG5a6JICgxNjQ44oCTMTY1MilcIixcIuaJv+W6lCAoMTY1MuKAkzE2NTUpXCIsXCLmmI7ljoYgKDE2NTXigJMxNjU4KVwiLFwi5LiH5rK7ICgxNjU44oCTMTY2MSlcIixcIuWuveaWhyAoMTY2MeKAkzE2NzMpXCIsXCLlu7blrp0gKDE2NzPigJMxNjgxKVwiLFwi5aSp5ZKMICgxNjgx4oCTMTY4NClcIixcIui0nuS6qyAoMTY4NOKAkzE2ODgpXCIsXCLlhYPnpoQgKDE2ODjigJMxNzA0KVwiLFwi5a6d5rC4ICgxNzA04oCTMTcxMSlcIixcIuato+W+tyAoMTcxMeKAkzE3MTYpXCIsXCLkuqvkv50gKDE3MTbigJMxNzM2KVwiLFwi5YWD5paHICgxNzM24oCTMTc0MSlcIixcIuWuveS/nSAoMTc0MeKAkzE3NDQpXCIsXCLlu7bkuqsgKDE3NDTigJMxNzQ4KVwiLFwi5a695bu2ICgxNzQ44oCTMTc1MSlcIixcIuWuneWOhiAoMTc1MeKAkzE3NjQpXCIsXCLmmI7lkowgKDE3NjTigJMxNzcyKVwiLFwi5a6J5rC4ICgxNzcy4oCTMTc4MSlcIixcIuWkqeaYjiAoMTc4MeKAkzE3ODkpXCIsXCLlrr3mlL8gKDE3ODnigJMxODAxKVwiLFwi5Lqr5ZKMICgxODAx4oCTMTgwNClcIixcIuaWh+WMliAoMTgwNOKAkzE4MTgpXCIsXCLmlofmlL8gKDE4MTjigJMxODMwKVwiLFwi5aSp5L+dICgxODMw4oCTMTg0NClcIixcIuW8mOWMliAoMTg0NOKAkzE4NDgpXCIsXCLlmInmsLggKDE4NDjigJMxODU0KVwiLFwi5a6J5pS/ICgxODU04oCTMTg2MClcIixcIuS4h+W7tiAoMTg2MOKAkzE4NjEpXCIsXCLmlofkuYUgKDE4NjHigJMxODY0KVwiLFwi5YWD5rK7ICgxODY04oCTMTg2NSlcIixcIuW6huW6lCAoMTg2NeKAkzE4NjgpXCIsXCLmmI7msrtcIixcIuWkp+ato1wiLFwi5pit5ZKMXCIsXCLlubPmiJBcIl19LGRheVBlcmlvZHM6e2FtOlwi5LiK5Y2IXCIscG06XCLkuIvljYhcIn19LHBlcnNpYW46e21vbnRoczp7bmFycm93OltcIjFcIixcIjJcIixcIjNcIixcIjRcIixcIjVcIixcIjZcIixcIjdcIixcIjhcIixcIjlcIixcIjEwXCIsXCIxMVwiLFwiMTJcIl0sc2hvcnQ6W1wiMeaciFwiLFwiMuaciFwiLFwiM+aciFwiLFwiNOaciFwiLFwiNeaciFwiLFwiNuaciFwiLFwiN+aciFwiLFwiOOaciFwiLFwiOeaciFwiLFwiMTDmnIhcIixcIjEx5pyIXCIsXCIxMuaciFwiXSxsb25nOltcIuS4gOaciFwiLFwi5LqM5pyIXCIsXCLkuInmnIhcIixcIuWbm+aciFwiLFwi5LqU5pyIXCIsXCLlha3mnIhcIixcIuS4g+aciFwiLFwi5YWr5pyIXCIsXCLkuZ3mnIhcIixcIuWNgeaciFwiLFwi5Y2B5LiA5pyIXCIsXCLljYHkuozmnIhcIl19LGRheXM6e25hcnJvdzpbXCLml6VcIixcIuS4gFwiLFwi5LqMXCIsXCLkuIlcIixcIuWbm1wiLFwi5LqUXCIsXCLlha1cIl0sc2hvcnQ6W1wi5ZGo5pelXCIsXCLlkajkuIBcIixcIuWRqOS6jFwiLFwi5ZGo5LiJXCIsXCLlkajlm5tcIixcIuWRqOS6lFwiLFwi5ZGo5YWtXCJdLGxvbmc6W1wi5pif5pyf5pelXCIsXCLmmJ/mnJ/kuIBcIixcIuaYn+acn+S6jFwiLFwi5pif5pyf5LiJXCIsXCLmmJ/mnJ/lm5tcIixcIuaYn+acn+S6lFwiLFwi5pif5pyf5YWtXCJdfSxlcmFzOntuYXJyb3c6W1wi5rOi5pav5Y6GXCJdLHNob3J0OltcIuazouaWr+WOhlwiXSxsb25nOltcIuazouaWr+WOhlwiXX0sZGF5UGVyaW9kczp7YW06XCLkuIrljYhcIixwbTpcIuS4i+WNiFwifX0scm9jOnttb250aHM6e25hcnJvdzpbXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCIxMFwiLFwiMTFcIixcIjEyXCJdLHNob3J0OltcIjHmnIhcIixcIjLmnIhcIixcIjPmnIhcIixcIjTmnIhcIixcIjXmnIhcIixcIjbmnIhcIixcIjfmnIhcIixcIjjmnIhcIixcIjnmnIhcIixcIjEw5pyIXCIsXCIxMeaciFwiLFwiMTLmnIhcIl0sbG9uZzpbXCLkuIDmnIhcIixcIuS6jOaciFwiLFwi5LiJ5pyIXCIsXCLlm5vmnIhcIixcIuS6lOaciFwiLFwi5YWt5pyIXCIsXCLkuIPmnIhcIixcIuWFq+aciFwiLFwi5Lmd5pyIXCIsXCLljYHmnIhcIixcIuWNgeS4gOaciFwiLFwi5Y2B5LqM5pyIXCJdfSxkYXlzOntuYXJyb3c6W1wi5pelXCIsXCLkuIBcIixcIuS6jFwiLFwi5LiJXCIsXCLlm5tcIixcIuS6lFwiLFwi5YWtXCJdLHNob3J0OltcIuWRqOaXpVwiLFwi5ZGo5LiAXCIsXCLlkajkuoxcIixcIuWRqOS4iVwiLFwi5ZGo5ZubXCIsXCLlkajkupRcIixcIuWRqOWFrVwiXSxsb25nOltcIuaYn+acn+aXpVwiLFwi5pif5pyf5LiAXCIsXCLmmJ/mnJ/kuoxcIixcIuaYn+acn+S4iVwiLFwi5pif5pyf5ZubXCIsXCLmmJ/mnJ/kupRcIixcIuaYn+acn+WFrVwiXX0sZXJhczp7bmFycm93OltcIuawkeWbveWJjVwiLFwi5rCR5Zu9XCJdLHNob3J0OltcIuawkeWbveWJjVwiLFwi5rCR5Zu9XCJdLGxvbmc6W1wi5rCR5Zu95YmNXCIsXCLmsJHlm71cIl19LGRheVBlcmlvZHM6e2FtOlwi5LiK5Y2IXCIscG06XCLkuIvljYhcIn19fX0sbnVtYmVyOntudTpbXCJsYXRuXCJdLHBhdHRlcm5zOntkZWNpbWFsOntwb3NpdGl2ZVBhdHRlcm46XCJ7bnVtYmVyfVwiLG5lZ2F0aXZlUGF0dGVybjpcIi17bnVtYmVyfVwifSxjdXJyZW5jeTp7cG9zaXRpdmVQYXR0ZXJuOlwie2N1cnJlbmN5fXtudW1iZXJ9XCIsbmVnYXRpdmVQYXR0ZXJuOlwiLXtjdXJyZW5jeX17bnVtYmVyfVwifSxwZXJjZW50Ontwb3NpdGl2ZVBhdHRlcm46XCJ7bnVtYmVyfSVcIixuZWdhdGl2ZVBhdHRlcm46XCIte251bWJlcn0lXCJ9fSxzeW1ib2xzOntoYW5pZGVjOntkZWNpbWFsOlwiLlwiLGdyb3VwOlwiLFwiLG5hbjpcIk5hTlwiLHBlcmNlbnQ6XCIlXCIsaW5maW5pdHk6XCLiiJ5cIn0sbGF0bjp7ZGVjaW1hbDpcIi5cIixncm91cDpcIixcIixuYW46XCJOYU5cIixwZXJjZW50OlwiJVwiLGluZmluaXR5Olwi4oieXCJ9fSxjdXJyZW5jaWVzOntBVUQ6XCJBVSRcIixCUkw6XCJSJFwiLENBRDpcIkNBJFwiLENOWTpcIu+/pVwiLEVVUjpcIuKCrFwiLEdCUDpcIsKjXCIsSEtEOlwiSEskXCIsSUxSOlwiSUxTXCIsSUxTOlwi4oKqXCIsSU5SOlwi4oK5XCIsSlBZOlwiSlDCpVwiLEtSVzpcIu+/plwiLE1YTjpcIk1YJFwiLE5aRDpcIk5aJFwiLFRXRDpcIk5UJFwiLFVTRDpcIlVTJFwiLFZORDpcIuKCq1wiLFhBRjpcIkZDRkFcIixYQ0Q6XCJFQyRcIixYT0Y6XCJDRkFcIixYUEY6XCJDRlBGXCJ9fX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ludGwvbG9jYWxlLWRhdGEvanNvbnAvemguanNcbiAqKiBtb2R1bGUgaWQgPSAxMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIGpzbGludCBlc25leHQ6IHRydWUgKi9cblxuLy8gTWF0Y2ggdGhlc2UgZGF0ZXRpbWUgY29tcG9uZW50cyBpbiBhIENMRFIgcGF0dGVybiwgZXhjZXB0IHRob3NlIGluIHNpbmdsZSBxdW90ZXNcblwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5jcmVhdGVEYXRlVGltZUZvcm1hdCA9IGNyZWF0ZURhdGVUaW1lRm9ybWF0LCBleHBvcnRzLmNyZWF0ZURhdGVUaW1lRm9ybWF0cyA9IGNyZWF0ZURhdGVUaW1lRm9ybWF0cztcbnZhciBleHBEVENvbXBvbmVudHMgPSAvKD86W0VlY117MSw2fXxHezEsNX18W1FxXXsxLDV9fCg/Olt5WXVyXSt8VXsxLDV9KXxbTUxdezEsNX18ZHsxLDJ9fER7MSwzfXxGezF9fFthYkJdezEsNX18W2hrSEtdezEsMn18d3sxLDJ9fFd7MX18bXsxLDJ9fHN7MSwyfXxbelpPdlZ4WF17MSw0fSkoPz0oW14nXSonW14nXSonKSpbXiddKiQpL2c7XG4vLyB0cmltIHBhdHRlcm5zIGFmdGVyIHRyYW5zZm9ybWF0aW9uc1xudmFyIGV4cFBhdHRlcm5UcmltbWVyID0gL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nO1xuLy8gU2tpcCBvdmVyIHBhdHRlcm5zIHdpdGggdGhlc2UgZGF0ZXRpbWUgY29tcG9uZW50cyBiZWNhdXNlIHdlIGRvbid0IGhhdmUgZGF0YVxuLy8gdG8gYmFjayB0aGVtIHVwOlxuLy8gdGltZXpvbmUsIHdlZWtkYXksIGFtb3VuZyBvdGhlcnNcbnZhciB1bndhbnRlZERUQ3MgPSAvW3JxUXhYVk92WkFTakpnd1dJUXFdLztcblxudmFyIGR0S2V5cyA9IFtcIndlZWtkYXlcIiwgXCJlcmFcIiwgXCJ5ZWFyXCIsIFwibW9udGhcIiwgXCJkYXlcIiwgXCJ3ZWVrZGF5XCIsIFwicXVhcnRlclwiXTtcbnZhciB0bUtleXMgPSBbXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCIsIFwiaG91cjEyXCIsIFwidGltZVpvbmVOYW1lXCJdO1xuXG5mdW5jdGlvbiBpc0RhdGVGb3JtYXRPbmx5KG9iaikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG1LZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkodG1LZXlzW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc1RpbWVGb3JtYXRPbmx5KG9iaikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZHRLZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoZHRLZXlzW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBqb2luRGF0ZUFuZFRpbWVGb3JtYXRzKGRhdGVGb3JtYXRPYmosIHRpbWVGb3JtYXRPYmopIHtcbiAgICB2YXIgbyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZHRLZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChkYXRlRm9ybWF0T2JqW2R0S2V5c1tpXV0pIHtcbiAgICAgICAgICAgIG9bZHRLZXlzW2ldXSA9IGRhdGVGb3JtYXRPYmpbZHRLZXlzW2ldXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRtS2V5cy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBpZiAodGltZUZvcm1hdE9ialt0bUtleXNbal1dKSB7XG4gICAgICAgICAgICBvW3RtS2V5c1tqXV0gPSB0aW1lRm9ybWF0T2JqW3RtS2V5c1tqXV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG87XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVGaW5hbFBhdHRlcm5zKGZvcm1hdE9iaikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X1BhdHRlcm5zOlxuICAgIC8vICAnSW4gcGF0dGVybnMsIHR3byBzaW5nbGUgcXVvdGVzIHJlcHJlc2VudHMgYSBsaXRlcmFsIHNpbmdsZSBxdW90ZSwgZWl0aGVyXG4gICAgLy8gICBpbnNpZGUgb3Igb3V0c2lkZSBzaW5nbGUgcXVvdGVzLiBUZXh0IHdpdGhpbiBzaW5nbGUgcXVvdGVzIGlzIG5vdFxuICAgIC8vICAgaW50ZXJwcmV0ZWQgaW4gYW55IHdheSAoZXhjZXB0IGZvciB0d28gYWRqYWNlbnQgc2luZ2xlIHF1b3RlcykuJ1xuICAgIGZvcm1hdE9iai5wYXR0ZXJuMTIgPSBmb3JtYXRPYmouZXh0ZW5kZWRQYXR0ZXJuLnJlcGxhY2UoLycoW14nXSopJy9nLCBmdW5jdGlvbiAoJDAsIGxpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwgPyBsaXRlcmFsIDogXCInXCI7XG4gICAgfSk7XG5cbiAgICAvLyBwYXR0ZXJuIDEyIGlzIGFsd2F5cyB0aGUgZGVmYXVsdC4gd2UgY2FuIHByb2R1Y2UgdGhlIDI0IGJ5IHJlbW92aW5nIHthbXBtfVxuICAgIGZvcm1hdE9iai5wYXR0ZXJuID0gZm9ybWF0T2JqLnBhdHRlcm4xMi5yZXBsYWNlKCd7YW1wbX0nLCAnJykucmVwbGFjZShleHBQYXR0ZXJuVHJpbW1lciwgJycpO1xuICAgIHJldHVybiBmb3JtYXRPYmo7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGVUaW1lRm9ybWF0KHNrZWxldG9uLCBwYXR0ZXJuKSB7XG4gICAgLy8gd2UgaWdub3JlIGNlcnRhaW4gcGF0dGVybnMgdGhhdCBhcmUgdW5zdXBwb3J0ZWQgdG8gYXZvaWQgdGhpcyBleHBlbnNpdmUgb3AuXG4gICAgaWYgKHVud2FudGVkRFRDcy50ZXN0KHBhdHRlcm4pKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgdmFyIGZvcm1hdE9iaiA9IHtcbiAgICAgICAgb3JpZ2luYWxQYXR0ZXJuOiBwYXR0ZXJuXG4gICAgfTtcblxuICAgIC8vIFJlcGxhY2UgdGhlIHBhdHRlcm4gc3RyaW5nIHdpdGggdGhlIG9uZSByZXF1aXJlZCBieSB0aGUgc3BlY2lmaWNhdGlvbiwgd2hpbHN0XG4gICAgLy8gYXQgdGhlIHNhbWUgdGltZSBldmFsdWF0aW5nIGl0IGZvciB0aGUgc3Vic2V0cyBhbmQgZm9ybWF0c1xuICAgIGZvcm1hdE9iai5leHRlbmRlZFBhdHRlcm4gPSBwYXR0ZXJuLnJlcGxhY2UoZXhwRFRDb21wb25lbnRzLCBmdW5jdGlvbiAoJDApIHtcbiAgICAgICAgLy8gU2VlIHdoaWNoIHN5bWJvbCB3ZSdyZSBkZWFsaW5nIHdpdGhcbiAgICAgICAgc3dpdGNoICgkMC5jaGFyQXQoMCkpIHtcblxuICAgICAgICAgICAgLy8gLS0tIEVyYVxuICAgICAgICAgICAgY2FzZSAnRyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd7ZXJhfSc7XG5cbiAgICAgICAgICAgIC8vIC0tLSBZZWFyXG4gICAgICAgICAgICBjYXNlICd5JzpcbiAgICAgICAgICAgIGNhc2UgJ1knOlxuICAgICAgICAgICAgY2FzZSAndSc6XG4gICAgICAgICAgICBjYXNlICdVJzpcbiAgICAgICAgICAgIGNhc2UgJ3InOlxuICAgICAgICAgICAgICAgIHJldHVybiAne3llYXJ9JztcblxuICAgICAgICAgICAgLy8gLS0tIFF1YXJ0ZXIgKG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBwb2x5ZmlsbClcbiAgICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd7cXVhcnRlcn0nO1xuXG4gICAgICAgICAgICAvLyAtLS0gTW9udGhcbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd7bW9udGh9JztcblxuICAgICAgICAgICAgLy8gLS0tIFdlZWsgKG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBwb2x5ZmlsbClcbiAgICAgICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgICAgY2FzZSAnVyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd7d2Vla2RheX0nO1xuXG4gICAgICAgICAgICAvLyAtLS0gRGF5XG4gICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICAgICAgY2FzZSAnRic6XG4gICAgICAgICAgICBjYXNlICdnJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3tkYXl9JztcblxuICAgICAgICAgICAgLy8gLS0tIFdlZWsgRGF5XG4gICAgICAgICAgICBjYXNlICdFJzpcbiAgICAgICAgICAgIGNhc2UgJ2UnOlxuICAgICAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd7d2Vla2RheX0nO1xuXG4gICAgICAgICAgICAvLyAtLS0gUGVyaW9kXG4gICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgIGNhc2UgJ2InOlxuICAgICAgICAgICAgY2FzZSAnQic6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd7YW1wbX0nO1xuXG4gICAgICAgICAgICAvLyAtLS0gSG91clxuICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgIGNhc2UgJ2snOlxuICAgICAgICAgICAgY2FzZSAnSyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd7aG91cn0nO1xuXG4gICAgICAgICAgICAvLyAtLS0gTWludXRlXG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3ttaW51dGV9JztcblxuICAgICAgICAgICAgLy8gLS0tIFNlY29uZFxuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgICAgICAgIHJldHVybiAne3NlY29uZH0nO1xuXG4gICAgICAgICAgICAvLyAtLS0gVGltZXpvbmVcbiAgICAgICAgICAgIGNhc2UgJ3onOlxuICAgICAgICAgICAgY2FzZSAnWic6XG4gICAgICAgICAgICBjYXNlICdPJzpcbiAgICAgICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICBjYXNlICdYJzpcbiAgICAgICAgICAgIGNhc2UgJ3gnOlxuICAgICAgICAgICAgICAgIHJldHVybiAne3RpbWVab25lTmFtZX0nO1xuXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIE1hdGNoIHRoZSBza2VsZXRvbiBzdHJpbmcgd2l0aCB0aGUgb25lIHJlcXVpcmVkIGJ5IHRoZSBzcGVjaWZpY2F0aW9uXG4gICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBiYXNlZCBvbiB0aGUgRGF0ZSBGaWVsZCBTeW1ib2wgVGFibGU6XG4gICAgLy8gaHR0cDovL3VuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAgICAvLyBOb3RlOiB3ZSBhcmUgYWRkaW5nIGV4dHJhIGRhdGEgdG8gdGhlIGZvcm1hdE9iamVjdCBldmVuIHRob3VnaCB0aGlzIHBvbHlmaWxsXG4gICAgLy8gICAgICAgbWlnaHQgbm90IHN1cHBvcnQgaXQuXG4gICAgc2tlbGV0b24ucmVwbGFjZShleHBEVENvbXBvbmVudHMsIGZ1bmN0aW9uICgkMCkge1xuICAgICAgICAvLyBTZWUgd2hpY2ggc3ltYm9sIHdlJ3JlIGRlYWxpbmcgd2l0aFxuICAgICAgICBzd2l0Y2ggKCQwLmNoYXJBdCgwKSkge1xuXG4gICAgICAgICAgICAvLyAtLS0gRXJhXG4gICAgICAgICAgICBjYXNlICdHJzpcbiAgICAgICAgICAgICAgICBmb3JtYXRPYmouZXJhID0gWyAnc2hvcnQnLCAnc2hvcnQnLCAnc2hvcnQnLCAnbG9uZycsICduYXJyb3cnIF1bJDAubGVuZ3RoLTFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyAtLS0gWWVhclxuICAgICAgICAgICAgY2FzZSAneSc6XG4gICAgICAgICAgICBjYXNlICdZJzpcbiAgICAgICAgICAgIGNhc2UgJ3UnOlxuICAgICAgICAgICAgY2FzZSAnVSc6XG4gICAgICAgICAgICAgICAgZm9ybWF0T2JqLnllYXIgPSAkMC5sZW5ndGggPT09IDIgPyAnMi1kaWdpdCcgOiAnbnVtZXJpYyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBjYXNlICdyJzpcbiAgICAgICAgICAgICAgICAvLyByOiAxLi5uIC0gRm9yIHRoZSBHcmVnb3JpYW4gY2FsZW5kYXIsIHRoZSAncicgeWVhciBpcyB0aGUgc2FtZSBhcyB0aGUgJ3UnIHllYXIuXG4gICAgICAgICAgICAgICAgLy8gYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIC0tLSBRdWFydGVyIChub3Qgc3VwcG9ydGVkIGluIHRoaXMgcG9seWZpbGwpXG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgICAgICAgIGZvcm1hdE9iai5xdWFydGVyID0gWyAnbnVtZXJpYycsICcyLWRpZ2l0JywgJ3Nob3J0JywgJ2xvbmcnLCAnbmFycm93JyBdWyQwLmxlbmd0aC0xXTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gLS0tIE1vbnRoXG4gICAgICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgICAgIGZvcm1hdE9iai5tb250aCA9IFsgJ251bWVyaWMnLCAnMi1kaWdpdCcsICdzaG9ydCcsICdsb25nJywgJ25hcnJvdycgXVskMC5sZW5ndGgtMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIC0tLSBXZWVrIChub3Qgc3VwcG9ydGVkIGluIHRoaXMgcG9seWZpbGwpXG4gICAgICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgICAgICAgICAvLyB3ZWVrIG9mIHRoZSB5ZWFyXG4gICAgICAgICAgICAgICAgZm9ybWF0T2JqLndlZWsgPSAkMC5sZW5ndGggPT09IDIgPyAnMi1kaWdpdCcgOiAnbnVtZXJpYyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdXJzpcbiAgICAgICAgICAgICAgICAvLyB3ZWVrIG9mIHRoZSBtb250aFxuICAgICAgICAgICAgICAgIGZvcm1hdE9iai53ZWVrID0gJ251bWVyaWMnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyAtLS0gRGF5XG4gICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgICAgICAvLyBkYXkgb2YgdGhlIG1vbnRoXG4gICAgICAgICAgICAgICAgZm9ybWF0T2JqLmRheSA9ICQwLmxlbmd0aCA9PT0gMiA/ICcyLWRpZ2l0JyA6ICdudW1lcmljJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICAgICAgICAgIC8vIGRheSBvZiB0aGUgeWVhclxuICAgICAgICAgICAgICAgIGZvcm1hdE9iai5kYXkgPSAnbnVtZXJpYyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdGJzpcbiAgICAgICAgICAgICAgICAvLyBkYXkgb2YgdGhlIHdlZWtcbiAgICAgICAgICAgICAgICBmb3JtYXRPYmouZGF5ID0gJ251bWVyaWMnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSAnZyc6XG4gICAgICAgICAgICAgICAgLy8gMS4ubjogTW9kaWZpZWQgSnVsaWFuIGRheVxuICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyAtLS0gV2VlayBEYXlcbiAgICAgICAgICAgIGNhc2UgJ0UnOlxuICAgICAgICAgICAgICAgIC8vIGRheSBvZiB0aGUgd2Vla1xuICAgICAgICAgICAgICAgIGZvcm1hdE9iai53ZWVrZGF5ID0gWyAnc2hvcnQnLCAnc2hvcnQnLCAnc2hvcnQnLCAnbG9uZycsICduYXJyb3cnLCAnc2hvcnQnIF1bJDAubGVuZ3RoLTFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZSc6XG4gICAgICAgICAgICAgICAgLy8gbG9jYWwgZGF5IG9mIHRoZSB3ZWVrXG4gICAgICAgICAgICAgICAgZm9ybWF0T2JqLndlZWtkYXkgPSBbICdudW1lcmljJywgJzItZGlnaXQnLCAnc2hvcnQnLCAnbG9uZycsICduYXJyb3cnLCAnc2hvcnQnIF1bJDAubGVuZ3RoLTFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgICAgICAgLy8gc3RhbmQgYWxvbmUgbG9jYWwgZGF5IG9mIHRoZSB3ZWVrXG4gICAgICAgICAgICAgICAgZm9ybWF0T2JqLndlZWtkYXkgPSBbICdudW1lcmljJywgdW5kZWZpbmVkLCAnc2hvcnQnLCAnbG9uZycsICduYXJyb3cnLCAnc2hvcnQnIF1bJDAubGVuZ3RoLTFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyAtLS0gUGVyaW9kXG4gICAgICAgICAgICBjYXNlICdhJzogLy8gQU0sIFBNXG4gICAgICAgICAgICBjYXNlICdiJzogLy8gYW0sIHBtLCBub29uLCBtaWRuaWdodFxuICAgICAgICAgICAgY2FzZSAnQic6IC8vIGZsZXhpYmxlIGRheSBwZXJpb2RzXG4gICAgICAgICAgICAgICAgZm9ybWF0T2JqLmhvdXIxMiA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIC0tLSBIb3VyXG4gICAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgIGNhc2UgJ2snOlxuICAgICAgICAgICAgICAgIGZvcm1hdE9iai5ob3VyID0gJDAubGVuZ3RoID09PSAyID8gJzItZGlnaXQnIDogJ251bWVyaWMnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICBjYXNlICdLJzpcbiAgICAgICAgICAgICAgICBmb3JtYXRPYmouaG91cjEyID0gdHJ1ZTsgLy8gMTItaG91ci1jeWNsZSB0aW1lIGZvcm1hdHMgKHVzaW5nIGggb3IgSylcbiAgICAgICAgICAgICAgICBmb3JtYXRPYmouaG91ciA9ICQwLmxlbmd0aCA9PT0gMiA/ICcyLWRpZ2l0JyA6ICdudW1lcmljJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gLS0tIE1pbnV0ZVxuICAgICAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgICAgICAgZm9ybWF0T2JqLm1pbnV0ZSA9ICQwLmxlbmd0aCA9PT0gMiA/ICcyLWRpZ2l0JyA6ICdudW1lcmljJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gLS0tIFNlY29uZFxuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgZm9ybWF0T2JqLnNlY29uZCA9ICQwLmxlbmd0aCA9PT0gMiA/ICcyLWRpZ2l0JyA6ICdudW1lcmljJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNhc2UgJ1MnOiAvLyAxLi5uOiBmYWN0aW9uYWwgc2Vjb25kc1xuICAgICAgICAgICAgLy8gY2FzZSAnQSc6IC8vIDEuLm46IG1pbGlzZWNvbmRzIGluIGRheVxuXG4gICAgICAgICAgICAvLyAtLS0gVGltZXpvbmVcbiAgICAgICAgICAgIGNhc2UgJ3onOiAvLyAxLi4zLCA0OiBzcGVjaWZpYyBub24tbG9jYXRpb24gZm9ybWF0XG4gICAgICAgICAgICBjYXNlICdaJzogLy8gMS4uMywgNCwgNTogVGhlIElTTzg2MDEgdmFyaW9zIGZvcm1hdHNcbiAgICAgICAgICAgIGNhc2UgJ08nOiAvLyAxLCA0OiBtaWxpc2Vjb25kcyBpbiBkYXkgc2hvcnQsIGxvbmdcbiAgICAgICAgICAgIGNhc2UgJ3YnOiAvLyAxLCA0OiBnZW5lcmljIG5vbi1sb2NhdGlvbiBmb3JtYXRcbiAgICAgICAgICAgIGNhc2UgJ1YnOiAvLyAxLCAyLCAzLCA0OiB0aW1lIHpvbmUgSUQgb3IgY2l0eVxuICAgICAgICAgICAgY2FzZSAnWCc6IC8vIDEsIDIsIDMsIDQ6IFRoZSBJU084NjAxIHZhcmlvcyBmb3JtYXRzXG4gICAgICAgICAgICBjYXNlICd4JzogLy8gMSwgMiwgMywgNDogVGhlIElTTzg2MDEgdmFyaW9zIGZvcm1hdHNcbiAgICAgICAgICAgICAgICAvLyB0aGlzIHBvbHlmaWxsIG9ubHkgc3VwcG9ydHMgbXVjaCwgZm9yIG5vdywgd2UgYXJlIGp1c3QgZG9pbmcgc29tZXRoaW5nIGR1bW15XG4gICAgICAgICAgICAgICAgZm9ybWF0T2JqLnRpbWVab25lTmFtZSA9ICQwLmxlbmd0aCA8IDQgPyAnc2hvcnQnIDogJ2xvbmcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wdXRlRmluYWxQYXR0ZXJucyhmb3JtYXRPYmopO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXRlVGltZUZvcm1hdHMoZm9ybWF0cykge1xuICAgIHZhciBhdmFpbGFibGVGb3JtYXRzID0gZm9ybWF0cy5hdmFpbGFibGVGb3JtYXRzO1xuICAgIHZhciB0aW1lRm9ybWF0cyA9IGZvcm1hdHMudGltZUZvcm1hdHM7XG4gICAgdmFyIGRhdGVGb3JtYXRzID0gZm9ybWF0cy5kYXRlRm9ybWF0cztcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIHNrZWxldG9uLCBwYXR0ZXJuLCBjb21wdXRlZCwgaSwgajtcbiAgICB2YXIgdGltZVJlbGF0ZWRGb3JtYXRzID0gW107XG4gICAgdmFyIGRhdGVSZWxhdGVkRm9ybWF0cyA9IFtdO1xuXG4gICAgLy8gTWFwIGF2YWlsYWJsZSAoY3VzdG9tKSBmb3JtYXRzIGludG8gYSBwYXR0ZXJuIGZvciBjcmVhdGVEYXRlVGltZUZvcm1hdHNcbiAgICBmb3IgKHNrZWxldG9uIGluIGF2YWlsYWJsZUZvcm1hdHMpIHtcbiAgICAgICAgaWYgKGF2YWlsYWJsZUZvcm1hdHMuaGFzT3duUHJvcGVydHkoc2tlbGV0b24pKSB7XG4gICAgICAgICAgICBwYXR0ZXJuID0gYXZhaWxhYmxlRm9ybWF0c1tza2VsZXRvbl07XG4gICAgICAgICAgICBjb21wdXRlZCA9IGNyZWF0ZURhdGVUaW1lRm9ybWF0KHNrZWxldG9uLCBwYXR0ZXJuKTtcbiAgICAgICAgICAgIGlmIChjb21wdXRlZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbXB1dGVkKTtcbiAgICAgICAgICAgICAgICAvLyBpbiBzb21lIGNhc2VzLCB0aGUgZm9ybWF0IGlzIG9ubHkgZGlzcGxheWluZyBkYXRlIHNwZWNpZmljIHByb3BzXG4gICAgICAgICAgICAgICAgLy8gb3IgdGltZSBzcGVjaWZpYyBwcm9wcywgaW4gd2hpY2ggY2FzZSB3ZSBuZWVkIHRvIGFsc28gcHJvZHVjZSB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb21iaW5lZCBmb3JtYXRzLlxuICAgICAgICAgICAgICAgIGlmIChpc0RhdGVGb3JtYXRPbmx5KGNvbXB1dGVkKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlUmVsYXRlZEZvcm1hdHMucHVzaChjb21wdXRlZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1RpbWVGb3JtYXRPbmx5KGNvbXB1dGVkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lUmVsYXRlZEZvcm1hdHMucHVzaChjb21wdXRlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWFwIHRpbWUgZm9ybWF0cyBpbnRvIGEgcGF0dGVybiBmb3IgY3JlYXRlRGF0ZVRpbWVGb3JtYXRzXG4gICAgZm9yIChza2VsZXRvbiBpbiB0aW1lRm9ybWF0cykge1xuICAgICAgICBpZiAodGltZUZvcm1hdHMuaGFzT3duUHJvcGVydHkoc2tlbGV0b24pKSB7XG4gICAgICAgICAgICBwYXR0ZXJuID0gdGltZUZvcm1hdHNbc2tlbGV0b25dO1xuICAgICAgICAgICAgY29tcHV0ZWQgPSBjcmVhdGVEYXRlVGltZUZvcm1hdChza2VsZXRvbiwgcGF0dGVybik7XG4gICAgICAgICAgICBpZiAoY29tcHV0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb21wdXRlZCk7XG4gICAgICAgICAgICAgICAgdGltZVJlbGF0ZWRGb3JtYXRzLnB1c2goY29tcHV0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWFwIGRhdGUgZm9ybWF0cyBpbnRvIGEgcGF0dGVybiBmb3IgY3JlYXRlRGF0ZVRpbWVGb3JtYXRzXG4gICAgZm9yIChza2VsZXRvbiBpbiBkYXRlRm9ybWF0cykge1xuICAgICAgICBpZiAoZGF0ZUZvcm1hdHMuaGFzT3duUHJvcGVydHkoc2tlbGV0b24pKSB7XG4gICAgICAgICAgICBwYXR0ZXJuID0gZGF0ZUZvcm1hdHNbc2tlbGV0b25dO1xuICAgICAgICAgICAgY29tcHV0ZWQgPSBjcmVhdGVEYXRlVGltZUZvcm1hdChza2VsZXRvbiwgcGF0dGVybik7XG4gICAgICAgICAgICBpZiAoY29tcHV0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb21wdXRlZCk7XG4gICAgICAgICAgICAgICAgZGF0ZVJlbGF0ZWRGb3JtYXRzLnB1c2goY29tcHV0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29tYmluZSBjdXN0b20gdGltZSBhbmQgY3VzdG9tIGRhdGUgZm9ybWF0cyB3aGVuIHRoZXkgYXJlIG9ydGhvZ29uYWxzIHRvIGNvbXBsZXRlIHRoZVxuICAgIC8vIGZvcm1hdHMgc3VwcG9ydGVkIGJ5IENMRFIuXG4gICAgLy8gVGhpcyBBbGdvIGlzIGJhc2VkIG9uIHNlY3Rpb24gXCJNaXNzaW5nIFNrZWxldG9uIEZpZWxkc1wiIGZyb206XG4gICAgLy8gaHR0cDovL3VuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjYXZhaWxhYmxlRm9ybWF0c19hcHBlbmRJdGVtc1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aW1lUmVsYXRlZEZvcm1hdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGRhdGVSZWxhdGVkRm9ybWF0cy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgaWYgKGRhdGVSZWxhdGVkRm9ybWF0c1tqXS5tb250aCA9PT0gJ2xvbmcnKSB7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA9IGRhdGVSZWxhdGVkRm9ybWF0c1tqXS53ZWVrZGF5ID8gZm9ybWF0cy5mdWxsIDogZm9ybWF0cy5sb25nO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlUmVsYXRlZEZvcm1hdHNbal0ubW9udGggPT09ICdzaG9ydCcpIHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuID0gZm9ybWF0cy5tZWRpdW07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gPSBmb3JtYXRzLnNob3J0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcHV0ZWQgPSBqb2luRGF0ZUFuZFRpbWVGb3JtYXRzKGRhdGVSZWxhdGVkRm9ybWF0c1tqXSwgdGltZVJlbGF0ZWRGb3JtYXRzW2ldKTtcbiAgICAgICAgICAgIGNvbXB1dGVkLm9yaWdpbmFsUGF0dGVybiA9IHBhdHRlcm47XG4gICAgICAgICAgICBjb21wdXRlZC5leHRlbmRlZFBhdHRlcm4gPSBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3swfScsIHRpbWVSZWxhdGVkRm9ybWF0c1tpXS5leHRlbmRlZFBhdHRlcm4pXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3sxfScsIGRhdGVSZWxhdGVkRm9ybWF0c1tqXS5leHRlbmRlZFBhdHRlcm4pXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL15bLFxcc10rfFssXFxzXSskL2dpLCAnJyk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChjb21wdXRlRmluYWxQYXR0ZXJucyhjb21wdXRlZCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xkci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbnRsL2xpYi9jbGRyLmpzXG4gKiogbW9kdWxlIGlkID0gMzE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAyMDEzIEFuZHkgRWFybnNoYXcsIE1JVCBMaWNlbnNlXG4gKlxuICogSW1wbGVtZW50cyB0aGUgRUNNQVNjcmlwdCBJbnRlcm5hdGlvbmFsaXphdGlvbiBBUEkgaW4gRVM1LWNvbXBhdGlibGUgZW52aXJvbm1lbnRzLFxuICogZm9sbG93aW5nIHRoZSBFQ01BLTQwMiBzcGVjaWZpY2F0aW9uIGFzIGNsb3NlbHkgYXMgcG9zc2libGVcbiAqXG4gKiBFQ01BLTQwMjogaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS00MDIvMS4wL1xuICpcbiAqIENMRFIgZm9ybWF0IGxvY2FsZSBkYXRhIHNob3VsZCBiZSBwcm92aWRlZCB1c2luZyBJbnRsUG9seWZpbGwuX19hZGRMb2NhbGVEYXRhKCkuXG4gKi9cbi8qanNoaW50IGVzbmV4dDogdHJ1ZSwgcHJvdG86dHJ1ZSwgZXFudWxsOnRydWUsIGJvc3M6dHJ1ZSwgbGF4YnJlYWs6dHJ1ZSwgbmV3Y2FwOmZhbHNlLCBzaGFkb3c6dHJ1ZSwgZnVuY3Njb3BlOnRydWUgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgc3JjJGV4cCQkID0gcmVxdWlyZShcIi4vZXhwXCIpLCBzcmMkY2xkciQkID0gcmVxdWlyZShcIi4vY2xkclwiKTtcblxudmFyIEludGwgPSB7fSxcblxuICAgIHJlYWxEZWZpbmVQcm9wID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbnRpbmVsID0ge307XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VudGluZWwsICdhJywge30pO1xuICAgICAgICAgICAgcmV0dXJuICdhJyBpbiBzZW50aW5lbDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSkoKSxcblxuICAgIC8vIE5lZWQgYSB3b3JrYXJvdW5kIGZvciBnZXR0ZXJzIGluIEVTM1xuICAgIGVzMyAgPSAhcmVhbERlZmluZVByb3AgJiYgIU9iamVjdC5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXyxcblxuICAgIC8vIFdlIHVzZSB0aGlzIGEgbG90IChhbmQgbmVlZCBpdCBmb3IgcHJvdG8tbGVzcyBvYmplY3RzKVxuICAgIGhvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG5cbiAgICAvLyBOYWl2ZSBkZWZpbmVQcm9wZXJ0eSBmb3IgY29tcGF0aWJpbGl0eVxuICAgIGRlZmluZVByb3BlcnR5ID0gcmVhbERlZmluZVByb3AgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiAob2JqLCBuYW1lLCBkZXNjKSB7XG4gICAgICAgIGlmICgnZ2V0JyBpbiBkZXNjICYmIG9iai5fX2RlZmluZUdldHRlcl9fKVxuICAgICAgICAgICAgb2JqLl9fZGVmaW5lR2V0dGVyX18obmFtZSwgZGVzYy5nZXQpO1xuXG4gICAgICAgIGVsc2UgaWYgKCFob3AuY2FsbChvYmosIG5hbWUpIHx8ICd2YWx1ZScgaW4gZGVzYylcbiAgICAgICAgICAgIG9ialtuYW1lXSA9IGRlc2MudmFsdWU7XG4gICAgfSxcblxuICAgIC8vIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLCBhcyBnb29kIGFzIHdlIG5lZWQgaXQgdG8gYmVcbiAgICBhcnJJbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YgfHwgZnVuY3Rpb24gKHNlYXJjaCkge1xuICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIGlmICghdC5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gLTE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IGFyZ3VtZW50c1sxXSB8fCAwLCBtYXggPSB0Lmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodFtpXSA9PT0gc2VhcmNoKVxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH0sXG5cbiAgICAvLyBDcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlIHNwZWNpZmllZCBwcm90b3R5cGUgKDJuZCBhcmcgcmVxdWlyZWQgZm9yIFJlY29yZClcbiAgICBvYmpDcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIChwcm90bywgcHJvcHMpIHtcbiAgICAgICAgdmFyIG9iajtcblxuICAgICAgICBmdW5jdGlvbiBGKCkge31cbiAgICAgICAgRi5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgICAgb2JqID0gbmV3IEYoKTtcblxuICAgICAgICBmb3IgKHZhciBrIGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAoaG9wLmNhbGwocHJvcHMsIGspKVxuICAgICAgICAgICAgICAgIGRlZmluZVByb3BlcnR5KG9iaiwgaywgcHJvcHNba10pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuXG4gICAgLy8gU25hcHNob3Qgc29tZSAoaG9wZWZ1bGx5IHN0aWxsKSBuYXRpdmUgYnVpbHQtaW5zXG4gICAgYXJyU2xpY2UgID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLFxuICAgIGFyckNvbmNhdCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQsXG4gICAgYXJyUHVzaCAgID0gQXJyYXkucHJvdG90eXBlLnB1c2gsXG4gICAgYXJySm9pbiAgID0gQXJyYXkucHJvdG90eXBlLmpvaW4sXG4gICAgYXJyU2hpZnQgID0gQXJyYXkucHJvdG90eXBlLnNoaWZ0LFxuICAgIGFyclVuc2hpZnQ9IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LFxuXG4gICAgLy8gTmFpdmUgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgZm9yIGNvbXBhdGliaWxpdHlcbiAgICBmbkJpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCB8fCBmdW5jdGlvbiAodGhpc09iaikge1xuICAgICAgICB2YXIgZm4gPSB0aGlzLFxuICAgICAgICAgICAgYXJncyA9IGFyclNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgICAgICAvLyBBbGwgb3VyIChwcmVzZW50bHkpIGJvdW5kIGZ1bmN0aW9ucyBoYXZlIGVpdGhlciAxIG9yIDAgYXJndW1lbnRzLiBCeSByZXR1cm5pbmdcbiAgICAgICAgLy8gZGlmZmVyZW50IGZ1bmN0aW9uIHNpZ25hdHVyZXMsIHdlIGNhbiBwYXNzIHNvbWUgdGVzdHMgaW4gRVMzIGVudmlyb25tZW50c1xuICAgICAgICBpZiAoZm4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpc09iaiwgYXJyQ29uY2F0LmNhbGwoYXJncywgYXJyU2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpc09iaiwgYXJyQ29uY2F0LmNhbGwoYXJncywgYXJyU2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIERlZmF1bHQgbG9jYWxlIGlzIHRoZSBmaXJzdC1hZGRlZCBsb2NhbGUgZGF0YSBmb3IgdXNcbiAgICBkZWZhdWx0TG9jYWxlLFxuXG4gICAgLy8gT2JqZWN0IGhvdXNpbmcgaW50ZXJuYWwgcHJvcGVydGllcyBmb3IgY29uc3RydWN0b3JzXG4gICAgaW50ZXJuYWxzID0gb2JqQ3JlYXRlKG51bGwpLFxuXG4gICAgLy8gS2VlcCBpbnRlcm5hbCBwcm9wZXJ0aWVzIGludGVybmFsXG4gICAgc2VjcmV0ID0gTWF0aC5yYW5kb20oKSxcblxuICAgIC8vIEFuIG9iamVjdCBtYXAgb2YgZGF0ZSBjb21wb25lbnQga2V5cywgc2F2ZXMgdXNpbmcgYSByZWdleCBsYXRlclxuICAgIGRhdGVXaWR0aHMgPSBvYmpDcmVhdGUobnVsbCwgeyBuYXJyb3c6e30sIHNob3J0Ont9LCBsb25nOnt9IH0pLFxuXG4gICAgLy8gRWFjaCBjb25zdHJ1Y3RvciBwcm90b3R5cGUgc2hvdWxkIGJlIGFuIGluc3RhbmNlIG9mIHRoZSBjb25zdHJ1Y3RvciBpdHNlbGYsIGJ1dCB3ZVxuICAgIC8vIGNhbid0IGluaXRpYWxpc2UgdGhlbSBhcyBzdWNoIHVudGlsIHNvbWUgbG9jYWxlIGRhdGEgaGFzIGJlZW4gYWRkZWQsIHNvIHRoaXMgaXMgaG93XG4gICAgLy8gd2Uga2VlcCB0cmFja1xuICAgIG51bWJlckZvcm1hdFByb3RvSW5pdGlhbGlzZWQgPSBmYWxzZSxcbiAgICBkYXRlVGltZUZvcm1hdFByb3RvSW5pdGlhbGlzZWQgPSBmYWxzZSxcblxuICAgIC8vIFNvbWUgcmVndWxhciBleHByZXNzaW9ucyB3ZSdyZSB1c2luZ1xuICAgIGV4cEN1cnJlbmN5Q29kZSA9IC9eW0EtWl17M30kLyxcbiAgICBleHBVbmljb2RlRXhTZXEgPSAvLXUoPzotWzAtOWEtel17Miw4fSkrL2dpLCAvLyBTZWUgYGV4dGVuc2lvbmAgYmVsb3dcblxuICAgIC8vIElBTkEgU3VidGFnIFJlZ2lzdHJ5IHJlZHVuZGFudCB0YWcgYW5kIHN1YnRhZyBtYXBzXG4gICAgcmVkdW5kYW50VGFncyA9IHtcbiAgICAgICAgdGFnczoge1xuICAgICAgICAgICAgXCJhcnQtbG9qYmFuXCI6ICAgXCJqYm9cIiwgICAgICAgXCJpLWFtaVwiOiAgICAgICAgXCJhbWlcIiwgICAgICAgXCJpLWJublwiOiAgICAgICBcImJublwiLCAgXCJpLWhha1wiOiAgICAgIFwiaGFrXCIsXG4gICAgICAgICAgICBcImkta2xpbmdvblwiOiAgICBcInRsaFwiLCAgICAgICBcImktbHV4XCI6ICAgICAgICBcImxiXCIsICAgICAgICBcImktbmF2YWpvXCI6ICAgIFwibnZcIiwgICBcImktcHduXCI6ICAgICAgXCJwd25cIixcbiAgICAgICAgICAgIFwiaS10YW9cIjogICAgICAgIFwidGFvXCIsICAgICAgIFwiaS10YXlcIjogICAgICAgIFwidGF5XCIsICAgICAgIFwiaS10c3VcIjogICAgICAgXCJ0c3VcIiwgIFwibm8tYm9rXCI6ICAgICBcIm5iXCIsXG4gICAgICAgICAgICBcIm5vLW55blwiOiAgICAgICBcIm5uXCIsICAgICAgICBcInNnbi1CRS1GUlwiOiAgICBcInNmYlwiLCAgICAgICBcInNnbi1CRS1OTFwiOiAgIFwidmd0XCIsICBcInNnbi1DSC1ERVwiOiAgXCJzZ2dcIixcbiAgICAgICAgICAgIFwiemgtZ3VveXVcIjogICAgIFwiY21uXCIsICAgICAgIFwiemgtaGFra2FcIjogICAgIFwiaGFrXCIsICAgICAgIFwiemgtbWluLW5hblwiOiAgXCJuYW5cIiwgIFwiemgteGlhbmdcIjogICBcImhzblwiLFxuICAgICAgICAgICAgXCJzZ24tQlJcIjogICAgICAgXCJienNcIiwgICAgICAgXCJzZ24tQ09cIjogICAgICAgXCJjc25cIiwgICAgICAgXCJzZ24tREVcIjogICAgICBcImdzZ1wiLCAgXCJzZ24tREtcIjogICAgIFwiZHNsXCIsXG4gICAgICAgICAgICBcInNnbi1FU1wiOiAgICAgICBcInNzcFwiLCAgICAgICBcInNnbi1GUlwiOiAgICAgICBcImZzbFwiLCAgICAgICBcInNnbi1HQlwiOiAgICAgIFwiYmZpXCIsICBcInNnbi1HUlwiOiAgICAgXCJnc3NcIixcbiAgICAgICAgICAgIFwic2duLUlFXCI6ICAgICAgIFwiaXNnXCIsICAgICAgIFwic2duLUlUXCI6ICAgICAgIFwiaXNlXCIsICAgICAgIFwic2duLUpQXCI6ICAgICAgXCJqc2xcIiwgIFwic2duLU1YXCI6ICAgICBcIm1mc1wiLFxuICAgICAgICAgICAgXCJzZ24tTklcIjogICAgICAgXCJuY3NcIiwgICAgICAgXCJzZ24tTkxcIjogICAgICAgXCJkc2VcIiwgICAgICAgXCJzZ24tTk9cIjogICAgICBcIm5zbFwiLCAgXCJzZ24tUFRcIjogICAgIFwicHNyXCIsXG4gICAgICAgICAgICBcInNnbi1TRVwiOiAgICAgICBcInN3bFwiLCAgICAgICBcInNnbi1VU1wiOiAgICAgICBcImFzZVwiLCAgICAgICBcInNnbi1aQVwiOiAgICAgIFwic2ZzXCIsICBcInpoLWNtblwiOiAgICAgXCJjbW5cIixcbiAgICAgICAgICAgIFwiemgtY21uLUhhbnNcIjogIFwiY21uLUhhbnNcIiwgIFwiemgtY21uLUhhbnRcIjogIFwiY21uLUhhbnRcIiwgIFwiemgtZ2FuXCI6ICAgICAgXCJnYW5cIiwgIFwiemgtd3V1XCI6ICAgICBcInd1dVwiLFxuICAgICAgICAgICAgXCJ6aC15dWVcIjogICAgICAgXCJ5dWVcIlxuICAgICAgICB9LFxuICAgICAgICBzdWJ0YWdzOiB7XG4gICAgICAgICAgICAgIEJVOiBcIk1NXCIsICAgREQ6IFwiREVcIiwgICBGWDogXCJGUlwiLCAgIFRQOiBcIlRMXCIsICAgWUQ6IFwiWUVcIiwgICBaUjogXCJDRFwiLCAgaGVwbG9jOiBcImFsYWxjOTdcIixcbiAgICAgICAgICAgICdpbic6IFwiaWRcIiwgICBpdzogXCJoZVwiLCAgIGppOiAgXCJ5aVwiLCAganc6IFwianZcIiwgICBtbzogXCJyb1wiLCAgYXl4OiBcIm51blwiLCBiamQ6IFwiZHJsXCIsXG4gICAgICAgICAgICAgY2NxOiBcInJraVwiLCBjanI6IFwibW9tXCIsIGNrYTogXCJjbXJcIiwgY21rOiBcInhjaFwiLCBkcmg6IFwia2hrXCIsIGRydzogXCJwcnNcIiwgZ2F2OiBcImRldlwiLFxuICAgICAgICAgICAgIGhycjogXCJqYWxcIiwgaWJpOiBcIm9wYVwiLCBrZ2g6IFwia21sXCIsIGxjcTogXCJwcHJcIiwgbXN0OiBcIm1yeVwiLCBteXQ6IFwibXJ5XCIsIHNjYTogXCJobGVcIixcbiAgICAgICAgICAgICB0aWU6IFwicmFzXCIsIHRrazogXCJ0d21cIiwgdGx3OiBcIndlb1wiLCB0bmY6IFwicHJzXCIsIHliZDogXCJya2lcIiwgeW1hOiBcImxyclwiXG4gICAgICAgIH0sXG4gICAgICAgIGV4dExhbmc6IHtcbiAgICAgICAgICAgIGFhbzogWyBcImFhb1wiLCBcImFyXCIgIF0sIGFiaDogWyBcImFiaFwiLCBcImFyXCIgIF0sIGFidjogWyBcImFidlwiLCBcImFyXCIgIF0sIGFjbTogWyBcImFjbVwiLCBcImFyXCIgIF0sXG4gICAgICAgICAgICBhY3E6IFsgXCJhY3FcIiwgXCJhclwiICBdLCBhY3c6IFsgXCJhY3dcIiwgXCJhclwiICBdLCBhY3g6IFsgXCJhY3hcIiwgXCJhclwiICBdLCBhY3k6IFsgXCJhY3lcIiwgXCJhclwiICBdLFxuICAgICAgICAgICAgYWRmOiBbIFwiYWRmXCIsIFwiYXJcIiAgXSwgYWRzOiBbIFwiYWRzXCIsIFwic2duXCIgXSwgYWViOiBbIFwiYWViXCIsIFwiYXJcIiAgXSwgYWVjOiBbIFwiYWVjXCIsIFwiYXJcIiAgXSxcbiAgICAgICAgICAgIGFlZDogWyBcImFlZFwiLCBcInNnblwiIF0sIGFlbjogWyBcImFlblwiLCBcInNnblwiIF0sIGFmYjogWyBcImFmYlwiLCBcImFyXCIgIF0sIGFmZzogWyBcImFmZ1wiLCBcInNnblwiIF0sXG4gICAgICAgICAgICBhanA6IFsgXCJhanBcIiwgXCJhclwiICBdLCBhcGM6IFsgXCJhcGNcIiwgXCJhclwiICBdLCBhcGQ6IFsgXCJhcGRcIiwgXCJhclwiICBdLCBhcmI6IFsgXCJhcmJcIiwgXCJhclwiICBdLFxuICAgICAgICAgICAgYXJxOiBbIFwiYXJxXCIsIFwiYXJcIiAgXSwgYXJzOiBbIFwiYXJzXCIsIFwiYXJcIiAgXSwgYXJ5OiBbIFwiYXJ5XCIsIFwiYXJcIiAgXSwgYXJ6OiBbIFwiYXJ6XCIsIFwiYXJcIiAgXSxcbiAgICAgICAgICAgIGFzZTogWyBcImFzZVwiLCBcInNnblwiIF0sIGFzZjogWyBcImFzZlwiLCBcInNnblwiIF0sIGFzcDogWyBcImFzcFwiLCBcInNnblwiIF0sIGFzcTogWyBcImFzcVwiLCBcInNnblwiIF0sXG4gICAgICAgICAgICBhc3c6IFsgXCJhc3dcIiwgXCJzZ25cIiBdLCBhdXo6IFsgXCJhdXpcIiwgXCJhclwiICBdLCBhdmw6IFsgXCJhdmxcIiwgXCJhclwiICBdLCBheWg6IFsgXCJheWhcIiwgXCJhclwiICBdLFxuICAgICAgICAgICAgYXlsOiBbIFwiYXlsXCIsIFwiYXJcIiAgXSwgYXluOiBbIFwiYXluXCIsIFwiYXJcIiAgXSwgYXlwOiBbIFwiYXlwXCIsIFwiYXJcIiAgXSwgYmJ6OiBbIFwiYmJ6XCIsIFwiYXJcIiAgXSxcbiAgICAgICAgICAgIGJmaTogWyBcImJmaVwiLCBcInNnblwiIF0sIGJmazogWyBcImJma1wiLCBcInNnblwiIF0sIGJqbjogWyBcImJqblwiLCBcIm1zXCIgIF0sIGJvZzogWyBcImJvZ1wiLCBcInNnblwiIF0sXG4gICAgICAgICAgICBicW46IFsgXCJicW5cIiwgXCJzZ25cIiBdLCBicXk6IFsgXCJicXlcIiwgXCJzZ25cIiBdLCBidGo6IFsgXCJidGpcIiwgXCJtc1wiICBdLCBidmU6IFsgXCJidmVcIiwgXCJtc1wiICBdLFxuICAgICAgICAgICAgYnZsOiBbIFwiYnZsXCIsIFwic2duXCIgXSwgYnZ1OiBbIFwiYnZ1XCIsIFwibXNcIiAgXSwgYnpzOiBbIFwiYnpzXCIsIFwic2duXCIgXSwgY2RvOiBbIFwiY2RvXCIsIFwiemhcIiAgXSxcbiAgICAgICAgICAgIGNkczogWyBcImNkc1wiLCBcInNnblwiIF0sIGNqeTogWyBcImNqeVwiLCBcInpoXCIgIF0sIGNtbjogWyBcImNtblwiLCBcInpoXCIgIF0sIGNvYTogWyBcImNvYVwiLCBcIm1zXCIgIF0sXG4gICAgICAgICAgICBjcHg6IFsgXCJjcHhcIiwgXCJ6aFwiICBdLCBjc2M6IFsgXCJjc2NcIiwgXCJzZ25cIiBdLCBjc2Q6IFsgXCJjc2RcIiwgXCJzZ25cIiBdLCBjc2U6IFsgXCJjc2VcIiwgXCJzZ25cIiBdLFxuICAgICAgICAgICAgY3NmOiBbIFwiY3NmXCIsIFwic2duXCIgXSwgY3NnOiBbIFwiY3NnXCIsIFwic2duXCIgXSwgY3NsOiBbIFwiY3NsXCIsIFwic2duXCIgXSwgY3NuOiBbIFwiY3NuXCIsIFwic2duXCIgXSxcbiAgICAgICAgICAgIGNzcTogWyBcImNzcVwiLCBcInNnblwiIF0sIGNzcjogWyBcImNzclwiLCBcInNnblwiIF0sIGN6aDogWyBcImN6aFwiLCBcInpoXCIgIF0sIGN6bzogWyBcImN6b1wiLCBcInpoXCIgIF0sXG4gICAgICAgICAgICBkb3E6IFsgXCJkb3FcIiwgXCJzZ25cIiBdLCBkc2U6IFsgXCJkc2VcIiwgXCJzZ25cIiBdLCBkc2w6IFsgXCJkc2xcIiwgXCJzZ25cIiBdLCBkdXA6IFsgXCJkdXBcIiwgXCJtc1wiICBdLFxuICAgICAgICAgICAgZWNzOiBbIFwiZWNzXCIsIFwic2duXCIgXSwgZXNsOiBbIFwiZXNsXCIsIFwic2duXCIgXSwgZXNuOiBbIFwiZXNuXCIsIFwic2duXCIgXSwgZXNvOiBbIFwiZXNvXCIsIFwic2duXCIgXSxcbiAgICAgICAgICAgIGV0aDogWyBcImV0aFwiLCBcInNnblwiIF0sIGZjczogWyBcImZjc1wiLCBcInNnblwiIF0sIGZzZTogWyBcImZzZVwiLCBcInNnblwiIF0sIGZzbDogWyBcImZzbFwiLCBcInNnblwiIF0sXG4gICAgICAgICAgICBmc3M6IFsgXCJmc3NcIiwgXCJzZ25cIiBdLCBnYW46IFsgXCJnYW5cIiwgXCJ6aFwiICBdLCBnZHM6IFsgXCJnZHNcIiwgXCJzZ25cIiBdLCBnb206IFsgXCJnb21cIiwgXCJrb2tcIiBdLFxuICAgICAgICAgICAgZ3NlOiBbIFwiZ3NlXCIsIFwic2duXCIgXSwgZ3NnOiBbIFwiZ3NnXCIsIFwic2duXCIgXSwgZ3NtOiBbIFwiZ3NtXCIsIFwic2duXCIgXSwgZ3NzOiBbIFwiZ3NzXCIsIFwic2duXCIgXSxcbiAgICAgICAgICAgIGd1czogWyBcImd1c1wiLCBcInNnblwiIF0sIGhhYjogWyBcImhhYlwiLCBcInNnblwiIF0sIGhhZjogWyBcImhhZlwiLCBcInNnblwiIF0sIGhhazogWyBcImhha1wiLCBcInpoXCIgIF0sXG4gICAgICAgICAgICBoZHM6IFsgXCJoZHNcIiwgXCJzZ25cIiBdLCBoamk6IFsgXCJoamlcIiwgXCJtc1wiICBdLCBoa3M6IFsgXCJoa3NcIiwgXCJzZ25cIiBdLCBob3M6IFsgXCJob3NcIiwgXCJzZ25cIiBdLFxuICAgICAgICAgICAgaHBzOiBbIFwiaHBzXCIsIFwic2duXCIgXSwgaHNoOiBbIFwiaHNoXCIsIFwic2duXCIgXSwgaHNsOiBbIFwiaHNsXCIsIFwic2duXCIgXSwgaHNuOiBbIFwiaHNuXCIsIFwiemhcIiAgXSxcbiAgICAgICAgICAgIGljbDogWyBcImljbFwiLCBcInNnblwiIF0sIGlsczogWyBcImlsc1wiLCBcInNnblwiIF0sIGlubDogWyBcImlubFwiLCBcInNnblwiIF0sIGluczogWyBcImluc1wiLCBcInNnblwiIF0sXG4gICAgICAgICAgICBpc2U6IFsgXCJpc2VcIiwgXCJzZ25cIiBdLCBpc2c6IFsgXCJpc2dcIiwgXCJzZ25cIiBdLCBpc3I6IFsgXCJpc3JcIiwgXCJzZ25cIiBdLCBqYWs6IFsgXCJqYWtcIiwgXCJtc1wiICBdLFxuICAgICAgICAgICAgamF4OiBbIFwiamF4XCIsIFwibXNcIiAgXSwgamNzOiBbIFwiamNzXCIsIFwic2duXCIgXSwgamhzOiBbIFwiamhzXCIsIFwic2duXCIgXSwgamxzOiBbIFwiamxzXCIsIFwic2duXCIgXSxcbiAgICAgICAgICAgIGpvczogWyBcImpvc1wiLCBcInNnblwiIF0sIGpzbDogWyBcImpzbFwiLCBcInNnblwiIF0sIGp1czogWyBcImp1c1wiLCBcInNnblwiIF0sIGtnaTogWyBcImtnaVwiLCBcInNnblwiIF0sXG4gICAgICAgICAgICBrbm46IFsgXCJrbm5cIiwgXCJrb2tcIiBdLCBrdmI6IFsgXCJrdmJcIiwgXCJtc1wiICBdLCBrdms6IFsgXCJrdmtcIiwgXCJzZ25cIiBdLCBrdnI6IFsgXCJrdnJcIiwgXCJtc1wiICBdLFxuICAgICAgICAgICAga3hkOiBbIFwia3hkXCIsIFwibXNcIiAgXSwgbGJzOiBbIFwibGJzXCIsIFwic2duXCIgXSwgbGNlOiBbIFwibGNlXCIsIFwibXNcIiAgXSwgbGNmOiBbIFwibGNmXCIsIFwibXNcIiAgXSxcbiAgICAgICAgICAgIGxpdzogWyBcImxpd1wiLCBcIm1zXCIgIF0sIGxsczogWyBcImxsc1wiLCBcInNnblwiIF0sIGxzZzogWyBcImxzZ1wiLCBcInNnblwiIF0sIGxzbDogWyBcImxzbFwiLCBcInNnblwiIF0sXG4gICAgICAgICAgICBsc286IFsgXCJsc29cIiwgXCJzZ25cIiBdLCBsc3A6IFsgXCJsc3BcIiwgXCJzZ25cIiBdLCBsc3Q6IFsgXCJsc3RcIiwgXCJzZ25cIiBdLCBsc3k6IFsgXCJsc3lcIiwgXCJzZ25cIiBdLFxuICAgICAgICAgICAgbHRnOiBbIFwibHRnXCIsIFwibHZcIiAgXSwgbHZzOiBbIFwibHZzXCIsIFwibHZcIiAgXSwgbHpoOiBbIFwibHpoXCIsIFwiemhcIiAgXSwgbWF4OiBbIFwibWF4XCIsIFwibXNcIiAgXSxcbiAgICAgICAgICAgIG1kbDogWyBcIm1kbFwiLCBcInNnblwiIF0sIG1lbzogWyBcIm1lb1wiLCBcIm1zXCIgIF0sIG1mYTogWyBcIm1mYVwiLCBcIm1zXCIgIF0sIG1mYjogWyBcIm1mYlwiLCBcIm1zXCIgIF0sXG4gICAgICAgICAgICBtZnM6IFsgXCJtZnNcIiwgXCJzZ25cIiBdLCBtaW46IFsgXCJtaW5cIiwgXCJtc1wiICBdLCBtbnA6IFsgXCJtbnBcIiwgXCJ6aFwiICBdLCBtcWc6IFsgXCJtcWdcIiwgXCJtc1wiICBdLFxuICAgICAgICAgICAgbXJlOiBbIFwibXJlXCIsIFwic2duXCIgXSwgbXNkOiBbIFwibXNkXCIsIFwic2duXCIgXSwgbXNpOiBbIFwibXNpXCIsIFwibXNcIiAgXSwgbXNyOiBbIFwibXNyXCIsIFwic2duXCIgXSxcbiAgICAgICAgICAgIG11aTogWyBcIm11aVwiLCBcIm1zXCIgIF0sIG16YzogWyBcIm16Y1wiLCBcInNnblwiIF0sIG16ZzogWyBcIm16Z1wiLCBcInNnblwiIF0sIG16eTogWyBcIm16eVwiLCBcInNnblwiIF0sXG4gICAgICAgICAgICBuYW46IFsgXCJuYW5cIiwgXCJ6aFwiICBdLCBuYnM6IFsgXCJuYnNcIiwgXCJzZ25cIiBdLCBuY3M6IFsgXCJuY3NcIiwgXCJzZ25cIiBdLCBuc2k6IFsgXCJuc2lcIiwgXCJzZ25cIiBdLFxuICAgICAgICAgICAgbnNsOiBbIFwibnNsXCIsIFwic2duXCIgXSwgbnNwOiBbIFwibnNwXCIsIFwic2duXCIgXSwgbnNyOiBbIFwibnNyXCIsIFwic2duXCIgXSwgbnpzOiBbIFwibnpzXCIsIFwic2duXCIgXSxcbiAgICAgICAgICAgIG9rbDogWyBcIm9rbFwiLCBcInNnblwiIF0sIG9ybjogWyBcIm9yblwiLCBcIm1zXCIgIF0sIG9yczogWyBcIm9yc1wiLCBcIm1zXCIgIF0sIHBlbDogWyBcInBlbFwiLCBcIm1zXCIgIF0sXG4gICAgICAgICAgICBwZ2E6IFsgXCJwZ2FcIiwgXCJhclwiICBdLCBwa3M6IFsgXCJwa3NcIiwgXCJzZ25cIiBdLCBwcmw6IFsgXCJwcmxcIiwgXCJzZ25cIiBdLCBwcno6IFsgXCJwcnpcIiwgXCJzZ25cIiBdLFxuICAgICAgICAgICAgcHNjOiBbIFwicHNjXCIsIFwic2duXCIgXSwgcHNkOiBbIFwicHNkXCIsIFwic2duXCIgXSwgcHNlOiBbIFwicHNlXCIsIFwibXNcIiAgXSwgcHNnOiBbIFwicHNnXCIsIFwic2duXCIgXSxcbiAgICAgICAgICAgIHBzbDogWyBcInBzbFwiLCBcInNnblwiIF0sIHBzbzogWyBcInBzb1wiLCBcInNnblwiIF0sIHBzcDogWyBcInBzcFwiLCBcInNnblwiIF0sIHBzcjogWyBcInBzclwiLCBcInNnblwiIF0sXG4gICAgICAgICAgICBweXM6IFsgXCJweXNcIiwgXCJzZ25cIiBdLCBybXM6IFsgXCJybXNcIiwgXCJzZ25cIiBdLCByc2k6IFsgXCJyc2lcIiwgXCJzZ25cIiBdLCByc2w6IFsgXCJyc2xcIiwgXCJzZ25cIiBdLFxuICAgICAgICAgICAgc2RsOiBbIFwic2RsXCIsIFwic2duXCIgXSwgc2ZiOiBbIFwic2ZiXCIsIFwic2duXCIgXSwgc2ZzOiBbIFwic2ZzXCIsIFwic2duXCIgXSwgc2dnOiBbIFwic2dnXCIsIFwic2duXCIgXSxcbiAgICAgICAgICAgIHNneDogWyBcInNneFwiLCBcInNnblwiIF0sIHNodTogWyBcInNodVwiLCBcImFyXCIgIF0sIHNsZjogWyBcInNsZlwiLCBcInNnblwiIF0sIHNsczogWyBcInNsc1wiLCBcInNnblwiIF0sXG4gICAgICAgICAgICBzcWs6IFsgXCJzcWtcIiwgXCJzZ25cIiBdLCBzcXM6IFsgXCJzcXNcIiwgXCJzZ25cIiBdLCBzc2g6IFsgXCJzc2hcIiwgXCJhclwiICBdLCBzc3A6IFsgXCJzc3BcIiwgXCJzZ25cIiBdLFxuICAgICAgICAgICAgc3NyOiBbIFwic3NyXCIsIFwic2duXCIgXSwgc3ZrOiBbIFwic3ZrXCIsIFwic2duXCIgXSwgc3djOiBbIFwic3djXCIsIFwic3dcIiAgXSwgc3doOiBbIFwic3doXCIsIFwic3dcIiAgXSxcbiAgICAgICAgICAgIHN3bDogWyBcInN3bFwiLCBcInNnblwiIF0sIHN5eTogWyBcInN5eVwiLCBcInNnblwiIF0sIHRtdzogWyBcInRtd1wiLCBcIm1zXCIgIF0sIHRzZTogWyBcInRzZVwiLCBcInNnblwiIF0sXG4gICAgICAgICAgICB0c206IFsgXCJ0c21cIiwgXCJzZ25cIiBdLCB0c3E6IFsgXCJ0c3FcIiwgXCJzZ25cIiBdLCB0c3M6IFsgXCJ0c3NcIiwgXCJzZ25cIiBdLCB0c3k6IFsgXCJ0c3lcIiwgXCJzZ25cIiBdLFxuICAgICAgICAgICAgdHphOiBbIFwidHphXCIsIFwic2duXCIgXSwgdWduOiBbIFwidWduXCIsIFwic2duXCIgXSwgdWd5OiBbIFwidWd5XCIsIFwic2duXCIgXSwgdWtsOiBbIFwidWtsXCIsIFwic2duXCIgXSxcbiAgICAgICAgICAgIHVrczogWyBcInVrc1wiLCBcInNnblwiIF0sIHVyazogWyBcInVya1wiLCBcIm1zXCIgIF0sIHV6bjogWyBcInV6blwiLCBcInV6XCIgIF0sIHV6czogWyBcInV6c1wiLCBcInV6XCIgIF0sXG4gICAgICAgICAgICB2Z3Q6IFsgXCJ2Z3RcIiwgXCJzZ25cIiBdLCB2a2s6IFsgXCJ2a2tcIiwgXCJtc1wiICBdLCB2a3Q6IFsgXCJ2a3RcIiwgXCJtc1wiICBdLCB2c2k6IFsgXCJ2c2lcIiwgXCJzZ25cIiBdLFxuICAgICAgICAgICAgdnNsOiBbIFwidnNsXCIsIFwic2duXCIgXSwgdnN2OiBbIFwidnN2XCIsIFwic2duXCIgXSwgd3V1OiBbIFwid3V1XCIsIFwiemhcIiAgXSwgeGtpOiBbIFwieGtpXCIsIFwic2duXCIgXSxcbiAgICAgICAgICAgIHhtbDogWyBcInhtbFwiLCBcInNnblwiIF0sIHhtbTogWyBcInhtbVwiLCBcIm1zXCIgIF0sIHhtczogWyBcInhtc1wiLCBcInNnblwiIF0sIHlkczogWyBcInlkc1wiLCBcInNnblwiIF0sXG4gICAgICAgICAgICB5c2w6IFsgXCJ5c2xcIiwgXCJzZ25cIiBdLCB5dWU6IFsgXCJ5dWVcIiwgXCJ6aFwiICBdLCB6aWI6IFsgXCJ6aWJcIiwgXCJzZ25cIiBdLCB6bG06IFsgXCJ6bG1cIiwgXCJtc1wiICBdLFxuICAgICAgICAgICAgem1pOiBbIFwiem1pXCIsIFwibXNcIiAgXSwgenNsOiBbIFwienNsXCIsIFwic2duXCIgXSwgenNtOiBbIFwienNtXCIsIFwibXNcIiAgXVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIEN1cnJlbmN5IG1pbm9yIHVuaXRzIG91dHB1dCBmcm9tIGdldC00MjE3IGdydW50IHRhc2ssIGZvcm1hdHRlZFxuICAgIGN1cnJlbmN5TWlub3JVbml0cyA9IHtcbiAgICAgICAgQkhEOiAzLCBCWVI6IDAsIFhPRjogMCwgQklGOiAwLCBYQUY6IDAsIENMRjogNCwgQ0xQOiAwLCBLTUY6IDAsIERKRjogMCxcbiAgICAgICAgWFBGOiAwLCBHTkY6IDAsIElTSzogMCwgSVFEOiAzLCBKUFk6IDAsIEpPRDogMywgS1JXOiAwLCBLV0Q6IDMsIExZRDogMyxcbiAgICAgICAgT01SOiAzLCBQWUc6IDAsIFJXRjogMCwgVE5EOiAzLCBVR1g6IDAsIFVZSTogMCwgVlVWOiAwLCBWTkQ6IDBcbiAgICB9O1xuXG4vLyBTZWN0IDYuMiBMYW5ndWFnZSBUYWdzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogVGhlIElzU3RydWN0dXJhbGx5VmFsaWRMYW5ndWFnZVRhZyBhYnN0cmFjdCBvcGVyYXRpb24gdmVyaWZpZXMgdGhhdCB0aGUgbG9jYWxlXG4gKiBhcmd1bWVudCAod2hpY2ggbXVzdCBiZSBhIFN0cmluZyB2YWx1ZSlcbiAqXG4gKiAtIHJlcHJlc2VudHMgYSB3ZWxsLWZvcm1lZCBCQ1AgNDcgbGFuZ3VhZ2UgdGFnIGFzIHNwZWNpZmllZCBpbiBSRkMgNTY0NiBzZWN0aW9uXG4gKiAgIDIuMSwgb3Igc3VjY2Vzc29yLFxuICogLSBkb2VzIG5vdCBpbmNsdWRlIGR1cGxpY2F0ZSB2YXJpYW50IHN1YnRhZ3MsIGFuZFxuICogLSBkb2VzIG5vdCBpbmNsdWRlIGR1cGxpY2F0ZSBzaW5nbGV0b24gc3VidGFncy5cbiAqXG4gKiBUaGUgYWJzdHJhY3Qgb3BlcmF0aW9uIHJldHVybnMgdHJ1ZSBpZiBsb2NhbGUgY2FuIGJlIGdlbmVyYXRlZCBmcm9tIHRoZSBBQk5GXG4gKiBncmFtbWFyIGluIHNlY3Rpb24gMi4xIG9mIHRoZSBSRkMsIHN0YXJ0aW5nIHdpdGggTGFuZ3VhZ2UtVGFnLCBhbmQgZG9lcyBub3RcbiAqIGNvbnRhaW4gZHVwbGljYXRlIHZhcmlhbnQgb3Igc2luZ2xldG9uIHN1YnRhZ3MgKG90aGVyIHRoYW4gYXMgYSBwcml2YXRlIHVzZVxuICogc3VidGFnKS4gSXQgcmV0dXJucyBmYWxzZSBvdGhlcndpc2UuIFRlcm1pbmFsIHZhbHVlIGNoYXJhY3RlcnMgaW4gdGhlIGdyYW1tYXIgYXJlXG4gKiBpbnRlcnByZXRlZCBhcyB0aGUgVW5pY29kZSBlcXVpdmFsZW50cyBvZiB0aGUgQVNDSUkgb2N0ZXQgdmFsdWVzIGdpdmVuLlxuICovXG5mdW5jdGlvbiAvKiA2LjIuMiAqL0lzU3RydWN0dXJhbGx5VmFsaWRMYW5ndWFnZVRhZyhsb2NhbGUpIHtcbiAgICAvLyByZXByZXNlbnRzIGEgd2VsbC1mb3JtZWQgQkNQIDQ3IGxhbmd1YWdlIHRhZyBhcyBzcGVjaWZpZWQgaW4gUkZDIDU2NDZcbiAgICBpZiAoIXNyYyRleHAkJC5leHBCQ1A0N1N5bnRheC50ZXN0KGxvY2FsZSkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIC8vIGRvZXMgbm90IGluY2x1ZGUgZHVwbGljYXRlIHZhcmlhbnQgc3VidGFncywgYW5kXG4gICAgaWYgKHNyYyRleHAkJC5leHBWYXJpYW50RHVwZXMudGVzdChsb2NhbGUpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBkb2VzIG5vdCBpbmNsdWRlIGR1cGxpY2F0ZSBzaW5nbGV0b24gc3VidGFncy5cbiAgICBpZiAoc3JjJGV4cCQkLmV4cFNpbmdsZXRvbkR1cGVzLnRlc3QobG9jYWxlKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogVGhlIENhbm9uaWNhbGl6ZUxhbmd1YWdlVGFnIGFic3RyYWN0IG9wZXJhdGlvbiByZXR1cm5zIHRoZSBjYW5vbmljYWwgYW5kIGNhc2UtXG4gKiByZWd1bGFyaXplZCBmb3JtIG9mIHRoZSBsb2NhbGUgYXJndW1lbnQgKHdoaWNoIG11c3QgYmUgYSBTdHJpbmcgdmFsdWUgdGhhdCBpc1xuICogYSBzdHJ1Y3R1cmFsbHkgdmFsaWQgQkNQIDQ3IGxhbmd1YWdlIHRhZyBhcyB2ZXJpZmllZCBieSB0aGVcbiAqIElzU3RydWN0dXJhbGx5VmFsaWRMYW5ndWFnZVRhZyBhYnN0cmFjdCBvcGVyYXRpb24pLiBJdCB0YWtlcyB0aGUgc3RlcHNcbiAqIHNwZWNpZmllZCBpbiBSRkMgNTY0NiBzZWN0aW9uIDQuNSwgb3Igc3VjY2Vzc29yLCB0byBicmluZyB0aGUgbGFuZ3VhZ2UgdGFnXG4gKiBpbnRvIGNhbm9uaWNhbCBmb3JtLCBhbmQgdG8gcmVndWxhcml6ZSB0aGUgY2FzZSBvZiB0aGUgc3VidGFncywgYnV0IGRvZXMgbm90XG4gKiB0YWtlIHRoZSBzdGVwcyB0byBicmluZyBhIGxhbmd1YWdlIHRhZyBpbnRvIOKAnGV4dGxhbmcgZm9ybeKAnSBhbmQgdG8gcmVvcmRlclxuICogdmFyaWFudCBzdWJ0YWdzLlxuXG4gKiBUaGUgc3BlY2lmaWNhdGlvbnMgZm9yIGV4dGVuc2lvbnMgdG8gQkNQIDQ3IGxhbmd1YWdlIHRhZ3MsIHN1Y2ggYXMgUkZDIDYwNjcsXG4gKiBtYXkgaW5jbHVkZSBjYW5vbmljYWxpemF0aW9uIHJ1bGVzIGZvciB0aGUgZXh0ZW5zaW9uIHN1YnRhZyBzZXF1ZW5jZXMgdGhleVxuICogZGVmaW5lIHRoYXQgZ28gYmV5b25kIHRoZSBjYW5vbmljYWxpemF0aW9uIHJ1bGVzIG9mIFJGQyA1NjQ2IHNlY3Rpb24gNC41LlxuICogSW1wbGVtZW50YXRpb25zIGFyZSBhbGxvd2VkLCBidXQgbm90IHJlcXVpcmVkLCB0byBhcHBseSB0aGVzZSBhZGRpdGlvbmFsIHJ1bGVzLlxuICovXG5mdW5jdGlvbiAvKiA2LjIuMyAqL0Nhbm9uaWNhbGl6ZUxhbmd1YWdlVGFnIChsb2NhbGUpIHtcbiAgICB2YXIgbWF0Y2gsIHBhcnRzO1xuXG4gICAgLy8gQSBsYW5ndWFnZSB0YWcgaXMgaW4gJ2Nhbm9uaWNhbCBmb3JtJyB3aGVuIHRoZSB0YWcgaXMgd2VsbC1mb3JtZWRcbiAgICAvLyBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIGluIFNlY3Rpb25zIDIuMSBhbmQgMi4yXG5cbiAgICAvLyBTZWN0aW9uIDIuMSBzYXlzIGFsbCBzdWJ0YWdzIHVzZSBsb3dlcmNhc2UuLi5cbiAgICBsb2NhbGUgPSBsb2NhbGUudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIC4uLndpdGggMiBleGNlcHRpb25zOiAndHdvLWxldHRlciBhbmQgZm91ci1sZXR0ZXIgc3VidGFncyB0aGF0IG5laXRoZXJcbiAgICAvLyBhcHBlYXIgYXQgdGhlIHN0YXJ0IG9mIHRoZSB0YWcgbm9yIG9jY3VyIGFmdGVyIHNpbmdsZXRvbnMuICBTdWNoIHR3by1sZXR0ZXJcbiAgICAvLyBzdWJ0YWdzIGFyZSBhbGwgdXBwZXJjYXNlIChhcyBpbiB0aGUgdGFncyBcImVuLUNBLXgtY2FcIiBvciBcInNnbi1CRS1GUlwiKSBhbmRcbiAgICAvLyBmb3VyLWxldHRlciBzdWJ0YWdzIGFyZSB0aXRsZWNhc2UgKGFzIGluIHRoZSB0YWcgXCJhei1MYXRuLXgtbGF0blwiKS5cbiAgICBwYXJ0cyA9IGxvY2FsZS5zcGxpdCgnLScpO1xuICAgIGZvciAodmFyIGkgPSAxLCBtYXggPSBwYXJ0cy5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICAvLyBUd28tbGV0dGVyIHN1YnRhZ3MgYXJlIGFsbCB1cHBlcmNhc2VcbiAgICAgICAgaWYgKHBhcnRzW2ldLmxlbmd0aCA9PT0gMilcbiAgICAgICAgICAgIHBhcnRzW2ldID0gcGFydHNbaV0udG9VcHBlckNhc2UoKTtcblxuICAgICAgICAvLyBGb3VyLWxldHRlciBzdWJ0YWdzIGFyZSB0aXRsZWNhc2VcbiAgICAgICAgZWxzZSBpZiAocGFydHNbaV0ubGVuZ3RoID09PSA0KVxuICAgICAgICAgICAgcGFydHNbaV0gPSBwYXJ0c1tpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBhcnRzW2ldLnNsaWNlKDEpO1xuXG4gICAgICAgIC8vIElzIGl0IGEgc2luZ2xldG9uP1xuICAgICAgICBlbHNlIGlmIChwYXJ0c1tpXS5sZW5ndGggPT09IDEgJiYgcGFydHNbaV0gIT09ICd4JylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBsb2NhbGUgPSBhcnJKb2luLmNhbGwocGFydHMsICctJyk7XG5cbiAgICAvLyBUaGUgc3RlcHMgbGFpZCBvdXQgaW4gUkZDIDU2NDYgc2VjdGlvbiA0LjUgYXJlIGFzIGZvbGxvd3M6XG5cbiAgICAvLyAxLiAgRXh0ZW5zaW9uIHNlcXVlbmNlcyBhcmUgb3JkZXJlZCBpbnRvIGNhc2UtaW5zZW5zaXRpdmUgQVNDSUkgb3JkZXJcbiAgICAvLyAgICAgYnkgc2luZ2xldG9uIHN1YnRhZy5cbiAgICBpZiAoKG1hdGNoID0gbG9jYWxlLm1hdGNoKHNyYyRleHAkJC5leHBFeHRTZXF1ZW5jZXMpKSAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIFRoZSBidWlsdC1pbiBzb3J0KCkgc29ydHMgYnkgQVNDSUkgb3JkZXIsIHNvIHVzZSB0aGF0XG4gICAgICAgIG1hdGNoLnNvcnQoKTtcblxuICAgICAgICAvLyBSZXBsYWNlIGFsbCBleHRlbnNpb25zIHdpdGggdGhlIGpvaW5lZCwgc29ydGVkIGFycmF5XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZS5yZXBsYWNlKFxuICAgICAgICAgICAgUmVnRXhwKCcoPzonICsgc3JjJGV4cCQkLmV4cEV4dFNlcXVlbmNlcy5zb3VyY2UgKyAnKSsnLCAnaScpLFxuICAgICAgICAgICAgYXJySm9pbi5jYWxsKG1hdGNoLCAnJylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyAyLiAgUmVkdW5kYW50IG9yIGdyYW5kZmF0aGVyZWQgdGFncyBhcmUgcmVwbGFjZWQgYnkgdGhlaXIgJ1ByZWZlcnJlZC1cbiAgICAvLyAgICAgVmFsdWUnLCBpZiB0aGVyZSBpcyBvbmUuXG4gICAgaWYgKGhvcC5jYWxsKHJlZHVuZGFudFRhZ3MudGFncywgbG9jYWxlKSlcbiAgICAgICAgbG9jYWxlID0gcmVkdW5kYW50VGFncy50YWdzW2xvY2FsZV07XG5cbiAgICAvLyAzLiAgU3VidGFncyBhcmUgcmVwbGFjZWQgYnkgdGhlaXIgJ1ByZWZlcnJlZC1WYWx1ZScsIGlmIHRoZXJlIGlzIG9uZS5cbiAgICAvLyAgICAgRm9yIGV4dGxhbmdzLCB0aGUgb3JpZ2luYWwgcHJpbWFyeSBsYW5ndWFnZSBzdWJ0YWcgaXMgYWxzb1xuICAgIC8vICAgICByZXBsYWNlZCBpZiB0aGVyZSBpcyBhIHByaW1hcnkgbGFuZ3VhZ2Ugc3VidGFnIGluIHRoZSAnUHJlZmVycmVkLVxuICAgIC8vICAgICBWYWx1ZScuXG4gICAgcGFydHMgPSBsb2NhbGUuc3BsaXQoJy0nKTtcblxuICAgIGZvciAodmFyIGkgPSAxLCBtYXggPSBwYXJ0cy5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICBpZiAoaG9wLmNhbGwocmVkdW5kYW50VGFncy5zdWJ0YWdzLCBwYXJ0c1tpXSkpXG4gICAgICAgICAgICBwYXJ0c1tpXSA9IHJlZHVuZGFudFRhZ3Muc3VidGFnc1twYXJ0c1tpXV07XG5cbiAgICAgICAgZWxzZSBpZiAoaG9wLmNhbGwocmVkdW5kYW50VGFncy5leHRMYW5nLCBwYXJ0c1tpXSkpIHtcbiAgICAgICAgICAgIHBhcnRzW2ldID0gcmVkdW5kYW50VGFncy5leHRMYW5nW3BhcnRzW2ldXVswXTtcblxuICAgICAgICAgICAgLy8gRm9yIGV4dGxhbmcgdGFncywgdGhlIHByZWZpeCBuZWVkcyB0byBiZSByZW1vdmVkIGlmIGl0IGlzIHJlZHVuZGFudFxuICAgICAgICAgICAgaWYgKGkgPT09IDEgJiYgcmVkdW5kYW50VGFncy5leHRMYW5nW3BhcnRzWzFdXVsxXSA9PT0gcGFydHNbMF0pIHtcbiAgICAgICAgICAgICAgICBwYXJ0cyA9IGFyclNsaWNlLmNhbGwocGFydHMsIGkrKyk7XG4gICAgICAgICAgICAgICAgbWF4IC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJySm9pbi5jYWxsKHBhcnRzLCAnLScpO1xufVxuXG4vKipcbiAqIFRoZSBEZWZhdWx0TG9jYWxlIGFic3RyYWN0IG9wZXJhdGlvbiByZXR1cm5zIGEgU3RyaW5nIHZhbHVlIHJlcHJlc2VudGluZyB0aGVcbiAqIHN0cnVjdHVyYWxseSB2YWxpZCAoNi4yLjIpIGFuZCBjYW5vbmljYWxpemVkICg2LjIuMykgQkNQIDQ3IGxhbmd1YWdlIHRhZyBmb3IgdGhlXG4gKiBob3N0IGVudmlyb25tZW504oCZcyBjdXJyZW50IGxvY2FsZS5cbiAqL1xuZnVuY3Rpb24gLyogNi4yLjQgKi9EZWZhdWx0TG9jYWxlICgpIHtcbiAgICByZXR1cm4gZGVmYXVsdExvY2FsZTtcbn1cblxuLy8gU2VjdCA2LjMgQ3VycmVuY3kgQ29kZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogVGhlIElzV2VsbEZvcm1lZEN1cnJlbmN5Q29kZSBhYnN0cmFjdCBvcGVyYXRpb24gdmVyaWZpZXMgdGhhdCB0aGUgY3VycmVuY3kgYXJndW1lbnRcbiAqIChhZnRlciBjb252ZXJzaW9uIHRvIGEgU3RyaW5nIHZhbHVlKSByZXByZXNlbnRzIGEgd2VsbC1mb3JtZWQgMy1sZXR0ZXIgSVNPIGN1cnJlbmN5XG4gKiBjb2RlLiBUaGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuZnVuY3Rpb24gLyogNi4zLjEgKi9Jc1dlbGxGb3JtZWRDdXJyZW5jeUNvZGUoY3VycmVuY3kpIHtcbiAgICB2YXJcbiAgICAgICAgLy8gMS4gTGV0IGBjYCBiZSBUb1N0cmluZyhjdXJyZW5jeSlcbiAgICAgICAgYyA9IFN0cmluZyhjdXJyZW5jeSksXG5cbiAgICAgICAgLy8gMi4gTGV0IGBub3JtYWxpemVkYCBiZSB0aGUgcmVzdWx0IG9mIG1hcHBpbmcgYyB0byB1cHBlciBjYXNlIGFzIGRlc2NyaWJlZFxuICAgICAgICAvLyAgICBpbiA2LjEuXG4gICAgICAgIG5vcm1hbGl6ZWQgPSB0b0xhdGluVXBwZXJDYXNlKGMpO1xuXG4gICAgLy8gMy4gSWYgdGhlIHN0cmluZyBsZW5ndGggb2Ygbm9ybWFsaXplZCBpcyBub3QgMywgcmV0dXJuIGZhbHNlLlxuICAgIC8vIDQuIElmIG5vcm1hbGl6ZWQgY29udGFpbnMgYW55IGNoYXJhY3RlciB0aGF0IGlzIG5vdCBpbiB0aGUgcmFuZ2UgXCJBXCIgdG8gXCJaXCJcbiAgICAvLyAgICAoVSswMDQxIHRvIFUrMDA1QSksIHJldHVybiBmYWxzZS5cbiAgICBpZiAoZXhwQ3VycmVuY3lDb2RlLnRlc3Qobm9ybWFsaXplZCkgPT09IGZhbHNlKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyA1LiBSZXR1cm4gdHJ1ZVxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vLyBTZWN0IDkuMiBBYnN0cmFjdCBPcGVyYXRpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiAvKiA5LjIuMSAqL0Nhbm9uaWNhbGl6ZUxvY2FsZUxpc3QgKGxvY2FsZXMpIHtcbi8vIFRoZSBhYnN0cmFjdCBvcGVyYXRpb24gQ2Fub25pY2FsaXplTG9jYWxlTGlzdCB0YWtlcyB0aGUgZm9sbG93aW5nIHN0ZXBzOlxuXG4gICAgLy8gMS4gSWYgbG9jYWxlcyBpcyB1bmRlZmluZWQsIHRoZW4gYS4gUmV0dXJuIGEgbmV3IGVtcHR5IExpc3RcbiAgICBpZiAobG9jYWxlcyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gbmV3IExpc3QoKTtcblxuICAgIHZhclxuICAgICAgICAvLyAyLiBMZXQgc2VlbiBiZSBhIG5ldyBlbXB0eSBMaXN0LlxuICAgICAgICBzZWVuID0gbmV3IExpc3QoKSxcblxuICAgICAgICAvLyAzLiBJZiBsb2NhbGVzIGlzIGEgU3RyaW5nIHZhbHVlLCB0aGVuXG4gICAgICAgIC8vICAgIGEuIExldCBsb2NhbGVzIGJlIGEgbmV3IGFycmF5IGNyZWF0ZWQgYXMgaWYgYnkgdGhlIGV4cHJlc3Npb24gbmV3XG4gICAgICAgIC8vICAgIEFycmF5KGxvY2FsZXMpIHdoZXJlIEFycmF5IGlzIHRoZSBzdGFuZGFyZCBidWlsdC1pbiBjb25zdHJ1Y3RvciB3aXRoXG4gICAgICAgIC8vICAgIHRoYXQgbmFtZSBhbmQgbG9jYWxlcyBpcyB0aGUgdmFsdWUgb2YgbG9jYWxlcy5cbiAgICAgICAgbG9jYWxlcyA9IHR5cGVvZiBsb2NhbGVzID09PSAnc3RyaW5nJyA/IFsgbG9jYWxlcyBdIDogbG9jYWxlcyxcblxuICAgICAgICAvLyA0LiBMZXQgTyBiZSBUb09iamVjdChsb2NhbGVzKS5cbiAgICAgICAgTyA9IHRvT2JqZWN0KGxvY2FsZXMpLFxuXG4gICAgICAgIC8vIDUuIExldCBsZW5WYWx1ZSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgICAgIC8vICAgIE8gd2l0aCB0aGUgYXJndW1lbnQgXCJsZW5ndGhcIi5cbiAgICAgICAgLy8gNi4gTGV0IGxlbiBiZSBUb1VpbnQzMihsZW5WYWx1ZSkuXG4gICAgICAgIGxlbiA9IE8ubGVuZ3RoLFxuXG4gICAgICAgIC8vIDcuIExldCBrIGJlIDAuXG4gICAgICAgIGsgPSAwO1xuXG4gICAgLy8gOC4gUmVwZWF0LCB3aGlsZSBrIDwgbGVuXG4gICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAgdmFyXG4gICAgICAgICAgICAvLyBhLiBMZXQgUGsgYmUgVG9TdHJpbmcoaykuXG4gICAgICAgICAgICBQayA9IFN0cmluZyhrKSxcblxuICAgICAgICAgICAgLy8gYi4gTGV0IGtQcmVzZW50IGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tIYXNQcm9wZXJ0eV1dIGludGVybmFsXG4gICAgICAgICAgICAvLyAgICBtZXRob2Qgb2YgTyB3aXRoIGFyZ3VtZW50IFBrLlxuICAgICAgICAgICAga1ByZXNlbnQgPSBQayBpbiBPO1xuXG4gICAgICAgIC8vIGMuIElmIGtQcmVzZW50IGlzIHRydWUsIHRoZW5cbiAgICAgICAgaWYgKGtQcmVzZW50KSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICAvLyBpLiBMZXQga1ZhbHVlIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbFxuICAgICAgICAgICAgICAgIC8vICAgICBtZXRob2Qgb2YgTyB3aXRoIGFyZ3VtZW50IFBrLlxuICAgICAgICAgICAgICAgIGtWYWx1ZSA9IE9bUGtdO1xuXG4gICAgICAgICAgICAvLyBpaS4gSWYgdGhlIHR5cGUgb2Yga1ZhbHVlIGlzIG5vdCBTdHJpbmcgb3IgT2JqZWN0LCB0aGVuIHRocm93IGFcbiAgICAgICAgICAgIC8vICAgICBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuICAgICAgICAgICAgaWYgKGtWYWx1ZSA9PSBudWxsIHx8ICh0eXBlb2Yga1ZhbHVlICE9PSAnc3RyaW5nJyAmJiB0eXBlb2Yga1ZhbHVlICE9PSAnb2JqZWN0JykpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU3RyaW5nIG9yIE9iamVjdCB0eXBlIGV4cGVjdGVkJyk7XG5cbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAgIC8vIGlpaS4gTGV0IHRhZyBiZSBUb1N0cmluZyhrVmFsdWUpLlxuICAgICAgICAgICAgICAgIHRhZyA9IFN0cmluZyhrVmFsdWUpO1xuXG4gICAgICAgICAgICAvLyBpdi4gSWYgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBhYnN0cmFjdCBvcGVyYXRpb25cbiAgICAgICAgICAgIC8vICAgICBJc1N0cnVjdHVyYWxseVZhbGlkTGFuZ3VhZ2VUYWcgKGRlZmluZWQgaW4gNi4yLjIpLCBwYXNzaW5nIHRhZyBhc1xuICAgICAgICAgICAgLy8gICAgIHRoZSBhcmd1bWVudCwgaXMgZmFsc2UsIHRoZW4gdGhyb3cgYSBSYW5nZUVycm9yIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIGlmICghSXNTdHJ1Y3R1cmFsbHlWYWxpZExhbmd1YWdlVGFnKHRhZykpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCInXCIgKyB0YWcgKyBcIicgaXMgbm90IGEgc3RydWN0dXJhbGx5IHZhbGlkIGxhbmd1YWdlIHRhZ1wiKTtcblxuICAgICAgICAgICAgLy8gdi4gTGV0IHRhZyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIGFic3RyYWN0IG9wZXJhdGlvblxuICAgICAgICAgICAgLy8gICAgQ2Fub25pY2FsaXplTGFuZ3VhZ2VUYWcgKGRlZmluZWQgaW4gNi4yLjMpLCBwYXNzaW5nIHRhZyBhcyB0aGVcbiAgICAgICAgICAgIC8vICAgIGFyZ3VtZW50LlxuICAgICAgICAgICAgdGFnID0gQ2Fub25pY2FsaXplTGFuZ3VhZ2VUYWcodGFnKTtcblxuICAgICAgICAgICAgLy8gdmkuIElmIHRhZyBpcyBub3QgYW4gZWxlbWVudCBvZiBzZWVuLCB0aGVuIGFwcGVuZCB0YWcgYXMgdGhlIGxhc3RcbiAgICAgICAgICAgIC8vICAgICBlbGVtZW50IG9mIHNlZW4uXG4gICAgICAgICAgICBpZiAoYXJySW5kZXhPZi5jYWxsKHNlZW4sIHRhZykgPT09IC0xKVxuICAgICAgICAgICAgICAgIGFyclB1c2guY2FsbChzZWVuLCB0YWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZC4gSW5jcmVhc2UgayBieSAxLlxuICAgICAgICBrKys7XG4gICAgfVxuXG4gICAgLy8gOS4gUmV0dXJuIHNlZW4uXG4gICAgcmV0dXJuIHNlZW47XG59XG5cbi8qKlxuICogVGhlIEJlc3RBdmFpbGFibGVMb2NhbGUgYWJzdHJhY3Qgb3BlcmF0aW9uIGNvbXBhcmVzIHRoZSBwcm92aWRlZCBhcmd1bWVudFxuICogbG9jYWxlLCB3aGljaCBtdXN0IGJlIGEgU3RyaW5nIHZhbHVlIHdpdGggYSBzdHJ1Y3R1cmFsbHkgdmFsaWQgYW5kXG4gKiBjYW5vbmljYWxpemVkIEJDUCA0NyBsYW5ndWFnZSB0YWcsIGFnYWluc3QgdGhlIGxvY2FsZXMgaW4gYXZhaWxhYmxlTG9jYWxlcyBhbmRcbiAqIHJldHVybnMgZWl0aGVyIHRoZSBsb25nZXN0IG5vbi1lbXB0eSBwcmVmaXggb2YgbG9jYWxlIHRoYXQgaXMgYW4gZWxlbWVudCBvZlxuICogYXZhaWxhYmxlTG9jYWxlcywgb3IgdW5kZWZpbmVkIGlmIHRoZXJlIGlzIG5vIHN1Y2ggZWxlbWVudC4gSXQgdXNlcyB0aGVcbiAqIGZhbGxiYWNrIG1lY2hhbmlzbSBvZiBSRkMgNDY0Nywgc2VjdGlvbiAzLjQuIFRoZSBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICovXG5mdW5jdGlvbiAvKiA5LjIuMiAqL0Jlc3RBdmFpbGFibGVMb2NhbGUgKGF2YWlsYWJsZUxvY2FsZXMsIGxvY2FsZSkge1xuICAgIHZhclxuICAgICAgIC8vIDEuIExldCBjYW5kaWRhdGUgYmUgbG9jYWxlXG4gICAgICAgY2FuZGlkYXRlID0gbG9jYWxlO1xuXG4gICAgLy8gMi4gUmVwZWF0XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgLy8gYS4gSWYgYXZhaWxhYmxlTG9jYWxlcyBjb250YWlucyBhbiBlbGVtZW50IGVxdWFsIHRvIGNhbmRpZGF0ZSwgdGhlbiByZXR1cm5cbiAgICAgICAgLy8gY2FuZGlkYXRlLlxuICAgICAgICBpZiAoYXJySW5kZXhPZi5jYWxsKGF2YWlsYWJsZUxvY2FsZXMsIGNhbmRpZGF0ZSkgPiAtMSlcbiAgICAgICAgICAgIHJldHVybiBjYW5kaWRhdGU7XG5cbiAgICAgICAgdmFyXG4gICAgICAgICAgICAvLyBiLiBMZXQgcG9zIGJlIHRoZSBjaGFyYWN0ZXIgaW5kZXggb2YgdGhlIGxhc3Qgb2NjdXJyZW5jZSBvZiBcIi1cIlxuICAgICAgICAgICAgLy8gKFUrMDAyRCkgd2l0aGluIGNhbmRpZGF0ZS4gSWYgdGhhdCBjaGFyYWN0ZXIgZG9lcyBub3Qgb2NjdXIsIHJldHVyblxuICAgICAgICAgICAgLy8gdW5kZWZpbmVkLlxuICAgICAgICAgICAgcG9zID0gY2FuZGlkYXRlLmxhc3RJbmRleE9mKCctJyk7XG5cbiAgICAgICAgaWYgKHBvcyA8IDApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8gYy4gSWYgcG9zIOKJpSAyIGFuZCB0aGUgY2hhcmFjdGVyIFwiLVwiIG9jY3VycyBhdCBpbmRleCBwb3MtMiBvZiBjYW5kaWRhdGUsXG4gICAgICAgIC8vICAgIHRoZW4gZGVjcmVhc2UgcG9zIGJ5IDIuXG4gICAgICAgIGlmIChwb3MgPj0gMiAmJiBjYW5kaWRhdGUuY2hhckF0KHBvcyAtIDIpID09PSAnLScpXG4gICAgICAgICAgICBwb3MgLT0gMjtcblxuICAgICAgICAvLyBkLiBMZXQgY2FuZGlkYXRlIGJlIHRoZSBzdWJzdHJpbmcgb2YgY2FuZGlkYXRlIGZyb20gcG9zaXRpb24gMCwgaW5jbHVzaXZlLFxuICAgICAgICAvLyAgICB0byBwb3NpdGlvbiBwb3MsIGV4Y2x1c2l2ZS5cbiAgICAgICAgY2FuZGlkYXRlID0gY2FuZGlkYXRlLnN1YnN0cmluZygwLCBwb3MpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgTG9va3VwTWF0Y2hlciBhYnN0cmFjdCBvcGVyYXRpb24gY29tcGFyZXMgcmVxdWVzdGVkTG9jYWxlcywgd2hpY2ggbXVzdCBiZVxuICogYSBMaXN0IGFzIHJldHVybmVkIGJ5IENhbm9uaWNhbGl6ZUxvY2FsZUxpc3QsIGFnYWluc3QgdGhlIGxvY2FsZXMgaW5cbiAqIGF2YWlsYWJsZUxvY2FsZXMgYW5kIGRldGVybWluZXMgdGhlIGJlc3QgYXZhaWxhYmxlIGxhbmd1YWdlIHRvIG1lZXQgdGhlXG4gKiByZXF1ZXN0LiBUaGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuZnVuY3Rpb24gLyogOS4yLjMgKi9Mb29rdXBNYXRjaGVyIChhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzKSB7XG4gICAgdmFyXG4gICAgICAgIC8vIDEuIExldCBpIGJlIDAuXG4gICAgICAgIGkgPSAwLFxuXG4gICAgICAgIC8vIDIuIExldCBsZW4gYmUgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiByZXF1ZXN0ZWRMb2NhbGVzLlxuICAgICAgICBsZW4gPSByZXF1ZXN0ZWRMb2NhbGVzLmxlbmd0aCxcblxuICAgICAgICAvLyAzLiBMZXQgYXZhaWxhYmxlTG9jYWxlIGJlIHVuZGVmaW5lZC5cbiAgICAgICAgYXZhaWxhYmxlTG9jYWxlO1xuXG4gICAgLy8gNC4gUmVwZWF0IHdoaWxlIGkgPCBsZW4gYW5kIGF2YWlsYWJsZUxvY2FsZSBpcyB1bmRlZmluZWQ6XG4gICAgd2hpbGUgKGkgPCBsZW4gJiYgIWF2YWlsYWJsZUxvY2FsZSkge1xuICAgICAgICB2YXJcbiAgICAgICAgICAgIC8vIGEuIExldCBsb2NhbGUgYmUgdGhlIGVsZW1lbnQgb2YgcmVxdWVzdGVkTG9jYWxlcyBhdCAwLW9yaWdpbmVkIGxpc3RcbiAgICAgICAgICAgIC8vICAgIHBvc2l0aW9uIGkuXG4gICAgICAgICAgICBsb2NhbGUgPSByZXF1ZXN0ZWRMb2NhbGVzW2ldLFxuXG4gICAgICAgICAgICAvLyBiLiBMZXQgbm9FeHRlbnNpb25zTG9jYWxlIGJlIHRoZSBTdHJpbmcgdmFsdWUgdGhhdCBpcyBsb2NhbGUgd2l0aCBhbGxcbiAgICAgICAgICAgIC8vICAgIFVuaWNvZGUgbG9jYWxlIGV4dGVuc2lvbiBzZXF1ZW5jZXMgcmVtb3ZlZC5cbiAgICAgICAgICAgIG5vRXh0ZW5zaW9uc0xvY2FsZSA9IFN0cmluZyhsb2NhbGUpLnJlcGxhY2UoZXhwVW5pY29kZUV4U2VxLCAnJyksXG5cbiAgICAgICAgICAgIC8vIGMuIExldCBhdmFpbGFibGVMb2NhbGUgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZVxuICAgICAgICAgICAgLy8gICAgQmVzdEF2YWlsYWJsZUxvY2FsZSBhYnN0cmFjdCBvcGVyYXRpb24gKGRlZmluZWQgaW4gOS4yLjIpIHdpdGhcbiAgICAgICAgICAgIC8vICAgIGFyZ3VtZW50cyBhdmFpbGFibGVMb2NhbGVzIGFuZCBub0V4dGVuc2lvbnNMb2NhbGUuXG4gICAgICAgICAgICBhdmFpbGFibGVMb2NhbGUgPSBCZXN0QXZhaWxhYmxlTG9jYWxlKGF2YWlsYWJsZUxvY2FsZXMsIG5vRXh0ZW5zaW9uc0xvY2FsZSk7XG5cbiAgICAgICAgLy8gZC4gSW5jcmVhc2UgaSBieSAxLlxuICAgICAgICBpKys7XG4gICAgfVxuXG4gICAgdmFyXG4gICAgICAgIC8vIDUuIExldCByZXN1bHQgYmUgYSBuZXcgUmVjb3JkLlxuICAgICAgICByZXN1bHQgPSBuZXcgUmVjb3JkKCk7XG5cbiAgICAvLyA2LiBJZiBhdmFpbGFibGVMb2NhbGUgaXMgbm90IHVuZGVmaW5lZCwgdGhlblxuICAgIGlmIChhdmFpbGFibGVMb2NhbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBhLiBTZXQgcmVzdWx0LltbbG9jYWxlXV0gdG8gYXZhaWxhYmxlTG9jYWxlLlxuICAgICAgICByZXN1bHRbJ1tbbG9jYWxlXV0nXSA9IGF2YWlsYWJsZUxvY2FsZTtcblxuICAgICAgICAvLyBiLiBJZiBsb2NhbGUgYW5kIG5vRXh0ZW5zaW9uc0xvY2FsZSBhcmUgbm90IHRoZSBzYW1lIFN0cmluZyB2YWx1ZSwgdGhlblxuICAgICAgICBpZiAoU3RyaW5nKGxvY2FsZSkgIT09IFN0cmluZyhub0V4dGVuc2lvbnNMb2NhbGUpKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICAvLyBpLiBMZXQgZXh0ZW5zaW9uIGJlIHRoZSBTdHJpbmcgdmFsdWUgY29uc2lzdGluZyBvZiB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAvLyAgICBzdWJzdHJpbmcgb2YgbG9jYWxlIHRoYXQgaXMgYSBVbmljb2RlIGxvY2FsZSBleHRlbnNpb24gc2VxdWVuY2UuXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uID0gbG9jYWxlLm1hdGNoKGV4cFVuaWNvZGVFeFNlcSlbMF0sXG5cbiAgICAgICAgICAgICAgICAvLyBpaS4gTGV0IGV4dGVuc2lvbkluZGV4IGJlIHRoZSBjaGFyYWN0ZXIgcG9zaXRpb24gb2YgdGhlIGluaXRpYWxcbiAgICAgICAgICAgICAgICAvLyAgICAgXCItXCIgb2YgdGhlIGZpcnN0IFVuaWNvZGUgbG9jYWxlIGV4dGVuc2lvbiBzZXF1ZW5jZSB3aXRoaW4gbG9jYWxlLlxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbkluZGV4ID0gbG9jYWxlLmluZGV4T2YoJy11LScpO1xuXG4gICAgICAgICAgICAvLyBpaWkuIFNldCByZXN1bHQuW1tleHRlbnNpb25dXSB0byBleHRlbnNpb24uXG4gICAgICAgICAgICByZXN1bHRbJ1tbZXh0ZW5zaW9uXV0nXSA9IGV4dGVuc2lvbjtcblxuICAgICAgICAgICAgLy8gaXYuIFNldCByZXN1bHQuW1tleHRlbnNpb25JbmRleF1dIHRvIGV4dGVuc2lvbkluZGV4LlxuICAgICAgICAgICAgcmVzdWx0WydbW2V4dGVuc2lvbkluZGV4XV0nXSA9IGV4dGVuc2lvbkluZGV4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIDcuIEVsc2VcbiAgICBlbHNlXG4gICAgICAgIC8vIGEuIFNldCByZXN1bHQuW1tsb2NhbGVdXSB0byB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgdGhlIERlZmF1bHRMb2NhbGUgYWJzdHJhY3RcbiAgICAgICAgLy8gICAgb3BlcmF0aW9uIChkZWZpbmVkIGluIDYuMi40KS5cbiAgICAgICAgcmVzdWx0WydbW2xvY2FsZV1dJ10gPSBEZWZhdWx0TG9jYWxlKCk7XG5cbiAgICAvLyA4LiBSZXR1cm4gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgQmVzdEZpdE1hdGNoZXIgYWJzdHJhY3Qgb3BlcmF0aW9uIGNvbXBhcmVzIHJlcXVlc3RlZExvY2FsZXMsIHdoaWNoIG11c3QgYmVcbiAqIGEgTGlzdCBhcyByZXR1cm5lZCBieSBDYW5vbmljYWxpemVMb2NhbGVMaXN0LCBhZ2FpbnN0IHRoZSBsb2NhbGVzIGluXG4gKiBhdmFpbGFibGVMb2NhbGVzIGFuZCBkZXRlcm1pbmVzIHRoZSBiZXN0IGF2YWlsYWJsZSBsYW5ndWFnZSB0byBtZWV0IHRoZVxuICogcmVxdWVzdC4gVGhlIGFsZ29yaXRobSBpcyBpbXBsZW1lbnRhdGlvbiBkZXBlbmRlbnQsIGJ1dCBzaG91bGQgcHJvZHVjZSByZXN1bHRzXG4gKiB0aGF0IGEgdHlwaWNhbCB1c2VyIG9mIHRoZSByZXF1ZXN0ZWQgbG9jYWxlcyB3b3VsZCBwZXJjZWl2ZSBhcyBhdCBsZWFzdCBhc1xuICogZ29vZCBhcyB0aG9zZSBwcm9kdWNlZCBieSB0aGUgTG9va3VwTWF0Y2hlciBhYnN0cmFjdCBvcGVyYXRpb24uIE9wdGlvbnNcbiAqIHNwZWNpZmllZCB0aHJvdWdoIFVuaWNvZGUgbG9jYWxlIGV4dGVuc2lvbiBzZXF1ZW5jZXMgbXVzdCBiZSBpZ25vcmVkIGJ5IHRoZVxuICogYWxnb3JpdGhtLiBJbmZvcm1hdGlvbiBhYm91dCBzdWNoIHN1YnNlcXVlbmNlcyBpcyByZXR1cm5lZCBzZXBhcmF0ZWx5LlxuICogVGhlIGFic3RyYWN0IG9wZXJhdGlvbiByZXR1cm5zIGEgcmVjb3JkIHdpdGggYSBbW2xvY2FsZV1dIGZpZWxkLCB3aG9zZSB2YWx1ZVxuICogaXMgdGhlIGxhbmd1YWdlIHRhZyBvZiB0aGUgc2VsZWN0ZWQgbG9jYWxlLCB3aGljaCBtdXN0IGJlIGFuIGVsZW1lbnQgb2ZcbiAqIGF2YWlsYWJsZUxvY2FsZXMuIElmIHRoZSBsYW5ndWFnZSB0YWcgb2YgdGhlIHJlcXVlc3QgbG9jYWxlIHRoYXQgbGVkIHRvIHRoZVxuICogc2VsZWN0ZWQgbG9jYWxlIGNvbnRhaW5lZCBhIFVuaWNvZGUgbG9jYWxlIGV4dGVuc2lvbiBzZXF1ZW5jZSwgdGhlbiB0aGVcbiAqIHJldHVybmVkIHJlY29yZCBhbHNvIGNvbnRhaW5zIGFuIFtbZXh0ZW5zaW9uXV0gZmllbGQgd2hvc2UgdmFsdWUgaXMgdGhlIGZpcnN0XG4gKiBVbmljb2RlIGxvY2FsZSBleHRlbnNpb24gc2VxdWVuY2UsIGFuZCBhbiBbW2V4dGVuc2lvbkluZGV4XV0gZmllbGQgd2hvc2UgdmFsdWVcbiAqIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgVW5pY29kZSBsb2NhbGUgZXh0ZW5zaW9uIHNlcXVlbmNlIHdpdGhpbiB0aGUgcmVxdWVzdFxuICogbG9jYWxlIGxhbmd1YWdlIHRhZy5cbiAqL1xuZnVuY3Rpb24gLyogOS4yLjQgKi9CZXN0Rml0TWF0Y2hlciAoYXZhaWxhYmxlTG9jYWxlcywgcmVxdWVzdGVkTG9jYWxlcykge1xuICAgIHJldHVybiBMb29rdXBNYXRjaGVyKGF2YWlsYWJsZUxvY2FsZXMsIHJlcXVlc3RlZExvY2FsZXMpO1xufVxuXG4vKipcbiAqIFRoZSBSZXNvbHZlTG9jYWxlIGFic3RyYWN0IG9wZXJhdGlvbiBjb21wYXJlcyBhIEJDUCA0NyBsYW5ndWFnZSBwcmlvcml0eSBsaXN0XG4gKiByZXF1ZXN0ZWRMb2NhbGVzIGFnYWluc3QgdGhlIGxvY2FsZXMgaW4gYXZhaWxhYmxlTG9jYWxlcyBhbmQgZGV0ZXJtaW5lcyB0aGVcbiAqIGJlc3QgYXZhaWxhYmxlIGxhbmd1YWdlIHRvIG1lZXQgdGhlIHJlcXVlc3QuIGF2YWlsYWJsZUxvY2FsZXMgYW5kXG4gKiByZXF1ZXN0ZWRMb2NhbGVzIG11c3QgYmUgcHJvdmlkZWQgYXMgTGlzdCB2YWx1ZXMsIG9wdGlvbnMgYXMgYSBSZWNvcmQuXG4gKi9cbmZ1bmN0aW9uIC8qIDkuMi41ICovUmVzb2x2ZUxvY2FsZSAoYXZhaWxhYmxlTG9jYWxlcywgcmVxdWVzdGVkTG9jYWxlcywgb3B0aW9ucywgcmVsZXZhbnRFeHRlbnNpb25LZXlzLCBsb2NhbGVEYXRhKSB7XG4gICAgaWYgKGF2YWlsYWJsZUxvY2FsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcignTm8gbG9jYWxlIGRhdGEgaGFzIGJlZW4gcHJvdmlkZWQgZm9yIHRoaXMgb2JqZWN0IHlldC4nKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAgICB2YXJcbiAgICAgICAgLy8gMS4gTGV0IG1hdGNoZXIgYmUgdGhlIHZhbHVlIG9mIG9wdGlvbnMuW1tsb2NhbGVNYXRjaGVyXV0uXG4gICAgICAgIG1hdGNoZXIgPSBvcHRpb25zWydbW2xvY2FsZU1hdGNoZXJdXSddO1xuXG4gICAgLy8gMi4gSWYgbWF0Y2hlciBpcyBcImxvb2t1cFwiLCB0aGVuXG4gICAgaWYgKG1hdGNoZXIgPT09ICdsb29rdXAnKVxuICAgICAgICB2YXJcbiAgICAgICAgICAgIC8vIGEuIExldCByIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgTG9va3VwTWF0Y2hlciBhYnN0cmFjdCBvcGVyYXRpb25cbiAgICAgICAgICAgIC8vICAgIChkZWZpbmVkIGluIDkuMi4zKSB3aXRoIGFyZ3VtZW50cyBhdmFpbGFibGVMb2NhbGVzIGFuZFxuICAgICAgICAgICAgLy8gICAgcmVxdWVzdGVkTG9jYWxlcy5cbiAgICAgICAgICAgIHIgPSBMb29rdXBNYXRjaGVyKGF2YWlsYWJsZUxvY2FsZXMsIHJlcXVlc3RlZExvY2FsZXMpO1xuXG4gICAgLy8gMy4gRWxzZVxuICAgIGVsc2VcbiAgICAgICAgdmFyXG4gICAgICAgICAgICAvLyBhLiBMZXQgciBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEJlc3RGaXRNYXRjaGVyIGFic3RyYWN0XG4gICAgICAgICAgICAvLyAgICBvcGVyYXRpb24gKGRlZmluZWQgaW4gOS4yLjQpIHdpdGggYXJndW1lbnRzIGF2YWlsYWJsZUxvY2FsZXMgYW5kXG4gICAgICAgICAgICAvLyAgICByZXF1ZXN0ZWRMb2NhbGVzLlxuICAgICAgICAgICAgciA9IEJlc3RGaXRNYXRjaGVyKGF2YWlsYWJsZUxvY2FsZXMsIHJlcXVlc3RlZExvY2FsZXMpO1xuXG4gICAgdmFyXG4gICAgICAgIC8vIDQuIExldCBmb3VuZExvY2FsZSBiZSB0aGUgdmFsdWUgb2Ygci5bW2xvY2FsZV1dLlxuICAgICAgICBmb3VuZExvY2FsZSA9IHJbJ1tbbG9jYWxlXV0nXTtcblxuICAgIC8vIDUuIElmIHIgaGFzIGFuIFtbZXh0ZW5zaW9uXV0gZmllbGQsIHRoZW5cbiAgICBpZiAoaG9wLmNhbGwociwgJ1tbZXh0ZW5zaW9uXV0nKSlcbiAgICAgICAgdmFyXG4gICAgICAgICAgICAvLyBhLiBMZXQgZXh0ZW5zaW9uIGJlIHRoZSB2YWx1ZSBvZiByLltbZXh0ZW5zaW9uXV0uXG4gICAgICAgICAgICBleHRlbnNpb24gPSByWydbW2V4dGVuc2lvbl1dJ10sXG4gICAgICAgICAgICAvLyBiLiBMZXQgZXh0ZW5zaW9uSW5kZXggYmUgdGhlIHZhbHVlIG9mIHIuW1tleHRlbnNpb25JbmRleF1dLlxuICAgICAgICAgICAgZXh0ZW5zaW9uSW5kZXggPSByWydbW2V4dGVuc2lvbkluZGV4XV0nXSxcbiAgICAgICAgICAgIC8vIGMuIExldCBzcGxpdCBiZSB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gZnVuY3Rpb24gb2JqZWN0IGRlZmluZWQgaW4gRVM1LFxuICAgICAgICAgICAgLy8gICAgMTUuNS40LjE0LlxuICAgICAgICAgICAgc3BsaXQgPSBTdHJpbmcucHJvdG90eXBlLnNwbGl0LFxuICAgICAgICAgICAgLy8gZC4gTGV0IGV4dGVuc2lvblN1YnRhZ3MgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0NhbGxdXSBpbnRlcm5hbFxuICAgICAgICAgICAgLy8gICAgbWV0aG9kIG9mIHNwbGl0IHdpdGggZXh0ZW5zaW9uIGFzIHRoZSB0aGlzIHZhbHVlIGFuZCBhbiBhcmd1bWVudFxuICAgICAgICAgICAgLy8gICAgbGlzdCBjb250YWluaW5nIHRoZSBzaW5nbGUgaXRlbSBcIi1cIi5cbiAgICAgICAgICAgIGV4dGVuc2lvblN1YnRhZ3MgPSBzcGxpdC5jYWxsKGV4dGVuc2lvbiwgJy0nKSxcbiAgICAgICAgICAgIC8vIGUuIExldCBleHRlbnNpb25TdWJ0YWdzTGVuZ3RoIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXVxuICAgICAgICAgICAgLy8gICAgaW50ZXJuYWwgbWV0aG9kIG9mIGV4dGVuc2lvblN1YnRhZ3Mgd2l0aCBhcmd1bWVudCBcImxlbmd0aFwiLlxuICAgICAgICAgICAgZXh0ZW5zaW9uU3VidGFnc0xlbmd0aCA9IGV4dGVuc2lvblN1YnRhZ3MubGVuZ3RoO1xuXG4gICAgdmFyXG4gICAgICAgIC8vIDYuIExldCByZXN1bHQgYmUgYSBuZXcgUmVjb3JkLlxuICAgICAgICByZXN1bHQgPSBuZXcgUmVjb3JkKCk7XG5cbiAgICAvLyA3LiBTZXQgcmVzdWx0LltbZGF0YUxvY2FsZV1dIHRvIGZvdW5kTG9jYWxlLlxuICAgIHJlc3VsdFsnW1tkYXRhTG9jYWxlXV0nXSA9IGZvdW5kTG9jYWxlO1xuXG4gICAgdmFyXG4gICAgICAgIC8vIDguIExldCBzdXBwb3J0ZWRFeHRlbnNpb24gYmUgXCItdVwiLlxuICAgICAgICBzdXBwb3J0ZWRFeHRlbnNpb24gPSAnLXUnLFxuICAgICAgICAvLyA5LiBMZXQgaSBiZSAwLlxuICAgICAgICBpID0gMCxcbiAgICAgICAgLy8gMTAuIExldCBsZW4gYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgICAgICAvLyAgICAgcmVsZXZhbnRFeHRlbnNpb25LZXlzIHdpdGggYXJndW1lbnQgXCJsZW5ndGhcIi5cbiAgICAgICAgbGVuID0gcmVsZXZhbnRFeHRlbnNpb25LZXlzLmxlbmd0aDtcblxuICAgIC8vIDExIFJlcGVhdCB3aGlsZSBpIDwgbGVuOlxuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICAgIHZhclxuICAgICAgICAgICAgLy8gYS4gTGV0IGtleSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgICAgICAgICAvLyAgICByZWxldmFudEV4dGVuc2lvbktleXMgd2l0aCBhcmd1bWVudCBUb1N0cmluZyhpKS5cbiAgICAgICAgICAgIGtleSA9IHJlbGV2YW50RXh0ZW5zaW9uS2V5c1tpXSxcbiAgICAgICAgICAgIC8vIGIuIExldCBmb3VuZExvY2FsZURhdGEgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsXG4gICAgICAgICAgICAvLyAgICBtZXRob2Qgb2YgbG9jYWxlRGF0YSB3aXRoIHRoZSBhcmd1bWVudCBmb3VuZExvY2FsZS5cbiAgICAgICAgICAgIGZvdW5kTG9jYWxlRGF0YSA9IGxvY2FsZURhdGFbZm91bmRMb2NhbGVdLFxuICAgICAgICAgICAgLy8gYy4gTGV0IGtleUxvY2FsZURhdGEgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsXG4gICAgICAgICAgICAvLyAgICBtZXRob2Qgb2YgZm91bmRMb2NhbGVEYXRhIHdpdGggdGhlIGFyZ3VtZW50IGtleS5cbiAgICAgICAgICAgIGtleUxvY2FsZURhdGEgPSBmb3VuZExvY2FsZURhdGFba2V5XSxcbiAgICAgICAgICAgIC8vIGQuIExldCB2YWx1ZSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgICAgICAgICAvLyAgICBrZXlMb2NhbGVEYXRhIHdpdGggYXJndW1lbnQgXCIwXCIuXG4gICAgICAgICAgICB2YWx1ZSA9IGtleUxvY2FsZURhdGFbJzAnXSxcbiAgICAgICAgICAgIC8vIGUuIExldCBzdXBwb3J0ZWRFeHRlbnNpb25BZGRpdGlvbiBiZSBcIlwiLlxuICAgICAgICAgICAgc3VwcG9ydGVkRXh0ZW5zaW9uQWRkaXRpb24gPSAnJyxcbiAgICAgICAgICAgIC8vIGYuIExldCBpbmRleE9mIGJlIHRoZSBzdGFuZGFyZCBidWlsdC1pbiBmdW5jdGlvbiBvYmplY3QgZGVmaW5lZCBpblxuICAgICAgICAgICAgLy8gICAgRVM1LCAxNS40LjQuMTQuXG4gICAgICAgICAgICBpbmRleE9mID0gYXJySW5kZXhPZjtcblxuICAgICAgICAvLyBnLiBJZiBleHRlbnNpb25TdWJ0YWdzIGlzIG5vdCB1bmRlZmluZWQsIHRoZW5cbiAgICAgICAgaWYgKGV4dGVuc2lvblN1YnRhZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICAgLy8gaS4gTGV0IGtleVBvcyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ2FsbF1dIGludGVybmFsXG4gICAgICAgICAgICAgICAgLy8gICAgbWV0aG9kIG9mIGluZGV4T2Ygd2l0aCBleHRlbnNpb25TdWJ0YWdzIGFzIHRoZSB0aGlzIHZhbHVlIGFuZFxuICAgICAgICAgICAgICAgIC8vIGFuIGFyZ3VtZW50IGxpc3QgY29udGFpbmluZyB0aGUgc2luZ2xlIGl0ZW0ga2V5LlxuICAgICAgICAgICAgICAgIGtleVBvcyA9IGluZGV4T2YuY2FsbChleHRlbnNpb25TdWJ0YWdzLCBrZXkpO1xuXG4gICAgICAgICAgICAvLyBpaS4gSWYga2V5UG9zIOKJoCAtMSwgdGhlblxuICAgICAgICAgICAgaWYgKGtleVBvcyAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyAxLiBJZiBrZXlQb3MgKyAxIDwgZXh0ZW5zaW9uU3VidGFnc0xlbmd0aCBhbmQgdGhlIGxlbmd0aCBvZiB0aGVcbiAgICAgICAgICAgICAgICAvLyAgICByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2ZcbiAgICAgICAgICAgICAgICAvLyAgICBleHRlbnNpb25TdWJ0YWdzIHdpdGggYXJndW1lbnQgVG9TdHJpbmcoa2V5UG9zICsxKSBpcyBncmVhdGVyXG4gICAgICAgICAgICAgICAgLy8gICAgdGhhbiAyLCB0aGVuXG4gICAgICAgICAgICAgICAgaWYgKGtleVBvcyArIDEgPCBleHRlbnNpb25TdWJ0YWdzTGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBleHRlbnNpb25TdWJ0YWdzW2tleVBvcyArIDFdLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhLiBMZXQgcmVxdWVzdGVkVmFsdWUgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBpbnRlcm5hbCBtZXRob2Qgb2YgZXh0ZW5zaW9uU3VidGFncyB3aXRoIGFyZ3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBUb1N0cmluZyhrZXlQb3MgKyAxKS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RlZFZhbHVlID0gZXh0ZW5zaW9uU3VidGFnc1trZXlQb3MgKyAxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGIuIExldCB2YWx1ZVBvcyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ2FsbF1dXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBpbnRlcm5hbCBtZXRob2Qgb2YgaW5kZXhPZiB3aXRoIGtleUxvY2FsZURhdGEgYXMgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICB0aGlzIHZhbHVlIGFuZCBhbiBhcmd1bWVudCBsaXN0IGNvbnRhaW5pbmcgdGhlIHNpbmdsZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgaXRlbSByZXF1ZXN0ZWRWYWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUG9zID0gaW5kZXhPZi5jYWxsKGtleUxvY2FsZURhdGEsIHJlcXVlc3RlZFZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjLiBJZiB2YWx1ZVBvcyDiiaAgLTEsIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlUG9zICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGkuIExldCB2YWx1ZSBiZSByZXF1ZXN0ZWRWYWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlcXVlc3RlZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlpLiBMZXQgc3VwcG9ydGVkRXh0ZW5zaW9uQWRkaXRpb24gYmUgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbmNhdGVuYXRpb24gb2YgXCItXCIsIGtleSwgXCItXCIsIGFuZCB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWRFeHRlbnNpb25BZGRpdGlvbiA9ICctJyArIGtleSArICctJyArIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAyLiBFbHNlXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYS4gTGV0IHZhbHVlUG9zIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tDYWxsXV1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGludGVybmFsIG1ldGhvZCBvZiBpbmRleE9mIHdpdGgga2V5TG9jYWxlRGF0YSBhcyB0aGUgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWUgYW5kIGFuIGFyZ3VtZW50IGxpc3QgY29udGFpbmluZyB0aGUgc2luZ2xlIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwidHJ1ZVwiLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVQb3MgPSBpbmRleE9mKGtleUxvY2FsZURhdGEsICd0cnVlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYi4gSWYgdmFsdWVQb3Mg4omgIC0xLCB0aGVuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVBvcyAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpLiBMZXQgdmFsdWUgYmUgXCJ0cnVlXCIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAndHJ1ZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGguIElmIG9wdGlvbnMgaGFzIGEgZmllbGQgW1s8a2V5Pl1dLCB0aGVuXG4gICAgICAgIGlmIChob3AuY2FsbChvcHRpb25zLCAnW1snICsga2V5ICsgJ11dJykpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAgIC8vIGkuIExldCBvcHRpb25zVmFsdWUgYmUgdGhlIHZhbHVlIG9mIG9wdGlvbnMuW1s8a2V5Pl1dLlxuICAgICAgICAgICAgICAgIG9wdGlvbnNWYWx1ZSA9IG9wdGlvbnNbJ1tbJyArIGtleSArICddXSddO1xuXG4gICAgICAgICAgICAvLyBpaS4gSWYgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0NhbGxdXSBpbnRlcm5hbCBtZXRob2Qgb2YgaW5kZXhPZlxuICAgICAgICAgICAgLy8gICAgIHdpdGgga2V5TG9jYWxlRGF0YSBhcyB0aGUgdGhpcyB2YWx1ZSBhbmQgYW4gYXJndW1lbnQgbGlzdFxuICAgICAgICAgICAgLy8gICAgIGNvbnRhaW5pbmcgdGhlIHNpbmdsZSBpdGVtIG9wdGlvbnNWYWx1ZSBpcyBub3QgLTEsIHRoZW5cbiAgICAgICAgICAgIGlmIChpbmRleE9mLmNhbGwoa2V5TG9jYWxlRGF0YSwgb3B0aW9uc1ZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyAxLiBJZiBvcHRpb25zVmFsdWUgaXMgbm90IGVxdWFsIHRvIHZhbHVlLCB0aGVuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYS4gTGV0IHZhbHVlIGJlIG9wdGlvbnNWYWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvcHRpb25zVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIGIuIExldCBzdXBwb3J0ZWRFeHRlbnNpb25BZGRpdGlvbiBiZSBcIlwiLlxuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWRFeHRlbnNpb25BZGRpdGlvbiA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpLiBTZXQgcmVzdWx0LltbPGtleT5dXSB0byB2YWx1ZS5cbiAgICAgICAgcmVzdWx0WydbWycgKyBrZXkgKyAnXV0nXSA9IHZhbHVlO1xuXG4gICAgICAgIC8vIGouIEFwcGVuZCBzdXBwb3J0ZWRFeHRlbnNpb25BZGRpdGlvbiB0byBzdXBwb3J0ZWRFeHRlbnNpb24uXG4gICAgICAgIHN1cHBvcnRlZEV4dGVuc2lvbiArPSBzdXBwb3J0ZWRFeHRlbnNpb25BZGRpdGlvbjtcblxuICAgICAgICAvLyBrLiBJbmNyZWFzZSBpIGJ5IDEuXG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgLy8gMTIuIElmIHRoZSBsZW5ndGggb2Ygc3VwcG9ydGVkRXh0ZW5zaW9uIGlzIGdyZWF0ZXIgdGhhbiAyLCB0aGVuXG4gICAgaWYgKHN1cHBvcnRlZEV4dGVuc2lvbi5sZW5ndGggPiAyKSB7XG4gICAgICAgIHZhclxuICAgICAgICAgICAgLy8gYS4gTGV0IHByZUV4dGVuc2lvbiBiZSB0aGUgc3Vic3RyaW5nIG9mIGZvdW5kTG9jYWxlIGZyb20gcG9zaXRpb24gMCxcbiAgICAgICAgICAgIC8vICAgIGluY2x1c2l2ZSwgdG8gcG9zaXRpb24gZXh0ZW5zaW9uSW5kZXgsIGV4Y2x1c2l2ZS5cbiAgICAgICAgICAgIHByZUV4dGVuc2lvbiA9IGZvdW5kTG9jYWxlLnN1YnN0cmluZygwLCBleHRlbnNpb25JbmRleCksXG4gICAgICAgICAgICAvLyBiLiBMZXQgcG9zdEV4dGVuc2lvbiBiZSB0aGUgc3Vic3RyaW5nIG9mIGZvdW5kTG9jYWxlIGZyb20gcG9zaXRpb25cbiAgICAgICAgICAgIC8vICAgIGV4dGVuc2lvbkluZGV4IHRvIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbiAgICAgICAgICAgIHBvc3RFeHRlbnNpb24gPSBmb3VuZExvY2FsZS5zdWJzdHJpbmcoZXh0ZW5zaW9uSW5kZXgpLFxuICAgICAgICAgICAgLy8gYy4gTGV0IGZvdW5kTG9jYWxlIGJlIHRoZSBjb25jYXRlbmF0aW9uIG9mIHByZUV4dGVuc2lvbixcbiAgICAgICAgICAgIC8vICAgIHN1cHBvcnRlZEV4dGVuc2lvbiwgYW5kIHBvc3RFeHRlbnNpb24uXG4gICAgICAgICAgICBmb3VuZExvY2FsZSA9IHByZUV4dGVuc2lvbiArIHN1cHBvcnRlZEV4dGVuc2lvbiArIHBvc3RFeHRlbnNpb247XG4gICAgfVxuICAgIC8vIDEzLiBTZXQgcmVzdWx0LltbbG9jYWxlXV0gdG8gZm91bmRMb2NhbGUuXG4gICAgcmVzdWx0WydbW2xvY2FsZV1dJ10gPSBmb3VuZExvY2FsZTtcblxuICAgIC8vIDE0LiBSZXR1cm4gcmVzdWx0LlxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIExvb2t1cFN1cHBvcnRlZExvY2FsZXMgYWJzdHJhY3Qgb3BlcmF0aW9uIHJldHVybnMgdGhlIHN1YnNldCBvZiB0aGVcbiAqIHByb3ZpZGVkIEJDUCA0NyBsYW5ndWFnZSBwcmlvcml0eSBsaXN0IHJlcXVlc3RlZExvY2FsZXMgZm9yIHdoaWNoXG4gKiBhdmFpbGFibGVMb2NhbGVzIGhhcyBhIG1hdGNoaW5nIGxvY2FsZSB3aGVuIHVzaW5nIHRoZSBCQ1AgNDcgTG9va3VwIGFsZ29yaXRobS5cbiAqIExvY2FsZXMgYXBwZWFyIGluIHRoZSBzYW1lIG9yZGVyIGluIHRoZSByZXR1cm5lZCBsaXN0IGFzIGluIHJlcXVlc3RlZExvY2FsZXMuXG4gKiBUaGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuZnVuY3Rpb24gLyogOS4yLjYgKi9Mb29rdXBTdXBwb3J0ZWRMb2NhbGVzIChhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzKSB7XG4gICAgdmFyXG4gICAgICAgIC8vIDEuIExldCBsZW4gYmUgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiByZXF1ZXN0ZWRMb2NhbGVzLlxuICAgICAgICBsZW4gPSByZXF1ZXN0ZWRMb2NhbGVzLmxlbmd0aCxcbiAgICAgICAgLy8gMi4gTGV0IHN1YnNldCBiZSBhIG5ldyBlbXB0eSBMaXN0LlxuICAgICAgICBzdWJzZXQgPSBuZXcgTGlzdCgpLFxuICAgICAgICAvLyAzLiBMZXQgayBiZSAwLlxuICAgICAgICBrID0gMDtcblxuICAgIC8vIDQuIFJlcGVhdCB3aGlsZSBrIDwgbGVuXG4gICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAgdmFyXG4gICAgICAgICAgICAvLyBhLiBMZXQgbG9jYWxlIGJlIHRoZSBlbGVtZW50IG9mIHJlcXVlc3RlZExvY2FsZXMgYXQgMC1vcmlnaW5lZCBsaXN0XG4gICAgICAgICAgICAvLyAgICBwb3NpdGlvbiBrLlxuICAgICAgICAgICAgbG9jYWxlID0gcmVxdWVzdGVkTG9jYWxlc1trXSxcbiAgICAgICAgICAgIC8vIGIuIExldCBub0V4dGVuc2lvbnNMb2NhbGUgYmUgdGhlIFN0cmluZyB2YWx1ZSB0aGF0IGlzIGxvY2FsZSB3aXRoIGFsbFxuICAgICAgICAgICAgLy8gICAgVW5pY29kZSBsb2NhbGUgZXh0ZW5zaW9uIHNlcXVlbmNlcyByZW1vdmVkLlxuICAgICAgICAgICAgbm9FeHRlbnNpb25zTG9jYWxlID0gU3RyaW5nKGxvY2FsZSkucmVwbGFjZShleHBVbmljb2RlRXhTZXEsICcnKSxcbiAgICAgICAgICAgIC8vIGMuIExldCBhdmFpbGFibGVMb2NhbGUgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZVxuICAgICAgICAgICAgLy8gICAgQmVzdEF2YWlsYWJsZUxvY2FsZSBhYnN0cmFjdCBvcGVyYXRpb24gKGRlZmluZWQgaW4gOS4yLjIpIHdpdGhcbiAgICAgICAgICAgIC8vICAgIGFyZ3VtZW50cyBhdmFpbGFibGVMb2NhbGVzIGFuZCBub0V4dGVuc2lvbnNMb2NhbGUuXG4gICAgICAgICAgICBhdmFpbGFibGVMb2NhbGUgPSBCZXN0QXZhaWxhYmxlTG9jYWxlKGF2YWlsYWJsZUxvY2FsZXMsIG5vRXh0ZW5zaW9uc0xvY2FsZSk7XG5cbiAgICAgICAgLy8gZC4gSWYgYXZhaWxhYmxlTG9jYWxlIGlzIG5vdCB1bmRlZmluZWQsIHRoZW4gYXBwZW5kIGxvY2FsZSB0byB0aGUgZW5kIG9mXG4gICAgICAgIC8vICAgIHN1YnNldC5cbiAgICAgICAgaWYgKGF2YWlsYWJsZUxvY2FsZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgYXJyUHVzaC5jYWxsKHN1YnNldCwgbG9jYWxlKTtcblxuICAgICAgICAvLyBlLiBJbmNyZW1lbnQgayBieSAxLlxuICAgICAgICBrKys7XG4gICAgfVxuXG4gICAgdmFyXG4gICAgICAgIC8vIDUuIExldCBzdWJzZXRBcnJheSBiZSBhIG5ldyBBcnJheSBvYmplY3Qgd2hvc2UgZWxlbWVudHMgYXJlIHRoZSBzYW1lXG4gICAgICAgIC8vICAgIHZhbHVlcyBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgZWxlbWVudHMgb2Ygc3Vic2V0LlxuICAgICAgICBzdWJzZXRBcnJheSA9IGFyclNsaWNlLmNhbGwoc3Vic2V0KTtcblxuICAgIC8vIDYuIFJldHVybiBzdWJzZXRBcnJheS5cbiAgICByZXR1cm4gc3Vic2V0QXJyYXk7XG59XG5cbi8qKlxuICogVGhlIEJlc3RGaXRTdXBwb3J0ZWRMb2NhbGVzIGFic3RyYWN0IG9wZXJhdGlvbiByZXR1cm5zIHRoZSBzdWJzZXQgb2YgdGhlXG4gKiBwcm92aWRlZCBCQ1AgNDcgbGFuZ3VhZ2UgcHJpb3JpdHkgbGlzdCByZXF1ZXN0ZWRMb2NhbGVzIGZvciB3aGljaFxuICogYXZhaWxhYmxlTG9jYWxlcyBoYXMgYSBtYXRjaGluZyBsb2NhbGUgd2hlbiB1c2luZyB0aGUgQmVzdCBGaXQgTWF0Y2hlclxuICogYWxnb3JpdGhtLiBMb2NhbGVzIGFwcGVhciBpbiB0aGUgc2FtZSBvcmRlciBpbiB0aGUgcmV0dXJuZWQgbGlzdCBhcyBpblxuICogcmVxdWVzdGVkTG9jYWxlcy4gVGhlIHN0ZXBzIHRha2VuIGFyZSBpbXBsZW1lbnRhdGlvbiBkZXBlbmRlbnQuXG4gKi9cbmZ1bmN0aW9uIC8qOS4yLjcgKi9CZXN0Rml0U3VwcG9ydGVkTG9jYWxlcyAoYXZhaWxhYmxlTG9jYWxlcywgcmVxdWVzdGVkTG9jYWxlcykge1xuICAgIC8vICMjI1RPRE86IGltcGxlbWVudCB0aGlzIGZ1bmN0aW9uIGFzIGRlc2NyaWJlZCBieSB0aGUgc3BlY2lmaWNhdGlvbiMjI1xuICAgIHJldHVybiBMb29rdXBTdXBwb3J0ZWRMb2NhbGVzKGF2YWlsYWJsZUxvY2FsZXMsIHJlcXVlc3RlZExvY2FsZXMpO1xufVxuXG4vKipcbiAqIFRoZSBTdXBwb3J0ZWRMb2NhbGVzIGFic3RyYWN0IG9wZXJhdGlvbiByZXR1cm5zIHRoZSBzdWJzZXQgb2YgdGhlIHByb3ZpZGVkIEJDUFxuICogNDcgbGFuZ3VhZ2UgcHJpb3JpdHkgbGlzdCByZXF1ZXN0ZWRMb2NhbGVzIGZvciB3aGljaCBhdmFpbGFibGVMb2NhbGVzIGhhcyBhXG4gKiBtYXRjaGluZyBsb2NhbGUuIFR3byBhbGdvcml0aG1zIGFyZSBhdmFpbGFibGUgdG8gbWF0Y2ggdGhlIGxvY2FsZXM6IHRoZSBMb29rdXBcbiAqIGFsZ29yaXRobSBkZXNjcmliZWQgaW4gUkZDIDQ2NDcgc2VjdGlvbiAzLjQsIGFuZCBhbiBpbXBsZW1lbnRhdGlvbiBkZXBlbmRlbnRcbiAqIGJlc3QtZml0IGFsZ29yaXRobS4gTG9jYWxlcyBhcHBlYXIgaW4gdGhlIHNhbWUgb3JkZXIgaW4gdGhlIHJldHVybmVkIGxpc3QgYXNcbiAqIGluIHJlcXVlc3RlZExvY2FsZXMuIFRoZSBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICovXG5mdW5jdGlvbiAvKjkuMi44ICovU3VwcG9ydGVkTG9jYWxlcyAoYXZhaWxhYmxlTG9jYWxlcywgcmVxdWVzdGVkTG9jYWxlcywgb3B0aW9ucykge1xuICAgIC8vIDEuIElmIG9wdGlvbnMgaXMgbm90IHVuZGVmaW5lZCwgdGhlblxuICAgIGlmIChvcHRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyXG4gICAgICAgICAgICAvLyBhLiBMZXQgb3B0aW9ucyBiZSBUb09iamVjdChvcHRpb25zKS5cbiAgICAgICAgICAgIG9wdGlvbnMgPSBuZXcgUmVjb3JkKHRvT2JqZWN0KG9wdGlvbnMpKSxcbiAgICAgICAgICAgIC8vIGIuIExldCBtYXRjaGVyIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2ZcbiAgICAgICAgICAgIC8vICAgIG9wdGlvbnMgd2l0aCBhcmd1bWVudCBcImxvY2FsZU1hdGNoZXJcIi5cbiAgICAgICAgICAgIG1hdGNoZXIgPSBvcHRpb25zLmxvY2FsZU1hdGNoZXI7XG5cbiAgICAgICAgLy8gYy4gSWYgbWF0Y2hlciBpcyBub3QgdW5kZWZpbmVkLCB0aGVuXG4gICAgICAgIGlmIChtYXRjaGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIGkuIExldCBtYXRjaGVyIGJlIFRvU3RyaW5nKG1hdGNoZXIpLlxuICAgICAgICAgICAgbWF0Y2hlciA9IFN0cmluZyhtYXRjaGVyKTtcblxuICAgICAgICAgICAgLy8gaWkuIElmIG1hdGNoZXIgaXMgbm90IFwibG9va3VwXCIgb3IgXCJiZXN0IGZpdFwiLCB0aGVuIHRocm93IGEgUmFuZ2VFcnJvclxuICAgICAgICAgICAgLy8gICAgIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIGlmIChtYXRjaGVyICE9PSAnbG9va3VwJyAmJiBtYXRjaGVyICE9PSAnYmVzdCBmaXQnKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdtYXRjaGVyIHNob3VsZCBiZSBcImxvb2t1cFwiIG9yIFwiYmVzdCBmaXRcIicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIDIuIElmIG1hdGNoZXIgaXMgdW5kZWZpbmVkIG9yIFwiYmVzdCBmaXRcIiwgdGhlblxuICAgIGlmIChtYXRjaGVyID09PSB1bmRlZmluZWQgfHwgbWF0Y2hlciA9PT0gJ2Jlc3QgZml0JylcbiAgICAgICAgdmFyXG4gICAgICAgICAgICAvLyBhLiBMZXQgc3Vic2V0IGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgQmVzdEZpdFN1cHBvcnRlZExvY2FsZXNcbiAgICAgICAgICAgIC8vICAgIGFic3RyYWN0IG9wZXJhdGlvbiAoZGVmaW5lZCBpbiA5LjIuNykgd2l0aCBhcmd1bWVudHNcbiAgICAgICAgICAgIC8vICAgIGF2YWlsYWJsZUxvY2FsZXMgYW5kIHJlcXVlc3RlZExvY2FsZXMuXG4gICAgICAgICAgICBzdWJzZXQgPSBCZXN0Rml0U3VwcG9ydGVkTG9jYWxlcyhhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzKTtcbiAgICAvLyAzLiBFbHNlXG4gICAgZWxzZVxuICAgICAgICB2YXJcbiAgICAgICAgICAgIC8vIGEuIExldCBzdWJzZXQgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBMb29rdXBTdXBwb3J0ZWRMb2NhbGVzXG4gICAgICAgICAgICAvLyAgICBhYnN0cmFjdCBvcGVyYXRpb24gKGRlZmluZWQgaW4gOS4yLjYpIHdpdGggYXJndW1lbnRzXG4gICAgICAgICAgICAvLyAgICBhdmFpbGFibGVMb2NhbGVzIGFuZCByZXF1ZXN0ZWRMb2NhbGVzLlxuICAgICAgICAgICAgc3Vic2V0ID0gTG9va3VwU3VwcG9ydGVkTG9jYWxlcyhhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzKTtcblxuICAgIC8vIDQuIEZvciBlYWNoIG5hbWVkIG93biBwcm9wZXJ0eSBuYW1lIFAgb2Ygc3Vic2V0LFxuICAgIGZvciAodmFyIFAgaW4gc3Vic2V0KSB7XG4gICAgICAgIGlmICghaG9wLmNhbGwoc3Vic2V0LCBQKSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIGEuIExldCBkZXNjIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRPd25Qcm9wZXJ0eV1dIGludGVybmFsXG4gICAgICAgIC8vICAgIG1ldGhvZCBvZiBzdWJzZXQgd2l0aCBQLlxuICAgICAgICAvLyBiLiBTZXQgZGVzYy5bW1dyaXRhYmxlXV0gdG8gZmFsc2UuXG4gICAgICAgIC8vIGMuIFNldCBkZXNjLltbQ29uZmlndXJhYmxlXV0gdG8gZmFsc2UuXG4gICAgICAgIC8vIGQuIENhbGwgdGhlIFtbRGVmaW5lT3duUHJvcGVydHldXSBpbnRlcm5hbCBtZXRob2Qgb2Ygc3Vic2V0IHdpdGggUCwgZGVzYyxcbiAgICAgICAgLy8gICAgYW5kIHRydWUgYXMgYXJndW1lbnRzLlxuICAgICAgICBkZWZpbmVQcm9wZXJ0eShzdWJzZXQsIFAsIHtcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiBmYWxzZSwgdmFsdWU6IHN1YnNldFtQXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gXCJGcmVlemVcIiB0aGUgYXJyYXkgc28gbm8gbmV3IGVsZW1lbnRzIGNhbiBiZSBhZGRlZFxuICAgIGRlZmluZVByb3BlcnR5KHN1YnNldCwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuXG4gICAgLy8gNS4gUmV0dXJuIHN1YnNldFxuICAgIHJldHVybiBzdWJzZXQ7XG59XG5cbi8qKlxuICogVGhlIEdldE9wdGlvbiBhYnN0cmFjdCBvcGVyYXRpb24gZXh0cmFjdHMgdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSBuYW1lZFxuICogcHJvcGVydHkgZnJvbSB0aGUgcHJvdmlkZWQgb3B0aW9ucyBvYmplY3QsIGNvbnZlcnRzIGl0IHRvIHRoZSByZXF1aXJlZCB0eXBlLFxuICogY2hlY2tzIHdoZXRoZXIgaXQgaXMgb25lIG9mIGEgTGlzdCBvZiBhbGxvd2VkIHZhbHVlcywgYW5kIGZpbGxzIGluIGEgZmFsbGJhY2tcbiAqIHZhbHVlIGlmIG5lY2Vzc2FyeS5cbiAqL1xuZnVuY3Rpb24gLyo5LjIuOSAqL0dldE9wdGlvbiAob3B0aW9ucywgcHJvcGVydHksIHR5cGUsIHZhbHVlcywgZmFsbGJhY2spIHtcbiAgICB2YXJcbiAgICAgICAgLy8gMS4gTGV0IHZhbHVlIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2ZcbiAgICAgICAgLy8gICAgb3B0aW9ucyB3aXRoIGFyZ3VtZW50IHByb3BlcnR5LlxuICAgICAgICB2YWx1ZSA9IG9wdGlvbnNbcHJvcGVydHldO1xuXG4gICAgLy8gMi4gSWYgdmFsdWUgaXMgbm90IHVuZGVmaW5lZCwgdGhlblxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGEuIEFzc2VydDogdHlwZSBpcyBcImJvb2xlYW5cIiBvciBcInN0cmluZ1wiLlxuICAgICAgICAvLyBiLiBJZiB0eXBlIGlzIFwiYm9vbGVhblwiLCB0aGVuIGxldCB2YWx1ZSBiZSBUb0Jvb2xlYW4odmFsdWUpLlxuICAgICAgICAvLyBjLiBJZiB0eXBlIGlzIFwic3RyaW5nXCIsIHRoZW4gbGV0IHZhbHVlIGJlIFRvU3RyaW5nKHZhbHVlKS5cbiAgICAgICAgdmFsdWUgPSB0eXBlID09PSAnYm9vbGVhbicgPyBCb29sZWFuKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgOiAodHlwZSA9PT0gJ3N0cmluZycgPyBTdHJpbmcodmFsdWUpIDogdmFsdWUpO1xuXG4gICAgICAgIC8vIGQuIElmIHZhbHVlcyBpcyBub3QgdW5kZWZpbmVkLCB0aGVuXG4gICAgICAgIGlmICh2YWx1ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gaS4gSWYgdmFsdWVzIGRvZXMgbm90IGNvbnRhaW4gYW4gZWxlbWVudCBlcXVhbCB0byB2YWx1ZSwgdGhlbiB0aHJvdyBhXG4gICAgICAgICAgICAvLyAgICBSYW5nZUVycm9yIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIGlmIChhcnJJbmRleE9mLmNhbGwodmFsdWVzLCB2YWx1ZSkgPT09IC0xKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiJ1wiICsgdmFsdWUgKyBcIicgaXMgbm90IGFuIGFsbG93ZWQgdmFsdWUgZm9yIGBcIiArIHByb3BlcnR5ICsnYCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZS4gUmV0dXJuIHZhbHVlLlxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIC8vIEVsc2UgcmV0dXJuIGZhbGxiYWNrLlxuICAgIHJldHVybiBmYWxsYmFjaztcbn1cblxuLyoqXG4gKiBUaGUgR2V0TnVtYmVyT3B0aW9uIGFic3RyYWN0IG9wZXJhdGlvbiBleHRyYWN0cyBhIHByb3BlcnR5IHZhbHVlIGZyb20gdGhlXG4gKiBwcm92aWRlZCBvcHRpb25zIG9iamVjdCwgY29udmVydHMgaXQgdG8gYSBOdW1iZXIgdmFsdWUsIGNoZWNrcyB3aGV0aGVyIGl0IGlzXG4gKiBpbiB0aGUgYWxsb3dlZCByYW5nZSwgYW5kIGZpbGxzIGluIGEgZmFsbGJhY2sgdmFsdWUgaWYgbmVjZXNzYXJ5LlxuICovXG5mdW5jdGlvbiAvKiA5LjIuMTAgKi9HZXROdW1iZXJPcHRpb24gKG9wdGlvbnMsIHByb3BlcnR5LCBtaW5pbXVtLCBtYXhpbXVtLCBmYWxsYmFjaykge1xuICAgIHZhclxuICAgICAgICAvLyAxLiBMZXQgdmFsdWUgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgICAgICAvLyAgICBvcHRpb25zIHdpdGggYXJndW1lbnQgcHJvcGVydHkuXG4gICAgICAgIHZhbHVlID0gb3B0aW9uc1twcm9wZXJ0eV07XG5cbiAgICAvLyAyLiBJZiB2YWx1ZSBpcyBub3QgdW5kZWZpbmVkLCB0aGVuXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gYS4gTGV0IHZhbHVlIGJlIFRvTnVtYmVyKHZhbHVlKS5cbiAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuXG4gICAgICAgIC8vIGIuIElmIHZhbHVlIGlzIE5hTiBvciBsZXNzIHRoYW4gbWluaW11bSBvciBncmVhdGVyIHRoYW4gbWF4aW11bSwgdGhyb3cgYVxuICAgICAgICAvLyAgICBSYW5nZUVycm9yIGV4Y2VwdGlvbi5cbiAgICAgICAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA8IG1pbmltdW0gfHwgdmFsdWUgPiBtYXhpbXVtKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1ZhbHVlIGlzIG5vdCBhIG51bWJlciBvciBvdXRzaWRlIGFjY2VwdGVkIHJhbmdlJyk7XG5cbiAgICAgICAgLy8gYy4gUmV0dXJuIGZsb29yKHZhbHVlKS5cbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodmFsdWUpO1xuICAgIH1cbiAgICAvLyAzLiBFbHNlIHJldHVybiBmYWxsYmFjay5cbiAgICByZXR1cm4gZmFsbGJhY2s7XG59XG5cbi8vIDExLjEgVGhlIEludGwuTnVtYmVyRm9ybWF0IGNvbnN0cnVjdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBEZWZpbmUgdGhlIE51bWJlckZvcm1hdCBjb25zdHJ1Y3RvciBpbnRlcm5hbGx5IHNvIGl0IGNhbm5vdCBiZSB0YWludGVkXG5mdW5jdGlvbiBOdW1iZXJGb3JtYXRDb25zdHJ1Y3RvciAoKSB7XG4gICAgdmFyIGxvY2FsZXMgPSBhcmd1bWVudHNbMF07XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHNbMV07XG5cbiAgICBpZiAoIXRoaXMgfHwgdGhpcyA9PT0gSW50bCkge1xuICAgICAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY2FsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBJbml0aWFsaXplTnVtYmVyRm9ybWF0KHRvT2JqZWN0KHRoaXMpLCBsb2NhbGVzLCBvcHRpb25zKTtcbn1cblxuZGVmaW5lUHJvcGVydHkoSW50bCwgJ051bWJlckZvcm1hdCcsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IE51bWJlckZvcm1hdENvbnN0cnVjdG9yXG59KTtcblxuLy8gTXVzdCBleHBsaWNpdGx5IHNldCBwcm90b3R5cGVzIGFzIHVud3JpdGFibGVcbmRlZmluZVByb3BlcnR5KEludGwuTnVtYmVyRm9ybWF0LCAncHJvdG90eXBlJywge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxufSk7XG5cbi8qKlxuICogVGhlIGFic3RyYWN0IG9wZXJhdGlvbiBJbml0aWFsaXplTnVtYmVyRm9ybWF0IGFjY2VwdHMgdGhlIGFyZ3VtZW50c1xuICogbnVtYmVyRm9ybWF0ICh3aGljaCBtdXN0IGJlIGFuIG9iamVjdCksIGxvY2FsZXMsIGFuZCBvcHRpb25zLiBJdCBpbml0aWFsaXplc1xuICogbnVtYmVyRm9ybWF0IGFzIGEgTnVtYmVyRm9ybWF0IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gLyoxMS4xLjEuMSAqL0luaXRpYWxpemVOdW1iZXJGb3JtYXQgKG51bWJlckZvcm1hdCwgbG9jYWxlcywgb3B0aW9ucykge1xuICAgIHZhclxuICAgIC8vIFRoaXMgd2lsbCBiZSBhIGludGVybmFsIHByb3BlcnRpZXMgb2JqZWN0IGlmIHdlJ3JlIG5vdCBhbHJlYWR5IGluaXRpYWxpemVkXG4gICAgICAgIGludGVybmFsID0gZ2V0SW50ZXJuYWxQcm9wZXJ0aWVzKG51bWJlckZvcm1hdCksXG5cbiAgICAvLyBDcmVhdGUgYW4gb2JqZWN0IHdob3NlIHByb3BzIGNhbiBiZSB1c2VkIHRvIHJlc3RvcmUgdGhlIHZhbHVlcyBvZiBSZWdFeHAgcHJvcHNcbiAgICAgICAgcmVnZXhwU3RhdGUgPSBjcmVhdGVSZWdFeHBSZXN0b3JlKCk7XG5cbiAgICAvLyAxLiBJZiBudW1iZXJGb3JtYXQgaGFzIGFuIFtbaW5pdGlhbGl6ZWRJbnRsT2JqZWN0XV0gaW50ZXJuYWwgcHJvcGVydHkgd2l0aFxuICAgIC8vIHZhbHVlIHRydWUsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cbiAgICBpZiAoaW50ZXJuYWxbJ1tbaW5pdGlhbGl6ZWRJbnRsT2JqZWN0XV0nXSA9PT0gdHJ1ZSlcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYHRoaXNgIG9iamVjdCBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpemVkIGFzIGFuIEludGwgb2JqZWN0Jyk7XG5cbiAgICAvLyBOZWVkIHRoaXMgdG8gYWNjZXNzIHRoZSBgaW50ZXJuYWxgIG9iamVjdFxuICAgIGRlZmluZVByb3BlcnR5KG51bWJlckZvcm1hdCwgJ19fZ2V0SW50ZXJuYWxQcm9wZXJ0aWVzJywge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gTk9URTogTm9uLXN0YW5kYXJkLCBmb3IgaW50ZXJuYWwgdXNlIG9ubHlcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHNlY3JldClcbiAgICAgICAgICAgICAgICByZXR1cm4gaW50ZXJuYWw7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIDIuIFNldCB0aGUgW1tpbml0aWFsaXplZEludGxPYmplY3RdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBudW1iZXJGb3JtYXQgdG8gdHJ1ZS5cbiAgICBpbnRlcm5hbFsnW1tpbml0aWFsaXplZEludGxPYmplY3RdXSddID0gdHJ1ZTtcblxuICAgIHZhclxuICAgIC8vIDMuIExldCByZXF1ZXN0ZWRMb2NhbGVzIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgQ2Fub25pY2FsaXplTG9jYWxlTGlzdFxuICAgIC8vICAgIGFic3RyYWN0IG9wZXJhdGlvbiAoZGVmaW5lZCBpbiA5LjIuMSkgd2l0aCBhcmd1bWVudCBsb2NhbGVzLlxuICAgICAgICByZXF1ZXN0ZWRMb2NhbGVzID0gQ2Fub25pY2FsaXplTG9jYWxlTGlzdChsb2NhbGVzKTtcblxuICAgIC8vIDQuIElmIG9wdGlvbnMgaXMgdW5kZWZpbmVkLCB0aGVuXG4gICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgLy8gYS4gTGV0IG9wdGlvbnMgYmUgdGhlIHJlc3VsdCBvZiBjcmVhdGluZyBhIG5ldyBvYmplY3QgYXMgaWYgYnkgdGhlXG4gICAgICAgIC8vIGV4cHJlc3Npb24gbmV3IE9iamVjdCgpIHdoZXJlIE9iamVjdCBpcyB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gY29uc3RydWN0b3JcbiAgICAgICAgLy8gd2l0aCB0aGF0IG5hbWUuXG4gICAgICAgIG9wdGlvbnMgPSB7fTtcblxuICAgIC8vIDUuIEVsc2VcbiAgICBlbHNlXG4gICAgICAgIC8vIGEuIExldCBvcHRpb25zIGJlIFRvT2JqZWN0KG9wdGlvbnMpLlxuICAgICAgICBvcHRpb25zID0gdG9PYmplY3Qob3B0aW9ucyk7XG5cbiAgICB2YXJcbiAgICAvLyA2LiBMZXQgb3B0IGJlIGEgbmV3IFJlY29yZC5cbiAgICAgICAgb3B0ID0gbmV3IFJlY29yZCgpLFxuXG4gICAgLy8gNy4gTGV0IG1hdGNoZXIgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBHZXRPcHRpb24gYWJzdHJhY3Qgb3BlcmF0aW9uXG4gICAgLy8gICAgKGRlZmluZWQgaW4gOS4yLjkpIHdpdGggdGhlIGFyZ3VtZW50cyBvcHRpb25zLCBcImxvY2FsZU1hdGNoZXJcIiwgXCJzdHJpbmdcIixcbiAgICAvLyAgICBhIExpc3QgY29udGFpbmluZyB0aGUgdHdvIFN0cmluZyB2YWx1ZXMgXCJsb29rdXBcIiBhbmQgXCJiZXN0IGZpdFwiLCBhbmRcbiAgICAvLyAgICBcImJlc3QgZml0XCIuXG4gICAgICAgIG1hdGNoZXIgPSAgR2V0T3B0aW9uKG9wdGlvbnMsICdsb2NhbGVNYXRjaGVyJywgJ3N0cmluZycsIG5ldyBMaXN0KCdsb29rdXAnLCAnYmVzdCBmaXQnKSwgJ2Jlc3QgZml0Jyk7XG5cbiAgICAvLyA4LiBTZXQgb3B0LltbbG9jYWxlTWF0Y2hlcl1dIHRvIG1hdGNoZXIuXG4gICAgb3B0WydbW2xvY2FsZU1hdGNoZXJdXSddID0gbWF0Y2hlcjtcblxuICAgIHZhclxuICAgIC8vIDkuIExldCBOdW1iZXJGb3JtYXQgYmUgdGhlIHN0YW5kYXJkIGJ1aWx0LWluIG9iamVjdCB0aGF0IGlzIHRoZSBpbml0aWFsIHZhbHVlXG4gICAgLy8gICAgb2YgSW50bC5OdW1iZXJGb3JtYXQuXG4gICAgLy8gMTAuIExldCBsb2NhbGVEYXRhIGJlIHRoZSB2YWx1ZSBvZiB0aGUgW1tsb2NhbGVEYXRhXV0gaW50ZXJuYWwgcHJvcGVydHkgb2ZcbiAgICAvLyAgICAgTnVtYmVyRm9ybWF0LlxuICAgICAgICBsb2NhbGVEYXRhID0gaW50ZXJuYWxzLk51bWJlckZvcm1hdFsnW1tsb2NhbGVEYXRhXV0nXSxcblxuICAgIC8vIDExLiBMZXQgciBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFJlc29sdmVMb2NhbGUgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gICAgLy8gICAgIChkZWZpbmVkIGluIDkuMi41KSB3aXRoIHRoZSBbW2F2YWlsYWJsZUxvY2FsZXNdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZlxuICAgIC8vICAgICBOdW1iZXJGb3JtYXQsIHJlcXVlc3RlZExvY2FsZXMsIG9wdCwgdGhlIFtbcmVsZXZhbnRFeHRlbnNpb25LZXlzXV1cbiAgICAvLyAgICAgaW50ZXJuYWwgcHJvcGVydHkgb2YgTnVtYmVyRm9ybWF0LCBhbmQgbG9jYWxlRGF0YS5cbiAgICAgICAgciA9IFJlc29sdmVMb2NhbGUoXG4gICAgICAgICAgICAgICAgaW50ZXJuYWxzLk51bWJlckZvcm1hdFsnW1thdmFpbGFibGVMb2NhbGVzXV0nXSwgcmVxdWVzdGVkTG9jYWxlcyxcbiAgICAgICAgICAgICAgICBvcHQsIGludGVybmFscy5OdW1iZXJGb3JtYXRbJ1tbcmVsZXZhbnRFeHRlbnNpb25LZXlzXV0nXSwgbG9jYWxlRGF0YVxuICAgICAgICAgICAgKTtcblxuICAgIC8vIDEyLiBTZXQgdGhlIFtbbG9jYWxlXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0IHRvIHRoZSB2YWx1ZSBvZlxuICAgIC8vICAgICByLltbbG9jYWxlXV0uXG4gICAgaW50ZXJuYWxbJ1tbbG9jYWxlXV0nXSA9IHJbJ1tbbG9jYWxlXV0nXTtcblxuICAgIC8vIDEzLiBTZXQgdGhlIFtbbnVtYmVyaW5nU3lzdGVtXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0IHRvIHRoZSB2YWx1ZVxuICAgIC8vICAgICBvZiByLltbbnVdXS5cbiAgICBpbnRlcm5hbFsnW1tudW1iZXJpbmdTeXN0ZW1dXSddID0gclsnW1tudV1dJ107XG5cbiAgICAvLyBUaGUgc3BlY2lmaWNhdGlvbiBkb2Vzbid0IHRlbGwgdXMgdG8gZG8gdGhpcywgYnV0IGl0J3MgaGVscGZ1bCBsYXRlciBvblxuICAgIGludGVybmFsWydbW2RhdGFMb2NhbGVdXSddID0gclsnW1tkYXRhTG9jYWxlXV0nXTtcblxuICAgIHZhclxuICAgIC8vIDE0LiBMZXQgZGF0YUxvY2FsZSBiZSB0aGUgdmFsdWUgb2Ygci5bW2RhdGFMb2NhbGVdXS5cbiAgICAgICAgZGF0YUxvY2FsZSA9IHJbJ1tbZGF0YUxvY2FsZV1dJ10sXG5cbiAgICAvLyAxNS4gTGV0IHMgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBHZXRPcHRpb24gYWJzdHJhY3Qgb3BlcmF0aW9uIHdpdGggdGhlXG4gICAgLy8gICAgIGFyZ3VtZW50cyBvcHRpb25zLCBcInN0eWxlXCIsIFwic3RyaW5nXCIsIGEgTGlzdCBjb250YWluaW5nIHRoZSB0aHJlZSBTdHJpbmdcbiAgICAvLyAgICAgdmFsdWVzIFwiZGVjaW1hbFwiLCBcInBlcmNlbnRcIiwgYW5kIFwiY3VycmVuY3lcIiwgYW5kIFwiZGVjaW1hbFwiLlxuICAgICAgICBzID0gR2V0T3B0aW9uKG9wdGlvbnMsICdzdHlsZScsICdzdHJpbmcnLCBuZXcgTGlzdCgnZGVjaW1hbCcsICdwZXJjZW50JywgJ2N1cnJlbmN5JyksICdkZWNpbWFsJyk7XG5cbiAgICAvLyAxNi4gU2V0IHRoZSBbW3N0eWxlXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0IHRvIHMuXG4gICAgaW50ZXJuYWxbJ1tbc3R5bGVdXSddID0gcztcblxuICAgIHZhclxuICAgIC8vIDE3LiBMZXQgYyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEdldE9wdGlvbiBhYnN0cmFjdCBvcGVyYXRpb24gd2l0aCB0aGVcbiAgICAvLyAgICAgYXJndW1lbnRzIG9wdGlvbnMsIFwiY3VycmVuY3lcIiwgXCJzdHJpbmdcIiwgdW5kZWZpbmVkLCBhbmQgdW5kZWZpbmVkLlxuICAgICAgICBjID0gR2V0T3B0aW9uKG9wdGlvbnMsICdjdXJyZW5jeScsICdzdHJpbmcnKTtcblxuICAgIC8vIDE4LiBJZiBjIGlzIG5vdCB1bmRlZmluZWQgYW5kIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGVcbiAgICAvLyAgICAgSXNXZWxsRm9ybWVkQ3VycmVuY3lDb2RlIGFic3RyYWN0IG9wZXJhdGlvbiAoZGVmaW5lZCBpbiA2LjMuMSkgd2l0aFxuICAgIC8vICAgICBhcmd1bWVudCBjIGlzIGZhbHNlLCB0aGVuIHRocm93IGEgUmFuZ2VFcnJvciBleGNlcHRpb24uXG4gICAgaWYgKGMgIT09IHVuZGVmaW5lZCAmJiAhSXNXZWxsRm9ybWVkQ3VycmVuY3lDb2RlKGMpKVxuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIidcIiArIGMgKyBcIicgaXMgbm90IGEgdmFsaWQgY3VycmVuY3kgY29kZVwiKTtcblxuICAgIC8vIDE5LiBJZiBzIGlzIFwiY3VycmVuY3lcIiBhbmQgYyBpcyB1bmRlZmluZWQsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cbiAgICBpZiAocyA9PT0gJ2N1cnJlbmN5JyAmJiBjID09PSB1bmRlZmluZWQpXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0N1cnJlbmN5IGNvZGUgaXMgcmVxdWlyZWQgd2hlbiBzdHlsZSBpcyBjdXJyZW5jeScpO1xuXG4gICAgLy8gMjAuIElmIHMgaXMgXCJjdXJyZW5jeVwiLCB0aGVuXG4gICAgaWYgKHMgPT09ICdjdXJyZW5jeScpIHtcbiAgICAgICAgLy8gYS4gTGV0IGMgYmUgdGhlIHJlc3VsdCBvZiBjb252ZXJ0aW5nIGMgdG8gdXBwZXIgY2FzZSBhcyBzcGVjaWZpZWQgaW4gNi4xLlxuICAgICAgICBjID0gYy50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIC8vIGIuIFNldCB0aGUgW1tjdXJyZW5jeV1dIGludGVybmFsIHByb3BlcnR5IG9mIG51bWJlckZvcm1hdCB0byBjLlxuICAgICAgICBpbnRlcm5hbFsnW1tjdXJyZW5jeV1dJ10gPSBjO1xuXG4gICAgICAgIHZhclxuICAgICAgICAvLyBjLiBMZXQgY0RpZ2l0cyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEN1cnJlbmN5RGlnaXRzIGFic3RyYWN0XG4gICAgICAgIC8vICAgIG9wZXJhdGlvbiAoZGVmaW5lZCBiZWxvdykgd2l0aCBhcmd1bWVudCBjLlxuICAgICAgICAgICAgY0RpZ2l0cyA9IEN1cnJlbmN5RGlnaXRzKGMpO1xuICAgIH1cblxuICAgIHZhclxuICAgIC8vIDIxLiBMZXQgY2QgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBHZXRPcHRpb24gYWJzdHJhY3Qgb3BlcmF0aW9uIHdpdGggdGhlXG4gICAgLy8gICAgIGFyZ3VtZW50cyBvcHRpb25zLCBcImN1cnJlbmN5RGlzcGxheVwiLCBcInN0cmluZ1wiLCBhIExpc3QgY29udGFpbmluZyB0aGVcbiAgICAvLyAgICAgdGhyZWUgU3RyaW5nIHZhbHVlcyBcImNvZGVcIiwgXCJzeW1ib2xcIiwgYW5kIFwibmFtZVwiLCBhbmQgXCJzeW1ib2xcIi5cbiAgICAgICAgY2QgPSBHZXRPcHRpb24ob3B0aW9ucywgJ2N1cnJlbmN5RGlzcGxheScsICdzdHJpbmcnLCBuZXcgTGlzdCgnY29kZScsICdzeW1ib2wnLCAnbmFtZScpLCAnc3ltYm9sJyk7XG5cbiAgICAvLyAyMi4gSWYgcyBpcyBcImN1cnJlbmN5XCIsIHRoZW4gc2V0IHRoZSBbW2N1cnJlbmN5RGlzcGxheV1dIGludGVybmFsIHByb3BlcnR5IG9mXG4gICAgLy8gICAgIG51bWJlckZvcm1hdCB0byBjZC5cbiAgICBpZiAocyA9PT0gJ2N1cnJlbmN5JylcbiAgICAgICAgaW50ZXJuYWxbJ1tbY3VycmVuY3lEaXNwbGF5XV0nXSA9IGNkO1xuXG4gICAgdmFyXG4gICAgLy8gMjMuIExldCBtbmlkIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgR2V0TnVtYmVyT3B0aW9uIGFic3RyYWN0IG9wZXJhdGlvblxuICAgIC8vICAgICAoZGVmaW5lZCBpbiA5LjIuMTApIHdpdGggYXJndW1lbnRzIG9wdGlvbnMsIFwibWluaW11bUludGVnZXJEaWdpdHNcIiwgMSwgMjEsXG4gICAgLy8gICAgIGFuZCAxLlxuICAgICAgICBtbmlkID0gR2V0TnVtYmVyT3B0aW9uKG9wdGlvbnMsICdtaW5pbXVtSW50ZWdlckRpZ2l0cycsIDEsIDIxLCAxKTtcblxuICAgIC8vIDI0LiBTZXQgdGhlIFtbbWluaW11bUludGVnZXJEaWdpdHNdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBudW1iZXJGb3JtYXQgdG8gbW5pZC5cbiAgICBpbnRlcm5hbFsnW1ttaW5pbXVtSW50ZWdlckRpZ2l0c11dJ10gPSBtbmlkO1xuXG4gICAgdmFyXG4gICAgLy8gMjUuIElmIHMgaXMgXCJjdXJyZW5jeVwiLCB0aGVuIGxldCBtbmZkRGVmYXVsdCBiZSBjRGlnaXRzOyBlbHNlIGxldCBtbmZkRGVmYXVsdFxuICAgIC8vICAgICBiZSAwLlxuICAgICAgICBtbmZkRGVmYXVsdCA9IHMgPT09ICdjdXJyZW5jeScgPyBjRGlnaXRzIDogMCxcblxuICAgIC8vIDI2LiBMZXQgbW5mZCBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEdldE51bWJlck9wdGlvbiBhYnN0cmFjdCBvcGVyYXRpb25cbiAgICAvLyAgICAgd2l0aCBhcmd1bWVudHMgb3B0aW9ucywgXCJtaW5pbXVtRnJhY3Rpb25EaWdpdHNcIiwgMCwgMjAsIGFuZCBtbmZkRGVmYXVsdC5cbiAgICAgICAgbW5mZCA9IEdldE51bWJlck9wdGlvbihvcHRpb25zLCAnbWluaW11bUZyYWN0aW9uRGlnaXRzJywgMCwgMjAsIG1uZmREZWZhdWx0KTtcblxuICAgIC8vIDI3LiBTZXQgdGhlIFtbbWluaW11bUZyYWN0aW9uRGlnaXRzXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0IHRvIG1uZmQuXG4gICAgaW50ZXJuYWxbJ1tbbWluaW11bUZyYWN0aW9uRGlnaXRzXV0nXSA9IG1uZmQ7XG5cbiAgICB2YXJcbiAgICAvLyAyOC4gSWYgcyBpcyBcImN1cnJlbmN5XCIsIHRoZW4gbGV0IG14ZmREZWZhdWx0IGJlIG1heChtbmZkLCBjRGlnaXRzKTsgZWxzZSBpZiBzXG4gICAgLy8gICAgIGlzIFwicGVyY2VudFwiLCB0aGVuIGxldCBteGZkRGVmYXVsdCBiZSBtYXgobW5mZCwgMCk7IGVsc2UgbGV0IG14ZmREZWZhdWx0XG4gICAgLy8gICAgIGJlIG1heChtbmZkLCAzKS5cbiAgICAgICAgbXhmZERlZmF1bHQgPSBzID09PSAnY3VycmVuY3knID8gTWF0aC5tYXgobW5mZCwgY0RpZ2l0cylcbiAgICAgICAgICAgICAgICAgICAgOiAocyA9PT0gJ3BlcmNlbnQnID8gTWF0aC5tYXgobW5mZCwgMCkgOiBNYXRoLm1heChtbmZkLCAzKSksXG5cbiAgICAvLyAyOS4gTGV0IG14ZmQgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBHZXROdW1iZXJPcHRpb24gYWJzdHJhY3Qgb3BlcmF0aW9uXG4gICAgLy8gICAgIHdpdGggYXJndW1lbnRzIG9wdGlvbnMsIFwibWF4aW11bUZyYWN0aW9uRGlnaXRzXCIsIG1uZmQsIDIwLCBhbmQgbXhmZERlZmF1bHQuXG4gICAgICAgIG14ZmQgPSBHZXROdW1iZXJPcHRpb24ob3B0aW9ucywgJ21heGltdW1GcmFjdGlvbkRpZ2l0cycsIG1uZmQsIDIwLCBteGZkRGVmYXVsdCk7XG5cbiAgICAvLyAzMC4gU2V0IHRoZSBbW21heGltdW1GcmFjdGlvbkRpZ2l0c11dIGludGVybmFsIHByb3BlcnR5IG9mIG51bWJlckZvcm1hdCB0byBteGZkLlxuICAgIGludGVybmFsWydbW21heGltdW1GcmFjdGlvbkRpZ2l0c11dJ10gPSBteGZkO1xuXG4gICAgdmFyXG4gICAgLy8gMzEuIExldCBtbnNkIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2Ygb3B0aW9uc1xuICAgIC8vICAgICB3aXRoIGFyZ3VtZW50IFwibWluaW11bVNpZ25pZmljYW50RGlnaXRzXCIuXG4gICAgICAgIG1uc2QgPSBvcHRpb25zLm1pbmltdW1TaWduaWZpY2FudERpZ2l0cyxcblxuICAgIC8vIDMyLiBMZXQgbXhzZCBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIG9wdGlvbnNcbiAgICAvLyAgICAgd2l0aCBhcmd1bWVudCBcIm1heGltdW1TaWduaWZpY2FudERpZ2l0c1wiLlxuICAgICAgICBteHNkID0gb3B0aW9ucy5tYXhpbXVtU2lnbmlmaWNhbnREaWdpdHM7XG5cbiAgICAvLyAzMy4gSWYgbW5zZCBpcyBub3QgdW5kZWZpbmVkIG9yIG14c2QgaXMgbm90IHVuZGVmaW5lZCwgdGhlbjpcbiAgICBpZiAobW5zZCAhPT0gdW5kZWZpbmVkIHx8IG14c2QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBhLiBMZXQgbW5zZCBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEdldE51bWJlck9wdGlvbiBhYnN0cmFjdFxuICAgICAgICAvLyAgICBvcGVyYXRpb24gd2l0aCBhcmd1bWVudHMgb3B0aW9ucywgXCJtaW5pbXVtU2lnbmlmaWNhbnREaWdpdHNcIiwgMSwgMjEsXG4gICAgICAgIC8vICAgIGFuZCAxLlxuICAgICAgICBtbnNkID0gR2V0TnVtYmVyT3B0aW9uKG9wdGlvbnMsICdtaW5pbXVtU2lnbmlmaWNhbnREaWdpdHMnLCAxLCAyMSwgMSk7XG5cbiAgICAgICAgLy8gYi4gTGV0IG14c2QgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBHZXROdW1iZXJPcHRpb24gYWJzdHJhY3RcbiAgICAgICAgLy8gICAgIG9wZXJhdGlvbiB3aXRoIGFyZ3VtZW50cyBvcHRpb25zLCBcIm1heGltdW1TaWduaWZpY2FudERpZ2l0c1wiLCBtbnNkLFxuICAgICAgICAvLyAgICAgMjEsIGFuZCAyMS5cbiAgICAgICAgbXhzZCA9IEdldE51bWJlck9wdGlvbihvcHRpb25zLCAnbWF4aW11bVNpZ25pZmljYW50RGlnaXRzJywgbW5zZCwgMjEsIDIxKTtcblxuICAgICAgICAvLyBjLiBTZXQgdGhlIFtbbWluaW11bVNpZ25pZmljYW50RGlnaXRzXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0XG4gICAgICAgIC8vICAgIHRvIG1uc2QsIGFuZCB0aGUgW1ttYXhpbXVtU2lnbmlmaWNhbnREaWdpdHNdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZlxuICAgICAgICAvLyAgICBudW1iZXJGb3JtYXQgdG8gbXhzZC5cbiAgICAgICAgaW50ZXJuYWxbJ1tbbWluaW11bVNpZ25pZmljYW50RGlnaXRzXV0nXSA9IG1uc2Q7XG4gICAgICAgIGludGVybmFsWydbW21heGltdW1TaWduaWZpY2FudERpZ2l0c11dJ10gPSBteHNkO1xuICAgIH1cbiAgICB2YXJcbiAgICAvLyAzNC4gTGV0IGcgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBHZXRPcHRpb24gYWJzdHJhY3Qgb3BlcmF0aW9uIHdpdGggdGhlXG4gICAgLy8gICAgIGFyZ3VtZW50cyBvcHRpb25zLCBcInVzZUdyb3VwaW5nXCIsIFwiYm9vbGVhblwiLCB1bmRlZmluZWQsIGFuZCB0cnVlLlxuICAgICAgICBnID0gR2V0T3B0aW9uKG9wdGlvbnMsICd1c2VHcm91cGluZycsICdib29sZWFuJywgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgIC8vIDM1LiBTZXQgdGhlIFtbdXNlR3JvdXBpbmddXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBudW1iZXJGb3JtYXQgdG8gZy5cbiAgICBpbnRlcm5hbFsnW1t1c2VHcm91cGluZ11dJ10gPSBnO1xuXG4gICAgdmFyXG4gICAgLy8gMzYuIExldCBkYXRhTG9jYWxlRGF0YSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgLy8gICAgIGxvY2FsZURhdGEgd2l0aCBhcmd1bWVudCBkYXRhTG9jYWxlLlxuICAgICAgICBkYXRhTG9jYWxlRGF0YSA9IGxvY2FsZURhdGFbZGF0YUxvY2FsZV0sXG5cbiAgICAvLyAzNy4gTGV0IHBhdHRlcm5zIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2ZcbiAgICAvLyAgICAgZGF0YUxvY2FsZURhdGEgd2l0aCBhcmd1bWVudCBcInBhdHRlcm5zXCIuXG4gICAgICAgIHBhdHRlcm5zID0gZGF0YUxvY2FsZURhdGEucGF0dGVybnM7XG5cbiAgICAvLyAzOC4gQXNzZXJ0OiBwYXR0ZXJucyBpcyBhbiBvYmplY3QgKHNlZSAxMS4yLjMpXG5cbiAgICB2YXJcbiAgICAvLyAzOS4gTGV0IHN0eWxlUGF0dGVybnMgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgIC8vICAgICBwYXR0ZXJucyB3aXRoIGFyZ3VtZW50IHMuXG4gICAgICAgIHN0eWxlUGF0dGVybnMgPSBwYXR0ZXJuc1tzXTtcblxuICAgIC8vIDQwLiBTZXQgdGhlIFtbcG9zaXRpdmVQYXR0ZXJuXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0IHRvIHRoZVxuICAgIC8vICAgICByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2Ygc3R5bGVQYXR0ZXJucyB3aXRoIHRoZVxuICAgIC8vICAgICBhcmd1bWVudCBcInBvc2l0aXZlUGF0dGVyblwiLlxuICAgIGludGVybmFsWydbW3Bvc2l0aXZlUGF0dGVybl1dJ10gPSBzdHlsZVBhdHRlcm5zLnBvc2l0aXZlUGF0dGVybjtcblxuICAgIC8vIDQxLiBTZXQgdGhlIFtbbmVnYXRpdmVQYXR0ZXJuXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0IHRvIHRoZVxuICAgIC8vICAgICByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2Ygc3R5bGVQYXR0ZXJucyB3aXRoIHRoZVxuICAgIC8vICAgICBhcmd1bWVudCBcIm5lZ2F0aXZlUGF0dGVyblwiLlxuICAgIGludGVybmFsWydbW25lZ2F0aXZlUGF0dGVybl1dJ10gPSBzdHlsZVBhdHRlcm5zLm5lZ2F0aXZlUGF0dGVybjtcblxuICAgIC8vIDQyLiBTZXQgdGhlIFtbYm91bmRGb3JtYXRdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBudW1iZXJGb3JtYXQgdG8gdW5kZWZpbmVkLlxuICAgIGludGVybmFsWydbW2JvdW5kRm9ybWF0XV0nXSA9IHVuZGVmaW5lZDtcblxuICAgIC8vIDQzLiBTZXQgdGhlIFtbaW5pdGlhbGl6ZWROdW1iZXJGb3JtYXRdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBudW1iZXJGb3JtYXQgdG9cbiAgICAvLyAgICAgdHJ1ZS5cbiAgICBpbnRlcm5hbFsnW1tpbml0aWFsaXplZE51bWJlckZvcm1hdF1dJ10gPSB0cnVlO1xuXG4gICAgLy8gSW4gRVMzLCB3ZSBuZWVkIHRvIHByZS1iaW5kIHRoZSBmb3JtYXQoKSBmdW5jdGlvblxuICAgIGlmIChlczMpXG4gICAgICAgIG51bWJlckZvcm1hdC5mb3JtYXQgPSBHZXRGb3JtYXROdW1iZXIuY2FsbChudW1iZXJGb3JtYXQpO1xuXG4gICAgLy8gUmVzdG9yZSB0aGUgUmVnRXhwIHByb3BlcnRpZXNcbiAgICByZWdleHBTdGF0ZS5leHAudGVzdChyZWdleHBTdGF0ZS5pbnB1dCk7XG5cbiAgICAvLyBSZXR1cm4gdGhlIG5ld2x5IGluaXRpYWxpc2VkIG9iamVjdFxuICAgIHJldHVybiBudW1iZXJGb3JtYXQ7XG59XG5cbmZ1bmN0aW9uIEN1cnJlbmN5RGlnaXRzKGN1cnJlbmN5KSB7XG4gICAgLy8gV2hlbiB0aGUgQ3VycmVuY3lEaWdpdHMgYWJzdHJhY3Qgb3BlcmF0aW9uIGlzIGNhbGxlZCB3aXRoIGFuIGFyZ3VtZW50IGN1cnJlbmN5XG4gICAgLy8gKHdoaWNoIG11c3QgYmUgYW4gdXBwZXIgY2FzZSBTdHJpbmcgdmFsdWUpLCB0aGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcblxuICAgIC8vIDEuIElmIHRoZSBJU08gNDIxNyBjdXJyZW5jeSBhbmQgZnVuZHMgY29kZSBsaXN0IGNvbnRhaW5zIGN1cnJlbmN5IGFzIGFuXG4gICAgLy8gYWxwaGFiZXRpYyBjb2RlLCB0aGVuIHJldHVybiB0aGUgbWlub3IgdW5pdCB2YWx1ZSBjb3JyZXNwb25kaW5nIHRvIHRoZVxuICAgIC8vIGN1cnJlbmN5IGZyb20gdGhlIGxpc3Q7IGVsc2UgcmV0dXJuIDIuXG4gICAgcmV0dXJuIGN1cnJlbmN5TWlub3JVbml0c1tjdXJyZW5jeV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gY3VycmVuY3lNaW5vclVuaXRzW2N1cnJlbmN5XVxuICAgICAgICAgICAgICAgIDogMjtcbn1cblxuLyogMTEuMi4zICovaW50ZXJuYWxzLk51bWJlckZvcm1hdCA9IHtcbiAgICAnW1thdmFpbGFibGVMb2NhbGVzXV0nOiBbXSxcbiAgICAnW1tyZWxldmFudEV4dGVuc2lvbktleXNdXSc6IFsnbnUnXSxcbiAgICAnW1tsb2NhbGVEYXRhXV0nOiB7fVxufTtcblxuLyoqXG4gKiBXaGVuIHRoZSBzdXBwb3J0ZWRMb2NhbGVzT2YgbWV0aG9kIG9mIEludGwuTnVtYmVyRm9ybWF0IGlzIGNhbGxlZCwgdGhlXG4gKiBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICovXG4vKiAxMS4yLjIgKi9kZWZpbmVQcm9wZXJ0eShJbnRsLk51bWJlckZvcm1hdCwgJ3N1cHBvcnRlZExvY2FsZXNPZicsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IGZuQmluZC5jYWxsKHN1cHBvcnRlZExvY2FsZXNPZiwgaW50ZXJuYWxzLk51bWJlckZvcm1hdClcbn0pO1xuXG4vKipcbiAqIFRoaXMgbmFtZWQgYWNjZXNzb3IgcHJvcGVydHkgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgZm9ybWF0cyBhIG51bWJlclxuICogYWNjb3JkaW5nIHRvIHRoZSBlZmZlY3RpdmUgbG9jYWxlIGFuZCB0aGUgZm9ybWF0dGluZyBvcHRpb25zIG9mIHRoaXNcbiAqIE51bWJlckZvcm1hdCBvYmplY3QuXG4gKi9cbi8qIDExLjMuMiAqL2RlZmluZVByb3BlcnR5KEludGwuTnVtYmVyRm9ybWF0LnByb3RvdHlwZSwgJ2Zvcm1hdCcsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBHZXRGb3JtYXROdW1iZXJcbn0pO1xuXG5mdW5jdGlvbiBHZXRGb3JtYXROdW1iZXIoKSB7XG4gICAgICAgIHZhciBpbnRlcm5hbCA9IHRoaXMgIT0gbnVsbCAmJiB0eXBlb2YgdGhpcyA9PT0gJ29iamVjdCcgJiYgZ2V0SW50ZXJuYWxQcm9wZXJ0aWVzKHRoaXMpO1xuXG4gICAgICAgIC8vIFNhdGlzZnkgdGVzdCAxMS4zX2JcbiAgICAgICAgaWYgKCFpbnRlcm5hbCB8fCAhaW50ZXJuYWxbJ1tbaW5pdGlhbGl6ZWROdW1iZXJGb3JtYXRdXSddKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYHRoaXNgIHZhbHVlIGZvciBmb3JtYXQoKSBpcyBub3QgYW4gaW5pdGlhbGl6ZWQgSW50bC5OdW1iZXJGb3JtYXQgb2JqZWN0LicpO1xuXG4gICAgICAgIC8vIFRoZSB2YWx1ZSBvZiB0aGUgW1tHZXRdXSBhdHRyaWJ1dGUgaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSBmb2xsb3dpbmdcbiAgICAgICAgLy8gc3RlcHM6XG5cbiAgICAgICAgLy8gMS4gSWYgdGhlIFtbYm91bmRGb3JtYXRdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiB0aGlzIE51bWJlckZvcm1hdCBvYmplY3RcbiAgICAgICAgLy8gICAgaXMgdW5kZWZpbmVkLCB0aGVuOlxuICAgICAgICBpZiAoaW50ZXJuYWxbJ1tbYm91bmRGb3JtYXRdXSddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgLy8gYS4gTGV0IEYgYmUgYSBGdW5jdGlvbiBvYmplY3QsIHdpdGggaW50ZXJuYWwgcHJvcGVydGllcyBzZXQgYXNcbiAgICAgICAgICAgIC8vICAgIHNwZWNpZmllZCBmb3IgYnVpbHQtaW4gZnVuY3Rpb25zIGluIEVTNSwgMTUsIG9yIHN1Y2Nlc3NvciwgYW5kIHRoZVxuICAgICAgICAgICAgLy8gICAgbGVuZ3RoIHByb3BlcnR5IHNldCB0byAxLCB0aGF0IHRha2VzIHRoZSBhcmd1bWVudCB2YWx1ZSBhbmRcbiAgICAgICAgICAgIC8vICAgIHBlcmZvcm1zIHRoZSBmb2xsb3dpbmcgc3RlcHM6XG4gICAgICAgICAgICAgICAgRiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpLiBJZiB2YWx1ZSBpcyBub3QgcHJvdmlkZWQsIHRoZW4gbGV0IHZhbHVlIGJlIHVuZGVmaW5lZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWkuIExldCB4IGJlIFRvTnVtYmVyKHZhbHVlKS5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWlpLiBSZXR1cm4gdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBGb3JtYXROdW1iZXIgYWJzdHJhY3RcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICBvcGVyYXRpb24gKGRlZmluZWQgYmVsb3cpIHdpdGggYXJndW1lbnRzIHRoaXMgYW5kIHguXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGb3JtYXROdW1iZXIodGhpcywgLyogeCA9ICovTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8gYi4gTGV0IGJpbmQgYmUgdGhlIHN0YW5kYXJkIGJ1aWx0LWluIGZ1bmN0aW9uIG9iamVjdCBkZWZpbmVkIGluIEVTNSxcbiAgICAgICAgICAgIC8vICAgIDE1LjMuNC41LlxuICAgICAgICAgICAgLy8gYy4gTGV0IGJmIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tDYWxsXV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgICAgICAgICAvLyAgICBiaW5kIHdpdGggRiBhcyB0aGUgdGhpcyB2YWx1ZSBhbmQgYW4gYXJndW1lbnQgbGlzdCBjb250YWluaW5nXG4gICAgICAgICAgICAvLyAgICB0aGUgc2luZ2xlIGl0ZW0gdGhpcy5cbiAgICAgICAgICAgICAgICBiZiA9IGZuQmluZC5jYWxsKEYsIHRoaXMpO1xuXG4gICAgICAgICAgICAvLyBkLiBTZXQgdGhlIFtbYm91bmRGb3JtYXRdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiB0aGlzIE51bWJlckZvcm1hdFxuICAgICAgICAgICAgLy8gICAgb2JqZWN0IHRvIGJmLlxuICAgICAgICAgICAgaW50ZXJuYWxbJ1tbYm91bmRGb3JtYXRdXSddID0gYmY7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmV0dXJuIHRoZSB2YWx1ZSBvZiB0aGUgW1tib3VuZEZvcm1hdF1dIGludGVybmFsIHByb3BlcnR5IG9mIHRoaXNcbiAgICAgICAgLy8gTnVtYmVyRm9ybWF0IG9iamVjdC5cbiAgICAgICAgcmV0dXJuIGludGVybmFsWydbW2JvdW5kRm9ybWF0XV0nXTtcbiAgICB9XG5cbi8qKlxuICogV2hlbiB0aGUgRm9ybWF0TnVtYmVyIGFic3RyYWN0IG9wZXJhdGlvbiBpcyBjYWxsZWQgd2l0aCBhcmd1bWVudHMgbnVtYmVyRm9ybWF0XG4gKiAod2hpY2ggbXVzdCBiZSBhbiBvYmplY3QgaW5pdGlhbGl6ZWQgYXMgYSBOdW1iZXJGb3JtYXQpIGFuZCB4ICh3aGljaCBtdXN0IGJlIGFcbiAqIE51bWJlciB2YWx1ZSksIGl0IHJldHVybnMgYSBTdHJpbmcgdmFsdWUgcmVwcmVzZW50aW5nIHggYWNjb3JkaW5nIHRvIHRoZVxuICogZWZmZWN0aXZlIGxvY2FsZSBhbmQgdGhlIGZvcm1hdHRpbmcgb3B0aW9ucyBvZiBudW1iZXJGb3JtYXQuXG4gKi9cbmZ1bmN0aW9uIEZvcm1hdE51bWJlciAobnVtYmVyRm9ybWF0LCB4KSB7XG4gICAgdmFyIG4sXG5cbiAgICAvLyBDcmVhdGUgYW4gb2JqZWN0IHdob3NlIHByb3BzIGNhbiBiZSB1c2VkIHRvIHJlc3RvcmUgdGhlIHZhbHVlcyBvZiBSZWdFeHAgcHJvcHNcbiAgICAgICAgcmVnZXhwU3RhdGUgPSBjcmVhdGVSZWdFeHBSZXN0b3JlKCksXG5cbiAgICAgICAgaW50ZXJuYWwgPSBnZXRJbnRlcm5hbFByb3BlcnRpZXMobnVtYmVyRm9ybWF0KSxcbiAgICAgICAgbG9jYWxlID0gaW50ZXJuYWxbJ1tbZGF0YUxvY2FsZV1dJ10sXG4gICAgICAgIG51bXMgICA9IGludGVybmFsWydbW251bWJlcmluZ1N5c3RlbV1dJ10sXG4gICAgICAgIGRhdGEgICA9IGludGVybmFscy5OdW1iZXJGb3JtYXRbJ1tbbG9jYWxlRGF0YV1dJ11bbG9jYWxlXSxcbiAgICAgICAgaWxkICAgID0gZGF0YS5zeW1ib2xzW251bXNdIHx8IGRhdGEuc3ltYm9scy5sYXRuLFxuXG4gICAgLy8gMS4gTGV0IG5lZ2F0aXZlIGJlIGZhbHNlLlxuICAgICAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuXG4gICAgLy8gMi4gSWYgdGhlIHJlc3VsdCBvZiBpc0Zpbml0ZSh4KSBpcyBmYWxzZSwgdGhlblxuICAgIGlmIChpc0Zpbml0ZSh4KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gYS4gSWYgeCBpcyBOYU4sIHRoZW4gbGV0IG4gYmUgYW4gSUxEIFN0cmluZyB2YWx1ZSBpbmRpY2F0aW5nIHRoZSBOYU4gdmFsdWUuXG4gICAgICAgIGlmIChpc05hTih4KSlcbiAgICAgICAgICAgIG4gPSBpbGQubmFuO1xuXG4gICAgICAgIC8vIGIuIEVsc2VcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBhLiBMZXQgbiBiZSBhbiBJTEQgU3RyaW5nIHZhbHVlIGluZGljYXRpbmcgaW5maW5pdHkuXG4gICAgICAgICAgICBuID0gaWxkLmluZmluaXR5O1xuICAgICAgICAgICAgLy8gYi4gSWYgeCA8IDAsIHRoZW4gbGV0IG5lZ2F0aXZlIGJlIHRydWUuXG4gICAgICAgICAgICBpZiAoeCA8IDApXG4gICAgICAgICAgICAgICAgbmVnYXRpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIDMuIEVsc2VcbiAgICBlbHNlIHtcbiAgICAgICAgLy8gYS4gSWYgeCA8IDAsIHRoZW5cbiAgICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgICAgICAvLyBpLiBMZXQgbmVnYXRpdmUgYmUgdHJ1ZS5cbiAgICAgICAgICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIGlpLiBMZXQgeCBiZSAteC5cbiAgICAgICAgICAgIHggPSAteDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGIuIElmIHRoZSB2YWx1ZSBvZiB0aGUgW1tzdHlsZV1dIGludGVybmFsIHByb3BlcnR5IG9mIG51bWJlckZvcm1hdCBpc1xuICAgICAgICAvLyAgICBcInBlcmNlbnRcIiwgbGV0IHggYmUgMTAwIMOXIHguXG4gICAgICAgIGlmIChpbnRlcm5hbFsnW1tzdHlsZV1dJ10gPT09ICdwZXJjZW50JylcbiAgICAgICAgICAgIHggKj0gMTAwO1xuXG4gICAgICAgIC8vIGMuIElmIHRoZSBbW21pbmltdW1TaWduaWZpY2FudERpZ2l0c11dIGFuZCBbW21heGltdW1TaWduaWZpY2FudERpZ2l0c11dXG4gICAgICAgIC8vICAgIGludGVybmFsIHByb3BlcnRpZXMgb2YgbnVtYmVyRm9ybWF0IGFyZSBwcmVzZW50LCB0aGVuXG4gICAgICAgIGlmIChob3AuY2FsbChpbnRlcm5hbCwgJ1tbbWluaW11bVNpZ25pZmljYW50RGlnaXRzXV0nKSAmJlxuICAgICAgICAgICAgICAgIGhvcC5jYWxsKGludGVybmFsLCAnW1ttYXhpbXVtU2lnbmlmaWNhbnREaWdpdHNdXScpKVxuICAgICAgICAgICAgLy8gaS4gTGV0IG4gYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBUb1Jhd1ByZWNpc2lvbiBhYnN0cmFjdCBvcGVyYXRpb25cbiAgICAgICAgICAgIC8vICAgIChkZWZpbmVkIGJlbG93KSwgcGFzc2luZyBhcyBhcmd1bWVudHMgeCBhbmQgdGhlIHZhbHVlcyBvZiB0aGVcbiAgICAgICAgICAgIC8vICAgIFtbbWluaW11bVNpZ25pZmljYW50RGlnaXRzXV0gYW5kIFtbbWF4aW11bVNpZ25pZmljYW50RGlnaXRzXV1cbiAgICAgICAgICAgIC8vICAgIGludGVybmFsIHByb3BlcnRpZXMgb2YgbnVtYmVyRm9ybWF0LlxuICAgICAgICAgICAgbiA9IFRvUmF3UHJlY2lzaW9uKHgsXG4gICAgICAgICAgICAgICAgICBpbnRlcm5hbFsnW1ttaW5pbXVtU2lnbmlmaWNhbnREaWdpdHNdXSddLFxuICAgICAgICAgICAgICAgICAgaW50ZXJuYWxbJ1tbbWF4aW11bVNpZ25pZmljYW50RGlnaXRzXV0nXSk7XG4gICAgICAgIC8vIGQuIEVsc2VcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgLy8gaS4gTGV0IG4gYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBUb1Jhd0ZpeGVkIGFic3RyYWN0IG9wZXJhdGlvblxuICAgICAgICAgICAgLy8gICAgKGRlZmluZWQgYmVsb3cpLCBwYXNzaW5nIGFzIGFyZ3VtZW50cyB4IGFuZCB0aGUgdmFsdWVzIG9mIHRoZVxuICAgICAgICAgICAgLy8gICAgW1ttaW5pbXVtSW50ZWdlckRpZ2l0c11dLCBbW21pbmltdW1GcmFjdGlvbkRpZ2l0c11dLCBhbmRcbiAgICAgICAgICAgIC8vICAgIFtbbWF4aW11bUZyYWN0aW9uRGlnaXRzXV0gaW50ZXJuYWwgcHJvcGVydGllcyBvZiBudW1iZXJGb3JtYXQuXG4gICAgICAgICAgICBuID0gVG9SYXdGaXhlZCh4LFxuICAgICAgICAgICAgICAgICAgaW50ZXJuYWxbJ1tbbWluaW11bUludGVnZXJEaWdpdHNdXSddLFxuICAgICAgICAgICAgICAgICAgaW50ZXJuYWxbJ1tbbWluaW11bUZyYWN0aW9uRGlnaXRzXV0nXSxcbiAgICAgICAgICAgICAgICAgIGludGVybmFsWydbW21heGltdW1GcmFjdGlvbkRpZ2l0c11dJ10pO1xuXG4gICAgICAgIC8vIGUuIElmIHRoZSB2YWx1ZSBvZiB0aGUgW1tudW1iZXJpbmdTeXN0ZW1dXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZlxuICAgICAgICAvLyAgICBudW1iZXJGb3JtYXQgbWF0Y2hlcyBvbmUgb2YgdGhlIHZhbHVlcyBpbiB0aGUg4oCcTnVtYmVyaW5nIFN5c3RlbeKAnSBjb2x1bW5cbiAgICAgICAgLy8gICAgb2YgVGFibGUgMiBiZWxvdywgdGhlblxuICAgICAgICBpZiAobnVtU3lzW251bXNdKSB7XG4gICAgICAgICAgICAvLyBpLiBMZXQgZGlnaXRzIGJlIGFuIGFycmF5IHdob3NlIDEwIFN0cmluZyB2YWx1ZWQgZWxlbWVudHMgYXJlIHRoZVxuICAgICAgICAgICAgLy8gICAgVVRGLTE2IHN0cmluZyByZXByZXNlbnRhdGlvbnMgb2YgdGhlIDEwIGRpZ2l0cyBzcGVjaWZpZWQgaW4gdGhlXG4gICAgICAgICAgICAvLyAgICDigJxEaWdpdHPigJ0gY29sdW1uIG9mIFRhYmxlIDIgaW4gdGhlIHJvdyBjb250YWluaW5nIHRoZSB2YWx1ZSBvZiB0aGVcbiAgICAgICAgICAgIC8vICAgIFtbbnVtYmVyaW5nU3lzdGVtXV0gaW50ZXJuYWwgcHJvcGVydHkuXG4gICAgICAgICAgICB2YXIgZGlnaXRzID0gbnVtU3lzW2ludGVybmFsWydbW251bWJlcmluZ1N5c3RlbV1dJ11dO1xuICAgICAgICAgICAgLy8gaWkuIFJlcGxhY2UgZWFjaCBkaWdpdCBpbiBuIHdpdGggdGhlIHZhbHVlIG9mIGRpZ2l0c1tkaWdpdF0uXG4gICAgICAgICAgICBuID0gU3RyaW5nKG4pLnJlcGxhY2UoL1xcZC9nLCBmdW5jdGlvbiAoZGlnaXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlnaXRzW2RpZ2l0XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGYuIEVsc2UgdXNlIGFuIGltcGxlbWVudGF0aW9uIGRlcGVuZGVudCBhbGdvcml0aG0gdG8gbWFwIG4gdG8gdGhlXG4gICAgICAgIC8vICAgIGFwcHJvcHJpYXRlIHJlcHJlc2VudGF0aW9uIG9mIG4gaW4gdGhlIGdpdmVuIG51bWJlcmluZyBzeXN0ZW0uXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIG4gPSBTdHJpbmcobik7IC8vICMjI1RPRE8jIyNcblxuICAgICAgICAvLyBnLiBJZiBuIGNvbnRhaW5zIHRoZSBjaGFyYWN0ZXIgXCIuXCIsIHRoZW4gcmVwbGFjZSBpdCB3aXRoIGFuIElMTkQgU3RyaW5nXG4gICAgICAgIC8vICAgIHJlcHJlc2VudGluZyB0aGUgZGVjaW1hbCBzZXBhcmF0b3IuXG4gICAgICAgIG4gPSBuLnJlcGxhY2UoL1xcLi9nLCBpbGQuZGVjaW1hbCk7XG5cbiAgICAgICAgLy8gaC4gSWYgdGhlIHZhbHVlIG9mIHRoZSBbW3VzZUdyb3VwaW5nXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0XG4gICAgICAgIC8vICAgIGlzIHRydWUsIHRoZW4gaW5zZXJ0IGFuIElMTkQgU3RyaW5nIHJlcHJlc2VudGluZyBhIGdyb3VwaW5nIHNlcGFyYXRvclxuICAgICAgICAvLyAgICBpbnRvIGFuIElMTkQgc2V0IG9mIGxvY2F0aW9ucyB3aXRoaW4gdGhlIGludGVnZXIgcGFydCBvZiBuLlxuICAgICAgICBpZiAoaW50ZXJuYWxbJ1tbdXNlR3JvdXBpbmddXSddID09PSB0cnVlKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICBwYXJ0cyAgPSBuLnNwbGl0KGlsZC5kZWNpbWFsKSxcbiAgICAgICAgICAgICAgICBpZ3IgICAgPSBwYXJ0c1swXSxcblxuICAgICAgICAgICAgICAgIC8vIFByaW1hcnkgZ3JvdXAgcmVwcmVzZW50cyB0aGUgZ3JvdXAgY2xvc2VzdCB0byB0aGUgZGVjaW1hbFxuICAgICAgICAgICAgICAgIHBnU2l6ZSA9IGRhdGEucGF0dGVybnMucHJpbWFyeUdyb3VwU2l6ZSB8fCAzLFxuXG4gICAgICAgICAgICAgICAgLy8gU2Vjb25kYXJ5IGdyb3VwIGlzIGV2ZXJ5IG90aGVyIGdyb3VwXG4gICAgICAgICAgICAgICAgc2dTaXplID0gZGF0YS5wYXR0ZXJucy5zZWNvbmRhcnlHcm91cFNpemUgfHwgcGdTaXplO1xuXG4gICAgICAgICAgICAvLyBHcm91cCBvbmx5IGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgaWYgKGlnci5sZW5ndGggPiBwZ1NpemUpIHtcbiAgICAgICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzID0gbmV3IExpc3QoKSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBJbmRleCBvZiB0aGUgcHJpbWFyeSBncm91cGluZyBzZXBhcmF0b3JcbiAgICAgICAgICAgICAgICAgICAgZW5kICAgID0gaWdyLmxlbmd0aCAtIHBnU2l6ZSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBTdGFydGluZyBpbmRleCBmb3Igb3VyIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgaWR4ICAgID0gZW5kICUgc2dTaXplLFxuXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ICA9IGlnci5zbGljZSgwLCBpZHgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0Lmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgYXJyUHVzaC5jYWxsKGdyb3Vwcywgc3RhcnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gTG9vcCB0byBzZXBhcmF0ZSBpbnRvIHNlY29uZGFyeSBncm91cGluZyBkaWdpdHNcbiAgICAgICAgICAgICAgICB3aGlsZSAoaWR4IDwgZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyclB1c2guY2FsbChncm91cHMsIGlnci5zbGljZShpZHgsIGlkeCArIHNnU2l6ZSkpO1xuICAgICAgICAgICAgICAgICAgICBpZHggKz0gc2dTaXplO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgcHJpbWFyeSBncm91cGluZyBkaWdpdHNcbiAgICAgICAgICAgICAgICBhcnJQdXNoLmNhbGwoZ3JvdXBzLCBpZ3Iuc2xpY2UoZW5kKSk7XG5cbiAgICAgICAgICAgICAgICBwYXJ0c1swXSA9IGFyckpvaW4uY2FsbChncm91cHMsIGlsZC5ncm91cCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG4gPSBhcnJKb2luLmNhbGwocGFydHMsIGlsZC5kZWNpbWFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhclxuICAgIC8vIDQuIElmIG5lZ2F0aXZlIGlzIHRydWUsIHRoZW4gbGV0IHJlc3VsdCBiZSB0aGUgdmFsdWUgb2YgdGhlIFtbbmVnYXRpdmVQYXR0ZXJuXV1cbiAgICAvLyAgICBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBudW1iZXJGb3JtYXQ7IGVsc2UgbGV0IHJlc3VsdCBiZSB0aGUgdmFsdWUgb2YgdGhlXG4gICAgLy8gICAgW1twb3NpdGl2ZVBhdHRlcm5dXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBudW1iZXJGb3JtYXQuXG4gICAgICAgIHJlc3VsdCA9IGludGVybmFsW25lZ2F0aXZlID09PSB0cnVlID8gJ1tbbmVnYXRpdmVQYXR0ZXJuXV0nIDogJ1tbcG9zaXRpdmVQYXR0ZXJuXV0nXTtcblxuICAgIC8vIDUuIFJlcGxhY2UgdGhlIHN1YnN0cmluZyBcIntudW1iZXJ9XCIgd2l0aGluIHJlc3VsdCB3aXRoIG4uXG4gICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoJ3tudW1iZXJ9Jywgbik7XG5cbiAgICAvLyA2LiBJZiB0aGUgdmFsdWUgb2YgdGhlIFtbc3R5bGVdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBudW1iZXJGb3JtYXQgaXNcbiAgICAvLyAgICBcImN1cnJlbmN5XCIsIHRoZW46XG4gICAgaWYgKGludGVybmFsWydbW3N0eWxlXV0nXSA9PT0gJ2N1cnJlbmN5Jykge1xuICAgICAgICB2YXIgY2QsXG4gICAgICAgIC8vIGEuIExldCBjdXJyZW5jeSBiZSB0aGUgdmFsdWUgb2YgdGhlIFtbY3VycmVuY3ldXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZlxuICAgICAgICAvLyAgICBudW1iZXJGb3JtYXQuXG4gICAgICAgICAgICBjdXJyZW5jeSA9IGludGVybmFsWydbW2N1cnJlbmN5XV0nXSxcblxuICAgICAgICAvLyBTaG9ydGhhbmQgZm9yIHRoZSBjdXJyZW5jeSBkYXRhXG4gICAgICAgICAgICBjRGF0YSA9IGRhdGEuY3VycmVuY2llc1tjdXJyZW5jeV07XG5cbiAgICAgICAgLy8gYi4gSWYgdGhlIHZhbHVlIG9mIHRoZSBbW2N1cnJlbmN5RGlzcGxheV1dIGludGVybmFsIHByb3BlcnR5IG9mXG4gICAgICAgIC8vICAgIG51bWJlckZvcm1hdCBpcyBcImNvZGVcIiwgdGhlbiBsZXQgY2QgYmUgY3VycmVuY3kuXG4gICAgICAgIC8vIGMuIEVsc2UgaWYgdGhlIHZhbHVlIG9mIHRoZSBbW2N1cnJlbmN5RGlzcGxheV1dIGludGVybmFsIHByb3BlcnR5IG9mXG4gICAgICAgIC8vICAgIG51bWJlckZvcm1hdCBpcyBcInN5bWJvbFwiLCB0aGVuIGxldCBjZCBiZSBhbiBJTEQgc3RyaW5nIHJlcHJlc2VudGluZ1xuICAgICAgICAvLyAgICBjdXJyZW5jeSBpbiBzaG9ydCBmb3JtLiBJZiB0aGUgaW1wbGVtZW50YXRpb24gZG9lcyBub3QgaGF2ZSBzdWNoIGFcbiAgICAgICAgLy8gICAgcmVwcmVzZW50YXRpb24gb2YgY3VycmVuY3ksIHRoZW4gdXNlIGN1cnJlbmN5IGl0c2VsZi5cbiAgICAgICAgLy8gZC4gRWxzZSBpZiB0aGUgdmFsdWUgb2YgdGhlIFtbY3VycmVuY3lEaXNwbGF5XV0gaW50ZXJuYWwgcHJvcGVydHkgb2ZcbiAgICAgICAgLy8gICAgbnVtYmVyRm9ybWF0IGlzIFwibmFtZVwiLCB0aGVuIGxldCBjZCBiZSBhbiBJTEQgc3RyaW5nIHJlcHJlc2VudGluZ1xuICAgICAgICAvLyAgICBjdXJyZW5jeSBpbiBsb25nIGZvcm0uIElmIHRoZSBpbXBsZW1lbnRhdGlvbiBkb2VzIG5vdCBoYXZlIHN1Y2ggYVxuICAgICAgICAvLyAgICByZXByZXNlbnRhdGlvbiBvZiBjdXJyZW5jeSwgdGhlbiB1c2UgY3VycmVuY3kgaXRzZWxmLlxuICAgICAgICBzd2l0Y2ggKGludGVybmFsWydbW2N1cnJlbmN5RGlzcGxheV1dJ10pIHtcbiAgICAgICAgICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAgICAgICAgICAgY2QgPSBjRGF0YSB8fCBjdXJyZW5jeTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhc2UgJ2NvZGUnOlxuICAgICAgICAgICAgY2FzZSAnbmFtZSc6XG4gICAgICAgICAgICAgICAgY2QgPSBjdXJyZW5jeTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGUuIFJlcGxhY2UgdGhlIHN1YnN0cmluZyBcIntjdXJyZW5jeX1cIiB3aXRoaW4gcmVzdWx0IHdpdGggY2QuXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKCd7Y3VycmVuY3l9JywgY2QpO1xuICAgIH1cblxuICAgIC8vIFJlc3RvcmUgdGhlIFJlZ0V4cCBwcm9wZXJ0aWVzXG4gICAgcmVnZXhwU3RhdGUuZXhwLnRlc3QocmVnZXhwU3RhdGUuaW5wdXQpO1xuXG4gICAgLy8gNy4gUmV0dXJuIHJlc3VsdC5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFdoZW4gdGhlIFRvUmF3UHJlY2lzaW9uIGFic3RyYWN0IG9wZXJhdGlvbiBpcyBjYWxsZWQgd2l0aCBhcmd1bWVudHMgeCAod2hpY2hcbiAqIG11c3QgYmUgYSBmaW5pdGUgbm9uLW5lZ2F0aXZlIG51bWJlciksIG1pblByZWNpc2lvbiwgYW5kIG1heFByZWNpc2lvbiAoYm90aFxuICogbXVzdCBiZSBpbnRlZ2VycyBiZXR3ZWVuIDEgYW5kIDIxKSB0aGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuZnVuY3Rpb24gVG9SYXdQcmVjaXNpb24gKHgsIG1pblByZWNpc2lvbiwgbWF4UHJlY2lzaW9uKSB7XG4gICAgdmFyXG4gICAgLy8gMS4gTGV0IHAgYmUgbWF4UHJlY2lzaW9uLlxuICAgICAgICBwID0gbWF4UHJlY2lzaW9uO1xuXG4gICAgLy8gMi4gSWYgeCA9IDAsIHRoZW5cbiAgICBpZiAoeCA9PT0gMCkge1xuICAgICAgICB2YXJcbiAgICAgICAgLy8gYS4gTGV0IG0gYmUgdGhlIFN0cmluZyBjb25zaXN0aW5nIG9mIHAgb2NjdXJyZW5jZXMgb2YgdGhlIGNoYXJhY3RlciBcIjBcIi5cbiAgICAgICAgICAgIG0gPSBhcnJKb2luLmNhbGwoQXJyYXkgKHAgKyAxKSwgJzAnKSxcbiAgICAgICAgLy8gYi4gTGV0IGUgYmUgMC5cbiAgICAgICAgICAgIGUgPSAwO1xuICAgIH1cbiAgICAvLyAzLiBFbHNlXG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGEuIExldCBlIGFuZCBuIGJlIGludGVnZXJzIHN1Y2ggdGhhdCAxMOG1luKBu8K5IOKJpCBuIDwgMTDhtZYgYW5kIGZvciB3aGljaCB0aGVcbiAgICAgICAgLy8gICAgZXhhY3QgbWF0aGVtYXRpY2FsIHZhbHVlIG9mIG4gw5cgMTDhtYnigbvhtZbigbrCuSDigJMgeCBpcyBhcyBjbG9zZSB0byB6ZXJvIGFzXG4gICAgICAgIC8vICAgIHBvc3NpYmxlLiBJZiB0aGVyZSBhcmUgdHdvIHN1Y2ggc2V0cyBvZiBlIGFuZCBuLCBwaWNrIHRoZSBlIGFuZCBuIGZvclxuICAgICAgICAvLyAgICB3aGljaCBuIMOXIDEw4bWJ4oG74bWW4oG6wrkgaXMgbGFyZ2VyLlxuICAgICAgICB2YXJcbiAgICAgICAgICAgIGUgPSBsb2cxMEZsb29yKE1hdGguYWJzKHgpKSxcblxuICAgICAgICAgICAgLy8gRWFzaWVyIHRvIGdldCB0byBtIGZyb20gaGVyZVxuICAgICAgICAgICAgZiA9IE1hdGgucm91bmQoTWF0aC5leHAoKE1hdGguYWJzKGUgLSBwICsgMSkpICogTWF0aC5MTjEwKSksXG5cbiAgICAgICAgLy8gYi4gTGV0IG0gYmUgdGhlIFN0cmluZyBjb25zaXN0aW5nIG9mIHRoZSBkaWdpdHMgb2YgdGhlIGRlY2ltYWxcbiAgICAgICAgLy8gICAgcmVwcmVzZW50YXRpb24gb2YgbiAoaW4gb3JkZXIsIHdpdGggbm8gbGVhZGluZyB6ZXJvZXMpXG4gICAgICAgICAgICBtID0gU3RyaW5nKE1hdGgucm91bmQoZSAtIHAgKyAxIDwgMCA/IHggKiBmIDogeCAvIGYpKTtcbiAgICB9XG5cbiAgICAvLyA0LiBJZiBlIOKJpSBwLCB0aGVuXG4gICAgaWYgKGUgPj0gcClcbiAgICAgICAgLy8gYS4gUmV0dXJuIHRoZSBjb25jYXRlbmF0aW9uIG9mIG0gYW5kIGUtcCsxIG9jY3VycmVuY2VzIG9mIHRoZSBjaGFyYWN0ZXIgXCIwXCIuXG4gICAgICAgIHJldHVybiBtICsgYXJySm9pbi5jYWxsKEFycmF5KGUtcCsxICsgMSksICcwJyk7XG5cbiAgICAvLyA1LiBJZiBlID0gcC0xLCB0aGVuXG4gICAgZWxzZSBpZiAoZSA9PT0gcCAtIDEpXG4gICAgICAgIC8vIGEuIFJldHVybiBtLlxuICAgICAgICByZXR1cm4gbTtcblxuICAgIC8vIDYuIElmIGUg4omlIDAsIHRoZW5cbiAgICBlbHNlIGlmIChlID49IDApXG4gICAgICAgIC8vIGEuIExldCBtIGJlIHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZSBmaXJzdCBlKzEgY2hhcmFjdGVycyBvZiBtLCB0aGUgY2hhcmFjdGVyXG4gICAgICAgIC8vICAgIFwiLlwiLCBhbmQgdGhlIHJlbWFpbmluZyBw4oCTKGUrMSkgY2hhcmFjdGVycyBvZiBtLlxuICAgICAgICBtID0gbS5zbGljZSgwLCBlICsgMSkgKyAnLicgKyBtLnNsaWNlKGUgKyAxKTtcblxuICAgIC8vIDcuIElmIGUgPCAwLCB0aGVuXG4gICAgZWxzZSBpZiAoZSA8IDApXG4gICAgICAgIC8vIGEuIExldCBtIGJlIHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZSBTdHJpbmcgXCIwLlwiLCDigJMoZSsxKSBvY2N1cnJlbmNlcyBvZiB0aGVcbiAgICAgICAgLy8gICAgY2hhcmFjdGVyIFwiMFwiLCBhbmQgdGhlIHN0cmluZyBtLlxuICAgICAgICBtID0gJzAuJyArIGFyckpvaW4uY2FsbChBcnJheSAoLShlKzEpICsgMSksICcwJykgKyBtO1xuXG4gICAgLy8gOC4gSWYgbSBjb250YWlucyB0aGUgY2hhcmFjdGVyIFwiLlwiLCBhbmQgbWF4UHJlY2lzaW9uID4gbWluUHJlY2lzaW9uLCB0aGVuXG4gICAgaWYgKG0uaW5kZXhPZihcIi5cIikgPj0gMCAmJiBtYXhQcmVjaXNpb24gPiBtaW5QcmVjaXNpb24pIHtcbiAgICAgICAgdmFyXG4gICAgICAgIC8vIGEuIExldCBjdXQgYmUgbWF4UHJlY2lzaW9uIOKAkyBtaW5QcmVjaXNpb24uXG4gICAgICAgICAgICBjdXQgPSBtYXhQcmVjaXNpb24gLSBtaW5QcmVjaXNpb247XG5cbiAgICAgICAgLy8gYi4gUmVwZWF0IHdoaWxlIGN1dCA+IDAgYW5kIHRoZSBsYXN0IGNoYXJhY3RlciBvZiBtIGlzIFwiMFwiOlxuICAgICAgICB3aGlsZSAoY3V0ID4gMCAmJiBtLmNoYXJBdChtLmxlbmd0aC0xKSA9PT0gJzAnKSB7XG4gICAgICAgICAgICAvLyAgaS4gUmVtb3ZlIHRoZSBsYXN0IGNoYXJhY3RlciBmcm9tIG0uXG4gICAgICAgICAgICBtID0gbS5zbGljZSgwLCAtMSk7XG5cbiAgICAgICAgICAgIC8vICBpaS4gRGVjcmVhc2UgY3V0IGJ5IDEuXG4gICAgICAgICAgICBjdXQtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGMuIElmIHRoZSBsYXN0IGNoYXJhY3RlciBvZiBtIGlzIFwiLlwiLCB0aGVuXG4gICAgICAgIGlmIChtLmNoYXJBdChtLmxlbmd0aC0xKSA9PT0gJy4nKVxuICAgICAgICAgICAgLy8gICAgaS4gUmVtb3ZlIHRoZSBsYXN0IGNoYXJhY3RlciBmcm9tIG0uXG4gICAgICAgICAgICBtID0gbS5zbGljZSgwLCAtMSk7XG4gICAgfVxuICAgIC8vIDkuIFJldHVybiBtLlxuICAgIHJldHVybiBtO1xufVxuXG4vKipcbiAqIFdoZW4gdGhlIFRvUmF3Rml4ZWQgYWJzdHJhY3Qgb3BlcmF0aW9uIGlzIGNhbGxlZCB3aXRoIGFyZ3VtZW50cyB4ICh3aGljaCBtdXN0XG4gKiBiZSBhIGZpbml0ZSBub24tbmVnYXRpdmUgbnVtYmVyKSwgbWluSW50ZWdlciAod2hpY2ggbXVzdCBiZSBhbiBpbnRlZ2VyIGJldHdlZW5cbiAqIDEgYW5kIDIxKSwgbWluRnJhY3Rpb24sIGFuZCBtYXhGcmFjdGlvbiAod2hpY2ggbXVzdCBiZSBpbnRlZ2VycyBiZXR3ZWVuIDAgYW5kXG4gKiAyMCkgdGhlIGZvbGxvd2luZyBzdGVwcyBhcmUgdGFrZW46XG4gKi9cbmZ1bmN0aW9uIFRvUmF3Rml4ZWQgKHgsIG1pbkludGVnZXIsIG1pbkZyYWN0aW9uLCBtYXhGcmFjdGlvbikge1xuICAgIC8vIChvciBub3QgYmVjYXVzZSBOdW1iZXIudG9Qcm90b3R5cGUudG9GaXhlZCBkb2VzIGEgbG90IG9mIGl0IGZvciB1cylcbiAgICB2YXIgaWR4LFxuXG4gICAgICAgIC8vIFdlIGNhbiBwaWNrIHVwIGFmdGVyIHRoZSBmaXhlZCBmb3JtYXR0ZWQgc3RyaW5nIChtKSBpcyBjcmVhdGVkXG4gICAgICAgIG0gICA9IE51bWJlci5wcm90b3R5cGUudG9GaXhlZC5jYWxsKHgsIG1heEZyYWN0aW9uKSxcblxuICAgICAgICAvLyA0LiBJZiBbbWF4RnJhY3Rpb25dIOKJoCAwLCB0aGVuXG4gICAgICAgIC8vICAgIC4uLlxuICAgICAgICAvLyAgICBlLiBMZXQgaW50IGJlIHRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyBpbiBhLlxuICAgICAgICAvL1xuICAgICAgICAvLyA1LiBFbHNlIGxldCBpbnQgYmUgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGluIG0uXG4gICAgICAgIGlnciA9IG0uc3BsaXQoXCIuXCIpWzBdLmxlbmd0aCwgIC8vIGludCBpcyBhIHJlc2VydmVkIHdvcmRcblxuICAgICAgICAvLyA2LiBMZXQgY3V0IGJlIG1heEZyYWN0aW9uIOKAkyBtaW5GcmFjdGlvbi5cbiAgICAgICAgY3V0ID0gbWF4RnJhY3Rpb24gLSBtaW5GcmFjdGlvbixcblxuICAgICAgICBleHAgPSAoaWR4ID0gbS5pbmRleE9mKCdlJykpID4gLTEgPyBtLnNsaWNlKGlkeCArIDEpIDogMDtcblxuICAgIGlmIChleHApIHtcbiAgICAgICAgbSA9IG0uc2xpY2UoMCwgaWR4KS5yZXBsYWNlKCcuJywgJycpO1xuICAgICAgICBtICs9IGFyckpvaW4uY2FsbChBcnJheShleHAgLSAobS5sZW5ndGggLSAxKSArIDEpLCAnMCcpXG4gICAgICAgICAgKyAnLicgKyBhcnJKb2luLmNhbGwoQXJyYXkobWF4RnJhY3Rpb24gKyAxKSwgJzAnKTtcblxuICAgICAgICBpZ3IgPSBtLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyA3LiBSZXBlYXQgd2hpbGUgY3V0ID4gMCBhbmQgdGhlIGxhc3QgY2hhcmFjdGVyIG9mIG0gaXMgXCIwXCI6XG4gICAgd2hpbGUgKGN1dCA+IDAgJiYgbS5zbGljZSgtMSkgPT09IFwiMFwiKSB7XG4gICAgICAgIC8vIGEuIFJlbW92ZSB0aGUgbGFzdCBjaGFyYWN0ZXIgZnJvbSBtLlxuICAgICAgICBtID0gbS5zbGljZSgwLCAtMSk7XG5cbiAgICAgICAgLy8gYi4gRGVjcmVhc2UgY3V0IGJ5IDEuXG4gICAgICAgIGN1dC0tO1xuICAgIH1cblxuICAgIC8vIDguIElmIHRoZSBsYXN0IGNoYXJhY3RlciBvZiBtIGlzIFwiLlwiLCB0aGVuXG4gICAgaWYgKG0uc2xpY2UoLTEpID09PSBcIi5cIilcbiAgICAgICAgLy8gYS4gUmVtb3ZlIHRoZSBsYXN0IGNoYXJhY3RlciBmcm9tIG0uXG4gICAgICAgIG0gPSBtLnNsaWNlKDAsIC0xKTtcblxuICAgIC8vIDkuIElmIGludCA8IG1pbkludGVnZXIsIHRoZW5cbiAgICBpZiAoaWdyIDwgbWluSW50ZWdlcilcbiAgICAgICAgLy8gYS4gTGV0IHogYmUgdGhlIFN0cmluZyBjb25zaXN0aW5nIG9mIG1pbkludGVnZXLigJNpbnQgb2NjdXJyZW5jZXMgb2YgdGhlXG4gICAgICAgIC8vICAgIGNoYXJhY3RlciBcIjBcIi5cbiAgICAgICAgdmFyIHogPSBhcnJKb2luLmNhbGwoQXJyYXkobWluSW50ZWdlciAtIGlnciArIDEpLCAnMCcpO1xuXG4gICAgLy8gMTAuIExldCBtIGJlIHRoZSBjb25jYXRlbmF0aW9uIG9mIFN0cmluZ3MgeiBhbmQgbS5cbiAgICAvLyAxMS4gUmV0dXJuIG0uXG4gICAgcmV0dXJuICh6ID8geiA6ICcnKSArIG07XG59XG5cbi8vIFNlY3QgMTEuMy4yIFRhYmxlIDIsIE51bWJlcmluZyBzeXN0ZW1zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIG51bVN5cyA9IHtcbiAgICBhcmFiOiAgICBbICdcXHUwNjYwJywgJ1xcdTA2NjEnLCAnXFx1MDY2MicsICdcXHUwNjYzJywgJ1xcdTA2NjQnLCAnXFx1MDY2NScsICdcXHUwNjY2JywgJ1xcdTA2NjcnLCAnXFx1MDY2OCcsICdcXHUwNjY5JyBdLFxuICAgIGFyYWJleHQ6IFsgJ1xcdTA2RjAnLCAnXFx1MDZGMScsICdcXHUwNkYyJywgJ1xcdTA2RjMnLCAnXFx1MDZGNCcsICdcXHUwNkY1JywgJ1xcdTA2RjYnLCAnXFx1MDZGNycsICdcXHUwNkY4JywgJ1xcdTA2RjknIF0sXG4gICAgYmFsaTogICAgWyAnXFx1MUI1MCcsICdcXHUxQjUxJywgJ1xcdTFCNTInLCAnXFx1MUI1MycsICdcXHUxQjU0JywgJ1xcdTFCNTUnLCAnXFx1MUI1NicsICdcXHUxQjU3JywgJ1xcdTFCNTgnLCAnXFx1MUI1OScgXSxcbiAgICBiZW5nOiAgICBbICdcXHUwOUU2JywgJ1xcdTA5RTcnLCAnXFx1MDlFOCcsICdcXHUwOUU5JywgJ1xcdTA5RUEnLCAnXFx1MDlFQicsICdcXHUwOUVDJywgJ1xcdTA5RUQnLCAnXFx1MDlFRScsICdcXHUwOUVGJyBdLFxuICAgIGRldmE6ICAgIFsgJ1xcdTA5NjYnLCAnXFx1MDk2NycsICdcXHUwOTY4JywgJ1xcdTA5NjknLCAnXFx1MDk2QScsICdcXHUwOTZCJywgJ1xcdTA5NkMnLCAnXFx1MDk2RCcsICdcXHUwOTZFJywgJ1xcdTA5NkYnIF0sXG4gICAgZnVsbHdpZGU6WyAnXFx1RkYxMCcsICdcXHVGRjExJywgJ1xcdUZGMTInLCAnXFx1RkYxMycsICdcXHVGRjE0JywgJ1xcdUZGMTUnLCAnXFx1RkYxNicsICdcXHVGRjE3JywgJ1xcdUZGMTgnLCAnXFx1RkYxOScgXSxcbiAgICBndWpyOiAgICBbICdcXHUwQUU2JywgJ1xcdTBBRTcnLCAnXFx1MEFFOCcsICdcXHUwQUU5JywgJ1xcdTBBRUEnLCAnXFx1MEFFQicsICdcXHUwQUVDJywgJ1xcdTBBRUQnLCAnXFx1MEFFRScsICdcXHUwQUVGJyBdLFxuICAgIGd1cnU6ICAgIFsgJ1xcdTBBNjYnLCAnXFx1MEE2NycsICdcXHUwQTY4JywgJ1xcdTBBNjknLCAnXFx1MEE2QScsICdcXHUwQTZCJywgJ1xcdTBBNkMnLCAnXFx1MEE2RCcsICdcXHUwQTZFJywgJ1xcdTBBNkYnIF0sXG4gICAgaGFuaWRlYzogWyAnXFx1MzAwNycsICdcXHU0RTAwJywgJ1xcdTRFOEMnLCAnXFx1NEUwOScsICdcXHU1NkRCJywgJ1xcdTRFOTQnLCAnXFx1NTE2RCcsICdcXHU0RTAzJywgJ1xcdTUxNkInLCAnXFx1NEU1RCcgXSxcbiAgICBraG1yOiAgICBbICdcXHUxN0UwJywgJ1xcdTE3RTEnLCAnXFx1MTdFMicsICdcXHUxN0UzJywgJ1xcdTE3RTQnLCAnXFx1MTdFNScsICdcXHUxN0U2JywgJ1xcdTE3RTcnLCAnXFx1MTdFOCcsICdcXHUxN0U5JyBdLFxuICAgIGtuZGE6ICAgIFsgJ1xcdTBDRTYnLCAnXFx1MENFNycsICdcXHUwQ0U4JywgJ1xcdTBDRTknLCAnXFx1MENFQScsICdcXHUwQ0VCJywgJ1xcdTBDRUMnLCAnXFx1MENFRCcsICdcXHUwQ0VFJywgJ1xcdTBDRUYnIF0sXG4gICAgbGFvbzogICAgWyAnXFx1MEVEMCcsICdcXHUwRUQxJywgJ1xcdTBFRDInLCAnXFx1MEVEMycsICdcXHUwRUQ0JywgJ1xcdTBFRDUnLCAnXFx1MEVENicsICdcXHUwRUQ3JywgJ1xcdTBFRDgnLCAnXFx1MEVEOScgXSxcbiAgICBsYXRuOiAgICBbICdcXHUwMDMwJywgJ1xcdTAwMzEnLCAnXFx1MDAzMicsICdcXHUwMDMzJywgJ1xcdTAwMzQnLCAnXFx1MDAzNScsICdcXHUwMDM2JywgJ1xcdTAwMzcnLCAnXFx1MDAzOCcsICdcXHUwMDM5JyBdLFxuICAgIGxpbWI6ICAgIFsgJ1xcdTE5NDYnLCAnXFx1MTk0NycsICdcXHUxOTQ4JywgJ1xcdTE5NDknLCAnXFx1MTk0QScsICdcXHUxOTRCJywgJ1xcdTE5NEMnLCAnXFx1MTk0RCcsICdcXHUxOTRFJywgJ1xcdTE5NEYnIF0sXG4gICAgbWx5bTogICAgWyAnXFx1MEQ2NicsICdcXHUwRDY3JywgJ1xcdTBENjgnLCAnXFx1MEQ2OScsICdcXHUwRDZBJywgJ1xcdTBENkInLCAnXFx1MEQ2QycsICdcXHUwRDZEJywgJ1xcdTBENkUnLCAnXFx1MEQ2RicgXSxcbiAgICBtb25nOiAgICBbICdcXHUxODEwJywgJ1xcdTE4MTEnLCAnXFx1MTgxMicsICdcXHUxODEzJywgJ1xcdTE4MTQnLCAnXFx1MTgxNScsICdcXHUxODE2JywgJ1xcdTE4MTcnLCAnXFx1MTgxOCcsICdcXHUxODE5JyBdLFxuICAgIG15bXI6ICAgIFsgJ1xcdTEwNDAnLCAnXFx1MTA0MScsICdcXHUxMDQyJywgJ1xcdTEwNDMnLCAnXFx1MTA0NCcsICdcXHUxMDQ1JywgJ1xcdTEwNDYnLCAnXFx1MTA0NycsICdcXHUxMDQ4JywgJ1xcdTEwNDknIF0sXG4gICAgb3J5YTogICAgWyAnXFx1MEI2NicsICdcXHUwQjY3JywgJ1xcdTBCNjgnLCAnXFx1MEI2OScsICdcXHUwQjZBJywgJ1xcdTBCNkInLCAnXFx1MEI2QycsICdcXHUwQjZEJywgJ1xcdTBCNkUnLCAnXFx1MEI2RicgXSxcbiAgICB0YW1sZGVjOiBbICdcXHUwQkU2JywgJ1xcdTBCRTcnLCAnXFx1MEJFOCcsICdcXHUwQkU5JywgJ1xcdTBCRUEnLCAnXFx1MEJFQicsICdcXHUwQkVDJywgJ1xcdTBCRUQnLCAnXFx1MEJFRScsICdcXHUwQkVGJyBdLFxuICAgIHRlbHU6ICAgIFsgJ1xcdTBDNjYnLCAnXFx1MEM2NycsICdcXHUwQzY4JywgJ1xcdTBDNjknLCAnXFx1MEM2QScsICdcXHUwQzZCJywgJ1xcdTBDNkMnLCAnXFx1MEM2RCcsICdcXHUwQzZFJywgJ1xcdTBDNkYnIF0sXG4gICAgdGhhaTogICAgWyAnXFx1MEU1MCcsICdcXHUwRTUxJywgJ1xcdTBFNTInLCAnXFx1MEU1MycsICdcXHUwRTU0JywgJ1xcdTBFNTUnLCAnXFx1MEU1NicsICdcXHUwRTU3JywgJ1xcdTBFNTgnLCAnXFx1MEU1OScgXSxcbiAgICB0aWJ0OiAgICBbICdcXHUwRjIwJywgJ1xcdTBGMjEnLCAnXFx1MEYyMicsICdcXHUwRjIzJywgJ1xcdTBGMjQnLCAnXFx1MEYyNScsICdcXHUwRjI2JywgJ1xcdTBGMjcnLCAnXFx1MEYyOCcsICdcXHUwRjI5JyBdXG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBsb2NhbGUgYW5kIGZvcm1hdHRpbmcgb3B0aW9ucyBjb21wdXRlZFxuICogZHVyaW5nIGluaXRpYWxpemF0aW9uIG9mIHRoZSBvYmplY3QuXG4gKlxuICogVGhlIGZ1bmN0aW9uIHJldHVybnMgYSBuZXcgb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYW5kIGF0dHJpYnV0ZXMgYXJlIHNldCBhc1xuICogaWYgY29uc3RydWN0ZWQgYnkgYW4gb2JqZWN0IGxpdGVyYWwgYXNzaWduaW5nIHRvIGVhY2ggb2YgdGhlIGZvbGxvd2luZ1xuICogcHJvcGVydGllcyB0aGUgdmFsdWUgb2YgdGhlIGNvcnJlc3BvbmRpbmcgaW50ZXJuYWwgcHJvcGVydHkgb2YgdGhpc1xuICogTnVtYmVyRm9ybWF0IG9iamVjdCAoc2VlIDExLjQpOiBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgc3R5bGUsIGN1cnJlbmN5LFxuICogY3VycmVuY3lEaXNwbGF5LCBtaW5pbXVtSW50ZWdlckRpZ2l0cywgbWluaW11bUZyYWN0aW9uRGlnaXRzLFxuICogbWF4aW11bUZyYWN0aW9uRGlnaXRzLCBtaW5pbXVtU2lnbmlmaWNhbnREaWdpdHMsIG1heGltdW1TaWduaWZpY2FudERpZ2l0cywgYW5kXG4gKiB1c2VHcm91cGluZy4gUHJvcGVydGllcyB3aG9zZSBjb3JyZXNwb25kaW5nIGludGVybmFsIHByb3BlcnRpZXMgYXJlIG5vdCBwcmVzZW50XG4gKiBhcmUgbm90IGFzc2lnbmVkLlxuICovXG4vKiAxMS4zLjMgKi9kZWZpbmVQcm9wZXJ0eShJbnRsLk51bWJlckZvcm1hdC5wcm90b3R5cGUsICdyZXNvbHZlZE9wdGlvbnMnLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwcm9wLFxuICAgICAgICAgICAgZGVzY3MgPSBuZXcgUmVjb3JkKCksXG4gICAgICAgICAgICBwcm9wcyA9IFtcbiAgICAgICAgICAgICAgICAnbG9jYWxlJywgJ251bWJlcmluZ1N5c3RlbScsICdzdHlsZScsICdjdXJyZW5jeScsICdjdXJyZW5jeURpc3BsYXknLFxuICAgICAgICAgICAgICAgICdtaW5pbXVtSW50ZWdlckRpZ2l0cycsICdtaW5pbXVtRnJhY3Rpb25EaWdpdHMnLCAnbWF4aW11bUZyYWN0aW9uRGlnaXRzJyxcbiAgICAgICAgICAgICAgICAnbWluaW11bVNpZ25pZmljYW50RGlnaXRzJywgJ21heGltdW1TaWduaWZpY2FudERpZ2l0cycsICd1c2VHcm91cGluZydcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBpbnRlcm5hbCA9IHRoaXMgIT0gbnVsbCAmJiB0eXBlb2YgdGhpcyA9PT0gJ29iamVjdCcgJiYgZ2V0SW50ZXJuYWxQcm9wZXJ0aWVzKHRoaXMpO1xuXG4gICAgICAgIC8vIFNhdGlzZnkgdGVzdCAxMS4zX2JcbiAgICAgICAgaWYgKCFpbnRlcm5hbCB8fCAhaW50ZXJuYWxbJ1tbaW5pdGlhbGl6ZWROdW1iZXJGb3JtYXRdXSddKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYHRoaXNgIHZhbHVlIGZvciByZXNvbHZlZE9wdGlvbnMoKSBpcyBub3QgYW4gaW5pdGlhbGl6ZWQgSW50bC5OdW1iZXJGb3JtYXQgb2JqZWN0LicpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBtYXggPSBwcm9wcy5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhvcC5jYWxsKGludGVybmFsLCBwcm9wID0gJ1tbJysgcHJvcHNbaV0gKyddXScpKVxuICAgICAgICAgICAgICAgIGRlc2NzW3Byb3BzW2ldXSA9IHsgdmFsdWU6IGludGVybmFsW3Byb3BdLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCBlbnVtZXJhYmxlOiB0cnVlIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqQ3JlYXRlKHt9LCBkZXNjcyk7XG4gICAgfVxufSk7XG5cbi8vIDEyLjEgVGhlIEludGwuRGF0ZVRpbWVGb3JtYXQgY29uc3RydWN0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gRGVmaW5lIHRoZSBEYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBpbnRlcm5hbGx5IHNvIGl0IGNhbm5vdCBiZSB0YWludGVkXG5mdW5jdGlvbiBEYXRlVGltZUZvcm1hdENvbnN0cnVjdG9yICgpIHtcbiAgICB2YXIgbG9jYWxlcyA9IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50c1sxXTtcblxuICAgIGlmICghdGhpcyB8fCB0aGlzID09PSBJbnRsKSB7XG4gICAgICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGVzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIEluaXRpYWxpemVEYXRlVGltZUZvcm1hdCh0b09iamVjdCh0aGlzKSwgbG9jYWxlcywgb3B0aW9ucyk7XG59XG5cbmRlZmluZVByb3BlcnR5KEludGwsICdEYXRlVGltZUZvcm1hdCcsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IERhdGVUaW1lRm9ybWF0Q29uc3RydWN0b3Jcbn0pO1xuXG4vLyBNdXN0IGV4cGxpY2l0bHkgc2V0IHByb3RvdHlwZXMgYXMgdW53cml0YWJsZVxuZGVmaW5lUHJvcGVydHkoRGF0ZVRpbWVGb3JtYXRDb25zdHJ1Y3RvciwgJ3Byb3RvdHlwZScsIHtcbiAgICB3cml0YWJsZTogZmFsc2Vcbn0pO1xuXG4vKipcbiAqIFRoZSBhYnN0cmFjdCBvcGVyYXRpb24gSW5pdGlhbGl6ZURhdGVUaW1lRm9ybWF0IGFjY2VwdHMgdGhlIGFyZ3VtZW50cyBkYXRlVGltZUZvcm1hdFxuICogKHdoaWNoIG11c3QgYmUgYW4gb2JqZWN0KSwgbG9jYWxlcywgYW5kIG9wdGlvbnMuIEl0IGluaXRpYWxpemVzIGRhdGVUaW1lRm9ybWF0IGFzIGFcbiAqIERhdGVUaW1lRm9ybWF0IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24vKiAxMi4xLjEuMSAqL0luaXRpYWxpemVEYXRlVGltZUZvcm1hdCAoZGF0ZVRpbWVGb3JtYXQsIGxvY2FsZXMsIG9wdGlvbnMpIHtcbiAgICB2YXJcbiAgICAvLyBUaGlzIHdpbGwgYmUgYSBpbnRlcm5hbCBwcm9wZXJ0aWVzIG9iamVjdCBpZiB3ZSdyZSBub3QgYWxyZWFkeSBpbml0aWFsaXplZFxuICAgICAgICBpbnRlcm5hbCA9IGdldEludGVybmFsUHJvcGVydGllcyhkYXRlVGltZUZvcm1hdCksXG5cbiAgICAvLyBDcmVhdGUgYW4gb2JqZWN0IHdob3NlIHByb3BzIGNhbiBiZSB1c2VkIHRvIHJlc3RvcmUgdGhlIHZhbHVlcyBvZiBSZWdFeHAgcHJvcHNcbiAgICAgICAgcmVnZXhwU3RhdGUgPSBjcmVhdGVSZWdFeHBSZXN0b3JlKCk7XG5cbiAgICAvLyAxLiBJZiBkYXRlVGltZUZvcm1hdCBoYXMgYW4gW1tpbml0aWFsaXplZEludGxPYmplY3RdXSBpbnRlcm5hbCBwcm9wZXJ0eSB3aXRoXG4gICAgLy8gICAgdmFsdWUgdHJ1ZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuICAgIGlmIChpbnRlcm5hbFsnW1tpbml0aWFsaXplZEludGxPYmplY3RdXSddID09PSB0cnVlKVxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdgdGhpc2Agb2JqZWN0IGhhcyBhbHJlYWR5IGJlZW4gaW5pdGlhbGl6ZWQgYXMgYW4gSW50bCBvYmplY3QnKTtcblxuICAgIC8vIE5lZWQgdGhpcyB0byBhY2Nlc3MgdGhlIGBpbnRlcm5hbGAgb2JqZWN0XG4gICAgZGVmaW5lUHJvcGVydHkoZGF0ZVRpbWVGb3JtYXQsICdfX2dldEludGVybmFsUHJvcGVydGllcycsIHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IE5vbi1zdGFuZGFyZCwgZm9yIGludGVybmFsIHVzZSBvbmx5XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzWzBdID09PSBzZWNyZXQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGludGVybmFsO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyAyLiBTZXQgdGhlIFtbaW5pdGlhbGl6ZWRJbnRsT2JqZWN0XV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0IHRvIHRydWUuXG4gICAgaW50ZXJuYWxbJ1tbaW5pdGlhbGl6ZWRJbnRsT2JqZWN0XV0nXSA9IHRydWU7XG5cbiAgICB2YXJcbiAgICAvLyAzLiBMZXQgcmVxdWVzdGVkTG9jYWxlcyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIENhbm9uaWNhbGl6ZUxvY2FsZUxpc3RcbiAgICAvLyAgICBhYnN0cmFjdCBvcGVyYXRpb24gKGRlZmluZWQgaW4gOS4yLjEpIHdpdGggYXJndW1lbnQgbG9jYWxlcy5cbiAgICAgICAgcmVxdWVzdGVkTG9jYWxlcyA9IENhbm9uaWNhbGl6ZUxvY2FsZUxpc3QobG9jYWxlcyksXG5cbiAgICAvLyA0LiBMZXQgb3B0aW9ucyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFRvRGF0ZVRpbWVPcHRpb25zIGFic3RyYWN0XG4gICAgLy8gICAgb3BlcmF0aW9uIChkZWZpbmVkIGJlbG93KSB3aXRoIGFyZ3VtZW50cyBvcHRpb25zLCBcImFueVwiLCBhbmQgXCJkYXRlXCIuXG4gICAgICAgIG9wdGlvbnMgPSBUb0RhdGVUaW1lT3B0aW9ucyhvcHRpb25zLCAnYW55JywgJ2RhdGUnKSxcblxuICAgIC8vIDUuIExldCBvcHQgYmUgYSBuZXcgUmVjb3JkLlxuICAgICAgICBvcHQgPSBuZXcgUmVjb3JkKCk7XG5cbiAgICAvLyA2LiBMZXQgbWF0Y2hlciBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEdldE9wdGlvbiBhYnN0cmFjdCBvcGVyYXRpb25cbiAgICAvLyAgICAoZGVmaW5lZCBpbiA5LjIuOSkgd2l0aCBhcmd1bWVudHMgb3B0aW9ucywgXCJsb2NhbGVNYXRjaGVyXCIsIFwic3RyaW5nXCIsIGEgTGlzdFxuICAgIC8vICAgIGNvbnRhaW5pbmcgdGhlIHR3byBTdHJpbmcgdmFsdWVzIFwibG9va3VwXCIgYW5kIFwiYmVzdCBmaXRcIiwgYW5kIFwiYmVzdCBmaXRcIi5cbiAgICAgICAgbWF0Y2hlciA9IEdldE9wdGlvbihvcHRpb25zLCAnbG9jYWxlTWF0Y2hlcicsICdzdHJpbmcnLCBuZXcgTGlzdCgnbG9va3VwJywgJ2Jlc3QgZml0JyksICdiZXN0IGZpdCcpO1xuXG4gICAgLy8gNy4gU2V0IG9wdC5bW2xvY2FsZU1hdGNoZXJdXSB0byBtYXRjaGVyLlxuICAgIG9wdFsnW1tsb2NhbGVNYXRjaGVyXV0nXSA9IG1hdGNoZXI7XG5cbiAgICB2YXJcbiAgICAvLyA4LiBMZXQgRGF0ZVRpbWVGb3JtYXQgYmUgdGhlIHN0YW5kYXJkIGJ1aWx0LWluIG9iamVjdCB0aGF0IGlzIHRoZSBpbml0aWFsXG4gICAgLy8gICAgdmFsdWUgb2YgSW50bC5EYXRlVGltZUZvcm1hdC5cbiAgICAgICAgRGF0ZVRpbWVGb3JtYXQgPSBpbnRlcm5hbHMuRGF0ZVRpbWVGb3JtYXQsIC8vIFRoaXMgaXMgd2hhdCB3ZSAqcmVhbGx5KiBuZWVkXG5cbiAgICAvLyA5LiBMZXQgbG9jYWxlRGF0YSBiZSB0aGUgdmFsdWUgb2YgdGhlIFtbbG9jYWxlRGF0YV1dIGludGVybmFsIHByb3BlcnR5IG9mXG4gICAgLy8gICAgRGF0ZVRpbWVGb3JtYXQuXG4gICAgICAgIGxvY2FsZURhdGEgPSBEYXRlVGltZUZvcm1hdFsnW1tsb2NhbGVEYXRhXV0nXSxcblxuICAgIC8vIDEwLiBMZXQgciBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFJlc29sdmVMb2NhbGUgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gICAgLy8gICAgIChkZWZpbmVkIGluIDkuMi41KSB3aXRoIHRoZSBbW2F2YWlsYWJsZUxvY2FsZXNdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZlxuICAgIC8vICAgICAgRGF0ZVRpbWVGb3JtYXQsIHJlcXVlc3RlZExvY2FsZXMsIG9wdCwgdGhlIFtbcmVsZXZhbnRFeHRlbnNpb25LZXlzXV1cbiAgICAvLyAgICAgIGludGVybmFsIHByb3BlcnR5IG9mIERhdGVUaW1lRm9ybWF0LCBhbmQgbG9jYWxlRGF0YS5cbiAgICAgICAgciA9IFJlc29sdmVMb2NhbGUoRGF0ZVRpbWVGb3JtYXRbJ1tbYXZhaWxhYmxlTG9jYWxlc11dJ10sIHJlcXVlc3RlZExvY2FsZXMsXG4gICAgICAgICAgICAgICAgb3B0LCBEYXRlVGltZUZvcm1hdFsnW1tyZWxldmFudEV4dGVuc2lvbktleXNdXSddLCBsb2NhbGVEYXRhKTtcblxuICAgIC8vIDExLiBTZXQgdGhlIFtbbG9jYWxlXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgZGF0ZVRpbWVGb3JtYXQgdG8gdGhlIHZhbHVlIG9mXG4gICAgLy8gICAgIHIuW1tsb2NhbGVdXS5cbiAgICBpbnRlcm5hbFsnW1tsb2NhbGVdXSddID0gclsnW1tsb2NhbGVdXSddO1xuXG4gICAgLy8gMTIuIFNldCB0aGUgW1tjYWxlbmRhcl1dIGludGVybmFsIHByb3BlcnR5IG9mIGRhdGVUaW1lRm9ybWF0IHRvIHRoZSB2YWx1ZSBvZlxuICAgIC8vICAgICByLltbY2FdXS5cbiAgICBpbnRlcm5hbFsnW1tjYWxlbmRhcl1dJ10gPSByWydbW2NhXV0nXTtcblxuICAgIC8vIDEzLiBTZXQgdGhlIFtbbnVtYmVyaW5nU3lzdGVtXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgZGF0ZVRpbWVGb3JtYXQgdG8gdGhlIHZhbHVlIG9mXG4gICAgLy8gICAgIHIuW1tudV1dLlxuICAgIGludGVybmFsWydbW251bWJlcmluZ1N5c3RlbV1dJ10gPSByWydbW251XV0nXTtcblxuICAgIC8vIFRoZSBzcGVjaWZpY2F0aW9uIGRvZXNuJ3QgdGVsbCB1cyB0byBkbyB0aGlzLCBidXQgaXQncyBoZWxwZnVsIGxhdGVyIG9uXG4gICAgaW50ZXJuYWxbJ1tbZGF0YUxvY2FsZV1dJ10gPSByWydbW2RhdGFMb2NhbGVdXSddO1xuXG4gICAgdmFyXG4gICAgLy8gMTQuIExldCBkYXRhTG9jYWxlIGJlIHRoZSB2YWx1ZSBvZiByLltbZGF0YUxvY2FsZV1dLlxuICAgICAgICBkYXRhTG9jYWxlID0gclsnW1tkYXRhTG9jYWxlXV0nXSxcblxuICAgIC8vIDE1LiBMZXQgdHogYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZiBvcHRpb25zIHdpdGhcbiAgICAvLyAgICAgYXJndW1lbnQgXCJ0aW1lWm9uZVwiLlxuICAgICAgICB0eiA9IG9wdGlvbnMudGltZVpvbmU7XG5cbiAgICAvLyAxNi4gSWYgdHogaXMgbm90IHVuZGVmaW5lZCwgdGhlblxuICAgIGlmICh0eiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGEuIExldCB0eiBiZSBUb1N0cmluZyh0eikuXG4gICAgICAgIC8vIGIuIENvbnZlcnQgdHogdG8gdXBwZXIgY2FzZSBhcyBkZXNjcmliZWQgaW4gNi4xLlxuICAgICAgICAvLyAgICBOT1RFOiBJZiBhbiBpbXBsZW1lbnRhdGlvbiBhY2NlcHRzIGFkZGl0aW9uYWwgdGltZSB6b25lIHZhbHVlcywgYXMgcGVybWl0dGVkXG4gICAgICAgIC8vICAgICAgICAgIHVuZGVyIGNlcnRhaW4gY29uZGl0aW9ucyBieSB0aGUgQ29uZm9ybWFuY2UgY2xhdXNlLCBkaWZmZXJlbnQgY2FzaW5nXG4gICAgICAgIC8vICAgICAgICAgIHJ1bGVzIGFwcGx5LlxuICAgICAgICB0eiA9IHRvTGF0aW5VcHBlckNhc2UodHopO1xuXG4gICAgICAgIC8vIGMuIElmIHR6IGlzIG5vdCBcIlVUQ1wiLCB0aGVuIHRocm93IGEgUmFuZ2VFcnJvciBleGNlcHRpb24uXG4gICAgICAgIC8vICMjI1RPRE86IGFjY2VwdCBtb3JlIHRpbWUgem9uZXMjIyNcbiAgICAgICAgaWYgKHR6ICE9PSAnVVRDJylcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0aW1lWm9uZSBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgIH1cblxuICAgIC8vIDE3LiBTZXQgdGhlIFtbdGltZVpvbmVdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBkYXRlVGltZUZvcm1hdCB0byB0ei5cbiAgICBpbnRlcm5hbFsnW1t0aW1lWm9uZV1dJ10gPSB0ejtcblxuICAgIC8vIDE4LiBMZXQgb3B0IGJlIGEgbmV3IFJlY29yZC5cbiAgICBvcHQgPSBuZXcgUmVjb3JkKCk7XG5cbiAgICAvLyAxOS4gRm9yIGVhY2ggcm93IG9mIFRhYmxlIDMsIGV4Y2VwdCB0aGUgaGVhZGVyIHJvdywgZG86XG4gICAgZm9yICh2YXIgcHJvcCBpbiBkYXRlVGltZUNvbXBvbmVudHMpIHtcbiAgICAgICAgaWYgKCFob3AuY2FsbChkYXRlVGltZUNvbXBvbmVudHMsIHByb3ApKVxuICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgdmFyXG4gICAgICAgIC8vIDIwLiBMZXQgcHJvcCBiZSB0aGUgbmFtZSBnaXZlbiBpbiB0aGUgUHJvcGVydHkgY29sdW1uIG9mIHRoZSByb3cuXG4gICAgICAgIC8vIDIxLiBMZXQgdmFsdWUgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBHZXRPcHRpb24gYWJzdHJhY3Qgb3BlcmF0aW9uLFxuICAgICAgICAvLyAgICAgcGFzc2luZyBhcyBhcmd1bWVudCBvcHRpb25zLCB0aGUgbmFtZSBnaXZlbiBpbiB0aGUgUHJvcGVydHkgY29sdW1uIG9mIHRoZVxuICAgICAgICAvLyAgICAgcm93LCBcInN0cmluZ1wiLCBhIExpc3QgY29udGFpbmluZyB0aGUgc3RyaW5ncyBnaXZlbiBpbiB0aGUgVmFsdWVzIGNvbHVtbiBvZlxuICAgICAgICAvLyAgICAgdGhlIHJvdywgYW5kIHVuZGVmaW5lZC5cbiAgICAgICAgICAgIHZhbHVlID0gR2V0T3B0aW9uKG9wdGlvbnMsIHByb3AsICdzdHJpbmcnLCBkYXRlVGltZUNvbXBvbmVudHNbcHJvcF0pO1xuXG4gICAgICAgIC8vIDIyLiBTZXQgb3B0LltbPHByb3A+XV0gdG8gdmFsdWUuXG4gICAgICAgIG9wdFsnW1snK3Byb3ArJ11dJ10gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB2YXJcbiAgICAgICAgLy8gQXNzaWduZWQgYSB2YWx1ZSBiZWxvd1xuICAgICAgICBiZXN0Rm9ybWF0LFxuXG4gICAgICAgIC8vIDIzLiBMZXQgZGF0YUxvY2FsZURhdGEgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgICAgICAvLyAgICAgbG9jYWxlRGF0YSB3aXRoIGFyZ3VtZW50IGRhdGFMb2NhbGUuXG4gICAgICAgIGRhdGFMb2NhbGVEYXRhID0gbG9jYWxlRGF0YVtkYXRhTG9jYWxlXSxcblxuICAgICAgICAvLyAyNC4gTGV0IGZvcm1hdHMgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgICAgICAvLyAgICAgZGF0YUxvY2FsZURhdGEgd2l0aCBhcmd1bWVudCBcImZvcm1hdHNcIi5cbiAgICAgICAgLy8gICAgIE5vdGU6IHdlIHByb2Nlc3MgdGhlIENMRFIgZm9ybWF0cyBpbnRvIHRoZSBzcGVjJ2Qgc3RydWN0dXJlXG4gICAgICAgIGZvcm1hdHMgPSBUb0RhdGVUaW1lRm9ybWF0cyhkYXRhTG9jYWxlRGF0YS5mb3JtYXRzKSxcblxuICAgICAgICAvLyAyNS4gTGV0IG1hdGNoZXIgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBHZXRPcHRpb24gYWJzdHJhY3Qgb3BlcmF0aW9uIHdpdGhcbiAgICAgICAgLy8gICAgIGFyZ3VtZW50cyBvcHRpb25zLCBcImZvcm1hdE1hdGNoZXJcIiwgXCJzdHJpbmdcIiwgYSBMaXN0IGNvbnRhaW5pbmcgdGhlIHR3byBTdHJpbmdcbiAgICAgICAgLy8gICAgIHZhbHVlcyBcImJhc2ljXCIgYW5kIFwiYmVzdCBmaXRcIiwgYW5kIFwiYmVzdCBmaXRcIi5cbiAgICAgICAgbWF0Y2hlciA9IEdldE9wdGlvbihvcHRpb25zLCAnZm9ybWF0TWF0Y2hlcicsICdzdHJpbmcnLCBuZXcgTGlzdCgnYmFzaWMnLCAnYmVzdCBmaXQnKSwgJ2Jlc3QgZml0Jyk7XG5cbiAgICAvLyBPcHRpbWl6YXRpb246IGNhY2hpbmcgdGhlIHByb2Nlc3NlZCBmb3JtYXRzIGFzIGEgb25lIHRpbWUgb3BlcmF0aW9uIGJ5XG4gICAgLy8gcmVwbGFjaW5nIHRoZSBpbml0aWFsIHN0cnVjdHVyZSBmcm9tIGxvY2FsZURhdGFcbiAgICBkYXRhTG9jYWxlRGF0YS5mb3JtYXRzID0gZm9ybWF0cztcblxuICAgIC8vIDI2LiBJZiBtYXRjaGVyIGlzIFwiYmFzaWNcIiwgdGhlblxuICAgIGlmIChtYXRjaGVyID09PSAnYmFzaWMnKVxuICAgICAgICAvLyAyNy4gTGV0IGJlc3RGb3JtYXQgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBCYXNpY0Zvcm1hdE1hdGNoZXIgYWJzdHJhY3RcbiAgICAgICAgLy8gICAgIG9wZXJhdGlvbiAoZGVmaW5lZCBiZWxvdykgd2l0aCBvcHQgYW5kIGZvcm1hdHMuXG4gICAgICAgIGJlc3RGb3JtYXQgPSBCYXNpY0Zvcm1hdE1hdGNoZXIob3B0LCBmb3JtYXRzKTtcblxuICAgIC8vIDI4LiBFbHNlXG4gICAgZWxzZVxuICAgICAgICAvLyAyOS4gTGV0IGJlc3RGb3JtYXQgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBCZXN0Rml0Rm9ybWF0TWF0Y2hlclxuICAgICAgICAvLyAgICAgYWJzdHJhY3Qgb3BlcmF0aW9uIChkZWZpbmVkIGJlbG93KSB3aXRoIG9wdCBhbmQgZm9ybWF0cy5cbiAgICAgICAgYmVzdEZvcm1hdCA9IEJlc3RGaXRGb3JtYXRNYXRjaGVyKG9wdCwgZm9ybWF0cyk7XG5cbiAgICAvLyAzMC4gRm9yIGVhY2ggcm93IGluIFRhYmxlIDMsIGV4Y2VwdCB0aGUgaGVhZGVyIHJvdywgZG9cbiAgICBmb3IgKHZhciBwcm9wIGluIGRhdGVUaW1lQ29tcG9uZW50cykge1xuICAgICAgICBpZiAoIWhvcC5jYWxsKGRhdGVUaW1lQ29tcG9uZW50cywgcHJvcCkpXG4gICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAvLyBhLiBMZXQgcHJvcCBiZSB0aGUgbmFtZSBnaXZlbiBpbiB0aGUgUHJvcGVydHkgY29sdW1uIG9mIHRoZSByb3cuXG4gICAgICAgIC8vIGIuIExldCBwRGVzYyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0T3duUHJvcGVydHldXSBpbnRlcm5hbCBtZXRob2Qgb2ZcbiAgICAgICAgLy8gICAgYmVzdEZvcm1hdCB3aXRoIGFyZ3VtZW50IHByb3AuXG4gICAgICAgIC8vIGMuIElmIHBEZXNjIGlzIG5vdCB1bmRlZmluZWQsIHRoZW5cbiAgICAgICAgaWYgKGhvcC5jYWxsKGJlc3RGb3JtYXQsIHByb3ApKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgIC8vIGkuIExldCBwIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2YgYmVzdEZvcm1hdFxuICAgICAgICAgICAgLy8gICAgd2l0aCBhcmd1bWVudCBwcm9wLlxuICAgICAgICAgICAgICAgIHAgPSBiZXN0Rm9ybWF0W3Byb3BdO1xuXG4gICAgICAgICAgICAvLyBpaS4gU2V0IHRoZSBbWzxwcm9wPl1dIGludGVybmFsIHByb3BlcnR5IG9mIGRhdGVUaW1lRm9ybWF0IHRvIHAuXG4gICAgICAgICAgICAvLyBEaXZlcmdpbmcgZnJvbSBzcGVjIGJlY3Vhc2Ugb2YgYnVnICM1OFxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvZWNtYTQwMi9pc3N1ZXMvNThcbiAgICAgICAgICAgIGludGVybmFsWydbWycrcHJvcCsnXV0nXSA9IG9wdFsnW1snK3Byb3ArJ11dJ10gfHwgcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhclxuICAgICAgICAvLyBBc3NpZ25lZCBhIHZhbHVlIGJlbG93XG4gICAgICAgIHBhdHRlcm4sXG5cbiAgICAvLyAzMS4gTGV0IGhyMTIgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBHZXRPcHRpb24gYWJzdHJhY3Qgb3BlcmF0aW9uIHdpdGhcbiAgICAvLyAgICAgYXJndW1lbnRzIG9wdGlvbnMsIFwiaG91cjEyXCIsIFwiYm9vbGVhblwiLCB1bmRlZmluZWQsIGFuZCB1bmRlZmluZWQuXG4gICAgICAgIGhyMTIgPSBHZXRPcHRpb24ob3B0aW9ucywgJ2hvdXIxMicsICdib29sZWFuJy8qLCB1bmRlZmluZWQsIHVuZGVmaW5lZCovKTtcblxuICAgIC8vIDMyLiBJZiBkYXRlVGltZUZvcm1hdCBoYXMgYW4gaW50ZXJuYWwgcHJvcGVydHkgW1tob3VyXV0sIHRoZW5cbiAgICBpZiAoaW50ZXJuYWxbJ1tbaG91cl1dJ10pIHtcbiAgICAgICAgLy8gYS4gSWYgaHIxMiBpcyB1bmRlZmluZWQsIHRoZW4gbGV0IGhyMTIgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dXG4gICAgICAgIC8vICAgIGludGVybmFsIG1ldGhvZCBvZiBkYXRhTG9jYWxlRGF0YSB3aXRoIGFyZ3VtZW50IFwiaG91cjEyXCIuXG4gICAgICAgIGhyMTIgPSBocjEyID09PSB1bmRlZmluZWQgPyBkYXRhTG9jYWxlRGF0YS5ob3VyMTIgOiBocjEyO1xuXG4gICAgICAgIC8vIGIuIFNldCB0aGUgW1tob3VyMTJdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBkYXRlVGltZUZvcm1hdCB0byBocjEyLlxuICAgICAgICBpbnRlcm5hbFsnW1tob3VyMTJdXSddID0gaHIxMjtcblxuICAgICAgICAvLyBjLiBJZiBocjEyIGlzIHRydWUsIHRoZW5cbiAgICAgICAgaWYgKGhyMTIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgLy8gaS4gTGV0IGhvdXJObzAgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgICAgICAgICAgLy8gICAgZGF0YUxvY2FsZURhdGEgd2l0aCBhcmd1bWVudCBcImhvdXJObzBcIi5cbiAgICAgICAgICAgICAgICBob3VyTm8wID0gZGF0YUxvY2FsZURhdGEuaG91ck5vMDtcblxuICAgICAgICAgICAgLy8gaWkuIFNldCB0aGUgW1tob3VyTm8wXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgZGF0ZVRpbWVGb3JtYXQgdG8gaG91ck5vMC5cbiAgICAgICAgICAgIGludGVybmFsWydbW2hvdXJObzBdXSddID0gaG91ck5vMDtcblxuICAgICAgICAgICAgLy8gaWlpLiBMZXQgcGF0dGVybiBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgICAgICAgICAvLyAgICAgIGJlc3RGb3JtYXQgd2l0aCBhcmd1bWVudCBcInBhdHRlcm4xMlwiLlxuICAgICAgICAgICAgcGF0dGVybiA9IGJlc3RGb3JtYXQucGF0dGVybjEyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZC4gRWxzZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICAvLyBpLiBMZXQgcGF0dGVybiBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgICAgICAgICAvLyAgICBiZXN0Rm9ybWF0IHdpdGggYXJndW1lbnQgXCJwYXR0ZXJuXCIuXG4gICAgICAgICAgICBwYXR0ZXJuID0gYmVzdEZvcm1hdC5wYXR0ZXJuO1xuICAgIH1cblxuICAgIC8vIDMzLiBFbHNlXG4gICAgZWxzZVxuICAgICAgICAvLyBhLiBMZXQgcGF0dGVybiBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgICAgIC8vICAgIGJlc3RGb3JtYXQgd2l0aCBhcmd1bWVudCBcInBhdHRlcm5cIi5cbiAgICAgICAgcGF0dGVybiA9IGJlc3RGb3JtYXQucGF0dGVybjtcblxuICAgIC8vIDM0LiBTZXQgdGhlIFtbcGF0dGVybl1dIGludGVybmFsIHByb3BlcnR5IG9mIGRhdGVUaW1lRm9ybWF0IHRvIHBhdHRlcm4uXG4gICAgaW50ZXJuYWxbJ1tbcGF0dGVybl1dJ10gPSBwYXR0ZXJuO1xuXG4gICAgLy8gMzUuIFNldCB0aGUgW1tib3VuZEZvcm1hdF1dIGludGVybmFsIHByb3BlcnR5IG9mIGRhdGVUaW1lRm9ybWF0IHRvIHVuZGVmaW5lZC5cbiAgICBpbnRlcm5hbFsnW1tib3VuZEZvcm1hdF1dJ10gPSB1bmRlZmluZWQ7XG5cbiAgICAvLyAzNi4gU2V0IHRoZSBbW2luaXRpYWxpemVkRGF0ZVRpbWVGb3JtYXRdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBkYXRlVGltZUZvcm1hdCB0b1xuICAgIC8vICAgICB0cnVlLlxuICAgIGludGVybmFsWydbW2luaXRpYWxpemVkRGF0ZVRpbWVGb3JtYXRdXSddID0gdHJ1ZTtcblxuICAgIC8vIEluIEVTMywgd2UgbmVlZCB0byBwcmUtYmluZCB0aGUgZm9ybWF0KCkgZnVuY3Rpb25cbiAgICBpZiAoZXMzKVxuICAgICAgICBkYXRlVGltZUZvcm1hdC5mb3JtYXQgPSBHZXRGb3JtYXREYXRlVGltZS5jYWxsKGRhdGVUaW1lRm9ybWF0KTtcblxuICAgIC8vIFJlc3RvcmUgdGhlIFJlZ0V4cCBwcm9wZXJ0aWVzXG4gICAgcmVnZXhwU3RhdGUuZXhwLnRlc3QocmVnZXhwU3RhdGUuaW5wdXQpO1xuXG4gICAgLy8gUmV0dXJuIHRoZSBuZXdseSBpbml0aWFsaXNlZCBvYmplY3RcbiAgICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQ7XG59XG5cbi8qKlxuICogU2V2ZXJhbCBEYXRlVGltZUZvcm1hdCBhbGdvcml0aG1zIHVzZSB2YWx1ZXMgZnJvbSB0aGUgZm9sbG93aW5nIHRhYmxlLCB3aGljaCBwcm92aWRlc1xuICogcHJvcGVydHkgbmFtZXMgYW5kIGFsbG93YWJsZSB2YWx1ZXMgZm9yIHRoZSBjb21wb25lbnRzIG9mIGRhdGUgYW5kIHRpbWUgZm9ybWF0czpcbiAqL1xudmFyIGRhdGVUaW1lQ29tcG9uZW50cyA9IHtcbiAgICAgICAgIHdlZWtkYXk6IFsgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIiBdLFxuICAgICAgICAgICAgIGVyYTogWyBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiIF0sXG4gICAgICAgICAgICB5ZWFyOiBbIFwiMi1kaWdpdFwiLCBcIm51bWVyaWNcIiBdLFxuICAgICAgICAgICBtb250aDogWyBcIjItZGlnaXRcIiwgXCJudW1lcmljXCIsIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCIgXSxcbiAgICAgICAgICAgICBkYXk6IFsgXCIyLWRpZ2l0XCIsIFwibnVtZXJpY1wiIF0sXG4gICAgICAgICAgICBob3VyOiBbIFwiMi1kaWdpdFwiLCBcIm51bWVyaWNcIiBdLFxuICAgICAgICAgIG1pbnV0ZTogWyBcIjItZGlnaXRcIiwgXCJudW1lcmljXCIgXSxcbiAgICAgICAgICBzZWNvbmQ6IFsgXCIyLWRpZ2l0XCIsIFwibnVtZXJpY1wiIF0sXG4gICAgdGltZVpvbmVOYW1lOiBbIFwic2hvcnRcIiwgXCJsb25nXCIgXVxufTtcblxuLyoqXG4gKiBXaGVuIHRoZSBUb0RhdGVUaW1lT3B0aW9ucyBhYnN0cmFjdCBvcGVyYXRpb24gaXMgY2FsbGVkIHdpdGggYXJndW1lbnRzIG9wdGlvbnMsXG4gKiByZXF1aXJlZCwgYW5kIGRlZmF1bHRzLCB0aGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuZnVuY3Rpb24gVG9EYXRlVGltZUZvcm1hdHMoZm9ybWF0cykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZm9ybWF0cykgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdHM7XG4gICAgfVxuICAgIHJldHVybiBzcmMkY2xkciQkLmNyZWF0ZURhdGVUaW1lRm9ybWF0cyhmb3JtYXRzKTtcbn1cblxuLyoqXG4gKiBXaGVuIHRoZSBUb0RhdGVUaW1lT3B0aW9ucyBhYnN0cmFjdCBvcGVyYXRpb24gaXMgY2FsbGVkIHdpdGggYXJndW1lbnRzIG9wdGlvbnMsXG4gKiByZXF1aXJlZCwgYW5kIGRlZmF1bHRzLCB0aGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuZnVuY3Rpb24gVG9EYXRlVGltZU9wdGlvbnMgKG9wdGlvbnMsIHJlcXVpcmVkLCBkZWZhdWx0cykge1xuICAgIC8vIDEuIElmIG9wdGlvbnMgaXMgdW5kZWZpbmVkLCB0aGVuIGxldCBvcHRpb25zIGJlIG51bGwsIGVsc2UgbGV0IG9wdGlvbnMgYmVcbiAgICAvLyAgICBUb09iamVjdChvcHRpb25zKS5cbiAgICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICBvcHRpb25zID0gbnVsbDtcblxuICAgIGVsc2Uge1xuICAgICAgICAvLyAoIzEyKSBvcHRpb25zIG5lZWRzIHRvIGJlIGEgUmVjb3JkLCBidXQgaXQgYWxzbyBuZWVkcyB0byBpbmhlcml0IHByb3BlcnRpZXNcbiAgICAgICAgdmFyIG9wdDIgPSB0b09iamVjdChvcHRpb25zKTtcbiAgICAgICAgb3B0aW9ucyA9IG5ldyBSZWNvcmQoKTtcblxuICAgICAgICBmb3IgKHZhciBrIGluIG9wdDIpXG4gICAgICAgICAgICBvcHRpb25zW2tdID0gb3B0MltrXTtcbiAgICB9XG5cbiAgICB2YXJcbiAgICAvLyAyLiBMZXQgY3JlYXRlIGJlIHRoZSBzdGFuZGFyZCBidWlsdC1pbiBmdW5jdGlvbiBvYmplY3QgZGVmaW5lZCBpbiBFUzUsIDE1LjIuMy41LlxuICAgICAgICBjcmVhdGUgPSBvYmpDcmVhdGUsXG5cbiAgICAvLyAzLiBMZXQgb3B0aW9ucyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ2FsbF1dIGludGVybmFsIG1ldGhvZCBvZiBjcmVhdGUgd2l0aFxuICAgIC8vICAgIHVuZGVmaW5lZCBhcyB0aGUgdGhpcyB2YWx1ZSBhbmQgYW4gYXJndW1lbnQgbGlzdCBjb250YWluaW5nIHRoZSBzaW5nbGUgaXRlbVxuICAgIC8vICAgIG9wdGlvbnMuXG4gICAgICAgIG9wdGlvbnMgPSBjcmVhdGUob3B0aW9ucyksXG5cbiAgICAvLyA0LiBMZXQgbmVlZERlZmF1bHRzIGJlIHRydWUuXG4gICAgICAgIG5lZWREZWZhdWx0cyA9IHRydWU7XG5cbiAgICAvLyA1LiBJZiByZXF1aXJlZCBpcyBcImRhdGVcIiBvciBcImFueVwiLCB0aGVuXG4gICAgaWYgKHJlcXVpcmVkID09PSAnZGF0ZScgfHwgcmVxdWlyZWQgPT09ICdhbnknKSB7XG4gICAgICAgIC8vIGEuIEZvciBlYWNoIG9mIHRoZSBwcm9wZXJ0eSBuYW1lcyBcIndlZWtkYXlcIiwgXCJ5ZWFyXCIsIFwibW9udGhcIiwgXCJkYXlcIjpcbiAgICAgICAgICAgIC8vIGkuIElmIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2Ygb3B0aW9ucyB3aXRoIHRoZVxuICAgICAgICAgICAgLy8gICAgcHJvcGVydHkgbmFtZSBpcyBub3QgdW5kZWZpbmVkLCB0aGVuIGxldCBuZWVkRGVmYXVsdHMgYmUgZmFsc2UuXG4gICAgICAgIGlmIChvcHRpb25zLndlZWtkYXkgIT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnllYXIgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIHx8IG9wdGlvbnMubW9udGggIT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLmRheSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgbmVlZERlZmF1bHRzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gNi4gSWYgcmVxdWlyZWQgaXMgXCJ0aW1lXCIgb3IgXCJhbnlcIiwgdGhlblxuICAgIGlmIChyZXF1aXJlZCA9PT0gJ3RpbWUnIHx8IHJlcXVpcmVkID09PSAnYW55Jykge1xuICAgICAgICAvLyBhLiBGb3IgZWFjaCBvZiB0aGUgcHJvcGVydHkgbmFtZXMgXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCI6XG4gICAgICAgICAgICAvLyBpLiBJZiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIG9wdGlvbnMgd2l0aCB0aGVcbiAgICAgICAgICAgIC8vICAgIHByb3BlcnR5IG5hbWUgaXMgbm90IHVuZGVmaW5lZCwgdGhlbiBsZXQgbmVlZERlZmF1bHRzIGJlIGZhbHNlLlxuICAgICAgICBpZiAob3B0aW9ucy5ob3VyICE9PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5taW51dGUgIT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnNlY29uZCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIG5lZWREZWZhdWx0cyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDcuIElmIG5lZWREZWZhdWx0cyBpcyB0cnVlIGFuZCBkZWZhdWx0cyBpcyBlaXRoZXIgXCJkYXRlXCIgb3IgXCJhbGxcIiwgdGhlblxuICAgIGlmIChuZWVkRGVmYXVsdHMgJiYgKGRlZmF1bHRzID09PSAnZGF0ZScgfHwgZGVmYXVsdHMgPT09ICdhbGwnKSlcbiAgICAgICAgLy8gYS4gRm9yIGVhY2ggb2YgdGhlIHByb3BlcnR5IG5hbWVzIFwieWVhclwiLCBcIm1vbnRoXCIsIFwiZGF5XCI6XG4gICAgICAgICAgICAvLyBpLiBDYWxsIHRoZSBbW0RlZmluZU93blByb3BlcnR5XV0gaW50ZXJuYWwgbWV0aG9kIG9mIG9wdGlvbnMgd2l0aCB0aGVcbiAgICAgICAgICAgIC8vICAgIHByb3BlcnR5IG5hbWUsIFByb3BlcnR5IERlc2NyaXB0b3Ige1tbVmFsdWVdXTogXCJudW1lcmljXCIsIFtbV3JpdGFibGVdXTpcbiAgICAgICAgICAgIC8vICAgIHRydWUsIFtbRW51bWVyYWJsZV1dOiB0cnVlLCBbW0NvbmZpZ3VyYWJsZV1dOiB0cnVlfSwgYW5kIGZhbHNlLlxuICAgICAgICBvcHRpb25zLnllYXIgPSBvcHRpb25zLm1vbnRoID0gb3B0aW9ucy5kYXkgPSAnbnVtZXJpYyc7XG5cbiAgICAvLyA4LiBJZiBuZWVkRGVmYXVsdHMgaXMgdHJ1ZSBhbmQgZGVmYXVsdHMgaXMgZWl0aGVyIFwidGltZVwiIG9yIFwiYWxsXCIsIHRoZW5cbiAgICBpZiAobmVlZERlZmF1bHRzICYmIChkZWZhdWx0cyA9PT0gJ3RpbWUnIHx8IGRlZmF1bHRzID09PSAnYWxsJykpXG4gICAgICAgIC8vIGEuIEZvciBlYWNoIG9mIHRoZSBwcm9wZXJ0eSBuYW1lcyBcImhvdXJcIiwgXCJtaW51dGVcIiwgXCJzZWNvbmRcIjpcbiAgICAgICAgICAgIC8vIGkuIENhbGwgdGhlIFtbRGVmaW5lT3duUHJvcGVydHldXSBpbnRlcm5hbCBtZXRob2Qgb2Ygb3B0aW9ucyB3aXRoIHRoZVxuICAgICAgICAgICAgLy8gICAgcHJvcGVydHkgbmFtZSwgUHJvcGVydHkgRGVzY3JpcHRvciB7W1tWYWx1ZV1dOiBcIm51bWVyaWNcIiwgW1tXcml0YWJsZV1dOlxuICAgICAgICAgICAgLy8gICAgdHJ1ZSwgW1tFbnVtZXJhYmxlXV06IHRydWUsIFtbQ29uZmlndXJhYmxlXV06IHRydWV9LCBhbmQgZmFsc2UuXG4gICAgICAgIG9wdGlvbnMuaG91ciA9IG9wdGlvbnMubWludXRlID0gb3B0aW9ucy5zZWNvbmQgPSAnbnVtZXJpYyc7XG5cbiAgICAvLyA5LiBSZXR1cm4gb3B0aW9ucy5cbiAgICByZXR1cm4gb3B0aW9ucztcbn1cblxuLyoqXG4gKiBXaGVuIHRoZSBCYXNpY0Zvcm1hdE1hdGNoZXIgYWJzdHJhY3Qgb3BlcmF0aW9uIGlzIGNhbGxlZCB3aXRoIHR3byBhcmd1bWVudHMgb3B0aW9ucyBhbmRcbiAqIGZvcm1hdHMsIHRoZSBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICovXG5mdW5jdGlvbiBCYXNpY0Zvcm1hdE1hdGNoZXIgKG9wdGlvbnMsIGZvcm1hdHMpIHtcbiAgICByZXR1cm4gY2FsY3VsYXRlU2NvcmUob3B0aW9ucywgZm9ybWF0cyk7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyBzY29yZSBmb3IgQmVzdEZpdEZvcm1hdE1hdGNoZXIgYW5kIEJhc2ljRm9ybWF0TWF0Y2hlci5cbiAqIEFic3RyYWN0ZWQgZnJvbSBCYXNpY0Zvcm1hdE1hdGNoZXIgc2VjdGlvbi5cbiAqL1xuZnVuY3Rpb24gY2FsY3VsYXRlU2NvcmUgKG9wdGlvbnMsIGZvcm1hdHMsIGJlc3RGaXQpIHtcbiAgICB2YXJcbiAgICAvLyBBZGRpdGlvbmFsIHBlbmFsdHkgdHlwZSB3aGVuIGJlc3RGaXQgPT09IHRydWVcbiAgICAgICBkaWZmRGF0YVR5cGVQZW5hbHR5ID0gOCxcblxuICAgIC8vIDEuIExldCByZW1vdmFsUGVuYWx0eSBiZSAxMjAuXG4gICAgICAgIHJlbW92YWxQZW5hbHR5ID0gMTIwLFxuXG4gICAgLy8gMi4gTGV0IGFkZGl0aW9uUGVuYWx0eSBiZSAyMC5cbiAgICAgICAgYWRkaXRpb25QZW5hbHR5ID0gMjAsXG5cbiAgICAvLyAzLiBMZXQgbG9uZ0xlc3NQZW5hbHR5IGJlIDguXG4gICAgICAgIGxvbmdMZXNzUGVuYWx0eSA9IDgsXG5cbiAgICAvLyA0LiBMZXQgbG9uZ01vcmVQZW5hbHR5IGJlIDYuXG4gICAgICAgIGxvbmdNb3JlUGVuYWx0eSA9IDYsXG5cbiAgICAvLyA1LiBMZXQgc2hvcnRMZXNzUGVuYWx0eSBiZSA2LlxuICAgICAgICBzaG9ydExlc3NQZW5hbHR5ID0gNixcblxuICAgIC8vIDYuIExldCBzaG9ydE1vcmVQZW5hbHR5IGJlIDMuXG4gICAgICAgIHNob3J0TW9yZVBlbmFsdHkgPSAzLFxuXG4gICAgLy8gNy4gTGV0IGJlc3RTY29yZSBiZSAtSW5maW5pdHkuXG4gICAgICAgIGJlc3RTY29yZSA9IC1JbmZpbml0eSxcblxuICAgIC8vIDguIExldCBiZXN0Rm9ybWF0IGJlIHVuZGVmaW5lZC5cbiAgICAgICAgYmVzdEZvcm1hdCxcblxuICAgIC8vIDkuIExldCBpIGJlIDAuXG4gICAgICAgIGkgPSAwLFxuXG4gICAgLy8gMTAuIExldCBsZW4gYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZiBmb3JtYXRzIHdpdGggYXJndW1lbnQgXCJsZW5ndGhcIi5cbiAgICAgICAgbGVuID0gZm9ybWF0cy5sZW5ndGg7XG5cbiAgICAvLyAxMS4gUmVwZWF0IHdoaWxlIGkgPCBsZW46XG4gICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgICAgdmFyXG4gICAgICAgIC8vIGEuIExldCBmb3JtYXQgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZiBmb3JtYXRzIHdpdGggYXJndW1lbnQgVG9TdHJpbmcoaSkuXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXRzW2ldLFxuXG4gICAgICAgIC8vIGIuIExldCBzY29yZSBiZSAwLlxuICAgICAgICAgICAgc2NvcmUgPSAwO1xuXG4gICAgICAgIC8vIGMuIEZvciBlYWNoIHByb3BlcnR5IHNob3duIGluIFRhYmxlIDM6XG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIGRhdGVUaW1lQ29tcG9uZW50cykge1xuICAgICAgICAgICAgaWYgKCFob3AuY2FsbChkYXRlVGltZUNvbXBvbmVudHMsIHByb3BlcnR5KSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAvLyBpLiBMZXQgb3B0aW9uc1Byb3AgYmUgb3B0aW9ucy5bWzxwcm9wZXJ0eT5dXS5cbiAgICAgICAgICAgICAgICBvcHRpb25zUHJvcCA9IG9wdGlvbnNbJ1tbJysgcHJvcGVydHkgKyddXSddLFxuXG4gICAgICAgICAgICAvLyBpaS4gTGV0IGZvcm1hdFByb3BEZXNjIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRPd25Qcm9wZXJ0eV1dIGludGVybmFsIG1ldGhvZCBvZiBmb3JtYXRcbiAgICAgICAgICAgIC8vICAgICB3aXRoIGFyZ3VtZW50IHByb3BlcnR5LlxuICAgICAgICAgICAgLy8gaWlpLiBJZiBmb3JtYXRQcm9wRGVzYyBpcyBub3QgdW5kZWZpbmVkLCB0aGVuXG4gICAgICAgICAgICAvLyAgICAgMS4gTGV0IGZvcm1hdFByb3AgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZiBmb3JtYXQgd2l0aCBhcmd1bWVudCBwcm9wZXJ0eS5cbiAgICAgICAgICAgICAgICBmb3JtYXRQcm9wID0gaG9wLmNhbGwoZm9ybWF0LCBwcm9wZXJ0eSkgPyBmb3JtYXRbcHJvcGVydHldIDogdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAvLyBpdi4gSWYgb3B0aW9uc1Byb3AgaXMgdW5kZWZpbmVkIGFuZCBmb3JtYXRQcm9wIGlzIG5vdCB1bmRlZmluZWQsIHRoZW4gZGVjcmVhc2Ugc2NvcmUgYnlcbiAgICAgICAgICAgIC8vICAgICBhZGRpdGlvblBlbmFsdHkuXG4gICAgICAgICAgICBpZiAob3B0aW9uc1Byb3AgPT09IHVuZGVmaW5lZCAmJiBmb3JtYXRQcm9wICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgc2NvcmUgLT0gYWRkaXRpb25QZW5hbHR5O1xuXG4gICAgICAgICAgICAvLyB2LiBFbHNlIGlmIG9wdGlvbnNQcm9wIGlzIG5vdCB1bmRlZmluZWQgYW5kIGZvcm1hdFByb3AgaXMgdW5kZWZpbmVkLCB0aGVuIGRlY3JlYXNlIHNjb3JlIGJ5XG4gICAgICAgICAgICAvLyAgICByZW1vdmFsUGVuYWx0eS5cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnNQcm9wICE9PSB1bmRlZmluZWQgJiYgZm9ybWF0UHJvcCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHNjb3JlIC09IHJlbW92YWxQZW5hbHR5O1xuXG4gICAgICAgICAgICAvLyB2aS4gRWxzZVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICAgLy8gMS4gTGV0IHZhbHVlcyBiZSB0aGUgYXJyYXkgW1wiMi1kaWdpdFwiLCBcIm51bWVyaWNcIiwgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLFxuICAgICAgICAgICAgICAgIC8vICAgIFwibG9uZ1wiXS5cbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gWyAnMi1kaWdpdCcsICdudW1lcmljJywgJ25hcnJvdycsICdzaG9ydCcsICdsb25nJyBdLFxuXG4gICAgICAgICAgICAgICAgLy8gMi4gTGV0IG9wdGlvbnNQcm9wSW5kZXggYmUgdGhlIGluZGV4IG9mIG9wdGlvbnNQcm9wIHdpdGhpbiB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNQcm9wSW5kZXggPSBhcnJJbmRleE9mLmNhbGwodmFsdWVzLCBvcHRpb25zUHJvcCksXG5cbiAgICAgICAgICAgICAgICAvLyAzLiBMZXQgZm9ybWF0UHJvcEluZGV4IGJlIHRoZSBpbmRleCBvZiBmb3JtYXRQcm9wIHdpdGhpbiB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdFByb3BJbmRleCA9IGFyckluZGV4T2YuY2FsbCh2YWx1ZXMsIGZvcm1hdFByb3ApLFxuXG4gICAgICAgICAgICAgICAgLy8gNC4gTGV0IGRlbHRhIGJlIG1heChtaW4oZm9ybWF0UHJvcEluZGV4IC0gb3B0aW9uc1Byb3BJbmRleCwgMiksIC0yKS5cbiAgICAgICAgICAgICAgICAgICAgZGVsdGEgPSBNYXRoLm1heChNYXRoLm1pbihmb3JtYXRQcm9wSW5kZXggLSBvcHRpb25zUHJvcEluZGV4LCAyKSwgLTIpO1xuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiB0aGUgYmVzdEZpdCBhcmd1bWVudCBpcyB0cnVlLCBzdWJ0cmFjdCBhZGRpdGlvbmFsIHBlbmFsdHkgd2hlcmUgZGF0YSB0eXBlcyBhcmUgbm90IHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgaWYgKGJlc3RGaXQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAoKG9wdGlvbnNQcm9wID09PSAnbnVtZXJpYycgfHwgb3B0aW9uc1Byb3AgPT09ICcyLWRpZ2l0JykgJiYgKGZvcm1hdFByb3AgIT09ICdudW1lcmljJyAmJiBmb3JtYXRQcm9wICE9PSAnMi1kaWdpdCcpIHx8IChvcHRpb25zUHJvcCAhPT0gJ251bWVyaWMnICYmIG9wdGlvbnNQcm9wICE9PSAnMi1kaWdpdCcpICYmIChmb3JtYXRQcm9wID09PSAnMi1kaWdpdCcgfHwgZm9ybWF0UHJvcCA9PT0gJ251bWVyaWMnKSlcbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICBzY29yZSAtPSBkaWZmRGF0YVR5cGVQZW5hbHR5O1xuXG4gICAgICAgICAgICAgICAgLy8gNS4gSWYgZGVsdGEgPSAyLCBkZWNyZWFzZSBzY29yZSBieSBsb25nTW9yZVBlbmFsdHkuXG4gICAgICAgICAgICAgICAgaWYgKGRlbHRhID09PSAyKVxuICAgICAgICAgICAgICAgICAgICBzY29yZSAtPSBsb25nTW9yZVBlbmFsdHk7XG5cbiAgICAgICAgICAgICAgICAvLyA2LiBFbHNlIGlmIGRlbHRhID0gMSwgZGVjcmVhc2Ugc2NvcmUgYnkgc2hvcnRNb3JlUGVuYWx0eS5cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkZWx0YSA9PT0gMSlcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgLT0gc2hvcnRNb3JlUGVuYWx0eTtcblxuICAgICAgICAgICAgICAgIC8vIDcuIEVsc2UgaWYgZGVsdGEgPSAtMSwgZGVjcmVhc2Ugc2NvcmUgYnkgc2hvcnRMZXNzUGVuYWx0eS5cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkZWx0YSA9PT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlIC09IHNob3J0TGVzc1BlbmFsdHk7XG5cbiAgICAgICAgICAgICAgICAvLyA4LiBFbHNlIGlmIGRlbHRhID0gLTIsIGRlY3JlYXNlIHNjb3JlIGJ5IGxvbmdMZXNzUGVuYWx0eS5cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkZWx0YSA9PT0gLTIpXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlIC09IGxvbmdMZXNzUGVuYWx0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGQuIElmIHNjb3JlID4gYmVzdFNjb3JlLCB0aGVuXG4gICAgICAgIGlmIChzY29yZSA+IGJlc3RTY29yZSkge1xuICAgICAgICAgICAgLy8gaS4gTGV0IGJlc3RTY29yZSBiZSBzY29yZS5cbiAgICAgICAgICAgIGJlc3RTY29yZSA9IHNjb3JlO1xuXG4gICAgICAgICAgICAvLyBpaS4gTGV0IGJlc3RGb3JtYXQgYmUgZm9ybWF0LlxuICAgICAgICAgICAgYmVzdEZvcm1hdCA9IGZvcm1hdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGUuIEluY3JlYXNlIGkgYnkgMS5cbiAgICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIDEyLiBSZXR1cm4gYmVzdEZvcm1hdC5cbiAgICByZXR1cm4gYmVzdEZvcm1hdDtcbn1cblxuLyoqXG4gKiBXaGVuIHRoZSBCZXN0Rml0Rm9ybWF0TWF0Y2hlciBhYnN0cmFjdCBvcGVyYXRpb24gaXMgY2FsbGVkIHdpdGggdHdvIGFyZ3VtZW50cyBvcHRpb25zXG4gKiBhbmQgZm9ybWF0cywgaXQgcGVyZm9ybXMgaW1wbGVtZW50YXRpb24gZGVwZW5kZW50IHN0ZXBzLCB3aGljaCBzaG91bGQgcmV0dXJuIGEgc2V0IG9mXG4gKiBjb21wb25lbnQgcmVwcmVzZW50YXRpb25zIHRoYXQgYSB0eXBpY2FsIHVzZXIgb2YgdGhlIHNlbGVjdGVkIGxvY2FsZSB3b3VsZCBwZXJjZWl2ZSBhc1xuICogYXQgbGVhc3QgYXMgZ29vZCBhcyB0aGUgb25lIHJldHVybmVkIGJ5IEJhc2ljRm9ybWF0TWF0Y2hlci5cbiAqXG4gKiBUaGlzIHBvbHlmaWxsIGRlZmluZXMgdGhlIGFsZ29yaXRobSB0byBiZSB0aGUgc2FtZSBhcyBCYXNpY0Zvcm1hdE1hdGNoZXIsXG4gKiB3aXRoIHRoZSBhZGRpdGlvbiBvZiBib251cyBwb2ludHMgYXdhcmRlZCB3aGVyZSB0aGUgcmVxdWVzdGVkIGZvcm1hdCBpcyBvZlxuICogdGhlIHNhbWUgZGF0YSB0eXBlIGFzIHRoZSBwb3RlbnRpYWxseSBtYXRjaGluZyBmb3JtYXQuXG4gKlxuICogRm9yIGV4YW1wbGUsXG4gKlxuICogICAgIHsgbW9udGg6ICdudW1lcmljJywgZGF5OiAnbnVtZXJpYycgfVxuICpcbiAqIHNob3VsZCBtYXRjaFxuICpcbiAqICAgICB7IG1vbnRoOiAnMi1kaWdpdCcsIGRheTogJzItZGlnaXQnIH1cbiAqXG4gKiByYXRoZXIgdGhhblxuICpcbiAqICAgICB7IG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJyB9XG4gKlxuICogVGhpcyBtYWtlcyBzZW5zZSBiZWNhdXNlIGEgdXNlciByZXF1ZXN0aW5nIGEgZm9ybWF0dGVkIGRhdGUgd2l0aCBudW1lcmljIHBhcnRzIHdvdWxkXG4gKiBub3QgZXhwZWN0IHRvIHNlZSB0aGUgcmV0dXJuZWQgZm9ybWF0IGNvbnRhaW5pbmcgbmFycm93LCBzaG9ydCBvciBsb25nIHBhcnQgbmFtZXNcbiAqL1xuZnVuY3Rpb24gQmVzdEZpdEZvcm1hdE1hdGNoZXIgKG9wdGlvbnMsIGZvcm1hdHMpIHtcbiAgICByZXR1cm4gY2FsY3VsYXRlU2NvcmUob3B0aW9ucywgZm9ybWF0cywgdHJ1ZSk7XG59XG5cbi8qIDEyLjIuMyAqL2ludGVybmFscy5EYXRlVGltZUZvcm1hdCA9IHtcbiAgICAnW1thdmFpbGFibGVMb2NhbGVzXV0nOiBbXSxcbiAgICAnW1tyZWxldmFudEV4dGVuc2lvbktleXNdXSc6IFsnY2EnLCAnbnUnXSxcbiAgICAnW1tsb2NhbGVEYXRhXV0nOiB7fVxufTtcblxuLyoqXG4gKiBXaGVuIHRoZSBzdXBwb3J0ZWRMb2NhbGVzT2YgbWV0aG9kIG9mIEludGwuRGF0ZVRpbWVGb3JtYXQgaXMgY2FsbGVkLCB0aGVcbiAqIGZvbGxvd2luZyBzdGVwcyBhcmUgdGFrZW46XG4gKi9cbi8qIDEyLjIuMiAqL2RlZmluZVByb3BlcnR5KEludGwuRGF0ZVRpbWVGb3JtYXQsICdzdXBwb3J0ZWRMb2NhbGVzT2YnLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmbkJpbmQuY2FsbChzdXBwb3J0ZWRMb2NhbGVzT2YsIGludGVybmFscy5EYXRlVGltZUZvcm1hdClcbn0pO1xuXG4vKipcbiAqIFRoaXMgbmFtZWQgYWNjZXNzb3IgcHJvcGVydHkgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgZm9ybWF0cyBhIG51bWJlclxuICogYWNjb3JkaW5nIHRvIHRoZSBlZmZlY3RpdmUgbG9jYWxlIGFuZCB0aGUgZm9ybWF0dGluZyBvcHRpb25zIG9mIHRoaXNcbiAqIERhdGVUaW1lRm9ybWF0IG9iamVjdC5cbiAqL1xuLyogMTIuMy4yICovZGVmaW5lUHJvcGVydHkoSW50bC5EYXRlVGltZUZvcm1hdC5wcm90b3R5cGUsICdmb3JtYXQnLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogR2V0Rm9ybWF0RGF0ZVRpbWVcbn0pO1xuXG5mdW5jdGlvbiBHZXRGb3JtYXREYXRlVGltZSgpIHtcbiAgICB2YXIgaW50ZXJuYWwgPSB0aGlzICE9IG51bGwgJiYgdHlwZW9mIHRoaXMgPT09ICdvYmplY3QnICYmIGdldEludGVybmFsUHJvcGVydGllcyh0aGlzKTtcblxuICAgIC8vIFNhdGlzZnkgdGVzdCAxMi4zX2JcbiAgICBpZiAoIWludGVybmFsIHx8ICFpbnRlcm5hbFsnW1tpbml0aWFsaXplZERhdGVUaW1lRm9ybWF0XV0nXSlcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYHRoaXNgIHZhbHVlIGZvciBmb3JtYXQoKSBpcyBub3QgYW4gaW5pdGlhbGl6ZWQgSW50bC5EYXRlVGltZUZvcm1hdCBvYmplY3QuJyk7XG5cbiAgICAvLyBUaGUgdmFsdWUgb2YgdGhlIFtbR2V0XV0gYXR0cmlidXRlIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgZm9sbG93aW5nXG4gICAgLy8gc3RlcHM6XG5cbiAgICAvLyAxLiBJZiB0aGUgW1tib3VuZEZvcm1hdF1dIGludGVybmFsIHByb3BlcnR5IG9mIHRoaXMgRGF0ZVRpbWVGb3JtYXQgb2JqZWN0XG4gICAgLy8gICAgaXMgdW5kZWZpbmVkLCB0aGVuOlxuICAgIGlmIChpbnRlcm5hbFsnW1tib3VuZEZvcm1hdF1dJ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXJcbiAgICAgICAgLy8gYS4gTGV0IEYgYmUgYSBGdW5jdGlvbiBvYmplY3QsIHdpdGggaW50ZXJuYWwgcHJvcGVydGllcyBzZXQgYXNcbiAgICAgICAgLy8gICAgc3BlY2lmaWVkIGZvciBidWlsdC1pbiBmdW5jdGlvbnMgaW4gRVM1LCAxNSwgb3Igc3VjY2Vzc29yLCBhbmQgdGhlXG4gICAgICAgIC8vICAgIGxlbmd0aCBwcm9wZXJ0eSBzZXQgdG8gMCwgdGhhdCB0YWtlcyB0aGUgYXJndW1lbnQgZGF0ZSBhbmRcbiAgICAgICAgLy8gICAgcGVyZm9ybXMgdGhlIGZvbGxvd2luZyBzdGVwczpcbiAgICAgICAgICAgIEYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gICBpLiBJZiBkYXRlIGlzIG5vdCBwcm92aWRlZCBvciBpcyB1bmRlZmluZWQsIHRoZW4gbGV0IHggYmUgdGhlXG4gICAgICAgICAgICAgICAgLy8gICAgICByZXN1bHQgYXMgaWYgYnkgdGhlIGV4cHJlc3Npb24gRGF0ZS5ub3coKSB3aGVyZSBEYXRlLm5vdyBpc1xuICAgICAgICAgICAgICAgIC8vICAgICAgdGhlIHN0YW5kYXJkIGJ1aWx0LWluIGZ1bmN0aW9uIGRlZmluZWQgaW4gRVM1LCAxNS45LjQuNC5cbiAgICAgICAgICAgICAgICAvLyAgaWkuIEVsc2UgbGV0IHggYmUgVG9OdW1iZXIoZGF0ZSkuXG4gICAgICAgICAgICAgICAgLy8gaWlpLiBSZXR1cm4gdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBGb3JtYXREYXRlVGltZSBhYnN0cmFjdFxuICAgICAgICAgICAgICAgIC8vICAgICAgb3BlcmF0aW9uIChkZWZpbmVkIGJlbG93KSB3aXRoIGFyZ3VtZW50cyB0aGlzIGFuZCB4LlxuICAgICAgICAgICAgICAgIHZhciB4ID0gTnVtYmVyKGFyZ3VtZW50cy5sZW5ndGggPT09IDAgPyBEYXRlLm5vdygpIDogYXJndW1lbnRzWzBdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gRm9ybWF0RGF0ZVRpbWUodGhpcywgeCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAvLyBiLiBMZXQgYmluZCBiZSB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gZnVuY3Rpb24gb2JqZWN0IGRlZmluZWQgaW4gRVM1LFxuICAgICAgICAvLyAgICAxNS4zLjQuNS5cbiAgICAgICAgLy8gYy4gTGV0IGJmIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tDYWxsXV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgICAgIC8vICAgIGJpbmQgd2l0aCBGIGFzIHRoZSB0aGlzIHZhbHVlIGFuZCBhbiBhcmd1bWVudCBsaXN0IGNvbnRhaW5pbmdcbiAgICAgICAgLy8gICAgdGhlIHNpbmdsZSBpdGVtIHRoaXMuXG4gICAgICAgICAgICBiZiA9IGZuQmluZC5jYWxsKEYsIHRoaXMpO1xuICAgICAgICAvLyBkLiBTZXQgdGhlIFtbYm91bmRGb3JtYXRdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiB0aGlzIE51bWJlckZvcm1hdFxuICAgICAgICAvLyAgICBvYmplY3QgdG8gYmYuXG4gICAgICAgIGludGVybmFsWydbW2JvdW5kRm9ybWF0XV0nXSA9IGJmO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gdGhlIHZhbHVlIG9mIHRoZSBbW2JvdW5kRm9ybWF0XV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgdGhpc1xuICAgIC8vIE51bWJlckZvcm1hdCBvYmplY3QuXG4gICAgcmV0dXJuIGludGVybmFsWydbW2JvdW5kRm9ybWF0XV0nXTtcbn1cblxuLyoqXG4gKiBXaGVuIHRoZSBGb3JtYXREYXRlVGltZSBhYnN0cmFjdCBvcGVyYXRpb24gaXMgY2FsbGVkIHdpdGggYXJndW1lbnRzIGRhdGVUaW1lRm9ybWF0XG4gKiAod2hpY2ggbXVzdCBiZSBhbiBvYmplY3QgaW5pdGlhbGl6ZWQgYXMgYSBEYXRlVGltZUZvcm1hdCkgYW5kIHggKHdoaWNoIG11c3QgYmUgYSBOdW1iZXJcbiAqIHZhbHVlKSwgaXQgcmV0dXJucyBhIFN0cmluZyB2YWx1ZSByZXByZXNlbnRpbmcgeCAoaW50ZXJwcmV0ZWQgYXMgYSB0aW1lIHZhbHVlIGFzXG4gKiBzcGVjaWZpZWQgaW4gRVM1LCAxNS45LjEuMSkgYWNjb3JkaW5nIHRvIHRoZSBlZmZlY3RpdmUgbG9jYWxlIGFuZCB0aGUgZm9ybWF0dGluZ1xuICogb3B0aW9ucyBvZiBkYXRlVGltZUZvcm1hdC5cbiAqL1xuZnVuY3Rpb24gRm9ybWF0RGF0ZVRpbWUoZGF0ZVRpbWVGb3JtYXQsIHgpIHtcbiAgICAvLyAxLiBJZiB4IGlzIG5vdCBhIGZpbml0ZSBOdW1iZXIsIHRoZW4gdGhyb3cgYSBSYW5nZUVycm9yIGV4Y2VwdGlvbi5cbiAgICBpZiAoIWlzRmluaXRlKHgpKVxuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB2YWxpZCBkYXRlIHBhc3NlZCB0byBmb3JtYXQnKTtcblxuICAgIHZhclxuICAgICAgICBpbnRlcm5hbCA9IGRhdGVUaW1lRm9ybWF0Ll9fZ2V0SW50ZXJuYWxQcm9wZXJ0aWVzKHNlY3JldCksXG5cbiAgICAvLyBDcmVhdGluZyByZXN0b3JlIHBvaW50IGZvciBwcm9wZXJ0aWVzIG9uIHRoZSBSZWdFeHAgb2JqZWN0Li4uIHBsZWFzZSB3YWl0XG4gICAgICAgIHJlZ2V4cFN0YXRlID0gY3JlYXRlUmVnRXhwUmVzdG9yZSgpLFxuXG4gICAgLy8gMi4gTGV0IGxvY2FsZSBiZSB0aGUgdmFsdWUgb2YgdGhlIFtbbG9jYWxlXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgZGF0ZVRpbWVGb3JtYXQuXG4gICAgICAgIGxvY2FsZSA9IGludGVybmFsWydbW2xvY2FsZV1dJ10sXG5cbiAgICAvLyAzLiBMZXQgbmYgYmUgdGhlIHJlc3VsdCBvZiBjcmVhdGluZyBhIG5ldyBOdW1iZXJGb3JtYXQgb2JqZWN0IGFzIGlmIGJ5IHRoZVxuICAgIC8vIGV4cHJlc3Npb24gbmV3IEludGwuTnVtYmVyRm9ybWF0KFtsb2NhbGVdLCB7dXNlR3JvdXBpbmc6IGZhbHNlfSkgd2hlcmVcbiAgICAvLyBJbnRsLk51bWJlckZvcm1hdCBpcyB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gY29uc3RydWN0b3IgZGVmaW5lZCBpbiAxMS4xLjMuXG4gICAgICAgIG5mID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KFtsb2NhbGVdLCB7dXNlR3JvdXBpbmc6IGZhbHNlfSksXG5cbiAgICAvLyA0LiBMZXQgbmYyIGJlIHRoZSByZXN1bHQgb2YgY3JlYXRpbmcgYSBuZXcgTnVtYmVyRm9ybWF0IG9iamVjdCBhcyBpZiBieSB0aGVcbiAgICAvLyBleHByZXNzaW9uIG5ldyBJbnRsLk51bWJlckZvcm1hdChbbG9jYWxlXSwge21pbmltdW1JbnRlZ2VyRGlnaXRzOiAyLCB1c2VHcm91cGluZzpcbiAgICAvLyBmYWxzZX0pIHdoZXJlIEludGwuTnVtYmVyRm9ybWF0IGlzIHRoZSBzdGFuZGFyZCBidWlsdC1pbiBjb25zdHJ1Y3RvciBkZWZpbmVkIGluXG4gICAgLy8gMTEuMS4zLlxuICAgICAgICBuZjIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoW2xvY2FsZV0sIHttaW5pbXVtSW50ZWdlckRpZ2l0czogMiwgdXNlR3JvdXBpbmc6IGZhbHNlfSksXG5cbiAgICAvLyA1LiBMZXQgdG0gYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBUb0xvY2FsVGltZSBhYnN0cmFjdCBvcGVyYXRpb24gKGRlZmluZWRcbiAgICAvLyBiZWxvdykgd2l0aCB4LCB0aGUgdmFsdWUgb2YgdGhlIFtbY2FsZW5kYXJdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBkYXRlVGltZUZvcm1hdCxcbiAgICAvLyBhbmQgdGhlIHZhbHVlIG9mIHRoZSBbW3RpbWVab25lXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgZGF0ZVRpbWVGb3JtYXQuXG4gICAgICAgIHRtID0gVG9Mb2NhbFRpbWUoeCwgaW50ZXJuYWxbJ1tbY2FsZW5kYXJdXSddLCBpbnRlcm5hbFsnW1t0aW1lWm9uZV1dJ10pLFxuXG4gICAgLy8gNi4gTGV0IHJlc3VsdCBiZSB0aGUgdmFsdWUgb2YgdGhlIFtbcGF0dGVybl1dIGludGVybmFsIHByb3BlcnR5IG9mIGRhdGVUaW1lRm9ybWF0LlxuICAgICAgICByZXN1bHQgPSBpbnRlcm5hbFsnW1twYXR0ZXJuXV0nXSxcblxuICAgIC8vIE5lZWQgdGhlIGxvY2FsZSBtaW51cyBhbnkgZXh0ZW5zaW9uc1xuICAgICAgICBkYXRhTG9jYWxlID0gaW50ZXJuYWxbJ1tbZGF0YUxvY2FsZV1dJ10sXG5cbiAgICAvLyBOZWVkIHRoZSBjYWxlbmRhciBkYXRhIGZyb20gQ0xEUlxuICAgICAgICBsb2NhbGVEYXRhID0gaW50ZXJuYWxzLkRhdGVUaW1lRm9ybWF0WydbW2xvY2FsZURhdGFdXSddW2RhdGFMb2NhbGVdLmNhbGVuZGFycyxcbiAgICAgICAgY2EgPSBpbnRlcm5hbFsnW1tjYWxlbmRhcl1dJ107XG5cbiAgICAvLyA3LiBGb3IgZWFjaCByb3cgb2YgVGFibGUgMywgZXhjZXB0IHRoZSBoZWFkZXIgcm93LCBkbzpcbiAgICBmb3IgKHZhciBwIGluIGRhdGVUaW1lQ29tcG9uZW50cykge1xuICAgICAgICAvLyBhLiBJZiBkYXRlVGltZUZvcm1hdCBoYXMgYW4gaW50ZXJuYWwgcHJvcGVydHkgd2l0aCB0aGUgbmFtZSBnaXZlbiBpbiB0aGVcbiAgICAgICAgLy8gICAgUHJvcGVydHkgY29sdW1uIG9mIHRoZSByb3csIHRoZW46XG4gICAgICAgIGlmIChob3AuY2FsbChpbnRlcm5hbCwgJ1tbJysgcCArJ11dJykpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgLy8gQXNzaWduZWQgdmFsdWVzIGJlbG93XG4gICAgICAgICAgICAgICAgcG0sIGZ2LFxuXG4gICAgICAgICAgICAvLyAgIGkuIExldCBwIGJlIHRoZSBuYW1lIGdpdmVuIGluIHRoZSBQcm9wZXJ0eSBjb2x1bW4gb2YgdGhlIHJvdy5cbiAgICAgICAgICAgIC8vICBpaS4gTGV0IGYgYmUgdGhlIHZhbHVlIG9mIHRoZSBbWzxwPl1dIGludGVybmFsIHByb3BlcnR5IG9mIGRhdGVUaW1lRm9ybWF0LlxuICAgICAgICAgICAgICAgIGYgPSBpbnRlcm5hbFsnW1snKyBwICsnXV0nXSxcblxuICAgICAgICAgICAgLy8gaWlpLiBMZXQgdiBiZSB0aGUgdmFsdWUgb2YgdG0uW1s8cD5dXS5cbiAgICAgICAgICAgICAgICB2ID0gdG1bJ1tbJysgcCArJ11dJ107XG5cbiAgICAgICAgICAgIC8vICBpdi4gSWYgcCBpcyBcInllYXJcIiBhbmQgdiDiiaQgMCwgdGhlbiBsZXQgdiBiZSAxIC0gdi5cbiAgICAgICAgICAgIGlmIChwID09PSAneWVhcicgJiYgdiA8PSAwKVxuICAgICAgICAgICAgICAgIHYgPSAxIC0gdjtcblxuICAgICAgICAgICAgLy8gICB2LiBJZiBwIGlzIFwibW9udGhcIiwgdGhlbiBpbmNyZWFzZSB2IGJ5IDEuXG4gICAgICAgICAgICBlbHNlIGlmIChwID09PSAnbW9udGgnKVxuICAgICAgICAgICAgICAgIHYrKztcblxuICAgICAgICAgICAgLy8gIHZpLiBJZiBwIGlzIFwiaG91clwiIGFuZCB0aGUgdmFsdWUgb2YgdGhlIFtbaG91cjEyXV0gaW50ZXJuYWwgcHJvcGVydHkgb2ZcbiAgICAgICAgICAgIC8vICAgICAgZGF0ZVRpbWVGb3JtYXQgaXMgdHJ1ZSwgdGhlblxuICAgICAgICAgICAgZWxzZSBpZiAocCA9PT0gJ2hvdXInICYmIGludGVybmFsWydbW2hvdXIxMl1dJ10gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvLyAxLiBMZXQgdiBiZSB2IG1vZHVsbyAxMi5cbiAgICAgICAgICAgICAgICB2ID0gdiAlIDEyO1xuXG4gICAgICAgICAgICAgICAgLy8gMi4gSWYgdiBpcyBlcXVhbCB0byB0aGUgdmFsdWUgb2YgdG0uW1s8cD5dXSwgdGhlbiBsZXQgcG0gYmUgZmFsc2U7IGVsc2VcbiAgICAgICAgICAgICAgICAvLyAgICBsZXQgcG0gYmUgdHJ1ZS5cbiAgICAgICAgICAgICAgICBwbSA9IHYgIT09IHRtWydbWycrIHAgKyddXSddO1xuXG4gICAgICAgICAgICAgICAgLy8gMy4gSWYgdiBpcyAwIGFuZCB0aGUgdmFsdWUgb2YgdGhlIFtbaG91ck5vMF1dIGludGVybmFsIHByb3BlcnR5IG9mXG4gICAgICAgICAgICAgICAgLy8gICAgZGF0ZVRpbWVGb3JtYXQgaXMgdHJ1ZSwgdGhlbiBsZXQgdiBiZSAxMi5cbiAgICAgICAgICAgICAgICBpZiAodiA9PT0gMCAmJiBpbnRlcm5hbFsnW1tob3VyTm8wXV0nXSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgdiA9IDEyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB2aWkuIElmIGYgaXMgXCJudW1lcmljXCIsIHRoZW5cbiAgICAgICAgICAgIGlmIChmID09PSAnbnVtZXJpYycpXG4gICAgICAgICAgICAgICAgLy8gMS4gTGV0IGZ2IGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgRm9ybWF0TnVtYmVyIGFic3RyYWN0IG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIC8vICAgIChkZWZpbmVkIGluIDExLjMuMikgd2l0aCBhcmd1bWVudHMgbmYgYW5kIHYuXG4gICAgICAgICAgICAgICAgZnYgPSBGb3JtYXROdW1iZXIobmYsIHYpO1xuXG4gICAgICAgICAgICAvLyB2aWlpLiBFbHNlIGlmIGYgaXMgXCIyLWRpZ2l0XCIsIHRoZW5cbiAgICAgICAgICAgIGVsc2UgaWYgKGYgPT09ICcyLWRpZ2l0Jykge1xuICAgICAgICAgICAgICAgIC8vIDEuIExldCBmdiBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEZvcm1hdE51bWJlciBhYnN0cmFjdCBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICAvLyAgICB3aXRoIGFyZ3VtZW50cyBuZjIgYW5kIHYuXG4gICAgICAgICAgICAgICAgZnYgPSBGb3JtYXROdW1iZXIobmYyLCB2KTtcblxuICAgICAgICAgICAgICAgIC8vIDIuIElmIHRoZSBsZW5ndGggb2YgZnYgaXMgZ3JlYXRlciB0aGFuIDIsIGxldCBmdiBiZSB0aGUgc3Vic3RyaW5nIG9mIGZ2XG4gICAgICAgICAgICAgICAgLy8gICAgY29udGFpbmluZyB0aGUgbGFzdCB0d28gY2hhcmFjdGVycy5cbiAgICAgICAgICAgICAgICBpZiAoZnYubGVuZ3RoID4gMilcbiAgICAgICAgICAgICAgICAgICAgZnYgPSBmdi5zbGljZSgtMik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGl4LiBFbHNlIGlmIGYgaXMgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBvciBcImxvbmdcIiwgdGhlbiBsZXQgZnYgYmUgYSBTdHJpbmdcbiAgICAgICAgICAgIC8vICAgICB2YWx1ZSByZXByZXNlbnRpbmcgZiBpbiB0aGUgZGVzaXJlZCBmb3JtOyB0aGUgU3RyaW5nIHZhbHVlIGRlcGVuZHMgdXBvblxuICAgICAgICAgICAgLy8gICAgIHRoZSBpbXBsZW1lbnRhdGlvbiBhbmQgdGhlIGVmZmVjdGl2ZSBsb2NhbGUgYW5kIGNhbGVuZGFyIG9mXG4gICAgICAgICAgICAvLyAgICAgZGF0ZVRpbWVGb3JtYXQuIElmIHAgaXMgXCJtb250aFwiLCB0aGVuIHRoZSBTdHJpbmcgdmFsdWUgbWF5IGFsc28gZGVwZW5kXG4gICAgICAgICAgICAvLyAgICAgb24gd2hldGhlciBkYXRlVGltZUZvcm1hdCBoYXMgYSBbW2RheV1dIGludGVybmFsIHByb3BlcnR5LiBJZiBwIGlzXG4gICAgICAgICAgICAvLyAgICAgXCJ0aW1lWm9uZU5hbWVcIiwgdGhlbiB0aGUgU3RyaW5nIHZhbHVlIG1heSBhbHNvIGRlcGVuZCBvbiB0aGUgdmFsdWUgb2ZcbiAgICAgICAgICAgIC8vICAgICB0aGUgW1tpbkRTVF1dIGZpZWxkIG9mIHRtLlxuICAgICAgICAgICAgZWxzZSBpZiAoZiBpbiBkYXRlV2lkdGhzKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ2ID0gcmVzb2x2ZURhdGVTdHJpbmcobG9jYWxlRGF0YSwgY2EsICdtb250aHMnLCBmLCB0bVsnW1snKyBwICsnXV0nXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICd3ZWVrZGF5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnYgPSByZXNvbHZlRGF0ZVN0cmluZyhsb2NhbGVEYXRhLCBjYSwgJ2RheXMnLCBmLCB0bVsnW1snKyBwICsnXV0nXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnYgPSByZXNvbHZlRGF0ZVN0cmluZyhjYS5kYXlzLCBmKVt0bVsnW1snKyBwICsnXV0nXV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCB3ZWVrZGF5IGRhdGEgZm9yIGxvY2FsZSAnK2xvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0aW1lWm9uZU5hbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZnYgPSAnJzsgLy8gVE9ET1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogRXJhXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBmdiA9IHRtWydbWycrIHAgKyddXSddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8geC4gUmVwbGFjZSB0aGUgc3Vic3RyaW5nIG9mIHJlc3VsdCB0aGF0IGNvbnNpc3RzIG9mIFwie1wiLCBwLCBhbmQgXCJ9XCIsIHdpdGhcbiAgICAgICAgICAgIC8vICAgIGZ2LlxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoJ3snKyBwICsnfScsIGZ2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyA4LiBJZiBkYXRlVGltZUZvcm1hdCBoYXMgYW4gaW50ZXJuYWwgcHJvcGVydHkgW1tob3VyMTJdXSB3aG9zZSB2YWx1ZSBpcyB0cnVlLCB0aGVuXG4gICAgaWYgKGludGVybmFsWydbW2hvdXIxMl1dJ10gPT09IHRydWUpIHtcbiAgICAgICAgLy8gYS4gSWYgcG0gaXMgdHJ1ZSwgdGhlbiBsZXQgZnYgYmUgYW4gaW1wbGVtZW50YXRpb24gYW5kIGxvY2FsZSBkZXBlbmRlbnQgU3RyaW5nXG4gICAgICAgIC8vICAgIHZhbHVlIHJlcHJlc2VudGluZyDigJxwb3N0IG1lcmlkaWVt4oCdOyBlbHNlIGxldCBmdiBiZSBhbiBpbXBsZW1lbnRhdGlvbiBhbmRcbiAgICAgICAgLy8gICAgbG9jYWxlIGRlcGVuZGVudCBTdHJpbmcgdmFsdWUgcmVwcmVzZW50aW5nIOKAnGFudGUgbWVyaWRpZW3igJ0uXG4gICAgICAgIGZ2ID0gcmVzb2x2ZURhdGVTdHJpbmcobG9jYWxlRGF0YSwgY2EsICdkYXlQZXJpb2RzJywgcG0gPyAncG0nIDogJ2FtJyk7XG5cbiAgICAgICAgLy8gYi4gUmVwbGFjZSB0aGUgc3Vic3RyaW5nIG9mIHJlc3VsdCB0aGF0IGNvbnNpc3RzIG9mIFwie2FtcG19XCIsIHdpdGggZnYuXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKCd7YW1wbX0nLCBmdik7XG4gICAgfVxuXG4gICAgLy8gUmVzdG9yZSBwcm9wZXJ0aWVzIG9mIHRoZSBSZWdFeHAgb2JqZWN0XG4gICAgcmVnZXhwU3RhdGUuZXhwLnRlc3QocmVnZXhwU3RhdGUuaW5wdXQpO1xuXG4gICAgLy8gOS4gUmV0dXJuIHJlc3VsdC5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFdoZW4gdGhlIFRvTG9jYWxUaW1lIGFic3RyYWN0IG9wZXJhdGlvbiBpcyBjYWxsZWQgd2l0aCBhcmd1bWVudHMgZGF0ZSwgY2FsZW5kYXIsIGFuZFxuICogdGltZVpvbmUsIHRoZSBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICovXG5mdW5jdGlvbiBUb0xvY2FsVGltZShkYXRlLCBjYWxlbmRhciwgdGltZVpvbmUpIHtcbiAgICAvLyAxLiBBcHBseSBjYWxlbmRyaWNhbCBjYWxjdWxhdGlvbnMgb24gZGF0ZSBmb3IgdGhlIGdpdmVuIGNhbGVuZGFyIGFuZCB0aW1lIHpvbmUgdG9cbiAgICAvLyAgICBwcm9kdWNlIHdlZWtkYXksIGVyYSwgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIGFuZCBpbkRTVCB2YWx1ZXMuXG4gICAgLy8gICAgVGhlIGNhbGN1bGF0aW9ucyBzaG91bGQgdXNlIGJlc3QgYXZhaWxhYmxlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzcGVjaWZpZWRcbiAgICAvLyAgICBjYWxlbmRhciBhbmQgdGltZSB6b25lLiBJZiB0aGUgY2FsZW5kYXIgaXMgXCJncmVnb3J5XCIsIHRoZW4gdGhlIGNhbGN1bGF0aW9ucyBtdXN0XG4gICAgLy8gICAgbWF0Y2ggdGhlIGFsZ29yaXRobXMgc3BlY2lmaWVkIGluIEVTNSwgMTUuOS4xLCBleGNlcHQgdGhhdCBjYWxjdWxhdGlvbnMgYXJlIG5vdFxuICAgIC8vICAgIGJvdW5kIGJ5IHRoZSByZXN0cmljdGlvbnMgb24gdGhlIHVzZSBvZiBiZXN0IGF2YWlsYWJsZSBpbmZvcm1hdGlvbiBvbiB0aW1lIHpvbmVzXG4gICAgLy8gICAgZm9yIGxvY2FsIHRpbWUgem9uZSBhZGp1c3RtZW50IGFuZCBkYXlsaWdodCBzYXZpbmcgdGltZSBhZGp1c3RtZW50IGltcG9zZWQgYnlcbiAgICAvLyAgICBFUzUsIDE1LjkuMS43IGFuZCAxNS45LjEuOC5cbiAgICAvLyAjIyNUT0RPIyMjXG4gICAgdmFyIGQgPSBuZXcgRGF0ZShkYXRlKSxcbiAgICAgICAgbSA9ICdnZXQnICsgKHRpbWVab25lIHx8ICcnKTtcblxuICAgIC8vIDIuIFJldHVybiBhIFJlY29yZCB3aXRoIGZpZWxkcyBbW3dlZWtkYXldXSwgW1tlcmFdXSwgW1t5ZWFyXV0sIFtbbW9udGhdXSwgW1tkYXldXSxcbiAgICAvLyAgICBbW2hvdXJdXSwgW1ttaW51dGVdXSwgW1tzZWNvbmRdXSwgYW5kIFtbaW5EU1RdXSwgZWFjaCB3aXRoIHRoZSBjb3JyZXNwb25kaW5nXG4gICAgLy8gICAgY2FsY3VsYXRlZCB2YWx1ZS5cbiAgICByZXR1cm4gbmV3IFJlY29yZCh7XG4gICAgICAgICdbW3dlZWtkYXldXSc6IGRbbSArICdEYXknXSgpLFxuICAgICAgICAnW1tlcmFdXScgICAgOiArKGRbbSArICdGdWxsWWVhciddKCkgPj0gMCksXG4gICAgICAgICdbW3llYXJdXScgICA6IGRbbSArICdGdWxsWWVhciddKCksXG4gICAgICAgICdbW21vbnRoXV0nICA6IGRbbSArICdNb250aCddKCksXG4gICAgICAgICdbW2RheV1dJyAgICA6IGRbbSArICdEYXRlJ10oKSxcbiAgICAgICAgJ1tbaG91cl1dJyAgIDogZFttICsgJ0hvdXJzJ10oKSxcbiAgICAgICAgJ1tbbWludXRlXV0nIDogZFttICsgJ01pbnV0ZXMnXSgpLFxuICAgICAgICAnW1tzZWNvbmRdXScgOiBkW20gKyAnU2Vjb25kcyddKCksXG4gICAgICAgICdbW2luRFNUXV0nICA6IGZhbHNlIC8vICMjI1RPRE8jIyNcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBUaGUgZnVuY3Rpb24gcmV0dXJucyBhIG5ldyBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcyBhcmUgc2V0IGFzIGlmXG4gKiBjb25zdHJ1Y3RlZCBieSBhbiBvYmplY3QgbGl0ZXJhbCBhc3NpZ25pbmcgdG8gZWFjaCBvZiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXMgdGhlXG4gKiB2YWx1ZSBvZiB0aGUgY29ycmVzcG9uZGluZyBpbnRlcm5hbCBwcm9wZXJ0eSBvZiB0aGlzIERhdGVUaW1lRm9ybWF0IG9iamVjdCAoc2VlIDEyLjQpOlxuICogbG9jYWxlLCBjYWxlbmRhciwgbnVtYmVyaW5nU3lzdGVtLCB0aW1lWm9uZSwgaG91cjEyLCB3ZWVrZGF5LCBlcmEsIHllYXIsIG1vbnRoLCBkYXksXG4gKiBob3VyLCBtaW51dGUsIHNlY29uZCwgYW5kIHRpbWVab25lTmFtZS4gUHJvcGVydGllcyB3aG9zZSBjb3JyZXNwb25kaW5nIGludGVybmFsXG4gKiBwcm9wZXJ0aWVzIGFyZSBub3QgcHJlc2VudCBhcmUgbm90IGFzc2lnbmVkLlxuICovXG4vKiAxMi4zLjMgKi9kZWZpbmVQcm9wZXJ0eShJbnRsLkRhdGVUaW1lRm9ybWF0LnByb3RvdHlwZSwgJ3Jlc29sdmVkT3B0aW9ucycsIHtcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHByb3AsXG4gICAgICAgICAgICBkZXNjcyA9IG5ldyBSZWNvcmQoKSxcbiAgICAgICAgICAgIHByb3BzID0gW1xuICAgICAgICAgICAgICAgICdsb2NhbGUnLCAnY2FsZW5kYXInLCAnbnVtYmVyaW5nU3lzdGVtJywgJ3RpbWVab25lJywgJ2hvdXIxMicsICd3ZWVrZGF5JyxcbiAgICAgICAgICAgICAgICAnZXJhJywgJ3llYXInLCAnbW9udGgnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcsICd0aW1lWm9uZU5hbWUnXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaW50ZXJuYWwgPSB0aGlzICE9IG51bGwgJiYgdHlwZW9mIHRoaXMgPT09ICdvYmplY3QnICYmIGdldEludGVybmFsUHJvcGVydGllcyh0aGlzKTtcblxuICAgICAgICAvLyBTYXRpc2Z5IHRlc3QgMTIuM19iXG4gICAgICAgIGlmICghaW50ZXJuYWwgfHwgIWludGVybmFsWydbW2luaXRpYWxpemVkRGF0ZVRpbWVGb3JtYXRdXSddKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYHRoaXNgIHZhbHVlIGZvciByZXNvbHZlZE9wdGlvbnMoKSBpcyBub3QgYW4gaW5pdGlhbGl6ZWQgSW50bC5EYXRlVGltZUZvcm1hdCBvYmplY3QuJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIG1heCA9IHByb3BzLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaG9wLmNhbGwoaW50ZXJuYWwsIHByb3AgPSAnW1snICsgcHJvcHNbaV0gKyAnXV0nKSlcbiAgICAgICAgICAgICAgICBkZXNjc1twcm9wc1tpXV0gPSB7IHZhbHVlOiBpbnRlcm5hbFtwcm9wXSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iakNyZWF0ZSh7fSwgZGVzY3MpO1xuICAgIH1cbn0pO1xuXG4vLyBTZWN0IDEzIExvY2FsZSBTZW5zaXRpdmUgRnVuY3Rpb25zIG9mIHRoZSBFQ01BU2NyaXB0IExhbmd1YWdlIFNwZWNpZmljYXRpb25cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgbHMgPSBJbnRsLl9fbG9jYWxlU2Vuc2l0aXZlUHJvdG9zID0ge1xuICAgIE51bWJlcjoge30sXG4gICAgRGF0ZTogICB7fVxufTtcblxuLyoqXG4gKiBXaGVuIHRoZSB0b0xvY2FsZVN0cmluZyBtZXRob2QgaXMgY2FsbGVkIHdpdGggb3B0aW9uYWwgYXJndW1lbnRzIGxvY2FsZXMgYW5kIG9wdGlvbnMsXG4gKiB0aGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuLyogMTMuMi4xICovbHMuTnVtYmVyLnRvTG9jYWxlU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFNhdGlzZnkgdGVzdCAxMy4yLjFfMVxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpcykgIT09ICdbb2JqZWN0IE51bWJlcl0nKVxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdgdGhpc2AgdmFsdWUgbXVzdCBiZSBhIG51bWJlciBmb3IgTnVtYmVyLnByb3RvdHlwZS50b0xvY2FsZVN0cmluZygpJyk7XG5cbiAgICAvLyAxLiBMZXQgeCBiZSB0aGlzIE51bWJlciB2YWx1ZSAoYXMgZGVmaW5lZCBpbiBFUzUsIDE1LjcuNCkuXG4gICAgLy8gMi4gSWYgbG9jYWxlcyBpcyBub3QgcHJvdmlkZWQsIHRoZW4gbGV0IGxvY2FsZXMgYmUgdW5kZWZpbmVkLlxuICAgIC8vIDMuIElmIG9wdGlvbnMgaXMgbm90IHByb3ZpZGVkLCB0aGVuIGxldCBvcHRpb25zIGJlIHVuZGVmaW5lZC5cbiAgICAvLyA0LiBMZXQgbnVtYmVyRm9ybWF0IGJlIHRoZSByZXN1bHQgb2YgY3JlYXRpbmcgYSBuZXcgb2JqZWN0IGFzIGlmIGJ5IHRoZVxuICAgIC8vICAgIGV4cHJlc3Npb24gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY2FsZXMsIG9wdGlvbnMpIHdoZXJlXG4gICAgLy8gICAgSW50bC5OdW1iZXJGb3JtYXQgaXMgdGhlIHN0YW5kYXJkIGJ1aWx0LWluIGNvbnN0cnVjdG9yIGRlZmluZWQgaW4gMTEuMS4zLlxuICAgIC8vIDUuIFJldHVybiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEZvcm1hdE51bWJlciBhYnN0cmFjdCBvcGVyYXRpb25cbiAgICAvLyAgICAoZGVmaW5lZCBpbiAxMS4zLjIpIHdpdGggYXJndW1lbnRzIG51bWJlckZvcm1hdCBhbmQgeC5cbiAgICByZXR1cm4gRm9ybWF0TnVtYmVyKG5ldyBOdW1iZXJGb3JtYXRDb25zdHJ1Y3Rvcihhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSksIHRoaXMpO1xufTtcblxuLyoqXG4gKiBXaGVuIHRoZSB0b0xvY2FsZVN0cmluZyBtZXRob2QgaXMgY2FsbGVkIHdpdGggb3B0aW9uYWwgYXJndW1lbnRzIGxvY2FsZXMgYW5kIG9wdGlvbnMsXG4gKiB0aGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuLyogMTMuMy4xICovbHMuRGF0ZS50b0xvY2FsZVN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTYXRpc2Z5IHRlc3QgMTMuMy4wXzFcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaXMpICE9PSAnW29iamVjdCBEYXRlXScpXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2B0aGlzYCB2YWx1ZSBtdXN0IGJlIGEgRGF0ZSBpbnN0YW5jZSBmb3IgRGF0ZS5wcm90b3R5cGUudG9Mb2NhbGVTdHJpbmcoKScpO1xuXG4gICAgdmFyXG4gICAgLy8gMS4gTGV0IHggYmUgdGhpcyB0aW1lIHZhbHVlIChhcyBkZWZpbmVkIGluIEVTNSwgMTUuOS41KS5cbiAgICAgICAgeCA9ICt0aGlzO1xuXG4gICAgLy8gMi4gSWYgeCBpcyBOYU4sIHRoZW4gcmV0dXJuIFwiSW52YWxpZCBEYXRlXCIuXG4gICAgaWYgKGlzTmFOKHgpKVxuICAgICAgICByZXR1cm4gJ0ludmFsaWQgRGF0ZSc7XG5cbiAgICB2YXJcbiAgICAvLyAzLiBJZiBsb2NhbGVzIGlzIG5vdCBwcm92aWRlZCwgdGhlbiBsZXQgbG9jYWxlcyBiZSB1bmRlZmluZWQuXG4gICAgICAgIGxvY2FsZXMgPSBhcmd1bWVudHNbMF0sXG5cbiAgICAvLyA0LiBJZiBvcHRpb25zIGlzIG5vdCBwcm92aWRlZCwgdGhlbiBsZXQgb3B0aW9ucyBiZSB1bmRlZmluZWQuXG4gICAgICAgIG9wdGlvbnMgPSBhcmd1bWVudHNbMV0sXG5cbiAgICAvLyA1LiBMZXQgb3B0aW9ucyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFRvRGF0ZVRpbWVPcHRpb25zIGFic3RyYWN0XG4gICAgLy8gICAgb3BlcmF0aW9uIChkZWZpbmVkIGluIDEyLjEuMSkgd2l0aCBhcmd1bWVudHMgb3B0aW9ucywgXCJhbnlcIiwgYW5kIFwiYWxsXCIuXG4gICAgICAgIG9wdGlvbnMgPSBUb0RhdGVUaW1lT3B0aW9ucyhvcHRpb25zLCAnYW55JywgJ2FsbCcpLFxuXG4gICAgLy8gNi4gTGV0IGRhdGVUaW1lRm9ybWF0IGJlIHRoZSByZXN1bHQgb2YgY3JlYXRpbmcgYSBuZXcgb2JqZWN0IGFzIGlmIGJ5IHRoZVxuICAgIC8vICAgIGV4cHJlc3Npb24gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlcywgb3B0aW9ucykgd2hlcmVcbiAgICAvLyAgICBJbnRsLkRhdGVUaW1lRm9ybWF0IGlzIHRoZSBzdGFuZGFyZCBidWlsdC1pbiBjb25zdHJ1Y3RvciBkZWZpbmVkIGluIDEyLjEuMy5cbiAgICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBuZXcgRGF0ZVRpbWVGb3JtYXRDb25zdHJ1Y3Rvcihsb2NhbGVzLCBvcHRpb25zKTtcblxuICAgIC8vIDcuIFJldHVybiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEZvcm1hdERhdGVUaW1lIGFic3RyYWN0IG9wZXJhdGlvbiAoZGVmaW5lZFxuICAgIC8vICAgIGluIDEyLjMuMikgd2l0aCBhcmd1bWVudHMgZGF0ZVRpbWVGb3JtYXQgYW5kIHguXG4gICAgcmV0dXJuIEZvcm1hdERhdGVUaW1lKGRhdGVUaW1lRm9ybWF0LCB4KTtcbn07XG5cbi8qKlxuICogV2hlbiB0aGUgdG9Mb2NhbGVEYXRlU3RyaW5nIG1ldGhvZCBpcyBjYWxsZWQgd2l0aCBvcHRpb25hbCBhcmd1bWVudHMgbG9jYWxlcyBhbmRcbiAqIG9wdGlvbnMsIHRoZSBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICovXG4vKiAxMy4zLjIgKi9scy5EYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTYXRpc2Z5IHRlc3QgMTMuMy4wXzFcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaXMpICE9PSAnW29iamVjdCBEYXRlXScpXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2B0aGlzYCB2YWx1ZSBtdXN0IGJlIGEgRGF0ZSBpbnN0YW5jZSBmb3IgRGF0ZS5wcm90b3R5cGUudG9Mb2NhbGVEYXRlU3RyaW5nKCknKTtcblxuICAgIHZhclxuICAgIC8vIDEuIExldCB4IGJlIHRoaXMgdGltZSB2YWx1ZSAoYXMgZGVmaW5lZCBpbiBFUzUsIDE1LjkuNSkuXG4gICAgICAgIHggPSArdGhpcztcblxuICAgIC8vIDIuIElmIHggaXMgTmFOLCB0aGVuIHJldHVybiBcIkludmFsaWQgRGF0ZVwiLlxuICAgIGlmIChpc05hTih4KSlcbiAgICAgICAgcmV0dXJuICdJbnZhbGlkIERhdGUnO1xuXG4gICAgdmFyXG4gICAgLy8gMy4gSWYgbG9jYWxlcyBpcyBub3QgcHJvdmlkZWQsIHRoZW4gbGV0IGxvY2FsZXMgYmUgdW5kZWZpbmVkLlxuICAgICAgICBsb2NhbGVzID0gYXJndW1lbnRzWzBdLFxuXG4gICAgLy8gNC4gSWYgb3B0aW9ucyBpcyBub3QgcHJvdmlkZWQsIHRoZW4gbGV0IG9wdGlvbnMgYmUgdW5kZWZpbmVkLlxuICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzWzFdLFxuXG4gICAgLy8gNS4gTGV0IG9wdGlvbnMgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBUb0RhdGVUaW1lT3B0aW9ucyBhYnN0cmFjdFxuICAgIC8vICAgIG9wZXJhdGlvbiAoZGVmaW5lZCBpbiAxMi4xLjEpIHdpdGggYXJndW1lbnRzIG9wdGlvbnMsIFwiZGF0ZVwiLCBhbmQgXCJkYXRlXCIuXG4gICAgICAgIG9wdGlvbnMgPSBUb0RhdGVUaW1lT3B0aW9ucyhvcHRpb25zLCAnZGF0ZScsICdkYXRlJyksXG5cbiAgICAvLyA2LiBMZXQgZGF0ZVRpbWVGb3JtYXQgYmUgdGhlIHJlc3VsdCBvZiBjcmVhdGluZyBhIG5ldyBvYmplY3QgYXMgaWYgYnkgdGhlXG4gICAgLy8gICAgZXhwcmVzc2lvbiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGVzLCBvcHRpb25zKSB3aGVyZVxuICAgIC8vICAgIEludGwuRGF0ZVRpbWVGb3JtYXQgaXMgdGhlIHN0YW5kYXJkIGJ1aWx0LWluIGNvbnN0cnVjdG9yIGRlZmluZWQgaW4gMTIuMS4zLlxuICAgICAgICBkYXRlVGltZUZvcm1hdCA9IG5ldyBEYXRlVGltZUZvcm1hdENvbnN0cnVjdG9yKGxvY2FsZXMsIG9wdGlvbnMpO1xuXG4gICAgLy8gNy4gUmV0dXJuIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgRm9ybWF0RGF0ZVRpbWUgYWJzdHJhY3Qgb3BlcmF0aW9uIChkZWZpbmVkXG4gICAgLy8gICAgaW4gMTIuMy4yKSB3aXRoIGFyZ3VtZW50cyBkYXRlVGltZUZvcm1hdCBhbmQgeC5cbiAgICByZXR1cm4gRm9ybWF0RGF0ZVRpbWUoZGF0ZVRpbWVGb3JtYXQsIHgpO1xufTtcblxuLyoqXG4gKiBXaGVuIHRoZSB0b0xvY2FsZVRpbWVTdHJpbmcgbWV0aG9kIGlzIGNhbGxlZCB3aXRoIG9wdGlvbmFsIGFyZ3VtZW50cyBsb2NhbGVzIGFuZFxuICogb3B0aW9ucywgdGhlIGZvbGxvd2luZyBzdGVwcyBhcmUgdGFrZW46XG4gKi9cbi8qIDEzLjMuMyAqL2xzLkRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFNhdGlzZnkgdGVzdCAxMy4zLjBfMVxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpcykgIT09ICdbb2JqZWN0IERhdGVdJylcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYHRoaXNgIHZhbHVlIG11c3QgYmUgYSBEYXRlIGluc3RhbmNlIGZvciBEYXRlLnByb3RvdHlwZS50b0xvY2FsZVRpbWVTdHJpbmcoKScpO1xuXG4gICAgdmFyXG4gICAgLy8gMS4gTGV0IHggYmUgdGhpcyB0aW1lIHZhbHVlIChhcyBkZWZpbmVkIGluIEVTNSwgMTUuOS41KS5cbiAgICAgICAgeCA9ICt0aGlzO1xuXG4gICAgLy8gMi4gSWYgeCBpcyBOYU4sIHRoZW4gcmV0dXJuIFwiSW52YWxpZCBEYXRlXCIuXG4gICAgaWYgKGlzTmFOKHgpKVxuICAgICAgICByZXR1cm4gJ0ludmFsaWQgRGF0ZSc7XG5cbiAgICB2YXJcbiAgICAvLyAzLiBJZiBsb2NhbGVzIGlzIG5vdCBwcm92aWRlZCwgdGhlbiBsZXQgbG9jYWxlcyBiZSB1bmRlZmluZWQuXG4gICAgICAgIGxvY2FsZXMgPSBhcmd1bWVudHNbMF0sXG5cbiAgICAvLyA0LiBJZiBvcHRpb25zIGlzIG5vdCBwcm92aWRlZCwgdGhlbiBsZXQgb3B0aW9ucyBiZSB1bmRlZmluZWQuXG4gICAgICAgIG9wdGlvbnMgPSBhcmd1bWVudHNbMV0sXG5cbiAgICAvLyA1LiBMZXQgb3B0aW9ucyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFRvRGF0ZVRpbWVPcHRpb25zIGFic3RyYWN0XG4gICAgLy8gICAgb3BlcmF0aW9uIChkZWZpbmVkIGluIDEyLjEuMSkgd2l0aCBhcmd1bWVudHMgb3B0aW9ucywgXCJ0aW1lXCIsIGFuZCBcInRpbWVcIi5cbiAgICAgICAgb3B0aW9ucyA9IFRvRGF0ZVRpbWVPcHRpb25zKG9wdGlvbnMsICd0aW1lJywgJ3RpbWUnKSxcblxuICAgIC8vIDYuIExldCBkYXRlVGltZUZvcm1hdCBiZSB0aGUgcmVzdWx0IG9mIGNyZWF0aW5nIGEgbmV3IG9iamVjdCBhcyBpZiBieSB0aGVcbiAgICAvLyAgICBleHByZXNzaW9uIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZXMsIG9wdGlvbnMpIHdoZXJlXG4gICAgLy8gICAgSW50bC5EYXRlVGltZUZvcm1hdCBpcyB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gY29uc3RydWN0b3IgZGVmaW5lZCBpbiAxMi4xLjMuXG4gICAgICAgIGRhdGVUaW1lRm9ybWF0ID0gbmV3IERhdGVUaW1lRm9ybWF0Q29uc3RydWN0b3IobG9jYWxlcywgb3B0aW9ucyk7XG5cbiAgICAvLyA3LiBSZXR1cm4gdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBGb3JtYXREYXRlVGltZSBhYnN0cmFjdCBvcGVyYXRpb24gKGRlZmluZWRcbiAgICAvLyAgICBpbiAxMi4zLjIpIHdpdGggYXJndW1lbnRzIGRhdGVUaW1lRm9ybWF0IGFuZCB4LlxuICAgIHJldHVybiBGb3JtYXREYXRlVGltZShkYXRlVGltZUZvcm1hdCwgeCk7XG59O1xuXG5kZWZpbmVQcm9wZXJ0eShJbnRsLCAnX19hcHBseUxvY2FsZVNlbnNpdGl2ZVByb3RvdHlwZXMnLCB7XG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsICd0b0xvY2FsZVN0cmluZycsIHsgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IGxzLk51bWJlci50b0xvY2FsZVN0cmluZyB9KTtcbiAgICAgICAgLy8gTmVlZCB0aGlzIGhlcmUgZm9yIElFIDgsIHRvIGF2b2lkIHRoZSBfRG9udEVudW1fIGJ1Z1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eShEYXRlLnByb3RvdHlwZSwgJ3RvTG9jYWxlU3RyaW5nJywgeyB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogbHMuRGF0ZS50b0xvY2FsZVN0cmluZyB9KTtcblxuICAgICAgICBmb3IgKHZhciBrIGluIGxzLkRhdGUpIHtcbiAgICAgICAgICAgIGlmIChob3AuY2FsbChscy5EYXRlLCBrKSlcbiAgICAgICAgICAgICAgICBkZWZpbmVQcm9wZXJ0eShEYXRlLnByb3RvdHlwZSwgaywgeyB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogbHMuRGF0ZVtrXSB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vKipcbiAqIENhbid0IHJlYWxseSBzaGlwIGEgc2luZ2xlIHNjcmlwdCB3aXRoIGRhdGEgZm9yIGh1bmRyZWRzIG9mIGxvY2FsZXMsIHNvIHdlIHByb3ZpZGVcbiAqIHRoaXMgX19hZGRMb2NhbGVEYXRhIG1ldGhvZCBhcyBhIG1lYW5zIGZvciB0aGUgZGV2ZWxvcGVyIHRvIGFkZCB0aGUgZGF0YSBvbiBhblxuICogYXMtbmVlZGVkIGJhc2lzXG4gKi9cbmRlZmluZVByb3BlcnR5KEludGwsICdfX2FkZExvY2FsZURhdGEnLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmICghSXNTdHJ1Y3R1cmFsbHlWYWxpZExhbmd1YWdlVGFnKGRhdGEubG9jYWxlKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdCBwYXNzZWQgZG9lc24ndCBpZGVudGlmeSBpdHNlbGYgd2l0aCBhIHZhbGlkIGxhbmd1YWdlIHRhZ1wiKTtcblxuICAgICAgICBhZGRMb2NhbGVEYXRhKGRhdGEsIGRhdGEubG9jYWxlKTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gYWRkTG9jYWxlRGF0YSAoZGF0YSwgdGFnKSB7XG4gICAgLy8gQm90aCBOdW1iZXJGb3JtYXQgYW5kIERhdGVUaW1lRm9ybWF0IHJlcXVpcmUgbnVtYmVyIGRhdGEsIHNvIHRocm93IGlmIGl0IGlzbid0IHByZXNlbnRcbiAgICBpZiAoIWRhdGEubnVtYmVyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3QgcGFzc2VkIGRvZXNuJ3QgY29udGFpbiBsb2NhbGUgZGF0YSBmb3IgSW50bC5OdW1iZXJGb3JtYXRcIik7XG5cbiAgICB2YXIgbG9jYWxlLFxuICAgICAgICBsb2NhbGVzID0gWyB0YWcgXSxcbiAgICAgICAgcGFydHMgICA9IHRhZy5zcGxpdCgnLScpO1xuXG4gICAgLy8gQ3JlYXRlIGZhbGxiYWNrcyBmb3IgbG9jYWxlIGRhdGEgd2l0aCBzY3JpcHRzLCBlLmcuIExhdG4sIEhhbnMsIFZhaWksIGV0Y1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPiAyICYmIHBhcnRzWzFdLmxlbmd0aCA9PT0gNClcbiAgICAgICAgYXJyUHVzaC5jYWxsKGxvY2FsZXMsIHBhcnRzWzBdICsgJy0nICsgcGFydHNbMl0pO1xuXG4gICAgd2hpbGUgKGxvY2FsZSA9IGFyclNoaWZ0LmNhbGwobG9jYWxlcykpIHtcbiAgICAgICAgLy8gQWRkIHRvIE51bWJlckZvcm1hdCBpbnRlcm5hbCBwcm9wZXJ0aWVzIGFzIHBlciAxMS4yLjNcbiAgICAgICAgYXJyUHVzaC5jYWxsKGludGVybmFscy5OdW1iZXJGb3JtYXRbJ1tbYXZhaWxhYmxlTG9jYWxlc11dJ10sIGxvY2FsZSk7XG4gICAgICAgIGludGVybmFscy5OdW1iZXJGb3JtYXRbJ1tbbG9jYWxlRGF0YV1dJ11bbG9jYWxlXSA9IGRhdGEubnVtYmVyO1xuXG4gICAgICAgIC8vIC4uLmFuZCBEYXRlVGltZUZvcm1hdCBpbnRlcm5hbCBwcm9wZXJ0aWVzIGFzIHBlciAxMi4yLjNcbiAgICAgICAgaWYgKGRhdGEuZGF0ZSkge1xuICAgICAgICAgICAgZGF0YS5kYXRlLm51ID0gZGF0YS5udW1iZXIubnU7XG4gICAgICAgICAgICBhcnJQdXNoLmNhbGwoaW50ZXJuYWxzLkRhdGVUaW1lRm9ybWF0WydbW2F2YWlsYWJsZUxvY2FsZXNdXSddLCBsb2NhbGUpO1xuICAgICAgICAgICAgaW50ZXJuYWxzLkRhdGVUaW1lRm9ybWF0WydbW2xvY2FsZURhdGFdXSddW2xvY2FsZV0gPSBkYXRhLmRhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCBzZXQgb2YgbG9jYWxlIGRhdGEgYWRkZWQsIG1ha2UgaXQgdGhlIGRlZmF1bHRcbiAgICBpZiAoZGVmYXVsdExvY2FsZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICBkZWZhdWx0TG9jYWxlID0gdGFnO1xuXG4gICAgLy8gMTEuMyAodGhlIE51bWJlckZvcm1hdCBwcm90b3R5cGUgb2JqZWN0IGlzIGFuIEludGwuTnVtYmVyRm9ybWF0IGluc3RhbmNlKVxuICAgIGlmICghbnVtYmVyRm9ybWF0UHJvdG9Jbml0aWFsaXNlZCkge1xuICAgICAgICBJbml0aWFsaXplTnVtYmVyRm9ybWF0KEludGwuTnVtYmVyRm9ybWF0LnByb3RvdHlwZSk7XG4gICAgICAgIG51bWJlckZvcm1hdFByb3RvSW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIDExLjMgKHRoZSBOdW1iZXJGb3JtYXQgcHJvdG90eXBlIG9iamVjdCBpcyBhbiBJbnRsLk51bWJlckZvcm1hdCBpbnN0YW5jZSlcbiAgICBpZiAoZGF0YS5kYXRlICYmICFkYXRlVGltZUZvcm1hdFByb3RvSW5pdGlhbGlzZWQpIHtcbiAgICAgICAgSW5pdGlhbGl6ZURhdGVUaW1lRm9ybWF0KEludGwuRGF0ZVRpbWVGb3JtYXQucHJvdG90eXBlKTtcbiAgICAgICAgZGF0ZVRpbWVGb3JtYXRQcm90b0luaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICB9XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbnNcbi8vID09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGRlYWwgd2l0aCB0aGUgaW5hY2N1cmFjeSBvZiBjYWxjdWxhdGluZyBsb2cxMCBpbiBwcmUtRVM2XG4gKiBKYXZhU2NyaXB0IGVudmlyb25tZW50cy4gTWF0aC5sb2cobnVtKSAvIE1hdGguTE4xMCB3YXMgcmVzcG9uc2libGUgZm9yXG4gKiBjYXVzaW5nIGlzc3VlICM2Mi5cbiAqL1xuZnVuY3Rpb24gbG9nMTBGbG9vciAobikge1xuICAgIC8vIEVTNiBwcm92aWRlcyB0aGUgbW9yZSBhY2N1cmF0ZSBNYXRoLmxvZzEwXG4gICAgaWYgKHR5cGVvZiBNYXRoLmxvZzEwID09PSAnZnVuY3Rpb24nKVxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLmxvZzEwKG4pKTtcblxuICAgIHZhciB4ID0gTWF0aC5yb3VuZChNYXRoLmxvZyhuKSAqIE1hdGguTE9HMTBFKTtcbiAgICByZXR1cm4geCAtIChOdW1iZXIoJzFlJyArIHgpID4gbik7XG59XG5cbi8qKlxuICogQSBtZXJnZSBvZiB0aGUgSW50bC57Q29uc3RydWN0b3J9LnN1cHBvcnRlZExvY2FsZXNPZiBmdW5jdGlvbnNcbiAqIFRvIG1ha2UgbGlmZSBlYXNpZXIsIHRoZSBmdW5jdGlvbiBzaG91bGQgYmUgYm91bmQgdG8gdGhlIGNvbnN0cnVjdG9yJ3MgaW50ZXJuYWxcbiAqIHByb3BlcnRpZXMgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBzdXBwb3J0ZWRMb2NhbGVzT2YobG9jYWxlcykge1xuICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG5cbiAgICAvLyBCb3VuZCBmdW5jdGlvbnMgb25seSBoYXZlIHRoZSBgdGhpc2AgdmFsdWUgYWx0ZXJlZCBpZiBiZWluZyB1c2VkIGFzIGEgY29uc3RydWN0b3IsXG4gICAgLy8gdGhpcyBsZXRzIHVzIGltaXRhdGUgYSBuYXRpdmUgZnVuY3Rpb24gdGhhdCBoYXMgbm8gY29uc3RydWN0b3JcbiAgICBpZiAoIWhvcC5jYWxsKHRoaXMsICdbW2F2YWlsYWJsZUxvY2FsZXNdXScpKVxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzdXBwb3J0ZWRMb2NhbGVzT2YoKSBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuXG4gICAgdmFyXG4gICAgLy8gQ3JlYXRlIGFuIG9iamVjdCB3aG9zZSBwcm9wcyBjYW4gYmUgdXNlZCB0byByZXN0b3JlIHRoZSB2YWx1ZXMgb2YgUmVnRXhwIHByb3BzXG4gICAgICAgIHJlZ2V4cFN0YXRlID0gY3JlYXRlUmVnRXhwUmVzdG9yZSgpLFxuXG4gICAgLy8gMS4gSWYgb3B0aW9ucyBpcyBub3QgcHJvdmlkZWQsIHRoZW4gbGV0IG9wdGlvbnMgYmUgdW5kZWZpbmVkLlxuICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzWzFdLFxuXG4gICAgLy8gMi4gTGV0IGF2YWlsYWJsZUxvY2FsZXMgYmUgdGhlIHZhbHVlIG9mIHRoZSBbW2F2YWlsYWJsZUxvY2FsZXNdXSBpbnRlcm5hbFxuICAgIC8vICAgIHByb3BlcnR5IG9mIHRoZSBzdGFuZGFyZCBidWlsdC1pbiBvYmplY3QgdGhhdCBpcyB0aGUgaW5pdGlhbCB2YWx1ZSBvZlxuICAgIC8vICAgIEludGwuTnVtYmVyRm9ybWF0LlxuXG4gICAgICAgIGF2YWlsYWJsZUxvY2FsZXMgPSB0aGlzWydbW2F2YWlsYWJsZUxvY2FsZXNdXSddLFxuXG4gICAgLy8gMy4gTGV0IHJlcXVlc3RlZExvY2FsZXMgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBDYW5vbmljYWxpemVMb2NhbGVMaXN0XG4gICAgLy8gICAgYWJzdHJhY3Qgb3BlcmF0aW9uIChkZWZpbmVkIGluIDkuMi4xKSB3aXRoIGFyZ3VtZW50IGxvY2FsZXMuXG4gICAgICAgIHJlcXVlc3RlZExvY2FsZXMgPSBDYW5vbmljYWxpemVMb2NhbGVMaXN0KGxvY2FsZXMpO1xuXG4gICAgLy8gUmVzdG9yZSB0aGUgUmVnRXhwIHByb3BlcnRpZXNcbiAgICByZWdleHBTdGF0ZS5leHAudGVzdChyZWdleHBTdGF0ZS5pbnB1dCk7XG5cbiAgICAvLyA0LiBSZXR1cm4gdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBTdXBwb3J0ZWRMb2NhbGVzIGFic3RyYWN0IG9wZXJhdGlvblxuICAgIC8vICAgIChkZWZpbmVkIGluIDkuMi44KSB3aXRoIGFyZ3VtZW50cyBhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzLFxuICAgIC8vICAgIGFuZCBvcHRpb25zLlxuICAgIHJldHVybiBTdXBwb3J0ZWRMb2NhbGVzKGF2YWlsYWJsZUxvY2FsZXMsIHJlcXVlc3RlZExvY2FsZXMsIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgZm9yIGEgZGF0ZSBjb21wb25lbnQsIHJlc29sdmVkIHVzaW5nIG11bHRpcGxlIGluaGVyaXRhbmNlIGFzIHNwZWNpZmllZFxuICogYXMgc3BlY2lmaWVkIGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAzNS5cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZURhdGVTdHJpbmcoZGF0YSwgY2EsIGNvbXBvbmVudCwgd2lkdGgsIGtleSkge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS5odG1sI011bHRpcGxlX0luaGVyaXRhbmNlOlxuICAgIC8vICdJbiBjbGVhcmx5IHNwZWNpZmllZCBpbnN0YW5jZXMsIHJlc291cmNlcyBtYXkgaW5oZXJpdCBmcm9tIHdpdGhpbiB0aGUgc2FtZSBsb2NhbGUuXG4gICAgLy8gIEZvciBleGFtcGxlLCAuLi4gdGhlIEJ1ZGRoaXN0IGNhbGVuZGFyIGluaGVyaXRzIGZyb20gdGhlIEdyZWdvcmlhbiBjYWxlbmRhci4nXG4gICAgdmFyIG9iaiA9IGRhdGFbY2FdICYmIGRhdGFbY2FdW2NvbXBvbmVudF1cbiAgICAgICAgICAgICAgICA/IGRhdGFbY2FdW2NvbXBvbmVudF1cbiAgICAgICAgICAgICAgICA6IGRhdGEuZ3JlZ29yeVtjb21wb25lbnRdLFxuXG4gICAgICAgIC8vIFwic2lkZXdheXNcIiBpbmhlcml0YW5jZSByZXNvbHZlcyBzdHJpbmdzIHdoZW4gYSBrZXkgZG9lc24ndCBleGlzdFxuICAgICAgICBhbHRzID0ge1xuICAgICAgICAgICAgbmFycm93OiBbJ3Nob3J0JywgJ2xvbmcnXSxcbiAgICAgICAgICAgIHNob3J0OiAgWydsb25nJywgJ25hcnJvdyddLFxuICAgICAgICAgICAgbG9uZzogICBbJ3Nob3J0JywgJ25hcnJvdyddXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy9cbiAgICAgICAgcmVzb2x2ZWQgPSBob3AuY2FsbChvYmosIHdpZHRoKVxuICAgICAgICAgICAgICAgICAgPyBvYmpbd2lkdGhdXG4gICAgICAgICAgICAgICAgICA6IGhvcC5jYWxsKG9iaiwgYWx0c1t3aWR0aF1bMF0pXG4gICAgICAgICAgICAgICAgICAgICAgPyBvYmpbYWx0c1t3aWR0aF1bMF1dXG4gICAgICAgICAgICAgICAgICAgICAgOiBvYmpbYWx0c1t3aWR0aF1bMV1dO1xuXG4gICAgLy8gYGtleWAgd291bGRuJ3QgYmUgc3BlY2lmaWVkIGZvciBjb21wb25lbnRzICdkYXlQZXJpb2RzJ1xuICAgIHJldHVybiBrZXkgIT0gbnVsbCA/IHJlc29sdmVkW2tleV0gOiByZXNvbHZlZDtcbn1cblxuLyoqXG4gKiBBIG1hcCB0aGF0IGRvZXNuJ3QgY29udGFpbiBPYmplY3QgaW4gaXRzIHByb3RvdHlwZSBjaGFpblxuICovXG5SZWNvcmQucHJvdG90eXBlID0gb2JqQ3JlYXRlKG51bGwpO1xuZnVuY3Rpb24gUmVjb3JkIChvYmopIHtcbiAgICAvLyBDb3B5IG9ubHkgb3duIHByb3BlcnRpZXMgb3ZlciB1bmxlc3MgdGhpcyBvYmplY3QgaXMgYWxyZWFkeSBhIFJlY29yZCBpbnN0YW5jZVxuICAgIGZvciAodmFyIGsgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBSZWNvcmQgfHwgaG9wLmNhbGwob2JqLCBrKSlcbiAgICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRoaXMsIGssIHsgdmFsdWU6IG9ialtrXSwgZW51bWVyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogQW4gb3JkZXJlZCBsaXN0XG4gKi9cbkxpc3QucHJvdG90eXBlID0gb2JqQ3JlYXRlKG51bGwpO1xuZnVuY3Rpb24gTGlzdCgpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbGVuZ3RoJywgeyB3cml0YWJsZTp0cnVlLCB2YWx1ZTogMCB9KTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKVxuICAgICAgICBhcnJQdXNoLmFwcGx5KHRoaXMsIGFyclNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG59XG5cbi8qKlxuICogQ29uc3RydWN0cyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byByZXN0b3JlIHRhaW50ZWQgUmVnRXhwIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUmVnRXhwUmVzdG9yZSAoKSB7XG4gICAgdmFyIGVzYyA9IC9bLj8qK14kW1xcXVxcXFwoKXt9fC1dL2csXG4gICAgICAgIGxtICA9IFJlZ0V4cC5sYXN0TWF0Y2ggfHwgJycsXG4gICAgICAgIG1sICA9IFJlZ0V4cC5tdWx0aWxpbmUgPyAnbScgOiAnJyxcbiAgICAgICAgcmV0ID0geyBpbnB1dDogUmVnRXhwLmlucHV0IH0sXG4gICAgICAgIHJlZyA9IG5ldyBMaXN0KCksXG4gICAgICAgIGhhcyA9IGZhbHNlLFxuICAgICAgICBjYXAgPSB7fTtcblxuICAgIC8vIENyZWF0ZSBhIHNuYXBzaG90IG9mIGFsbCB0aGUgJ2NhcHR1cmVkJyBwcm9wZXJ0aWVzXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gOTsgaSsrKVxuICAgICAgICBoYXMgPSAoY2FwWyckJytpXSA9IFJlZ0V4cFsnJCcraV0pIHx8IGhhcztcblxuICAgIC8vIE5vdyB3ZSd2ZSBzbmFwc2hvdHRlZCBzb21lIHByb3BlcnRpZXMsIGVzY2FwZSB0aGUgbGFzdE1hdGNoIHN0cmluZ1xuICAgIGxtID0gbG0ucmVwbGFjZShlc2MsICdcXFxcJCYnKTtcblxuICAgIC8vIElmIGFueSBvZiB0aGUgY2FwdHVyZWQgc3RyaW5ncyB3ZXJlIG5vbi1lbXB0eSwgaXRlcmF0ZSBvdmVyIHRoZW0gYWxsXG4gICAgaWYgKGhhcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSA5OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBtID0gY2FwWyckJytpXTtcblxuICAgICAgICAgICAgLy8gSWYgaXQncyBlbXB0eSwgYWRkIGFuIGVtcHR5IGNhcHR1cmluZyBncm91cFxuICAgICAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgICAgIGxtID0gJygpJyArIGxtO1xuXG4gICAgICAgICAgICAvLyBFbHNlIGZpbmQgdGhlIHN0cmluZyBpbiBsbSBhbmQgZXNjYXBlICYgd3JhcCBpdCB0byBjYXB0dXJlIGl0XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtID0gbS5yZXBsYWNlKGVzYywgJ1xcXFwkJicpO1xuICAgICAgICAgICAgICAgIGxtID0gbG0ucmVwbGFjZShtLCAnKCcgKyBtICsgJyknKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUHVzaCBpdCB0byB0aGUgcmVnIGFuZCBjaG9wIGxtIHRvIG1ha2Ugc3VyZSBmdXJ0aGVyIGdyb3VwcyBjb21lIGFmdGVyXG4gICAgICAgICAgICBhcnJQdXNoLmNhbGwocmVnLCBsbS5zbGljZSgwLCBsbS5pbmRleE9mKCcoJykgKyAxKSk7XG4gICAgICAgICAgICBsbSA9IGxtLnNsaWNlKGxtLmluZGV4T2YoJygnKSArIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gdGhhdCB3aWxsIHJlY29uc3RydWN0IHRoZSBSZWdFeHAgcHJvcGVydGllc1xuICAgIHJldC5leHAgPSBuZXcgUmVnRXhwKGFyckpvaW4uY2FsbChyZWcsICcnKSArIGxtLCBtbCk7XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIENvbnZlcnQgb25seSBhLXogdG8gdXBwZXJjYXNlIGFzIHBlciBzZWN0aW9uIDYuMSBvZiB0aGUgc3BlY1xuICovXG5mdW5jdGlvbiB0b0xhdGluVXBwZXJDYXNlIChzdHIpIHtcbiAgICB2YXIgaSA9IHN0ci5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHZhciBjaCA9IHN0ci5jaGFyQXQoaSk7XG5cbiAgICAgICAgaWYgKGNoID49IFwiYVwiICYmIGNoIDw9IFwielwiKVxuICAgICAgICAgICAgc3RyID0gc3RyLnNsaWNlKDAsIGkpICsgY2gudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZShpKzEpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG59XG5cbi8qKlxuICogTWltaWNzIEVTNSdzIGFic3RyYWN0IFRvT2JqZWN0KCkgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gdG9PYmplY3QgKGFyZykge1xuICAgIGlmIChhcmcgPT0gbnVsbClcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgbnVsbCBvciB1bmRlZmluZWQgdG8gb2JqZWN0Jyk7XG5cbiAgICByZXR1cm4gT2JqZWN0KGFyZyk7XG59XG5cbi8qKlxuICogUmV0dXJucyBcImludGVybmFsXCIgcHJvcGVydGllcyBmb3IgYW4gb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGdldEludGVybmFsUHJvcGVydGllcyAob2JqKSB7XG4gICAgaWYgKGhvcC5jYWxsKG9iaiwgJ19fZ2V0SW50ZXJuYWxQcm9wZXJ0aWVzJykpXG4gICAgICAgIHJldHVybiBvYmouX19nZXRJbnRlcm5hbFByb3BlcnRpZXMoc2VjcmV0KTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBvYmpDcmVhdGUobnVsbCk7XG59XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSW50bDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29yZS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbnRsL2xpYi9jb3JlLmpzXG4gKiogbW9kdWxlIGlkID0gMzE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiBqc2hpbnQgZXNuZXh0OiB0cnVlLCBsYXhicmVhazp0cnVlICovXG5cbi8qKlxuKiBEZWZpbmVzIHJlZ3VsYXIgZXhwcmVzc2lvbnMgZm9yIHZhcmlvdXMgb3BlcmF0aW9ucyByZWxhdGVkIHRvIHRoZSBCQ1AgNDcgc3ludGF4LFxuKiBhcyBkZWZpbmVkIGF0IGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL2JjcDQ3I3NlY3Rpb24tMi4xXG4qL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyXG4gICAgLy8gZXh0bGFuZyAgICAgICA9IDNBTFBIQSAgICAgICAgICAgICAgOyBzZWxlY3RlZCBJU08gNjM5IGNvZGVzXG4gICAgLy8gICAgICAgICAgICAgICAgICoyKFwiLVwiIDNBTFBIQSkgICAgICA7IHBlcm1hbmVudGx5IHJlc2VydmVkXG4gICAgZXh0bGFuZyA9ICdbYS16XXszfSg/Oi1bYS16XXszfSl7MCwyfScsXG5cbiAgICAvLyBsYW5ndWFnZSAgICAgID0gMiozQUxQSEEgICAgICAgICAgICA7IHNob3J0ZXN0IElTTyA2MzkgY29kZVxuICAgIC8vICAgICAgICAgICAgICAgICBbXCItXCIgZXh0bGFuZ10gICAgICAgOyBzb21ldGltZXMgZm9sbG93ZWQgYnlcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7IGV4dGVuZGVkIGxhbmd1YWdlIHN1YnRhZ3NcbiAgICAvLyAgICAgICAgICAgICAgIC8gNEFMUEhBICAgICAgICAgICAgICA7IG9yIHJlc2VydmVkIGZvciBmdXR1cmUgdXNlXG4gICAgLy8gICAgICAgICAgICAgICAvIDUqOEFMUEhBICAgICAgICAgICAgOyBvciByZWdpc3RlcmVkIGxhbmd1YWdlIHN1YnRhZ1xuICAgIGxhbmd1YWdlID0gJyg/OlthLXpdezIsM30oPzotJyArIGV4dGxhbmcgKyAnKT98W2Etel17NH18W2Etel17NSw4fSknLFxuXG4gICAgLy8gc2NyaXB0ICAgICAgICA9IDRBTFBIQSAgICAgICAgICAgICAgOyBJU08gMTU5MjQgY29kZVxuICAgIHNjcmlwdCA9ICdbYS16XXs0fScsXG5cbiAgICAvLyByZWdpb24gICAgICAgID0gMkFMUEhBICAgICAgICAgICAgICA7IElTTyAzMTY2LTEgY29kZVxuICAgIC8vICAgICAgICAgICAgICAgLyAzRElHSVQgICAgICAgICAgICAgIDsgVU4gTS40OSBjb2RlXG4gICAgcmVnaW9uID0gJyg/OlthLXpdezJ9fFxcXFxkezN9KScsXG5cbiAgICAvLyB2YXJpYW50ICAgICAgID0gNSo4YWxwaGFudW0gICAgICAgICA7IHJlZ2lzdGVyZWQgdmFyaWFudHNcbiAgICAvLyAgICAgICAgICAgICAgIC8gKERJR0lUIDNhbHBoYW51bSlcbiAgICB2YXJpYW50ID0gJyg/OlthLXowLTldezUsOH18XFxcXGRbYS16MC05XXszfSknLFxuXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOyBTaW5nbGUgYWxwaGFudW1lcmljc1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDsgXCJ4XCIgcmVzZXJ2ZWQgZm9yIHByaXZhdGUgdXNlXG4gICAgLy8gc2luZ2xldG9uICAgICA9IERJR0lUICAgICAgICAgICAgICAgOyAwIC0gOVxuICAgIC8vICAgICAgICAgICAgICAgLyAleDQxLTU3ICAgICAgICAgICAgIDsgQSAtIFdcbiAgICAvLyAgICAgICAgICAgICAgIC8gJXg1OS01QSAgICAgICAgICAgICA7IFkgLSBaXG4gICAgLy8gICAgICAgICAgICAgICAvICV4NjEtNzcgICAgICAgICAgICAgOyBhIC0gd1xuICAgIC8vICAgICAgICAgICAgICAgLyAleDc5LTdBICAgICAgICAgICAgIDsgeSAtIHpcbiAgICBzaW5nbGV0b24gPSAnWzAtOWEtd3ktel0nLFxuXG4gICAgLy8gZXh0ZW5zaW9uICAgICA9IHNpbmdsZXRvbiAxKihcIi1cIiAoMio4YWxwaGFudW0pKVxuICAgIGV4dGVuc2lvbiA9IHNpbmdsZXRvbiArICcoPzotW2EtejAtOV17Miw4fSkrJyxcblxuICAgIC8vIHByaXZhdGV1c2UgICAgPSBcInhcIiAxKihcIi1cIiAoMSo4YWxwaGFudW0pKVxuICAgIHByaXZhdGV1c2UgPSAneCg/Oi1bYS16MC05XXsxLDh9KSsnLFxuXG4gICAgLy8gaXJyZWd1bGFyICAgICA9IFwiZW4tR0Itb2VkXCIgICAgICAgICA7IGlycmVndWxhciB0YWdzIGRvIG5vdCBtYXRjaFxuICAgIC8vICAgICAgICAgICAgICAgLyBcImktYW1pXCIgICAgICAgICAgICAgOyB0aGUgJ2xhbmd0YWcnIHByb2R1Y3Rpb24gYW5kXG4gICAgLy8gICAgICAgICAgICAgICAvIFwiaS1ibm5cIiAgICAgICAgICAgICA7IHdvdWxkIG5vdCBvdGhlcndpc2UgYmVcbiAgICAvLyAgICAgICAgICAgICAgIC8gXCJpLWRlZmF1bHRcIiAgICAgICAgIDsgY29uc2lkZXJlZCAnd2VsbC1mb3JtZWQnXG4gICAgLy8gICAgICAgICAgICAgICAvIFwiaS1lbm9jaGlhblwiICAgICAgICA7IFRoZXNlIHRhZ3MgYXJlIGFsbCB2YWxpZCxcbiAgICAvLyAgICAgICAgICAgICAgIC8gXCJpLWhha1wiICAgICAgICAgICAgIDsgYnV0IG1vc3QgYXJlIGRlcHJlY2F0ZWRcbiAgICAvLyAgICAgICAgICAgICAgIC8gXCJpLWtsaW5nb25cIiAgICAgICAgIDsgaW4gZmF2b3Igb2YgbW9yZSBtb2Rlcm5cbiAgICAvLyAgICAgICAgICAgICAgIC8gXCJpLWx1eFwiICAgICAgICAgICAgIDsgc3VidGFncyBvciBzdWJ0YWdcbiAgICAvLyAgICAgICAgICAgICAgIC8gXCJpLW1pbmdvXCIgICAgICAgICAgIDsgY29tYmluYXRpb25cbiAgICAvLyAgICAgICAgICAgICAgIC8gXCJpLW5hdmFqb1wiXG4gICAgLy8gICAgICAgICAgICAgICAvIFwiaS1wd25cIlxuICAgIC8vICAgICAgICAgICAgICAgLyBcImktdGFvXCJcbiAgICAvLyAgICAgICAgICAgICAgIC8gXCJpLXRheVwiXG4gICAgLy8gICAgICAgICAgICAgICAvIFwiaS10c3VcIlxuICAgIC8vICAgICAgICAgICAgICAgLyBcInNnbi1CRS1GUlwiXG4gICAgLy8gICAgICAgICAgICAgICAvIFwic2duLUJFLU5MXCJcbiAgICAvLyAgICAgICAgICAgICAgIC8gXCJzZ24tQ0gtREVcIlxuICAgIGlycmVndWxhciA9ICcoPzplbi1HQi1vZWQnXG4gICAgICAgICAgICAgICsgJ3xpLSg/OmFtaXxibm58ZGVmYXVsdHxlbm9jaGlhbnxoYWt8a2xpbmdvbnxsdXh8bWluZ298bmF2YWpvfHB3bnx0YW98dGF5fHRzdSknXG4gICAgICAgICAgICAgICsgJ3xzZ24tKD86QkUtRlJ8QkUtTkx8Q0gtREUpKScsXG5cbiAgICAvLyByZWd1bGFyICAgICAgID0gXCJhcnQtbG9qYmFuXCIgICAgICAgIDsgdGhlc2UgdGFncyBtYXRjaCB0aGUgJ2xhbmd0YWcnXG4gICAgLy8gICAgICAgICAgICAgICAvIFwiY2VsLWdhdWxpc2hcIiAgICAgICA7IHByb2R1Y3Rpb24sIGJ1dCB0aGVpciBzdWJ0YWdzXG4gICAgLy8gICAgICAgICAgICAgICAvIFwibm8tYm9rXCIgICAgICAgICAgICA7IGFyZSBub3QgZXh0ZW5kZWQgbGFuZ3VhZ2VcbiAgICAvLyAgICAgICAgICAgICAgIC8gXCJuby1ueW5cIiAgICAgICAgICAgIDsgb3IgdmFyaWFudCBzdWJ0YWdzOiB0aGVpciBtZWFuaW5nXG4gICAgLy8gICAgICAgICAgICAgICAvIFwiemgtZ3VveXVcIiAgICAgICAgICA7IGlzIGRlZmluZWQgYnkgdGhlaXIgcmVnaXN0cmF0aW9uXG4gICAgLy8gICAgICAgICAgICAgICAvIFwiemgtaGFra2FcIiAgICAgICAgICA7IGFuZCBhbGwgb2YgdGhlc2UgYXJlIGRlcHJlY2F0ZWRcbiAgICAvLyAgICAgICAgICAgICAgIC8gXCJ6aC1taW5cIiAgICAgICAgICAgIDsgaW4gZmF2b3Igb2YgYSBtb3JlIG1vZGVyblxuICAgIC8vICAgICAgICAgICAgICAgLyBcInpoLW1pbi1uYW5cIiAgICAgICAgOyBzdWJ0YWcgb3Igc2VxdWVuY2Ugb2Ygc3VidGFnc1xuICAgIC8vICAgICAgICAgICAgICAgLyBcInpoLXhpYW5nXCJcbiAgICByZWd1bGFyID0gJyg/OmFydC1sb2piYW58Y2VsLWdhdWxpc2h8bm8tYm9rfG5vLW55bidcbiAgICAgICAgICAgICsgJ3x6aC0oPzpndW95dXxoYWtrYXxtaW58bWluLW5hbnx4aWFuZykpJyxcblxuICAgIC8vIGdyYW5kZmF0aGVyZWQgPSBpcnJlZ3VsYXIgICAgICAgICAgIDsgbm9uLXJlZHVuZGFudCB0YWdzIHJlZ2lzdGVyZWRcbiAgICAvLyAgICAgICAgICAgICAgIC8gcmVndWxhciAgICAgICAgICAgICA7IGR1cmluZyB0aGUgUkZDIDMwNjYgZXJhXG4gICAgZ3JhbmRmYXRoZXJlZCA9ICcoPzonICsgaXJyZWd1bGFyICsgJ3wnICsgcmVndWxhciArICcpJyxcblxuICAgIC8vIGxhbmd0YWcgICAgICAgPSBsYW5ndWFnZVxuICAgIC8vICAgICAgICAgICAgICAgICBbXCItXCIgc2NyaXB0XVxuICAgIC8vICAgICAgICAgICAgICAgICBbXCItXCIgcmVnaW9uXVxuICAgIC8vICAgICAgICAgICAgICAgICAqKFwiLVwiIHZhcmlhbnQpXG4gICAgLy8gICAgICAgICAgICAgICAgICooXCItXCIgZXh0ZW5zaW9uKVxuICAgIC8vICAgICAgICAgICAgICAgICBbXCItXCIgcHJpdmF0ZXVzZV1cbiAgICBsYW5ndGFnID0gbGFuZ3VhZ2UgKyAnKD86LScgKyBzY3JpcHQgKyAnKT8oPzotJyArIHJlZ2lvbiArICcpPyg/Oi0nXG4gICAgICAgICAgICArIHZhcmlhbnQgKyAnKSooPzotJyArIGV4dGVuc2lvbiArICcpKig/Oi0nICsgcHJpdmF0ZXVzZSArICcpPyc7XG5cbnZhciBleHBCQ1A0N1N5bnRheCA9IFJlZ0V4cCgnXig/OicrbGFuZ3RhZysnfCcrcHJpdmF0ZXVzZSsnfCcrZ3JhbmRmYXRoZXJlZCsnKSQnLCAnaScpO1xuXG52YXIgZXhwVmFyaWFudER1cGVzID0gUmVnRXhwKCdeKD8heCkuKj8tKCcrdmFyaWFudCsnKS0oPzpcXFxcd3s0LDh9LSg/IXgtKSkqXFxcXDFcXFxcYicsICdpJyk7XG5cbnZhciBleHBTaW5nbGV0b25EdXBlcyA9IFJlZ0V4cCgnXig/IXgpLio/LSgnK3NpbmdsZXRvbisnKS0oPzpcXFxcdystKD8heC0pKSpcXFxcMVxcXFxiJywgJ2knKTtcblxudmFyIGV4cEV4dFNlcXVlbmNlcyA9IFJlZ0V4cCgnLScrZXh0ZW5zaW9uLCAnaWcnKTtcbmV4cG9ydHMuZXhwQkNQNDdTeW50YXggPSBleHBCQ1A0N1N5bnRheCwgZXhwb3J0cy5leHBWYXJpYW50RHVwZXMgPSBleHBWYXJpYW50RHVwZXMsIGV4cG9ydHMuZXhwU2luZ2xldG9uRHVwZXMgPSBleHBTaW5nbGV0b25EdXBlcywgZXhwb3J0cy5leHBFeHRTZXF1ZW5jZXMgPSBleHBFeHRTZXF1ZW5jZXM7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4cC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbnRsL2xpYi9leHAuanNcbiAqKiBtb2R1bGUgaWQgPSAzMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9sb2NhbGUtZGF0YS9jb21wbGV0ZS5qcyAoaWdub3JlZClcbiAqKiBtb2R1bGUgaWQgPSA0NTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=