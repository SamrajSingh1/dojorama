//>>built
define("dojorama/ui/release/mixin/_ReleaseBreadcrumbsMixin",["dojo/_base/declare","../../_global/widget/BreadcrumbsWidget","dojo/i18n!./nls/_ReleaseBreadcrumbsMixin"],function(b,c,a){return b([],{breadcrumbsWidget:null,breadcrumbsItems:{},postCreate:function(){this.inherited(arguments);this.breadcrumbsWidget=new c({},this.breadcrumbsNode);this.breadcrumbsItems.home={label:a.homeLabel,url:this.router.getRoute("home").assemble()};this.breadcrumbsItems.releaseIndex={label:a.releaseIndexLabel,url:this.router.getRoute("releaseIndex").assemble()};
this.breadcrumbsItems.releaseCreate={label:a.releaseCreateLabel,url:this.router.getRoute("releaseCreate").assemble()}},startup:function(){this.inherited(arguments);this.breadcrumbsWidget.startup()},setReleaseIndexBreadcrumbsItems:function(){this.breadcrumbsWidget.set("items",[this.breadcrumbsItems.home,this.breadcrumbsItems.releaseIndex])},setReleaseCreateBreadcrumbsItems:function(){this.breadcrumbsWidget.set("items",[this.breadcrumbsItems.home,this.breadcrumbsItems.releaseIndex,this.breadcrumbsItems.releaseCreate])},
setReleaseUpdateBreadcrumbsItems:function(a){this.breadcrumbsWidget.set("items",[this.breadcrumbsItems.home,this.breadcrumbsItems.releaseIndex,{label:a}])},showReleaseBreadcrumbs:function(){this.breadcrumbsWidget.show()}})});
//@ sourceMappingURL=_ReleaseBreadcrumbsMixin.js.map