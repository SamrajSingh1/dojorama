//>>built
require({cache:{"dojorama/ui/release/mixin/_ReleaseActionsMixin":function(){define("dojorama/ui/release/mixin/_ReleaseActionsMixin",["dojo/_base/declare","../../_global/widget/ActionsWidget","dojo/i18n!./nls/_ReleaseActionsMixin"],function(b,a,c){return b([],{actionsWidget:null,postCreate:function(){this.inherited(arguments);this.actionsWidget=new a({actions:[{label:c.indexLabel,url:this.router.getRoute("releaseIndex").assemble(),active:"releaseIndex"===this.router.getCurrentRouteName()},{label:c.createLabel,
url:this.router.getRoute("releaseCreate").assemble(),active:"releaseCreate"===this.router.getCurrentRouteName()}]},this.actionsNode)},startup:function(){this.inherited(arguments);this.actionsWidget.startup()},showReleaseActions:function(){this.actionsWidget.show()}})})},"dojorama/ui/release/mixin/_ReleaseBreadcrumbsMixin":function(){define("dojorama/ui/release/mixin/_ReleaseBreadcrumbsMixin",["dojo/_base/declare","../../_global/widget/BreadcrumbsWidget","dojo/i18n!./nls/_ReleaseBreadcrumbsMixin"],
function(b,a,c){return b([],{breadcrumbsWidget:null,breadcrumbsItems:{},postCreate:function(){this.inherited(arguments);this.breadcrumbsWidget=new a({},this.breadcrumbsNode);this.breadcrumbsItems.home={label:c.homeLabel,url:this.router.getRoute("home").assemble()};this.breadcrumbsItems.releaseIndex={label:c.releaseIndexLabel,url:this.router.getRoute("releaseIndex").assemble()};this.breadcrumbsItems.releaseCreate={label:c.releaseCreateLabel,url:this.router.getRoute("releaseCreate").assemble()}},startup:function(){this.inherited(arguments);
this.breadcrumbsWidget.startup()},setReleaseIndexBreadcrumbsItems:function(){this.breadcrumbsWidget.set("items",[this.breadcrumbsItems.home,this.breadcrumbsItems.releaseIndex])},setReleaseCreateBreadcrumbsItems:function(){this.breadcrumbsWidget.set("items",[this.breadcrumbsItems.home,this.breadcrumbsItems.releaseIndex,this.breadcrumbsItems.releaseCreate])},setReleaseUpdateBreadcrumbsItems:function(a){this.breadcrumbsWidget.set("items",[this.breadcrumbsItems.home,this.breadcrumbsItems.releaseIndex,
{label:a}])},showReleaseBreadcrumbs:function(){this.breadcrumbsWidget.show()}})})},"dojorama/ui/release/mixin/_ReleaseComponentTitleMixin":function(){define("dojorama/ui/release/mixin/_ReleaseComponentTitleMixin",["dojo/_base/declare","dojo/i18n!./nls/_ReleaseComponentTitleMixin"],function(b,a){return b([],{postCreate:function(){this.inherited(arguments);this.sectionTitleNode.innerHTML=a.sectionTitle}})})},"dojorama/ui/release/widget/ReleaseCreateFormWidget":function(){require({cache:{"url:dojorama/ui/release/widget/template/ReleaseCreateFormWidget.html":'<div>\n    <h2 data-dojo-attach-point="titleNode"></h2><hr />\n    <div data-dojo-attach-point="formNode"></div>\n</div>'}});
define("dojorama/ui/release/widget/ReleaseCreateFormWidget","dojo/_base/declare,mijit/_WidgetBase,mijit/_TemplatedMixin,../../_global/mixin/_ToggleMixin,./snippet/ReleaseFormSnippet,dojo/_base/lang,dojo/aspect,dojo/topic,dojo/dom-style,dojo/text!./template/ReleaseCreateFormWidget.html,dojo/i18n!./nls/ReleaseCreateFormWidget".split(","),function(b,a,c,o,g,j,h,p,i,l,n){return b([a,c,o],{store:null,templateString:l,formSnippet:null,constructor:function(a){this.inherited(arguments);this.store=a.store},
postCreate:function(){this.titleNode.innerHTML=n.title;var a=this.store.getModelInstance();this.inherited(arguments);this.hide();this.formSnippet=new g({releaseModel:a},this.formNode);this.own(h.after(a,"save",j.hitch(this,function(b){b.then(j.hitch(this,function(){p.publish("ui/release/widget/ReleaseCreateFormWidget/create-ok",{model:a,notification:{message:n.notificationCreateOk,type:"ok"}})}));return b})))},startup:function(){this.inherited(arguments);this.formSnippet.startup();this.formSnippet.show()}})})},
"dojorama/ui/release/widget/snippet/ReleaseFormSnippet":function(){require({cache:{"url:dojorama/ui/release/widget/snippet/template/ReleaseFormSnippet.html":'<form class="form-horizontal" data-dojo-attach-event="onsubmit:_onSubmit">\n    <fieldset>\n        <div data-dojo-attach-point="titleNode"></div>\n        <div data-dojo-attach-point="formatNode"></div>\n        <div data-dojo-attach-point="releaseDateNode"></div>\n        <div data-dojo-attach-point="priceNode"></div>\n        <div data-dojo-attach-point="infoNode"></div>\n        <div data-dojo-attach-point="publishNode"></div>\n        <button data-dojo-attach-point="submitNode">Save</button>\n    </fieldset>\n</form>'}});
define("dojorama/ui/release/widget/snippet/ReleaseFormSnippet","dojo/_base/declare,mijit/_WidgetBase,mijit/_TemplatedMixin,../../../_global/mixin/_ToggleMixin,dojo/_base/array,dojo/_base/lang,dojo/dom-style,dojo/keys,../../../_global/widget/ControlGroupWidget,dobolo/Button,dobolo/DatepickerInput,dojo-form-controls/Textbox,dojo-form-controls/Textarea,dojo-form-controls/Checkbox,dojo-form-controls/Select,dojo-data-model/sync,dojo/text!./template/ReleaseFormSnippet.html,dojo/i18n!./nls/ReleaseFormSnippet".split(","),
function(b,a,c,o,g,j,h,p,i,l,n,q,r,s,e,m,t,d){return b([a,c,o],{releaseModel:null,templateString:t,controlGroupWidgets:{},submitButton:null,submitButtonTimeoutId:null,errorModel:null,postCreate:function(){this.inherited(arguments);this.errorModel=this.releaseModel.getErrorModel();this.hide();this.build()},startup:function(){var a=null;this.inherited(arguments);this.submitButton.startup();for(a in this.releaseModel.getProps())this.releaseModel.getProps().hasOwnProperty(a)&&this.controlGroupWidgets[a]&&
(this.own(m(this.releaseModel,a,this.controlGroupWidgets[a],"value")),this.own(m(this.errorModel,a,this.controlGroupWidgets[a],"error")),this.controlGroupWidgets[a].startup())},destroy:function(){this.inherited(arguments);this.releaseModel.destroy();clearTimeout(this.submitButtonTimeoutId)},_onSubmit:function(a){a.preventDefault();this.submitButton.loading();this.onSubmit()},onSubmit:function(){this.releaseModel.save().then(j.hitch(this,this.cancelSubmitButton),j.hitch(this,this.cancelSubmitButton))},
build:function(){this.controlGroupWidgets.title=new i({label:d.fieldTitleLabel,inputWidget:new q({})},this.titleNode);this.controlGroupWidgets.format=new i({label:d.fieldFormatLabel,inputWidget:new e({options:[{value:"",label:d.fieldFormatOptionLabel},{value:"cd",label:"Cd"},{value:"vinyl",label:"Vinyl"},{value:"digital",label:"Digital",disabled:!0}]})},this.formatNode);this.controlGroupWidgets.releaseDate=new i({label:d.fieldReleaseDateLabel,inputWidget:new n({})},this.releaseDateNode);this.controlGroupWidgets.price=
new i({label:d.fieldPriceLabel,inputWidget:new q({})},this.priceNode);this.controlGroupWidgets.publish=new i({label:d.fieldPublishLabel,inputWidget:new s({}),widgetProperty:"checked"},this.publishNode);this.controlGroupWidgets.info=new i({label:d.fieldInfoLabel,inputWidget:new r({})},this.infoNode);this.submitButton=new l({type:"submit",label:d.submitLabel,loadingText:d.submitBusyLabel,resetText:d.submitLabel,"class":"btn btn-primary"},this.submitNode)},cancelSubmitButton:function(){this.submitButton.reset()}})})},
"url:dojorama/ui/release/widget/snippet/template/ReleaseFormSnippet.html":'<form class="form-horizontal" data-dojo-attach-event="onsubmit:_onSubmit">\n    <fieldset>\n        <div data-dojo-attach-point="titleNode"></div>\n        <div data-dojo-attach-point="formatNode"></div>\n        <div data-dojo-attach-point="releaseDateNode"></div>\n        <div data-dojo-attach-point="priceNode"></div>\n        <div data-dojo-attach-point="infoNode"></div>\n        <div data-dojo-attach-point="publishNode"></div>\n        <button data-dojo-attach-point="submitNode">Save</button>\n    </fieldset>\n</form>',
"url:dojorama/ui/release/widget/template/ReleaseCreateFormWidget.html":'<div>\n    <h2 data-dojo-attach-point="titleNode"></h2><hr />\n    <div data-dojo-attach-point="formNode"></div>\n</div>',"dojorama/ui/release/widget/ReleaseGridWidget":function(){require({cache:{"url:dojorama/ui/release/widget/template/ReleaseGridWidget.html":'<div>\n    <div class="clearfix">\n        <form class="form-search pull-right" data-dojo-attach-point="filterFormNode">\n            <div class="input-append">\n                <input data-dojo-attach-point="filterInputNode" class="search-query" />\n                <button data-dojo-attach-point="filterSubmitNode" class="btn"></button>\n            </div>\n        </form>\n    </div>\n    \n    <div data-dojo-attach-point="mainNode" style="display:none">\n        <div data-dojo-attach-point="gridNode"></div>\n    \n        <div class="btn-toolbar">\n            <button data-dojo-attach-point="gridSaveButtonNode" class="btn"></button>\n            <button data-dojo-attach-point="gridDeleteButtonNode" class="btn btn-danger"></button>\n        </div>\n    </div>\n</div>'}});
define("dojorama/ui/release/widget/ReleaseGridWidget","dojo/_base/declare,dojo/_base/lang,mijit/_WidgetBase,mijit/_TemplatedMixin,dojomat/_StateAware,dgrid/OnDemandGrid,dgrid/Selection,dgrid/editor,dojo-form-controls/Checkbox,dojo-form-controls/Button,dojo-form-controls/Textbox,dobolo/DatepickerInput,dojo-data-model/Observable,dojo/dom-construct,dojo/dom-style,dojo/dom-attr,dojo/aspect,dojo/topic,dojo/on,dojo/when,dojo/promise/all,dojo/text!./template/ReleaseGridWidget.html,dojo/i18n!./nls/ReleaseGridWidget".split(","),
function(b,a,c,o,g,j,h,p,i,l,n,q,r,s,e,m,t,d,u,v,w,x,f){return b([c,o,g],{router:null,store:null,templateString:x,filterInputWidget:null,filterSubmitWidget:null,gridWidget:null,gridSaveButtonWidget:null,gridDeleteButtonWidget:null,constructor:function(a){this.request=a.request;this.router=a.router;this.store=a.store},postCreate:function(){this.inherited(arguments);this.store=r(this.store);this.buildFilterForm();this.gridSaveButtonWidget=this.buildSaveButton();this.gridDeleteButtonWidget=this.buildDeleteButton();
this.gridWidget=this.buildGrid();this.gridWidget.setStore(this.store)},startup:function(){this.filterInputWidget.startup();this.filterSubmitWidget.startup();this.gridSaveButtonWidget.startup();this.gridDeleteButtonWidget.startup()},buildFilterForm:function(){this.filterInputWidget=new n({"class":m.get(this.filterInputNode,"class"),value:this.request.getQueryParam("find")},this.filterInputNode);this.filterSubmitWidget=new l({type:"submit","class":m.get(this.filterSubmitNode,"class"),label:f.filterSubmitLabel},
this.filterSubmitNode);this.own(u(this.filterFormNode,"submit",a.hitch(this,function(a){a.preventDefault();this.push(this.router.getRoute("releaseIndex").assemble(null,{find:this.filterInputWidget.value}))})))},buildGrid:function(){var c={selector:{label:" ",sortable:!1,renderCell:a.hitch(this,function(b,c,e){c=s.create("input",{type:"checkbox"},e,"last");this.own(u(c,"change",a.hitch(this,function(){var a=this.gridWidget.row(b);this.gridWidget.isSelected(b.get("id"))?this.gridWidget.deselect(a):
this.gridWidget.select(a)})))})},title:{label:f.gridColumnLabelTitle,field:"title",sortable:!0,renderCell:a.hitch(this,function(b,c,e){b=s.create("a",{href:this.router.getRoute("releaseUpdate").assemble({id:b.get("id")}),innerHTML:b.get("title")},e,"last");this.own(u(b,"click",a.hitch(this,function(a){a.preventDefault();this.push(a.target.href)})))})},releaseDate:p({label:f.gridColumnLabelReleaseDate,field:"releaseDate",sortable:!0,autoSave:!1,editorArgs:{required:!0,"class":"span3",format:"medium"}},
q),publish:p({label:f.gridColumnLabelPublish,field:"publish",sortable:!0,autoSave:!1,editorArgs:{value:"on"}},i)},k=new (b([j,h]))({getBeforePut:!0,columns:c,selectionMode:"none",queryOptions:{sort:[{attribute:"title",descending:!1}]},loadingMessage:f.gridLoadingState,noDataMessage:f.gridNoDataAvailable},this.gridNode),g=function(){var a=0,b;for(b in k.selection)k.selection.hasOwnProperty(b)&&(a+=1);return a};this.request.getQueryParam("find")&&k.set("query",{title:this.request.getQueryParam("find")});
k.on("dgrid-error",function(){d.publish("ui/release/widget/ReleaseGridWidget/unknown-error",{notification:{message:f.notificationUnknownError,type:"error"}})});k.on(".dgrid-header .dgrid-column-title:click",a.hitch(this,function(){}));k.on(".dgrid-row .dgrid-column-title:click",a.hitch(this,function(){}));k.on("dgrid-select",a.hitch(this,function(){e.set(this.gridDeleteButtonWidget.domNode,"display","inline")}));k.on("dgrid-deselect",a.hitch(this,function(){e.set(this.gridDeleteButtonWidget.domNode,
"display",g()?"inline":"none")}));k.on("dgrid-datachange",a.hitch(this,function(){e.set(this.gridSaveButtonWidget.domNode,"display","inline")}));var m=t.after(this.store,"query",a.hitch(this,function(b){v(b,a.hitch(this,function(a){a.length&&(e.set(this.mainNode,"display","block"),m.remove())}));return b}));return k},buildSaveButton:function(){var b=function(){d.publish("ui/release/widget/ReleaseGridWidget/update-ok",{notification:{message:f.notificationUpdateOk,type:"ok"}})},c=function(){d.publish("ui/release/widget/ReleaseGridWidget/update-error",
{notification:{message:f.notificationUpdateError,type:"error"}})};return new l({style:"display: none","class":m.get(this.gridSaveButtonNode,"class"),label:f.gridSaveButtonLabel,onClick:a.hitch(this,function(){v(this.gridWidget.save(),b,c)})},this.gridSaveButtonNode)},buildDeleteButton:function(){var b=function(){d.publish("ui/release/widget/ReleaseGridWidget/delete-ok",{notification:{message:f.notificationDeleteOk,type:"ok"}})},c=function(){d.publish("ui/release/widget/ReleaseGridWidget/delete-error",
{notification:{message:f.notificationDeleteError,type:"error"}})};return new l({style:"display: none","class":m.get(this.gridDeleteButtonNode,"class"),label:f.gridDeleteButtonLabel,onClick:a.hitch(this,function(){var a=[],e;for(e in this.gridWidget.selection)this.gridWidget.selection.hasOwnProperty(e)&&a.push(this.store.remove(e));v(w(a),b,c)})},this.gridDeleteButtonNode)}})})},"url:dojorama/ui/release/widget/template/ReleaseGridWidget.html":'<div>\n    <div class="clearfix">\n        <form class="form-search pull-right" data-dojo-attach-point="filterFormNode">\n            <div class="input-append">\n                <input data-dojo-attach-point="filterInputNode" class="search-query" />\n                <button data-dojo-attach-point="filterSubmitNode" class="btn"></button>\n            </div>\n        </form>\n    </div>\n    \n    <div data-dojo-attach-point="mainNode" style="display:none">\n        <div data-dojo-attach-point="gridNode"></div>\n    \n        <div class="btn-toolbar">\n            <button data-dojo-attach-point="gridSaveButtonNode" class="btn"></button>\n            <button data-dojo-attach-point="gridDeleteButtonNode" class="btn btn-danger"></button>\n        </div>\n    </div>\n</div>',
"dojorama/ui/release/widget/ReleaseUpdateFormWidget":function(){require({cache:{"url:dojorama/ui/release/widget/template/ReleaseUpdateFormWidget.html":'<div>\n    <div data-dojo-attach-point="progressNode"></div>\n    \n    <div data-dojo-attach-point="mainNode" style="display:none">\n        <h2 data-dojo-attach-point="titleNode"></h2><hr />\n        <div data-dojo-attach-point="formNode"></div>\n    </div>\n</div>'}});define("dojorama/ui/release/widget/ReleaseUpdateFormWidget","dojo/_base/declare,mijit/_WidgetBase,mijit/_TemplatedMixin,../../_global/mixin/_ToggleMixin,dojo/_base/lang,dojo/aspect,dojo/topic,dojo/when,dojo/dom-style,../../_global/widget/ProgressWidget,./snippet/ReleaseFormSnippet,dojo/text!./template/ReleaseUpdateFormWidget.html,dojo/i18n!./nls/ReleaseUpdateFormWidget".split(","),
function(b,a,c,o,g,j,h,p,i,l,n,q,r){return b([a,c,o],{store:null,releaseId:null,templateString:q,formSnippet:null,progressWidget:null,constructor:function(a){this.releaseId=a.releaseId},postscript:function(a){this.inherited(arguments);this.store=a.store},postCreate:function(){this.inherited(arguments);this.hide();this.progressWidget=new l({},this.progressNode)},startup:function(){this.inherited(arguments);this.progressWidget.startup();this.progressWidget.show();var a=this.store.get(this.releaseId);
p(a,g.hitch(this,function(a){a?(this.progressWidget.hide(),i.set(this.mainNode,"display","block"),this.formSnippet=new n({releaseModel:a},this.formNode),this.own(j.before(this.formSnippet,"onSubmit",g.hitch(this,function(){h.publish("ui/release/widget/ReleaseUpdateFormWidget/submit",{})}))),this.own(j.after(a,"save",g.hitch(this,function(b){b.then(g.hitch(this,function(){this.titleNode.innerHTML=a.get("title");h.publish("ui/release/widget/ReleaseUpdateFormWidget/update-ok",{model:a,notification:{message:r.notificationUpdateOk,
type:"ok"}})}));return b}))),this.titleNode.innerHTML=a.get("title"),this.formSnippet.startup(),this.formSnippet.show(),h.publish("ui/release/widget/ReleaseUpdateFormWidget/load-ok",a)):h.publish("ui/release/widget/ReleaseUpdateFormWidget/load-not-found",{})}),g.hitch(this,function(a){404===a.response.status?h.publish("ui/release/widget/ReleaseUpdateFormWidget/load-not-found",{}):h.publish("ui/release/widget/ReleaseUpdateFormWidget/load-error",{})}))}})})},"url:dojorama/ui/release/widget/template/ReleaseUpdateFormWidget.html":'<div>\n    <div data-dojo-attach-point="progressNode"></div>\n    \n    <div data-dojo-attach-point="mainNode" style="display:none">\n        <h2 data-dojo-attach-point="titleNode"></h2><hr />\n        <div data-dojo-attach-point="formNode"></div>\n    </div>\n</div>',
"*now":function(b){b(['dojo/i18n!*preload*dojorama/layers/nls/release-widgets*["ar","ca","cs","da","de","el","en-gb","en-us","es-es","fi-fi","fr-fr","he-il","hu","it-it","ja-jp","ko-kr","nl-nl","nb","pl","pt-br","pt-pt","ru","sk","sl","sv","th","tr","zh-tw","zh-cn","ROOT"]'])}}});define("dojorama/layers/release-widgets",[],1);