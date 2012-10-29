$.fn.checked = function(checked){
	if (checked != undefined) {
		// Set checked
		if ( checked )
			this .attr('checked', 'checked');
		else
			this .removeAttr('checked');
		return this;
		
	} else {
		// Get checked
		return this .attr('checked') != undefined;
	}
};
