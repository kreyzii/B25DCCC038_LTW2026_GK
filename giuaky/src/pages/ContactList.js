import { useState } from "react";
import FilterBar from "../components/FilterBar";
import ContactTable from "../components/ContactTable";

const ContactList = ({ contacts, onDelete, onToggleFavorite }) => {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("Tất cả");

  const handleQueryShift = (e) => setQuery(e.target.value);
  const handleGroupChange = (e) => setGroup(e.target.value);

  const keyword = query.trim().toLowerCase();
  const filtered = contacts.filter(
    ({ name, phone, group: contactGroup }) =>
      (group === "Tất cả" || contactGroup === group) &&
      (name.toLowerCase().includes(keyword) || phone.includes(keyword))
  );

  return (
    <div>
      <h1>Danh sách</h1>
      <FilterBar
        query={query}
        group={group}
        onQueryChange={handleQueryShift}
        onGroupChange={handleGroupChange}
      />
      <p>{`Tìm thấy ${filtered.length} liên hệ`}</p>
      <ContactTable
        contacts={filtered}
        onDelete={onDelete}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
};

export default ContactList;