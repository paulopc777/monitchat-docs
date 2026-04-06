# Atualizar contato no Monitchat

Nessa rota é possível atualizar um contato no Monitchat, associando-o a um cliente e a um canal de atendimento.

Payload de exemplo o payload é o mesmo da criação de contato, porém os campos são opcionais, ou seja, é possível enviar apenas os campos que deseja atualizar.

```ts
{
    "name": "Teste",
    "whatsapp_blocked": "",
    "email": "",
    "email_optional_1": "",
    "email_optional_2": "",
    "extra_field_1": "",
    "extra_field_2": "",
    "lid_number": "",
    "phone_number": "+55279888888",
    "city": "Vitória",
    "neighborhood": "",
    "code": "CEP",
    "address": "Rua Teste",
    "cpf": "",
    "avatar": "",
    "conversation_id": "",
    "tickets": [],
    "tags": [],
    "source": "",
    "cliente": "",
    "additional_info": "",
    "company_id": "",
    "client_id": "",
    "webhook_active": true,
    "created_at": "",
    "created_by": "",
    "last_ticket_created_at": "",
    "status": "",
    "send_campaing": true,
    "updated_at": "",
    "phone_number_optional1": "",
    "phone_number_optional2": "",
    "relations": [],
    "model_relations": [],
    "groups": []
}
```

```ts
const url = new URL(
  "https://api-v2.monitchat.com/api/v1/contact/{{id_do_contato}}",
);

let headers = {
  Authorization: "Bearer token",
  "Content-Type": "application/json",
  Accept: "application/json",
};

fetch(url, {
  method: "PUT",
  headers: headers,
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```
