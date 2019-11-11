var body = document.body;
var marioStatic = document.getElementById("marioStatic");
var marioActive = document.getElementById("marioActive");

var event = document.addEventListener("click", moveRight);

function moveRight(event) {
  marioStatic.className = "";
  marioActive.classList.remove("hide");
}
moveRight();
