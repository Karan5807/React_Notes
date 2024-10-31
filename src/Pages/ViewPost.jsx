import React, { useState } from 'react';

const ViewPost = () => {
  const [Notes,setNotes] = useState(()=>{
    const savedTask = window.localStorage.getItem('List');
    return savedTask ? JSON.parse(savedTask) : []
  })
  return (
    <div>ViewPost</div>
  )
}

export default ViewPost;