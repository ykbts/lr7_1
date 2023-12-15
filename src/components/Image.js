import React from 'react';

const Image = () => {
    const addImage = () => {
        var img = document.createElement("img");
        img.src="/Chernivtsi2.jpg";
        img.id = "city-image";
        var imageContainer = document.getElementById("image-container");
        imageContainer.appendChild(img);
      };
    
      const increaseImageSize = () => {
        var img = document.getElementById("city-image");
        img.style.width = (img.clientWidth * 2) + "px";
        img.style.height = (img.clientHeight * 2) + "px";
      };
    
      const decreaseImageSize = () => {
        var img = document.getElementById("city-image");
        img.style.width = (img.clientWidth / 2) + "px";
        img.style.height = (img.clientHeight / 2) + "px";
      };
    
      const deleteImage = () => {
        var img = document.getElementById("city-image");
        img.remove();
      };
    
  return (
    <div>
      <a href="https://blog.pokupon.ua/chernivtsi-shcho-tsikavoho-mozhna-podyvytysia-kudy-skhodyty-i-de-zupynytysia/#%D1%89%D0%BE%20%D0%BF%D0%BE%D0%B4%D0%B8%D0%B2%D0%B8%D1%82%D0%B8%D1%81%D1%8F%20%D0%B2%20%D0%BE%D0%BA%D0%BE%D0%BB%D0%B8%D1%86%D1%8F%D1%85" >
        <img src="/Chernivtsi.jpg" alt="Фото міста Чернівці" />
      </a>
      <button onClick={addImage}>Додати</button>
      <button onClick={increaseImageSize}>Збільшити</button>
      <button onClick={decreaseImageSize}>Зменшити</button>
      <button onClick={deleteImage}>Видалити</button>
      <div id="image-container"></div>
    </div>
    
  );
};

export default Image;
