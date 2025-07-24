import css from '../assets/css-3.png'
import html from '../assets/html.png'
import js from '../assets/js.png'
import physics from '../assets/physics.png'
import '../App.css'



function Tecnologias(){
    return(
        <div className='div_Tecnologias'>
            <img className='img_css' src={css} alt="css" />
            <img className='img_html' src={html} alt="html" />
            <img className='img_js' src={js} alt="js" />
            <img className='img_physics' src={physics} alt="physics" />
        </div>
    )
}

export default Tecnologias;