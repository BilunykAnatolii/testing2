const { findCarNumber } = require("./index");

describe("findCarNumber", () => {
  it("should return the correct car number based on the code word and numbers string", () => {
    expect(findCarNumber("test", "12345")).toBe("21343");
    expect(
      findCarNumber(
        "Kyiv",
        "91840723560405732869501597532715380792564152347981576423052155063186297498324950786324"
      )
    ).toBe("4326");
    expect(
      findCarNumber(
        "coding",
        "345687129056231958069472938574619142837506491520847920489523857"
      )
    ).toBe("94129");
  });
});
