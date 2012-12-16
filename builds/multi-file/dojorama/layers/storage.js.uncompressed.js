require({cache:{
'dojorama/ui/storage/widget/RowWidget':function(){
define("dojorama/ui/storage/widget/RowWidget", [
    "dojo/_base/declare",
    "mijit/_WidgetBase",
    "mijit/_TemplatedMixin"
], function (
    declare,
    WidgetBase,
    TemplatedMixin,
    template
) {
    "use strict";
    return declare([WidgetBase, TemplatedMixin], {
        templateString: '<tr><td data-dojo-attach-point="idNode"></td><td data-dojo-attach-point="dataNode"></td></tr>',

        _setIdAttr: function (id) {
            this.idNode.innerHTML = id;
            this._set('id', id);
        },
        
        _setDataAttr: function (data) {
            this.dataNode.innerHTML = data;
            this._set('data', data);
        }
    });
});
},
'dojorama/ui/storage/StoragePage':function(){
require({cache:{
'url:dojorama/ui/storage/template/StoragePage.html':"<div>\n    <div data-dojo-attach-point=\"navigationNode\"></div>\n\n    <div data-dojo-attach-point=\"mainNode\">\n        <h1>Storage</h1>\n        <!--<button class=\"btn\" data-dojo-attach-event=\"onclick:_onNewObjClick\">New Obj</button>\n        <button class=\"btn\" data-dojo-attach-event=\"onclick:_onRemObjClick\">Remove Obj</button>-->\n        <button class=\"btn\" data-dojo-attach-event=\"onclick:_onClearClick\">Clear</button>\n        \n        <hr />\n        \n        <table class=\"table table-striped\">\n            <thead>\n                <th>Id</th>\n                <th>Data</th>\n            </thead>\n            <tbody data-dojo-attach-point=\"tbodyNode\"></tbody>\n        </table>\n    </div>\n    \n    <div data-dojo-attach-point=\"footerNode\"></div>\n</div>",
'url:dojorama/ui/storage/css/StoragePage.css':"body {background: white;}"}});
/*jshint strict:false */

define("dojorama/ui/storage/StoragePage", [
    "dojo/_base/declare",
    "mijit/_WidgetBase",
    "mijit/_TemplatedMixin",
    "dojomat/_AppAware",
    "dojomat/_StateAware",
    "../_global/mixin/_NavigationMixin",
    "../_global/mixin/_FooterMixin",
    "dojo-local-storage/LocalStorage",
    "dojo/store/Observable",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/_base/json",
    "dojo/text!./template/StoragePage.html",
    "./widget/RowWidget",
    "dojo/text!./css/StoragePage.css"
], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    _AppAware,
    _StateAware,
    _NavigationMixin,
    _FooterMixin,
    LocalStorage,
    Observable,
    array,
    lang,
    json,
    template,
    RowWidget,
    css
) {
    return declare([_WidgetBase, _TemplatedMixin, _AppAware, _StateAware, _NavigationMixin, _FooterMixin], {

        router: null,
        request: null,
        templateString: template,
        store: null,
        observer: null,
        result: null,
        itemWidgets: [],
        
        constructor: function (params) {
            this.router = params.router;
            this.request = params.request;
            this.store = Observable(new LocalStorage());
        },

        postCreate: function () {
            this.inherited(arguments);
            this.setCss(css, 'all');
            this.setTitle('Storage');
        },
        
        startup: function () {
            this.inherited(arguments);
            this.showNavigation();
            this.showFooter();
            this.fetchItems();
        },
        
        fetchItems: function () {
            this.result = this.store.query(
                {},
                { sort: [{ attribute:"id", descending: false }]}
            );
            
            this.destroyItemWidgets();
            
            if (this.observer && this.observer.remove) {
                this.observer.remove();
            }
            
            this.observer = this.result.observe(lang.hitch(this, function (item, removedIndex, insertedIndex) {
                this.fetchItems();
            }, true));
            
            this.result.forEach(lang.hitch(this, function (item) {
                var index = this.itemWidgets.length;
                this.itemWidgets[index] = new RowWidget({}).placeAt(this.tbodyNode);
                this.itemWidgets[index].set('id', this.store.getIdentity(item));
                this.itemWidgets[index].set('data', json.toJson(item));
                this.itemWidgets[index].startup();
            }));
        },
        
        destroyItemWidgets: function () {
            array.forEach(this.itemWidgets, lang.hitch(this, function (itemWidget, idx) {
                itemWidget.destroy();
            }));
            
            this.itemWidgets = [];
        },
        /*
        _onNewObjClick: function (ev) {
            var newItem = {
                id: 'someJsonStringItemId',
                title: 'SomeJsonStringItem'
            };
            
            this.store.add(newItem);
        },
        
        _onRemObjClick: function (ev) {
            this.store.remove('someJsonStringItemId');
        },
        */
        _onClearClick: function (ev) {
            localStorage.clear();
            this.destroyItemWidgets();
        }
    });
});
},
'dojorama/ui/_global/mixin/_NavigationMixin':function(){
/*jshint strict:false */

define("dojorama/ui/_global/mixin/_NavigationMixin", [
    "dojo/_base/declare",
    "../widget/NavigationWidget"
], function (
    declare,
    NavigationWidget
) {
    return declare([], {
        // summary:
        //      Adds a NavigationWidget to a page-widget
        // description:
        //      This mixin can be used with any mijit/_TemplatedMixin-based widget which has
        //      a data-dojo-attach-point="navigationNode" in the template

        navigationWidget: null,

        postCreate: function () {
            this.inherited(arguments);
            
            this.navigationWidget = new NavigationWidget({
                router: this.router
            }, this.navigationNode);
        },

        startup: function () {
            this.inherited(arguments);
            this.navigationWidget.startup();
        },
        
        showNavigation: function () {
            this.navigationWidget.show();
        }
    });
});
},
'dojorama/ui/_global/widget/NavigationWidget':function(){
require({cache:{
'url:dojorama/ui/_global/widget/template/NavigationWidget.html':"<div class=\"navbar navbar-inverse\">\n    <div class=\"navbar-inner\">\n        <div class=\"container\">\n            <!-- Be sure to leave the brand out there if you want it shown -->\n            <a class=\"brand\" href=\"#\" data-dojo-attach-point=\"homeNode\"></a>\n            \n            <ul class=\"nav\">\n                <li><a href=\"#\" data-dojo-attach-point=\"releaseIndexNode\"></a></li>\n                <li><a href=\"#\" data-dojo-attach-point=\"storageNode\"></a></li>\n            </ul>\n\n            <!-- Everything you want hidden at 940px or less, place within here -->\n            <div class=\"nav-collapse\">\n            <!-- .nav, .navbar-search, .navbar-form, etc -->\n            </div>\n            \n            <ul class=\"nav pull-right\">\n                <li><a href=\"#\">Log out</a></li>\n            </ul>\n        </div>\n    </div>\n</div>"}});
/*jshint strict:false */

define("dojorama/ui/_global/widget/NavigationWidget", [
    "dojo/_base/declare",
    "mijit/_WidgetBase",
    "mijit/_TemplatedMixin",
    "dojomat/_StateAware",
    "../mixin/_ToggleMixin",
    "dojo/on",
    "dojo/_base/lang",
    "dojo/text!./template/NavigationWidget.html",
    "dojo/i18n!./nls/NavigationWidget"
], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    _StateAware,
    _ToggleMixin,
    on,
    lang,
    template,
    nls
) {
    return declare([_WidgetBase, _TemplatedMixin, _StateAware, _ToggleMixin], {

        router: null,
        templateString: template,
        
        constructor: function (params) {
            this.router = params.router;
        },

        postCreate: function () {
            var setNode = function (node, label, url) {
                node.innerHTML = label;
                node.href = url;
                
                this.own(on(node, 'click', lang.hitch(this, function (ev) {
                    ev.preventDefault();
                    this.push(url);
                })));
            };
            
            this.inherited(arguments);
            this.hide();
            lang.hitch(this, setNode)(this.homeNode, nls.labelHome, this.router.getRoute('home').assemble());
            lang.hitch(this, setNode)(this.releaseIndexNode, nls.labelReleaseIndex, this.router.getRoute('releaseIndex').assemble());
            lang.hitch(this, setNode)(this.storageNode, nls.labelStorage, this.router.getRoute('storage').assemble());
        }
    });
});
},
'dojorama/ui/_global/mixin/_ToggleMixin':function(){
define("dojorama/ui/_global/mixin/_ToggleMixin", [
    "dojo/_base/declare",
    "dojo/dom-style"
], function (
    declare,
    domStyle
) {
    "use strict";
    
    return declare([], {
        // summary:
        //      Toggle visibility of a widget
        // description:
        //      This mixin can be used with any mijit/_TemplatedMixin-based widget
        
        show: function () {
            domStyle.set(this.domNode, {
                display: "block"
            });
        },

        hide: function () {
            domStyle.set(this.domNode, {
                display: "none"
            });
        }
    });
});
},
'url:dojorama/ui/_global/widget/template/NavigationWidget.html':"<div class=\"navbar navbar-inverse\">\n    <div class=\"navbar-inner\">\n        <div class=\"container\">\n            <!-- Be sure to leave the brand out there if you want it shown -->\n            <a class=\"brand\" href=\"#\" data-dojo-attach-point=\"homeNode\"></a>\n            \n            <ul class=\"nav\">\n                <li><a href=\"#\" data-dojo-attach-point=\"releaseIndexNode\"></a></li>\n                <li><a href=\"#\" data-dojo-attach-point=\"storageNode\"></a></li>\n            </ul>\n\n            <!-- Everything you want hidden at 940px or less, place within here -->\n            <div class=\"nav-collapse\">\n            <!-- .nav, .navbar-search, .navbar-form, etc -->\n            </div>\n            \n            <ul class=\"nav pull-right\">\n                <li><a href=\"#\">Log out</a></li>\n            </ul>\n        </div>\n    </div>\n</div>",
'dojorama/ui/_global/mixin/_FooterMixin':function(){
/*jshint strict:false */

define("dojorama/ui/_global/mixin/_FooterMixin", [
    "dojo/_base/declare",
    "../widget/FooterWidget"
], function (
    declare,
    FooterWidget
) {
    return declare([], {
        
        // summary:
        //      Adds a FooterWidget to a page-widget
        // description:
        //      This mixin can be used with any mijit/_TemplatedMixin-based widget which has
        //      a data-dojo-attach-point="footerNode" in the template
        
        footerWidget: null,

        postCreate: function () {
            this.inherited(arguments);
            
            this.footerWidget = new FooterWidget({
                router: this.router
            }, this.footerNode);
        },

        startup: function () {
            this.inherited(arguments);
            this.footerWidget.startup();
        },
        
        showFooter: function () {
            this.footerWidget.show();
        }
    });
});
},
'dojorama/ui/_global/widget/FooterWidget':function(){
require({cache:{
'url:dojorama/ui/_global/widget/template/FooterWidget.html':"<div class=\"footer\">\n    <div class=\"container\">\n        <!--<p class=\"pull-right\"><a href=\"#\">Back to top</a></p>-->\n        <p>Dojorama is written by <a href=\"http://sirprize.me\">sirprize</a>, hosted on <a href=\"http://github.com/sirprize/dojorama\">Github</a> and released under the <a href=\"http://opensource.org/licenses/mit-license.php\">MIT license</a>.</p>\n        <!--\n        <ul class=\"footer-links\">\n            <li><a href=\"\">aaa</a></li>\n            <li><a href=\"\">bbb</a></li>\n        </ul>\n        -->\n    </div>\n</div>"}});
/*jshint strict:false */

define("dojorama/ui/_global/widget/FooterWidget", [
    "dojo/_base/declare",
    "mijit/_WidgetBase",
    "mijit/_TemplatedMixin",
    "dojomat/_StateAware",
    "../mixin/_ToggleMixin",
    "dojo/text!./template/FooterWidget.html",
    "dojo/i18n!./nls/FooterWidget"
], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    _StateAware,
    _ToggleMixin,
    template,
    nls
) {
    return declare([_WidgetBase, _TemplatedMixin, _StateAware, _ToggleMixin], {

        router: null,
        templateString: template,
        
        constructor: function (params) {
            this.router = params.router;
        },

        postCreate: function () {
            this.inherited(arguments);
            this.hide();
        }
    });
});
},
'url:dojorama/ui/_global/widget/template/FooterWidget.html':"<div class=\"footer\">\n    <div class=\"container\">\n        <!--<p class=\"pull-right\"><a href=\"#\">Back to top</a></p>-->\n        <p>Dojorama is written by <a href=\"http://sirprize.me\">sirprize</a>, hosted on <a href=\"http://github.com/sirprize/dojorama\">Github</a> and released under the <a href=\"http://opensource.org/licenses/mit-license.php\">MIT license</a>.</p>\n        <!--\n        <ul class=\"footer-links\">\n            <li><a href=\"\">aaa</a></li>\n            <li><a href=\"\">bbb</a></li>\n        </ul>\n        -->\n    </div>\n</div>",
'url:dojorama/ui/storage/template/StoragePage.html':"<div>\n    <div data-dojo-attach-point=\"navigationNode\"></div>\n\n    <div data-dojo-attach-point=\"mainNode\">\n        <h1>Storage</h1>\n        <!--<button class=\"btn\" data-dojo-attach-event=\"onclick:_onNewObjClick\">New Obj</button>\n        <button class=\"btn\" data-dojo-attach-event=\"onclick:_onRemObjClick\">Remove Obj</button>-->\n        <button class=\"btn\" data-dojo-attach-event=\"onclick:_onClearClick\">Clear</button>\n        \n        <hr />\n        \n        <table class=\"table table-striped\">\n            <thead>\n                <th>Id</th>\n                <th>Data</th>\n            </thead>\n            <tbody data-dojo-attach-point=\"tbodyNode\"></tbody>\n        </table>\n    </div>\n    \n    <div data-dojo-attach-point=\"footerNode\"></div>\n</div>",
'url:dojorama/ui/storage/css/StoragePage.css':"body {background: white;}",
'*now':function(r){r(['dojo/i18n!*preload*dojorama/layers/nls/storage*["ar","ca","cs","da","de","el","en-gb","en-us","es-es","fi-fi","fr-fr","he-il","hu","it-it","ja-jp","ko-kr","nl-nl","nb","pl","pt-br","pt-pt","ru","sk","sl","sv","th","tr","zh-tw","zh-cn","ROOT"]']);}
}});
define("dojorama/layers/storage", [], 1);