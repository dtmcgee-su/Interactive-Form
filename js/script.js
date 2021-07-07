const nameInput = document.getElementById("name");
nameInput.focus(); // Allows the name tab to be automatically selected
const title = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');

//Add 'Other Job Role' field if the user selects "Other" as a Job Role
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
//Show shirt colors that match theme selected
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
const totalElement = document.getElementById('activities-cost');
let total = 0;
// If activity is selected add its price to total, if activity is removed, remove price from total 
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
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
paypal.style.display = 'none';
bitcoin.style.display = 'none';
//Hide all other payment options if one is selected
paymentMehtod.addEventListener('change', (e) => {
    for (let i = 1; i < paymentTypes.length; i++) {
        if (paymentTypes[1].selected) {
            creditCard.style.display = 'block';
            paypal.style.display = 'none';
            bitcoin.style.display = 'none';
        } else if (paymentTypes[2].selected) {
            paypal.style.display = 'block';
            creditCard.style.display = 'none';
            bitcoin.style.display = 'none';
        } else {
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
const requiredTitles = document.querySelectorAll('.asterisk');
//If all Regex checks return true, submit form
//Prevent form from loading if all Regex checks don't return true
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkAll();
    if (checkAll() === true) {
        window.location.reload();
    } else {
        e.preventDefault();
    }
});

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

//Checking all Regex Functions
const checkAll = () => {
    regexTest(nameRegex(), 1);
    regexTest(emailRegex(), 2);
    regexTest(creditCardRegex(), 4);
    regexTest(zipCodeRegex(), 5);
    regexTest(cvvRegex(), 6);

    if (total === 0) {
        requiredTitles[3].parentElement.classList.add('not-valid');
    } else {
        requiredTitles[3].parentElement.classList.add('valid');
        requiredTitles[3].parentElement.classList.remove('not-valid');
    }

    if (nameRegex() && emailRegex() && total != 0 && creditCardRegex() && zipCodeRegex() && cvvRegex() && paymentTypes[1].selected) {
        return true
    } else if (nameRegex() && emailRegex() && total != 0 && !paymentTypes[1].selected) {
        return true;
    } else {
        false
    }
}

//Adds Accessability through tabbing for Activity options  
const activityOptions = document.querySelectorAll("#activities input");
for (let i = 0; i < activityOptions.length; i++) {
    activityOptions[i].addEventListener('focus', (e) => {
        activityOptions[i].parentElement.classList.add('focus');
    });
    activityOptions[i].addEventListener('blur', (e) => {
        activityOptions[i].parentElement.classList.remove('focus');
    });
};

//Regex Test Function
const regexTest = (regex, num) => {
    if (!regex) {
        requiredTitles[num].parentElement.classList.add('not-valid');
        requiredTitles[num].nextElementSibling.nextElementSibling.classList.remove('hint');
    } else {
        requiredTitles[num].parentElement.classList.remove('not-valid');
        requiredTitles[num].parentElement.classList.add('valid');
        requiredTitles[num].nextElementSibling.nextElementSibling.classList.add('hint');
    }
}