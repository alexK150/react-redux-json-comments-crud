import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import CommentItem from "./CommentItem";
import AddCommentModalForm from "./AddCommentModalForm";
import {getComments} from '../redux/actions/commentActions'

const Comments = ({comments: {comments, isLoading, current}, getComments}) => {

  useEffect(() => {
    getComments()
  }, [])

  if (isLoading || comments === null) {
    return <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  }

  return (
    <div>
      <h3>Comments</h3>
      <AddCommentModalForm />
      {!isLoading && comments.length === 0 ? (<p>There is no comments...</p>) :
        comments.map(c =>
          <ul key={c.id}>
            <CommentItem comment={c}/>
          </ul>)
      }
    </div>
  )
}

const mapStateToProps = state =>({
  comments: state.comments
})

export default connect(mapStateToProps, {getComments}) (Comments);