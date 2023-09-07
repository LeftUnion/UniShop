import {useState, formRef, useContext} from 'react';
import {IdProvider, IdContext} from '../components/context'
import { json } from 'react-router-dom';

// SaveLocalStorage() {
//     // // Сохраняем массив компонентов в localstorage
//     // const components = [<Component1 />, <Component2 />, <Component3 />];
//     // localStorage.setItem('components', JSON.stringify(components));

//     // // Получаем массив компонентов из localstorage
//     // const componentsString = localStorage.getItem('components');
//     // const components = JSON.parse(componentsString);
 
// }


export function ShopItem({itemId, src, name, price}) {

    const { id, setId } = useContext(IdContext);

    const handleClick = (event) => {
        const cartName = "cart"

        var obj = {itemId, src, name, price}
        setId(id + 1)
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