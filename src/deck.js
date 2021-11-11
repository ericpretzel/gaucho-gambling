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
        const rank = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
        const suit = ["S","H","D","C"]; // spades, hearts, diamonds, clubs
        for (var r in rank)
            for (var s in suit)
                this.cards.push(new Card(r,s));

        this.shuffle();
    }

    shuffle() {
        // shuffle array (google Fisher-Yates algorithm)
        var copy = [], n = this.cards.length, i;

        while (n) {

            i = Math.floor(Math.random() * this.cards.length);

            if (i in this.cards) {
                copy.push(this.cards[i]);
                delete this.cards[i];
                n--;
            }
        }

        this.cards = copy;
    }


    add(card) {
        // add card back to the bottom of the deck (last index).
        this.cards.push(card);
    }
}


console.log('hello');

export default Deck;
