import { render,screen } from "@testing-library/react"
import {test,expect} from "vitest"
import App from "./App"
import One from "./Components/One"


test("Checking APP Default Text",()=>{
    render(<App/>)
    const headingText=screen.getByText(/Vite \+ React/i)
    expect(headingText).toBeInTheDocument()
})

test("Test#01",()=>{
    render(<One/>)
    expect(screen.getByText("Sample Text")).toBeInTheDocument()
})

test("Test#02",()=>{
    render(<One/>)
    expect(screen.getByTestId("name")).toBeInTheDocument()
})