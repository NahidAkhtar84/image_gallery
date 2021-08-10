import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image.urls.small} />
      <Card.Body>
        <Card.Title>{props.image.title.toUpperCase()}</Card.Title>
        <Card.Text>
          {props.image.description || props.image.alt_description}
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => props.deleteImage(props.image.id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};
export default ImageCard;
