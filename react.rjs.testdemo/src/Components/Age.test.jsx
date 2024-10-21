import { render } from "@testing-library/react";
import Age from "./Age";
import { describe, expect, it } from "vitest";

describe("Test du composant Age", () => {
  it("Age without props", () => {
    const ageComponent = render(<Age />);
    expect(ageComponent.getByTestId("age_label").textContent).toContain("Votre age: 18");
  });

  it("Age with specific props", () => {
    const ageComponent = render(<Age age={25}/>);
    expect(ageComponent.getByTestId("age_label").textContent).toContain("Votre age: 25");
  });
});