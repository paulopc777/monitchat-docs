# Listar clientes no Monitchat

```ts
//   search: "rem",
//   filter: "officiis",
let params = {
  take: "30",
  skip: "0",
  order: "desc",
};
const url = new URL(
  `https://api-v2.monitchat.com/api/v1/client?${new URLSearchParams(params)}`
);

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

fetch(url, {
  method: "GET",
  headers: headers,
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```
