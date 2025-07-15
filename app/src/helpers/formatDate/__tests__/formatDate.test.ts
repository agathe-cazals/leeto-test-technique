import formatDate from "../formatDate";

describe("Helpers - FormatDate", () => {
  it("formats a date string in YYYY-MM-DD format", () => {
    expect(formatDate("2024-06-01")).toBe("1 juin 2024");
    expect(formatDate("2023-12-25")).toBe("25 déc. 2023");
  });

  it("formats a Date object", () => {
    expect(formatDate(new Date("2024-01-15"))).toBe("15 janv. 2024");
  });

  it("handles single-digit days and months", () => {
    expect(formatDate("2024-02-03")).toBe("3 févr. 2024");
  });

  it("returns Invalid Date for invalid input", () => {
    expect(formatDate("invalid-date")).toBe("Invalid Date");
  });
});
