

window.onload = function () {

    montarLista()

    document.getElementById('frmCadastro').addEventListener('submit', adicionarOuAlterar)

}

function adicionarOuAlterar(e) {

    var txtNome = document.getElementById('txtNome');
    var txtDataNascimento = document.getElementById('dtpDataNascimento');
    var rbSexo = document.getElementById('rdoMasculino');

   


    var contato = {
        nome: txtNome.value,
        dataNascimento: new Date(txtDataNascimento.value.replace("-", "/")),
        sexo: rbSexo.checked ? 'M' : 'F',
        data: new Date()
    }

    var contatos = []

    var contatosLocalStorage = localStorage.getItem('contatos');
    if (contatosLocalStorage != null) {
        contatos = JSON.parse(contatosLocalStorage)
    }
    contatos.push(contato)

    localStorage.setItem('contatos', JSON.stringify(contatos))

    montarLista();

    document.getElementById('frmCadastro').reset();	

    e.preventDefault();
}

function montarLista() {

    var contatosLocalStorage = localStorage.getItem('contatos');
    if (contatosLocalStorage == null) {
        return;
    }

    var contatos = []
    contatos = JSON.parse(contatosLocalStorage)
    var tbody = document.getElementById('tbodyResultados');
    //    tbody.innerHTML = ''

    tbody.innerHTML = ''

    // for (let index = 0; index < contatos.length; index++) {
    //     var contato = contatos[index]

    //     if(contato.nome == 'a'){
    //         contatos[index].nome = 'b'
    //         index = 0
    //     }

    //     console.log(contato)
    //     console.log(contato.sexo)
    // }

    contatos.map((contato, index) => {
        tbody.innerHTML +=
            '<tr id="rowTable' + index + '">' +
                '<td>' + contato.nome + '</td>' +
                '<td>' + contato.dataNascimento + '</td>' +
                '<td>' + contato.sexo + '</td>' +
                '<td>' + contato.data + '</td>' +
            '</tr>'
    })
}
