export interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  viewed: boolean;
  createdAt: Date;
}

export type ContactRespone = {
  contacts: Contact[] | null;
  success?: boolean;
  error?: boolean;
};

export interface ContactNotificationPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  to: string;
}
