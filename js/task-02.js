const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const refs = {
  container: document.querySelector('#ingredients'),
};

const createList = (arr, tag, className) => {
  return arr.map(el => {
    const listItem = document.createElement(tag);
    listItem.textContent = el;
    listItem.classList.add(className);
    return listItem;
  });
};

refs.container.append(...createList(ingredients, 'li', 'item'));
