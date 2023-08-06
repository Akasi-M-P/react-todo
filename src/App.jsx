
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import InputTask from './InputTask';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      <Container className="main_Container">
        <Row>
          <Col></Col>
          <Col lg={12}>
            {" "}
            <InputTask />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default App
