
function fun()
{
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var myImg = document.getElementById("myImg");
var myImgM = document.getElementById("myImgM");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img8 = document.getElementById("myImg8");
var img9 = document.getElementById("myImg9");
var img10 = document.getElementById("myImg10");
var img41 = document.getElementById("myImg41");
var img42 = document.getElementById("myImg42");
var img43 = document.getElementById("myImg43");




var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");



myImg.addEventListener("click", fun);

myImgM.addEventListener("click", fun);
img6.addEventListener("click", fun);
img7.addEventListener("click", fun);
img4.addEventListener("click", fun);
img5.addEventListener("click", fun);
img8.addEventListener("click", fun);
img9.addEventListener("click", fun);
img10.addEventListener("click", fun);
img41.addEventListener("click", fun);
img42.addEventListener("click", fun);
img43.addEventListener("click", fun);









// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
