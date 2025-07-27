let btn = document.querySelector('.burger__button__container');

let close__btn = document.querySelector('.close-burger__menu__btn')

let menu = document.querySelector('.burger__menu-container');



btn.addEventListener('click', () => {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex'; 
    } else {
        menu.style.display = 'none'; 
    }
})

close__btn.addEventListener('click', () => {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex'; 
    } else {
        menu.style.display = 'none'; 
    }
})