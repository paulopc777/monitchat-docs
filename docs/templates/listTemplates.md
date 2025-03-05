# Listando Templates

```ts
const url = new URL("https://api-v2.monitchat.com/api/v1/whatsapp-template");

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

let body = {
  token: "token",
};

fetch(url, {
  method: "GET",
  headers: headers,
  body: body,
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```
