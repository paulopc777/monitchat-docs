# Listar Tickets

Esta rota permite listar todos os tickets com filtros e paginação.

## Endpoint

```
GET https://api-v2.monitchat.com/api/v1/ticket
```

## Autenticação

Requer token Bearer no header:
```
Authorization: Bearer {seu_token}
```

## Parâmetros de Query

::: details Parâmetros disponíveis
- **take** - Quantidade de registros por página
- **skip** - Quantidade de registros para pular
- **order** - Campo para ordenação
- **orderDirection** - Direção da ordenação (asc/desc)
- **search** - Termo de busca
- **start** - Data inicial (filtro)
- **end** - Data final (filtro)
:::

## Exemplos

::: code-group

```ts [listarTickets.ts]
const params = {
  take: "30",
  skip: "0",
  order: "id",
  orderDirection: "desc",
  search: "",
  start: "2024-01-01",
  end: "2024-12-31"
};

const url = new URL(
  `https://api-v2.monitchat.com/api/v1/ticket?${new URLSearchParams(params)}`
);

const headers = {
  "Authorization": "Bearer seu_token_aqui",
  "Content-Type": "application/json",
  "Accept": "application/json",
};

fetch(url, {
  method: "GET",
  headers: headers,
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

```php [listarTickets.php]
<?php

$client = new \GuzzleHttp\Client();

$response = $client->get("https://api-v2.monitchat.com/api/v1/ticket", [
    'headers' => [
        "Authorization" => "Bearer seu_token_aqui",
        "Content-Type" => "application/json",
        "Accept" => "application/json",
    ],
    'query' => [
        "take" => "30",
        "skip" => "0",
        "order" => "id",
        "orderDirection" => "desc",
        "search" => "",
        "start" => "2024-01-01",
        "end" => "2024-12-31",
    ],
]);

$body = $response->getBody();
print_r(json_decode((string) $body));
```

:::
