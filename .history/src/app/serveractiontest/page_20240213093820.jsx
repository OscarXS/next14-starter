import { addPost } from '@/lib/actions'
import React from 'react'

const ServerActionTest = () => {
  return (
    <div>
        <form action={addPost}>
            <input type="text" />
        </form>
    </div>
  )
}

export default ServerActionTest