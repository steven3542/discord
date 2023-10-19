import "bootstrap/dist/css/bootstrap.min.css";

import image45 from "./images/poke-logo.png";
import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="image-decor">
      <img src={image45} />
      <h1>@pokemoncardsripstcglive</h1>
      <div className="text-bottom">Rip N Ship Live Everyday!</div>

      <div className="mb-2">
        <Button
          variant="primary"
          size="lg"
          href="https://discord.gg/cZA6MPVKYx"
          target="_blank"
        >
          DISCORD
        </Button>
      </div>
    </div>
  );
}

export default App;
