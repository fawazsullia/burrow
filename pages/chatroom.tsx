import { useEffect, useState, useRef, Ref, MutableRefObject} from 'react'
import io from 'socket.io-client'
import config from '../config'
import styles from '../styles/Chatroom.module.css'
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
    msg = msg.replace(";", "")
    let mess = [...messages, msg]
setmessages(mess)
})}, [messages])

  function sendMessage(){
      if(name !== "" && message !== ""){
        let msg = name + " " + ":" + " " + message + ";"
     
        socket.emit("chat", msg)
        setmessage("")    
      }
      else {
          alert("A name and a message is required")
      }
            
      
  }


//   window.addEventListener("keydown", (e : any)=> {
//       if(e.code === "Enter"){
//           sendMessage()
//       }
//   })

return <div className={styles.container} >
    <h2>Chat Room</h2>
    <p>This is an anonymous chatroom I created for fun. By mindful of the language</p>
    <div className={styles.messageContainer}>{messages.map((m : any)=> {
        return <p key={m+new Date()} className={styles.message}>{m}</p>
    })}</div>
    <form className={styles.form}>
        <label>Name : </label>
        <input type="text" value={name} onChange={(e)=> setname(e.target.value)}></input><br /><br />
        <label>Message : </label>
        <input type="text" value={message} onChange={(e)=> setmessage(e.target.value)}></input><br /><br />
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