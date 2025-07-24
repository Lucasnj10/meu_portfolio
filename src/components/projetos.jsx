import '../App.css';
import { useState } from 'react';
import projeto1 from '../assets/projeto1.png'
import projeto2 from '../assets/projeto2.png'
import projeto3 from '../assets/projeto3.png'
import projeto4 from '../assets/projeto4.png'
import seta from '../assets/seta.png'



const projetos = [
    {id: 1, nome : 'viagens', img : projeto1, link : 'https://lucasnj10.github.io/project-slider-citys-/'},
    {id: 2, nome : 'wikipedia film', img : projeto2, link : 'https://lucasnj10.github.io/project-Fast-and-Furious/'},
    {id: 3, nome : 'cadastro usuario', img : projeto3, link : 'https://cadastro-usuario-hitvyq3hy-lucas-projects-3c376bc6.vercel.app/'},
    {id: 4, nome : 'Tec Store', img : projeto4, link : 'https://lucasnj10.github.io/Project-Tec-Store/'},
];



function Projetos (){

    const [index, setindex] = useState(0);


    const projetosporpagina = 3;


    const botaoproximo = () => {
        if (index + projetosporpagina < projetos.length) {
            setindex(index + projetosporpagina);
        }
    };

    const botaoanterior = () => {
        if (index >= 0) {
            setindex(index - projetosporpagina);
        }
    };





    return(
        <div>
            <div className='carrossel_projetos'>
            
                {projetos.slice(index, index + projetosporpagina).map((projeto) => (
                    <div className='projeto' key={projeto.id}>
                        <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                        <img className='img_projeto' src={projeto.img} alt={projeto.nome} />
                        <div className='descricao_projeto'>
                            <h4>{projeto.nome}</h4>
                        </div>
                        </a>

                    </div>
                ))}

            </div>

                <button className='button_voltar' onClick={botaoanterior}>
                    <img src={seta} alt="voltar" />
                </button>

                <button className='button_proximo' onClick={botaoproximo}>
                    <img src={seta} alt="proximo" />
                </button>

    


        

            
            

        
        </div>
    )
}

export default Projetos;