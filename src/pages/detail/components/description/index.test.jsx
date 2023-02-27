import { describe, expect, it } from "vitest"
import { render, screen } from "@/utils";
import { Description } from ".";

const data = {
    price:"5.00",
    model:"13 pro max",
    brand:"iphone",
    cpu:"64gb",
    os:"iOs",
    displayResolution:"24",
    battery:"dsa",
    primaryCamera:"43e",
    dimentions:"32",
    weight:"12"
}

describe("Description tests",()=>{
    it('should show all info texts correctly', () => {
        render(<Description data={data} />)

        Object.keys(data).forEach(item => {
            const text = screen.getByText(data[item])
            expect(text).toBeInTheDocument()
        })
    });
})