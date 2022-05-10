import GameCanvas from "./Components/GameCanvas";
import wallyImage1 from "./Assets/wheres-wally-beach.jpg";

function App() {
  const drawWallyImage = (context, image1) => {
    context.drawImage(image1, 0, 0);
  };
  const wallyImage = new Image();
  wallyImage.src = wallyImage1;

  return (
    <div className="App">
      <header></header>
      <main>
        <GameCanvas drawWallyImage={drawWallyImage} wallyImage1={wallyImage} />
      </main>
    </div>
  );
}

export default App;
