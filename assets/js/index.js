function escopo() {
    let form = document.querySelector('.form')
    let resultado = document.querySelector('.resposta');

    const arrayDePergunta = [];
    function  recebeEvento(event) {
        event.preventDefault();
        let question = document.querySelector('#pergunta');
       

        arrayDePergunta.push({
            pergunta: question.value
        });       
        
        resultado.innerHTML += `${pergunta.value} `
    }

    form.addEventListener('submit', recebeEvento)    
}
escopo();
