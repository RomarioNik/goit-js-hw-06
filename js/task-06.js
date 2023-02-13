const refs = {
  inputEl: document.querySelector('#validation-input'),
};

const onCheckQuantityOfSymbols = event => {
  const { inputEl } = refs;
  if (event.target.value.length >= inputEl.dataset.length) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
    return;
  }
  inputEl.classList.remove('valid');
  inputEl.classList.add('invalid');
};

refs.inputEl.addEventListener('blur', onCheckQuantityOfSymbols);
