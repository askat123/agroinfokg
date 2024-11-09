import React, { useEffect, useState } from "react";
import PlantDetails from "./PlantDetails";
import "./style.scss";

const PlantsCatalog = () => {
  const [catalog, setCatalog] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/61fe5b0d-f69d-4360-bf27-a1ae33099c18") // Замените на ваш URL Mocky
      .then((response) => response.json())
      .then((data) => setCatalog(data))
      .catch((error) => console.error("Ошибка загрузки каталога:", error));
  }, []);

  const handleDetailsClick = (plant) => {
    setSelectedPlant(plant); // Устанавливаем выбранное растение для детального просмотра
  };

  const handleCloseDetails = () => {
    setSelectedPlant(null); // Закрываем детальный вид
  };

  return (
    <div className="catalog">
      <h2>Каталог растений</h2>

      {catalog.map((category) => (
        <div key={category.category} className="category">
          <h3 className="section-title">{category.category}</h3>
          <div className="grid">
            {category.plants.map((plant) => (
              <div key={plant.id} className="card">
                <h4>{plant.name}</h4>
                <p>{plant.description.slice(0, 200) + "..."}</p>
                <img src={plant.image} alt={plant.name} className="image" />
                <button
                  onClick={() => handleDetailsClick(plant)}
                  className="button"
                >
                  Подробнее
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedPlant && (
        <PlantDetails plant={selectedPlant} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default PlantsCatalog;
