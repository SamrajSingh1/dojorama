//>>built
define("mijit/_TemplatedMixin","dojo/_base/lang dojo/touch ./_WidgetBase dojo/string dojo/cache dojo/_base/array dojo/_base/declare dojo/dom-construct dojo/sniff dojo/_base/unload".split(" "),function(h,p,q,m,r,n,s,k,t,u){var f=s("dijit._TemplatedMixin",null,{templateString:null,templatePath:null,_skipNodeCache:!1,_earlyTemplatedStartup:!1,constructor:function(){this._attachPoints=[];this._attachEvents=[]},_stringRepl:function(a){var b=this.declaredClass,e=this;return m.substitute(a,this,function(a,
d){"!"==d.charAt(0)&&(a=h.getObject(d.substr(1),!1,e));if("undefined"==typeof a)throw Error(b+" template:"+d);return null==a?"":"!"==d.charAt(0)?a:a.toString().replace(/"/g,"\x26quot;")},this)},buildRendering:function(){this.templateString||(this.templateString=r(this.templatePath,{sanitize:!0}));var a=f.getCachedTemplate(this.templateString,this._skipNodeCache,this.ownerDocument),b;if(h.isString(a)){if(b=k.toDom(this._stringRepl(a),this.ownerDocument),1!=b.nodeType)throw Error("Invalid template: "+
a);}else b=a.cloneNode(!0);this.domNode=b;this.inherited(arguments);this._attachTemplateNodes(b,function(a,b){return a.getAttribute(b)});this._beforeFillContent();this._fillContent(this.srcNodeRef)},_beforeFillContent:function(){},_fillContent:function(a){var b=this.containerNode;if(a&&b)for(;a.hasChildNodes();)b.appendChild(a.firstChild)},_attachTemplateNodes:function(a,b){for(var e=h.isArray(a)?a:a.all||a.getElementsByTagName("*"),g=h.isArray(a)?0:-1;0>g||e[g];g++){var d=-1==g?a:e[g];if(!this.widgetsInTemplate||
!b(d,"dojoType")&&!b(d,"data-dojo-type")){var c=b(d,"dojoAttachPoint")||b(d,"data-dojo-attach-point");if(c)for(var f=c.split(/\s*,\s*/);c=f.shift();)h.isArray(this[c])?this[c].push(d):this[c]=d,this._attachPoints.push(c);if(c=b(d,"dojoAttachEvent")||b(d,"data-dojo-attach-event"))for(var f=c.split(/\s*,\s*/),k=h.trim;c=f.shift();)if(c){var l=null;-1!=c.indexOf(":")?(l=c.split(":"),c=k(l[0]),l=k(l[1])):c=k(c);l||(l=c);this._attachEvents.push(this.connect(d,p[c]||c,l))}}}},destroyRendering:function(){n.forEach(this._attachPoints,
function(a){delete this[a]},this);this._attachPoints=[];n.forEach(this._attachEvents,this.disconnect,this);this._attachEvents=[];this.inherited(arguments)}});f._templateCache={};f.getCachedTemplate=function(a,b,e){var g=f._templateCache,d=a,c=g[d];if(c){try{if(!c.ownerDocument||c.ownerDocument==(e||document))return c}catch(h){}k.destroy(c)}a=m.trim(a);if(b||a.match(/\$\{([^\}]+)\}/g))return g[d]=a;b=k.toDom(a,e);if(1!=b.nodeType)throw Error("Invalid template: "+a);return g[d]=b};t("ie")&&u.addOnWindowUnload(function(){var a=
f._templateCache,b;for(b in a){var e=a[b];"object"==typeof e&&k.destroy(e);delete a[b]}});h.extend(q,{dojoAttachEvent:"",dojoAttachPoint:""});return f});
//@ sourceMappingURL=_TemplatedMixin.js.map