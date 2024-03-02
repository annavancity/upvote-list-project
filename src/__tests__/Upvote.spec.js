import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Upvote from "../components/Upvote";

describe("Upvote Component Test", () => {
  test("toggles selection state on click", () => {
    // mock the onClick handler
    const handleClick = jest.fn();

    // render the Upvote component with isSelected false
    render(<Upvote isSelected={false} onClick={handleClick} />);

    // assume the Upvote component has a role of 'button'
    const upvoteButton = screen.getByText("↑");

    // click the upvote button
    fireEvent.click(upvoteButton);

    // expect the handleClick to have been called
    expect(handleClick).toHaveBeenCalled();
  });
});
