#!/usr/bin/env node
// Captura os argumentos da linha de comando

const token = "fd3e5c29-5e3a-40c4-acc9-7a9511b6a761";
const nome_template = "retorno_erro";
const numero_de_recebimento = "552731508781" //5527997029537
const numero_de_envio = "5527998247116";

const args = process.argv.slice(2);
console.log(args)

// Verifica se o número de parâmetros está correto
if (args.length < 2) {
    console.error("Erro: parâmetros insuficientes. São necessários pelo menos dois parâmetros.");
    process.exit(1);
}

// Atribui os valores dos argumentos
const [hostName, triggerName] = args;

// Mensagem formatada
const mensagem = `? ALERTA ZABBIX ?\n\n?? *Host:* ${hostName}\n? *Problema:* ${triggerName}`;

// URL da API do MonitChat
const url = "https://api-v2.monitchat.com/api/v1/template/send";

// Headers da requisição
let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

// Corpo da requisição
let body = {
    "token": token,
    "template": {
        "template": {
            "id": "TuUy5PVPH2qAjBDsZn5FWT",
            "data": {},
            "message": mensagem,
            "name": "retorno_erro"
        },
        "category": "UTILITY",
        "components": [
            {
                "parameters": [
                    {
                        "type": "text",
                        "text": "Teste"
                    },
                    {
                        "type": "text",
                        "text": "Teste"
                    }
                ],
                "type": "body",
                "format": null
            }
        ],
        "name": "retorno_erro",
        "token": token,
        "phone_number": numero_de_recebimento,
        "namespace": "d6407a96_c157_4a9f_8388_3c245f08ae8b"
    },
    "phone_number": numero_de_recebimento,
    "name": "retorno_erro",
    "category": "UTILITY",
    "account_number": numero_de_envio,
    "open_ticket": true
};

// Envia a requisição
fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error('Erro ao enviar mensagem:', error));