import React, { useState } from 'react';

const SendMailButton = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        type="button"
        className="absolute left-12 bottom-4 px-6 py-2 rounded-[30px] bg-white font-medium text-[20px]"
        onClick={openModal}
      >
        Gửi Mail ngay!
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Nhập Thông Tin Để Gửi Mail</h2>
            <form>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Nhập email" required />

              <label htmlFor="subject">Tiêu đề:</label>
              <input type="text" id="subject" name="subject" placeholder="Nhập tiêu đề" required />

              <label htmlFor="message">Nội dung:</label>
              <textarea id="message" name="message" placeholder="Nhập nội dung" required></textarea>

              <button type="submit">Gửi</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SendMailButton;
