const express = require('express')
const app = express()
const port = 2010
/*
app.post('/*', (req, res) => {
    console.log(req.body)
})

app.get('/*', (req, res) => {
    console.log(req.body)
})
*/
app.post('/Token', (req, res) => {
    console.log(req.url)
    res.send({
        "access_token": "RZINa0KxDdn0PisCnw0DXOSfGM46gzWzDCn-uMCmgL-VrSZXxax4JUdeZeYsd4-Agd8sot0IaSEqg-ZX9JDuphs0s8QaN5a5-7YoaPE4jgFLH-ekELJIoNTq0m-D29zwa-SJ_RrteNnQV4pRkViZRWuCzblK_gJsSVLbAZneVLZ2g4pnY8IARndn5YXWEdWubGaxM_p18g0g2Kf_GWW_JxHN58yv9MNEG9w0fRIsfvFskzOkgdcyawnDjWyPOG74FPB4w4uTmAwf_zTNeHmPUa9L_0Sqze7iKnzf3AhPaBm01VAjMUrQu4JecezCA6mp3OIKXWlvxiiXa3IWxhSmUt2B6NpaWy2gZNE57cMqFmdmbMNTsadUHEhc0zHOjJbW_AYuT5acFDuAR1rCR4Y_NF8EXdwWSFw3pZOHZf4jG7CAogD2hAHMEepeOvIuhECQBfREu7tl5i9GnceLmS2L0_i327v3UH2SfwI5DQr9gsqVoFn0m7iOZgBs3PgJCknY",
        "token_type": "bearer",
        "expires_in": 86399,
        "userName": "lojas.reshop.ux@unicosistemas.com.br",
        ".issued": "Tue, 18 Aug 2020 20:53:42 GMT",
        ".expires": "Wed, 19 Aug 2020 20:53:42 GMT",
        "UId": 184558,
        "TenantId": 466,
        "UserEmail": "lojas.reshop.ux@unicosistemas.com.br",
        "IssuedDateTime": "2020-08-18T17:53:42",
        "ExpiresDateTime": "2020-08-19T17:53:42"
    })
})

app.post('/api/fidelidade/ExtratoFidelidade', (req, res) => {
    console.log(req.url)
    res.send({
        "Resultado": true,
        "Mensagem": "",
        "Transacoes": [],
        "Result": true,
        "Message": "",
        "IsException": false
    })
})

app.post('/api/fidelidade/ExtratoCampanha', (req, res) => {
    console.log(req.url)
    res.send({
        "Resultado": true,
        "Mensagem": "",
        "CampanhasAtivadas": [],
        "Result": true,
        "Message": "",
        "IsException": false
    })
})

app.post('/api/fidelidade/ConsultaCliente', (req, res) => {
    console.log(req.url)
    res.send({
        "Resultado": true,
        "Mensagem": "",
        "ClienteCadastrado": false,
        "Id": 0,
        "CustomerInfoId": 0,
        "Documento": "",
        "NumeroFidelidade": null,
        "DataCriacao": "0001-01-01T00:00:00",
        "DataUltimaModificacao": null,
        "Nome": null,
        "Documento2": null,
        "DataNascimento": null,
        "Sexo": 0,
        "NextExpirationDate": null,
        "EstadoCivil": 0,
        "Profissao": null,
        "SaldoAtual": 0.0,
        "SaldoEmProcessamento": 0.0,
        "SaldoMonetario": 0.0,
        "SaldoMonetarioEmProcessamento": 0.0,
        "Fidelizado": true,
        "IdPrograma": 0,
        "NomeProgramaFidelidade": null,
        "OcultaMensagemFidelidade": false,
        "EnviaCadastroVendedor": false,
        "RateioDescontoVitrine": false,
        "CategoriaFidelidade": null,
        "CategoriaCliente": null,
        "ValorMinimoCompra": 0.0,
        "PontuacaoPorVenda": false,
        "DataAdesao": null,
        "ResgateDesconto": false,
        "ResgateProduto": false,
        "ResgateCreditoDesconto": false,
        "ValorPonto": 0.0,
        "SaldoMinimoPontos": 0.0,
        "PermiteCredito": false,
        "PermiteResgate": false,
        "PermiteResgateProduto": false,
        "SenhaNoResgate": false,
        "SenhaNoCredito": false,
        "ValorLimiteDesconto": 0.0,
        "CadastroAlterado": false,
        "PossuiApp": false,
        "SmsToken": false,
        "PossuiCampanhaRemarcacao": false,
        "SugereResgateFidelidade": false,
        "SaldoCredito": 0.0,
        "WebserviceSaldoTroca": "",
        "Nsu": null,
        "SaldoTroca": 0.0,
        "GiftBloqueioResgate": false,
        "Telefones": [],
        "Enderecos": [],
        "Redes": [],
        "CampanhasOpcionais": [],
        "CamposCadastro": [],
        "PontosVencer": null,
        "MensagensExibir": [],
        "Result": true,
        "Message": "",
        "IsException": false
    })
})

app.post('/api/fidelidade/ConsultaCampanha', (req, res) => {
    console.log(req.url)
    res.send({
        "Resultado": true,
        "Mensagem": "",
        "Nsu": "2008199999999999",
        "QtdeCampanhasAtivadas": 0,
        "QtdeCampanhasPromocode": 0,
        "QtdeCampanhasConflito": 0,
        "QtdeCampanhasBrindeAdicionar": 0,
        "TotalDesconto": 0.0,
        "ValidaCampanhaErro": null,
        "Log": null,
        "AtivacaoOffline": false,
        "CampanhasAtivadas": [],
        "CampanhasConflito": [],
        "CampanhasBrindeAdicionar": [],
        "CamposCadastro": [],
        "Result": true,
        "Message": "",
        "IsException": false
    })
})

app.post('/api/fidelidade/ProcessaOperacao', (req, res) => {
    console.log(req.url)
    res.send({
        "Resultado": true,
        "Mensagem": "",
        "Nsu": "2008199999999999",
        "PontosCreditados": 0.0,
        "ValorCreditado": 0.0,
        "PontosDebitados": 0.0,
        "ValorDebitado": 0.0000,
        "MensagemCampanha": null,
        "Recibo": null,
        "IdTransacao": 999999999,
        "PreSaleId": null,
        "Result": true,
        "Message": "",
        "IsException": false
    })
})

app.get('/api/fidelidade/ConfirmaOperacao', (req, res) => {
    console.log(req.url)
    res.send({
        "Resultado": false,
        "Mensagem": "O atendimento será cancelado.",
        "Result": false,
        "Message": "O atendimento será cancelado.",
        "IsException": false
    })
})

app.listen(port, () => {
  console.log(`Fake Client listening at http://localhost:${port}`)
})