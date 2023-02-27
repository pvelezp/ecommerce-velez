import { describe, expect, it } from "vitest"
import { render, screen } from "@/utils";
import { Header } from ".";

describe("header tests", () => {
    beforeEach(()=>{
        render(<Header />) 
    })

    it('should show header text', () => {
        const title = screen.getByText(/velezcommerce/i)
        const homeBreadcrumbText = screen.getByText(/home/i)
        const detailBreadcrumbText = screen.getByText(/detail/i)
        const cartCount = screen.getByRole("heading",{name:/0/i})

        expect(title).toBeInTheDocument()
        expect(homeBreadcrumbText).toBeInTheDocument()
        expect(detailBreadcrumbText).toBeInTheDocument()
        expect(cartCount).toBeInTheDocument()

    });
    
    it('should home breadcrumb be highlighted by default', () => {
        const homeBreadcrumbText = screen.getByText(/home/i)
        expect(homeBreadcrumbText).toHaveStyle("color:#6ba051")
    });
})