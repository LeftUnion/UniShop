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
            <h3 class="shopitem_name"> ${this.name} </h3>
            <h6> ${this.price}&#8381;</h6>
            <button class="buy"></button>
            </div>`;
        this.parent.append(element);
    }
}

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


// function - конечное действие => Отправляет запрос(arg) => json
// 1) Подумать все ли функции названы правильно и выполняют конечное действие
// 2) Должны ли функции возвращать занчения
// 

function GetFurnitureRequest(catalogSelector) {
    const url = new URL('https://localhost:7204/api/' + catalogSelector);
    let promise = fetch(url);
    var data;
    promise.then(response => response.json);
}

// async function GetFurnitureRequest(catalogSelector) { 
//     const url = new URL('https://localhost:7204/api/' + catalogSelector);
//     const response = await fetch(url);
//     const data = await response.json();

//     for (let i of data) {
//         if(i == null)
//             break;

//         new MenuCard(i.src, i.price, i.description, catalogSelector).render();
//     }
//     // return data; TODO 
// }


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
    console.log(GetFurnitureRequest(catArr));
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
    cart = document.querySelector('.cart'),
    modal = document.querySelector('.modal'),
    ul = document.querySelector('.cart_list');
function openCart() {
    modal.classList.add('active');
    modal.classList.remove('disabled');
    document.body.style.overflow = 'hidden';
    cartListNames.forEach(item => {
        let i = 0;
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(`${item}, ${cartListPrices[i]}`));
        ul.appendChild(li);
        i++;
    })
}
function closeCart() {
    modal.classList.add('disabled');
    modal.classList.remove('active');
    document.body.style.overflow = '';

}
cart.addEventListener('click', openCart);
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

// Покупка в корзине
const form = document.querySelector('.form');
function postData() {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const object = {};
        formData.forEach(function (value, key) {
            object[key] = value;
        });
        fetch('url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        }).then(data => {
            console.log(data);
        }).catch(() => {
            console.error('Ошибка');
        }).finally(() => {
            form.reset();
        });
    });
}
// Добавление предметов в корзину

let cartListNames = [],
    cartListPrices = [];
buyButton.forEach(item => {
    item.addEventListener('click', (e) => {
        const targetItem = e.target.parentElement;
        cartListNames.push(targetItem.children[1].innerHTML);
        cartListPrices.push(targetItem.children[2].innerHTML);
    })
})