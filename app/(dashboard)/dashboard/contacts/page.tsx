import { getContacts } from "@/actions/contact/get-contacts";
import { ContactList } from "@/features/admin/contacts/components/contact-list";
import React from "react";

const ContactsPage = async () => {
  const data = await getContacts();
  return <ContactList data={data!.contacts!} />;
};

export default ContactsPage;
