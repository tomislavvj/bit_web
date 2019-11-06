/* function selectList() {
    document.querySelector(".lista1").className = "red";
}
selectList();


function selectListItems() {
    var a = document.querySelectorAll("ul li");
    for (var i = 0; i < a.length; i++) {
        a[i].className = "blue";
    }
}
selectListItems();


function listThird() {
    var b = document.querySelectorAll(".lista3 li");
    for (var i = 0; i < b.length; i++) {
        b[i].className = "third";
    }
}
listThird(); */



/* var x = document.querySelector("div");
var y = x.nextElementSibling;
var z = y.querySelector("ul li");
z.nextElementSibling.className = "active";


function remove() {
    z.nextElementSibling.className = "";
}
remove();
z.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.className = "active";

 */



var f = document.querySelector(".nav");
var g = f.querySelector("li");

function alertText() {
    window.alert(g.textContent);
}
alertText();

function text(text) {
    var h = f.lastElementChild.textContent = text;
}
text("KJKSZPJ");

// var h = f.lastElementChild.textContent = text();
