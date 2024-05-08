
function fun()
{
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img18 = document.getElementById("myImg18");
var img19 = document.getElementById("myImg19");
var img20 = document.getElementById("myImg20");
var img21 = document.getElementById("myImg21");
var img22 = document.getElementById("myImg22");
var img23 = document.getElementById("myImg23");
var img35 = document.getElementById("myImg35");
var img36 = document.getElementById("myImg36");
var img37 = document.getElementById("myImg37");
var img38 = document.getElementById("myImg38");
var img39 = document.getElementById("myImg39");
var img40 = document.getElementById("myImg40");





var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");



img18.addEventListener("click", fun);
img19.addEventListener("click", fun);
img23.addEventListener("click", fun);

img20.addEventListener("click", fun);
img21.addEventListener("click", fun);
img22.addEventListener("click", fun);
img35.addEventListener("click", fun);
img36.addEventListener("click", fun);
img37.addEventListener("click", fun);
img38.addEventListener("click", fun);
img39.addEventListener("click", fun);
img40.addEventListener("click", fun);










// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
