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
     
            <input type="date" className="form-control"></input>
            <br />
            <input type="time" className="form-control" placeholder="time"></input>
        
    </>
  );
}

export default InputTask;
