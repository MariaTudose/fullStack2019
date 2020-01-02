import React, {useState} from 'react'
const Blog = ({ blog, handleLike, handleRemove }) => {
  const [showDetails, setShowDetails] = useState(false)
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div style={blogStyle}>
      <div onClick={() => setShowDetails(!showDetails)}>
        {blog.title} {blog.author}
      </div>
      {showDetails && (
        <div>
          <a href={blog.url}>{blog.url}</a>
          <br/>
          {blog.likes} likes 
          <button onClick={() => handleLike(blog.id, blog.likes)}>like</button>
          <br/>
          added by {blog.user.name}
          <button onClick={() => handleRemove(blog.id)}>remove</button>
        </div>
      )}
    </div>
  )
}

export default Blog