const refs = {
  items: document.querySelectorAll('.item'),
};

console.log(`Количество категорий "li.item": ${refs.items.length}`);

refs.items.forEach(el => {
  console.log(`Category: ${el.querySelector('h2').textContent}`);
  console.log(`Elements: ${el.querySelectorAll('ul > li').length}`);
});
