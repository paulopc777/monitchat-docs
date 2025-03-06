# Criar cliente no Monitchat

<!-- Falta so dados para serem enviados  -->

```ts
const url = new URL("https://api-v2.monitchat.com/api/v1/client");

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

fetch(url, {
  method: "POST",
  headers: headers,
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```
