const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');
const emailError = document.querySelector('.card__input-error');
const card = document.querySelector('.card');
const cardSuccessBtn = document.querySelector('.card__success-btn');

email.addEventListener('input', function(event) {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'card__input-error';
    } else {
        showError();
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!email.validity.valid) {
        showError();
    } else {
        card.classList.toggle('card--change');
    }
});

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'Enter your email address';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Incorrect email address';
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength}; you entered ${email.value.length}`;
    } 
}

cardSuccessBtn.addEventListener('click', () => {
    card.classList.toggle('card--change');
})
