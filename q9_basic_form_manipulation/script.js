
function getFormValues() {

    let email = document.querySelector('#email-address').value;

    let model = document.querySelector('.phone-type:checked');

    let services = [];
    let checkBoxes = document.querySelectorAll('.services:checked');
    for(let checkBox of checkBoxes){
        services.push(checkBox.value);
    }

    let option = document.querySelector("#pick-up>option:checked").value;
    let pickup = option;

    // leave this line alone!
    return [email, model, services, pickup];

}

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
