import { Provider } from "react-redux"
import Demo from "./Components/UI/Demo"
import Navbar from "./Components/UI/Navbar"
import { Store } from "./Components/Redux/Store"

function App() {

  return (
    <>
    <Provider store={Store}>
      <Navbar/>
      <Demo/>
    </Provider>
      
    </>
  )
}

export default App
