import { useContext } from "react";
import "../styles/CharacterSelect.css";
import { appContext } from "../App";

const CharacterSelect = ({
  mouseClickLocation,
  boxWidth,
  boxHeight,
  wallyProfile,
  odlawProfile,
  wizardProfile,
}) => {
  const app = useContext(appContext);

  return (
    <div
      className="char-select-div"
      style={{
        position: "absolute",
        left: mouseClickLocation.mouseX - boxWidth / 2 + 70,
        top: mouseClickLocation.mouseY - boxHeight / 2 - 50,
      }}
    >
      <div className="char-select-card" id="wally">
        <img src={wallyProfile} alt="Wally" height={26} width={26} />
        <p>Wally</p>
      </div>
      <div className="char-select-card" id="waldo">
        <img src={odlawProfile} alt="Odlaw" height={26} width={26} />
        <p>Odlaw</p>
      </div>
      <div className="char-select-card" id="wizard">
        <img src={wizardProfile} alt="Wizard" height={26} width={26} />
        <p>Wizard</p>
      </div>
    </div>
  );
};

export default CharacterSelect;
