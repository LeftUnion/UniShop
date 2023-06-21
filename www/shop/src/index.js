import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// let menu = document.querySelector('#menuicon');
// let navbar = document.querySelector('.navigationbar');
// // let asd = document.querySelector(".asd");
// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('open');
// }

// name price img id
// class ItemList{
// constructor (id, name, price, imgsrc) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.imgsrc = imgsrc;
// }
// const newItem = new ItemList(id, name, price, imgsrc);
//     document.createElement('div');
//     newItem.className = 'shopitem';
    
// }
// let catalog = document.querySelector('.catalog')  
// function addItem (id, name, price, imgsrc) {
//     addedItem = document.createElement('div');
//     addedItemImage = document.createElement("img");
//     addedItemName = document.createElement("h3");
//     addedItemPrice = document.createElement("h6");
//     addedItemButton = document.createElement("button");
//     addedItem.className = "shopitem";
//     addedItemImage.src = imgsrc;
//     addedItem.appendChild(addedItemImage);
//     addedItemName.textContent = name;
//     addedItem.appendChild(addedItemName);
//     addedItemPrice.textContent = price;
//     addedItem.appendChild(addedItemPrice);
//     addedItem.setAttribute("id", id);
//     addedItemButton.className = "buy";
//     addedItem.appendChild(addedItemButton);
//     catalog.append(addedItem);
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

