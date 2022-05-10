import { useEffect, useRef, useState } from "react";

import wallyProfile from "../Assets/wally.jpg";

const GameCanvas = ({ drawWallyImage, wallyImage1 }) => {
  const canvasRef = useRef(null);

  const [mouseClickLocation, setMouseClickLocation] = useState(null);

  const getMouseCoordinates = (event) => {
    const mouseX = event.nativeEvent.clientX;
    const mouseY = event.nativeEvent.clientY;
    return { mouseX, mouseY };
  };

  const [targetingBoxPresent, setTargetingBoxPresent] = useState(false);
  const boxWidth = 50;
  const boxHeight = 50;

  const drawTargetBox = ({ mouseClickLocation }, context) => {
    const { mouseX, mouseY } = mouseClickLocation;

    context.strokeRect(
      mouseX - boxWidth / 2,
      mouseY - boxHeight / 2,
      boxWidth,
      boxHeight
    );
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    wallyImage1.onload = () => {
      drawWallyImage(context, wallyImage1);
    };
  }, [drawWallyImage, wallyImage1]);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    drawWallyImage(context, wallyImage1);
  });

  useEffect(() => {
    if (mouseClickLocation) {
      const context = canvasRef.current.getContext("2d");
      drawTargetBox({ mouseClickLocation }, context);
    }
  }, [mouseClickLocation]);

  if (!targetingBoxPresent) {
    return (
      <canvas
        ref={canvasRef}
        height={768}
        width={1024}
        onClick={(event) => {
          setMouseClickLocation(getMouseCoordinates(event));
          setTargetingBoxPresent(true);
        }}
      ></canvas>
    );
  } else {
    return (
      <>
        <canvas
          ref={canvasRef}
          height={768}
          width={1024}
          onClick={() => {
            setTargetingBoxPresent(false);
          }}
        ></canvas>
      </>
    );
  }
};

export default GameCanvas;
