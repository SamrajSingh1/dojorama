//>>built
require({cache:{"url:dojorama/ui/release/template/ReleaseIndexPage.html":'\x3cdiv\x3e\n    \x3cdiv data-dojo-attach-point\x3d"navigationNode"\x3e\x3c/div\x3e\n    \n    \x3cdiv class\x3d"container main"\x3e\n        \x3cul data-dojo-attach-point\x3d"breadcrumbsNode"\x3e\x3c/ul\x3e\n        \x3ch1 data-dojo-attach-point\x3d"sectionTitleNode"\x3e\x3c/h1\x3e\n        \x3cul data-dojo-attach-point\x3d"actionsNode"\x3e\x3c/ul\x3e\n        \x3cdiv data-dojo-attach-point\x3d"notificationNode"\x3e\x3c/div\x3e\n    \n        \x3cdiv class\x3d"well well-large"\x3e\n            \x3cdiv data-dojo-attach-point\x3d"gridNode"\x3e\x3c/div\x3e\n        \x3c/div\x3e\n    \n        \x3cdiv data-dojo-attach-point\x3d"playerNode"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \n    \x3cdiv data-dojo-attach-point\x3d"footerNode"\x3e\x3c/div\x3e\n\x3c/div\x3e',
"url:dojorama/styles/inline/ui/release/ReleaseIndexPage.css":"body {background: white;}.dgrid {height: auto; border: 0; background: transparent;}.dgrid .dgrid-scroller {position: relative; overflow: visible;}.dgrid .dgrid-scroller {position: relative; max-height: 20em; overflow: auto;}.dgrid-column-selector {width: 3em;}.dgrid-column-publish,.dgrid-column-releaseDate,.dgrid-column-releaseDate input {text-align: right;}.dgrid-cell {border: none;}.dgrid-header,.dgrid-header-row,.dgrid-footer {background: transparent;}.dgrid-selected {background: #eee !important;}.dgrid-row-even {}"}});
define("dojorama/ui/release/ReleaseIndexPage","dojo/_base/declare mijit/_WidgetBase mijit/_TemplatedMixin dojomat/_AppAware dojomat/_StateAware ../_global/mixin/_NavigationMixin ../_global/mixin/_PlayerMixin ../_global/mixin/_NotificationMixin ../_global/mixin/_FooterMixin ./mixin/_ReleaseBreadcrumbsMixin ./mixin/_ReleaseActionsMixin ./mixin/_ReleaseComponentTitleMixin ./widget/ReleaseGridWidget ../../service/release-store dojo/_base/lang dojo/topic dojo/text!./template/ReleaseIndexPage.html dojo/i18n!./nls/ReleaseIndexPage dojo/text!../../styles/inline/ui/release/ReleaseIndexPage.css".split(" "),
function(d,e,f,g,h,k,l,m,n,p,q,r,s,t,b,c,u,v,w){return d([e,f,g,h,k,l,m,n,p,q,r],{router:null,request:null,session:null,templateString:u,gridWidget:null,constructor:function(a){this.router=a.router;this.request=a.request;this.session=a.session},postCreate:function(){this.inherited(arguments);this.setCss(w,"all");this.setTitle(v.pageTitle);this.gridWidget=new s({request:this.request,router:this.router,store:t},this.gridNode);this.setReleaseIndexBreadcrumbsItems();this.setSubscriptions()},startup:function(){this.inherited(arguments);
this.showNavigation();this.showFooter();this.showReleaseBreadcrumbs();this.showReleaseActions();this.gridWidget.startup()},setSubscriptions:function(){this.own(c.subscribe("ui/release/widget/ReleaseGridWidget/unknown-error",b.hitch(this,function(a){this.showNotification(a.notification)})));this.own(c.subscribe("ui/release/widget/ReleaseGridWidget/update-ok",b.hitch(this,function(a){this.showNotification(a.notification)})));this.own(c.subscribe("ui/release/widget/ReleaseGridWidget/update-error",b.hitch(this,
function(a){this.showNotification(a.notification)})));this.own(c.subscribe("ui/release/widget/ReleaseGridWidget/delete-ok",b.hitch(this,function(a){this.showNotification(a.notification)})));this.own(c.subscribe("ui/release/widget/ReleaseGridWidget/delete-error",b.hitch(this,function(a){this.showNotification(a.notification)})))}})});
//@ sourceMappingURL=ReleaseIndexPage.js.map