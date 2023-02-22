import React, {useState, Fragment} from 'react'
import StudentCard from './StudentCard'

    const students = [{name:"Alexis", id: 1}, {name:"Claudia", id:2}, {name:"Emiliano", id:3}, {name:"Diego", id:4}, {name:"Eduardo", id:5}, {name:"Eduardo Sesma", id:6}, {name:"Max", id:7}, {name:"Fernanda", id:8}, {name:"Arturo", id:9}, {name:"Karla", id:10}]

export default function StudentsList({loading}) {

    const [studentArray, setStudentArray] = useState(students)

    const deleteStudent = (studentId) => {
        const filteredStudent = studentArray.filter((student,index) => {
            return student.id  !== studentId
        })
        setTimeout(() => {
            loading()
        }, 3000)
        setStudentArray(filteredStudent)
        
    }
  return (
    <div>
        <h1>Students List</h1>

        {studentArray.map((studentObj, index) => {
            return <StudentCard  key={studentObj.id} student={studentObj} clickDelete={deleteStudent}/>
        })}

    </div>
  )
}
