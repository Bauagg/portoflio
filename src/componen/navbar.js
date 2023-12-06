import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style-navbar.css'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';
import imageMbs from '../images/image-mbs.jpg'
import { FiAlignJustify } from "react-icons/fi";

const NavbarIndex = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div className='navbar-conten'>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <img src={imageMbs} alt='logo navbar' className='logo-navabar' />
                    <button className="navbar-toggler" onClick={() => setToggle(!toggle)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler text-white"><FiAlignJustify className='fs-5' /></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav ms-auto">
                            <Link to='/' className="navbar-link text-center" >Home</Link>
                            <ScrollLink to='experience' smooth={true} duration={500} className="navbar-link text-center" >Experience</ScrollLink>
                            <ScrollLink to='education' smooth={true} duration={500} className="navbar-link text-center" >Education</ScrollLink>
                            <ScrollLink to='contact' smooth={true} duration={500} className="navbar-link text-center" >Contact</ScrollLink>
                        </div>
                    </div>
                </div>
            </nav>
            {
                toggle &&
                <div className='toggle-navbar'>
                    <Link to='/' onClick={() => setToggle(!toggle)} className="text-center link-togle">Home</Link>
                    <ScrollLink to='experience' smooth={true} duration={500} onClick={() => setToggle(!toggle)} className="text-center link-togle">Experience</ScrollLink>
                    <ScrollLink to='education' smooth={true} duration={500} onClick={() => setToggle(!toggle)} className="text-center link-togle">Education</ScrollLink>
                    <ScrollLink to='contact' smooth={true} duration={500} onClick={() => setToggle(!toggle)} className="text-center link-togle">Contact</ScrollLink>
                </div>

            }
        </div>
    )
}

export default NavbarIndex