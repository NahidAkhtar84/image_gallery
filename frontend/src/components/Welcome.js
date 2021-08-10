import React from 'react';
import { Alert, Button } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Alert variant="success">
      <Alert.Heading>Welcome</Alert.Heading>
      <p>
        This is an application what can retrieve images from unsplash and show
        it to you based on your search result.
      </p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button
          variant="outline-success"
          href="https://unsplash.com/"
          target="_blank"
        >
          Leaarn More...
        </Button>
      </div>
    </Alert>
  );
};

export default Welcome;
