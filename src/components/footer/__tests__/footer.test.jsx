import React from "react";
import Footer from './../Footer';
import {render } from "@testing-library/react";

describe("Footer", () => {
    it("should render correctly", () => {
      const { asFragment } = render(<Footer />);
      expect(asFragment()).toMatchSnapshot();
    });
})