import { CartItem } from '../components/cartItem';
import { UuidContext, UuidProvider } from '../components/context';
import { useState } from 'react';

function GetFurniture() {
    console.log("HERE*", localStorage.getItem('cart'))
    const myArray = JSON.parse(localStorage.getItem('cart'));
    console.warn(myArray);
    return myArray || [];
}


async function PostOrder(name, email, phone) {
    var productsRaw = JSON.parse(localStorage.getItem('cart'));
    console.log("PRODUCTS RAW:", productsRaw)
    var products = productsRaw.map((obj) => {
        var jsonString = JSON.parse(obj)
        return {
            id: jsonString.id,
            src: jsonString.src,
            description: jsonString.name,
            price: jsonString.price
        }
    })


    var client = {name: name, email: email, phone: phone};
    var data = {
        products: products, 
        client
    } 
    var json = JSON.stringify(data);
    console.log("POST JSON:", json);
    const apiURL = "http://localhost:5035/api/order";
    const response = await fetch(apiURL, {
      method: 'POST',
      headers: {
        "Host": "localhost:3000",
        "Accept": "*/*"
      },
      body: json
    });


    // return body 
}

export function Cart() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()

    var arr = GetFurniture()
    
    function handleClick() {
        PostOrder(name, email, phone)
        localStorage.removeItem('cart')
    }

    const jsonArray = arr.map((jsonString) => JSON.parse(jsonString));
    console.log(jsonArray)
    // console.warn(jsonArray.map((obj) => obj.name))
    return (
        <div className="cart-container">
            <div className="menu">
                {jsonArray ? jsonArray.map((obj) => <CartItem uuid={obj.uuid} id={obj.id} name={obj.name} price={obj.price} src={obj.src}/>) : 'Loading data...'}
            </div>
            <div className="order-wrapper">
                <div className="order">
                    <form>
                        <input placeholder="Имя" required="" type="text"                                                         value={name} onChange={(e) => setName(e.target.value)}/>
                        <input name="customerEmail" placeholder="Почта" type="email"                                             value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input name="customerPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Номер телефона" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        <button onClick={handleClick} type="button">Заказать</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

