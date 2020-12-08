import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import AddBtn from "./AddBtn";

const AddCommentModalForm = (props) => {
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    if(title === '' || email === '' || message === ''){
      alert('All fields must be filled up')
    } else {
      console.log(title, email, message)
      setShowModal(false)
    }
  };

  const handleShow = () => setShowModal(!showModal);

  return (
    <div>
      <AddBtn handleShow={handleShow}/>
      <Modal show={showModal} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Person Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={'row'}>
            <div className={'input-field'}>
              <input type="text" name={'title'} value={title} onChange={e => setTitle(e.target.value)}/>
              <label htmlFor="title" className={'active'}>Title</label>
            </div>
          </div>
          <div className={'row'}>
            <div className={'input-field'}>
              <input type="email" name={'email'} value={email} onChange={e => setEmail(e.target.value)}/>
              <label htmlFor="email" className={'active'}>Email</label>
            </div>
          </div>
          <div className={'row'}>
            <div className={'input-field'}>
              <input type="text" name={'message'} value={message} onChange={e => setMessage(e.target.value)}/>
              <label htmlFor="message" className={'active'}>Message</label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddCommentModalForm;