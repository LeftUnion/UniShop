import {ShopItem} from '../components/shopitem'
import {useState} from 'react' 

async function GetFurniture() {
    const apiURL = "http://localhost:5035/api/furniture";
    const response = await fetch(apiURL, {
      method: 'GET',
      headers: {
        "Host": "localhost:3000",
        "Accept": "*/*"
      }
    });
    const body = await response.json()
    console.log(body)
    return body 
}

export function Cart() {
    const [myResult, setMyResult] = useState("");
    GetFurniture().then(res => {setMyResult(res)})
    
    return (
        <div className="cart-container">
            <div className="menu">
                {myResult ? myResult.map((obj) => <ShopItem name={obj.description} price={obj.price} src={obj.src}/>) : 'Loading data...'}
            </div>
            <div className="order-wrapper">
                <div className="order">
                    <form>
                        <input placeholder="Name" required="" type="text" />
                        <input name="customerEmail" placeholder="Email" type="email" />
                        <input name="customerPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone" type="tel" />
                        <button type="button">Заказать</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

