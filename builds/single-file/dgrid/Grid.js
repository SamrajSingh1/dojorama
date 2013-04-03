//>>built
define("dgrid/Grid","dojo/_base/kernel dojo/_base/declare dojo/on dojo/has put-selector/put ./List ./util/misc dojo/_base/sniff".split(" "),function(t,g,u,k,h,y,z){function p(a,b){b&&b.nodeType&&a.appendChild(b)}function v(a,b,d,f){if(this.formatter){f=this.formatter;var c=this.grid.formatterScope;d.innerHTML="string"===typeof f&&c?c[f](b,a):f(b,a)}else null!=b&&d.appendChild(document.createTextNode(b))}var w=8>k("ie")&&!k("quirks"),A=/[^\._a-zA-Z0-9-]/g;g=g(y,{columns:null,cellNavigation:!0,tabableHeader:!0,
showHeader:!0,column:function(a){return"string"==typeof a?this.columns[a]:this.cell(a).column},listType:"grid",cell:function(a,b){if(a.column&&a.element)return a;a.target&&a.target.nodeType&&(a=a.target);var d;if(a.nodeType){do{if(this._rowIdToObject[a.id])break;var f=a.columnId;if(f){b=f;d=a;break}a=a.parentNode}while(a&&a!=this.domNode)}if(!d&&"undefined"!=typeof b){var c=this.row(a);if(f=c.element)for(var f=f.getElementsByTagName("td"),e=0;e<f.length;e++)if(f[e].columnId==b){d=f[e];break}}if(null!=
a)return{row:c||this.row(a),column:b&&this.column(b),element:d}},createRowCells:function(a,b,d){var f=h("table.dgrid-row-table[role\x3dpresentation]"),c=9>k("ie")||k("quirks")?h(f,"tbody"):f,e,r,x,g,p,q,m,n,l,s;d=d||this.subRows;r=0;for(x=d.length;r<x;r++){q=d[r];e=h(c,"tr");q.className&&h(e,"."+q.className);g=0;for(p=q.length;g<p;g++){m=q[g];n=m.id;l=m.className||m.field&&"field-"+m.field;l=h(a+(".dgrid-cell.dgrid-cell-padding"+(n?".dgrid-column-"+n:"")+(l?"."+l:"")).replace(A,"-")+"[role\x3d"+("th"===
a?"columnheader":"gridcell")+"]");l.columnId=n;w?(n=h(l,"!dgrid-cell-padding div.dgrid-cell-padding"),l.contents=n):n=l;if(s=m.colSpan)l.colSpan=s;if(s=m.rowSpan)l.rowSpan=s;b(n,m);e.appendChild(l)}}return f},left:function(a,b){a.element||(a=this.cell(a));return this.cell(this._move(a,-(b||1),"dgrid-cell"))},right:function(a,b){a.element||(a=this.cell(a));return this.cell(this._move(a,b||1,"dgrid-cell"))},renderRow:function(a,b){var d=this.createRowCells("td",function(f,c){var e=a;c.get?e=c.get(a):
"field"in c&&"_item"!=c.field&&(e=e[c.field]);c.renderCell?p(f,c.renderCell(a,e,f,b)):v.call(c,a,e,f,b)},b&&b.subRows);return h("div[role\x3drow]\x3e",d)},renderHeader:function(){var a=this,b=this.headerNode,d=b.childNodes.length;for(b.setAttribute("role","row");d--;)h(b.childNodes[d],"!");d=this.createRowCells("th",function(a,b){var e=b.headerNode=a;w&&(a=a.parentNode);var d=b.field;d&&(a.field=d);if(b.renderHeaderCell)p(e,b.renderHeaderCell(e));else if(b.label||b.field)e.appendChild(document.createTextNode(b.label||
b.field));!1!==b.sortable&&(d&&"_item"!=d)&&(a.sortable=!0,a.className+=" dgrid-sortable")},this.subRows&&this.subRows.headerRows);this._rowIdToObject[d.id=this.id+"-header"]=this.columns;b.appendChild(d);this._sortListener&&this._sortListener.remove();this._sortListener=u(d,"click,keydown",function(d){if("click"==d.type||32==d.keyCode||!k("opera")&&13==d.keyCode){var c=d.target,e,h,g;do if(c.sortable){g=[{attribute:e=c.field||c.columnId,descending:(h=a._sort[0])&&h.attribute==e&&!h.descending}];
d={bubbles:!0,cancelable:!0,grid:a,parentType:d.type,sort:g};u.emit(c,"dgrid-sort",d)&&(a._sortNode=c,a.set("sort",g));break}while((c=c.parentNode)&&c!=b)}})},resize:function(){var a=this.headerNode.firstChild,b=this.contentNode,d;this.inherited(arguments);if(!k("ie")||7<k("ie")&&!k("quirks"))if(b.style.width="",b&&a&&(d=a.offsetWidth)!=b.offsetWidth)b.style.width=d+"px"},destroy:function(){this._destroyColumns();this._sortListener&&this._sortListener.remove();this.inherited(arguments)},_setSort:function(a,
b){this.inherited(arguments);this.updateSortArrow(this._sort)},updateSortArrow:function(a,b){this._lastSortedArrow&&(h(this._lastSortedArrow,"\x3c!dgrid-sort-up!dgrid-sort-down"),h(this._lastSortedArrow,"!"),delete this._lastSortedArrow);b&&(this._sort=a);if(a[0]){var d=a[0].attribute,f=a[0].descending,c=this._sortNode,e,g,k;delete this._sortNode;if(!c)for(k in e=this.columns,e)if(g=e[k],g.field==d){c=g.headerNode;break}c&&(c=c.contents||c,this._lastSortedArrow=h(c.firstChild,"-div.dgrid-sort-arrow.ui-icon[role\x3dpresentation]"),
this._lastSortedArrow.innerHTML="\x26nbsp;",h(c,f?".dgrid-sort-down":".dgrid-sort-up"),this.resize())}},styleColumn:function(a,b){return this.addCssRule("#"+z.escapeCssIdentifier(this.domNode.id)+" .dgrid-column-"+a,b)},_configColumns:function(a,b){var d=[],f=b instanceof Array,c,e;for(c in b)e=b[c],"string"==typeof e&&(b[c]=e={label:e}),!f&&!e.field&&(e.field=c),c=e.id=e.id||(isNaN(c)?c:a+c),f&&(this.columns[c]=e),this._configColumn&&this._configColumn(e,c,b,a),e.grid=this,"function"===typeof e.init&&
e.init(),d.push(e);return f?b:d},_destroyColumns:function(){var a=this.subRows,b=a&&a.length,d,f,c,e;this.cleanup();for(d=0;d<b;d++){f=0;for(e=a[d].length;f<e;f++)c=a[d][f],"function"===typeof c.destroy&&c.destroy()}},configStructure:function(){var a=this.subRows,b=this._columns=this.columns;this.columns=!b||b instanceof Array?{}:b;if(a)for(b=0;b<a.length;b++)a[b]=this._configColumns(b+"-",a[b]);else this.subRows=[this._configColumns("",b)]},_getColumns:function(){return this._columns||this.columns},
_setColumns:function(a){this._destroyColumns();this.subRows=null;this.columns=a;this._updateColumns()},_setSubRows:function(a){this._destroyColumns();this.subRows=a;this._updateColumns()},setColumns:function(a){t.deprecated("setColumns(...)",'use set("columns", ...) instead',"dgrid 1.0");this.set("columns",a)},setSubRows:function(a){t.deprecated("setSubRows(...)",'use set("subRows", ...) instead',"dgrid 1.0");this.set("subRows",a)},_updateColumns:function(){this.configStructure();this.renderHeader();
this.refresh();this._lastCollection&&this.renderArray(this._lastCollection);this._started&&(this._sort&&this._sort.length?this.updateSortArrow(this._sort):this.resize())}});g.appendIfNode=p;g.defaultRenderCell=v;return g});
//@ sourceMappingURL=Grid.js.map