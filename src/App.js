import React from 'react';
import Deck from './deck.js';
import Hand from './hand.jsx';

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

    startGame = ()=> {

        // add cards to dealer's hand
        var dealerCard1 = this.props.deck.draw(true);
        var dealerCard2 = this.props.deck.draw(false);

        this.props.dealerHand.add(dealerCard1);
        this.props.dealerHand.add(dealerCard2);

        // add card to player's hand
        var playerCard = this.props.deck.draw(true);
        this.props.playerHand.add(playerCard);


        // start the game
        // add cards to player and dealer hands
        // enable hit/split (if able)/stand buttons
        return true;
    }

    setBet = ()=> {
        return console.log('bet set');
        // set the player bet according to what they put in the input field.
        // remember to validate the input (no strings, only ints, playerBet<=playerMoney)
    }

    hit = ()=> {

        return console.log('hit');
        // add card from deck to player's hand
        // automatically stand if the player busts
    }

    split() {
        return console.log('split');
        // yea
    }

    stand() {
        return console.log('stand');
        // check who wins
        // call endGame()
    }

    endGame() {
        // perform cleanup
    }

    render() {
        var c = this.props.deck.draw();
        // render player/dealer hands, hit/stand/split buttons, bet field, etc
        return (
          <div className="App">


            <button onClick={this.startGame}>
                New Game
            </button>

            <button onClick={this.hit}>
                Hit
            </button>

            <button onClick={this.stand}>
                Stand
            </button>

          </div>
        );
    }
}

App.defaultProps = {
    deck: new Deck(),
    playerMoney: 100,

    dealerHand: new Hand(),
    playerHand: new Hand(),

    playerBet: 0
}


export default App;
