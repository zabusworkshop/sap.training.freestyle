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
        }

    });
});