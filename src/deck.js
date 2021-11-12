import Card from './card.jsx';


class Deck {

    /*
     * The deck initializes and contains all 52 cards.
     *
     * FUNCTIONS:
     *
     * shuffle():void           - shuffles the deck using Fisher-Yates algorithm.
     *
     * draw():Card              - removes a card from the top of the deck (first index) and returns it.
     *
     * add(card):void           - Adds card back into the bottom of the deck.
     *
     */

    constructor() {
        this.cards = [];

        // populate deck with all 52 cards

        this.shuffle();

    }

    draw = ()=> {
        var card = this.cards.shift();
        return card;
    }


    add = (card)=> {
        // add card back to the bottom of the deck (last index).
        this.cards.push(card);
    }
}

export default Deck;
