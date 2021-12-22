export function createAutocompleteJQ (src, tag) {
    
    $(tag).autocomplete({
                source: src,
                select: displayItem,
                change: displayItem,
                select: function( event, ui ) {return ui.item.label},
				minLength: 1,
				delay: 100
    });

    function displayItem(event, ui) {
        $('#cityLabel').text(ui.item.label)
    }

};