#!/usr/bin/env python3

import sys
import requests
import os

# Verifica se os argumentos foram passados corretamente
if len(sys.argv) < 3:
    print("Erro: parâmetros insuficientes. São necessários pelo menos dois parâmetros.")
    sys.exit(1)

host_name = sys.argv[1]
trigger_name = sys.argv[2]
mensagem = f"? ALERTA ZABBIX ?\n\n?? *Host:* {host_name}\n? *Problema:* {trigger_name}"
url = "https://api-v2.monitchat.com/api/v1/template/send"


monitchat_token = os.getenv("MONITCHAT_TOKEN", "fd3e5c29-5e3a-40c4-acc9-7a9511b6a761")

# Headers da requisição
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

# Corpo da requisição
body = {
    "token": monitchat_token,
    "template": {
        "template": {
            "id": "DJBEvcprSCTjGJpILYaHWT",
            "data": {},
            "message": mensagem
        },
        "category": "UTILITY",
        "components": [
            {
                "parameters": [
                    {"type": "text", "text": host_name},
                    {"type": "text", "text": trigger_name}
                ],
                "type": "body",
                "format": None
            }
        ],
        "name": "retorno_erro",
        "token": monitchat_token,
        "phone_number": "5527998247116",
        "namespace": "d7f072ee_d569_4f4c_866f_d9eeaf8c28c8"
    },
    "phone_number": "5527997029537",
    "category": "UTILITY",
    "account_number": "5527998247116",
    "open_ticket": True
}

# Envia a requisição
try:
    response = requests.post(url, json=body, headers=headers)
    response.raise_for_status()
    print(response.json())  # Mostra a resposta da API
except requests.exceptions.RequestException as e:
    print(f"Erro ao enviar mensagem: {e}")




