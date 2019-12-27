sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("tinyapp2.controller.Main", {

        onInit: function () {
            var oComponentData = this.getOwnerComponent().getComponentData();
            var oStartupParameters = oComponentData.startupParameters;
            console.log(JSON.stringify(oStartupParameters));
            this.getView().byId("courseName").setText(oStartupParameters.course[0]);
        }

    });
});