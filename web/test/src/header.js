import * as React from 'react'

export function Header() {
    return(
        <div className="header-container">
            <div className="logo">
                <i class="ri-home-gear-fill"></i>
                <span>Supellex</span>
            </div>
            <div className="nav">
                <a href='/'>Главная</a>
                <a href='/delivery'>Доставка</a>
                <a href='/about_us'>О нас</a>
                <a href='/address'>Контакты</a>
            </div>
            <div className="auth">
                <a href='/cart'>Корзина</a>
            </div>
        </div>
    );
}
