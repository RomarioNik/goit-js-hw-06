const refs = {
  textInput: document.querySelector('#name-input'),
  userName: document.querySelector('#name-output'),
};

const onInputValue = event => {
  refs.userName.textContent = event.target.value ? event.target.value : 'Anonymous!';
};

refs.textInput.addEventListener('input', onInputValue);
