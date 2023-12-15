import React from 'react';

const Header = () => {
  const Seven = () => {
    var x = document.getElementById('7');
    if (x.classList.contains('seven-style')) {
      x.classList.remove('seven-style');
      x.classList.add('eight-style');
    } else {
      x.classList.remove('eight-style');
      x.classList.add('seven-style');
    }
  };

  const Eight = () => {
    var elements = document.querySelectorAll("p.eight");
    elements.forEach(function (element) {
      if (element.classList.contains('eight-style')) {
        element.classList.remove('eight-style');
        element.classList.add('seven-style');
      } else {
        element.classList.remove('seven-style');
        element.classList.add('eight-style');
      }
    });
  };

  return (
    <header>
      <h2>Якобець Катерина Радівна</h2>
      <p>Дата та місце народження: 27 травня 2004 року, Чернівці</p>
      <p>Освіта: Ліцей №1 м.Чернівці; НТУУ "КПІ", м.Київ;</p>
      <p>Хоббі:</p>
      <ul>
        <li>Танці</li>
        <li>Музика</li>
        <li onClick={Seven} id="7">Фотографування</li>
      </ul>
      <p onClick={Eight} className="eight">Улюблені фільми:</p>
      <ol>
        <li>"Круелла"</li>
        <li>"Шахрайки"</li>
        <li>"8 подруг Оушена"</li>
      </ol>
      <style>{`
        .seven-style {
          color: white;
          background-color: blue;
        }

        .eight-style {
          color: black;
          background-color: green;
        }
      `}</style>
    </header>
  );
};

export default Header;
