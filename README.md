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

## 💻 Como Executar

### Pré-requisitos

- **Node.js 12+**
- **npm** ou **yarn**

### Instalação

```bash
# Clonar repositório
git clone [url-do-repo]
cd reshop-client-fake

# Instalar dependências
npm install

# Ou com yarn
yarn install
```

### Execução

```bash
# Opção 1: Node.js direto
node client.js

# Opção 2: npm start
npm start

# Opção 3: Com nodemon (auto-reload)
npm install -g nodemon
nodemon client.js

# Opção 4: npm dev
npm run dev
```

O servidor estará disponível em: **http://localhost:2010**

## 💡 Como Usar

### Testando Endpoints

#### 1. Obter Token de Autenticação

```bash
# Com curl
curl -X POST http://localhost:2010/Token

# Com httpie
http POST localhost:2010/Token

# Com PowerShell
Invoke-RestMethod -Uri "http://localhost:2010/Token" -Method Post

# Resposta esperada
{
  "access_token": "RZINa0KxDdn0PisCnw0DXOSfGM46gzWz...",
  "token_type": "bearer",
  "expires_in": 86399,
  "userName": "lojas.reshop.ux@unicosistemas.com.br",
  "TenantId": 466,
  "UId": 184558
}
```

#### 2. Consultar Extrato de Fidelidade

```bash
curl -X POST http://localhost:2010/api/fidelidade/ExtratoFidelidade \
  -H "Content-Type: application/json" \
  -d '{
    "clienteId": "123",
    "dataInicio": "2024-01-01",
    "dataFim": "2024-12-31"
  }'
```

#### 3. Consultar Cliente

```bash
curl -X POST http://localhost:2010/api/fidelidade/ConsultaCliente \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer [token]" \
  -d '{"cpf": "12345678900"}'
```

### Usando em Tes (mesma porta do Reshop Client real)
- **Framework**: Express.js 4.17.1
- **Método HTTP**: POST para todos os endpoints de API
- **Formato de Resposta**: JSON
- **CORS**: Habilitado para permitir chamadas cross-origin
- **Logging**: Console.log de todas as URLs acessadas

## 💡 Conceitos Demonstrados

- **Mock Server**: Simulação de APIs para desenvolvimento
- **Express.js**: Framework web minimalista para Node.js
- **REST API**: Endpoints RESTful com JSON
- **Middleware**: Express middleware para parsing JSON
- **CORS**: Cross-Origin Resource Sharing
- **Test Doubles**: Stubs e mocks para testes

## ⚙️ Melhorias Implementadas

### ✅ Configuração
- **EditorConfig** adicionado para encoding UTF-8
- JavaScript configurado com indentação de 2 espaços

### ✅ Documentação
- README expandido com 4 formas de executar
- Exemplos de requisições curl, httpie, PowerShell
- Integração com testes Jest documentada
- Postman collection exemplo
- Conceitos técnicos explicados
- Uso em desenvolvimento e testes detalhado

## 🚀 Melhorias Futuras

- [ ] Adicionar mais endpoints mockados
- [ ] Suporte para diferentes respostas (success/error)
- [ ] Configuração via arquivo JSON
- [ ] Delay simulado (latência de rede)
- [ ] Logging estruturado (Winston/Pino)
- [ ] Swagger/OpenAPI documentation
- [ ] Docker image
- [ ] Validação de schema de requisições
- [ ] Health check endpoint
- [ ] Métricas e monitoramento

## 🔗 Links Úteis

- [Express.js Documentation](https://expressjs.com/)
- [Mock Service Worker](https://mswjs.io/)
- [JSON Server](https://github.com/typicode/json-server)
- [Postman](https://www.postman.com/)
- [HTTPie](https://httpie.io/)
```javascript
const axios = require('axios');

describe('Reshop Client API', () => {
  const baseURL = 'http://localhost:2010';
  
  test('deve retornar token de autenticação', async () => {
    const response = await axios.post(`${baseURL}/Token`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('access_token');
    expect(response.data.token_type).toBe('bearer');
  });
  
  test('deve retornar extrato vazio', async () => {
    const response = await axios.post(`${baseURL}/api/fidelidade/ExtratoFidelidade`);
    expect(response.data.Resultado).toBe(true);
    expect(response.data.Transacoes).toEqual([]);
  });
});
```

#### Postman Collection

```json
{
  "info": {
    "name": "Reshop Client Fake",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Get Token",
      "request": {
        "method": "POST",
        "url": "http://localhost:2010/Token"
      }
    },
    {
      "name": "Extrato Fidelidade",
      "request": {
        "method": "POST",
        "url": "http://localhost:2010/api/fidelidade/ExtratoFidelidade"
      }
    }
  ]
}
```

O servidor automaticamente registra no console todas as requisições recebidas, permitindo debug e monitoramento das chamadas.

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
