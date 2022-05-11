const CharacterSelect = ({
  mouseClickLocation,
  boxWidth,
  boxHeight,
  wallyProfile,
  odlawProfile,
  wizardProfile,
}) => {
  return (
    <div
      className="char-select-div"
      style={{
        position: "absolute",
        left: mouseClickLocation.mouseX - boxWidth / 2 + 50,
        top: mouseClickLocation.mouseY - boxHeight / 2,
      }}
    >
      <div className="char-select-card" id="wally">
        <img src={wallyProfile} alt="Wally" height={26} width={26} />
        <p>Wally</p>
      </div>
      <div className="char-select-card" id="waldo">
        <img src={odlawProfile} alt="Odlaw" height={26} width={26} />
        <p>Wally</p>
      </div>
      <div className="char-select-card" id="wizard">
        <img src={wizardProfile} alt="Wizard" height={26} width={26} />
        <p>Wally</p>
      </div>
    </div>
  );
};

export default CharacterSelect;
