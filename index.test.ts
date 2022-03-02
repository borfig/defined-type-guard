import { expect } from "chai";
import defined from ".";

describe("Sanity", () => {
  it("should filter correctly", () => {
    const list = ["foo", undefined, "bar"].filter(defined);
    for (const item of list) {
      expect(item.length).to.not.eq(0);
    }
  });
});
