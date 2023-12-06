import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/style-footer.css'
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
    return (
        <div className='conten-footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 text-center mt-5'>
                                <Link to='/' className="text-center text-decoration-none text-white fw-bold" >Home</Link>
                                <ScrollLink smooth={true} duration={500} to='experience' className="text-center mx-4 poniterFooter text-decoration-none text-white fw-bold" >Experience</ScrollLink>
                                <ScrollLink smooth={true} duration={500} to='education' className="text-center me-4 poniterFooter text-decoration-none text-white fw-bold" >Education</ScrollLink>
                                <ScrollLink smooth={true} duration={500} to='project' className="text-center poniterFooter text-decoration-none text-white fw-bold" >Project</ScrollLink>
                            </div>
                            <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 text-center mt-5'>
                                <p className='text-white'>@2023 A. Mambaus Sholihin All Rights Reserved.</p>
                            </div>
                            <div className='col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 text-center mt-5'>
                                <Link to='https://github.com/Bauagg' className='fs-'><FaGithub className='link-icon text-white d-inline ' /></Link>
                                <Link to='https://www.linkedin.com/in/a-mambaus-sholihin-786606294/' className='mx-3 fs-5'><FaLinkedin className='link-icon text-white d-inline ' /></Link>
                                <Link to='https://wa.me/qr/B2MKYA53OM7QC1' className='me-3 fs-5'><FaWhatsapp className='link-icon text-white d-inline ' /></Link>
                                <Link to='https://www.facebook.com/profile.php?id=100009365827821&locale=id_ID' className='fs-5'><FaFacebook className='link-icon text-white d-inline ' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer