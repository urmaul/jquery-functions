$.fn.formValues = function(values) {
    if ( values == undefined ) {
        // Return values
        values = {};

        $('input:not(:checkbox), input:checkbox:checked, select, textarea', this) .each(function(){
            var name = $(this) .attr('name');

            if (name)
                values[name] = $(this) .val();
        });

        return values;
        
    } else {
        // Set values
        
        for (name in values) {
            var nameS = '[name="' + name + '"]';
            var $checkbox = $('input' + nameS + ':checkbox', this);
            var value = values[name];
            
            if ( $checkbox .length ) {
                $checkbox .checked( value == $checkbox .val() );
                
            } else {
                $('input' + nameS + ':not(:checkbox), select' + nameS + ', textarea' + nameS, this) .val( value );
            }
        }
        
        return this;
    }
};
