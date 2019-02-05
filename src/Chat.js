import React from 'react';
import Store from './STORE'

function Chat (){
  const { participants, chatEvents} = Store;

   return (
     <div className="chatBox">
     {chatEvents.map((event, index) => {
       let id = event.participantId;
       let name = participants.find((person) => person.id === id).name;
       let message = event.message
       let time = new Date(event.timestamp).toString()
        if(event.type === 'message'){
          return (
            <div className="chatEvent" key ={index}>
            <p className="name" >

              {name}: {message}
            </p>
         </div>
          )
       } else if (event.type === 'thumbs-up'){
         return (
          <div className="chatEvent" key ={index}>
          <p className="message">
            {time}
            {name} gave a thumbs-up
          </p>
       </div>
         )
       } else if (event.type === 'thumbs-down'){
        return (
          <div className="chatEvent" key ={index}>
          <p className="message">
          {time}
            {name} gave a thumbs-down
          </p>
       </div>
         )
       } else if (event.type === 'clap'){
        return (
          <div className="chatEvent" key ={index}>
          <p className="message">
          {time}
            {name} clapped
          </p>
       </div>
         )
       } else if (event.type === 'raise-hand'){
        return (
          <div className="chatEvent" key ={index}>
          <p className="message">
          {time}
            {name} raised their hand
          </p>
       </div>
         )
       } else if(event.type === 'clap'){
        return (
          <div className="chatEvent" key ={index}>
          <p className="message">
          {time}
            {name} clapped
          </p>
       </div>
         )
       } else if (event.type === 'join'){
        return (
          <div className="chatEvent" key ={index}>
          <p className="message">
          {time}
            {name} joined
          </p>
       </div>
         )
       } else if (event.type === 'join-stage'){
        return (
          <div className="chatEvent" key ={index}>
          <p className="message">
          {time}
            {name} joined the stage
          </p>
       </div>
         )
       } else if(event.type === 'leave-stage'){
        return (
          <div className="chatEvent" key ={index}>
          <p className="message">
          {time}
            {name} left the stage
          </p>
       </div>
         )
       }
      


       
     })}

      
      </div>
   )

}

export default Chat;


