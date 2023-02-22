/* eslint-disable import/export */
import { render } from "@testing-library/react";
import { generatePath, MemoryRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./src/context/cart-context";
import "@testing-library/jest-dom";

const customRender = (ui, options) =>
	render(ui, { wrapper: () => (
		<CartProvider >
              <MemoryRouter
                {...(options?.path && {
                  initialEntries: [generatePath(options.path, options.params ?? {})],
                })}
              >
                {options?.path ? (
                  <Routes>
                    <Route path={options.path} element={ui} />
                  </Routes>
                ) : (
                  ui
                )}
              </MemoryRouter>
	  </CartProvider>	
	), ...options });


export * from "@testing-library/react";

export { default as userEvent } from "@testing-library/user-event";

// override render export

export { customRender as render };