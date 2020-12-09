import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import AddBtn from "./AddBtn";
import {connect} from 'react-redux';
import {addComment} from '../redux/actions/commentActions'

const AddCommentModalForm = ({addComment}) => {
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [body, setCommentBody] = useState('')
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    if (title === '' || email === '' || body === '') {
      alert('All fields must be filled up')
    } else {
      debugger
      const newComment = {
        title,
        email,
        body
      }
      addComment(newComment)
      alert('Comment added!')

      setTitle('')
      setEmail('')
      setCommentBody('')
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
              <input
                type="text"
                name={'title'}
                value={title} onChange={e => setTitle(e.target.value)}
                placeholder={'Write title of the comment'}/>
            </div>
          </div>
          <div className={'row'}>
            <div className={'input-field'}>
              <input
                type="email"
                name={'email'}
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={'Write your Email'}/>
            </div>
          </div>
          <div className={'row'}>
            <div className={'input-field'}>
              <input
                type="text"
                name={'message'}
                value={body}
                onChange={e => setCommentBody(e.target.value)}
                placeholder={'Write text of the comment'}/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default connect(null, {addComment})(AddCommentModalForm);