import React, {useState, Fragment} from 'react'
import StudentCard from './StudentCard'

    const students = [{name:"Alexis", id: 1, pets:true }, {name:"Claudia", id:2, pets:true}, {name:"Emiliano", id:3, pets:false}, {name:"Diego", id:4, pets:true}, {name:"Eduardo", id:5, pets: true}, {name:"Eduardo Sesma", id:6}, {name:"Max", id:7}, {name:"Fernanda", id:8}, {name:"Arturo", id:9}, {name:"Karla", id:10}]

export default function ListConditional({loading}) {

    const [studentArray, setStudentArray] = useState(students)

    const [show, setShow] = useState(true)

    const deleteStudent = (studentId) => {
        const filteredStudent = studentArray.filter((student,index) => {
            return student.id  !== studentId
        })

        setStudentArray(filteredStudent)
      
    }

    const toggleShow = () => {
        setShow(!show)
    }

  return (
    <div>
        <h1>Students List</h1>

        <button onClick={toggleShow}>{show? <span>Hide</span> : <span>Show</span>}</button>

        
        {show &&
        studentArray.map((studentObj, index) => {
            return <StudentCard  key={studentObj.id} student={studentObj} clickDelete={deleteStudent}/>
        })}

    </div>
  )
}
