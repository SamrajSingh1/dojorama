//>>built
define("dojorama/ui/storage/mixin/_StorageBreadcrumbsMixin",["dojo/_base/declare","../../_global/widget/BreadcrumbsWidget","dojo/i18n!./nls/_StorageBreadcrumbsMixin"],function(b,c,a){return b([],{breadcrumbsWidget:null,breadcrumbsItems:{},postCreate:function(){this.inherited(arguments);this.breadcrumbsWidget=new c({},this.breadcrumbsNode);this.breadcrumbsItems.home={label:a.homeLabel,url:this.router.getRoute("home").assemble()};this.breadcrumbsItems.storageIndex={label:a.storageIndexLabel,url:this.router.getRoute("storage").assemble()}},
startup:function(){this.inherited(arguments);this.breadcrumbsWidget.startup()},setStorageIndexBreadcrumbsItems:function(){this.breadcrumbsWidget.set("items",[this.breadcrumbsItems.home,this.breadcrumbsItems.storageIndex])},showStorageBreadcrumbs:function(){this.breadcrumbsWidget.show()}})});
//@ sourceMappingURL=_StorageBreadcrumbsMixin.js.map