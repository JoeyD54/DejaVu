/********************************************************
* This javascript is used to show the modal pop-up menu *
* The menu will hold the form to add an item to the to  *
* do list                                               *
********************************************************/


//THIS DOES NOT WORK. WTF!?!?!?!!?

var modal = document.getElementById("listModal");

// Get the button that opens the modal
var btn = document.getElementById("listBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } 
}