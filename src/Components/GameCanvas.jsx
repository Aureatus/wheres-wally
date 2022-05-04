import { useEffect, useRef, useState } from "react";

const GameCanvas = ({ drawWallyImage, wallyImage }) => {
  const canvasRef = useRef(null);

  const [mouseClickLocation, setMouseClickLocation] = useState(null);

  const getMouseCoordinates = (event) => {
    const mouseX = event.nativeEvent.offsetX;
    const mouseY = event.nativeEvent.offsetY;
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
    wallyImage.onload = () => {
      drawWallyImage(context, wallyImage);
    };
  }, [drawWallyImage, wallyImage]);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    drawWallyImage(context, wallyImage);
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
        height={1136}
        width={640}
        onClick={(event) => {
          setMouseClickLocation(getMouseCoordinates(event));
          setTargetingBoxPresent(true);
        }}
      ></canvas>
    );
  } else {
    return (
      <>
        <div>a</div>
        <canvas
          ref={canvasRef}
          height={1136}
          width={640}
          onClick={() => {
            setTargetingBoxPresent(false);
          }}
        ></canvas>
      </>
    );
  }
};

export default GameCanvas;
