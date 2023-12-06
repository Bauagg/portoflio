import 'bootstrap/dist/css/bootstrap.min.css';
import imageEduwork from '../../images/udemy.jpg'
import Footer from './footer';

const DetailBootcampUdemy = () => {
    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-xl-4 col-md-4 col-sm-12 col-12 my-3'>
                        <img className='w-100' src={imageEduwork} alt='gambar certifikate' />
                    </div>
                    <div className='col-xl-8 col-md-8 col-sm-12 col-12 my-3'>
                        <div className='row'>
                            <div className='col-6'>
                                <h4 className='text-start fw-bold'>Udemy</h4>
                                <p className='text-start'>Node Js Master</p>
                            </div>
                            <div className='col-6'>
                                <h4 className='text-end fw-bold'>Online</h4>
                                <p className='text-end'>Jun 2023 - Sep 2023</p>
                            </div>
                        </div>
                        <p>●	Started learning Node.js and successfully mastered Node.js, created an efficient backend server, and was able to do hands-on practice for using Node.js.</p>
                        <p>●	Learned Prisma to manage databases to become proficient in building database structures using online learning resources and hands-on practice.</p>
                        <p>●	Learning Express.js for the backend so that it is proficient in creating backend applications using online learning resources and practice.</p>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default DetailBootcampUdemy