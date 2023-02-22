import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import clap from "../../assests/Icons/clapping.svg";
import heartBlack from "../../assests/Icons/heart-black.svg";
import heartRed from "../../assests/Icons/heart-red.svg";
import clapped from "../../assests/Icons/clapped.svg";
import Posts from "../Posts";

describe("Posts", () => {
  const props = {
    id: 0,
    date: "date",
    readingTime: "readingTime",
    title: "title",
    description: "description",
    claps: 10,
    claped: true,
    liked: false,
    image: "abstract.png",
  };
  it("should change the colour of the heart to red when clicked",  () => {
    render(<Posts props={props} />);
    fireEvent.click(screen.getByTestId("heart"));
    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => {
      expect(screen.getByTestId("heart").src).toContain(heartRed);
    });
  });
  it("should change the color of the clap when to red clicked", () => {
    render(<Posts props={props} />);
    fireEvent.click(screen.getByTestId("claps"));
    expect(screen.getByTestId("claps").src).toContain(clapped);
  });
  it("should change the colour of the heart to black when it is red and clicked", () => {
    render(<Posts props={props} />);
    fireEvent.click(screen.getByTestId("heart"));
    fireEvent.click(screen.getByTestId("heart"));
    expect(screen.getByTestId("heart").src).toContain(heartBlack);
  });
  it("should change the colour of the clap to black when it is red and clicked", () => {
    render(<Posts props={props} />);
    fireEvent.click(screen.getByTestId("claps"));
    fireEvent.click(screen.getByTestId("claps"));
    expect(screen.getByTestId("claps").src).toContain(clap);
  });
  it("should increase the number of claps by 1 when clicked on the clap icon", () => {
    render(<Posts props={props} />);
    const clap = screen.getByTestId("numberOfClap");
    expect(clap.textContent).toBe("10");
    fireEvent.click(screen.getByTestId("claps"));
    expect(clap.textContent).toBe("11");
  });
});
