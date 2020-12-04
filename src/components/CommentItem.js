import React from 'react';

const CommentItem = ({comment}) => {

  return (
    <li className="list-group-item">
      <div>Title: <span className={'font-weight-bold'}>{comment.name}</span></div>
      Email: <span className={'primary'}>{comment.email}</span>
      <div>Message: {comment.body}</div>
      <button type="button" className="btn btn-danger">Delete</button>
    </li>
  )
}

export default CommentItem;