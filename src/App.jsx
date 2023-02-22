import { useState } from 'react'
import './App.css'
import StudentsList from './components/StudentsList'
import Spinner from './components/Spinner'
import ListConditional from './components/ListConditional'
function App() {

    const [isLoading, setIsLoading] = useState(true)

    const changeLoading = (state) => {
        setIsLoading(false)
    }

     {/* if(isLoading){
        return (<div className="App">
       <StudentsList loading={changeLoading}/>
       </div>)
      } else {
        return <Spinner/>
      }*/}
    return(
    <>{isLoading ? (<div className="App">
      <ListConditional loading={changeLoading}/>
      </div>) : <Spinner/>}
    </>
    )
}

export default App
