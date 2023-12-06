import '../../style/style-home4.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { Element } from 'react-scroll';
import imageFrondEndPoperty from '../../images/Screenshot_1.png'
import imageBackEndPoperty from '../../images/backend-property.png'
import imageFrondEndEcommerce from '../../images/Screenshot_2.png'
import imageBackEndEcommerce from '../../images/backend-ecommerce.png'
import imageBackEndEGolang from '../../images/backend-go.png'

const PagesHome4 = () => {
    return (
        <Element name='project' className='container-skill'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='judul-about'>
                            <h1>PROJECT</h1>
                        </div>
                        <div className='row d-flex justify-content-center my-5'>
                            <div className='col-xl-4 col-md-6 col-sm-6 col-12 col-12 my-3'>
                                <div className='position-relative'>
                                    <img className='w-100' src={imageFrondEndPoperty} alt='gambar certifikate' />
                                    <div className='contenProject'>
                                        <div>
                                            <Link to='https://github.com/Bauagg/membuat_Aplikasi_Property_fround_end' className='linkProject'><FaGithub /></Link>
                                            <h5 className='text-temaProject'>FRONT-END</h5>
                                            <h5 className='text-temaProject'>RUMAH IMPIAN</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-md-6 col-sm-6 col-12 col-12 my-3'>
                                <div className='position-relative'>
                                    <img className='w-100' src={imageBackEndPoperty} alt='gambar certifikate' />
                                    <div className='contenProject'>
                                        <div>
                                            <Link to='https://github.com/Bauagg/back_end_baru' className='linkProject'><FaGithub /></Link>
                                            <h5 className='text-temaProject'>BACK-END</h5>
                                            <h5 className='text-temaProject'>RUMAH IMPIAN</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-md-6 col-sm-6 col-12 col-12 my-3'>
                                <div className='position-relative'>
                                    <img className='w-100' src={imageFrondEndEcommerce} alt='gambar certifikate' />
                                    <div className='contenProject'>
                                        <div>
                                            <Link to='https://github.com/Bauagg/foun_end_tugas1' className='linkProject'><FaGithub /></Link>
                                            <h5 className='text-temaProject'>FRONT-END</h5>
                                            <h5 className='text-temaProject'>E-COMMERCE</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-md-6 col-sm-6 col-12 col-12 my-3'>
                                <div className='position-relative'>
                                    <img className='w-100' src={imageBackEndEcommerce} alt='gambar certifikate' />
                                    <div className='contenProject'>
                                        <div>
                                            <Link to='https://github.com/Bauagg/back_end_baru' className='linkProject'><FaGithub /></Link>
                                            <h5 className='text-temaProject'>BACK-END</h5>
                                            <h5 className='text-temaProject'>E-COMMERCE</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-md-6 col-sm-6 col-12 col-12 my-3'>
                                <div className='position-relative'>
                                    <img className='w-100' src={imageBackEndEGolang} alt='gambar certifikate' />
                                    <div className='contenProject'>
                                        <div>
                                            <Link to='https://github.com/Bauagg/golang-crud' className='linkProject'><FaGithub /></Link>
                                            <h5 className='text-temaProject'>BACK-END</h5>
                                            <h5 className='text-temaProject'>E-COMMERCE</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default PagesHome4