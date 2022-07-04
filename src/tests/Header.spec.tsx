import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Header } from "../components/Header";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

const { getByText } = render(
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

describe("Header component", () => {
  it("deve conter a logomarca no documento", () => {
    expect(getByText(/maganets/i)).toBeInTheDocument;
  });
});
