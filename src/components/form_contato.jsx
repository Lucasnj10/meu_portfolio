import '../App.css'


function enviarWhats(event){

    event.preventDefault()
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5586994848999'

    const texto = `olá! Me chamo ${nome}, ${mensagem}`
    const msgformatada = encodeURIComponent(texto)

    const url = `https://whatsa.me/${telefone}/?t=${msgformatada}`

    window.open(url, '_blank')
}


function Forms_Contato(){
    return(
        <div>
            <form className='form' onSubmit={enviarWhats}>
                <input type="text" id='nome' placeholder='   nome' onSubmit={enviarWhats}/>
                <textarea id='mensagem' placeholder='   Digite sua mensagem'></textarea>
                <button type='submit'>Enviar WhatsApp</button>
            </form>
        </div>
    )
}

export default Forms_Contato;