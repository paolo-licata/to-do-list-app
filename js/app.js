function newItem() {

    //Creating "li" items
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
        $('#input').val(''); //Added to ensure that the input field is reset after li.append - makes it easier for the user.
    }

    //Crossing out a "to-do" element from the list
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });

    //adding the "x" button to delete a task
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('x'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);
    function deleteListItem() {
        li.addClass('delete');
    }

    $('#list').sortable();

}

$('#input').on('keydown', function (event) {

    if (event.key === 'Enter' || event.code === 'Enter') {
        event.preventDefault();
        newItem();
    }
});




