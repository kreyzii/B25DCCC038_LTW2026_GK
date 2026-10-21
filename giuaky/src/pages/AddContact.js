import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GROUPS } from "../data";

const AddContact = ({ onAdd }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", email: "", group: "Bạn bè" });
  const [error, setError] = useState("");
  const { name, phone, email, group } = form;

  const handleChange = (e) => {
    const { name: field, value } = e.target;
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      group,
    };

    if (!data.name || !data.phone || !data.email || !data.group) {
      setError("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    onAdd(data);
    navigate("/contacts", { replace: true });
  };

  return (
    <div>
      <h1>Thêm mới</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Họ tên</label>{" "}
          <input id="name" name="name" value={name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="phone">Số điện thoại</label>{" "}
          <input id="phone" name="phone" value={phone} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>{" "}
          <input id="email" name="email" value={email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="group">Nhóm</label>{" "}
          <select id="group" name="group" value={group} onChange={handleChange}>
            {GROUPS.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <button type="submit">Thêm</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default AddContact;