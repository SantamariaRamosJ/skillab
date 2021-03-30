// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//Run the modal when the browser complete load
window.addEventListener('DOMContentLoaded', (event) => {
    modal.style.display = "block";
    if (window.location.hash === "#es"){
        modal.style.display="none";
    }
    if (window.location.hash === "#eng"){
        modal.style.display="none";
    }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






