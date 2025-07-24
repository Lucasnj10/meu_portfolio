import '../App.css';

function Header() {
    return(
    <div className='header'>
        <ul className='lista'>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
        </ul>
    </div>
    )
}

export default Header;