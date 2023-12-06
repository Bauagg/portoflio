import 'bootstrap/dist/css/bootstrap.min.css';
import imageEduwork from '../../images/coding-studio.jpg'
import Footer from './footer';

const DetailBootcampCodingStudio = () => {
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
                                <h4 className='text-start fw-bold'>Coding Studion</h4>
                                <p className='text-start'>Front End Master</p>
                            </div>
                            <div className='col-6'>
                                <h4 className='text-end fw-bold'>Online</h4>
                                <p className='text-end'>Jul 2023 -  Sep 2023</p>
                            </div>
                        </div>
                        <p>●	Learn to create responsive web pages and be able to put knowledge into practice by creating various simple web projects use HTML.</p>
                        <p>●	Understanding to complete complex web design projects by applying its concepts to various simple web design projects using CSS. </p>
                        <p>●	Understanding command & fundamental of jQuery to applied and practice through exercise projects, and develop scripting skills and manipulation of HTML elements using jQuery.</p>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default DetailBootcampCodingStudio