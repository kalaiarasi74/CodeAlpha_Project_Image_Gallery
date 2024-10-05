// Get the modal
var modal = document.getElementById("image-modal");

// Get the modal image and caption text
var modalImg = document.getElementById("modal-image");
var captionText = document.getElementById("caption");

// Get all gallery items
var galleryItems = document.getElementsByClassName("gallery-item");

// Loop through gallery items and add a click event listener
for (var i = 0; i < galleryItems.length; i++) {
    galleryItems[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
