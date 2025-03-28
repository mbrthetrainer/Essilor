import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Greet from './Components/Greet';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('Test#01-Check Default Greet Message',()=>{
    render(<Greet/>)
    expect(screen.getByText("Hello User!")).toBeInTheDocument()
})

test('Test#02-Checking Name Prop',()=>{
  const name="John"
  render(<Greet name={name}/>)
  expect(screen.getByText(`Welcome,${name}`)).toBeInTheDocument()
})

test('Test#03-Checking Default Counter Value',()=>{  
  render(<Greet/>)
  expect(screen.getByText("Counter:0")).toBeInTheDocument()
})

test("Test#04-Checking Increment",()=>{
    render(<Greet/>)
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByText("Counter:1")).toBeInTheDocument()
})
