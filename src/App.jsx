
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import InputTask from './InputTask';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TaskCard from './TaskCard';

function App() {
 
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <InputTask />
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Col>
            <TaskCard />
          </Col>
          <Col>
            {" "}
            <TaskCard />
          </Col>
          <Col>
            {" "}
            <TaskCard />
          </Col>
          <Col>
            {" "}
            <TaskCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App