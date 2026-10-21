const BUILD_TAG = "hb-9472";
/* eslint-disable import/first */
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ContactList from "./pages/ContactList";
import AddContact from "./pages/AddContact";
import ContactDetail from "./pages/ContactDetail";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("/data/contacts.json", { signal: controller.signal })
      .then(({ data }) => setContacts(data))
      .catch(() => setError("Không tải được dữ liệu"))
      .finally(() => setLoading(false));
  }, []);

  const addContact = (data) => {
    const newId = Math.max(0, ...contacts.map(({ id }) => id)) + 1;
    setContacts([...contacts, { id: newId, ...data, favorite: false }]);
  };

  const deleteContact = (deleteId) => {
    setContacts(contacts.filter(({ id }) => id !== deleteId));
  };

  const toggleFavorite = (toggleId) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === toggleId
          ? { ...contact, favorite: !contact.favorite }
          : contact
      )
    );
  };

  return (
    <div data-build={BUILD_TAG}>
      <Routes>
        <Route path="/" element={<Layout loading={loading} error={error} />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <ContactList
                contacts={contacts}
                onDelete={deleteContact}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route path="contacts/new" element={<AddContact onAdd={addContact} />} />
          <Route path="contacts/:id" element={<ContactDetail contacts={contacts} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;