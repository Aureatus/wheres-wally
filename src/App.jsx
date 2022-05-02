import GameCanvas from "./Components/GameCanvas";

function App() {
  const drawWallyImage = (context, image1) => {
    context.drawImage(image1, 0, 0);
  };
  return (
    <div className="App">
      <header></header>
      <main>
        <GameCanvas drawWallyImage={drawWallyImage} />
      </main>
    </div>
  );
}

export default App;
