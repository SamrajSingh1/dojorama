//>>built
require({cache:{"url:dojorama/ui/release/template/ReleaseCreatePage.html":'<div>\n    <div data-dojo-attach-point="navigationNode"></div>\n    <ul data-dojo-attach-point="breadcrumbsNode"></ul>\n    <h1 data-dojo-attach-point="sectionTitleNode"></h1>\n    <ul data-dojo-attach-point="actionsNode"></ul>\n    <div data-dojo-attach-point="notificationNode"></div>\n    \n    <div class="well well-large">\n        <div data-dojo-attach-point="formNode"></div>\n    </div>\n    \n    <div data-dojo-attach-point="footerNode"></div>\n</div>',
"url:dojorama/ui/release/css/ReleaseCreatePage.css":"body {background: white;}"}});
define("dojorama/ui/release/ReleaseCreatePage","dojo/_base/declare,mijit/_WidgetBase,mijit/_TemplatedMixin,dojomat/_AppAware,dojomat/_StateAware,../_global/mixin/_NavigationMixin,../_global/mixin/_NotificationMixin,../_global/mixin/_FooterMixin,./mixin/_ReleaseBreadcrumbsMixin,./mixin/_ReleaseActionsMixin,./mixin/_ReleaseComponentTitleMixin,../release/widget/ReleaseCreateFormWidget,../../service/release-store,dojo/topic,dojo/_base/lang,dojo/text!./template/ReleaseCreatePage.html,dojo/text!./css/ReleaseCreatePage.css,dojo/i18n!./nls/ReleaseCreatePage".split(","),function(c,
d,e,f,g,h,i,j,k,l,m,n,o,p,b,q,r,s){return c([d,e,f,g,h,i,j,k,l,m],{router:null,request:null,templateString:q,formWidget:null,releaseStore:null,constructor:function(a){this.router=a.router;this.request=a.request},postCreate:function(){this.inherited(arguments);this.setCss(r,"all");this.setTitle(s.pageTitle);this.formWidget=new n({store:o},this.formNode);this.setReleaseCreateBreadcrumbsItems();this.setSubscriptions()},startup:function(){this.inherited(arguments);this.showNavigation();this.showFooter();
this.showReleaseBreadcrumbs();this.showReleaseActions();this.formWidget.startup();this.formWidget.show()},setSubscriptions:function(){this.own(p.subscribe("ui/release/widget/ReleaseCreateFormWidget/create-ok",b.hitch(this,function(a){this.setNotification(a.notification.message,a.notification.type);setTimeout(b.hitch(this,function(){this.push(this.router.getRoute("releaseUpdate").assemble({id:a.model.get("id")}))}),0)})))}})});