# Status do Numero de WhatsApp

```ts
const url = new URL("https://api-v2.monitchat.com/api/v1/social/whatsapp");

let headers = {
  "Content-Type": "application/json",
  authorization: "Beater token",
};

fetch(url, {
  method: "GET",
  headers: headers,
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```
