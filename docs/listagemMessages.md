# Listagem das mensagens 💬

Busca as mensagens do contato pelo número do telefone.

```ts
const url = new URL("https://api-v2.monitchat.com/api/v1/chat");

let phone_number = "552798999999";

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

let body = {
  take: "10",
  skip: "0",
  token: "token",
};

fetch(`${url}/${phone_number}/messages`, {
  method: "GET",
  headers: headers,
  body: body,
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```
