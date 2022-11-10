import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input')
}
populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle((e) => {
    formData[e.target.name] = e.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500));

function onFormSubmit (event) {
    event.preventDefault();
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    
    if (savedMessage) {
        formData = JSON.parse(savedMessage);
        
        for (const [key, value] of Object.entries(formData)) {
            refs.form.elements[key].value = value;
          }  
    }
}