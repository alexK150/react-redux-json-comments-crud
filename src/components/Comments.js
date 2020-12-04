import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Comments = (props) => {
  const [comments, setComments] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    getComments()
  }, [])

  const getComments = async () => {
    setLoading(true)
    await axios.get(`http://localhost:5000/comments`)
      .then(res => {
        const fetchedComments = res.data;
        setComments(fetchedComments);
      })

    setLoading(false)
  }

  if (isLoading) {
    return <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  }

  return (
    <div>
      <h3>Comments</h3>
      {!isLoading && comments.length === 0 ? (<p>There is no comments...</p>) :
        comments.map(c => <div key={c.id}>{c.name}</div>)
      }
    </div>
  )
}

export default Comments;