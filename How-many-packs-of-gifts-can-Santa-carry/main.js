const {sum} = require('lodash');

function distributeGifts(packOfGifts, reindeers) {

    const totalWeight = sum(packOfGifts.map((gift) => gift.length));
    const totalReindeersWeightLimit = sum(reindeers.map((reindeer) => reindeer.length * 2));

    return Math.floor(totalReindeersWeightLimit / totalWeight);
}

module.exports = distributeGifts;