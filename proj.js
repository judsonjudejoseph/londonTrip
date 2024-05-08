
function fun()
{
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImgM");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img8 = document.getElementById("myImg8");
var img9 = document.getElementById("myImg9");
var img10 = document.getElementById("myImg10");


var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");



img.addEventListener("click", fun);
img2.addEventListener("click", fun);
img3.addEventListener("click", fun);
img4.addEventListener("click", fun);
img5.addEventListener("click", fun);
img6.addEventListener("click", fun);
img7.addEventListener("click", fun);
img8.addEventListener("click", fun);
img9.addEventListener("click", fun);
img10.addEventListener("click", fun);








// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
