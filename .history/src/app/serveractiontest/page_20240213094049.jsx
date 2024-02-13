import { addPost, deletePost } from '@/lib/actions'
import React from 'react'

const ServerActionTest = () => {
  return (
    <div>
        <form action={addPost}>
            <input type="text" name="title" placeholder="title" />
            <input type="text" name="desc" placeholder="desc" />
            <input type="text" name="slug" placeholder="slug" />
            <input type="text" name="userId" placeholder="userId" />
            <button>Create</button>
        </form>

        <form action={deletePost}>
            <input type="text" placeholder="postId" />
            <
        </form>
    </div>
  )
}

export default ServerActionTest