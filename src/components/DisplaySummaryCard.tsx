import React from "react";
import Card from "react-bootstrap/Card";
const DisplaySummaryCard: React.FC<{}> = () => {
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Dates Found - Would be Dynamic</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  </Card>
  );
};

export default DisplaySummaryCard;