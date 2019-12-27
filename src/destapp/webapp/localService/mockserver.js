sap.ui.define([
    "sap/ui/core/util/MockServer"
], function (MockServer) {
    "use strict";

    return {

        init: function () {

            // create
            var oMockServer = new MockServer({
                rootUri: "/my/service/"
            });

            var oUriParameters = jQuery.sap.getUriParameters();

            // configure mock server with a delay
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUriParameters.get("serverDelay") || 100
            });

            // simulate
            var sPath = jQuery.sap.getModulePath("tinyapp2.localService");
            oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
            oMockServer.attachAfter("GET", function (event, fnCallback, sEntitySet) {

            });

            // start
            oMockServer.start();
        }
    };

});