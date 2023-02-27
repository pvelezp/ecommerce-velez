import { Home } from "@/pages";
import { describe, expect, it, beforeEach } from "vitest"
import { render, screen, user, within, rest } from "@/utils";
import { BASE_URL } from "@/constants";

export const handlers = [rest.get(`${BASE_URL}/product`, (_, res, ctx) =>  res(ctx.status(200)))];

describe("Home integration tests", () => {
  beforeEach(() =>{
    render(<Home/>)
  });

  it("should show all cards and correct info on first card", async() => {
    const cards = await screen.findAllByTestId("card")
    const welcomeText = screen.getByText(/all products/i);
    expect(welcomeText).toBeInTheDocument();
    expect(cards.length).toBe(100)

    const firstCard = within(cards[0])
    const title = firstCard.getByText(/iconia/i)
    expect(title).toBeInTheDocument()
  });

  it("should searchbox filter the products list correctly", async() => {
    const searchBox = screen.getByPlaceholderText(/search/i)

    user.click(searchBox)
    await user.type(searchBox,"z6")
    const filteredCards = await screen.findAllByTestId("card")
    expect(filteredCards.length).toBe(4)
  });
});