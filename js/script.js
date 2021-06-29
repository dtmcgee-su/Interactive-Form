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


 const shirtDesign = document.getElementById('design');
 const shirtColor = document.getElementById('color');
 const shirtColorChildren = shirtColor.children; 
 shirtColor.disabled = true;
//  const shirtColorChildren = shirtColor.children; 
//  shirtColorChildren.disabled = true;
 shirtDesign.addEventListener('change', (e) => {
     shirtColor.disabled = false;
     for (let i = 1; i < shirtColorChildren.length; i++) {
         const theme = e.target.value;
         const dataTheme = shirtColorChildren[i].getAttribute('data-theme');
          if (theme[i] === dataTheme) {
              dataTheme.hidden = false;
              theme[i].setAttribute('selected', true);
        //       dataTheme.hidden = false;
        //       dataTheme.setAttribute("selected", true);
        //     console.log('true');
          } else {
            dataTheme.hidden = true;
            theme[i].setAttribute('selected', false)
        //     console.log('false');
        console.log(theme);
        console.log(dataTheme);
         };
        //console.log(theme);
        //console.log(dataTheme);
     }
    });


// const shirtDesign = document.getElementById('design');
// const shirtColor = document.getElementById('color');
// const shirtColorChildren = shirtColor.children; 
// shirtColorChildren.disabled = true;
// shirtDesign.addEventListener('change', (e) => {
//     shirtColorChildren.disabled = 'false;
//     for (let i = 1; i < shirtColorChildren.length; i++) {
//         let shirtTheme = e.target.value;
//         //let dataTheme = shirtColorChildren[i].getAttribute('data-theme');
//         if (shirtTheme.value === 'js puns') {
//             colorDiv.hidden = false;
//             shirtTheme[0].hidden = true;
//             shirtTheme[1].hidden = false;
//             shirtTheme[2].hidden = false;
//             shirtTheme[3].hidden = false;
//             shirtTheme[4].hidden = true;
//             shirtTheme[5].hidden = true;
//             shirtTheme[6].hidden = true;
//     }
// }

// });
