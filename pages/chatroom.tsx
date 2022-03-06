import { useEffect, useState, useLayoutEffect} from 'react'
import io from 'socket.io-client'
import config from '../config'
let socket : any


const ChatRoom = (props : any) => {


const [messages, setmessages] = useState([null])
const [name, setname] = useState("")
const [message, setmessage] = useState("")



  useEffect( () => {
      socket = io(`${config.chatApi}/`)
      let msgArray =  props.messages.split(";")
      setmessages(msgArray)

  }, [])

useEffect(()=>{
socket.on("chat", (msg : any)=> {
    let mess = [...messages, msg]
setmessages(mess)
})}, [messages])

  function sendMessage(){
      let msg = name + " " + ":" + " " + message + ";"
     
        socket.emit("chat", msg)
        setmessage("")
        setname("")
      
      
  }


return <div>
    <div>{messages.map((m : any)=> {
        return <p key={m+new Date()}>{m}</p>
    })}</div>
    <form>
        <input type="text" value={name} onChange={(e)=> setname(e.target.value)}></input>
        <input type="text" value={message} onChange={(e)=> setmessage(e.target.value)}></input>
        <button type='button' onClick={sendMessage}>Send</button>
    </form>
</div>

  }

  export default ChatRoom

  export async function getServerSideProps(){

        const res = await fetch(`${config.chatApi}/getmessages`)
        const response = await res.text()

        return {
            props : {
                messages : response
            }
        }
  }