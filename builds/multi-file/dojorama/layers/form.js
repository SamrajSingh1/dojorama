//>>built
require({cache:{"dojo-form-controls/Button":function(){define("dojo-form-controls/Button","dojo/_base/declare dojo/_base/lang dojo/_base/event dojo/dom-attr dojo/on ./_FormWidget".split(" "),function(d,b,c,e,a,g){return d([g],{label:"",type:"button",templateString:'\x3cbutton ${!nameAttr} type\x3d"${type}" value\x3d"${value}"\x3e\x3c/button\x3e',_fillContent:function(a){a&&e.has(a,"data-dojo-type")&&this.set("label",b.trim(a.innerHTML))},postCreate:function(){this.inherited(arguments);this.own(a(this.domNode,
"click",b.hitch(this,function(a){if(this.disabled)return c.stop(a),!1;!1===this.onClick(a)&&a.preventDefault()})))},onClick:function(a){return!0},_setLabelAttr:function(a){this.domNode.innerHTML=a;this._set("label",a)}})})},"dojo-form-controls/_FormWidget":function(){define("dojo-form-controls/_FormWidget",["dojo/_base/declare","mijit/_WidgetBase","mijit/_TemplatedMixin","dojo/dom-attr"],function(d,b,c,e){return d([b,c],{name:"",alt:"",value:"",type:"text",tabIndex:"0",disabled:!1,postMixInProperties:function(){this.nameAttr=
this.name?'name\x3d"'+this.name.replace(/"/g,"\x26quot;")+'"':"";this.inherited(arguments)},_setDisabledAttr:function(a){this._set("disabled",a);e.set(this.domNode,"disabled",a);e.set(this.domNode,"aria-disabled",a?"true":"false")},onChange:function(){},_onChangeActive:!1,_handleOnChange:function(a){if(this._onChangeActive)this.onChange(a)},create:function(){this.inherited(arguments);this._onChangeActive=!0}})})},"dojo-form-controls/Checkbox":function(){define("dojo-form-controls/Checkbox",["dojo/_base/declare",
"dojo/_base/lang","dojo/dom-attr","dojo/on","./_FormWidget"],function(d,b,c,e,a){return d([a],{type:"checkbox",value:"on",checked:!1,templateString:'\x3cinput ${!nameAttr} type\x3d"${type}" value\x3d"${value}" ${checkedAttr}/\x3e',postMixInProperties:function(){this.inherited(arguments);this.checkedAttr=this.checked?"checked":""},_fillContent:function(){this.srcNodeRef&&c.has(this.srcNodeRef,"data-dojo-type")&&this.set("checked",!!c.has(this.srcNodeRef,"checked"))},postCreate:function(){this.own(e(this.domNode,
"change",b.hitch(this,function(a){this.set("checked",this.domNode.checked)})))},_setCheckedAttr:function(a){this.domNode.checked=!!a;this._set("checked",!!a);this._handleOnChange(this.get("value"))},_setValueAttr:function(a){this.domNode.value=!a&&0!==a?"on":a;"string"==typeof a&&(a=!0);this._created&&this.set("checked",a)},_getValueAttr:function(){return this.checked?this.value:!1}})})},"dojo-form-controls/Option":function(){define("dojo-form-controls/Option",["dojo/_base/declare","mijit/_WidgetBase",
"mijit/_TemplatedMixin","dojo/dom-attr"],function(d,b,c,e){return d([b,c],{templateString:"\x3coption\x3e\x3c/option\x3e",value:"",label:"",selected:!1,disabled:!1,_setValueAttr:function(a){e.set(this.domNode,"value",a);this._set("value",a)},_setLabelAttr:function(a){this.domNode.innerHTML=a;this._set("label",a)},_setSelectedAttr:function(a){a&&!this.get("disabled")?e.set(this.domNode,"selected","selected"):e.remove(this.domNode,"selected");this._set("selected",a)},_setDisabledAttr:function(a){a||
this.get("disabled")?e.set(this.domNode,"disabled","true"):e.remove(this.domNode,"disabled");this._set("disabled",a)}})})},"dojo-form-controls/Radio":function(){define("dojo-form-controls/Radio",["dojo/_base/declare","./Checkbox"],function(d,b){return d([b],{type:"radio"})})},"dojo-form-controls/Select":function(){define("dojo-form-controls/Select","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/dom-construct dojo/dom-attr dojo/query dojo/on ./Option ./_FormWidget".split(" "),function(d,
b,c,e,a,g,h,k,l){return d([l],{multiple:!1,options:[],templateString:'\x3cselect name\x3d"${name}" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/select\x3e',_attrToDom:function(a,b,c){"options"!==a&&this.inherited(arguments)},_fillContent:function(){var f=[],b=[];this.srcNodeRef&&a.has(this.srcNodeRef,"data-dojo-type")&&(g("\x3e *",this.srcNodeRef).forEach(function(c){b[b.length]={value:c.value,label:c.innerHTML,disabled:a.get(c,"disabled")};c.selected&&(f[f.length]=c.value)}),a.get(this.srcNodeRef,
"multiple")||(f=f.length?f[f.length-1]:""),this.set("options",b),this.set("value",f))},postCreate:function(){this.inherited(arguments);this.own(h(this.domNode,"change",c.hitch(this,function(a){this.set("value",this._getValueFromChildren())})));this._loadChildren();this._selectChildren()},_setOptionsAttr:function(a){this._set("options",a);this._created&&(this._loadChildren(),this._selectChildren())},_setValueAttr:function(a){this._set("value",a);this._created&&this._selectChildren();this._handleOnChange(a)},
_setRequiredAttr:function(f){var b=f&&!this.get("disabled")?"true":"false";a.set(this.domNode,{required:b,"aria-required":b});this._set("required",f)},_loadChildren:function(){b.forEach(this.getChildren(),function(a){a.destroyRecursive()});b.forEach(this.get("options"),c.hitch(this,function(a){a=new k({value:a.value,label:a.label,disabled:a.disabled||!1});a.placeAt(this.domNode,"last");a.startup()}))},_selectChildren:function(){b.forEach(this.getChildren(),c.hitch(this,function(a){this._selectChild(a)}))},
_selectChild:function(a){var d=!1,e=this.get("value");c.isArray(e)?b.forEach(e,function(b){b===a.get("value")&&(d=!0)}):e===a.get("value")&&(d=!0);a.set("selected",d)},_getValueFromChildren:function(){var a=[];if(!this.get("multiple"))return-1===this.domNode.selectedIndex?null:this.domNode.options[this.domNode.selectedIndex].value;for(x=0;x<this.domNode.length;x+=1)this.domNode[x].selected&&(a[a.length]=this.domNode[x].value);return a}})})},"dojo-form-controls/Textarea":function(){define("dojo-form-controls/Textarea",
["dojo/_base/declare","./Textbox"],function(d,b){return d([b],{rows:"3",cols:"20",templateString:"\x3ctextarea ${!nameAttr}\x3e\x3c/textarea\x3e",postMixInProperties:function(){!this.value&&this.srcNodeRef&&(this.value=this.srcNodeRef.value);this.inherited(arguments)}})})},"dojo-form-controls/Textbox":function(){define("dojo-form-controls/Textbox",["dojo/_base/declare","dojo/_base/lang","dojo/dom-attr","dojo/on","./_FormWidget"],function(d,b,c,e,a){return d([a],{templateString:'\x3cinput ${!nameAttr} type\x3d"text" value\x3d"${value}" /\x3e',
postCreate:function(){this.own(e(this.domNode,"change",b.hitch(this,function(a){this.set("value",this.domNode.value)})))},_setValueAttr:function(a){c.set(this.domNode,"value",a);this._handleOnChange(a);this._set("value",a)},_setPlaceholderAttr:function(a){c.set(this.domNode,"placeholder",a);this._set("placeholder",a)},_setAutocompleteAttr:function(a){c.set(this.domNode,"autocomplete",a?"on":"off");this._set("autocomplete",a)}})})}}});define("dojorama/layers/form",[],1);
//@ sourceMappingURL=form.js.map