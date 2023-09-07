import React from "react"


function Item({who, photo}) {


    return (
        <div className="item">
            <h3>{who}</h3>
            <img src={photo}/>
        </div>
        
    )
}


export function AboutUs() {

    return (
        <>
        <div className="about_us-container">
           <h2> Some wonderful </h2>
           <div className="items-container">
                <Item who={"Serega"} photo={"https://s3-eu-central-1.amazonaws.com/jazzpeople/wp-content/uploads/2015/11/12083132/Frank-Sinatra-141.jpg"} />
                <Item who={"Nastya"} photo="https://api.synergytimes.ru/upload/iblock/a2b/7iu4j1demuqh82c4kk85h17hpjmk98yf.jpg" />
                <Item who={"Ivan"} photo="https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/0352714d-8d7e-4eba-87fe-a9eee33d1266/220x330" />
           </div>
           <text>
           Добро пожаловать на наш сайт! Мы рады представить вам нашу компанию, специализирующуюся на продаже мебели. 
           Наша команда состоит из трех талантливых разработчиков, которые уделяют много времени созданию удобного и функционального интернет-магазина. 
           Мы предлагаем широкий ассортимент мебели для любого интерьера и вкуса. 
           Наша продукция отличается высоким качеством и доступными ценами. 
           Мы гарантируем быструю доставку и отличный сервис. Спасибо, что выбрали нашу компанию!
           </text>
        </div>
        </>
    )
}