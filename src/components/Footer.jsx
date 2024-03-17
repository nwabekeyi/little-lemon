import Logo from '../assets/Logo.png'
function Footer (){
    return(
        <section>
            <article>
                <img src={Logo} alt="company logo"/>
            </article>
            <article>
                <h2>Dormant Navigation</h2>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                </ul>
            </article>
            <article>
                <h2>Social-media Links</h2>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </article>
            <article>
                <h2>Contact</h2>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </article>
        </section>

    )
}

export default Footer