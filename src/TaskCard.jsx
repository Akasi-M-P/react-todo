/* eslint-disable react/no-unescaped-entities */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function TaskCard() {
  return (
    <div className="task_Cards">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link>
            <Button variant="outline-warning">Warning</Button>
          </Card.Link>
          <Card.Link >
            <Button variant="outline-danger">Danger</Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TaskCard;
