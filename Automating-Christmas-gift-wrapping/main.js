function wrapping(gifts) {

    const wrappedGifts = gifts.map((gift) => {

        const giftSize = gift.length;
        const topAndBottomWrapSize = giftSize + 2;

        const topAndBottom = '*'.repeat(topAndBottomWrapSize);
        const middle = `\n*${gift}*\n`;
        
        const wrappedGift = `${topAndBottom}${middle}${topAndBottom}`;

        return wrappedGift;
    });

    return wrappedGifts;

}

module.exports = wrapping; 