import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ContactDetail = ({ contacts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isCalling, setIsCalling] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [endedAfter, setEndedAfter] = useState(null);

  // Đếm giờ cuộc gọi; cleanup dừng hẳn bộ đếm khi kết thúc hoặc rời trang
  useEffect(() => {
    if (!isCalling) return;
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, [isCalling]);

  const handleCall = () => {
    setSeconds(0);
    setEndedAfter(null);
    setIsCalling(true);
  };

  const handleEnd = () => {
    setIsCalling(false);
    setEndedAfter(seconds);
  };

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

      {isCalling ? (
        <div>
          <p>{`Đang gọi... ${seconds} giây`}</p>
          <button onClick={handleEnd}>Kết thúc</button>
        </div>
      ) : (
        <div>
          {endedAfter !== null && <p>{`Cuộc gọi kết thúc sau ${endedAfter} giây`}</p>}
          <button onClick={handleCall}>Gọi</button>
        </div>
      )}

      <p>
        <button onClick={() => navigate(-1)}>Quay lại</button>
      </p>
    </div>
  );
};

export default ContactDetail;