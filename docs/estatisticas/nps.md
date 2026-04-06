# Pesquisa de Satisfação (NPS)

Esta rota permite consultar os dados da pesquisa de satisfação (Net Promoter Score).

## Endpoint

```
GET https://api-v2.monitchat.com/api/v1/statistic/nps
```

## Autenticação

Requer token Bearer no header:
```
Authorization: Bearer {seu_token}
```

## Descrição

O NPS (Net Promoter Score) é uma métrica utilizada para medir a satisfação e lealdade dos clientes. Esta rota retorna os dados estatísticos da pesquisa de satisfação.

## Exemplos

::: code-group

```ts [nps.ts]
const url = new URL("https://api-v2.monitchat.com/api/v1/statistic/nps");

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

```php [nps.php]
<?php

$client = new \GuzzleHttp\Client();

$response = $client->get("https://api-v2.monitchat.com/api/v1/statistic/nps", [
    'headers' => [
        "Authorization" => "Bearer seu_token_aqui",
        "Content-Type" => "application/json",
        "Accept" => "application/json",
    ],
]);

$body = $response->getBody();
print_r(json_decode((string) $body));
```

:::

## Sobre o NPS

::: tip O que é NPS?
O Net Promoter Score é calculado com base nas respostas dos clientes à pergunta: "Em uma escala de 0 a 10, o quanto você recomendaria nossa empresa/produto/serviço para um amigo ou colega?"

- **Promotores (9-10)**: Clientes entusiastas e leais
- **Neutros (7-8)**: Clientes satisfeitos mas não entusiasmados
- **Detratores (0-6)**: Clientes insatisfeitos que podem prejudicar a marca
:::
