const refs = {
  loginForm: document.querySelector('.login-form'),
};

const onFormSubmit = event => {
  event.preventDefault();

  const formElement = event.target.elements;

  if (formElement.email.value !== '' && formElement.password.value !== '') {
    const formData = {
      [formElement.email.name]: formElement.email.value,
      [formElement.password.name]: formElement.password.value,
    };

    console.table(formData);
    refs.loginForm.reset();
    return;
  }

  alert('All fields must be filled!');
};

refs.loginForm.addEventListener('submit', onFormSubmit);
