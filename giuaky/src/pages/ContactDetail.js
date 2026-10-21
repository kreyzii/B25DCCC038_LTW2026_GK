import { useParams, useNavigate } from "react-router-dom";

const ContactDetail = ({ contacts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contact = contacts.find((item) => item.id === Number(id));

  if (!contact) {
    return (
      <div>
        <p>Không tìm thấy liên hệ</p>
        <button onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    );
  }

  const { name, phone, email, group, favorite } = contact;

  return (
    <div>
      <h1>{name}</h1>
      <p>{`Họ tên: ${name}`}</p>
      <p>{`Số điện thoại: ${phone}`}</p>
      <p>{`Email: ${email}`}</p>
      <p>{`Nhóm: ${group}`}</p>
      <p>{`Yêu thích: ${favorite ? "Có" : "Không"}`}</p>
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
};

export default ContactDetail;