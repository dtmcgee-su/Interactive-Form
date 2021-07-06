console.log('test');


const nameInput = document.getElementById("name");
nameInput.focus(); // Allows the name tab to be automatically selected

const title = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');

//Remove 'Other Job Role' field if the user selects "Other" as a Job Role
otherJobRole.style.display = 'none';
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
let total = 0;
fieldSet.addEventListener('change', (e) => {
    if (e.target.checked) {
        total += parseInt(e.target.dataset.cost);
    } else {
        total -= parseInt(e.target.dataset.cost);
    }
    totalElement.textContent = `Total: $${total}`;
});

/******* PAYMENT INFO  *******/
const paymentMehtod = document.querySelector('#payment');
const paymentTypes = paymentMehtod.getElementsByTagName('option');
const creditCardOption = paymentMehtod.getElementsByTagName('option')[1];
creditCardOption.selected = 'selected';
const creditCard = document.getElementById('credit-card');
const paypal  = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
paypal.style.display = 'none';
bitcoin.style.display = 'none';
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

const email = document.getElementById('email');
const creditCardNumber = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');
const submit = document.querySelector('button');
console.log(form);

//ENDED HERE 7/5 CHECL ASTERICK CLSS AND ASSIGN ALL TITLES FOR REQUIRED FIELDS
const requiredTitles = document.querySelectorAll('.asterisk');
form.addEventListener('submit', (e) => {

    if (checkAll() === true) {
        window.location.reload();
    } else{
        e.preventDefault();
    }
    

});
    
    
//     if (paymentTypes[1].selected) {
//         if (creditCardRegex() && zipCodeRegex() && cvvTest()) {
//             console.log('credit card stuff worked');
//         } else {
//             console.log('credit card failed');
//         }
//     }
//     if (total === 0){
//         //activitesTitle.classList.add('not-valid');
//     }
// });

//REGEX FUNCTIONS
const nameRegex = () => {
    const nameValue = nameInput.value;
   // https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
    return /^[a-z ,.'-]+$/i.test(nameValue);
}

const emailRegex = () => {
    const emailValue = email.value;
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
}

const creditCardRegex = () => {
    const creditCardValue = creditCardNumber.value;
    return /^[0-9]{13,16}$/.test(creditCardValue);
}
const zipCodeRegex = () => {
    const zipCodeValue = zipCode.value;
    return /^[0-9]{5}$/.test(zipCodeValue);
}
const cvvRegex = () => {
    const cvvValue = cvv.value;
    return /^[0-9]{3}$/.test(cvvValue);
}

const checkAll = () => {
    if (!nameRegex()){
        requiredTitles[1].classList.add('not-valid', 'error-border');
    } else {
        requiredTitles[1].classList.remove('not-valid', 'error-border');
    }

    if (!emailRegex()) {
        requiredTitles[2].classList.add('not-valid', 'error-border');
    } else {
        requiredTitles[2].classList.remove('not-valid', 'error-border');
    }

    if (total === 0) {
        requiredTitles[3].classList.add('not-valid', 'error-border');

    } else {
        requiredTitles[3].classList.remove('not-valid', 'error-border');
    }

    if (!creditCardRegex()) {
        requiredTitles[4].classList.add('not-valid', 'error-border');
    } else {
        requiredTitles[4].classList.remove('not-valid', 'error-border');
    }

    if (!zipCodeRegex()) {
        requiredTitles[5].classList.add('not-valid', 'error-border');
    } else {
        requiredTitles[5].classList.remove('not-valid', 'error-border');
    }

    if (!cvvRegex()) {
        requiredTitles[6].classList.add('not-valid', 'error-border');
    } else {
        requiredTitles[6].classList.remove('not-valid', 'error-border');
    }
}