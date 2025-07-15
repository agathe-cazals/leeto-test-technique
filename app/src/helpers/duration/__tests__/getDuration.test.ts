import getDuration from "../getDuration";

describe("Helpers - GetDuration", () => {
  it("returns correct duration in days for valid dates - 1 day", () => {
    expect(getDuration("2024-06-01", "2024-06-02")).toBe("1 jour");
  });

  it("returns correct duration in days for valid dates - 9 days", () => {
    expect(getDuration("2024-06-01", "2024-06-10")).toBe("9 jours");
  });

  it('returns "une semaine" for exactly 7 days', () => {
    expect(getDuration("2024-06-01", "2024-06-08")).toBe("une semaine");
  });

  it('returns "date invalide" for negative duration', () => {
    expect(getDuration("2024-06-10", "2024-06-01")).toBe("date invalide");
  });

  it("works with Date objects as input", () => {
    const start = new Date("2024-06-01");
    const end = new Date("2024-06-03");
    expect(getDuration(start, end)).toBe("2 jours");
  });

  it('returns "0 jour" for same start and end date', () => {
    expect(getDuration("2024-06-01", "2024-06-01")).toBe("0 jour");
  });
});
