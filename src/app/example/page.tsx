"use client"
import React, { useRef, useState } from 'react'
import JoditEditor from 'jodit-react'
import HTMLReactParser from 'html-react-parser/lib/index'
import { list } from 'postcss'

const example = () => {
    const [content,setContent]=useState("")
    const config = {
    buttons: [,
        'bold',
        'strikethrough',
        'underline',
        'italic', '|',
        'ul',
        'ol', '|',
        'fontsize',
        'paragraph', '|',
        'link', '|',
        'align', 'undo', 'redo', '|',
        'fullsize',
        'subscript',
        'superscript'
    ],
    }
    const ref=useRef(null);
  return (
    <>
 
    <div>
        <JoditEditor value={content} 
        ref={ref}
        config={config}
        onChange={newContent=>{setContent(newContent)}}/>
    </div>
    <p>Hello</p>
    <p>{HTMLReactParser(content)}</p>
    </>
  )
}

export default example