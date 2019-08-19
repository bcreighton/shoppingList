// create a jQuery function
$(function() {
    $('#js-shopping-list-form').submit(event => {

        // prevent default form functionality
        event.preventDefault();

        // create a variable to house the user input data
        const newItem = $('#shopping-list-entry').val();
        // create variable to house default shopping list item controls
        const defaultShoppingControls = '<div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="button-label">check</span></button> <button class="shopping-item-delete"> <span class="button-label">delete</span> </button></div>';

        // add new item to the DOM
        $('.shopping-list').append(
            $(`<li><span class="shopping-item">${newItem}</span>${defaultShoppingControls}</li>`)
        );

        // clear text field after submission
        $('#shopping-list-entry').val('');

    });
});

// create a function to handle clicks
function shoppingListControlClicks() {
    // toggle the '.shopping-item__checked' class when the 'check" button is clicked
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    // remove shopping item when the 'delete' button is clicked
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });

}

$(shoppingListControlClicks);