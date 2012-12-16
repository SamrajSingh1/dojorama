//>>built
define("mijit/_WidgetBase","require,dojo/_base/array,dojo/aspect,dojo/_base/config,dojo/_base/connect,dojo/_base/declare,dojo/dom,dojo/dom-attr,dojo/dom-class,dojo/dom-construct,dojo/dom-geometry,dojo/dom-style,dojo/has,dojo/_base/kernel,dojo/_base/lang,dojo/on,dojo/ready,dojo/Stateful,dojo/topic,dojo/_base/window,./Destroyable,./registry".split(","),function(l,h,u,v,w,x,m,i,n,k,y,o,p,z,e,q,A,B,C,r,D,f){function s(a){return function(b){i[b?"set":"remove"](this.domNode,a,b);this._set(a,b)}}p.add("dijit-legacy-requires",
!z.isAsync);p("dijit-legacy-requires")&&A(0,function(){l(["dijit/_base/manager"])});var t={};return x("dijit._WidgetBase",[B,D],{id:"",_setIdAttr:"domNode",lang:"",_setLangAttr:s("lang"),dir:"",_setDirAttr:s("dir"),textDir:"","class":"",_setClassAttr:{node:"domNode",type:"class"},style:"",title:"",tooltip:"",baseClass:"",srcNodeRef:null,domNode:null,containerNode:null,ownerDocument:null,_setOwnerDocumentAttr:function(a){this._set("ownerDocument",a)},attributeMap:{},_blankGif:v.blankGif||l.toUrl("dojo/resources/blank.gif"),
postscript:function(a,b){this.create(a,b)},create:function(a,b){this.srcNodeRef=m.byId(b);this._connects=[];this._supportingWidgets=[];if(this.srcNodeRef&&"string"==typeof this.srcNodeRef.id)this.id=this.srcNodeRef.id;if(a)this.params=a,e.mixin(this,a);this.postMixInProperties();if(!this.id)this.id=f.getUniqueId(this.declaredClass.replace(/\./g,"_")),this.params&&delete this.params.id;this.ownerDocument=this.ownerDocument||(this.srcNodeRef?this.srcNodeRef.ownerDocument:r.doc);this.ownerDocumentBody=
r.body(this.ownerDocument);f.add(this);this.buildRendering();var c;if(this.domNode){this._applyAttributes();var d=this.srcNodeRef;d&&d.parentNode&&this.domNode!==d&&(d.parentNode.replaceChild(this.domNode,d),c=!0);this.domNode.setAttribute("widgetId",this.id)}this.postCreate();c&&delete this.srcNodeRef;this._created=!0},_applyAttributes:function(){var a=this.constructor,b=a._setterAttrs;if(!b){var b=a._setterAttrs=[],c;for(c in this.attributeMap)b.push(c);var a=a.prototype,d;for(d in a)d in this.attributeMap||
"_set"+d.replace(/^[a-z]|-[a-zA-Z]/g,function(a){return a.charAt(a.length-1).toUpperCase()})+"Attr"in a&&b.push(d)}var g={},e;for(e in this.params||{})g[e]=this[e];h.forEach(b,function(a){a in g||this[a]&&this.set(a,this[a])},this);for(e in g)this.set(e,g[e])},postMixInProperties:function(){},buildRendering:function(){if(!this.domNode)this.domNode=this.srcNodeRef||this.ownerDocument.createElement("div");if(this.baseClass){var a=this.baseClass.split(" ");this.isLeftToRight()||(a=a.concat(h.map(a,function(a){return a+
"Rtl"})));n.add(this.domNode,a)}},postCreate:function(){},startup:function(){if(!this._started)this._started=!0,h.forEach(this.getChildren(),function(a){if(!a._started&&!a._destroyed&&e.isFunction(a.startup))a.startup(),a._started=!0})},destroyRecursive:function(a){this._beingDestroyed=!0;this.destroyDescendants(a);this.destroy(a)},destroy:function(a){function b(b){b.destroyRecursive?b.destroyRecursive(a):b.destroy&&b.destroy(a)}this._beingDestroyed=!0;this.uninitialize();h.forEach(this._connects,
e.hitch(this,"disconnect"));h.forEach(this._supportingWidgets,b);this.domNode&&h.forEach(f.findWidgets(this.domNode,this.containerNode),b);this.destroyRendering(a);f.remove(this.id);this._destroyed=!0},destroyRendering:function(a){this.bgIframe&&(this.bgIframe.destroy(a),delete this.bgIframe);this.domNode&&(a?i.remove(this.domNode,"widgetId"):k.destroy(this.domNode),delete this.domNode);this.srcNodeRef&&(a||k.destroy(this.srcNodeRef),delete this.srcNodeRef)},destroyDescendants:function(a){h.forEach(this.getChildren(),
function(b){b.destroyRecursive&&b.destroyRecursive(a)})},uninitialize:function(){return!1},_setStyleAttr:function(a){var b=this.domNode;e.isObject(a)?o.set(b,a):b.style.cssText=b.style.cssText?b.style.cssText+("; "+a):a;this._set("style",a)},_attrToDom:function(a,b,c){c=3<=arguments.length?c:this.attributeMap[a];h.forEach(e.isArray(c)?c:[c],function(c){var g=this[c.node||c||"domNode"];switch(c.type||"attribute"){case "attribute":e.isFunction(b)&&(b=e.hitch(this,b));c=c.attribute?c.attribute:/^on[A-Z][a-zA-Z]*$/.test(a)?
a.toLowerCase():a;g.tagName?i.set(g,c,b):g.set(c,b);break;case "innerText":g.innerHTML="";g.appendChild(this.ownerDocument.createTextNode(b));break;case "innerHTML":g.innerHTML=b;break;case "class":n.replace(g,b,this[a])}},this)},get:function(a){var b=this._getAttrNames(a);return this[b.g]?this[b.g]():this[a]},set:function(a,b){if("object"===typeof a){for(var c in a)this.set(c,a[c]);return this}c=this._getAttrNames(a);var d=this[c.s];if(e.isFunction(d))var g=d.apply(this,Array.prototype.slice.call(arguments,
1));else{var d=this.focusNode&&!e.isFunction(this.focusNode)?"focusNode":"domNode",h=this[d]&&this[d].tagName,f;if(f=h)if(!(f=t[h])){f=this[d];var i={},j;for(j in f)i[j.toLowerCase()]=!0;f=t[h]=i}j=f;c=a in this.attributeMap?this.attributeMap[a]:c.s in this?this[c.s]:j&&c.l in j&&"function"!=typeof b||/^aria-|^data-|^role$/.test(a)?d:null;null!=c&&this._attrToDom(a,b,c);this._set(a,b)}return g||this},_attrPairNames:{},_getAttrNames:function(a){var b=this._attrPairNames;if(b[a])return b[a];var c=a.replace(/^[a-z]|-[a-zA-Z]/g,
function(a){return a.charAt(a.length-1).toUpperCase()});return b[a]={n:a+"Node",s:"_set"+c+"Attr",g:"_get"+c+"Attr",l:c.toLowerCase()}},_set:function(a,b){var c=this[a];this[a]=b;this._created&&b!==c&&(this._watchCallbacks&&this._watchCallbacks(a,c,b),this.emit("attrmodified-"+a,{detail:{prevValue:c,newValue:b}}))},emit:function(a,b,c){b=b||{};if(void 0===b.bubbles)b.bubbles=!0;if(void 0===b.cancelable)b.cancelable=!0;if(!b.detail)b.detail={};b.detail.widget=this;var d,e=this["on"+a];e&&(d=e.apply(this,
c?c:[b]));this._started&&!this._beingDestroyed&&q.emit(this.domNode,a.toLowerCase(),b);return d},on:function(a,b){var c=this._onMap(a);return c?u.after(this,c,b,!0):this.own(q(this.domNode,a,b))[0]},_onMap:function(a){var b=this.constructor,c=b._onMap;if(!c){var c=b._onMap={},d;for(d in b.prototype)/^on/.test(d)&&(c[d.replace(/^on/,"").toLowerCase()]=d)}return c["string"==typeof a&&a.toLowerCase()]},toString:function(){return"[Widget "+this.declaredClass+", "+(this.id||"NO ID")+"]"},getChildren:function(){return this.containerNode?
f.findWidgets(this.containerNode):[]},getParent:function(){return f.getEnclosingWidget(this.domNode.parentNode)},connect:function(a,b,c){return this.own(w.connect(a,b,this,c))[0]},disconnect:function(a){a.remove()},subscribe:function(a,b){return this.own(C.subscribe(a,e.hitch(this,b)))[0]},unsubscribe:function(a){a.remove()},isLeftToRight:function(){return this.dir?"ltr"==this.dir:y.isBodyLtr(this.ownerDocument)},isFocusable:function(){return this.focus&&"none"!=o.get(this.domNode,"display")},placeAt:function(a,
b){var c=!a.tagName&&f.byId(a);c&&c.addChild&&(!b||"number"===typeof b)?c.addChild(this,b):(c=c?c.containerNode&&!/after|before|replace/.test(b||"")?c.containerNode:c.domNode:m.byId(a,this.ownerDocument),k.place(this.domNode,c,b),!this._started&&(this.getParent()||{})._started&&this.startup());return this},getTextDir:function(a,b){return b},applyTextDir:function(){},defer:function(a,b){var c=setTimeout(e.hitch(this,function(){c=null;this._destroyed||e.hitch(this,a)()}),b||0);return{remove:function(){c&&
(clearTimeout(c),c=null);return null}}}})});