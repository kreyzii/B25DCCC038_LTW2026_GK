import ContactTable from "../components/ContactTable";

const ContactList = ({ contacts, onDelete, onToggleFavorite }) => (
  <div>
    <h1>Danh sách</h1>
    <ContactTable
      contacts={contacts}
      onDelete={onDelete}
      onToggleFavorite={onToggleFavorite}
    />
  </div>
);

export default ContactList;