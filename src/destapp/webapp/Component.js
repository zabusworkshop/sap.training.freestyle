sap.ui.define([
    "sap/ui/core/UIComponent",
    "tinyapp2/localService/mockserver"
], function (UIComponent, mockserver) {
    "use strict";

    //Initialize mockserver. We don't expect this app to be run with real backend
    mockserver.init();

    return UIComponent.extend("tinyapp2.Component", {

        metadata: {
            manifest: "json"
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
        }
    });
});