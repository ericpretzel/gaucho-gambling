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
        return(
            <div className="hand">
              {this.props.cards.map((card, i) => 
                  <Card suit={card.props.suit}
                        rank={card.props.rank}
                        faceDown={card.props.isFaceup}
                        key={i} />
              )}
            </div>
        );
    }

    evaluate() {
        // calculate then return points as an array of integers
        let hardTotal = 0;
        let softTotal = 0;
        for(let card in this.cards){
            if(card[0] === "T"){
                hardTotal += 10;
            }
            else if(card[0] === "J"){
                hardTotal += 11;
                softTotal += 11;
            }
            else if(card[0] === "Q"){
                hardTotal += 12;
                softTotal += 12;
            }
            else if(card[0] === "K"){
                hardTotal += 13;
                softTotal += 13;
            }
            else if(card[0]=== "A"){
                hardTotal += 1;
                softTotal += ((softTotal + 11) > 21 ) ? 1 : 11;
            }
            else{
                hardTotal += parseInt(card[0]);
                softTotal += parseInt(card[0]);
            }
        }
        let totals = [hardTotal, softTotal];
        return totals;
    }

    add(card) {
        // add the given card to this.cards
        this.cards.push(card);
    }

    clear() {
        // remove all cards from hand (for new game)
        this.cards = [];
    }

}

