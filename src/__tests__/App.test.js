import { render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

test("displays a top-level heading with the text `Hi, I'm Ephraim`", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: /hi, i'm ephraim/i,
    level: 1,
  });
  expect(heading).toBeInTheDocument();
});

test("displays an image of myself with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/photo of ephraim/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", expect.stringContaining("profile"));
});

test("displays a second-level heading with text `About Me`", () => {
  render(<App />);
  const subHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(subHeading).toBeInTheDocument();
});

test("displays a paragraph with a short bio", () => {
  render(<App />);
  const paragraph = screen.getByText(/developer/i);
  expect(paragraph).toBeInTheDocument();
});

test("includes a link to GitHub and LinkedIn", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("github.com")
  );
  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("linkedin.com")
  );
});
