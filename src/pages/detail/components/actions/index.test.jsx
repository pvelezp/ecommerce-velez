import { describe, expect, it } from "vitest"
import { render, screen, user } from "@/utils";
import { Actions } from ".";

const options = {
    colors: [{code: 1000, name: 'Black'},{code: 1001, name: 'White'}],
    storages:[{code: 2000, name: '32 GB'}]
}

describe("Actions tests",()=>{
    it('should show Actions all info texts correctly', async () => {
        render(
        <Actions
        productId="8u9d98j23j9"
         options={options} />
       )
        const addToCartButton = screen.getByRole("button",{name:/add to cart/i})
        expect(addToCartButton).toBeInTheDocument()
        expect(addToCartButton).toBeDisabled()
        const colorButtons = screen.getAllByRole("button")
        const [blackOption, whiteOption, storage32Option] =colorButtons
        expect(blackOption).toHaveTextContent(options.colors[0]["name"])
        expect(whiteOption).toHaveTextContent(options.colors[1]["name"])
        expect(storage32Option).toHaveTextContent(options.storages[0]["name"])

        await user.click(whiteOption)
        expect(addToCartButton).not.toBeDisabled()

        await user.click(addToCartButton)
        const loader = screen.getByTestId("loader")
        expect(loader).toBeInTheDocument()    

    });
})