# Enviando mensagens com Media

```ts
const url = new URL("https://api-v2.monitchat.com/api/v1/media/send");

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

let body = {
  token: "945d8aaf9-f412-aac3-eea2-1365987456",
  message: "imagem de teste",
  phone_number: "5527999998888",
  type: "image",
  name: "Ricardo",
  file_name: "manual.pdf",
  url: "",
};

fetch(url, {
  method: "POST",
  headers: headers,
  body: body,
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```
