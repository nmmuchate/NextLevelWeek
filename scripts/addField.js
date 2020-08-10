//Procurar o botao
document.querySelector("#add-time")
    //quando clicar no botao
    .addEventListener('click', cloneField)

//exeutar uma acao
function cloneField() {
    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    /* fields[0].value = ""
     fields[1].value = ""*/
    fields.forEach(field => {
        // pega o field do momento e limpa ele
        field.value = ""
    });
    //colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}