//>>built
require({cache:{"url:dojorama/ui/_global/widget/template/BreadcrumbsWidget.html":'\x3col class\x3d"breadcrumb"\x3e\x3c/ol\x3e'}});
define("dojorama/ui/_global/widget/BreadcrumbsWidget","dojo/_base/declare mijit/_WidgetBase mijit/_TemplatedMixin dojomat/_StateAware ../mixin/_ToggleMixin dojo/on dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/text!./template/BreadcrumbsWidget.html".split(" "),function(c,f,g,h,k,l,e,n,d,m){return c([f,g,h,k],{templateString:m,postCreate:function(){this.inherited(arguments);this.hide()},_setItemsAttr:function(a){for(var b=0,c=function(b){var a=d.create("li",{},this.domNode,"last"),a=d.create("a",
{href:b.url,innerHTML:b.label},a,"last");this.own(l(a,"click",e.hitch(this,function(a){a.preventDefault();this.push(b.url)})))},b=0;b<a.length-1;b+=1)e.hitch(this,c)(a[b]);d.create("li",{"class":"active",innerHTML:a[a.length-1].label},this.domNode,"last")}})});
//@ sourceMappingURL=BreadcrumbsWidget.js.map