import type { Component } from "solid-js";

import image from "./assets/image.png";
import imageDark from "./assets/image-dark.png";
import chibiEruma from "./assets/chibi-eruma.png";
import chibiModochi from "./assets/chibi-modochi.png";
import chibiNon from "./assets/chibi-non.png";
import chibiPonta from "./assets/chibi-ponta.png";
import chibiSeichi from "./assets/chibi-seichi.png";
import chibiSora from "./assets/chibi-sora.png";
import imageRough1 from "./assets/demo1.png";
import imageRough2 from "./assets/demo2.png";

const App: Component = () => {
  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        padding: "1.5rem",
        "max-width": "1080px",
        margin: "0 auto",
        gap: "1.5rem",
        "user-select": "none",
      }}
    >
      <img
        src={image}
        style={{
          "min-width": 0,
          flex: 1,
          "border-radius": "24px",
          "background-color": "white",
          "box-shadow":
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        }}
      />
      <img
        src={imageDark}
        style={{
          "min-width": 0,
          flex: 1,
          "border-radius": "24px",
          "background-color": "rgb(0 0 0 / 0.9)",
          "box-shadow":
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        }}
      />
      <div
        style={{
          display: "grid",
          "grid-template-columns": "repeat(2, 1fr)",
          gap: "1rem",
        }}
      >
        {[
          chibiEruma,
          chibiModochi,
          chibiNon,
          chibiPonta,
          chibiSeichi,
          chibiSora,
        ].map((src) => (
          <img
            src={src}
            style={{
              "min-width": 0,
              width: "100%",
              "border-radius": "24px",
              "background-color": "white",
              "box-shadow":
                "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            }}
          />
        ))}
      </div>
      <img
        src={imageRough1}
        style={{
          "min-width": 0,
          flex: 1,
          "border-radius": "24px",
          "background-color": "white",
          "box-shadow":
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        }}
      />
      <img
        src={imageRough2}
        style={{
          "min-width": 0,
          flex: 1,
          "border-radius": "24px",
          "background-color": "white",
          "box-shadow":
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        }}
      />
    </div>
  );
};

export default App;
