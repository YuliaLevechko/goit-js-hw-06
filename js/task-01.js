const categories = document.querySelector('#categories');
const totalElements = categories.children;
console.log("Number of categories:", totalElements.length);

[...totalElements].forEach(category => {
    const itemsName = category.querySelector('h2').textContent;
    const itemsElements = category.querySelectorAll('li').length;
    console.log(`Category: ${ itemsName }`);
    console.log(`Elements: ${itemsElements}`);
});