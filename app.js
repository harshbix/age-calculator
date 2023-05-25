const inputYear = document.querySelector('#birthDate');
const calculateBtn = document.querySelector('#calculate');
const ageElement = document.querySelector('#age');

calculateBtn.addEventListener('click', () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
    const birthYear = parseInt(inputYear.value); // Retrieve and convert input value to a number
    const age = currentYear - birthYear;
    
    ageElement.innerHTML = 'You are ' + age + ' years old.';
    
    // Save the age to local storage
    localStorage.setItem('age', age);
});

// Retrieve the age from local storage on page load
window.addEventListener('load', () => {
    const savedAge = localStorage.getItem('age');
    if (savedAge) {
        ageElement.innerHTML = 'You are ' + savedAge + ' years old.';
    }
});
