import React, { useState } from 'react'
import { Input, Button } from 'antd'
import 'antd/dist/antd.css'

export default function App() {
  const [comments, setComments] = useState([])
  let [content, setContent] = useState()

  const addComment = () => {
    setComments([...comments, content])
    setContent()
  }
  const delComment = (index) => {
    comments.splice(index, 1)
    setComments([...comments])
  }

  return (
    <div style={{ width: 600 }}>
      <ul>
        {comments.map((comment, idx) => {
          return (
            <li key={idx}>
              {comment}
              <Button type="danger" onClick={() => {delComment(idx)}}>删除评论</Button>
            </li>
          )
        })}
      </ul>
      <Input.TextArea
        value={content}
        rows={4}
        placeholder='maxLength is 6'
        maxLength={6}
        onChange={e => {
          setContent(e.target.value)
        }}
      />
      <Button type='primary' onClick={addComment}>
        添加评论
      </Button>
    </div>
  )
}
