import ContactRow from "./ContactRow";

const ContactTable = ({ contacts, onDelete, onToggleFavorite }) => (
  <table>
    <thead>
      <tr>
        <th>Họ tên</th>
        <th>Điện thoại</th>
        <th>Email</th>
        <th>Nhóm</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody>
      {contacts.length === 0 ? (
        <tr>
          <td colSpan="5">Không có dữ liệu</td>
        </tr>
      ) : (
        contacts.map((contact) => (
          <ContactRow
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
            onToggleFavorite={onToggleFavorite}
          />
        ))
      )}
    </tbody>
  </table>
);

export default ContactTable;