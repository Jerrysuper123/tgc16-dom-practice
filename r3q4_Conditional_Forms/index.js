// // alert("hellow");

// document.querySelector("#show").addEventListener("click", function () {
//   let peopleType = document.querySelector(".classification:checked").value;
//   console.log(peopleType);
// });

// //select all radio buttons.
// //loop thru
// //if checked value is true, addeventlisterner, event.currentTarget
// let radioButtons = document.querySelectorAll(".classification");

document.querySelector("#local").addEventListener("change", function (event) {
  if ((event.currentTarget.checked = true)) {
    document.querySelector("#for-locals").style.display = "block";
    document.querySelector("#for-tourists").style.display = "none";
    document.querySelector("#signupBtn").style.display = "block";
  }
});

document
  .querySelector("#tourists")
  .addEventListener("change", function (event) {
    if ((event.currentTarget.checked = true)) {
      document.querySelector("#for-locals").style.display = "none";
      document.querySelector("#for-tourists").style.display = "block";
      document.querySelector("#signupBtn").style.display = "block";
    }
  });

document.querySelector("#signUp").addEventListener("click", function () {
  let firstname = document.querySelector("#firstname").value;
  let lastname = document.querySelector("#lastname").value;
  let postalcode = document.querySelector("#postalcode").value;
  let hotelname = document.querySelector("#hotelname").value;
  let address;
  let checkedValue = document.querySelector(".classification:checked").value;

  if (checkedValue === "local") {
    address = postalcode;
  } else if (checkedValue === "tourists") {
    address = hotelname;
  }

  let result = document.querySelector("#result");
  result.innerHTML = firstname + lastname + address;
  //   console.log(firstname, lastname, postalcode, hotelname);
});
