/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function InputTask() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [lgShow, setLgShow] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() !== "") {
      const newTask = {
        id: Date.now(),
        content: value,
        date: date,
        time: time,
      };

      if (editingTask !== null) {
        const updatedTasks = tasks.map((task) =>
          task.id === editingTask.id ? { ...newTask, id: task.id } : task
        );
        setTasks(updatedTasks);
        setEditingTask(null);
      } else {
        setTasks([...tasks, newTask]);
      }
    }

    setValue("");
    setDate("");
    setTime("");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const deleteTask = parseInt(e.target.value);
    const newTasks = tasks.filter((task) => task.id !== deleteTask);
    setTasks(newTasks);
  };

  const handleEdit = (task) => {
    setLgShow(true);
    setValue(task.content);
    setDate(task.date);
    setTime(task.time);
    setEditingTask(task);
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
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              ></input>
            </InputGroup>

            <InputGroup className="input mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Time
              </InputGroup.Text>
              <input
                type="time"
                className="form-control"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              ></input>
            </InputGroup>
            <Stack>
              <Button
                type="submit"
                className="submit_btn"
                variant="outline-light"
              >
                Add
              </Button>{" "}
            </Stack>
          </form>
          {/* MODAL */}
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Edit Task
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  ></input>
                </InputGroup>

                <InputGroup className="input mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Time
                  </InputGroup.Text>
                  <input
                    type="time"
                    className="form-control"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  ></input>
                </InputGroup>
                <Stack>
                  <Button
                    type="submit"
                    className="submit_btn"
                    variant="success"
                    onClick={() => setLgShow(false)}
                  >
                    Update
                  </Button>{" "}
                </Stack>
              </form>
            </Modal.Body>
          </Modal>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        {tasks.map((task) => (
          <Col key={task.id} lg={3}>
            <Card style={{ width: "18rem" }} className="mx-auto card_Row">
              <Card.Body>
                <Card.Text>{task.content}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  {task.date}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  {task.time}
                </Card.Subtitle>
                <Card.Link>
                  <Button
                    variant="outline-warning"
                    onClick={() => handleEdit(task)}
                  >
                    Edit
                  </Button>
                </Card.Link>
                <Card.Link>
                  <Button
                    variant="outline-danger"
                    value={task.id}
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
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
