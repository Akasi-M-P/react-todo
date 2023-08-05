/* eslint-disable no-undef */
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function InputTask() {
 
  return (
    <>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Enter Task
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Select Date
        </InputGroup.Text>
        <input type="date" className="form-control"></input>
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Select Time
        </InputGroup.Text>
        <input type="time" className="form-control"></input>
      </InputGroup>
    </>
  );
}

export default InputTask;
