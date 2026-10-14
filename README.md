# Cadastro de Endereço com ViaCEP

Formulário web de cadastro de endereço que preenche **Rua, Bairro, Cidade e Estado** automaticamente a partir do CEP, consumindo a API pública [ViaCEP](https://viacep.com.br/).

## Funcionalidades

- Busca automática do endereço ao digitar os 8 dígitos do CEP
- Campo de CEP aceita apenas números
- Evita consultas repetidas para o mesmo CEP
- Tratamento de CEP inexistente e de falhas de conexão
- Validação dos campos obrigatórios antes do envio, com destaque visual (Bootstrap `is-invalid`)
- Layout responsivo com Bootstrap 5

## Tecnologias

- HTML5
- CSS3
- JavaScript (Fetch API)
- Bootstrap 5
- API ViaCEP

## Estrutura

```
public_html/
├── index.html      # Estrutura do formulário
├── style.css       # Estilo do cartão e do botão
└── controller.js   # Consumo da API ViaCEP e validação
nbproject/          # Configuração do projeto no NetBeans
```

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/MilenaAmaral/cadastro-endereco.git
   ```
2. Abra `public_html/index.html` no navegador, ou abra o projeto no Apache NetBeans e execute.
3. Digite um CEP válido (ex.: `13170000`) e veja os campos serem preenchidos.

## Contexto

Atividade prática do curso de Engenharia de Software (Universidade Anhanguera) sobre consumo de APIs com JavaScript.

## Autora

**Milena Amaral Dias**: [LinkedIn](https://linkedin.com/in/milenaamaraldias) · [GitHub](https://github.com/MilenaAmaral)
