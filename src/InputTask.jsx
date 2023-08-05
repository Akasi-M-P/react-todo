/* eslint-disable no-undef */
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function InputTask() {
 
  return (
    <>
      <br />
      <InputGroup className="input mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Task</InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <InputGroup className="input mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Date</InputGroup.Text>
        <input type="date" className="form-control"></input>
      </InputGroup>
      <br />
      <InputGroup className="input mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Time</InputGroup.Text>
        <input type="time" className="form-control"></input>
      </InputGroup>
    </>
  );
}

export default InputTask;
