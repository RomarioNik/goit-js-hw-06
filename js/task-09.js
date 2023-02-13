function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.body,
  textColor: document.querySelector('.color'),
  colorBtn: document.querySelector('.change-color'),
};

const onChangeColor = () => {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.textColor.textContent = color;
};

refs.colorBtn.addEventListener('click', onChangeColor);
