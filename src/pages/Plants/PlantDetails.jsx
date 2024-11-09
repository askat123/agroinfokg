import React from "react";
import "./style.scss";

const PlantDetails = ({ plant, onClose }) => {
  return (
    <div className="plant-details-overlay">
      <div className="plant-details">
        <h2>{plant.name}</h2>
        <img src={plant.image} alt={plant.name} className="image" />
        <p>{plant.description}</p>
        <h3>Советы по выращиванию</h3>
        <p>{plant.growing_tips}</p>
        <h3>Советы по сбору урожая</h3>
        <p>{plant.harvest_tips}</p>
        <h3>Уход</h3>
        <p>{plant.care_tips}</p>
        <button onClick={onClose} className="button">
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default PlantDetails;
