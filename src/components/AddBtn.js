import React from 'react';
import {Button} from "react-bootstrap";

const AddBtn = ({handleShow}) => (
  <Button variant="primary" onClick={handleShow}>
    +Add Comment
  </Button>
);

export default AddBtn;