const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories ${itemEl.length}`);
itemEl.forEach(el => {
    console.log(el.firstElementChild.textContent),
    console.log(el.lastElementChild.children.length);
});
