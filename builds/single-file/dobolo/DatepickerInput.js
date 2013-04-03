//>>built
define("dobolo/DatepickerInput","dojo/_base/declare dojo/_base/window dojo/_base/lang dojo/date/locale dojo/date/stamp dojo/on dojo/dom-geometry dojo-form-controls/MappedTextbox ./Calendar".split(" "),function(e,f,b,g,d,c,h,k,l){return e([k],{displayFormat:"full",weekStart:0,_setWeekStartAttr:function(a){this._set("weekStart",a)},_parseValue:function(a){return a instanceof Date?a:a?d.fromISOString(a):null},_serializeValue:function(a){return a instanceof Date?d.toISOString(a,{selector:"date"}):""},
_formatValue:function(a){var b=this.get("displayFormat");return a instanceof Date?g.format(a,{selector:"date",formatLength:"long"===b||"short"===b||"medium"===b||"full"===b?b:"full"}):""},positionCalendar:function(){var a=h.position(this.domNode,!0);this.calendar.set("posTop",a.y+this.domNode.offsetHeight+"px");this.calendar.set("posLeft",a.x+"px");this.calendar.position()},showCalendar:function(){this.calendar.placeAt(document.body,"last");this.positionCalendar();this.calendar.show()},hideCalendar:function(){this.calendar.hide()},
postCreate:function(){this.inherited(arguments);this.own(this.calendar=new l({weekStart:this.weekStart,date:this.get("value")}));this.own(this.watch("value",b.hitch(this,function(a,b,c){this.calendar.set("date",c)})));this.own(this.calendar.watch("date",b.hitch(this,function(a,b,c){this.set("value",c)})));this.own(c(this.calendar,"show",b.hitch(this,function(a){this.emit("show-calendar",{bubbles:!0,cancelable:!0})})));this.own(c(this.calendar,"hide",b.hitch(this,function(a){this.emit("hide-calendar",
{bubbles:!0,cancelable:!0})})));this.calendar.startup();this.own(c(f.global,"resize",b.hitch(this,"positionCalendar")));this.own(c(this.domNode,"focus",b.hitch(this,"showCalendar")));this.own(c(this.domNode,"click",b.hitch(this,"showCalendar")));this.own(c(this.domNode,"blur",b.hitch(this,"hideCalendar")));this.own(c(this.domNode,"keydown",b.hitch(this,function(a){(9===a.keyCode||13===a.keyCode)&&this.calendar.hide()})));this.own(c(this.domNode,"keyup",b.hitch(this,function(a){this.domNode.value=
this._formatValue(this.get("value"))})))}})});
//@ sourceMappingURL=DatepickerInput.js.map