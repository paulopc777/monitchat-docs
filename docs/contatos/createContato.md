# Criar contato no Monitchat

```ts
const url = new URL("https://api-v2.monitchat.com/api/v1/contact");

//   search: "text",
//   filter: "text",
let params = {
  take: "30",
  skip: "0",
  order: "desc",
};

Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

let headers = {
  Authorization: "Bearer token",
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
