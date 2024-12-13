import React, { useState } from "react";

function Image() {
  const [isHidden, setIsHidden] = useState(false);
  const [width, setWidth] = useState(300);

  const handleAdd = () => {
    setIsHidden(false);
  };

  const handleIncrease = () => {
    setWidth((prevWidth) => prevWidth + 20);
  };

  const handleDecrease = () => {
    setWidth((prevWidth) => (prevWidth > 50 ? prevWidth - 20 : prevWidth));
  };

  const handleRemove = () => {
    setIsHidden(true);
  };

  return (
    <div>
      {!isHidden && (
        <a href="https://www.hamburg.de/" target="_blank" rel="noreferrer">
          <img
            src="https://tripmydream.cc/travelhub/travel/block_gallery/10/6682/gallery_big_106682.jpg"
            alt="Гамбург"
            style={{ width: `${width}px`, height: "auto" }}
          />
        </a>
      )}
      <div className="buttons">
        <button onClick={handleAdd}>Додати зображення</button>
        <button onClick={handleIncrease}>Збільшити</button>
        <button onClick={handleDecrease}>Зменшити</button>
        <button onClick={handleRemove}>Видалити зображення</button>
      </div>
    </div>
  );
}

export default Image;
