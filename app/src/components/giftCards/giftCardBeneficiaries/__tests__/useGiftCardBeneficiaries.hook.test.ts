import { renderHook } from "@testing-library/react";
import { useGiftCardBeneficiaries } from "../useGiftCardBeneficiaries.hook";
import { mockGiftCards } from "../../../../requests/giftCardRequest/__mocks__/GiftCards.mock";

describe("Hooks - useGiftCardBeneficiaries", () => {
  it('formats single beneficiary name as "Vous-même" for user', () => {
    const { result } = renderHook(() =>
      useGiftCardBeneficiaries({
        beneficiaries: mockGiftCards[0].beneficiaries,
      }),
    );
    expect(result.current.getBeneficiariesNamesFormatted()).toBe("Vous-même");
  });

  it("formats two beneficiaries names correctly", () => {
    const beneficiaries = [
      { ...mockGiftCards[0].beneficiaries[0] },
      {
        id: 2,
        type: "companion" as "companion",
        firstName: "Bob",
        consumption: { allowedAmount: 100, consumedAmount: 20 },
      },
    ];
    const { result } = renderHook(() =>
      useGiftCardBeneficiaries({ beneficiaries }),
    );
    expect(result.current.getBeneficiariesNamesFormatted()).toBe(
      "Vous-même et Bob sont éligibles",
    );
  });

  it("formats three beneficiaries names correctly", () => {
    const beneficiaries = [
      { ...mockGiftCards[0].beneficiaries[0] },
      {
        id: 2,
        type: "companion" as "companion",
        firstName: "Bob",
        consumption: { allowedAmount: 100, consumedAmount: 20 },
      },
      {
        id: 3,
        type: "child" as "child",
        firstName: "Charlie",
        consumption: { allowedAmount: 100, consumedAmount: 10 },
      },
    ];
    const { result } = renderHook(() =>
      useGiftCardBeneficiaries({ beneficiaries }),
    );
    expect(result.current.getBeneficiariesNamesFormatted()).toBe(
      "Vous-même, Bob, et Charlie sont éligibles",
    );
  });

  it("returns correct consumption label for user", () => {
    const { result } = renderHook(() =>
      useGiftCardBeneficiaries({
        beneficiaries: mockGiftCards[0].beneficiaries,
      }),
    );
    const label = result.current.getBeneficiariesConsumptionLabelFormatted(
      mockGiftCards[0].beneficiaries[0],
    );
    expect(label).toBe("Vous-même - 50 € / 100 €");
  });

  it("returns sorted beneficiaries in user, companion, child order", () => {
    const beneficiaries = [
      {
        id: 3,
        type: "child" as "child",
        firstName: "Charlie",
        consumption: { allowedAmount: 100, consumedAmount: 10 },
      },
      { ...mockGiftCards[0].beneficiaries[0] },
      {
        id: 2,
        type: "companion" as "companion",
        firstName: "Bob",
        consumption: { allowedAmount: 100, consumedAmount: 20 },
      },
    ];
    const { result } = renderHook(() =>
      useGiftCardBeneficiaries({ beneficiaries }),
    );
    expect(result.current.sortedBeneficiaries.map((b) => b.type)).toEqual([
      "user",
      "companion",
      "child",
    ]);
  });
});
