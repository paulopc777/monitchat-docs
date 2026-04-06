# Listar contatos no Monitchat

Nessa rota é possível listar os contatos do Monitchat, podendo ser filtrados por nome, email ou telefone.

_Parâmetros_

- **skip** - número de registros a serem pulados (paginção)
- **take** - número de registros a serem retornados (paginção)
- **search** - texto a ser buscado no nome, email ou telefone do contato

```ts
// parâmetro opcional : myContacts=true
const url = new URL(
  "https://api-v2.monitchat.com/api/v1/contact?skip=0&search=552798&take=10",
);

let headers = {
  "Content-Type": "application/json",
  authorization: "Bearer token",
};

fetch(url, {
  method: "GET",
  headers: headers,
  body: body,
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```
