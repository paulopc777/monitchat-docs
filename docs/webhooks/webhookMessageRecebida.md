# Payload de Mensagem Recebida

Dentro do payload de mensagem recebida, você encontrará as seguintes informações:

- `id` : O ID único da mensagem recebida.
- `message` - O conteúdo da mensagem recebida.
- `started_by` - Indica quem iniciou a conversa (pode ser nulo se a conversa foi iniciada pelo contato).
- `conversation_id` - O ID da conversa à qual a mensagem pertence.
- `contact_id` - O ID do contato que enviou a mensagem.
- `phone_number` - O número de telefone associado à mensagem recebida.
- `timestamp` - A data e hora em que a mensagem foi recebida.
- `url` - Caso a mensagem contenha mídia, o link para acesso.
- `message_type` - O tipo da mensagem (por exemplo, "chat", "image", "video", "audio").
- `tags` - Uma lista de tags associadas à conversa recebida.
- `working_time` - Indica se a mensagem foi recebida dentro do horário de atendimento configurado.
- `auto_reply` - Indica se a mensagem está configurada como resposta automática.
- `account_number` - O número de telefone associado à conta que recebeu a mensagem.

```json
{
  "message": "Olá, gostaria de saber mais sobre os seus serviços.",
  "id": "1234567890",
  "started_by": null,
  "extra_field_values": [
    {
      "extra_input_id": 1,
      "value": ""
    },
    {
      "extra_input_id": 1,
      "value": ""
    },
    {
      "extra_input_id": 1,
      "value": ""
    }
  ],
  "erp_ticket_id": null,
  "conversation_id": 1,
  "contact_id": 1,
  "start_conversation_window_date": "2026-01-01 00:00:00",
  "tags": [],
  "phone_number": "552799999999",
  "confirmation_message": 0,
  "auto_reply": 0,
  "url": "",
  "facebook_messenger": 0,
  "telegram": null,
  "instagram": 0,
  "content": null,
  "media_key": "",
  "file_name": null,
  "message_type": "chat",
  "mime_type": null,
  "account_number": "552799999999",
  "timestamp": "2026-01-01 00:00:00",
  "created_at": "2026-01-01T00:00:00.000000Z",
  "event": "message_received",
  "company_id": 1,
  "working_time": true,
  "referer": ""
}
```
