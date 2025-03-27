import './App.css'
import ComponentA from './Components/contextAPI/ComponentA'
import { UserProvider } from './Components/contextAPI/UserContext'
import ErrorHandler from './Components/ErrorHandler'
import Demo from './Components/HOC/Demo'
import ProductsDashboard from './Components/ProductsDashboard'

function App() {

  return (
    <>
    {/* <ErrorHandler>
        <ProductsDashboard id={123} name='Samsung S23' price={67000} category='Electronics'></ProductsDashboard>
    </ErrorHandler>
    <ErrorHandler>
        <ProductsDashboard id={124} name='Samsung A67' price={55000} category='Electronics'></ProductsDashboard>
    </ErrorHandler>  
    <ErrorHandler>
       <ProductsDashboard id={125} name='Swift DZire' price={670000} category='Automobiles'></ProductsDashboard>
    </ErrorHandler> */}

    <UserProvider value={{userid:'admin567'}}>
        <ComponentA/>
    </UserProvider>

    <Demo/>
    
    </>
  )
}

export default App
