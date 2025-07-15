import GiftCardRequest from "../GiftCardRequest";
import { mockGiftCards } from "../__mocks__/GiftCards.mock";
describe("Requests - GiftCardRequest", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("GETGiftCardsList fetches and returns the list of gift cards", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockGiftCards),
    });
    const result = await GiftCardRequest.GETGiftCardsList();
    expect(fetch).toHaveBeenCalledWith("http://localhost:3001/gift-cards");
    expect(result).toEqual(mockGiftCards);
  });

  it("GETGiftCardDetails fetches and returns a single gift card", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockGiftCards[0]),
    });
    const result = await GiftCardRequest.GETGiftCardDetails(1);
    expect(fetch).toHaveBeenCalledWith("http://localhost:3001/gift-cards/1");
    expect(result).toEqual(mockGiftCards[0]);
  });
});
