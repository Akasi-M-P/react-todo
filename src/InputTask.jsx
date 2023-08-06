/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

function InputTask() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() !== "") {
      const newTask = {
        id: Date.now(),
        content: value,
      };
      setTasks([...tasks, newTask]);

      setValue("");
    }
  };

  return (
    <>
      <br />
      <Row>
        <Col></Col>
        <Col lg={6} className="input_Container">
          <form onSubmit={handleSubmit}>
            <InputGroup className="input mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Task
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </InputGroup>

            <InputGroup className="input mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Date
              </InputGroup.Text>
              <input type="date" className="form-control"></input>
            </InputGroup>

            <InputGroup className="input mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Time
              </InputGroup.Text>
              <input type="time" className="form-control"></input>
            </InputGroup>
            <Stack>
              <Button type="submit" className="submit_btn" variant="success">
                Add
              </Button>{" "}
            </Stack>
          </form>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        {tasks.map((task) => (
          <Col key={task.id} lg={3}>
            <Card style={{ width: "18rem" }} className="card_Row">
              <Card.Body>
                <Card.Text>{task.content}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Link>
                  <Button variant="outline-warning">Edit</Button>
                </Card.Link>
                <Card.Link>
                  <Button variant="outline-danger">Delete</Button>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default InputTask;
