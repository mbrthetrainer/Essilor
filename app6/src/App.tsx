import { Provider } from "react-redux"
import Demo from "./Components/Demo"
import Store from "./Components/Store"

function App() {

  return (
    <>
      <Provider store={Store}>
        <Demo/>
      </Provider>
    </>
  )
}

export default App
