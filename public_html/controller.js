/*
 * Atividade Prática 2: consumo da API de endereço ViaCEP com JavaScript.
 * Ao digitar o CEP, os campos Rua, Bairro, Cidade e Estado são preenchidos.
 */

const campoCep = document.getElementById('cep');
const campoRua = document.getElementById('rua');
const campoBairro = document.getElementById('bairro');
const campoCidade = document.getElementById('cidade');
const campoEstado = document.getElementById('estado');
const formulario = document.getElementById('formEndereco');

let ultimoCepConsultado = '';

// Mantém apenas números no campo CEP.
campoCep.addEventListener('input', function () {
    campoCep.value = campoCep.value.replace(/\D/g, '');
    campoCep.classList.remove('is-invalid');
    if (campoCep.value.length === 8) {
        buscarEndereco();
    }
});

campoCep.addEventListener('blur', buscarEndereco);

function limparEndereco() {
    campoRua.value = '';
    campoBairro.value = '';
    campoCidade.value = '';
    campoEstado.value = '';
}

function buscarEndereco() {
    const cep = campoCep.value.replace(/\D/g, '');

    if (cep.length === 0) {
        return;
    }
    if (cep.length !== 8) {
        campoCep.classList.add('is-invalid');
        return;
    }
    if (cep === ultimoCepConsultado) {
        return; // evita consultar o mesmo CEP duas vezes
    }
    ultimoCepConsultado = cep;

    fetch('https://viacep.com.br/ws/' + cep + '/json/')
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error('Falha na consulta: ' + resposta.status);
            }
            return resposta.json();
        })
        .then(function (dados) {
            if (dados.erro) {
                limparEndereco();
                campoCep.classList.add('is-invalid');
                alert('CEP não encontrado.');
                return;
            }
            campoRua.value = dados.logradouro || '';
            campoBairro.value = dados.bairro || '';
            campoCidade.value = dados.localidade || '';
            campoEstado.value = dados.uf || '';
            document.getElementById('numero').focus();
        })
        .catch(function (erro) {
            ultimoCepConsultado = '';
            console.error(erro);
            alert('Não foi possível consultar o CEP. Verifique a conexão e tente novamente.');
        });
}

// Confere os campos obrigatórios antes de "cadastrar".
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    let valido = true;
    formulario.querySelectorAll('[required]').forEach(function (campo) {
        const vazio = campo.value.trim() === '';
        campo.classList.toggle('is-invalid', vazio);
        if (vazio) {
            valido = false;
        }
    });
    if (campoCep.value.length !== 8) {
        campoCep.classList.add('is-invalid');
        valido = false;
    }

    if (!valido) {
        alert('Preencha CEP, Rua, Bairro, Cidade e Estado.');
        return;
    }
    alert('Endereço cadastrado com sucesso!');
});
