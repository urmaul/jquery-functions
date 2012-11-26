$.fn.formValues = function(values) {
    if ( values == undefined ) {
        // Return values
        values = {};
        
        var selector = [
            'input:not(:checkbox):not(:radio)',
            'input:checked',
            'select',
            'textarea'
        ] .join(', ');

        $(selector, this) .each(function(){
            var name = $(this) .attr('name');

            if (name)
                values[name] = $(this) .val();
        });

        return values;
        
    } else {
        // Set values
        
        var selector = [
            'input:not(:checkbox):not(:radio)',
            'select',
            'textarea'
        ] .join(', ');
                
        for (name in values) {
            var value = values[name];
            var $inputs =  $('[name="' + name + '"]', this);
            var $checkable = $inputs .filter(':checkbox, :radio');
            
            if ( $checkable .length ) {
                $checkable .checked(false)
                    .filter('[value="' + value + '"]') .checked(true);
                
            } else {
                $inputs .filter(selector, this) .val( value );
            }
        }
        
        return this;
    }
};
