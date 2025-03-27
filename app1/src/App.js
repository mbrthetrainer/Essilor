import logo from './logo.svg';
import './App.css';
import Greet from './Components/FunctionalComponents/Greet';
import Display from './Components/FunctionalComponents/Display';
import Sample from './Components/ClassComponents/Sample';
import Product from './Components/Props/Product';
import Employee from './Components/Props/Employee';
import StateDemo1 from './Components/State/StateDemo1';
import StateDemo2 from './Components/State/StateDemo2';

function App() {
  return (
   <div>
       {/* <h1>Welcome Guest</h1>
       <h2>This is Sample Text</h2>
       <Greet/>
       <Display></Display>
       <Sample/> */}
       {/* <Product id="9801" name="Product-1"></Product>
       <Product id="9802" name="Product-2"></Product>
       <Product id="9803" name="Product-3"></Product>
       <hr/>
       <Employee id="1" name="Employee-1"></Employee>
       <Employee id="2" name="Employee-2"></Employee> */}
       {/* <StateDemo1></StateDemo1> */}
       <StateDemo2></StateDemo2>
   </div>
  );
}

export default App;
