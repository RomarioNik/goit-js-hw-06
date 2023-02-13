function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  container: document.querySelector('#controls'),
  numberOfEl: document.querySelector('#controls > input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

const createBoxes = amount => {
  let elementCollection = [];
  let size = 30;

  for (let i = 1; i <= amount; i += 1) {
    const element = document.createElement('div');
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.backgroundColor = getRandomHexColor();
    elementCollection.push(element);
    size += 10;
  }

  refs.boxes.append(...elementCollection);
};

const destroyBoxes = () => {
  refs.boxes.innerHTML = '';
  refs.numberOfEl.value = '';
};

const onCreateElements = () => {
  createBoxes(refs.numberOfEl.value);
};

const onDestroyElements = () => {
  destroyBoxes();
};

refs.createBtn.addEventListener('click', onCreateElements);
refs.destroyBtn.addEventListener('click', onDestroyElements);
