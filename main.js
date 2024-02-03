const form = document.getElementById('form-comparador')
const containerMensagemSucesso = document.getElementById('success-message')
const containerMensagemErro = document.getElementById('error-message')
let formStatus = false

function verificaDados(valorA, valorB) {
    return valorB > valorA
}

form.addEventListener('click', function(e) {
    containerMensagemErro.style.display = 'none'
    containerMensagemSucesso.style.display = 'none'
})

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const valorA = document.getElementById('valor-a')
    const valorB = document.getElementById('valor-b')

    formStatus = verificaDados(valorA.value, valorB.value)

    if(formStatus) {
        containerMensagemSucesso.innerHTML = 'Sucesso: Valor B é maior que o Valor A'
        containerMensagemSucesso.style.display = 'block'
        containerMensagemErro.style.display = 'none'
    } else {
        containerMensagemErro.innerHTML = 'Erro: Valor A é maior que o Valor B'
        containerMensagemSucesso.style.display = 'none'
        containerMensagemErro.style.display = 'block'
    }

    valorA.value = ''
    valorB.value = ''
})