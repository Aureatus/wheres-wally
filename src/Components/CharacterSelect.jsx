import { useContext } from "react";
import "../styles/CharacterSelect.css";
import { characterCoordinateContext } from "../App";
import WallyCard from "./WallyCard";
import OdlawCard from "./OdlawCard";
import WizardCard from "./WizardCard";

const CharacterSelect = ({
  mouseClickLocation,
  boxWidth,
  boxHeight,
  wallyProfile,
  odlawProfile,
  wizardProfile,
  charactersFound,
  setCharactersFound,
  setTargetingBoxPresent,
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
      <WallyCard
        checkIfCharacterAtMouseCoords={checkIfCharacterAtMouseCoords}
        charactersFound={charactersFound}
        setCharactersFound={setCharactersFound}
        setTargetingBoxPresent={setTargetingBoxPresent}
        wallyProfile={wallyProfile}
      />
      <OdlawCard
        checkIfCharacterAtMouseCoords={checkIfCharacterAtMouseCoords}
        charactersFound={charactersFound}
        setCharactersFound={setCharactersFound}
        setTargetingBoxPresent={setTargetingBoxPresent}
        odlawProfile={odlawProfile}
      />
      <WizardCard
        checkIfCharacterAtMouseCoords={checkIfCharacterAtMouseCoords}
        charactersFound={charactersFound}
        setCharactersFound={setCharactersFound}
        setTargetingBoxPresent={setTargetingBoxPresent}
        wizardProfile={wizardProfile}
      />
    </div>
  );
};

export default CharacterSelect;
