// alert("hellow");

//1
let firstH2 = document.querySelector("h2");
firstH2.style.fontSize = "32px";
firstH2.style.fontFamily = "Verdana";

//2
let wolfImage = document.querySelector("#wolfImage");
wolfImage.style.border = "1px solid black";
wolfImage.style.paddingTop = "32px";
wolfImage.style.paddingBottom = "15px";

//3
let firstLi = document.querySelector("#firstLi");
firstLi.style.backgroundColor = "yellow";
let lastLi = document.querySelector("#lastLi");
lastLi.style.backgroundColor = "yellow";

//4
let recipe = document.querySelector("#recipe");
recipe.innerHTML = "Pancake Recipe";

//5
let allListElements = document.querySelectorAll("ol>li");
for (el of allListElements) {
  el.style.backgroundColor = "orange";
}
