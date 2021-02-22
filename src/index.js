import * as React from "react";
import { render } from "react-dom";
import { Frame } from "framer";
import "./styles.css";

const numPoints = 15;
const r = 120;
const size = 20;
const duration = 5;
const backgroundColors = ["#F05", "#85F", "#0CF", "	#32CD32", "#F05"];
const degs = [0, 180, 360];

const arrPoints = Array.from({ length: numPoints }, (_, i) => i);

const circleCoords = () => {
  let coords = [];
  for (let i = 0; i < 360; i++) {
    const rad = (i * Math.PI) / 180;
    coords.push([Math.cos(rad) * r, Math.sin(rad) * r]);
  }
  return coords;
};

const convert = (ratio, copy = circleCoords()) =>
  copy.concat(copy.splice(0, ratio * 360));

const Square = ({ i }) => {
  const coordsOrdered = convert(i / numPoints);
  const x = coordsOrdered.map((set) => set[0]);
  const y = coordsOrdered.map((set) => set[1]);

  return (
    <Frame
      animate={{
        background: backgroundColors,
        rotate: degs,
        x: x,
        y: y,
        borderRadius: ["0%", "40%", "50%", "40%", "0%"]
      }}
      transition={{
        duration: duration,
        loop: Infinity,
        repeatType: "mirror",
        ease: "linear",
        type: "spring"
      }}
      size={size}
      center
      radius={"50%"}
    />
  );
};

function MyComponent() {
  return (
    <Frame width={"100%"} height={"100%"} background={"black"}>
      {arrPoints.map((square) => (
        <Square i={square} />
      ))}
    </Frame>
  );
}

const rootElement = document.getElementById("root");
render(<MyComponent />, rootElement);
