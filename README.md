# Reshop Client Fake

Servidor mock para simular a API do Reshop Client usando Express.js.

## 📋 Descrição

Este projeto é um servidor mock/fake que simula as APIs do Reshop Client. Ele permite desenvolvimento e testes sem necessidade de conexão com o ambiente real, retornando respostas pré-definidas para os endpoints do sistema de fidelidade.

## 🚀 Tecnologias

- **Node.js**
- **Express.js** ^4.17.1

## 🔧 Endpoints Disponíveis

### Autenticação

- **POST /Token**
  - Retorna um token de acesso válido com informações do usuário
  - Dados mockados incluem: access_token, expires_in, userName, TenantId, etc.

### API de Fidelidade

- **POST /api/fidelidade/ExtratoFidelidade**
  - Retorna extrato de transações de fidelidade
  - Resposta: lista vazia de transações com resultado success

- **POST /api/fidelidade/ExtratoCampanha**
  - Retorna extrato de campanhas ativadas
  - Resposta: lista vazia de campanhas com resultado success

- **POST /api/fidelidade/ConsultaCliente**
  - Retorna dados mockados de consulta de cliente
  - Inclui informações de saldo, pontos, programa de fidelidade, etc.

## 📦 Instalação

```bash
npm install
```

## ▶️ Execução

```bash
node client.js
```

O servidor estará disponível em: `http://localhost:2010`

## 💡 Uso

O servidor automaticamente registra no console todas as requisições recebidas, permitindo debug e monitoramento das chamadas.

### Exemplo de requisição:

```bash
# Obter token
curl -X POST http://localhost:2010/Token

# Consultar cliente
curl -X POST http://localhost:2010/api/fidelidade/ConsultaCliente
```

## 📝 Estrutura das Respostas

Todas as respostas de fidelidade seguem o padrão:

```json
{
  "Resultado": true,
  "Mensagem": "",
  "Result": true,
  "Message": "",
  "IsException": false,
  // ... dados específicos do endpoint
}
```

## 🎯 Casos de Uso

- **Desenvolvimento**: Desenvolver features sem depender do ambiente real
- **Testes**: Executar testes automatizados com respostas previsíveis
- **Demo**: Demonstrações do sistema sem acesso ao backend real
- **Debug**: Validar requisições e comportamento do cliente

## 📁 Estrutura do Projeto

```
reshop-client-fake/
├── client.js           # Servidor Express com endpoints mockados
├── package.json        # Dependências e metadados do projeto
├── package-lock.json   # Lock de versões das dependências
└── .gitignore          # Arquivos ignorados pelo Git
```

## 🔍 Detalhes Técnicos

- **Porta**: 2010
- **Framework**: Express.js
- **Método HTTP**: POST para todos os endpoints de API
- **Formato de Resposta**: JSON

## 👤 Autor

Claudio A. Martins

## 📄 Licença

ISC

## 📌 Versão

1.0.0
