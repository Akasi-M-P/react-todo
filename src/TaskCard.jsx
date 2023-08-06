/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function TaskCard({ task }) {
  return (
    <div className="task_Cards">
      <Card style={{ width: "18rem" }} className="card_Row">
        <Card.Body>
          <Card.Text>{task}</Card.Text>
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
    </div>
  );
}

export default TaskCard;
