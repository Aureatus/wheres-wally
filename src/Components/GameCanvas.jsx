import { useEffect, useRef, useState, useContext } from "react";
import { characterCoordinateContext } from "../App";
import CharacterSelect from "./CharacterSelect";
import wallyProfile from "../Assets/wally.jpg";
import odlawProfile from "../Assets/Odlaw.jpg";
import wizardProfile from "../Assets/Wizard.jpeg";

const GameCanvas = ({
  drawWallyImage,
  wallyImage1,
  charactersFound,
  setCharactersFound,
}) => {
  const canvasRef = useRef(null);

  const [mouseClickLocation, setMouseClickLocation] = useState(null);
  const [targetingBoxPresent, setTargetingBoxPresent] = useState(false);

  const boxWidth = 50;
  const boxHeight = 50;
  const characterCoordinates = useContext(characterCoordinateContext);
  let characterMarkers = null;

  const generateCharacterMarkerElements = (charactersFound) => {
    // Filter out characters that have not been found
    let trueCharactersFound = Object.entries(charactersFound).filter(
      (e) => e[1] === true
    );
    // Return element for each character found, positioned on the characters head.
    const elementArray = trueCharactersFound.map((element) => {
      const objectKey = element[0] + "Location";
      return (
        <p
          key={element[0]}
          style={{
            position: "absolute",
            left: characterCoordinates[objectKey].x,
            top: characterCoordinates[objectKey].y,
            marginBlock: "0%",
          }}
        >
          &#x1F44D;
        </p>
      );
    });

    return elementArray;
  };

  characterMarkers = generateCharacterMarkerElements(charactersFound);

  const getMouseCoordinates = (event) => {
    const mouseX = event.nativeEvent.clientX;
    const mouseY = event.nativeEvent.clientY;
    return { mouseX, mouseY };
  };

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
      <>
        <div>{characterMarkers}</div>
        <canvas
          ref={canvasRef}
          height={1075}
          width={1434}
          onClick={(event) => {
            setMouseClickLocation(getMouseCoordinates(event));
            setTargetingBoxPresent(true);
          }}
        ></canvas>
      </>
    );
  } else {
    return (
      <>
        <CharacterSelect
          mouseClickLocation={mouseClickLocation}
          boxWidth={boxWidth}
          boxHeight={boxHeight}
          wallyProfile={wallyProfile}
          odlawProfile={odlawProfile}
          wizardProfile={wizardProfile}
          charactersFound={charactersFound}
          setCharactersFound={setCharactersFound}
          setTargetingBoxPresent={setTargetingBoxPresent}
        />
        <div>{characterMarkers}</div>
        <canvas
          ref={canvasRef}
          height={1075}
          width={1434}
          onClick={() => {
            setTargetingBoxPresent(false);
          }}
        ></canvas>
      </>
    );
  }
};

export default GameCanvas;
