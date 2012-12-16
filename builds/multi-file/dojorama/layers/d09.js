//>>built
require({cache:{"dojo/store/Cache":function(){define("dojo/store/Cache",["../_base/lang","../_base/Deferred"],function(g,e){var f=function(d,c,b){b=b||{};return g.delegate(d,{query:function(a,r){var e=d.query(a,r);e.forEach(function(a){(!b.isLoaded||b.isLoaded(a))&&c.put(a)});return e},queryEngine:d.queryEngine||c.queryEngine,get:function(a,b){return e.when(c.get(a),function(n){return n||e.when(d.get(a,b),function(b){b&&c.put(b,{id:a});return b})})},add:function(a,b){return e.when(d.add(a,b),function(d){c.add(a&&
"object"==typeof d?d:a,b);return d})},put:function(a,b){c.remove(b&&b.id||this.getIdentity(a));return e.when(d.put(a,b),function(d){c.put(a&&"object"==typeof d?d:a,b);return d})},remove:function(a,b){return e.when(d.remove(a,b),function(){return c.remove(a,b)})},evict:function(a){return c.remove(a)}})};g.setObject("dojo.store.Cache",f);return f})},"dojo/store/JsonRest":function(){define("dojo/store/JsonRest",["../_base/xhr","../_base/lang","../json","../_base/declare","./util/QueryResults"],function(g,
e,f,d,c){return d("dojo.store.JsonRest",null,{constructor:function(b){this.headers={};d.safeMixin(this,b)},headers:{},target:"",idProperty:"id",get:function(b,a){var a=a||{},c=e.mixin({Accept:this.accepts},this.headers,a.headers||a);return g("GET",{url:this.target+b,handleAs:"json",headers:c})},accepts:"application/javascript, application/json",getIdentity:function(b){return b[this.idProperty]},put:function(b,a){var a=a||{},c="id"in a?a.id:this.getIdentity(b),d="undefined"!=typeof c;return g(d&&!a.incremental?
"PUT":"POST",{url:d?this.target+c:this.target,postData:f.stringify(b),handleAs:"json",headers:e.mixin({"Content-Type":"application/json",Accept:this.accepts,"If-Match":!0===a.overwrite?"*":null,"If-None-Match":!1===a.overwrite?"*":null},this.headers,a.headers)})},add:function(b,a){a=a||{};a.overwrite=!1;return this.put(b,a)},remove:function(b,a){a=a||{};return g("DELETE",{url:this.target+b,headers:e.mixin({},this.headers,a.headers)})},query:function(b,a){var a=a||{},d=e.mixin({Accept:this.accepts},
this.headers,a.headers);if(0<=a.start||0<=a.count)d.Range=d["X-Range"]="items="+(a.start||"0")+"-"+("count"in a&&Infinity!=a.count?a.count+(a.start||0)-1:"");var f=-1<this.target.indexOf("?");b&&"object"==typeof b&&(b=(b=g.objectToQuery(b))?(f?"&":"?")+b:"");if(a&&a.sort){for(var i=this.sortParam,b=b+((b||f?"&":"?")+(i?i+"=":"sort(")),f=0;f<a.sort.length;f++)var h=a.sort[f],b=b+((0<f?",":"")+(h.descending?"-":"+")+encodeURIComponent(h.attribute));i||(b+=")")}var j=g("GET",{url:this.target+(b||""),
handleAs:"json",headers:d});j.total=j.then(function(){var a=j.ioArgs.xhr.getResponseHeader("Content-Range");return a&&(a=a.match(/\/(.*)/))&&+a[1]});return c(j)}})})},"dojo/store/util/QueryResults":function(){define("dojo/store/util/QueryResults",["../../_base/array","../../_base/lang","../../_base/Deferred"],function(g,e,f){var d=function(c){function b(a){c[a]||(c[a]=function(){var b=arguments;return f.when(c,function(c){Array.prototype.unshift.call(b,c);return d(g[a].apply(g,b))})})}if(!c)return c;
c.then&&(c=e.delegate(c));b("forEach");b("filter");b("map");if(!c.total)c.total=f.when(c,function(a){return a.length});return c};e.setObject("dojo.store.util.QueryResults",d);return d})},"dojo/store/Memory":function(){define("dojo/store/Memory",["../_base/declare","./util/QueryResults","./util/SimpleQueryEngine"],function(g,e,f){return g("dojo.store.Memory",null,{constructor:function(d){for(var c in d)this[c]=d[c];this.setData(this.data||[])},data:null,idProperty:"id",index:null,queryEngine:f,get:function(d){return this.data[this.index[d]]},
getIdentity:function(d){return d[this.idProperty]},put:function(d,c){var b=this.data,a=this.index,e=this.idProperty,e=d[e]=c&&"id"in c?c.id:e in d?d[e]:Math.random();if(e in a){if(c&&!1===c.overwrite)throw Error("Object already exists");b[a[e]]=d}else a[e]=b.push(d)-1;return e},add:function(d,c){(c=c||{}).overwrite=!1;return this.put(d,c)},remove:function(d){var c=this.index,b=this.data;if(d in c)return b.splice(c[d],1),this.setData(b),!0},query:function(d,c){return e(this.queryEngine(d,c)(this.data))},
setData:function(d){var a;d.items?(this.idProperty=d.identifier,a=this.data=d.items,d=a):this.data=d;this.index={};for(var c=0,b=d.length;c<b;c++)this.index[d[c][this.idProperty]]=c}})})},"dojo/store/util/SimpleQueryEngine":function(){define("dojo/store/util/SimpleQueryEngine",["../../_base/array"],function(g){return function(e,f){function d(b){var b=g.filter(b,e),a=f&&f.sort;a&&b.sort("function"==typeof a?a:function(b,c){for(var d,e=0;d=a[e];e++){var f=b[d.attribute],g=c[d.attribute];if(f!=g)return!!d.descending==
(null==f||f>g)?-1:1}return 0});if(f&&(f.start||f.count)){var c=b.length,b=b.slice(f.start||0,(f.start||0)+(f.count||Infinity));b.total=c}return b}switch(typeof e){default:throw Error("Can not query with a "+typeof e);case "object":case "undefined":var c=e,e=function(b){for(var a in c){var d=c[a];if(d&&d.test){if(!d.test(b[a],b))return!1}else if(d!=b[a])return!1}return!0};break;case "string":if(!this[e])throw Error("No filter function "+e+" was found in store");e=this[e];case "function":}d.matches=
e;return d}})},"dojo/store/Observable":function(){define("dojo/store/Observable",["../_base/kernel","../_base/lang","../_base/Deferred","../_base/array"],function(g,e,f,d){g=function(c){function b(a,b){var d=c[a];d&&(c[a]=function(a){if(i)return d.apply(this,arguments);i=!0;try{var c=d.apply(this,arguments);f.when(c,function(c){b("object"==typeof c&&c||a)});return c}finally{i=!1}})}var a=[],g=0,c=e.delegate(c);c.notify=function(b,c){g++;for(var d=a.slice(),e=0,f=d.length;e<f;e++)d[e](b,c)};var n=
c.query;c.query=function(b,j){var j=j||{},i=n.apply(this,arguments);if(i&&i.forEach){var o=e.mixin({},j);delete o.start;delete o.count;var l=c.queryEngine&&c.queryEngine(b,o),s=g,p=[],q;i.observe=function(b,e){1==p.push(b)&&a.push(q=function(a,b){f.when(i,function(f){var i=f.length!=j.count,h,n;if(++s!=g)throw Error("Query is out of date, you must observe() the query prior to any data modifications");var o,m=-1,k=-1;if(void 0!==b)for(h=0,n=f.length;h<n;h++){var q=f[h];if(c.getIdentity(q)==b){o=q;
m=h;(l||!a)&&f.splice(h,1);break}}if(l){if(a&&(l.matches?l.matches(a):l([a]).length))h=-1<m?m:f.length,f.splice(h,0,a),k=d.indexOf(l(f),a),f.splice(h,1),j.start&&0==k||!i&&k==f.length?k=-1:f.splice(k,0,a)}else a&&(void 0!==b?k=m:j.start||(k=c.defaultIndex||0,f.splice(k,0,a)));if((-1<m||-1<k)&&(e||!l||m!=k)){i=p.slice();for(h=0;f=i[h];h++)f(a||o,m,k)}})});var h={};h.remove=h.cancel=function(){var c=d.indexOf(p,b);-1<c&&(p.splice(c,1),p.length||a.splice(d.indexOf(a,q),1))};return h}}return i};var i;
b("put",function(a){c.notify(a,c.getIdentity(a))});b("add",function(a){c.notify(a)});b("remove",function(a){c.notify(void 0,a)});return c};e.setObject("dojo.store.Observable",g);return g})}}});define("dojorama/layers/d09",[],1);