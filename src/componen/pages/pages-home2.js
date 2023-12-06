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

const PagesHome2 = () => {

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
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block' src={imageHtml} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>HTML5</p>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block' src={imageCss} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>CSS3</p>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block' src={imageSass} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>SASS</p>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block' src={imageBootstrap} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>BOOTSTARP</p>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block' src={imageGit} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>GIT</p>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block' src={imageReact} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>REACT</p>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block' src={imagefigma} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>FIGMA</p>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block' src={imageJavascript} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>JAVASCRIPT</p>
                            </div>
                        </div>
                        <h4 className='fs-bold ms-5 my-5'>BACK-END:</h4>
                        <div className='row'>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block' src={imageNodeJs} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>NODE.JS</p>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block' src={imageSQL} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>MYSQL</p>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block imageMongoDb' src={imageMongoDb} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>MONGODB</p>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block imageIconSkill' src={imageExpress} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>EXPRESS.JS</p>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block imageIconSkill' src={imageSequelize} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>SEQUELIZE</p>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block imageIconSkill' src={imageGolang} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>GOLANG</p>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block imageIconSkill' src={imageGin} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>GIN</p>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block imageIconSkill' src={imageGorm} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>GORM</p>
                            </div>
                        </div>
                        <h4 className='fs-bold ms-5 my-5'>TOOLS:</h4>
                        <div className='row'>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block imageIconSkill' src={imageVsCode} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>VS.CODE</p>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block laragon' src={imageLaragon} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>lARAGON</p>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block xampp' src={imageXampp} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>XAMPP</p>
                            </div>
                            <div className='col-xl-3 col-md-3 col-sm-6 col-6 mt-3'>
                                <img className='mx-auto d-block imageIconSkill' src={imageInsomnia} alt='logo react' />
                                <p className='text-center mt-3 text-skill'>INSOMNIA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PagesHome2