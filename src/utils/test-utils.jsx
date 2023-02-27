import { render, screen, within } from "@testing-library/react";
import { generatePath, MemoryRouter, Route, Routes } from "react-router-dom";
import { CartProvider, QueryProvider } from "@/context";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";

const customRender = (ui, options) =>
	render(ui, { wrapper: () => (
    <QueryProvider>
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
    </QueryProvider>
	), ...options });

const user = userEvent.setup();

export {
  customRender as render,
  screen,
  user,
  within,
  rest
};
