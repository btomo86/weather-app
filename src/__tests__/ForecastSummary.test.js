import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../components/ForecastSummary";

describe("ForecastSummary", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={1525392000000}
        temperature="mockTemperature"
        description="mockDescription"
        icon="781"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct props", () => {
    const { getByTestId } = render(
      <ForecastSummary
        key={1525392000000}
        date={1525392000000}
        temperature="mockTemperature"
        description="mockDescription"
        icon="781"
      />
    );

    expect(getByTestId("date-id")).toHaveClass("date");
    expect(getByTestId("temperature-id")).toHaveClass("temperature");
    expect(getByTestId("description-id")).toHaveClass("description");
    expect(getByTestId("icon-id")).toBeTruthy();
  });
});
