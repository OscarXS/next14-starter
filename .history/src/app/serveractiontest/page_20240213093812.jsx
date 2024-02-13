import { addPost } from '@/lib/actions'
import React from 'react'

const ServerActionTest = () => {
  return (
    <div>
        <form action={addPost}></form>
    </div>
  )
}

export default ServerActionTest