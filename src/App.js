import "bootstrap/dist/css/bootstrap.min.css";
import image45 from "./images/poke-logo.png";
import "./App.css";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container className="image-decor">
      <Row>
        <Col>
          <img src={image45} />
        </Col>
      </Row>

      <Row>
        <Col>
          <h1>@pokemoncardsripstcglive</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <h1 className="text-bottom">Rip N Ship Live Everyday!</h1>
        </Col>
      </Row>

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
    </Container>
  );
}

export default App;
