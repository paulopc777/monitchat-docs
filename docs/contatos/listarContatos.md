# Listar contatos no Monitchat

```ts
// parâmetro opcional : myContacts=true
const url = new URL(
  "https://api-v2.monitchat.com/api/v1/contact?myContacts=false"
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
