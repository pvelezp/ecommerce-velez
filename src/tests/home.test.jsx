import { Home } from "@/pages";
import { describe, expect, it } from "vitest"
import { render, screen } from "../../test-utils";

describe("Simple working test", () => {
  beforeEach(() =>{
    render(<Home/>)
  } );
  it("the title is visible", () => {
      screen.debug()
    const welcomeText = screen.getByText(/home/i);
    expect(welcomeText).toBeInTheDocument();
  });

});