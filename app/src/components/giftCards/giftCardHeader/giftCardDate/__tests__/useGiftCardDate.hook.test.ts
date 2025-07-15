import { renderHook } from "@testing-library/react";
import { useGiftCardDate } from "../useGiftCardDate.hook";

describe("Gift Cards Hooks - useGiftCardDate", () => {
  it("returns correct availability and daysLeft for valid dates", () => {
    const { result } = renderHook(() =>
      useGiftCardDate({ openingDate: "2024-06-01", closingDate: "2024-06-10" }),
    );
    expect(result.current.availability).toBe("1 juin 2024 - 10 juin 2024");
    expect(result.current.daysLeft).toBe("9 jours");
  });

  it("returns correct label for same start and end date", () => {
    const { result } = renderHook(() =>
      useGiftCardDate({ openingDate: "2024-06-01", closingDate: "2024-06-01" }),
    );
    expect(result.current.availability).toBe("1 juin 2024 - 1 juin 2024");
    expect(result.current.daysLeft).toBe("0 jour");
  });

  it("returns correct label for exactly 7 days", () => {
    const { result } = renderHook(() =>
      useGiftCardDate({ openingDate: "2024-06-01", closingDate: "2024-06-08" }),
    );
    expect(result.current.availability).toBe("1 juin 2024 - 8 juin 2024");
    expect(result.current.daysLeft).toBe("une semaine");
  });

  it("handles invalid date range", () => {
    const { result } = renderHook(() =>
      useGiftCardDate({ openingDate: "2024-06-10", closingDate: "2024-06-01" }),
    );
    expect(result.current.availability).toBe("10 juin 2024 - 1 juin 2024");
    expect(result.current.daysLeft).toBe("date invalide");
  });

  it("works with Date objects as input", () => {
    const { result } = renderHook(() =>
      useGiftCardDate({
        openingDate: new Date("2024-06-01"),
        closingDate: new Date("2024-06-03"),
      }),
    );
    expect(result.current.availability).toBe("1 juin 2024 - 3 juin 2024");
    expect(result.current.daysLeft).toBe("2 jours");
  });
});
