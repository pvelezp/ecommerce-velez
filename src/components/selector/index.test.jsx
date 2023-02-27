import { describe, expect, it, vi, beforeEach } from "vitest"
import { render, screen, within, user } from "@/utils";
import { Selector } from ".";

const options = [
   { name:"red",code:"1"},
   { name:"blue",code:"2"},
   { name:"green",code:"3"},
]

const label= "Colors"

describe("Selector tests",()=>{
    beforeEach(()=>{
        render(<Selector label={label} options={options} handleSelect={vi.fn()} />)
    })

    it('should show selector text', async() => {
        const labelText = screen.getByText(label)
        const firstOption = screen.getByText(/red/i)

        expect(firstOption).toBeInTheDocument()
        expect(labelText).toBeInTheDocument()
    });

    it('should no option be selected when select has more than 1 option', async() => {
        const optionCheck = screen.queryByTestId("check")
        
        expect(optionCheck).not.toBeInTheDocument()
    });

    it('should option have check icon if it is selected', async() => {
        const optionButtons = screen.getAllByRole("button")
        const secondOption =optionButtons[1]
        expect(secondOption).toHaveTextContent(/blue/i)
        await user.click(secondOption)
        const check = within(secondOption).getByTestId("check")
        expect(check).toBeInTheDocument()
    });

    it("should option be selected when there's one option", async() => {
        render(<Selector label={label} options={options.slice(0,1)} handleSelect={vi.fn()} />)
        const firstOptionCheck = screen.getByTestId("check")
        expect(firstOptionCheck).toBeInTheDocument()
    });
})