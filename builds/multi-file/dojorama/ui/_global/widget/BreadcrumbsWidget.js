//>>built
require({cache:{"url:dojorama/ui/_global/widget/template/BreadcrumbsWidget.html":'<ul class="breadcrumb"></ul>'}});
define("dojorama/ui/_global/widget/BreadcrumbsWidget","dojo/_base/declare,mijit/_WidgetBase,mijit/_TemplatedMixin,dojomat/_StateAware,../mixin/_ToggleMixin,dojo/on,dojo/_base/lang,dojo/_base/array,dojo/dom-construct,dojo/text!./template/BreadcrumbsWidget.html".split(","),function(c,e,g,h,i,j,f,l,d,k){return c([e,g,h,i],{divider:"/",templateString:k,constructor:function(a){this.divider=a.divider||this.divider},postCreate:function(){this.inherited(arguments);this.hide()},_setItemsAttr:function(a){for(var b=
0,c=function(a){var b=d.create("li",{},this.domNode,"last"),c=d.create("a",{href:a.url,innerHTML:a.label},b,"last"),e=document.createTextNode(" ");d.create("span",{"class":"divider",innerHTML:this.divider},b,"last");d.place(e,c,"after");this.own(j(c,"click",f.hitch(this,function(b){b.preventDefault();this.push(a.url)})))},b=0;b<a.length-1;b+=1)f.hitch(this,c)(a[b]);d.create("li",{"class":"active",innerHTML:a[a.length-1].label},this.domNode,"last")}})});