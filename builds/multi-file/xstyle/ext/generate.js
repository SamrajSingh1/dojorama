//>>built
define("xstyle/ext/generate",["../elemental","put-selector/put"],function(d,i){return{onProperty:function(e,f,g){d.addRenderer(e,f,g,function(j){for(var b=j,h=0,e=f.length;h<e;h++){var a=f[h];if(a.eachProperty)i(b,a.selector),d.update(b);else if("string"==typeof a){"="==a.charAt(0)&&(a=a.slice(1));for(var a=a.split(","),c=0,g=a.length;c<g;c++){var k=a[c].trim();k&&(b=i(0==c?b:j,k),d.update(b))}}else b.appendChild(document.createTextNode(a))}})}}});