# Evento de mensagem atualizada

O vento a para mensagem atualizada e : **MessageUpdated**

```ts
interface Event {
  data: Data;
  companyId: string;
}

interface Data {
  id: number;
  message: string;
  message_type: number;
  conversation_id: number;
  deleted_at: any;
  created_at: string;
  updated_at: string;
  phone_number: string;
  email: any;
  sender: number;
  account_number: string;
  mime_type: any;
  src: any;
  created_by: number;
  updated_by: number;
  ticket_id: number;
  company_id: number;
  read: number;
  message_id: string;
  sent: number;
  status: number;
  timestamp: string;
  campaing_id: any;
  last_message_replied_by_assistant: number;
  ignored_by_assistant: number;
  message_replied: number;
  sent_by_bot: number;
  user_name: string;
  sent_out_working_time: number;
  message_token: string;
  send_at: any;
  quoted_message_id: any;
  message_channel_id: number;
  from: any;
  author: any;
  group_message: number;
  message_from_call: number;
  answer_time: any;
  answered_user: any;
  deleted: any;
  deleted_by: any;
  file_name: any;
  user_id: number;
  reply_to_whatsapp_message_id: any;
  ticket_verified: number;
  confirmation_message: number;
  whatsapp_official_message: number;
  whatsapp_official_billable: number;
  media_key: any;
  template_id: any;
  is_template_message: number;
  charged_message: number;
  starts_conversation_window: number;
  facebook_messenger: number;
  instagram: number;
  telegram: number;
  facebook_page_id: any;
  instagram_comment: number;
  reply_confirmation: any;
  facebook_comment: any;
  file_size: any;
  mv_id: any;
  buttons: any;
  source: string;
  sent_at: any;
  open_ticket: any;
  survey_id: any;
  latitude: any;
  longitude: any;
  cloud_message: any;
  reaction: any;
  origin_conversation_type: string;
  origin_pricing_type: string;
  confirmation_message_id: any;
  confirmed_message_id: any;
  datasigh_confirmation_link: any;
  confirmation_feedback: any;
  telegram_callback_id: any;
  conversation: Conversation;
  company: Company;
  account: Account;
}

interface Conversation {
  id: number;
  contact: Contact;
  activeTicket: ActiveTicket;
}

interface Contact {
  id: number;
}

interface ActiveTicket {
  id: number;
  user_id: number;
}

interface Company {
  id: number;
}

interface Account {
  id: number;
  phone_number: string;
}
```
