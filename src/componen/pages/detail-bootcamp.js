import 'bootstrap/dist/css/bootstrap.min.css';
import imageEduwork from '../../images/eduwork.jpg'
import Footer from './footer';

const DetailBootcampEduwork = () => {
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
                                <h4 className='text-start fw-bold'>Eduwork</h4>
                                <p className='text-start'>FullStack development</p>
                            </div>
                            <div className='col-6'>
                                <h4 className='text-end fw-bold'>Online</h4>
                                <p className='text-end'>Apr 2023 - Jul 2023</p>
                            </div>
                        </div>
                        <p>●	Learned HTML, CSS, and Bootstrap in 2 weeks and managed to design and develop responsive and attractive web interfaces using HTML, CSS, and utilizing Bootstrap components.</p>
                        <p>●	Learned React.js to be able to develop interactive and dynamic user interfaces (UI) using React.js. and develop web applications with reusable UI components and strong state management capabilities in 3 weeks using React.js.</p>
                        <p>●	Learned to use Git in order to manage code versions and GitHub and manage repositories, collaborate with teams, and manage software projects using Git and GitHub.</p>
                        <p>●	Learned PostgreSQL SQL and SQL and be able to manage and optimize databases using PostgreSQL.</p>
                        <p>●	Learned data manipulation and be able to design database schemas, retrieve data, and execute SQL operations for data management using SQL.</p>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default DetailBootcampEduwork