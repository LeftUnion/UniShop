import { CartItem } from '../components/cartItem';


function GetFurniture() {
    console.log("HERE*", localStorage.getItem('cart'))
    const myArray = JSON.parse(localStorage.getItem('cart'));
    console.warn(myArray);
    return myArray || [];
}

function handleClick() {
    // event.preventDefault()
    localStorage.removeItem('cart')
}

export function Cart() {
    var arr = GetFurniture()
    
    const jsonArray = arr.map((jsonString) => JSON.parse(jsonString));
    // console.warn(jsonArray.map((obj) => obj.name))
    return (
        <div className="cart-container">
            <div className="menu">
                {jsonArray ? jsonArray.map((obj) => <CartItem uuid={obj.id} id={obj.id} name={obj.name} price={obj.price} src={obj.src}/>) : 'Loading data...'}
            </div>
            <div className="order-wrapper">
                <div className="order">
                    <form>
                        <input placeholder="Имя" required="" type="text" />
                        <input name="customerEmail" placeholder="Почта" type="email" />
                        <input name="customerPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Номер телефона" type="tel" />
                        <button onClick={handleClick} type="button">Заказать</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

