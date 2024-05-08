
function fun()
{
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img14 = document.getElementById("myImg14");
var img15 = document.getElementById("myImg15");
var img16 = document.getElementById("myImg16");
var img17 = document.getElementById("myImg17");
var img24 = document.getElementById("myImg24");
var img25 = document.getElementById("myImg25");
var img26 = document.getElementById("myImg26");
var img27 = document.getElementById("myImg27");
var img28 = document.getElementById("myImg28");
var img29 = document.getElementById("myImg29");




var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");



img14.addEventListener("click", fun);
img15.addEventListener("click", fun);
img16.addEventListener("click", fun);
img17.addEventListener("click", fun);
img24.addEventListener("click", fun);
img25.addEventListener("click", fun);
img26.addEventListener("click", fun);
img27.addEventListener("click", fun);
img28.addEventListener("click", fun);
img29.addEventListener("click", fun);










// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
