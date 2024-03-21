import Logo from '../assets/Logo.png';
import '../styles/navbar.css'



function Nav() {
    return(
        <nav>
            <img src={Logo} alt="company logo" className='logo'/>
            <ul id='nav-link'>
                <li className='nav-links'>Home</li>
                <li className='nav-links'>About</li>
                <li className='nav-links'>Menu</li>
                <li className='nav-links'>Reservations</li>
                <li className='nav-links'>Order Online</li>
                <li className='nav-links'>Login</li>
            </ul>
        </nav>
    )
}

export default Nav