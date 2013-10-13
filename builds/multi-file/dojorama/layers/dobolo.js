//>>built
require({cache:{"dobolo/Alert":function(){define("./Util dojo/_base/declare mijit/_WidgetBase mijit/_TemplatedMixin dojo/query dojo/_base/lang dojo/on dojo/dom-attr dojo/dom-class dojo/dom-style dojo/text!./templates/Alert.html".split(" "),function(f,g,d,h,a,b,c,e,k,n,m){return g([d,h],{templateString:m,closable:!0,postCreate:function(){this.inherited(arguments);e.get(this.srcNodeRef,"data-dojo-type")&&(n.set(this.closeNode,"display","none"),n.set(this.contentNode,"display","none"));a("\x3e *",this.domNode).forEach(b.hitch(this,
function(a){k.contains(a,"close")&&this.own(c(a,"click",b.hitch(this,function(a){a.preventDefault();this.close()})))}))},close:function(){var a={bubbles:!0,cancelable:!0},e=f.transition&&k.contains(this.domNode,"fade"),n=function(){this.emit("closed",a);this.destroyRecursive()};this.emit("close",a);k.remove(this.domNode,"in");e?c(this.domNode,f.transition.end,b.hitch(this,n)()):b.hitch(this,n)()},_setContentAttr:function(a){this.contentNode.innerHTML=a},_setClassAttr:function(a){k.add(this.domNode,
a)},_setClosableAttr:function(a){n.set(this.closeNode,"display",a?"block":"none")}})})},"dobolo/Util":function(){define([],function(){return{transition:function(){var f=document.createElement("bootstrap"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},d;for(d in g)if(void 0!==f.style[d])return{end:g[d]}}(),throttle:function(f,g,d){var h=!0;return function(){h&&(h=!1,f.apply(d||f,arguments),setTimeout(function(){h=!0},
g))}}}})},"dobolo/Button":function(){define("dojo/_base/declare dojo-form-controls/Button mijit/registry dojo/_base/array dojo/_base/lang dojo/dom-class dojo/dom-attr dojo/domReady!".split(" "),function(f,g,d,h,a,b,c){return f([g],{loadingText:"Loading...",resetText:"Loaded",mode:null,group:null,postCreate:function(){this.inherited(arguments);("radio"===this.mode||"checkbox"===this.mode)&&this.own(this.on("click",a.hitch(this,function(a){this.toggle()})))},loading:function(){this.domNode.innerHTML=
this.loadingText;b.add(this.domNode,"disabled");c.set(this.domNode,"disabled","disabled")},reset:function(){this.domNode.innerHTML=this.resetText;b.remove(this.domNode,"disabled");c.remove(this.domNode,"disabled")},toggle:function(){"radio"===this.mode&&this.deactivateGroup();b.toggle(this.domNode,"active")},deactivateGroup:function(){h.forEach(d.toArray(),a.hitch(this,function(a){"radio"===a.get("mode")&&a.get("group")===this.group&&b.remove(a.domNode,"active")}))}})})},"dobolo/DatepickerInput":function(){define("dojo/_base/declare dojo/_base/window dojo/_base/lang dojo/date/locale dojo/date/stamp dojo/on dojo/dom-geometry dojo-form-controls/MappedTextbox ./Calendar".split(" "),
function(f,g,d,h,a,b,c,e,k){return f([e],{displayFormat:"full",weekStart:0,_setWeekStartAttr:function(a){this._set("weekStart",a)},_parseValue:function(b){return b instanceof Date?b:b?a.fromISOString(b):null},_serializeValue:function(b){return b instanceof Date?a.toISOString(b,{selector:"date"}):""},_formatValue:function(a){var b=this.get("displayFormat");return a instanceof Date?h.format(a,{selector:"date",formatLength:"long"===b||"short"===b||"medium"===b||"full"===b?b:"full"}):""},positionCalendar:function(){var a=
c.position(this.domNode,!0);this.calendar.set("posTop",a.y+this.domNode.offsetHeight+"px");this.calendar.set("posLeft",a.x+"px");this.calendar.position()},showCalendar:function(){this.calendar.placeAt(document.body,"last");this.positionCalendar();this.calendar.show()},hideCalendar:function(){this.calendar.hide()},postCreate:function(){this.inherited(arguments);this.own(this.calendar=new k({weekStart:this.weekStart,date:this.get("value")}));this.own(this.watch("value",d.hitch(this,function(a,b,e){this.calendar.set("date",
e)})));this.own(this.calendar.watch("date",d.hitch(this,function(a,b,e){this.set("value",e)})));this.own(b(this.calendar,"show",d.hitch(this,function(a){this.emit("show-calendar",{bubbles:!0,cancelable:!0})})));this.own(b(this.calendar,"hide",d.hitch(this,function(a){this.emit("hide-calendar",{bubbles:!0,cancelable:!0})})));this.calendar.startup();this.own(b(g.global,"resize",d.hitch(this,"positionCalendar")));this.own(b(this.domNode,"focus",d.hitch(this,"showCalendar")));this.own(b(this.domNode,
"click",d.hitch(this,"showCalendar")));this.own(b(this.domNode,"blur",d.hitch(this,"hideCalendar")));this.own(b(this.domNode,"keydown",d.hitch(this,function(a){(9===a.keyCode||13===a.keyCode)&&this.calendar.hide()})));this.own(b(this.domNode,"keyup",d.hitch(this,function(a){this.domNode.value=this._formatValue(this.get("value"))})))}})})},"dojo-form-controls/MappedTextbox":function(){define(["dojo/_base/declare","mijit/_WidgetBase","mijit/_TemplatedMixin","dojo/dom-construct"],function(f,g,d,h){return f([g,
d],{templateString:'\x3cinput type\x3d"text" data-dojo-attach-point\x3d"containerNode"\x3e',name:"",valueNode:null,_setNameAttr:function(a){this.valueNode&&(this.valueNode.name=a);this._set("name",a)},_setValueAttr:function(a){a=this._parseValue(a);var b=this.get("value");this.valueNode&&(this.valueNode.value=this._serializeValue(a));this.domNode.value=this._formatValue(a);this._set("value",a);if(b!==a)this.onChange(a)},_parseValue:function(a){return a},_serializeValue:function(a){return a},_formatValue:function(a){return a},
_attrToDom:function(a,b,c){"name"!==a&&this.inherited(arguments)},onChange:function(a){},_getDisplayValueAttr:function(){return this.domNode.value},startup:function(){this.inherited(arguments);this.valueNode=h.create("input",{type:"hidden",name:this.get("name"),value:this._serializeValue(this.get("value"))},this.domNode,"after")},destroy:function(){h.destroy(this.valueNode);this.inherited(arguments)}})})},"dobolo/Calendar":function(){define("dojo/_base/declare mijit/_WidgetBase mijit/_TemplatedMixin dojo/date dojo/query dojo/_base/lang dojo/on dojo/dom-class dojo/dom-attr dojo/dom-construct dojo/dom-style dojo/text!./templates/Calendar.html dojo/i18n!dojo/cldr/nls/gregorian dojo/NodeList-dom dojo/NodeList-traverse".split(" "),
function(f,g,d,h,a,b,c,e,k,n,m,r,q){var p=[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}];return f([g,d],{templateString:r,weekStart:0,posTop:0,posLeft:0,viewMode:0,date:new Date,viewDate:new Date,_setPosTop:function(a){this._set("posTop",a)},_setPosLeft:function(a){this._set("posLeft",a)},_setDateAttr:function(a){this._set("date",a);this._created&&this.update(this.get("date"))},_setWeekStartAttr:function(a){this._set("weekStart",
a||0);this._created&&this.update(this.get("date"))},postCreate:function(){this.own(c(this.domNode,"mousedown",b.hitch(this,"mousedown")));this.own(c(this.domNode,"click",function(a){a.stopPropagation();a.preventDefault()}));this.weekEnd=0===this.weekStart?6:this.weekStart-1;this.fillDow();this.fillMonths();this.update(this.date);this.showMode()},position:function(){m.set(this.domNode,{left:this.posLeft,top:this.posTop})},show:function(){m.set(this.domNode,"display","block");this.emit("show",{bubbles:!0,
cancelable:!0,date:this.date})},hide:function(a){m.set(this.domNode,"display","none");this.viewMode=0;this.showMode();this.emit("hide",{bubbles:!0,cancelable:!0,date:this.date})},update:function(a){var b=new Date;this.date=a instanceof Date?new Date(a.getFullYear(),a.getMonth(),a.getDate(),0,0,0):new Date(b.getFullYear(),b.getMonth(),b.getDate(),0,0,0);this.viewDate=new Date(this.date);this.fill()},fillDow:function(){for(var b=this.weekStart,e="\x3ctr\x3e";b<this.weekStart+7;)e+='\x3cth class\x3d"dow"\x3e'+
q["days-standAlone-narrow"][b++%7]+"\x3c/th\x3e";n.place(e+"\x3c/tr\x3e",a(".calendar-days thead",this.domNode)[0])},fillMonths:function(){for(var b="",e=0;12>e;)b+='\x3cspan class\x3d"month" data-dojo-month\x3d"'+e+'"\x3e'+q["months-standAlone-abbr"][e++]+"\x3c/span\x3e";n.place(b,a(".calendar-months td",this.domNode)[0])},fill:function(b){var c,d=[],k=new Date(this.viewDate);b=k.getFullYear();var f=k.getMonth(),g=this.date.valueOf(),k=this.date.getFullYear(),l=new Date(b,f-1,28,0,0,0,0);c=h.getDaysInMonth(l);
a(".calendar-days th.switch",this.domNode)[0].innerHTML=q["months-standAlone-wide"][f]+" "+b;l.setDate(c);l.setDate(c-(l.getDay()-this.weekStart+7)%7);var m=new Date(l);m.setDate(m.getDate()+42);for(m=m.valueOf();l.valueOf()<m;)l.getDay()===this.weekStart&&d.push("\x3ctr\x3e"),c="",l.getMonth()<f?c+=" old":l.getMonth()>f&&(c+=" new"),l.valueOf()===g&&(c+=" active"),d.push('\x3ctd class\x3d"day'+c+'"\x3e'+l.getDate()+"\x3c/td\x3e"),l.getDay()===this.weekEnd&&d.push("\x3c/tr\x3e"),l.setDate(l.getDate()+
1);n.empty(a(".calendar-days tbody",this.domNode)[0]);n.place(d.join(" "),a(".calendar-days tbody",this.domNode)[0]);d=a(".calendar-months",this.domNode);a("th.switch",d[0])[0].innerHTML=b;a("span",d[0]).removeClass("active");k===b&&e.add(a("span",d[0])[this.date.getMonth()],"active");d="";b=10*parseInt(b/10,10);f=a(".calendar-years",this.domNode);a("th.switch",f[0]).innerHTML=b+"-"+(b+9);f=a("td",f[0]);b-=1;for(g=-1;11>g;g++)d+='\x3cspan class\x3d"year'+(-1===g||10===g?" old":"")+(k===b?" active":
"")+'"\x3e'+b+"\x3c/span\x3e",b+=1;f[0].innerHTML=d},mousedown:function(b){var c,d;b.stopPropagation();b.preventDefault();c=a(b.target).closest("span, td, th");if(1===c.length)switch(c[0].nodeName.toLowerCase()){case "th":switch(c[0].className){case "switch":this.showMode(1);break;case "prev":case "next":this.viewDate["set"+p[this.viewMode].navFnc].call(this.viewDate,this.viewDate["get"+p[this.viewMode].navFnc].call(this.viewDate)+p[this.viewMode].navStep*("prev"===c[0].className?-1:1)),this.fill()}break;
case "span":e.contains(c[0],"month")?(b=k.get(c[0],"data-dojo-month"),this.viewDate.setMonth(b)):(c=parseInt(c[0].innerText||c[0].textContent,10)||0,this.viewDate.setFullYear(c));this.showMode(-1);this.fill();break;case "td":e.contains(c[0],"day")&&(d=parseInt(c[0].innerText||c[0].textContent,10)||1,b=this.viewDate.getMonth(),e.contains(c[0],"old")?b-=1:e.contains(c[0],"new")&&(b+=1),c=this.viewDate.getFullYear(),this.set("date",new Date(c,b,d,0,0,0,0)),this.set("viewDate",new Date(c,b,d,0,0,0,0)),
this.fill(),this.hide())}},showMode:function(b){b&&(this.viewMode=Math.max(0,Math.min(2,this.viewMode+b)));a("\x3ediv",this.domNode).forEach(function(b){m.set(b,"display","none")});a("\x3ediv.calendar-"+p[this.viewMode].clsName,this.domNode).forEach(function(b){m.set(b,"display","block")})}})})},"dojo/NodeList-traverse":function(){define(["./query","./_base/lang","./_base/array"],function(f,g,d){var h=f.NodeList;g.extend(h,{_buildArrayFromCallback:function(a){for(var b=[],c=0;c<this.length;c++){var e=
a.call(this[c],this[c],b);e&&(b=b.concat(e))}return b},_getUniqueAsNodeList:function(a){for(var b=[],c=0,e;e=a[c];c++)1==e.nodeType&&-1==d.indexOf(b,e)&&b.push(e);return this._wrap(b,null,this._NodeListCtor)},_getUniqueNodeListWithParent:function(a,b){var c=this._getUniqueAsNodeList(a),c=b?f._filterResult(c,b):c;return c._stash(this)},_getRelatedUniqueNodes:function(a,b){return this._getUniqueNodeListWithParent(this._buildArrayFromCallback(b),a)},children:function(a){return this._getRelatedUniqueNodes(a,
function(b,a){return g._toArray(b.childNodes)})},closest:function(a,b){return this._getRelatedUniqueNodes(null,function(c,e){do if(f._filterResult([c],a,b).length)return c;while(c!=b&&(c=c.parentNode)&&1==c.nodeType);return null})},parent:function(a){return this._getRelatedUniqueNodes(a,function(b,a){return b.parentNode})},parents:function(a){return this._getRelatedUniqueNodes(a,function(b,a){for(var e=[];b.parentNode;)b=b.parentNode,e.push(b);return e})},siblings:function(a){return this._getRelatedUniqueNodes(a,
function(b,a){for(var e=[],d=b.parentNode&&b.parentNode.childNodes,f=0;f<d.length;f++)d[f]!=b&&e.push(d[f]);return e})},next:function(a){return this._getRelatedUniqueNodes(a,function(b,a){for(var e=b.nextSibling;e&&1!=e.nodeType;)e=e.nextSibling;return e})},nextAll:function(a){return this._getRelatedUniqueNodes(a,function(a,c){for(var e=[],d=a;d=d.nextSibling;)1==d.nodeType&&e.push(d);return e})},prev:function(a){return this._getRelatedUniqueNodes(a,function(a,c){for(var e=a.previousSibling;e&&1!=
e.nodeType;)e=e.previousSibling;return e})},prevAll:function(a){return this._getRelatedUniqueNodes(a,function(a,c){for(var e=[],d=a;d=d.previousSibling;)1==d.nodeType&&e.push(d);return e})},andSelf:function(){return this.concat(this._parent)},first:function(){return this._wrap(this[0]&&[this[0]]||[],this)},last:function(){return this._wrap(this.length?[this[this.length-1]]:[],this)},even:function(){return this.filter(function(a,b){return 0!=b%2})},odd:function(){return this.filter(function(a,b){return 0==
b%2})}});return h})},"url:dobolo/templates/Alert.html":'\x3cdiv class\x3d"alert" data-dojo-attach-point\x3d"containerNode"\x3e\n    \x3cbutton data-dojo-attach-point\x3d"closeNode" class\x3d"close"\x3e\x26times;\x3c/button\x3e\n    \x3cdiv data-dojo-attach-point\x3d"contentNode"\x3e\x3c/div\x3e\n\x3c/div\x3e',"url:dobolo/templates/Calendar.html":'\x3cdiv class\x3d"calendar dropdown-menu"\x3e\n    \x3cdiv class\x3d"calendar-days"\x3e\n        \x3ctable class\x3d"table-condensed"\x3e\n            \x3cthead\x3e\n                \x3ctr\x3e\n                    \x3cth class\x3d"prev"\x3e\x3ci class\x3d"glyphicon glyphicon-arrow-left"\x3e\x3c/i\x3e\x3c/th\x3e\n                    \x3cth colspan\x3d"5" class\x3d"switch"\x3e\x3c/th\x3e\n                    \x3cth class\x3d"next"\x3e\x3ci class\x3d"glyphicon glyphicon-arrow-right"\x3e\x3c/i\x3e\x3c/th\x3e\n                \x3c/tr\x3e\n            \x3c/thead\x3e\n            \x3ctbody\x3e\x3c/tbody\x3e\n        \x3c/table\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"calendar-months"\x3e\n        \x3ctable class\x3d"table-condensed"\x3e\n            \x3cthead\x3e\n                \x3ctr\x3e\n                    \x3cth class\x3d"prev"\x3e\x3ci class\x3d"glyphicon glyphicon-arrow-left"\x3e\x3c/i\x3e\x3c/th\x3e\n                    \x3cth colspan\x3d"5" class\x3d"switch"\x3e\x3c/th\x3e\n                    \x3cth class\x3d"next"\x3e\x3ci class\x3d"glyphicon glyphicon-arrow-right"\x3e\x3c/i\x3e\x3c/th\x3e\n                \x3c/tr\x3e\n            \x3c/thead\x3e\n            \x3ctbody\x3e\n                \x3ctr\x3e\n                    \x3ctd colspan\x3d"7"\x3e\x3c/td\x3e\n                \x3c/tr\x3e\n            \x3c/tbody\x3e\n        \x3c/table\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"calendar-years"\x3e\n        \x3ctable class\x3d"table-condensed"\x3e\n            \x3cthead\x3e\n                \x3ctr\x3e\n                    \x3cth class\x3d"prev"\x3e\x3ci class\x3d"glyphicon glyphicon-arrow-left"\x3e\x3c/i\x3e\x3c/th\x3e\n                    \x3cth colspan\x3d"5" class\x3d"switch"\x3e\x3c/th\x3e\n                    \x3cth class\x3d"next"\x3e\x3ci class\x3d"glyphicon glyphicon-arrow-right"\x3e\x3c/i\x3e\x3c/th\x3e\n                \x3c/tr\x3e\n            \x3c/thead\x3e\n            \x3ctbody\x3e\n                \x3ctr\x3e\n                    \x3ctd colspan\x3d"7"\x3e\x3c/td\x3e\n                \x3c/tr\x3e\n            \x3c/tbody\x3e\n        \x3c/table\x3e\n    \x3c/div\x3e\n\x3c/div\x3e'}});
define("dojorama/layers/dobolo",[],1);
//@ sourceMappingURL=dobolo.js.map