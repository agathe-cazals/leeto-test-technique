import React from "react";
import { render, screen } from "@testing-library/react";
import { ProgressBar, ProgressBarProps } from "../ProgressBar";

describe("Components - Common - ProgressBar", () => {
  it("display correctly label", () => {
    render(
      <ProgressBar
        label="Progression des dépenses"
        total={100}
        progress={50}
      />,
    );
    expect(screen.getByText("Progression des dépenses")).toBeInTheDocument();
  });

  it("display correctly percentage", () => {
    render(
      <ProgressBar
        label="Progression des dépenses"
        total={100}
        progress={50}
      />,
    );
    expect(screen.getByText("50%")).toBeInTheDocument();
  });

  it("display 0% if progress is 0", () => {
    render(<ProgressBar label="Aucune progression" total={100} progress={0} />);
    expect(screen.getByText("0%")).toBeInTheDocument();
  });

  it("display 100% if progress > total", () => {
    render(<ProgressBar label="Dépassement" total={100} progress={120} />);
    expect(screen.getByText("100%")).toBeInTheDocument();
  });

  it("display 0% if total === 0", () => {
    render(<ProgressBar label="Total nul" total={0} progress={50} />);
    expect(screen.getByText("0%")).toBeInTheDocument();
  });

  it("does not display anythig if there is no label", () => {
    render(<ProgressBar total={100} progress={30} />);
    expect(screen.queryByTestId("test-label")).not.toBeInTheDocument();
  });
});
