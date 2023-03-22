import React,{useEffect, useRef} from 'react';
import Message from './Message';
const Chat = () => {
    const scroll = useRef()
  return (
  <>
  <main className='flex flex-col p-[10px]'>
  <Message/>
  </main>
  {/*Send*/}
  <span ref={scroll}></span>
  </>
    
  )
}

export default Chat