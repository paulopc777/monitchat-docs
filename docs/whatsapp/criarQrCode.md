# Criar QR Code WhatsApp

Esta rota permite gerar um QR Code para conectar uma instância do WhatsApp.

## Endpoint

```
POST https://api-v2.monitchat.com/api/v1/qrcode
```

## Autenticação

Requer token Bearer no header:
```
Authorization: Bearer {seu_token}
```

## Descrição

O QR Code é utilizado para conectar uma conta do WhatsApp ao Monitchat. Após gerar o QR Code, você deve escaneá-lo com o aplicativo WhatsApp para estabelecer a conexão.

## Parâmetros do Body

::: details Parâmetros disponíveis
Os parâmetros devem ser enviados no corpo da requisição
:::

## Exemplos

::: code-group

```ts [criarQrCode.ts]
const url = new URL("https://api-v2.monitchat.com/api/v1/qrcode");

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

```php [criarQrCode.php]
<?php

$client = new \GuzzleHttp\Client();

$response = $client->post("https://api-v2.monitchat.com/api/v1/qrcode", [
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

## Como usar

::: tip Passos para conectar
1. Faça a requisição para gerar o QR Code
2. Abra o WhatsApp no seu celular
3. Vá em **Configurações** > **Aparelhos conectados**
4. Toque em **Conectar um aparelho**
5. Escaneie o QR Code retornado pela API
:::
