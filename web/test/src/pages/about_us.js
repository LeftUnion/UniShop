import React from "react"


function Item({who, photo}) {


    return (
        <div className="item">
            <img src={photo}/>
            <h3>{who}</h3>
        </div>
        
    )
}


export function AboutUs() {

    return (
        <>
        <div className="about_us-container">
           <h2> Члены нашей комманды </h2>
           <div className="items-container">
                <Item who={"Сырёга"} photo={"https://s3-eu-central-1.amazonaws.com/jazzpeople/wp-content/uploads/2015/11/12083132/Frank-Sinatra-141.jpg"} />
                <Item who={"Анастасия"} photo="https://api.synergytimes.ru/upload/iblock/a2b/7iu4j1demuqh82c4kk85h17hpjmk98yf.jpg" />
                <Item who={"Вано"} photo="https://img51994.domkino.tv/img/2017-04-24/fmt_97_24_3f6e818cabbe93acc18d216af50dc7a0.jpg" />
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