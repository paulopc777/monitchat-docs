# Evento de Mudança no Status do ticket

```ts
export interface Event {
  ticket: Ticket;
  user: User;
  closedAutomatically: boolean;
  sendSurvey: boolean;
  reason: any;
}

export interface Ticket {
  id: number;
  company_id: number;
  conversation_id: number;
  current_progress: string;
  current_status: number;
  status: string;
}
```
