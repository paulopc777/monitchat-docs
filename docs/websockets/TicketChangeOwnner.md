# Evento de mudança na usuário do ticket

```ts
export interface Event {
  ticket: Ticket;
  user_id: number;
  department_id: any;
  created_by: number;
}

export interface Ticket {
  id: number;
  company_id: number;
  user_name: string;
  conversation_id: number;
  user_id: number;
  user_avatar: string;
  previous_user: any;
}
```
