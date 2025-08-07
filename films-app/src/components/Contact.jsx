import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Liên hệ</h1>
      <p className="contact-info">Email: filmsapp@example.com</p>
      <p className="contact-info">Số điện thoại: +84 123 456 789</p>
      <p className="contact-info">Địa chỉ: 123 Đường Phim, TP. Hồ Chí Minh, Việt Nam</p>
      <Link to="/" className="back-button">Quay lại danh sách phim</Link>
    </div>
  );
};

export default Contact;