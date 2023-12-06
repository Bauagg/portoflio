import '../../style/style-home2.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import imageEduwork from '../../images/eduwork.jpg'
import imageUdemy from '../../images/udemy.jpg'
import imageMySkill from '../../images/MySkill.png'
import imageCodingStudio from '../../images/coding-studio.jpg'
import imageKlasCom from '../../images/klass.com.png'
import imageRevou from '../../images/revou.png'
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"

const PagesHome3 = () => {
    const Navigate = useNavigate()

    return (
        <div>
            <Element name='education' className='contenEducation'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='judul-education'>
                                <h1 className='text-center'>EDUCATION <br />  CERTIFICATION</h1>
                            </div>
                            <div className='row mt-5 text-white'>
                                <div className='col-6'>
                                    <h4 className='text-start fw-bold'>MA. Tanwirul Qulub</h4>
                                    <p className='text-start'>Math and Science</p>
                                </div>
                                <div className='col-6'>
                                    <h4 className='text-end fw-bold'>Lamongan, Indonesia</h4>
                                    <p className='text-end'>Jul 2016 - Apr 2019</p>
                                </div>
                            </div>
                            <div className='text-education text-center text-white mx-auto pb-5'>
                                <h6 >GPA 80/100</h6>
                                <p >Course of interest: Information and Communication Technology and Logic Math.</p>
                                <p>During school, I actively used MS Office Word to write papers and PowerPoint for presentations, improving my communication skills.</p>
                            </div>
                            <div className='row my-5'>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='col-xl-4 col-md-6 col-sm-6 col-12  my-3'>
                                    <motion.img onClick={() => Navigate('/bootcamp-eduwork')} className='iamgeSertifikat' src={imageEduwork} alt='gambar certifikate' />
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='col-xl-4 col-md-6 col-sm-6 col-12  my-3'>
                                    <img onClick={() => Navigate('/bootcamp-udemy')} className='iamgeSertifikat' src={imageUdemy} alt='gambar certifikate' />
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='col-xl-4 col-md-6 col-sm-6 col-12 col-12 my-3'>
                                    <img onClick={() => Navigate('/bootcamp-mySkill')} className='iamgeSertifikat' src={imageMySkill} alt='gambar certifikate' />
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='col-xl-4 col-md-6 col-sm-6 col-12 col-12 my-3'>
                                    <img onClick={() => Navigate('/bootcamp-coding-studio')} className='iamgeSertifikat' src={imageCodingStudio} alt='gambar certifikate' />
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='col-xl-4 col-md-6 col-sm-6 col-12 col-12 my-3'>
                                    <img onClick={() => Navigate('/bootcamp-klass')} className='iamgeSertifikat' src={imageKlasCom} alt='gambar certifikate' />
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='col-xl-4 col-md-6 col-sm-6 col-12 col-12 my-3'>
                                    <img onClick={() => Navigate('/bootcamp-revou')} className='iamgeSertifikat' src={imageRevou} alt='gambar certifikate' />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    )
}

export default PagesHome3