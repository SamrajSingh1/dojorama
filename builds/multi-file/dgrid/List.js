//>>built
define("dgrid/List","dojo/_base/kernel dojo/_base/declare dojo/on dojo/has ./util/misc dojo/has!touch?./TouchScroll xstyle/has-class put-selector/put dojo/_base/sniff xstyle/css!./css/dgrid.css".split(" "),function(u,v,n,d,p,B,C,e){function w(a,b){var c=document.body,g;e(c,a,".dgrid-scrollbar-measure");g=a["offset"+b]-a["client"+b];e(a,"!dgrid-scrollbar-measure");c.removeChild(a);return g}function r(a){var b=a?"."+a.replace(x,"."):"";this._class&&(b="!"+this._class.replace(x,"!")+b);e(this.domNode,
b);this._class=a}function y(){return this._class}function z(){return{x:this.bodyNode.scrollLeft,y:this.bodyNode.scrollTop}}function A(a){"undefined"!==typeof a.x&&(this.bodyNode.scrollLeft=a.x);"undefined"!==typeof a.y&&(this.bodyNode.scrollTop=a.y)}C("mozilla","opera","webkit","ie","ie-6","ie-6-7","quirks","no-quirks","touch");var k,t;d.add("dom-scrollbar-width",function(a,b,c){return w(c,"Width")});d.add("dom-scrollbar-height",function(a,b,c){return w(c,"Height")});var D=0,x=/ +/g,E=7>d("ie")&&
!d("quirks")?function(){var a,b,c;if(this._started&&(a=document.documentElement,b=a.clientWidth,a=a.clientHeight,c=this._prevWinDims||[],c[0]!==b||c[1]!==a))this.resize(),this._prevWinDims=[b,a]}:function(){this._started&&this.resize()};return v(d("touch")?B:null,{tabableHeader:!1,showHeader:!1,showFooter:!1,maintainOddEven:!0,cleanAddedRules:!0,useTouchScroll:!0,cleanEmptyObservers:!0,highlightDuration:250,postscript:function(a,b){var c=this;(this._Row=function(a,b,c){this.id=a;this.data=b;this.element=
c}).prototype.remove=function(){c.removeRow(this.element)};b&&(this.srcNodeRef=b=b.nodeType?b:document.getElementById(b));this.create(a,b)},listType:"list",create:function(a,b){var c=this.domNode=b||e("div"),g;a?(this.params=a,v.safeMixin(this,a),g=a["class"]||a.className||c.className,this._sort=a.sort||[],delete this.sort):this._sort=[];this.observers=[];this._numObservers=0;this._listeners=[];this._rowIdToObject={};this.postMixInProperties&&this.postMixInProperties();this.id=c.id=c.id||this.id||
"dgrid_"+D++;this.buildRendering();g&&r.call(this,g);this.postCreate();delete this.srcNodeRef;this.domNode.offsetHeight&&this.startup()},buildRendering:function(){var a=this.domNode,b=this,c,g,h,f;f=this.isRTL="rtl"==(document.body.dir||document.documentElement.dir||document.body.style.direction).toLowerCase();a.className="";e(a,"[role\x3dgrid].ui-widget.dgrid.dgrid-"+this.listType);c=this.headerNode=e(a,"div.dgrid-header.dgrid-header-row.ui-widget-header"+(this.showHeader?"":".dgrid-header-hidden"));
(d("quirks")||8>d("ie"))&&e(a,"div.dgrid-spacer");g=this.bodyNode=e(a,"div.dgrid-scroller");g.tabIndex=-1;this.headerScrollNode=e(a,"div.dgrid-header-scroll.dgrid-scrollbar-width.ui-widget-header");h=this.footerNode=e("div.dgrid-footer"+(this.showFooter?"":".dgrid-footer-hidden"));e(a,h);f&&(a.className+=" dgrid-rtl"+(d("webkit")?"":" dgrid-rtl-nonwebkit"));n(g,"scroll",function(h){b.showHeader&&(c.scrollLeft=h.scrollLeft||g.scrollLeft);h.stopPropagation();n.emit(a,"scroll",{scrollTarget:g})});this.configStructure();
this.renderHeader();this.contentNode=this.touchNode=e(this.bodyNode,"div.dgrid-content.ui-widget-content");this._listeners.push(this._resizeHandle=n(window,"resize",p.throttleDelayed(E,this)))},postCreate:d("touch")?function(){this.useTouchScroll&&this.inherited(arguments)}:function(){},startup:function(){this._started||(this.inherited(arguments),this._started=!0,this.resize(),this.set("sort",this._sort))},configStructure:function(){},resize:function(){var a=this.bodyNode,b=this.headerNode,c=this.footerNode,
g=b.offsetHeight,h=this.showFooter?c.offsetHeight:0,f=d("quirks")||7>d("ie");this.headerScrollNode.style.height=a.style.marginTop=g+"px";a.style.marginBottom=h+"px";f&&(a.style.height="",a.style.height=Math.max(this.domNode.offsetHeight-g-h,0)+"px",h&&(c.style.bottom="1px",setTimeout(function(){c.style.bottom=""},0)));k||(k=d("dom-scrollbar-width"),t=d("dom-scrollbar-height"),d("ie")&&(k++,t++),p.addCssRule(".dgrid-scrollbar-width","width: "+k+"px"),p.addCssRule(".dgrid-scrollbar-height","height: "+
t+"px"),17!=k&&!f&&(p.addCssRule(".dgrid-header","right: "+k+"px"),p.addCssRule(".dgrid-rtl-nonwebkit .dgrid-header","left: "+k+"px")));f&&(b.style.width=a.clientWidth+"px",setTimeout(function(){b.scrollLeft=a.scrollLeft},0))},addCssRule:function(a,b){var c=p.addCssRule(a,b);this.cleanAddedRules&&this._listeners.push(c);return c},on:function(a,b){var c=n(this.domNode,a,b);d("dom-addeventlistener")||this._listeners.push(c);return c},cleanup:function(){var a=this.observers,b;for(b in this._rowIdToObject)if(this._rowIdToObject[b]!=
this.columns){var c=document.getElementById(b);c&&this.removeRow(c,!0)}for(b=0;b<a.length;b++)(c=a[b])&&c.cancel();this.observers=[];this._numObservers=0;this.preload=null},destroy:function(){if(this._listeners){for(var a=this._listeners.length;a--;)this._listeners[a].remove();delete this._listeners}this.cleanup();e(this.domNode,"!");this.inherited(arguments)},refresh:function(){this.cleanup();this._rowIdToObject={};this._autoId=0;this.contentNode.innerHTML="";this.scrollTo({x:0,y:0})},newRow:function(a,
b,c,g,h){if(b){var f=this.insertRow(a,b,c,g,h);e(f,".ui-state-highlight");setTimeout(function(){e(f,"!ui-state-highlight")},this.highlightDuration);return f}},adjustRowIndices:function(a){var b=a.rowIndex;if(-1<b){do-1<a.rowIndex&&(this.maintainOddEven&&-1<(a.className+" ").indexOf("dgrid-row ")&&e(a,"."+(1==b%2?"dgrid-row-odd":"dgrid-row-even")+"!"+(0==b%2?"dgrid-row-odd":"dgrid-row-even")),a.rowIndex=b++);while((a=a.nextSibling)&&a.rowIndex!=b)}},renderArray:function(a,b,c){function g(a){s=l.insertRow(a,
p,null,e++,c);s.observerIndex=q;return s}function h(a){"undefined"!==typeof q&&(d[q].cancel(),d[q]=0,l._numObservers--);if(a)throw a;}function f(a){(k=b?b.parentNode:l.contentNode)&&k.parentNode&&(k!==l.contentNode||a.length)?(k.insertBefore(p,b||null),(s=a[a.length-1])&&l.adjustRowIndices(s)):d[q]&&l.cleanEmptyObservers&&h();return m=a}c=c||{};var l=this,e=c.start||0,d=this.observers,m,k,q;b||(this._lastCollection=a);a.observe&&(l._numObservers++,q=d.push(a.observe(function(a,h,g){var f,d,e;-1<h&&
m[h]&&(f=m.splice(h,1)[0],f.parentNode==k&&((d=f.nextSibling)&&h!=g&&d.rowIndex--,l.removeRow(f)),l._processScroll&&l._processScroll());if(-1<g){if(m.length){if(e=m[g],!e&&(e=m[g-1]))e=(e.connected||e).nextSibling}else e=l._getFirstRowSibling&&l._getFirstRowSibling(k);f&&(e&&f.id===e.id)&&(e=(e.connected||e).nextSibling);e&&!e.parentNode&&(e=document.getElementById(e.id));f=b&&b.parentNode||e&&e.parentNode||l.contentNode;if(f=l.newRow(a,f,e,c.start+g,c))if(f.observerIndex=q,m.splice(g,0,f),!d||g<
h)d=f.previousSibling,d=!d||d.rowIndex+1==f.rowIndex||0==f.rowIndex?f:d;c.count++}h!=g&&d&&l.adjustRowIndices(d);l._onNotification(m,a,h,g)},!0))-1);var p=document.createDocumentFragment(),s;if(a.map){if(m=a.map(g,console.error),m.then)return m.then(f,h)}else{m=[];for(var n=0,r=a.length;n<r;n++)m[n]=g(a[n])}return f(m)},_onNotification:function(a,b,c,e){},renderHeader:function(){},_autoId:0,insertRow:function(a,b,c,e,h){var f=h.parentId,f=this.id+"-row-"+(f?f+"-":"")+(this.store&&this.store.getIdentity?
this.store.getIdentity(a):this._autoId++),d=document.getElementById(f),k=d&&d.previousSibling;d&&this.removeRow(d);d=this.renderRow(a,h);d.className=(d.className||"")+" ui-state-default dgrid-row "+(1==e%2?"dgrid-row-odd":"dgrid-row-even");this._rowIdToObject[d.id=f]=a;b.insertBefore(d,c||null);k&&this.adjustRowIndices(k);d.rowIndex=e;return d},renderRow:function(a,b){return e("div",""+a)},removeRow:function(a,b){a=a.element||a;delete this._rowIdToObject[a.id];b||e(a,"!")},row:function(a){var b;if(a instanceof
this._Row)return a;a.target&&a.target.nodeType&&(a=a.target);if(a.nodeType){do{var c=a.id;if(b=this._rowIdToObject[c])return new this._Row(c.substring(this.id.length+5),b,a);a=a.parentNode}while(a&&a!=this.domNode)}else return"object"==typeof a?b=this.store.getIdentity(a):(b=a,a=this._rowIdToObject[this.id+"-row-"+b]),new this._Row(b,a,document.getElementById(this.id+"-row-"+b))},cell:function(a){return{row:this.row(a)}},_move:function(a,b,c,e){var d,f;f=d=a.element;b=b||1;do if(a=d[0>b?"previousSibling":
"nextSibling"]){do if((d=a)&&-1<(d.className+" ").indexOf(c+" ")){f=d;b+=0>b?1:-1;break}while(a=(!e||!d.hidden)&&d[0>b?"lastChild":"firstChild"])}else if(d=d.parentNode,d===this.bodyNode||d===this.headerNode)break;while(b);return f},up:function(a,b,c){a.element||(a=this.row(a));return this.row(this._move(a,-(b||1),"dgrid-row",c))},down:function(a,b,c){a.element||(a=this.row(a));return this.row(this._move(a,b||1,"dgrid-row",c))},scrollTo:d("touch")?function(a){return this.useTouchScroll?this.inherited(arguments):
A.call(this,a)}:A,getScrollPosition:d("touch")?function(){return this.useTouchScroll?this.inherited(arguments):z.call(this)}:z,get:function(a){var b="_get"+a.charAt(0).toUpperCase()+a.slice(1);return"function"===typeof this[b]?this[b].apply(this,[].slice.call(arguments,1)):this[a]},set:function(a,b){if("object"===typeof a)for(var c in a)this.set(c,a[c]);else c="_set"+a.charAt(0).toUpperCase()+a.slice(1),"function"===typeof this[c]?this[c].apply(this,[].slice.call(arguments,1)):this[a]=b;return this},
_getClass:y,_setClass:r,_getClassName:y,_setClassName:r,_setSort:function(a,b){this._sort="string"!=typeof a?a:[{attribute:a,descending:b}];this.refresh();this._lastCollection&&(a.length&&("string"!=typeof a&&(b=a[0].descending,a=a[0].attribute),this._lastCollection.sort(function(c,d){var e=c[a],f=d[a];void 0===e&&(e="");void 0===f&&(f="");return e==f?0:e>f==!b?1:-1})),this.renderArray(this._lastCollection))},sort:function(a,b){u.deprecated("sort(...)",'use set("sort", ...) instead',"dgrid 0.4");
this.set("sort",a,b)},_getSort:function(){return this._sort},_setShowHeader:function(a){var b=this.headerNode;this.showHeader=a;e(b,(a?"!":".")+"dgrid-header-hidden");this.renderHeader();this.resize();a&&(b.scrollLeft=this.getScrollPosition().x)},setShowHeader:function(a){u.deprecated("setShowHeader(...)",'use set("showHeader", ...) instead',"dgrid 0.4");this.set("showHeader",a)},_setShowFooter:function(a){this.showFooter=a;e(this.footerNode,(a?"!":".")+"dgrid-footer-hidden");this.resize()}})});
//@ sourceMappingURL=List.js.map