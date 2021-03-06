/*jshint strict:false */

define([
    "dojo/_base/declare",
    "mijit/_WidgetBase",
    "mijit/_TemplatedMixin",
    "dojomat/_AppAware",
    "dojomat/_StateAware",
    "../_global/mixin/_NavigationMixin",
    "../_global/mixin/_PlayerMixin",
    "../_global/mixin/_NotificationMixin",
    "../_global/mixin/_FooterMixin",
    "./mixin/_ReleaseBreadcrumbsMixin",
    "./mixin/_ReleaseActionsMixin",
    "./mixin/_ReleaseComponentTitleMixin",
    "../release/widget/ReleaseCreateFormWidget",
    "../../service/release-store",
    "dojo/topic",
    "dojo/_base/lang",
    "dojo/text!./template/ReleaseCreatePage.html",
    "dojo/i18n!./nls/ReleaseCreatePage",
    "dojo/text!../../styles/inline/ui/release/ReleaseCreatePage.css"
], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    _AppAware,
    _StateAware,
    _NavigationMixin,
    _PlayerMixin,
    _NotificationMixin,
    _FooterMixin,
    _ReleaseBreadcrumbsMixin,
    _ReleaseActionsMixin,
    _ReleaseComponentTitleMixin,
    ReleaseCreateFormWidget,
    releaseStore,
    topic,
    lang,
    template,
    nls,
    css
) {
    return declare([_WidgetBase, _TemplatedMixin, _AppAware, _StateAware, _NavigationMixin, _PlayerMixin, _NotificationMixin, _FooterMixin, _ReleaseBreadcrumbsMixin, _ReleaseActionsMixin, _ReleaseComponentTitleMixin], {

        router: null,
        request: null,
        session: null,
        templateString: template,
        formWidget: null,
        releaseStore: null,
        
        constructor: function (params) {
            this.router = params.router;
            this.request = params.request;
            this.session = params.session;
        },

        postCreate: function () {
            this.inherited(arguments);
            this.setCss(css, 'all');
            this.setTitle(nls.pageTitle);
            
            this.formWidget = new ReleaseCreateFormWidget({
                store: releaseStore
            }, this.formNode);
            
            // set breadcrumbs items
            this.setReleaseCreateBreadcrumbsItems();
            
            // set subscriptions
            this.setSubscriptions();
        },

        startup: function () {
            this.inherited(arguments);
            this.showNavigation();
            this.showFooter();
            this.showReleaseBreadcrumbs();
            this.showReleaseActions();
            this.formWidget.startup();
            this.formWidget.show();
        },

        setSubscriptions: function () {
            this.own(topic.subscribe('ui/release/widget/ReleaseCreateFormWidget/create-ok', lang.hitch(this, function (data) {
                this.setNotification(data.notification.message, data.notification.type);
                setTimeout(lang.hitch(this, function () {
                    // give it a bit of time for destruction
                    this.pushState(this.router.getRoute('releaseUpdate').assemble({ id: data.model.get('id') }));
                }), 0);
            })));
        }
    });
});