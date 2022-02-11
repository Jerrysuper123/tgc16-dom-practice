// alert("hellow");

//1
let boxes = document.querySelectorAll(".box");

//cannot add eventlistener to an array of nodes
// boxes.addEventListener("mouseenter", function () {
//   boxes.style.backgroundColor = "red";
// });

//1
// for (let el of boxes) {
//   el.addEventListener("mouseenter", function () {
//     el.style.backgroundColor = "red";
//   });
// }

for (let el of boxes) {
  el.addEventListener("mouseenter", changeBgColor);
}

//2
for (let el of boxes) {
  el.addEventListener("mouseleave", changeBgColor);
}

//challenge only 1 function
//event.type
//event.currentTarget
function changeBgColor(event) {
  if (event.type === "mouseenter") {
    event.currentTarget.style.backgroundColor = "red";
  } else if (event.type === "mouseleave") {
    event.currentTarget.style.backgroundColor = "white";
  }
}
