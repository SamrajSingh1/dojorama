//>>built
require({cache:{"dojo/window":function(){define("./_base/lang ./sniff ./_base/window ./dom ./dom-geometry ./dom-style ./dom-construct".split(" "),function(f,k,m,e,a,b,c){k.add("rtl-adjust-position-for-verticalScrollBar",function(b,g){var d=m.body(g),e=c.create("div",{style:{overflow:"scroll",overflowX:"visible",direction:"rtl",visibility:"hidden",position:"absolute",left:"0",top:"0",width:"64px",height:"64px"}},d,"last"),s=c.create("div",{style:{overflow:"hidden",direction:"ltr"}},e,"last"),k=0!=
a.position(s).x;e.removeChild(s);d.removeChild(e);return k});k.add("position-fixed-support",function(b,g){var d=m.body(g),e=c.create("span",{style:{visibility:"hidden",position:"fixed",left:"1px",top:"1px"}},d,"last"),s=c.create("span",{style:{position:"fixed",left:"0",top:"0"}},e,"last"),k=a.position(s).x!=a.position(e).x;e.removeChild(s);d.removeChild(e);return k});var d={getBox:function(b){b=b||m.doc;var g="BackCompat"==b.compatMode?m.body(b):b.documentElement,e=a.docScroll(b);if(k("touch")){var c=
d.get(b);b=c.innerWidth||g.clientWidth;g=c.innerHeight||g.clientHeight}else b=g.clientWidth,g=g.clientHeight;return{l:e.x,t:e.y,w:b,h:g}},get:function(b){if(9>k("ie")&&d!==document.parentWindow){b.parentWindow.execScript("document._parentWindow \x3d window;","Javascript");var a=b._parentWindow;b._parentWindow=null;return a}return b.parentWindow||b.defaultView},scrollIntoView:function(d,g){try{d=e.byId(d);var c=d.ownerDocument||m.doc,v=m.body(c),s=c.documentElement||v.parentNode,f=k("ie"),t=k("webkit");
if(!(d==v||d==s))if(!k("mozilla")&&(!f&&!t&&!k("opera"))&&"scrollIntoView"in d)d.scrollIntoView(!1);else{var z="BackCompat"==c.compatMode,x=Math.min(v.clientWidth||s.clientWidth,s.clientWidth||v.clientWidth),p=Math.min(v.clientHeight||s.clientHeight,s.clientHeight||v.clientHeight),c=t||z?v:s,w=g||a.position(d),n=d.parentNode,t=function(a){return 6>=f||7==f&&z?!1:k("position-fixed-support")&&"fixed"==b.get(a,"position").toLowerCase()};if(!t(d))for(;n;){n==v&&(n=c);var h=a.position(n),D=t(n),y="rtl"==
b.getComputedStyle(n).direction.toLowerCase();if(n==c){h.w=x;h.h=p;c==s&&(f&&y)&&(h.x+=c.offsetWidth-h.w);if(0>h.x||!f||9<=f)h.x=0;if(0>h.y||!f||9<=f)h.y=0}else{var r=a.getPadBorderExtents(n);h.w-=r.w;h.h-=r.h;h.x+=r.l;h.y+=r.t;var q=n.clientWidth,u=h.w-q;0<q&&0<u&&(y&&k("rtl-adjust-position-for-verticalScrollBar")&&(h.x+=u),h.w=q);q=n.clientHeight;u=h.h-q;0<q&&0<u&&(h.h=q)}D&&(0>h.y&&(h.h+=h.y,h.y=0),0>h.x&&(h.w+=h.x,h.x=0),h.y+h.h>p&&(h.h=p-h.y),h.x+h.w>x&&(h.w=x-h.x));var E=w.x-h.x,F=w.y-h.y,H=
E+w.w-h.w,I=F+w.h-h.h,B,G;if(0<H*E&&(n.scrollLeft||n==c||n.scrollWidth>n.offsetHeight)){B=Math[0>E?"max":"min"](E,H);if(y&&(8==f&&!z||9<=f))B=-B;G=n.scrollLeft;n.scrollLeft+=B;B=n.scrollLeft-G;w.x-=B}if(0<I*F&&(n.scrollTop||n==c||n.scrollHeight>n.offsetHeight))B=Math.ceil(Math[0>F?"max":"min"](F,I)),G=n.scrollTop,n.scrollTop+=B,B=n.scrollTop-G,w.y-=B;n=n!=c&&!D&&n.parentNode}}}catch(J){console.error("scrollIntoView: "+J),d.scrollIntoView(!1)}}};f.setObject("dojo.window",d);return d})},"dojo/touch":function(){define("./_base/kernel ./aspect ./dom ./dom-class ./_base/lang ./on ./has ./mouse ./domReady ./_base/window".split(" "),
function(f,k,m,e,a,b,c,d,l,g){function A(a,d,c){return z&&c?function(a,E){return b(a,c,E)}:C?function(c,g){var e=b(c,d,g),u=b(c,a,function(b){(!q||(new Date).getTime()>q+1E3)&&g.call(this,b)});return{remove:function(){e.remove();u.remove()}}}:function(c,d){return b(c,a,d)}}function v(b){do if(b.dojoClick)return b;while(b=b.parentNode)}function s(a,c,d){var u=v(a.target);if(p=!a.target.disabled&&u&&u.dojoClick){var l="useTarget"==p;w=l?u:a.target;l&&a.preventDefault();n=a.touches?a.touches[0].pageX:
a.clientX;h=a.touches?a.touches[0].pageY:a.clientY;D=("object"==typeof p?p.x:"number"==typeof p?p:0)||4;y=("object"==typeof p?p.y:"number"==typeof p?p:0)||4;if(!x){x=!0;var f=function(b){p=l?m.isDescendant(g.doc.elementFromPoint(b.changedTouches?b.changedTouches[0].pageX:b.clientX,b.changedTouches?b.changedTouches[0].pageY:b.clientY),w):p&&b.target==w&&Math.abs((b.changedTouches?b.changedTouches[0].pageX:b.clientX)-n)<=D&&Math.abs((b.changedTouches?b.changedTouches[0].pageY:b.clientY)-h)<=y};g.doc.addEventListener(c,
function(b){f(b);l&&b.preventDefault()},!0);g.doc.addEventListener(d,function(a){f(a);if(p){r=(new Date).getTime();var c=l?w:a.target;"LABEL"===c.tagName&&(c=m.byId(c.getAttribute("for"))||c);setTimeout(function(){b.emit(c,"click",{bubbles:!0,cancelable:!0,_dojo_click:!0})},0)}},!0);a=function(b){g.doc.addEventListener(b,function(a){!a._dojo_click&&((new Date).getTime()<=r+1E3&&!("INPUT"==a.target.tagName&&e.contains(a.target,"dijitOffScreen")))&&(a.stopPropagation(),a.stopImmediatePropagation&&a.stopImmediatePropagation(),
"click"==b&&(("INPUT"!=a.target.tagName||"radio"==a.target.type||"checkbox"==a.target.type)&&"TEXTAREA"!=a.target.tagName&&"AUDIO"!=a.target.tagName&&"VIDEO"!=a.target.tagName)&&a.preventDefault())},!0)};a("click");a("mousedown");a("mouseup")}}}var C=c("touch"),t=5>c("ios"),z=navigator.msPointerEnabled,x,p,w,n,h,D,y,r,q,u;C&&(z?l(function(){g.doc.addEventListener("MSPointerDown",function(b){s(b,"MSPointerMove","MSPointerUp")},!0)}):l(function(){function d(b){var g=a.delegate(b,{bubbles:!0});6<=c("ios")&&
(g.touches=b.touches,g.altKey=b.altKey,g.changedTouches=b.changedTouches,g.ctrlKey=b.ctrlKey,g.metaKey=b.metaKey,g.shiftKey=b.shiftKey,g.targetTouches=b.targetTouches);return g}u=g.body();g.doc.addEventListener("touchstart",function(a){q=(new Date).getTime();var c=u;u=a.target;b.emit(c,"dojotouchout",{relatedTarget:u,bubbles:!0});b.emit(u,"dojotouchover",{relatedTarget:c,bubbles:!0});s(a,"touchmove","touchend")},!0);b(g.doc,"touchmove",function(a){q=(new Date).getTime();var c=g.doc.elementFromPoint(a.pageX-
(t?0:g.global.pageXOffset),a.pageY-(t?0:g.global.pageYOffset));c&&(u!==c&&(b.emit(u,"dojotouchout",{relatedTarget:c,bubbles:!0}),b.emit(c,"dojotouchover",{relatedTarget:u,bubbles:!0}),u=c),b.emit(c,"dojotouchmove",d(a))||a.preventDefault())});b(g.doc,"touchend",function(a){q=(new Date).getTime();var c=g.doc.elementFromPoint(a.pageX-(t?0:g.global.pageXOffset),a.pageY-(t?0:g.global.pageYOffset))||g.body();b.emit(c,"dojotouchend",d(a))})}));k={press:A("mousedown","touchstart","MSPointerDown"),move:A("mousemove",
"dojotouchmove","MSPointerMove"),release:A("mouseup","dojotouchend","MSPointerUp"),cancel:A(d.leave,"touchcancel",C?"MSPointerCancel":null),over:A("mouseover","dojotouchover","MSPointerOver"),out:A("mouseout","dojotouchout","MSPointerOut"),enter:d._eventHandler(A("mouseover","dojotouchover","MSPointerOver")),leave:d._eventHandler(A("mouseout","dojotouchout","MSPointerOut"))};return f.touch=k})},"dojo/Stateful":function(){define(["./_base/declare","./_base/lang","./_base/array","./when"],function(f,
k,m,e){return f("dojo.Stateful",null,{_attrPairNames:{},_getAttrNames:function(a){var b=this._attrPairNames;return b[a]?b[a]:b[a]={s:"_"+a+"Setter",g:"_"+a+"Getter"}},postscript:function(a){a&&this.set(a)},_get:function(a,b){return"function"===typeof this[b.g]?this[b.g]():this[a]},get:function(a){return this._get(a,this._getAttrNames(a))},set:function(a,b){if("object"===typeof a){for(var c in a)a.hasOwnProperty(c)&&"_watchCallbacks"!=c&&this.set(c,a[c]);return this}c=this._getAttrNames(a);var d=this._get(a,
c);c=this[c.s];var l;"function"===typeof c?l=c.apply(this,Array.prototype.slice.call(arguments,1)):this[a]=b;if(this._watchCallbacks){var g=this;e(l,function(){g._watchCallbacks(a,d,b)})}return this},_changeAttrValue:function(a,b){var c=this.get(a);this[a]=b;this._watchCallbacks&&this._watchCallbacks(a,c,b);return this},watch:function(a,b){var c=this._watchCallbacks;if(!c)var d=this,c=this._watchCallbacks=function(b,a,g,e){var l=function(c){if(c){c=c.slice();for(var e=0,l=c.length;e<l;e++)c[e].call(d,
b,a,g)}};l(c["_"+b]);e||l(c["*"])};!b&&"function"===typeof a?(b=a,a="*"):a="_"+a;var e=c[a];"object"!==typeof e&&(e=c[a]=[]);e.push(b);var g={};g.unwatch=g.remove=function(){var a=m.indexOf(e,b);-1<a&&e.splice(a,1)};return g}})})},"dojo/cache":function(){define(["./_base/kernel","./text"],function(f){return f.cache})},"dojo/text":function(){define(["./_base/kernel","require","./has","./request"],function(f,k,m,e){var a;a=function(b,a,c){e(b,{sync:!!a}).then(c)};var b={},c=function(b){if(b){b=b.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
"");var a=b.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);a&&(b=a[1])}else b="";return b},d={},l={};f.cache=function(d,e,l){var f;"string"==typeof d?/\//.test(d)?(f=d,l=e):f=k.toUrl(d.replace(/\./g,"/")+(e?"/"+e:"")):(f=d+"",l=e);d=void 0!=l&&"string"!=typeof l?l.value:l;l=l&&l.sanitize;if("string"==typeof d)return b[f]=d,l?c(d):d;if(null===d)return delete b[f],null;f in b||a(f,!0,function(a){b[f]=a});return l?c(b[f]):b[f]};return{dynamic:!0,normalize:function(b,a){var c=b.split("!"),d=c[0];return(/^\./.test(d)?
a(d):d)+(c[1]?"!"+c[1]:"")},load:function(e,f,m){e=e.split("!");var k=1<e.length,C=e[0],t=f.toUrl(e[0]);e="url:"+t;var z=d,x=function(b){m(k?c(b):b)};C in b?z=b[C]:f.cache&&e in f.cache?z=f.cache[e]:t in b&&(z=b[t]);if(z===d)if(l[t])l[t].push(x);else{var p=l[t]=[x];a(t,!f.async,function(a){b[C]=b[t]=a;for(var c=0;c<p.length;)p[c++](a);delete l[t]})}else x(z)}}})},"dojo/request":function(){define(["./request/default!"],function(f){return f})},"dojo/request/default":function(){define(["exports","require",
"../has"],function(f,k,m){var e=m("config-requestProvider");e||(e="./xhr");f.getPlatformDefaultId=function(){return"./xhr"};f.load=function(a,b,c,d){k(["platform"==a?"./xhr":e],function(b){c(b)})}})},"dojo/cookie":function(){define(["./_base/kernel","./regexp"],function(f,k){f.cookie=function(f,e,a){var b=document.cookie,c;if(1==arguments.length)c=(c=b.match(RegExp("(?:^|; )"+k.escapeString(f)+"\x3d([^;]*)")))?decodeURIComponent(c[1]):void 0;else{a=a||{};b=a.expires;if("number"==typeof b){var d=new Date;
d.setTime(d.getTime()+864E5*b);b=a.expires=d}b&&b.toUTCString&&(a.expires=b.toUTCString());e=encodeURIComponent(e);var b=f+"\x3d"+e,l;for(l in a)b+="; "+l,d=a[l],!0!==d&&(b+="\x3d"+d);document.cookie=b}return c};f.cookie.isSupported=function(){"cookieEnabled"in navigator||(this("__djCookieTest__","CookiesAllowed"),navigator.cookieEnabled="CookiesAllowed"==this("__djCookieTest__"),navigator.cookieEnabled&&this("__djCookieTest__","",{expires:-1}));return navigator.cookieEnabled};return f.cookie})},
"dojo/regexp":function(){define(["./_base/kernel","./_base/lang"],function(f,k){var m={};k.setObject("dojo.regexp",m);m.escapeString=function(e,a){return e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,function(b){return a&&-1!=a.indexOf(b)?b:"\\"+b})};m.buildGroupRE=function(e,a,b){if(!(e instanceof Array))return a(e);for(var c=[],d=0;d<e.length;d++)c.push(a(e[d]));return m.group(c.join("|"),b)};m.group=function(e,a){return"("+(a?"?:":"")+e+")"};return m})},"dojo/i18n":function(){define("./_base/kernel require ./has ./_base/array ./_base/config ./_base/lang ./_base/xhr ./json module".split(" "),
function(f,k,m,e,a,b,c,d,l){m.add("dojo-preload-i18n-Api",1);c=f.i18n={};var g=/(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/,A=function(b,a,c,d){var e=[c+d];a=a.split("-");for(var f="",l=0;l<a.length;l++)if(f+=(f?"-":"")+a[l],!b||b[f])e.push(c+f+"/"+d),e.specificity=f;return e},v={},s=function(b,a,c){c=c?c.toLowerCase():f.locale;b=b.replace(/\./g,"/");a=a.replace(/\./g,"/");return/root/i.test(c)?b+"/nls/"+a:b+"/nls/"+c+"/"+a},C=f.getL10nName=function(b,a,c){return l.id+"!"+s(b,a,c)},t=function(a,c,d,
e,f,l){a([c],function(g){var h=b.clone(g.root||g.ROOT),k=A(!g._v1x&&g,f,d,e);a(k,function(){for(var a=1;a<k.length;a++)h=b.mixin(b.clone(h),arguments[a]);v[c+"/"+f]=h;h.$locale=k.specificity;l()})})},z=function(c){var d=a.extraLocale||[],d=b.isArray(d)?d:[d];d.push(c);return d},x=function(a,c,l){if(m("dojo-preload-i18n-Api")){var k=a.split("*"),p="preload"==k[1];p&&(v[a]||(v[a]=1,D(k[2],d.parse(k[3]),1,c)),l(1));if(!(k=p))n&&h.push([a,c,l]),k=n;if(k)return}a=g.exec(a);var q=a[1]+"/",s=a[5]||a[4],
r=q+s,k=(a=a[5]&&a[4])||f.locale||"",w=r+"/"+k;a=a?[k]:z(k);var x=a.length,A=function(){--x||l(b.delegate(v[w]))};e.forEach(a,function(a){var b=r+"/"+a;m("dojo-preload-i18n-Api")&&y(b);v[b]?A():t(c,r,q,s,a,A)})};if(m("dojo-unit-tests"))var p=c.unitTests=[];m("dojo-preload-i18n-Api");var w=c.normalizeLocale=function(a){a=a?a.toLowerCase():f.locale;return"root"==a?"ROOT":a},n=0,h=[],D=c._preloadLocalizations=function(a,b,c,d){function l(a,b){d([a],b)}function g(a,b){for(var c=a.split("-");c.length;){if(b(c.join("-")))return;
c.pop()}b("ROOT")}function m(c){c=w(c);g(c,function(c){if(0<=e.indexOf(b,c)){var d=a.replace(/\./g,"/")+"_"+c;n++;l(d,function(a){for(var b in a)v[k.toAbsMid(b)+"/"+c]=a[b];for(--n;!n&&h.length;)x.apply(null,h.shift())});return!0}return!1})}d=d||k;m();e.forEach(f.config.extraLocale,m)},y=function(){},r={},q=new Function("__bundle","__checkForLegacyModules","__mid","__amdValue","var define \x3d function(mid, factory){define.called \x3d 1; __amdValue.result \x3d factory || mid;},\t   require \x3d function(){define.called \x3d 1;};try{define.called \x3d 0;eval(__bundle);if(define.called\x3d\x3d1)return __amdValue;if((__checkForLegacyModules \x3d __checkForLegacyModules(__mid)))return __checkForLegacyModules;}catch(e){}try{return eval('('+__bundle+')');}catch(e){return e;}"),
y=function(a){for(var b,c=a.split("/"),d=f.global[c[0]],e=1;d&&e<c.length-1;d=d[c[e++]]);d&&((b=d[c[e]])||(b=d[c[e].replace(/-/g,"_")]),b&&(v[a]=b));return b};c.getLocalization=function(a,b,c){var d;a=s(a,b,c);x(a,k,function(a){d=a});return d};m("dojo-unit-tests")&&p.push(function(a){a.register("tests.i18n.unit",function(a){var b;b=q("{prop:1}",y,"nonsense",r);a.is({prop:1},b);a.is(void 0,b[1]);b=q("({prop:1})",y,"nonsense",r);a.is({prop:1},b);a.is(void 0,b[1]);b=q("{'prop-x':1}",y,"nonsense",r);
a.is({"prop-x":1},b);a.is(void 0,b[1]);b=q("({'prop-x':1})",y,"nonsense",r);a.is({"prop-x":1},b);a.is(void 0,b[1]);b=q("define({'prop-x':1})",y,"nonsense",r);a.is(r,b);a.is({"prop-x":1},r.result);b=q("define('some/module', {'prop-x':1})",y,"nonsense",r);a.is(r,b);a.is({"prop-x":1},r.result);b=q("this is total nonsense and should throw an error",y,"nonsense",r);a.is(b instanceof Error,!0)})});return b.mixin(c,{dynamic:!0,normalize:function(a,b){return/^\./.test(a)?b(a):a},load:x,cache:v,getL10nName:C})})},
"dojo/string":function(){define(["./_base/kernel","./_base/lang"],function(f,k){var m={};k.setObject("dojo.string",m);m.rep=function(e,a){if(0>=a||!e)return"";for(var b=[];;){a&1&&b.push(e);if(!(a>>=1))break;e+=e}return b.join("")};m.pad=function(e,a,b,c){b||(b="0");e=String(e);a=m.rep(b,Math.ceil((a-e.length)/b.length));return c?e+a:a+e};m.substitute=function(e,a,b,c){c=c||f.global;b=b?k.hitch(c,b):function(a){return a};return e.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(d,e,f){d=
k.getObject(e,!1,a);f&&(d=k.getObject(f,!1,c).call(c,d,e));return b(d,e).toString()})};m.trim=String.prototype.trim?k.trim:function(e){e=e.replace(/^\s+/,"");for(var a=e.length-1;0<=a;a--)if(/\S/.test(e.charAt(a))){e=e.substring(0,a+1);break}return e};return m})},"dojo/_base/url":function(){define(["./kernel"],function(f){var k=/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,m=/^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/,e=function(){for(var a=arguments,b=[a[0]],
c=1;c<a.length;c++)if(a[c]){var d=new e(a[c]+""),b=new e(b[0]+"");if(""==d.path&&!d.scheme&&!d.authority&&!d.query)null!=d.fragment&&(b.fragment=d.fragment),d=b;else if(!d.scheme&&(d.scheme=b.scheme,!d.authority&&(d.authority=b.authority,"/"!=d.path.charAt(0)))){for(var b=(b.path.substring(0,b.path.lastIndexOf("/")+1)+d.path).split("/"),f=0;f<b.length;f++)"."==b[f]?f==b.length-1?b[f]="":(b.splice(f,1),f--):0<f&&(!(1==f&&""==b[0])&&".."==b[f]&&".."!=b[f-1])&&(f==b.length-1?(b.splice(f,1),b[f-1]=""):
(b.splice(f-1,2),f-=2));d.path=b.join("/")}b=[];d.scheme&&b.push(d.scheme,":");d.authority&&b.push("//",d.authority);b.push(d.path);d.query&&b.push("?",d.query);d.fragment&&b.push("#",d.fragment)}this.uri=b.join("");a=this.uri.match(k);this.scheme=a[2]||(a[1]?"":null);this.authority=a[4]||(a[3]?"":null);this.path=a[5];this.query=a[7]||(a[6]?"":null);this.fragment=a[9]||(a[8]?"":null);null!=this.authority&&(a=this.authority.match(m),this.user=a[3]||null,this.password=a[4]||null,this.host=a[6]||a[7],
this.port=a[9]||null)};e.prototype.toString=function(){return this.uri};return f._Url=e})}}});define("dojorama/layers/d07",[],1);
//@ sourceMappingURL=d07.js.map