sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press",
    "sap/ui/test/actions/EnterText"
    ], function(Opa5, Press, EnterText){
	"use strict";

	Opa5.createPageObjects({

		onHelloPage : {
            actions: {
                iInputName: function () {
                    return this.waitFor({
                        id: "welcomeInput",
                        actions: new EnterText({text: "Eugeny"})
                    });
                }
            },
			assertions : {
				iShouldSeeHelloText: function (sId, sText) {
                    return this.waitFor({
                        id: "welcomeText",
                        success: function (oText) {
                            Opa5.assert.strictEqual(oText.getText(), "Hello World!");
                        }
                    });
                },

                iSeeGreetings: function () {
                    return this.waitFor({
                        id: "welcomeText",
                        success: function (oText) {
                            Opa5.assert.strictEqual(oText.getText(), "Hello Eugeny!");
                        }
                    });
                }
			}
		}

	});

});