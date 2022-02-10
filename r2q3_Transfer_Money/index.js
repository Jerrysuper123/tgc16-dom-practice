// PLACE YOUR CODE HERE

//1
let buttonTop = document.createElement("button");
buttonTop.innerHTML = "Top up $10";

let containerElement = document.querySelector("#container");
containerElement.appendChild(buttonTop);

//2
buttonTop.id = "topUp10";

//3
let accountElement = document.querySelector("#account");
buttonTop.addEventListener("click", function () {
  accountElement.innerHTML = Number(accountElement.innerHTML) + 10;
});

//4
let walletElement = document.querySelector("#other-wallet");
document
  .querySelector("#transfer10ToWallet")
  .addEventListener("click", function () {
    let accountBalance = Number(accountElement.innerHTML);
    if (accountBalance >= 10) {
      accountElement.innerHTML = accountBalance - 10;
      walletElement.innerHTML = Number(walletElement.innerHTML) + 10;
    }
  });

//5
document
  .querySelector("#transfer10ToAccount")
  .addEventListener("click", function () {
    let walletBalance = Number(walletElement.innerHTML);
    if (walletBalance >= 10) {
      accountElement.innerHTML = Number(accountElement.innerHTML) + 10;
      walletElement.innerHTML = walletBalance - 10;
    }
  });

//challenge
document.querySelector("#spendBtn").addEventListener("click", function () {
  let amount = Number(document.querySelector("#amount").value);
  //   console.log(amount);
  let walletBalance = Number(walletElement.innerHTML);

  if (walletBalance >= amount) {
    walletElement.innerHTML = walletBalance - amount;
  }
});
