import { useContext } from "react";
import "../styles/CharacterSelect.css";
import { characterCoordinateContext } from "../App";
const CharacterSelect = ({
  mouseClickLocation,
  boxWidth,
  boxHeight,
  wallyProfile,
  odlawProfile,
  wizardProfile,
  charactersFound,
  setCharactersFound,
}) => {
  const characterCoordinates = useContext(characterCoordinateContext);

  const checkIfCharacterAtMouseCoords = (character) => {
    const objectKey = character + "Location";
    const selectedCharacterCoordinates = characterCoordinates[objectKey];
    let xCoordsCorrect = false;
    let yCoordsCorrect = false;

    if (
      mouseClickLocation.mouseX >= selectedCharacterCoordinates.x - 25 &&
      mouseClickLocation.mouseX <= selectedCharacterCoordinates.x + 25
    ) {
      xCoordsCorrect = true;
    }

    if (
      mouseClickLocation.mouseY >= selectedCharacterCoordinates.y - 25 &&
      mouseClickLocation.mouseY <= selectedCharacterCoordinates.y + 25
    ) {
      yCoordsCorrect = true;
    }

    if (xCoordsCorrect && yCoordsCorrect) {
      return true;
    } else return false;
  };

  return (
    <div
      className="char-select-div"
      style={{
        position: "absolute",
        left: mouseClickLocation.mouseX - boxWidth / 2 + 70,
        top: mouseClickLocation.mouseY - boxHeight / 2 - 50,
      }}
    >
      <div
        className="char-select-card"
        id="wally"
        onClick={() => {
          if (checkIfCharacterAtMouseCoords("Wally")) {
            setCharactersFound({ ...charactersFound, wally: true });
          }
        }}
      >
        <img src={wallyProfile} alt="Wally" height={26} width={26} />
        <p>Wally</p>
      </div>
      <div
        className="char-select-card"
        id="waldo"
        onClick={() => {
          if (checkIfCharacterAtMouseCoords("Odlaw")) {
            setCharactersFound({ ...charactersFound, odlaw: true });
          }
        }}
      >
        <img src={odlawProfile} alt="Odlaw" height={26} width={26} />
        <p>Odlaw</p>
      </div>
      <div
        className="char-select-card"
        id="wizard"
        onClick={() => {
          if (checkIfCharacterAtMouseCoords("Wizard")) {
            setCharactersFound({ ...charactersFound, wizard: true });
          }
        }}
      >
        <img src={wizardProfile} alt="Wizard" height={26} width={26} />
        <p>Wizard</p>
      </div>
    </div>
  );
};

export default CharacterSelect;
