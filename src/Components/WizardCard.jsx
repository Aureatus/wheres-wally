const WizardCard = ({
  checkIfCharacterAtMouseCoords,
  charactersFound,
  setCharactersFound,
  setTargetingBoxPresent,
  wizardProfile,
}) => {
  if (charactersFound.wizard) {
    return (
      <div
        className="char-select-card"
        id="wizard"
        style={{
          cursor: "not-allowed",
          filter: "grayscale(100%) blur(0.5px)",
          opacity: "50%",
        }}
      >
        <img src={wizardProfile} alt="Wizard" height={26} width={26} />
        <p>Wizard</p>
      </div>
    );
  } else {
    return (
      <div
        className="char-select-card"
        id="wizard"
        onClick={() => {
          if (checkIfCharacterAtMouseCoords("Wizard")) {
            setCharactersFound({ ...charactersFound, wizard: true });
            setTargetingBoxPresent(false);
          }
        }}
      >
        <img src={wizardProfile} alt="Wizard" height={26} width={26} />
        <p>Wizard</p>
      </div>
    );
  }
};

export default WizardCard;
