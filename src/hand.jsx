import React from 'react';
import Card from './card.jsx';

const util = require('./util.js');
const gameState = util.gameState;

class Hand extends React.Component {

    label() {
        if (this.props.gameState !== gameState.NOT_STARTED) {
            var str = this.props.isDealer ? "Dealer Hand: " : "Player Hand: ";
            // check if the game is in progress, because the dealer's second card needs to be hidden and not included in the point total.
            var hand = (this.props.isDealer && this.props.gameState === gameState.STARTED) ? this.props.cards.slice(0, -1) : this.props.cards;
            str += util.calculateTotal(util.evaluateHand(hand));
            return str;
        }
        return null; 
    }

    render() {
                // iterate through cards and display them
        return(
            <div className="hand">
            {this.label()}
            {this.props.cards.map((card, i) => 
                <Card suit={card[1]}
                rank={card[0]}
                isFaceup={this.props.isDealer ? i !== this.props.cards.length-1 || this.props.gameState === gameState.FINISHED : true /*hide last card if needed*/ }
                key={i}      
                />
            )}
            </div>
        );
    }
}

Hand.defaultProps = {
    cards: [],
    isDealer: false
};

export default Hand;
