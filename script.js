function limpar() {
    var n = document.getElementById('nomeform').value='';
    var email = document.getElementById('emailform').value='';
    var textarea = document.getElementById('mensagemform').value='';
}

function enviar() {
    var n = document.getElementById('nomeform')
    var email = document.getElementById('emailform')
    var txtarea = document.getElementById('mensagemform')
    var res = document.getElementById('res')
    String(n.value)
    if (n.value.length == 0 || email.value.length == 0 || txtarea.value.length == 0) {
        alert('Você esqueceu alguma coisa! =(')
        res.style.color = 'red'
        res.innerHTML = 'Preencha todos os campos para continuar!'
    }
}