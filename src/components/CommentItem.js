import React from 'react';

const CommentItem = ({comment}) => {
debugger
  return (
    <li className="list-group-item">
      <div>Title: <span className={'font-weight-bold'}>{comment.title}</span></div>
      Email: <span className={'primary'}>{comment.email}</span>
      <div>Message: {comment.body}</div>
      <button type="button" className="btn btn-danger">Delete</button>
    </li>
  )
}

export default CommentItem;