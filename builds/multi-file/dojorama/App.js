//>>built
define("dojorama/App","dojo/_base/declare,dojo/_base/lang,dojo/_base/array,dojo/query,dojomat/Application,dojomat/populateRouter,./routing-map,require,dojo/domReady!".split(","),function(d,a,h,i,e,f,g,c){return d([e],{constructor:function(){f(this,g);this.run()},makeNotFoundPage:function(){c(["./ui/error/NotFoundPage"],a.hitch(this,function(b){this.setStylesheets();this.setCss();this.setPageNode();(new b({router:this.router},this.pageNodeId)).startup();this.notification.clear()}))},makeErrorPage:function(b){c(["./ui/error/ErrorPage"],
a.hitch(this,function(a){this.setStylesheets();this.setCss();this.setPageNode();(new a({router:this.router,error:b},this.pageNodeId)).startup();this.notification.clear()}))}})});