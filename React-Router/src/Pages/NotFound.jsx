import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h3>Sorry, Page Not Found</h3>
      <div>
      <Link to="/">Go Home</Link>
      </div>
    </div>
  )
}

export default NotFound
