const refs = {
  container: document.querySelector('#counter'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};

const counter = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
  },
  decrement() {
    this.counterValue += -1;
  },
};

const onUpdateValue = () => (refs.value.textContent = counter.counterValue);

refs.decrementBtn.addEventListener('click', () => {
  counter.decrement();
  onUpdateValue();
});

refs.incrementBtn.addEventListener('click', () => {
  counter.increment();
  onUpdateValue();
});
