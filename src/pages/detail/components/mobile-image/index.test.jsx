import { describe, expect, it } from "vitest"
import { render, screen } from "@/utils";
import { MobileImage } from ".";

const imgUrl = "https://www.amazing-product.com/cdn/image.jpg"
const model = "iphone13"

describe("Mobile image test",()=>{
    render(<MobileImage imgUrl={imgUrl} model={model} />)

    it('should show all image attributes correctly', () => {
        const image = screen.getByRole("img")

        expect(image).toHaveAttribute("src",imgUrl)
        expect(image).toHaveAttribute("alt", model)
    });
})