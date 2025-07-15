import { renderHook } from "@testing-library/react";
import { useGiftCardAmount } from "../useGiftCardAmount.hook";

describe("Gift Cards Hooks - useGiftCardAmount", () => {
  it("returns correct label and sumAvailable for normal values", () => {
    const { result } = renderHook(() =>
      useGiftCardAmount({ consumedAmount: 30, allowedAmount: 100 }),
    );
    expect(result.current.label).toBe("30 € dépensés / 100 €");
    expect(result.current.sumAvailable).toBe(70);
  });

  it("rounds values correctly", () => {
    const { result } = renderHook(() =>
      useGiftCardAmount({ consumedAmount: 29.7, allowedAmount: 99.8 }),
    );
    expect(result.current.label).toBe("30 € dépensés / 100 €");
    expect(result.current.sumAvailable).toBe(70);
  });

  it("handles zero consumed amount", () => {
    const { result } = renderHook(() =>
      useGiftCardAmount({ consumedAmount: 0, allowedAmount: 50 }),
    );
    expect(result.current.label).toBe("0 € dépensés / 50 €");
    expect(result.current.sumAvailable).toBe(50);
  });

  it("handles consumed amount equal to allowed amount", () => {
    const { result } = renderHook(() =>
      useGiftCardAmount({ consumedAmount: 100, allowedAmount: 100 }),
    );
    expect(result.current.label).toBe("100 € dépensés / 100 €");
    expect(result.current.sumAvailable).toBe(0);
  });

  it("handles negative values", () => {
    const { result } = renderHook(() =>
      useGiftCardAmount({ consumedAmount: -10, allowedAmount: 50 }),
    );
    expect(result.current.label).toBe("-10 € dépensés / 50 €");
    expect(result.current.sumAvailable).toBe(60);
  });
});
