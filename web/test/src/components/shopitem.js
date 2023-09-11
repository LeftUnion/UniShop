import {useState, formRef, useContext} from 'react';
import {IdProvider, UuidContext} from '../components/context'
import { json } from 'react-router-dom';

// SaveLocalStorage() {
//     // // Сохраняем массив компонентов в localstorage
//     // const components = [<Component1 />, <Component2 />, <Component3 />];
//     // localStorage.setItem('components', JSON.stringify(components));

//     // // Получаем массив компонентов из localstorage
//     // const componentsString = localStorage.getItem('components');
//     // const components = JSON.parse(componentsString);
 
// }


export function ShopItem({id, src, name, price}) {



    const handleClick = (event) => {
        const cartName = "cart"
        
        let uuid = localStorage.getItem("uuid")
        if (uuid == undefined) {
            localStorage.setItem("uuid", "0")
        } else {
            localStorage.setItem("uuid", parseInt(uuid, 10) + 1)
        }

        var obj = {uuid, id, src, name, price}
        
        
        const jsonString = JSON.stringify(obj);

        var existingArray = JSON.parse(localStorage.getItem(cartName));
        if(!existingArray){
            existingArray = [];
        }
        existingArray.push(jsonString);

        localStorage.setItem('cart', JSON.stringify(existingArray));

    }
    return (
        <div className="shopitem" ref={formRef}  >
            <img alt="Балин"  src={src}/>
            <h3  className="shopitem_name"> {name} </h3>
            <h6 > {price}&#8381;</h6>
            <button onClick={handleClick} className="buy"></button>
        </div>
    )
}