# Buscar Mensagens por Data

Esta rota permite buscar mensagens a partir de uma data específica.

## Endpoint

```
GET https://api-v2.monitchat.com/api/v1/chat/message/fromDate
```

## Autenticação

Requer token Bearer no header:
```
Authorization: Bearer {seu_token}
```

## Descrição

Retorna todas as mensagens a partir de uma data específica, permitindo filtrar mensagens por período.

## Parâmetros do Body

::: details Parâmetros disponíveis
- **fromDate** - Data inicial para busca (formato: YYYY-MM-DD)
- **toDate** - Data final para busca (formato: YYYY-MM-DD)
- **take** - Quantidade de registros por página
- **skip** - Quantidade de registros para pular
- **phone_number** - Número do telefone (opcional)
:::

## Exemplos

::: code-group

```ts [buscarPorData.ts]
const url = new URL("https://api-v2.monitchat.com/api/v1/chat/message/fromDate");

const headers = {
  "Authorization": "Bearer seu_token_aqui",
  "Content-Type": "application/json",
  "Accept": "application/json",
};

const body = {
  fromDate: "2024-01-01",
  toDate: "2024-12-31",
  take: "50",
  skip: "0",
  phone_number: "5527999999999"
};

fetch(url, {
  method: "GET",
  headers: headers,
  body: JSON.stringify(body),
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

```php [buscarPorData.php]
<?php

$client = new \GuzzleHttp\Client();

$response = $client->get("https://api-v2.monitchat.com/api/v1/chat/message/fromDate", [
    'headers' => [
        "Authorization" => "Bearer seu_token_aqui",
        "Content-Type" => "application/json",
        "Accept" => "application/json",
    ],
    'json' => [
        "fromDate" => "2024-01-01",
        "toDate" => "2024-12-31",
        "take" => "50",
        "skip" => "0",
        "phone_number" => "5527999999999"
    ],
]);

$body = $response->getBody();
print_r(json_decode((string) $body));
```

:::

## Observações

::: tip Dica
Use este endpoint quando precisar:
- Fazer backup de mensagens de um período
- Gerar relatórios de comunicação
- Analisar histórico de conversas
- Sincronizar mensagens entre sistemas
:::
