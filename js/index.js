import { handleFormSubmit, validateForm } from "./FormUtils/index.js";
(async()=>{
    const submitBtn = document.querySelector('#submitBtn');
    const ratingContainer = document.querySelector('.rating-container');
    const ratingForm = document.querySelector('#ratingForm');
    const ratingInputs = ratingForm.querySelectorAll('input');

    submitBtn.addEventListener('click', handleFormSubmit);
    ratingContainer.style.minHeight = `${ratingContainer.clientHeight}px`;
    validateForm(ratingForm);
    ratingInputs.forEach(input => {
        input.addEventListener('change', () => {
            validateForm(ratingForm);
        });
    });

})();