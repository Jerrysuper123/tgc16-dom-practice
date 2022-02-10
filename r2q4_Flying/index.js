function extractFormInfo() {
  let firstName = document.querySelector("#firstname").value;

  let lastName = document.querySelector("#lastname").value;

  let ticketClass = document.querySelector(".ticketclass:checked").value;

  let checkboxes = document.querySelectorAll(".options:checked");
  let result = [];
  for (let el of checkboxes) {
    result.push(el.value);
  }

  let options = result;

  let price = {
    first: 1200,
    business: 750,
    economy: 250,
  };

  let totalPrice = price[ticketClass] + options.length * 10;

  console.log(firstName);
  let summaryElement = document.querySelector("#summary");
  summaryElement.innerHTML = `
              <div>name: ${firstName} ${lastName}</div>
              <div>ticket class: ${ticketClass}</div>
              <div>options: ${options}</div>
              <div>total bill: $${totalPrice}</div>
            `;
}

// let firstName = document.querySelector("#firstname").value;

// let lastName = document.querySelector("#lastname").value;

document.querySelector("#bookingBtn").addEventListener("click", function () {
  // let firstName = document.querySelector("#firstname").value;
  // console.log(firstName);
  extractFormInfo();
});
