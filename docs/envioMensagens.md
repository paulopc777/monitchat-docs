# Enviando Mensagens 📫

Essa pagina demostra como voce pode enviar mensagens pela API do Monitchat

## Utilizando Chave de Acesso

Uma das maneiras para envira mensagens e com **Chave de Acesso** que pode ser obtida em [Parametros](https://new.monitchat.com/parameters)

## Enviando mensagens de texto

::: details

- **Token** sera sua **Chave de Acesso**
- **phone_number** o numero que recebera a mensagen
- **account_number** o numero que enviara a mensagem
- **message** a mensagem que sera enviada
  :::

::: code-group

```ts [index.ts]
const url = new URL("https://api-v2.monitchat.com/api/v1/message");

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

let body = {
  token: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  message: "Ola como voce esta ?",
  phone_number: "55279899999",
  account_number: "552798999999",
};

fetch(url, {
  method: "POST",
  headers: headers,
  body: body,
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

```php [index.php]

  $client = new \GuzzleHttp\Client();
  $response = $client->post("https://api-v2.monitchat.com/api/v1/message", [
      'headers' => [
              "Content-Type" => "application/json",
              "Accept" => "application/json",
          ],
      'json' => [
              "token" => "sit",
              "message" => "eligendi",
              "phone_number" => "quos",
              "account_number" => "provident",
              "open_ticket" => "1",
          ],
  ]);
  $body = $response->getBody();
  print_r(json_decode((string) $body));

```

:::

## Enviando Tampletes

Templates sao mensagens definidas exemplo :

> Ola {1} como posso ajudar ?

**{1}** Sera um parametro que sera substituido por um texto personalizado

```ts
const url = new URL("https://api-v2.monitchat.com/api/v1/template/send");

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

let body = {
  token: "945d8aaf9-f412-aac3-eea2-1365987456",
  template: {
    template: {
      category: "UTILITY",
      components: [
        {
          parameters: [{ type: "text", text: "Ricardo" }],
          type: "body",
          format: null,
        },
        { parameters: [], type: "buttons", format: null },
      ],
      name: "pesquisa_satisfacao",
      data: {},
      message: "",
    },
    token: "<token>",
    phone_number: "5527999863591",
  },
  phone_number: "5527999998888",
  open_ticket: true,
};

fetch(url, {
  method: "POST",
  headers: headers,
  body: body,
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```
