console.log('test');

const name = document.getElementById("name");
name.focus(); // Allows the name tab to be automatically selected

const title = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');

//Remove 'Other Job Role' field if the user selects "Other" as a Job Role
title.addEventListener('change', (e) => {
    if (e.target.value !== 'other') {
        otherJobRole.style.display = 'none';
    } else {
        otherJobRole.style.display = 'block';
    }
});

/******* T-SHIRT INFO  ******/
 const shirtDesign = document.getElementById('design');
 const shirtColor = document.getElementById('color');
 const shirtColorChildren = shirtColor.children; 
 shirtColor.disabled = true;

 shirtDesign.addEventListener('change', (e) => {
     shirtColor.disabled = false;
     for (let i = 1; i < shirtColorChildren.length; i++) {
         const theme = e.target.value;
         const dataTheme = shirtColorChildren[i].getAttribute('data-theme');
          if (theme === dataTheme) {
            shirtColorChildren[i].selected = true;         
            shirtColorChildren[i].hidden = false;
          } else {
            shirtColorChildren[i].selected = false;         
            shirtColorChildren[i].hidden = true;
         };
     }
    });

/******* REGISTER FOR ACTIVITIES SECTION  ******/

const fieldSet = document.getElementById('activities');
//console.log(fieldSet);
const checkBoxes = fieldSet.querySelectorAll('input');
//console.log(checkBoxes);
const totalElement = document.getElementById('activities-cost');
const totalElementNoDollarSign = totalElement.textContent.replace(/[$,.\s]0/g, '');
//console.log(totalElement);
fieldSet.addEventListener('change', (e) => {
    let total = 0;

    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked == true) {
            //console.log(checkBoxes[i]);
            let price = parseInt(checkBoxes[i].getAttribute('data-cost'));
            //console.log(price);
            total = (total + price);
            //console.log(total);
            totalElement.innerText = `$${total}`;
        }
    }
});

/******* PAYMENT INFO  *******/
const paymentMehtod = document.querySelector('#payment');
const paymentTypes = paymentMehtod.getElementsByTagName('option');
const creditCardOption = paymentMehtod.getElementsByTagName('option')[1];
creditCardOption.selected = 'selected';
const creditCard = document.getElementById('credit-card');
const paypal  = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
paymentMehtod.addEventListener('change', (e) => {
    //console.log(paymentTypes);
    for (let i = 1; i < paymentTypes.length; i++) {
        if (paymentTypes[1].selected) {
            creditCard.style.display = 'block';
            paypal.style.display = 'none';
            bitcoin.style.display = 'none';
        } else if (paymentTypes[2].selected) {
            paypal.style.display = 'block';
            creditCard.style.display = 'none';
            bitcoin.style.display = 'none';
        } else  {
            bitcoin.style.display = 'block';
            creditCard.style.display = 'none';
            paypal.style.display = 'none';
        }
        }

});