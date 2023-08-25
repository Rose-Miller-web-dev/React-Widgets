import ReactTest from "../react-test"
import {render , screen} from "@testing-library/react"


test('test', ()=>{
    render(<ReactTest/>)

    const title = screen.getByTestId("title")
    expect(title).toHaveTextContent("Tis is a React Test!")
} )