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
