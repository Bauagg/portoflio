import '../../style/style-home4.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiMapPinFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import imageWaQr from '../../images/qr-wa.jpg'

const Kontak = () => {
    return (
        <Element name='contact' className='conten-contact'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='judul-education'>
                            <h1>CONTACT</h1>
                        </div>
                        <div className='row my-5'>
                            <div className='col-xl-6 col-md-6 col-sm-12 col-12 mt-5'>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><Link to='https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser&ec=asw-gmail-globalnav-signin&theme=glif'><MdEmail className='text-white iconKontak' /></Link></td>
                                            <td><Link to='https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser&ec=asw-gmail-globalnav-signin&theme=glif' className='text-decoration-none text-white fw-bold textKontak'>: mambaus.jobs@gmail.com</Link></td>
                                        </tr>
                                        <tr>
                                            <td><Link to='https://wa.me/qr/B2MKYA53OM7QC1'><FaWhatsapp className='text-white iconKontak' /></Link></td>
                                            <td><Link to='https://wa.me/qr/B2MKYA53OM7QC1' className='text-decoration-none text-white fw-bold textKontak'>: 085730839962</Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <img className='imageWaQr' src={imageWaQr} alt='gambar qr wa' />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><Link><RiMapPinFill className='text-white iconKontak' /></Link></td>
                                            <td><Link className='text-decoration-none text-white fw-bold textKontak'>: Bangeran, Dukun, Gresk, Jawa Timur 61155</Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='col-xl-6 col-md-6 col-sm-12 col-12 mt-5'>
                                <div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label text-white fw-bold">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlTextarea1" className="form-label text-white fw-bold">Example textarea</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <button type="button" className="btn btn-primary mb-3 w-100">Kirim</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Kontak