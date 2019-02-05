import React from 'react'

import Store from './STORE'

function List(){
    const people = Store.participants;
    // const peopleStatus = people.map(data =>
    //     { name: {people.name}}
    //     )

    return (
        <div className="People-list">
    
        {people.map((person) => 
            <div key={person.id}> 
              <img src = {person.avatar} alt="chat icon"/>
              <p>{person.name}</p>
              <p>{(person.onStage) ? 'On stage' : 'Off stage'}</p>
          </div>
        )}
        </div>
      )
    }


export default List;