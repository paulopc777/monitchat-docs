# Evento de ticket criado

Sempre que um novo ticket for criado voce recebera o seguinte evento.

```ts
export interface Ticket {
  user_id: any;
  avatar: string;
  user: string;
  owner_id: any;
  company_id: number;
  id: number;
  conversation_id: number;
  created_at: string;
  contact_id: number;
  title: string;
  incident: string;
  contact: Contact;
  client_name: string;
  start_date: string;
  ticket_number: string;
  source: any;
  current_progress: string;
  current_status: number;
  department_id: any;
  ticket_category_id: any;
  category: string;
  department: string;
  status: string;
}

export interface Contact {
  name: string;
  email: string;
  phone_number: string;
  avatar: string;
}
```
