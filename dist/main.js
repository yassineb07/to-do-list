(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function a(e){t(1,arguments);var a=Object.prototype.toString.call(e);return e instanceof Date||"object"===n(e)&&"[object Date]"===a?new Date(e.getTime()):"number"==typeof e||"[object Number]"===a?new Date(e):("string"!=typeof e&&"[object String]"!==a||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function r(n){if(t(1,arguments),!function(n){return t(1,arguments),n instanceof Date||"object"===e(n)&&"[object Date]"===Object.prototype.toString.call(n)}(n)&&"number"!=typeof n)return!1;var r=a(n);return!isNaN(Number(r))}function i(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function o(e){t(1,arguments);var n=a(e),r=n.getUTCDay(),i=(r<1?7:0)+r-1;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function d(e){t(1,arguments);var n=a(e),r=n.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(r+1,0,4),i.setUTCHours(0,0,0,0);var d=o(i),u=new Date(0);u.setUTCFullYear(r,0,4),u.setUTCHours(0,0,0,0);var s=o(u);return n.getTime()>=d.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}var u={};function s(){return u}function c(e,n){var r,o,d,u,c,l,m,f;t(1,arguments);var h=s(),g=i(null!==(r=null!==(o=null!==(d=null!==(u=null==n?void 0:n.weekStartsOn)&&void 0!==u?u:null==n||null===(c=n.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==d?d:h.weekStartsOn)&&void 0!==o?o:null===(m=h.locale)||void 0===m||null===(f=m.options)||void 0===f?void 0:f.weekStartsOn)&&void 0!==r?r:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=a(e),w=v.getUTCDay(),y=(w<g?7:0)+w-g;return v.setUTCDate(v.getUTCDate()-y),v.setUTCHours(0,0,0,0),v}function l(e,n){var r,o,d,u,l,m,f,h;t(1,arguments);var g=a(e),v=g.getUTCFullYear(),w=s(),y=i(null!==(r=null!==(o=null!==(d=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(l=n.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==d?d:w.firstWeekContainsDate)&&void 0!==o?o:null===(f=w.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==r?r:1);if(!(y>=1&&y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(v+1,0,y),b.setUTCHours(0,0,0,0);var p=c(b,n),k=new Date(0);k.setUTCFullYear(v,0,y),k.setUTCHours(0,0,0,0);var C=c(k,n);return g.getTime()>=p.getTime()?v+1:g.getTime()>=C.getTime()?v:v-1}function m(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const f=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return m("yy"===e?a%100:a,e.length)},h=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):m(n+1,2)},g=function(t,e){return m(t.getUTCDate(),e.length)},v=function(t,e){return m(t.getUTCHours()%12||12,e.length)},w=function(t,e){return m(t.getUTCHours(),e.length)},y=function(t,e){return m(t.getUTCMinutes(),e.length)},b=function(t,e){return m(t.getUTCSeconds(),e.length)},p=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return m(Math.floor(a*Math.pow(10,n-3)),e.length)};var k={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return f(t,e)},Y:function(t,e,n,a){var r=l(t,a),i=r>0?r:1-r;return"YY"===e?m(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):m(i,e.length)},R:function(t,e){return m(d(t),e.length)},u:function(t,e){return m(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return m(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return m(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return h(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return m(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,n,r,o){var d=function(e,n){t(1,arguments);var r=a(e),o=c(r,n).getTime()-function(e,n){var a,r,o,d,u,m,f,h;t(1,arguments);var g=s(),v=i(null!==(a=null!==(r=null!==(o=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(u=n.locale)||void 0===u||null===(m=u.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==o?o:g.firstWeekContainsDate)&&void 0!==r?r:null===(f=g.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==a?a:1),w=l(e,n),y=new Date(0);return y.setUTCFullYear(w,0,v),y.setUTCHours(0,0,0,0),c(y,n)}(r,n).getTime();return Math.round(o/6048e5)+1}(e,o);return"wo"===n?r.ordinalNumber(d,{unit:"week"}):m(d,n.length)},I:function(e,n,r){var i=function(e){t(1,arguments);var n=a(e),r=o(n).getTime()-function(e){t(1,arguments);var n=d(e),a=new Date(0);return a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0),o(a)}(n).getTime();return Math.round(r/6048e5)+1}(e);return"Io"===n?r.ordinalNumber(i,{unit:"week"}):m(i,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):g(t,e)},D:function(e,n,r){var i=function(e){t(1,arguments);var n=a(e),r=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var i=r-n.getTime();return Math.floor(i/864e5)+1}(e);return"Do"===n?r.ordinalNumber(i,{unit:"dayOfYear"}):m(i,n.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return m(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return m(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return m(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return v(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):w(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):m(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):m(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):y(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):b(t,e)},S:function(t,e){return p(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return T(r);case"XXXX":case"XX":return E(r);default:return E(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return T(r);case"xxxx":case"xx":return E(r);default:return E(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+C(r,":");default:return"GMT"+E(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+C(r,":");default:return"GMT"+E(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return m(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return m((a._originalDate||t).getTime(),e.length)}};function C(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=e||"";return n+String(r)+o+m(i,2)}function T(t,e){return t%60==0?(t>0?"-":"+")+m(Math.abs(t)/60,2):E(t,e)}function E(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+m(Math.floor(r/60),2)+n+m(r%60,2)}const D=k;var M=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},x=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},S={p:x,P:function(t,e){var n,a=t.match(/(P+)(p+)?/)||[],r=a[1],i=a[2];if(!i)return M(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",M(r,e)).replace("{{time}}",x(i,e))}};const P=S;var U=["D","DD"],L=["YY","YYYY"];function W(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var I={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function j(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var Y,B={date:j({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:j({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:j({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},N={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function O(t){return function(e,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):r;a=t.formattingValues[i]||t.formattingValues[r]}else{var o=t.defaultWidth,d=null!=n&&n.width?String(n.width):t.defaultWidth;a=t.values[d]||t.values[o]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function q(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var o,d=i[0],u=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(u)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(d))return n}(u):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(d))return n}(u);return o=t.valueCallback?t.valueCallback(s):s,{value:o=n.valueCallback?n.valueCallback(o):o,rest:e.slice(d.length)}}}const F={code:"en-US",formatDistance:function(t,e,n){var a,r=I[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:B,formatRelative:function(t,e,n,a){return N[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:O({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:O({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:O({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:O({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:O({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(Y={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(Y.matchPattern);if(!n)return null;var a=n[0],r=t.match(Y.parsePattern);if(!r)return null;var i=Y.valueCallback?Y.valueCallback(r[0]):r[0];return{value:i=e.valueCallback?e.valueCallback(i):i,rest:t.slice(a.length)}}),era:q({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:q({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:q({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:q({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:q({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var H=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,z=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,A=/^'([^]*?)'?$/,Q=/''/g,G=/[a-zA-Z]/;function X(e,n,o){var d,u,c,l,m,f,h,g,v,w,y,b,p,k,C,T,E,M;t(2,arguments);var x=String(n),S=s(),I=null!==(d=null!==(u=null==o?void 0:o.locale)&&void 0!==u?u:S.locale)&&void 0!==d?d:F,j=i(null!==(c=null!==(l=null!==(m=null!==(f=null==o?void 0:o.firstWeekContainsDate)&&void 0!==f?f:null==o||null===(h=o.locale)||void 0===h||null===(g=h.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:S.firstWeekContainsDate)&&void 0!==l?l:null===(v=S.locale)||void 0===v||null===(w=v.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==c?c:1);if(!(j>=1&&j<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Y=i(null!==(y=null!==(b=null!==(p=null!==(k=null==o?void 0:o.weekStartsOn)&&void 0!==k?k:null==o||null===(C=o.locale)||void 0===C||null===(T=C.options)||void 0===T?void 0:T.weekStartsOn)&&void 0!==p?p:S.weekStartsOn)&&void 0!==b?b:null===(E=S.locale)||void 0===E||null===(M=E.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==y?y:0);if(!(Y>=0&&Y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!I.localize)throw new RangeError("locale must contain localize property");if(!I.formatLong)throw new RangeError("locale must contain formatLong property");var B=a(e);if(!r(B))throw new RangeError("Invalid time value");var N=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(B),O=function(e,n){return t(2,arguments),function(e,n){t(2,arguments);var r=a(e).getTime(),o=i(n);return new Date(r+o)}(e,-i(n))}(B,N),q={firstWeekContainsDate:j,weekStartsOn:Y,locale:I,_originalDate:B};return x.match(z).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,P[e])(t,I.formatLong):t})).join("").match(H).map((function(t){if("''"===t)return"'";var a,r,i=t[0];if("'"===i)return(r=(a=t).match(A))?r[1].replace(Q,"'"):a;var d,u=D[i];if(u)return null!=o&&o.useAdditionalWeekYearTokens||(d=t,-1===L.indexOf(d))||W(t,n,String(e)),null!=o&&o.useAdditionalDayOfYearTokens||!function(t){return-1!==U.indexOf(t)}(t)||W(t,n,String(e)),u(O,t,I.localize,q);if(i.match(G))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return t})).join("")}const R=[{id:"inbox",name:"Inbox",tasks:[]}];function J(t){document.getElementById(t).classList.toggle("show")}const $=document.getElementById("projectBtn");$.addEventListener("click",(()=>{$.classList.add("hide"),J("projectForm")})),document.getElementById("cancelProject").addEventListener("click",(t=>{t.preventDefault(),$.classList.remove("hide"),J("projectForm")}));const _=document.getElementById("formBtn");_.addEventListener("click",(()=>{_.classList.add("hide"),J("taskForm")})),document.getElementById("cancelTask").addEventListener("click",(t=>{t.preventDefault(),_.classList.remove("hide"),J("taskForm")}));let V="inbox";function K(){!function(){const t=document.getElementById("projectsList");for(;t.firstChild;)t.removeChild(t.firstChild)}(),function(){const t=document.getElementById("projectsList");R.forEach((e=>{if("inbox"===e.id)return;const n=function(t){const e=document.createElement("li"),n=document.createElement("img"),a=document.createElement("div"),r=document.createElement("img");e.id="projectItem",e.classList.add("project-item"),e.dataset.projectId=t.id,n.classList.add("project-icon");const i="../dist/icons";return n.src=`${i}/project.svg`,a.classList.add("project"),a.textContent=t.name,r.id="deleteProject",r.classList.add("project-icon"),r.src=`${i}/delete.svg`,a.appendChild(r),e.appendChild(n),e.appendChild(a),e}(e);t.appendChild(n)}))}()}function Z(t){!function(){const t=document.getElementById("tasksList");for(;t.firstChild;)t.removeChild(t.firstChild)}(),function(t){const e=document.getElementById("tasksList");t.forEach((t=>{e.appendChild(function(t){const e=document.createElement("li");e.classList.add("task-item"),e.dataset.taskId=t.id;const n=document.createElement("img");n.classList.add("task-icon"),n.id="checkbox";const a="../dist/icons";t.complete?(n.src=`${a}/checkbox.svg`,e.classList.add("check")):(n.src=`${a}/checkboxEmpty.svg`,e.classList.remove("check"));const i=document.createElement("div");i.classList.add("task-content");const o=document.createElement("div");o.classList.add("task-title"),o.textContent=t.title;const d=document.createElement("div");d.classList.add("task-disc"),d.textContent=t.disc;const u=document.createElement("img");u.id="deleteTask",u.classList.add("task-icon"),u.src=`${a}/delete.svg`;const s=document.createElement("img");s.id="dueDateIcon",s.classList.add("task-icon"),s.src=`${a}/calendar.svg`;const c=document.createElement("input");c.setAttribute("type","date"),c.id="dueDateInput",c.classList.add("task-input"),c.style.display="none";const l=document.createElement("p");return l.id="dueDateEl",r(t.dueDate)&&(l.textContent=X(t.dueDate,"MM/dd/yy"),s.style.display="none"),o.appendChild(l),o.appendChild(c),o.appendChild(s),o.appendChild(u),i.appendChild(o),i.appendChild(d),e.appendChild(n),e.appendChild(i),e}(t))}))}(t)}function tt(t){const e=R.find((e=>e.id===t));"object"==typeof e&&(document.getElementById("mainTitle").textContent=e.name,Z(e.tasks))}document.getElementById("inbox").addEventListener("click",(t=>{V=t.currentTarget.id,tt(V)}));const et=document.getElementById("projectsList");et.addEventListener("click",(t=>{"projectsList"!==t.target.id&&"deleteProject"!==t.target.id&&(V=t.target.parentElement.dataset.projectId,tt(V))})),document.getElementById("projectForm").addEventListener("submit",(t=>{t.preventDefault(),""!==document.getElementById("name").value&&(function(){const t=(e=document.getElementById("name").value,{id:Date.now().toString(),name:e,tasks:[]});var e;R.push(t)}(),K(),document.getElementById("name").value="")})),et.addEventListener("click",(t=>{"deleteProject"===t.target.id&&(!function(t){const e=R.findIndex((e=>e.id===t));R.splice(e,1)}(t.target.parentElement.parentElement.dataset.projectId),K(),V=R[0].id,tt(V))})),document.getElementById("taskForm").addEventListener("submit",(t=>{if(t.preventDefault(),""===document.getElementById("title").value)return;const e=R.find((t=>t.id===V));(function(t){const e={title:document.getElementById("title").value,disc:document.getElementById("disc").value,dueDate:document.getElementById("dueDate").value},n=(a=e.title,r=e.disc,i=e.dueDate,{id:Date.now().toString(),title:a,disc:r,dueDate:new Date(i),complete:!1});var a,r,i;t.tasks.push(n)})(e),Z(e.tasks),document.getElementById("title").value="",document.getElementById("disc").value="",document.getElementById("dueDate").value=""}));const nt=document.getElementById("tasksList");nt.addEventListener("click",(t=>{"deleteTask"===t.target.id&&(!function(t,e){const n=t.tasks.findIndex((t=>t.id===e));t.tasks.splice(n,1)}(R.find((t=>t.id===V)),t.target.parentElement.parentElement.parentElement.dataset.taskId),tt(V))})),nt.addEventListener("click",(t=>{if("checkbox"===t.target.id){(e=R.find((t=>t.id===V)).tasks.find((e=>e.id===t.target.parentElement.dataset.taskId))).complete?e.complete=!1:e.complete=!0,tt(V)}var e})),nt.addEventListener("click",(t=>{if("dueDateIcon"===t.target.id||"dueDateEl"===t.target.id){const e=t.target.parentElement.children[0],n=t.target.parentElement.children[1],a=t.target.parentElement.children[2];n.style.display="",e.textContent="",a.style.display="none"}})),nt.addEventListener("input",(t=>{if("dueDateInput"===t.target.id){e=R.find((t=>t.id===V)).tasks.find((e=>e.id===t.target.parentElement.parentElement.parentElement.dataset.taskId)),n=t.target.value,e.dueDate=new Date(n),tt(V)}var e,n})),tt("inbox")})();