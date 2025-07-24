import foto_perfil from '../assets/profile-programador.jpg'

function Perfil(){
    return(
        <div className='div-perfil'>
            <img className='foto-perfil' src={foto_perfil} alt="" />
            <h1>LUCAS FERNANDES LOPES DOS SANTOS</h1>
            <h2>Programador Front-End</h2>
        </div>
    )
}

export default Perfil;