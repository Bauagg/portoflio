import 'bootstrap/dist/css/bootstrap.min.css';
import imageEduwork from '../../images/MySkill.png'
import Footer from './footer';

const DetailBootcampMySkill = () => {
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
                                <h4 className='text-start fw-bold'>MySkill</h4>
                                <p className='text-start'>BackEnd Basic Golang</p>
                            </div>
                            <div className='col-6'>
                                <h4 className='text-end fw-bold'>Online</h4>
                                <p className='text-end'>Oct 2023 - Nov 2023</p>
                            </div>
                        </div>
                        <p>●	Learn the Golang, SQL programming languages, as well as Gin and ORM Go frameworks. To become proficient in programming algorithms and logic. Using online learning resource and direct practice.</p>
                        <p>●	Create backend architecture and understand relational databases. Produce server applications without bugs or errors. Using tools such as Posman, SQL server, and Visual Studio Code.</p>
                        <p>●	Learn Authorization using JSON Web Tokens (JWT), secure private data in server applications using JWT tokens, inplementasi the Golang and JWT framework. </p>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default DetailBootcampMySkill