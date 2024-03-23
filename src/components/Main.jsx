import React from 'react';
import '../styles/main.css';
import restauranfood from '../assets/restauranfood.jpg';
import greekSalad from '../assets/greekSalad.jpg';
import Bruchetta from '../assets/Bruchetta.png';
import lemonDessert from '../assets/lemonDessert.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import Testimonial from './Testimonials'

function Main() {
    const menuData = [
        {
            image: greekSalad,
            name: "Greek Salad",
            price: "N5,500",
            description: "The famous Greek salad of crispy lettuce, peppers, olives, our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"
        },
        {
            image: Bruchetta,
            name: "Bruchetta",
            price: "N5,500",
            description: "The famous bruschetta of crispy lettuce, peppers, olives, our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"
        },
        {
            image: lemonDessert,
            name: "Lemon Dessert",
            price: "N5,500",
            description: "The famous lemon dessert of crispy lettuce, peppers, olives, our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"
        }
    ];

    return (
        <>
            <section className="intro">
                <div className='intro-container'>
                    <article className="page-intro">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <h3>We are a family owned Mediterranean restaurant. Focused on traditional recipes served with a modern twist.</h3>
                        <button className='reserve-table'>Reserve a table</button>
                    </article>
                    <article>
                        <img src={restauranfood} alt="a chef carrying a tray of food" className="intro-image" />
                    </article>
                </div>
            </section>
            <section className="week-special">
                <article className='special-order'>
                    <h1 className='week'>This week's Specials!</h1>
                    <button className='order-online'>Online Menu</button>
                </article>
                <article className="menu" style={{ display: "flex" }}>
                    {menuData.map((item, index) => (
                        <div className="menu-item" key={index}>
                            <img src={item.image} alt={item.name} className='menu-image' />
                            <div className="details">
                                <div className='name-price'>
                                    <h2 className='item-name'>{item.name}</h2>
                                    <p className='item-price'>{item.price}</p>
                                </div>
                                <p className='menu-description'>{item.description}</p>
                                <div className='delivery'>
                                    <p className='order'>Order a Delivery</p>
                                    <FontAwesomeIcon icon={faMotorcycle} className="deliveryBike"/>
                                </div>
                            </div>
                        </div>
                    ))}
                </article>
            </section>
            <Testimonial />
        </>
    );
}

export default Main;
