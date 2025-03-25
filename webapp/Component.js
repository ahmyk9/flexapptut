sap.ui.define([
	'sap/ui/core/UIComponent',
	'sap/ui/model/json/JSONModel'
], function(UIComponent, JSONModel) {
	'use strict';

	return UIComponent.extend("flexapptut.controller.Component", {

		metadata: {
			manifest: 'json'
		},

		init: function () {
			var oProductsModel;

			UIComponent.prototype.init.apply(this, arguments);

			// set products demo model on this sample
			oProductsModel = new JSONModel('/model/products.json');
			oProductsModel.setSizeLimit(1000);
			this.setModel(oProductsModel, 'products');
		}
	});
});