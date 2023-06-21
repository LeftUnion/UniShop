// window.addEventListener('DOMContentLoaded', () => {

const menu = document.querySelector('#menuicon'),
    navbar = document.querySelector('.navigationbar'),
    catalog = document.querySelectorAll('.catalog'),
    sectionContainer = document.querySelector('.line-menu'),
    section = document.querySelectorAll('.itemsection');
menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
});

// Добавление предметов в каталог
class MenuCard {
    constructor(src, price, name, parentSelector) {
        this.src = src;
        this.price = price;
        this.name = name;
        this.parent = document.querySelector(`[data-catalog="${parentSelector}"]`);
    }
    render() {
        const element = document.createElement('div');
        element.innerHTML = `<div class="shopitem">
            <img src=${this.src}>
            <h3> ${this.name} </h3>
            <h6> ${this.price}&#8381;</h6>
            <button class="buy"></button>
            </div>`;
        this.parent.append(element);
    }
}
// Пример работы функционала: new MenuCard(...).render(); аттрибуты кроме price вводятся в формате строки с кавычками!
// new MenuCard("https://sun9-79.userapi.com/impg/LSsulmUtDsFgXzmivjGosT4WrUgPhQ7NYI9Okw/tSz6YH6_HH8.jpg?size=799x800&quality=95&sign=62eaad51b31a51c8f9cffad9872355c8&type=album", 322, "МУДРОЕ ДРЕВО", 'tables').render();
// Переключение табов
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function hideContent() {
    catalog.forEach(item => {
        item.classList.add('disabled');
        item.classList.remove('active');
        removeAllChildNodes(item);
    })
    section.forEach(item => {
        item.classList.remove('currenttab');
    })
};
function sendRequest(catalogSelector) {
    const catalogRequest = new XMLHttpRequest();
    let url = new URL('https://localhost:7204/api/' + catalogSelector);
    catalogRequest.open('GET', url);
    // catalogRequest.setRequestHeader("Access-Control-Allow-Origin", "null");
    catalogRequest.send();
    catalogRequest.onload = function() {
        console.log('bebus')
        let data = JSON.parse(catalogRequest.response);
        console.log(data);
        for (let i of data) {
            new MenuCard(i.src, i.price, i.description, catalogSelector).render();
        }
    }

}
const catalogArr = [];
catalogArr[0] = 'tables';
catalogArr[1] = 'kitchens';
catalogArr[2] = 'beds';
catalogArr[3] = 'sofas';
catalogArr[4] = 'closets';
catalogArr[5] = 'completegoods';
function showContent(i = 0) {
    section[i].classList.add('currenttab');
    catalog[i].classList.add('active');
    catalog[i].classList.remove('disabled');
    let catArr = catalogArr[i];
    sendRequest(catArr);
}
hideContent();
showContent();
sectionContainer.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('itemsection')) {
        section.forEach((item, i) => {
            if (target == item) {
                hideContent();
                showContent(i);
            }
        })
    }
})

// Взаимодействие с корзиной
const buyButton = document.querySelectorAll('.buy'),   
      cart = document.querySelector('.cart');
      modal = document.querySelector('.modal');
      cart.addEventListener('click', openCart);

    function closeCart() {
        modal.classList.add('disabled');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function openCart() {
        modal.classList.add('active');
        modal.classList.remove('disabled');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeCart();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('active')) { 
            closeCart();
        }
    });
// });