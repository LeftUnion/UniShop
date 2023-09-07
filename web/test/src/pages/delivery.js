
import { useState, useEffect } from "react";

async function getAddresses() {
    const apiURL = "http://localhost:5035/api/addresses";
    const response = await fetch(apiURL, {
      method: 'GET',
      headers: {
        "Host": "localhost:3000",
        "Accept": "*/*"
      }
    });
    const body = await response.json()
    return body 
}

function CustomTableRow({id, town, address, comment}) {

    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{town}</td>
            <td>{address}</td>
            <td>{comment}</td>
          </tr>
    )
}

function MakeTable() {

    const [myResult, setMyResult] = useState([]);

    useEffect(() => {
        getAddresses().then(res => {
            setMyResult(res)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    

    return (
    <table>
      <thead>
        <tr>
          <th>Номер</th>
          <th>Город</th>
          <th>Адрес</th>
          <th>Комментарий</th>
        </tr>
      </thead>
      <tbody>
        {myResult.length > 0 ? myResult.map((obj) => <CustomTableRow address={obj.address} comment={obj.comment} id={obj.id} town={obj.town}/>) : 'Loading data...'}
      </tbody>
    </table>
    )
}

export function Delivery() {

    return (
        <>
        <h2>Доставляем мебель по всей Москве</h2>
        <div className="delivery">
            <text>
            Забудьте о хлопотах с доставкой! 
            Наш сервис доставки предлагает быструю, надежную и удобную услугу доставки прямо к вашей двери.
            Мы заботимся о вашем времени и комфорте, поэтому мы гарантируем своевременную доставку и качественное обслуживание. 
            Заказывайте сегодня и наслаждайтесь удобством нашей доставки!
            </text>            
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac635a91d353d40b176552a9c93c9d3cb230f5e09da13c1a45eea917ae496d2a7&amp;source=constructor" width="472" height="511" frameborder="0"></iframe>
        </div>  
        <MakeTable/>
        </>
    );
}