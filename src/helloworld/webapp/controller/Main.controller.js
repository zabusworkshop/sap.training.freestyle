sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("tinyapp.controller.Main", {

        onInit: function () {
            this.getView().setModel(new JSONModel({
                name: null
            }), "viewModel");
        },

        onButtonPress: function () {
            var oCrossAppNavigation = sap.ushell.Container.getService("CrossApplicationNavigation");
            oCrossAppNavigation.toExternal({
                target: {
                    semanticObject: "dest",
                    action: "app"
                },
                params : {
                    "course": "WDE360"
                }
            });
        }

    });
});