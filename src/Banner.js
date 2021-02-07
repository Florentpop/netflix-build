import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie title</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">Play</button>
        </div>
        <h1 className="banner__description">This is a test description</h1>
      </div>
      <button className="banner__buttonfade" />
    </header>
  );
}

export default Banner;
