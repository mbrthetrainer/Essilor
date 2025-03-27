import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Add from './Components/Add'
import Edit from './Components/Edit'
import Delete from './Components/Delete'

function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path='' element={<Dashboard/>}></Route>
            <Route path='add' element={<Add/>}></Route>
            <Route path='edit/:id' element={<Edit/>}></Route>
            <Route path='delete/:id' element={<Delete/>}></Route>
          </Routes>          
      </Router>
    </>
  )
}

export default App
