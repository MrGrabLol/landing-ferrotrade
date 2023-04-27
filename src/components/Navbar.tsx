import logo from "../assets/logo_new_v2.png";
import '../css/Navbar.css'

export function Navbar() {

    const showNavbar = () => {
        document.getElementById('navbar')?.classList.toggle('responsive-nav')
    }

    return (
        <div className='navbar'>
            <img className='image' src={logo} alt="ФЕРРОТРЕЙД" style={{filter: 'invert()'}}/>
            <nav className='headers' id='navbar'>
                <a href="#products" onClick={showNavbar}>
                    <span>ПРОДУКЦИЯ</span>
                </a>
                <a href="#production" onClick={showNavbar}>
                    <span>ПРОИЗВОДСТВО</span>
                </a>
                <a href="#info" onClick={showNavbar}>
                    <span>ИНФО</span>
                </a>
                <a href="#contacts" onClick={showNavbar}>
                    <span>КОНТАКТЫ</span>
                </a>
                <a href="#certificate" onClick={showNavbar}>
                    <span>ПРОВЕРКА СЕРТИФИКАТОВ</span>
                </a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    &#10006;
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                &#9776;
            </button>
        </div>
    )
}