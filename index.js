import * as React from "react";
import { render } from "react-dom";
import { Frame } from "framer";
import "./styles.css";

const backgroundColors = ["#F05", "#85F", "#0CF", "	#32CD32", "#F05"];
const degs = [0, 180, 0];

const l = 70;
const size = 50;
const squares = [0, 1, 2, 3];
const coords = [
  [l, l],
  [l, -l],
  [-l, -l],
  [-l, l],
  [l, l]
];

const spinCoords = [
  [0, l],
  [l, 0],
  [0, -l],
  [-l, 0]
];

const convert = (i, copy = [...coords]) => copy.concat(copy.splice(0, i));

const Square = ({ i }) => {
  const [x, y] = convert(i);

  return (
    <Frame
      animate={{
        background: backgroundColors,
        rotate: degs,
        x: x,
        y: y,
        borderRadius: ["0%", "25%", "50%", "25%", "0%"],
        scale: [1, 0.5, 1]
      }}
      transition={{
        duration: 2,
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
      {squares.map((square) => (
        <Square i={square} />
      ))}
    </Frame>
  );
}

const rootElement = document.getElementById("root");
render(<MyComponent />, rootElement);
