// src/pages/Ads.jsx
import React, { useState } from "react";
import "./style.scss";

const Ads = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    contact: "",
    address: "",
    image: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsModalOpen(false);
  };

  return (
    <div className="ads-page">
      <h2>Объявления</h2>

      {/* Кнопка для открытия модального окна */}
      <button onClick={() => setIsModalOpen(true)} className="add-button">
        Добавить объявление
      </button>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Добавить объявление</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <input
                  type="text"
                  name="title"
                  placeholder="Название объявления"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-field">
                <textarea
                  name="description"
                  placeholder="Описание"
                  rows="4"
                  value={formData.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="form-field">
                <input
                  type="text"
                  name="price"
                  placeholder="Цена (в сомах)"
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-field">
                <input
                  type="text"
                  name="contact"
                  placeholder="Контактный номер"
                  value={formData.contact}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-field">
                <input
                  type="text"
                  name="address"
                  placeholder="Адрес"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-field">
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              <div className="buttons">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="close-button"
                >
                  Закрыть
                </button>
                <button type="submit" className="submit-button">
                  Добавить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="ads-grid">
        {[1, 2, 3].map((ad) => (
          <div key={ad} className="ad-card">
            <h3>Объявление {ad}</h3>
            <p>Описание объявления...</p>
            <p>Цена: 1000 сом</p>
            <p>Контакт: +996 123 456 789</p>
            <p>Адрес: Бишкек</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ads;
