//>>built
define("dojo-data-model/ModelStore",["dojo/_base/lang","dojo/Deferred","dojo/promise/Promise","dojo/when","./QueryResults"],function(f,g,h,m,k){return function(a,l){var e=function(){return new l({store:a})};return f.delegate(a,{getModelInstance:e,get:function(){var c=a.get.apply(a,arguments),b=null,d=null;if(!c)return null;if(!c.then)return d=e(),d.deserialize(c),d;b=new g;c.then(function(a){d=e();d.deserialize(a);b.resolve(d)},function(a){b.reject(a)},function(a){b.progress(a)});return f.delegate(new h,
b.promise)},query:function(){return k(a.query.apply(a,arguments),e)},put:function(c,b){return a.put(c.serialize(),b)},add:function(c,b){return a.add(c.serialize(),b)}})}});
//@ sourceMappingURL=ModelStore.js.map