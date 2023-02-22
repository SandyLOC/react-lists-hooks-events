import React, {Fragment} from 'react'

export default function StudentCard(props) {

    const {student, clickDelete} = props

    
  return (
    <Fragment>
        <li>{student.name}</li>
        <p>{student.id}</p>
        {student.pets && <p>Has a pet!!!</p>}

        {!student.pets && <p>Needs to adopt!!</p>}
        
        <button onClick={()=> clickDelete(student.id)}>Delete</button> 
    </Fragment>
  )
}
