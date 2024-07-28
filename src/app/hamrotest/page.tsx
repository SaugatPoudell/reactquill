"use client"
import React, { useRef, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import HTMLReactParser from 'html-react-parser/lib/index';




const hamrotest = () => {
  const [value, setValue] = useState('');

  return (
    <>
  <div className='bg-zinc-200 h-auto w-3/5'>


  <ReactQuill theme="snow" value={value} onChange={setValue} />
  </div>
  <p>
    {HTMLReactParser(value)}
    {value}
    </p>
  </>
  );
}

export default hamrotest