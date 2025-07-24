import './App.css'
import Apresentacao from './components/apresentation'
import Header from './components/header'
import Perfil from './components/perfil'
import Titulo_MeusProjetos from './components/Titulo_meus-projetos'
import Projetos from './components/projetos'
import Tecnologias from './components/Tecnologias'
import Title_Tecnologias from './components/Title_tecnologias'
import Titulo_Contato from './components/Titulo_contato'
import Forms_Contato from './components/form_contato'







function App() {
  return(
    <div id='home' className='background'>
      <div className='blur_fundo'></div>
      <div className='blur_fundo'></div>
      <Header></Header>
      <Perfil></Perfil>
      <Apresentacao></Apresentacao>
      <Titulo_MeusProjetos></Titulo_MeusProjetos>
      <Projetos></Projetos>
      <Title_Tecnologias></Title_Tecnologias>
      <Tecnologias></Tecnologias>
      <Titulo_Contato></Titulo_Contato>
      <Forms_Contato></Forms_Contato>
    </div>
  ) 
}


export default App
