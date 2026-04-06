# Criar Usuário

Esta rota permite criar um novo usuário no sistema.

## Endpoint

```
POST https://api-v2.monitchat.com/api/v1/user
```

## Autenticação

Requer token Bearer no header:
```
Authorization: Bearer {seu_token}
```

## Parâmetros do Body

::: details Parâmetros disponíveis
Os parâmetros devem ser enviados no corpo da requisição
:::

## Exemplos

::: code-group

```ts [criarUsuario.ts]
const url = new URL("https://api-v2.monitchat.com/api/v1/user");

const headers = {
  "Authorization": "Bearer seu_token_aqui",
  "Content-Type": "application/json",
  "Accept": "application/json",
};

const body = {
  // Adicione os parâmetros necessários aqui
};

fetch(url, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(body),
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

```php [criarUsuario.php]
<?php

$client = new \GuzzleHttp\Client();

$response = $client->post("https://api-v2.monitchat.com/api/v1/user", [
    'headers' => [
        "Authorization" => "Bearer seu_token_aqui",
        "Content-Type" => "application/json",
        "Accept" => "application/json",
    ],
    'json' => [
        // Adicione os parâmetros necessários aqui
    ],
]);

$body = $response->getBody();
print_r(json_decode((string) $body));
```

:::
