// import { UuidContext } from '../components/context';
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

export function MainPage() {
  // const { uuid, setUuid } = useContext(UuidContext);
    const [myResult, setMyResult] = useState("");
    
    GetFurniture().then(res => {setMyResult(res)})
    console.log(myResult)
    return (
        <>
            <div className='mainpage-container'>
               {myResult ? myResult.map((obj) => <ShopItem id={obj.id} name={obj.description} price={obj.price} src={obj.src}/>) : 'Loading data...'}
            </div>
        </>
    )
}
