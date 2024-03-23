import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import chidi from '../assets/chidi.jpg';
import black from '../assets/black.jpg';
import ecommerImage1 from '../assets/ecommerImage1.jpg';
import banner2 from '../assets/banner2.jpg';
import '../styles/Testimonials.css';

function Testimonial() {
    const testimonialData = [
        {
            image: black,
            name: "Charles",
            message: "The famous Greek salad of crispy lettuce, peppers, olives, our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"
        },
        {
            image: chidi,
            name: "Chidiebere",
            message: "The famous Greek salad of crispy lettuce, peppers, olives, our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"
        },
        {
            image: banner2,
            name: "Victoria",
            message: "The famous Greek salad of crispy lettuce, peppers, olives, our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"
        },
        {
            image: ecommerImage1,
            name: "Jerry",
            message: "The famous Greek salad of crispy lettuce, peppers, olives, our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"
        },
        {
            image: black,
            name: "Gavin",
            message: "The famous Greek salad of crispy lettuce, peppers, olives, our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"
        },
    ];

    return (
        <section>
            <article  className="container">
            <h2>Testimonials</h2>

            <Swiper
                spaceBetween={-340}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {testimonialData.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonials">
                            <h3 className='testimonial-name'>{testimonial.name}</h3>
                            <img src={testimonial.image} alt={`Testimonial ${index + 1}`} className='testimonial-image'/>
                            <p className='testimonial-message'>{testimonial.message}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </article>

                    <article>
                        
                    </article>
        </section>
        
    )
}

export default Testimonial;
