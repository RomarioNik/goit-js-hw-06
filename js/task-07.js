const refs = {
  rengeEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

const onChangeValue = event => {
  refs.textEl.style.fontSize = `${event.target.value}px`;
};

refs.rengeEl.addEventListener('input', onChangeValue);
