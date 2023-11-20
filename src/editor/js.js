if (typeof hive == "undefined" || !hive) {
	var hive = {};
}

hive.ckEditor = {
	registerOnChange: function(id){
		CKEDITOR.instances[id] && CKEDITOR.instances[id].on('change', function () {
			CKEDITOR.instances[id].updateElement();
			jQuery('#' + id).trigger('change');
			return false;
		});
	},
	isRegisteredCsrf: false,
	registerCsrf: function(){
		if(this.isRegisteredCsrf)
			return;

		this.isRegisteredCsrf = true;

		yii & jQuery(document).off('click', '.cke_dialog_tabs a:eq(2)').on('click', '.cke_dialog_tabs a:eq(2)', function () {
			var form = jQuery('.cke_dialog_ui_input_file iframe').contents().find('form');
			var csrfName = yii.getCsrfParam();
			if (!form.find('input[name=' + csrfName + ']').length) {
				var csrfTokenInput = jQuery('<input/>').attr({'type': 'hidden', 'name': csrfName}).val(yii.getCsrfToken());
				form.append(csrfTokenInput);
			}
		});
	}
};