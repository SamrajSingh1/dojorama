//>>built
define("dojomat/_AppAware",["dojo/_base/declare","dojo/topic"],function(d,b){return d([],{setStylesheets:function(a){b.publish("dojomat/_AppAware/stylesheets",a)},setCss:function(a,c){b.publish("dojomat/_AppAware/css",{css:a,media:c})},setTitle:function(a){b.publish("dojomat/_AppAware/title",{title:a})},setNotification:function(a,c){b.publish("dojomat/_AppAware/notification",{message:a,type:c})},handleNotFound:function(){b.publish("dojomat/_AppAware/not-found",{})},handleError:function(a){b.publish("dojomat/_AppAware/error",
a)}})});
//@ sourceMappingURL=_AppAware.js.map