import React from 'react';
import Deck from './deck.js';
import Card from './card.jsx';

class App extends React.Component  {

    /*
     * This is where most of the game takes place
     *
     * PROPS (and/or state variables idk):
     *
     * deck:Deck                - the deck
     *
     * dealerHand:Hand          - the dealer's hand
     *
     * playerHand:Hand          - the player's hand. If we want more than one player, we can make this an array?
     *
     * playerMoney:int          - The player's money
     *
     * playerBet:int            - The player's current bet
     *
     * gameState:?              - Current state of the game (in progress, finished...etc.?)
     *
     *
     * FUNCTIONS:
     *
     * render()                 - display the app
     *
     * setBet():void            - sets the playerBet based on some input field. Check if the player's balance
     *                            is high enough to bet
     *
     * startGame():void         - set up initial conditions: player gets 2 cards face-up, dealer gets 1 card
     *                            face-up and 1 card face-down. Lock in bet, enable hit/stand buttons... etc
     *
     * hit():void               - player hits. Draw card from deck and add it to player hand. stand() if bust.
     *
     * split():void             - Not sure how to implement this at the moment
     *
     * stand():void             - Evaluate game state after dealer has played. If player busts, they lose.
     *                            Else if dealer busts, player wins. Else, compare points of dealer and player.
     *                            Tie if points are equal, otherwise player wins if they have more points
     *                            and loses if they have less.
     *                            Finally, update playerMoney appropriately according to what they bet.
     *
     * endGame():void           - Empty the hands, return cards to deck, allow player to change bet, etc
     *
     *
     */

    constructor(props) {
         super(props);

         this.state = {
             // initialize variables here I think
             deck: new Deck(),
         };
    }


    render() {
        // render player/dealer hands, hit/stand/split buttons, bet field, etc
        return (
          <div className="App">
            <Card suit="D" rank="A" isFaceup={true}/>
          </div>
        );
    }

    startGame() {
        // start the game
        // add cards to player and dealer hands
        // enable hit/split (if able)/stand buttons
    }

    setBet() {
        // set the player bet according to what they put in the input field.
        // remember to validate the input (no strings, only ints, playerBet<=playerMoney)
    }

    hit() {
        // add card from deck to player's hand
        // automatically stand if the player busts
    }

    split() {
        // yea
    }

    stand() {
        // check who wins
        // call endGame()
    }

    endGame() {
        // perform cleanup
    }

}

export default App;
