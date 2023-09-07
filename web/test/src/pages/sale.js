import {ShopItem} from '../components/shopitem'
import {useState} from 'react' 

async function GetFurniture() {
    const apiURL = "http://localhost:5035/api/sale";
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

export function MainPage() {
    const [myResult, setMyResult] = useState("");
    GetFurniture().then(res => {setMyResult(res)})

    return (
        
        <>
            <div className='mainpage-container'>
               {myResult ? myResult.map((obj) => <ShopItem name={obj.description} price={obj.price} src={obj.src}/>) : 'Loading data...'}
            </div>
        </>
    )
}