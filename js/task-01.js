const menuItemByCategories = document.querySelectorAll('.item');
console.log('Number of categories: ', menuItemByCategories.length);

menuItemByCategories.forEach(element => {
    console.log('Categories: ', element.querySelector('h2').textContent);
    console.log('Elements: ', element.querySelectorAll('li').length);

});
