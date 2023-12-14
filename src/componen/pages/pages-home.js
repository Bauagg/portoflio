import '../../style/style-home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import imageProfile from '../../images/profile.jpg'
import imageAbout from '../../images/separatorBlack 1.png'
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { useRef } from 'react';
import { Element } from 'react-scroll';

const PagesHome = () => {
    const experienceRef = useRef(null)

    return (
        <div>
            <div className='contenHome'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='conten-profile'>
                                <div className='row'>
                                    <div className='col-md-12 col-sm-10 col-10'>
                                        <h2 className='text-judul animate__animated animate__backInDown'>Hi, I am</h2>
                                        <h1 className='fw-bold mt-5 text-name animate__animated animate__backInLeft'>A. Mambaus Sholihin</h1>
                                        <p className='text-paragrap-judul animate__animated animate__backInLeft'>Fullstack Developer / Web Developer</p>
                                    </div>
                                    <div className='col-md-12 col-sm-2 col-2 my-3 pe-3'>
                                        <Link to='https://github.com/Bauagg' className='fs-5'><FaGithub className='link-icon animate__animated animate__bounce' /></Link>
                                        <Link to='https://www.linkedin.com/in/a-mambaus-sholihin-786606294/' className='mx-3 fs-5'><FaLinkedin className='link-icon animate__animated animate__bounce' /></Link>
                                        <Link to='https://wa.me/qr/B2MKYA53OM7QC1' className='me-3 fs-5'><FaWhatsapp className='link-icon animate__animated animate__bounce' /></Link>
                                        <Link to='https://www.facebook.com/profile.php?id=100009365827821&locale=id_ID' className='fs-5'><FaFacebook className='link-icon animate__animated animate__bounce' /></Link>
                                    </div>
                                </div>
                            </div>
                            <img className='iamge-profile' src={imageProfile} alt='iamge hero profile' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='contenHome2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='mt-5 text-white'>ABOUT ME</h1>
                            <p className='text-justify text-white'>
                                I am a developer with experience in front-end and back-end. I've taken various courses and bootcamps that helped me hone my skills using tools like Node.js, React.js, JavaScript, HTML, and more. I also have a background as a graphic designer to strengthens my front-end skills, especially in user interface design. I have high enthusiasm to continue learning and contributing to the world of software development, as well as collaborating with teams to achieve common goals. Currently, I am looking for opportunities to develop my skills in full stack, back-end, and front-end development. end.
                            </p>
                            <h2 className='mb-5 text-white'>| READ MORE |</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Element className='container-skill ' name='experience' ref={experienceRef}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='judul-about'>
                                <h1>WORK EXPERIENCE</h1>
                            </div>
                            <div className='d-flex justify-content-center my-5'>
                                <img src={imageAbout} alt='gambar about' />
                            </div>
                            <div className='row'>
                                <div className='col-xl-6 col-md-6 col-12 mt-2'>
                                    <div className='about-experience'>
                                        <div className='conten-experience'>
                                            <div>
                                                <h5 className='text-start fw-bold'>PT. Sand Jaya</h5>
                                                <p className='text-start'>Graphic Designer - Contract</p>
                                            </div>
                                            <div>
                                                <h5 className='text-end fw-bold'>Surabaya, ID</h5>
                                                <p className='text-end'>Sep 2020 - Dec 2020</p>
                                            </div>
                                        </div>
                                        <p className='text-justify'>●	Design a business card design and create a banner/brochure for the company in 5 months using CorelDRAW. </p>
                                        <p className='text-justify'>●	Produce professional business card designs and attractive promotional materials, ready to be used in company business activities with an average processing time of 1 week with 100% finished results.</p>
                                        <p className='text-justify'>●	Produced nearly 20+ designs within a month using CorelDraw for graphic design, including the creation of business cards with creative designs and effective banner/brochure creation.</p>
                                        <p className='text-justify'>●	Collaborate with the marketing team to understand the company's promotional needs. Helps improve marketing by focusing on customer communications. Increase customer satisfaction through good service and acclaimed design.</p>
                                    </div>
                                </div>
                                <div className='col-xl-6 col-md-6 col-12 mt-2'>
                                    <div className='about-experience'>
                                        <div className='conten-experience'>
                                            <div>
                                                <h5 className='text-start fw-bold'>Eduwork</h5>
                                                <p className='text-start'>Fullstack Developer - Internship Project</p>
                                            </div>
                                            <div>
                                                <h5 className='text-end fw-bold'>Online, ID</h5>
                                                <p className='text-end'>Apr 2023 - Jul 2023</p>
                                            </div>
                                        </div>
                                        <p className='text-justify'>●	Developed MERN Stack e-commerce application using React, MongoDB, and Express Js for feature and interface development with 80% feature completion rate in 3-weeks framework</p>
                                        <p className='text-justify'>●	Designed and developed the Application Programming Interface (API) needed to integrate data resources, for 3 weeks using Express.js, and MongoDB.</p>
                                        <p className='text-justify'>●	Enhancing the web interface using React, integrated smooth API calls with Axios, and efficiently managed state in 3 weeks of work and 100% completed with result is a captivating and functional interface with Redux.</p>
                                        <p className='text-justify'>●	Implemented backend coding by creating REST API and Authentication for login for 3 weeks with ExpressJS.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center mt-5'>
                                <img src={imageAbout} alt='gambar about' />
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    )
}

export default PagesHome