var body = document.body;
var marioStatic = document.querySelector(".marioStatic");
var marioActive = document.getElementById("marioActive");
var marioActiveLeft = document.getElementById("marioActiveLeft");

function RunMarioLeft() {
  marioStatic.classList.add("hide");
  marioActiveLeft.classList.remove("hide");
  marioActive.classList.add("hide");
  marioActiveLeft.classList.add("reverse");
  body.classList.add("animationClass");
}

function runMario() {
  marioStatic.classList.add("hide");
  marioActive.classList.remove("hide");
  marioActiveLeft.classList.add("hide");
  body.classList.add("animationClassReverse");
}

function startPosition() {
  marioStatic.classList.remove("hide");
  marioActive.classList.add("hide");
  marioActiveLeft.classList.add("hide");
  body.classList.remove("animationClass");
  body.classList.remove("animationClassReverse");
  marioStatic.classList.remove("marioJump");
}

function jumpMario() {
  marioStatic.classList.remove("hide");
  marioActive.classList.add("hide");
  marioActiveLeft.classList.add("hide");
  marioStatic.classList.add("marioJump");
}

onkeydown = checkKey;

function checkKey(e) {
  if (e.keyCode == "39") {
    runMario();
  } else if (e.keyCode == "37") {
    RunMarioLeft();
  } else if (e.keyCode == "32") {
    jumpMario();
  }
}

onkeyup = stopKey;

function stopKey(event) {
  if (event.keyCode == "39") {
    startPosition();
  } else if (event.keyCode == "37") {
    startPosition();
  } else if (event.keyCode == "32") {
    startPosition();
  }
}
