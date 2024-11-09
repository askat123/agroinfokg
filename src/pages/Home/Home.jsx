import React from "react";
import "./style.scss";
import green from "../../assets/растения.jpg";
import green2 from "../../assets/семена.jpg";
import green3 from "../../assets/удобрения.jpg";

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <div className="overlay">
          <h1>Добро пожаловать в AgroInfo</h1>
          <p>Всё о сельском хозяйстве, агротехнологиях и растениях</p>
          <button className="hero-button">Узнать больше</button>
        </div>
      </header>

      <section className="categories">
        <h2>Популярные категории</h2>
        <div className="grid">
          <div className="card">
            <img src={green} alt="" />
            <h3>Растения</h3>
            <p>Каталог растений для всех климатических зон.</p>
          </div>
          <div className="card">
            <img src={green3} alt="" />
            <h3>Удобрения</h3>
            <p>Советы по выбору органических и минеральных удобрений.</p>
          </div>
          <div className="card">
            <img src={green2} alt="" />

            <h3>Семена</h3>
            <p>Качественные семена для успешного урожая.</p>
          </div>
        </div>
      </section>

      <section className="news">
        <h2>Последние новости</h2>
        <div className="grid">
          <div className="news-item">
            <h4>Современные методы органического земледелия</h4>
            <p>Тренды, которые изменяют сельское хозяйство...</p>
          </div>
          <div className="news-item">
            <h4>Как выбрать подходящее удобрение?</h4>
            <p>Профессиональные советы для фермеров...</p>
          </div>
          <div className="news-item">
            <h4>Обзор новых технологий в сельском хозяйстве</h4>
            <p>Новые разработки, которые упрощают агротехнику...</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Контакты</h2>
        <p>Свяжитесь с нами для получения профессиональной консультации.</p>
        <button className="contact-button">Связаться</button>
      </section>
    </div>
  );
}

export default Home;
