//>>built
define("dojo-form-controls/_FormWidget",["dojo/_base/declare","mijit/_WidgetBase","mijit/_TemplatedMixin","dojo/dom-attr"],function(c,d,e,b){return c([d,e],{name:"",alt:"",value:"",type:"text",tabIndex:"0",disabled:!1,postMixInProperties:function(){this.nameAttr=this.name?'name\x3d"'+this.name.replace(/"/g,"\x26quot;")+'"':"";this.inherited(arguments)},_setDisabledAttr:function(a){this._set("disabled",a);b.set(this.domNode,"disabled",a);b.set(this.domNode,"aria-disabled",a?"true":"false")},onChange:function(){},
_onChangeActive:!1,_handleOnChange:function(a){if(this._onChangeActive)this.onChange(a)},create:function(){this.inherited(arguments);this._onChangeActive=!0}})});
//@ sourceMappingURL=_FormWidget.js.map