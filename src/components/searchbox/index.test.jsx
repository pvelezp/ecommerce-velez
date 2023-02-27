import { beforeEach, describe, expect, it, vi} from "vitest"
import { render, screen, user } from "@/utils";
import { SearchBox } from ".";

describe("Input tests",()=>{
    beforeEach(()=>{
        render(<SearchBox onChange={vi.fn()} />)    
    })
    it('should exist the input element and search icon', () => {
        const input = screen.getByPlaceholderText(/search.../i)
        const searchIcon = screen.getByAltText(/search/i)

        expect(input).toBeInTheDocument()
        expect(searchIcon).toBeInTheDocument()
    });
    it('should delete icon appear when user has typed', async() => {
        const input = screen.getByPlaceholderText(/search.../i)
        await user.type(input,"iphone")
        const deleteIcon = screen.getByAltText(/delete/i)
        expect(deleteIcon).toBeInTheDocument()
    });


})