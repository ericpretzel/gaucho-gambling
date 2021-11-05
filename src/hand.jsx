import Component from 'react';

class Hand extends Component {
    /*
     * The Hand component represents the cards in the hand of either the player or the dealer.
     *
     * PROPS:
     *
     * cards:Card[]         - a list representation of the cards contained in the hand. Initialized as empty.
     *
     * orientation:???      - For display purposes, maybe use this prop to display the hand rotated upside-down
     *                        if it's the dealer's hand rather than the player's hand. (Or for multiple players)
     *
     *
     * FUNCTIONS:
     *
     * render()             - display cards in the hand. Maybe also display the point value of the hand?
     *
     *
     * evaluate():int[]     - returns the total point value of the cards in the hand. If the hand contains
     *                        an Ace or multiple Aces, this may return multiple values. Does not evaluate
     *                        a card if the card is face-down.
     *
     *
     * add(card):void       - Adds the specified Card component to the hand.
     *
     *
     * clear():void         - Removes all cards from the hand (for resetting a game).
     *
     *
     */

    constructor(props) {
        super(props);

        this.state = {
            cards: []
        };
    }

    render() {
        // iterate through cards and display them. Maybe also display the current point value of the hand.
    }

    evaluate() {
        // calculate then return points as an array of integers
    }

    add(card) {
        // add the given card to this.cards
    }

    clear() {
        // remove all cards from hand (for new game)
    }

}
