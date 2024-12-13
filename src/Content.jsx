import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetIndex: (21 % 10) + 1,
      isImageHidden: false,
    };
  }

  getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  toggleColor = (element) => {
    const randomBgColor = this.getRandomColor();
    const randomTextColor = this.getRandomColor();
    element.style.backgroundColor = randomBgColor;
    element.style.color = randomTextColor;
  };

  handleElementClick = (e) => {
    this.toggleColor(e.target);
  };

  render() {
    return (
      <div>
        <p id="target-element" onClick={this.handleElementClick}>
          Дата народження: 6 березня 2005 року. Місце народження: Скадовськ,
          Україна.
        </p>
        <p>
          Освіта: Школа №1, м. Скадовськ. Університет: КПІ, спеціальність - 126.
        </p>
        <h3>Моє хобі</h3>
        <ul>
          <li>Комп'ютерні ігри</li>
          <li>Рибалка</li>
          <li>Подорожі</li>
        </ul>
        <h3>Улюблені книги/фільми</h3>
        <ol>
          <li>"Ерагон", Крістофер Паоліні</li>
          <li>"Дедпул і Росомаха"</li>
          <li>"Трансформери: Початок"</li>
        </ol>
        <h3>Місто, що мені сподобалося</h3>
        <p>
          Мені дуже сподобався Гамбург. місто Гамбург — несуверенне
          місто-держава і одночасно федеральна земля Німеччини.
        </p>
      </div>
    );
  }
}

export default Content;
