function GiftCardRequest() {
    async function GETGiftCardsList() {
        return await fetch('http://localhost:3001/gift-cards').then((res) => res.json());
    }

    async function GETGiftCardDetails(cardId: number) {
        return await fetch(`http://localhost:3001/gift-cards/${cardId}`).then((res) => res.json());

    }
    return {
        GETGiftCardsList,
        GETGiftCardDetails,
    };
}
export default GiftCardRequest();