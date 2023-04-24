const handleFormAnimation = (start, end) => {
    const animation = start.animate([
        {opacity: 1},
        {opacity: 0}
    ], {
        duration: 500,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        fill: 'both'
    });
    animation.onfinish = () => {
        start.style.display = 'none';
        end.style.display = 'flex';
        end.animate([
            {opacity: 0},
            {opacity: 1}
        ], {
            duration: 500,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            fill: 'both'
        });
    }
}

const handleFormResults = (results) => {
    const resultsText = document.querySelector('.rating-result');
    resultsText.innerText = `You selected ${results.rating} out of 5`;
}

const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target.closest('form');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    // const response = await fetch('/api/submit', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data),
    // });
    // const result = await response.json();
    // console.log(result);
    // if (result.success) {
    //     alert('Thank you for your submission!');
    //     form.reset();
    // } else {
    //     alert('Something went wrong, please try again later.');
    // }
    handleFormResults(data);
    handleFormAnimation(form, document.querySelector('.rating-complete'));
}

const validateForm = (form) => {
    const inputs = form.querySelectorAll('input');
    const submitBtn = form.querySelector('button[type="submit"]');
    // ensure one of the radio inputs is checked
    const checked = Array.from(inputs).some(input => input.checked);
    if (!checked) {
        submitBtn.disabled = true;
        return false;
    } else {
        submitBtn.disabled = false;
        return true;
    }
}


export {handleFormSubmit, validateForm};