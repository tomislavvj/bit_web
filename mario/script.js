var body = document.body;
var marioStatic = document.getElementById("marioStatic");
var marioActive = document.getElementById("marioActive");
var marioActiveLeft=document.getElementById("marioActiveLeft");

/* var event = body.addEventListener("click", runMario);
 */
function RunMarioLeft(){
  marioStatic.classList.add("hide");
  marioActiveLeft.classList.remove("hide");

}

function runMario() {
  marioStatic.classList.add("hide");
  marioActive.classList.remove("hide");
}


function startPosition() {
  marioStatic.classList.remove("hide");
  marioActive.classList.add("hide")
}



/* document.onkeydown = checkKey;
 */
document.onkeyup = checkKey;

function checkKey(e) {
  if (e.keyCode == "40") {
    startPosition();
  }
}

function checkKey(e) {
  if (e.keyCode == "39") {
    runMario();
  }
  else if(e.keyCode=="37"){
    RunMarioLeft();
  }
}
