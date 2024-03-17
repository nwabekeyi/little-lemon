import Logo from '../assets/Logo.png';



function Nav() {
    return(
        <nav>
            <img src={Logo} alt="company logo"/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}

export default Nav