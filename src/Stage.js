import React from 'react'
import Store from './STORE'


function Stage (){

  const stagePeople = Store.participants.filter((person)=> person.onStage === true);

  return (
    <div className="Stage">


    {stagePeople.map((person) => 
      
        <div key ={person.id}> 
          <img src = {person.avatar} alt="chat icon"/>
            <p>{person.name}</p>
      </div>
)}
    </div>
  )
}


export default Stage;