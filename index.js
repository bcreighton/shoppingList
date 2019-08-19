// create a jQuery function
$(function() {
    $('js-shopping-list-form').submit(event => {

        // prevent default form functionality
        event.preventDefault();

        // create a variable to house the user input data
        const newItem = $('shopping-list-entry').val();
        // create variable to house default shopping list item controls
        const shoppingControls = '<div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div>';
    });
});
