sap.ui.define(["sap/ui/test/Opa5"],
	function(Opa5) {
	"use strict";

	var Common = Opa5.extend("tinyapp2.test.integration.arrangements.Common", {

		iStartMyApp : function () {
			return this.iStartMyAppInAFrame("/helloworld/webapp/index.html");
		}

	});

	return Common;

});
