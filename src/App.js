import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "./Header";
import Meme from "./Meme";
import memesData from "./memesData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          {/*  <Col>       {memesData.map((meme) => (
            <div className="map-memes">{meme.name}</div>
          ))}</Col> */}
          <Col>
            <Header />
            <Meme />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
