// state of the game
exports.gameState = {
    NOT_STARTED: 0,
    STARTED: 1,
    FINISHED: 2,
}

// get a new shuffled deck
exports.getDeck = ()=> {
    var deck = []
    const ranks = ['A','2','3','4','5','6','7','8','9','T','J','Q','K'];
    const suits = ['D','H','C','S'];
    ranks.forEach(rank => {
        suits.forEach(suit => {
            deck.push(rank+suit);
        })
    });
    deck = exports.shuffleArray(deck);

    return deck;
}


// shuffle array
exports.shuffleArray = (arr)=> {
    var shuffledCopy = [], n = arr.length, i;

    while (n) {

        i = Math.floor(Math.random() * arr.length);

        if (i in arr) {
            shuffledCopy.push(arr[i]);
            delete arr[i];
            n--;
        }
    }

    return shuffledCopy;
}

// evaluate the points of a player's hand
exports.evaluateHand = (hand)=> {
    let hardTotal = 0;
    let softTotal = 0;

    hand.forEach(card => {
        if (card[0] === "T" || card[0] === "J" || card[0] === "Q" || card[0] === "K") {
            hardTotal += 10;
            softTotal += 10;
        } else if (card[0]=== "A") {
            hardTotal += 1;
            softTotal += ((softTotal + 11) > 21 ) ? 1 : 11;
        } else {
            hardTotal += parseInt(card[0]);
            softTotal += parseInt(card[0]);
        }
    });

    let totals = [hardTotal, softTotal];
    return totals;
}
exports.calculateTotal = (totals) => {
    if (totals[0] === 21 || totals[1] === 21) {
        return 21;
    }
    else if (totals[1] > 21) {
        return totals[0];
    }

    return totals[1];
}
exports.getWinner = (playerScore, dealerScore) => {
    switch(true) {
        case (playerScore === dealerScore):
        case (playerScore > 21 && dealerScore > 21):
            return null;
        case (playerScore > 21):
        case (dealerScore > playerScore && dealerScore <= 21):
            return false;
        default:
            return true;
    }
}
