
function fun()
{
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img11 = document.getElementById("myImg11");
var img12 = document.getElementById("myImg12");
var img13 = document.getElementById("myImg13");
var img30 = document.getElementById("myImg30");
var img31 = document.getElementById("myImg31");
var img32 = document.getElementById("myImg32");
var img33 = document.getElementById("myImg33");
var img34 = document.getElementById("myImg34");



var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");



img11.addEventListener("click", fun);
img12.addEventListener("click", fun);
img13.addEventListener("click", fun);
img30.addEventListener("click", fun);
img31.addEventListener("click", fun);
img32.addEventListener("click", fun);
img33.addEventListener("click", fun);
img34.addEventListener("click", fun);











// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
