import { addPost } from '@/lib/actions'
import React from 'react'

const ServerActionTest = () => {
  return (
    <div>
        <form action={addPost}>
            <input type="text" name="title" placeholder="title" />
            <input type="text" name="title" placeholder="title" />
            <input type="text" name="title" placeholder="title" />
            <input type="text" name="title" placeholder="title" />
        </form>
    </div>
  )
}

export default ServerActionTest