/* function startbcg(){
    document.getElementById("second").className="red";
}
startbcg(); */

/* function startLi() {
    var item = document.getElementsByTagName("li");
    for (var i = 0; i < item.length; i++) {
        item[i].className = "blue";
    }
}
startLi(); */

/* function thirdList(){
    var thirdUl= document.getElementById("third");
    var thirdLi= thirdUl.getElementsByTagName("li");

    for(var i = 0; i<thirdLi.length; i++){
        thirdLi[i].className="green";
    }
}
thirdList(); */


/* function activeFnc(){
    var haveClass= document.getElementById("fifth");
    haveClass.querySelector(".active").className="";
    var moveClass= document.getElementById("fourth");
    moveClass.firstElementChild.className="active";
}
activeFnc(); */


/* function textAlert(){
    var el= document.getElementById("sixth").firstElementChild.nextElementSibling.textContent;
    window.alert(el);
}
textAlert(); */

/* function changeText(str){
    document.getElementById("sixth").lastElementChild.textContent=str;
}
changeText("New Line"); */



/* var body=document.querySelector("body");
function createDropdown(arrStrings, domNode){
    var dropDownMenu=document.createElement("select");

    for(var i=0; i<arrStrings.length;i++){
        var text=document.createTextNode(arrStrings[i]);
        var option=document.createElement("option");

        option.appendChild(text);
        dropDownMenu.appendChild(option);
    }
    domNode.appendChild(dropDownMenu)
}
createDropdown(["asd", "lsd", "mdma", "acid"], body); */


/* var body = document.querySelector("body");

function createDropDownInnerHTML(arrStrings, domNode) {
    var select = "<select>"

    for (var i = 0; i < arrStrings.length; i++) {
        select += "<option>";
        select += arrStrings[i];
        select += "</option>"
    }
    select += "</select>"
    domNode.innerHTML=select;
}
createDropDownInnerHTML(["Volvo", "Mercedes", "BMW"], body); */


/* var formWhole = document.getElementById("forma");*/
/* function formCheck(form) {
    for (var i = 0; i < form.length; i++) {
        var selectInput = form[i];
        if (selectInput.hasAttribute("required") && selectInput.value === "") {
            selectInput.style.border = "1px solid red";
        }
    }
}
formCheck(document.getElementById("forma")); */



/* function changeBackgroundColor() {
    var bodyBackground = document.getElementById("bodyID");
    bodyBackground.classList.toggle("navyColor");
}

function turnOffLight(){
    document.getElementById("changer").removeAttribute("onclick");
} */


/* function sendMessage() {
    var input=document.querySelector(".textSend");
    var messageContent=input.value;
    var textContent=document.createTextNode(messageContent);
    var para=document.createElement("p");
    document.querySelector(".messageBox").appendChild(para);
    para.appendChild(textContent);
    input.value=""
} */


var player = document.querySelector("img");
var field = document.querySelector("body");
var event = field.addEventListener("click", playerMovement);

function playerMovement(event) {
    var x = event.clientX;
    var y = event.clientY;
    player.style.top = y + "px";
    player.style.left = x + "px";
}
playerMovement();


  
