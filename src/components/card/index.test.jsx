import { describe, expect, it, vi } from "vitest"
import { render, screen } from "@/utils";
import { Card } from ".";

const item = {price:"5.00", imgUrl:"https://amazing-product.com", model:"13 pro max", brand:"iphone"}

describe("Card tests",()=>{
    render(<Card item={item} onHandleClick={vi.fn()} />)

    it('should show all info texts correctly', () => {
        const priceText = screen.getByText(`$${item.price}`)
        const modelText = screen.getByText(item.model)
        const brandText = screen.getByText(item.brand)
        const image = screen.getByRole("presentation")

        expect(priceText).toBeInTheDocument()
        expect(modelText).toBeInTheDocument()
        expect(brandText).toBeInTheDocument()
        expect(image).toHaveAttribute("src",item.imgUrl)
    });
})