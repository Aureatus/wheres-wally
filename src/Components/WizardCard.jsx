const WizardCard = ({
  checkIfCharacterAtMouseCoords,
  charactersFound,
  setCharactersFound,
  setTargetingBoxPresent,
  wizardProfile,
}) => {
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
};

export default WizardCard;
