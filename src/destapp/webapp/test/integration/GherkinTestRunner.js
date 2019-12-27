sap.ui.require([
	"jquery.sap.global",
	"sap/ui/test/gherkin/opa5TestHarness",
	// Code coverage will be calculated for all modules loaded after the harness
	"GherkinWithPageObjects/arrangements/Common",
	"GherkinWithPageObjects/pageObjects/Hello"
], function($, opa5TestHarness, Common) {
	"use strict";

	sap.ui.test.Opa5.extendConfig({
		viewName : "Main",
		viewNamespace : "tinyapp2.view",
		arrangements : new Common()
	});

	opa5TestHarness.test({
		featurePath: "GherkinWithPageObjects.HelloReq",
		generateMissingSteps: true
	});
});
