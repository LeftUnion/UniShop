import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer'
import { Delivery} from './pages/delivery'
import { MainPage } from './pages/Main';
import { Cart } from './pages/cart';
import { AboutUs, Contacts } from './pages/contacts';

 function App() {
  return (
    <>
      <Header/>
      <div className='body'>
      <Router >
        <Routes >
          <Route path="/" element={<MainPage/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path='/delivery' element={<Delivery/>}/>
        </Routes>
      </Router>
      </div>
      <Footer/>
    </>
  )
};

export default App ;
// const Home = () => <h2>Главная</h2>;

// const Delivery = () => <h2>Доставка</h2>;

// const Contacts = () => <h2>Контакты</h2>;

// const Address = () => <h2>Адреса</h2>;

// const Sale = () => <h2>Акции</h2>;

