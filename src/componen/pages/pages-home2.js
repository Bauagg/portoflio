import '../../style/style-home2.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import imageHtml from '../../images/html.svg'
import imageCss from '../../images/css.svg'
import imageSass from '../../images/sass-css.svg'
import imageReact from '../../images/react.svg';
import imageBootstrap from '../../images/bootstrap.png'
import imageGit from '../../images/git.png'
import imagefigma from '../../images/figma.png'
import imageJavascript from '../../images/javascript.svg'
import imageNodeJs from '../../images/node.js.png'
import imageSQL from '../../images/SQL.svg'
import imageMongoDb from '../../images/mongoDb.png'
import imageGolang from '../../images/golang.png'
import imageGin from '../../images/gin-golang.png'
import imageExpress from '../../images/express.png'
import imageSequelize from '../../images/sequelize.png'
import imageGorm from '../../images/gorm-golang.png'
import imageVsCode from '../../images/vs.code.png'
import imageLaragon from '../../images/laragon.png'
import imageXampp from '../../images/xampp.png'
import imageInsomnia from '../../images/insomnia.png'
import 'animate.css';
import VisibilitySensor from 'react-visibility-sensor';

const PagesHome2 = () => {

    const handleVisibility = (isVisible, targetClass) => {
        const elements = document.getElementsByClassName(targetClass);
        if (elements) {
            for (let element of elements) {
                if (isVisible) {
                    element.classList.add('animate__animated', 'animate__zoomIn');
                } else {
                    element.classList.remove('animate__animated', 'animate__zoomIn');
                }
            }
        }
    };

    return (
        <div className='container-skill'>
            <div className='container pb-5'>
                <div className='row'>
                    <div className='col-xl-12'>
                        <div className='judul-about'>
                            <h1>SKILLS</h1>
                        </div>
                        <h4 className='fs-bold ms-5 my-5'>FRONT-END:</h4>
                        <div className='row'>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3' >
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imageHtml} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>HTML5</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imageCss} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>CSS3</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imageSass} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>SASS</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imageBootstrap} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>BOOTSTARP</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imageGit} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>GIT</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imageReact} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>REACT</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imagefigma} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>FIGMA</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imageJavascript} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>JAVASCRIPT</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                        </div>
                        <h4 className='fs-bold ms-5 my-5'>BACK-END:</h4>
                        <div className='row'>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imageNodeJs} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>NODE.JS</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imageSQL} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>MYSQL</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block imageMongoDb'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imageMongoDb} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>MONGODB</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block imageIconSkill'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imageExpress} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>EXPRESS.JS</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block imageIconSkill'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imageSequelize} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>SEQUELIZE</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block imageIconSkill'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imageGolang} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>GOLANG</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block imageIconSkill'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imageGin} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>GIN</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block imageIconSkill'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imageGorm} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>GORM</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                        </div>
                        <h4 className='fs-bold ms-5 my-5'>TOOLS:</h4>
                        <div className='row'>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block imageIconSkill'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imageVsCode} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>VS.CODE</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block laragon'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imageLaragon} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>lARAGON</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block xampp'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imageXampp} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>XAMPP</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <VisibilitySensor
                                    partialVisibility={true}
                                    onChange={(isVisible) => handleVisibility(isVisible, 'htmlImage')}
                                >
                                    <div className="htmlImage">
                                        <img className='mx-auto d-block imageIconSkill'
                                            onMouseEnter={(e) => e.target.classList.add('animate__animated', 'animate__swing')}
                                            onMouseLeave={(e) => e.target.classList.remove('animate__animated', 'animate__swing')}
                                            src={imageInsomnia} alt='logo react' />
                                        <p className='text-center mt-3 text-skill'>INSOMNIA</p>
                                    </div>
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PagesHome2