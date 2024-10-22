import { render } from "@testing-library/react";
import Age from "./Age";
import { describe } from 'vitest';
import { it } from 'vitest';
import { expect } from 'vitest';

describe(Age, () => {
  it("Age without props", () => {
    const { getByTestId } = render(<Age />);
    expect(getByTestId("age_label").textContent).toContain("18");
  });
});
