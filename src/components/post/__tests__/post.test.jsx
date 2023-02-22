import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Post from "../Post";
import makeRequest from "../../../utils/makeRequest";
import { mockData } from "../../../mocks/blogPosts";
jest.mock("./../../../utils/makeRequest");


describe("Blog Posts", () => {
  it("should show loading text when data is still loading", async () => {
    makeRequest.mockResolvedValue(mockData);
    render(<Post />);
    expect(screen.getByText("Loading...")).toBeTruthy();
    await waitFor(() => {
      expect(
        screen.getByText(
          "The future of abstract art and the culture is a bright one"
        )
      ).toBeTruthy();
    });
  });
  it("should show the blog posts when the data is coming from the backend", async () => {
    makeRequest.mockResolvedValue(mockData);
    render(<Post />);
    await waitFor(() => {
      expect(screen.getAllByTestId("postscards")).toHaveLength(6);
    });
  });
  it("should show error when there is error in data fetch", async () => {
    makeRequest.mockRejectedValue({ message: "Error!!!" });
    render(<Post />);
    await waitFor(() => {
      expect(screen.getAllByText("Error!!!")).toBeTruthy();
    });
  });
});
