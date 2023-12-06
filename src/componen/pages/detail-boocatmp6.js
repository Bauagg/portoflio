import 'bootstrap/dist/css/bootstrap.min.css';
import imageEduwork from '../../images/revou.png'
import Footer from './footer';

const DetailBootcampRevou = () => {
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
                                <h4 className='text-start fw-bold'>Revou</h4>
                                <p className='text-start'>Data Analitic Master</p>
                            </div>
                            <div className='col-6'>
                                <h4 className='text-end fw-bold'>Online</h4>
                                <p className='text-end'>Sep 2022 - Nov 2022</p>
                            </div>
                        </div>
                        <p>●	Learn Big Data analysis with Excel to become proficient with PivotTable, Power Query, and Power Pivot. using online learning resources and hands-on practice.</p>
                        <p>●	Understand data processing with SQL and be proficient in managing various data formats with implications for the ability to retrieve, store and analyze data with SQL through online learning and practice.</p>
                        <p>●	Proficient in using Google Studio for data visualization and able to create effective reports and data dashboards through online learning and hands-on practice.</p>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default DetailBootcampRevou