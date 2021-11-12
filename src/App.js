import React from 'react';
import Deck from './deck.js';
import Hand from './hand.jsx';

const util = require('./util.js');

const gameState = {
    NOT_STARTED: 0,
    STARTED: 1,
    FINISHED: 2,
}




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
     * gameState                - Current state of the game (in progress, finished...etc.?)
     *
     *
     * FUNCTIONS
     *
     * render()                 - display the app
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
            deck: this.getDeck(),

            playerMoney: 100,
            playerBet: 0,

            dealerHand: [],
            playerHand: [],

            gameState: gameState.NOT_STARTED
        };
    }

    // get a new shuffled deck
    getDeck = ()=> {
        var deck = []
        const ranks = ['A','2','3','4','5','6','7','8','9','T','J','Q','K'];
        const suits = ['D','H','C','S'];
        ranks.forEach(rank => {
            suits.forEach(suit => {
                deck.push(rank+suit);
            })
        });
        deck = util.shuffleArray(deck);

        return deck;
    }

    // starts the game with the given bet
    startGame = (bet)=> {
        if (bet <= 0 || bet > this.state.playerMoney)
            return alert("Invalid bet");

        // generate new shuffled deck
        var deck = this.getDeck();

        var dealerHand = [];
        var playerHand = [];

        // add cards to dealer's hand
        var dealerCard1 = deck.shift();
        var dealerCard2 = deck.shift();

        dealerHand.push(dealerCard1);
        dealerHand.push(dealerCard2);

        // add card to player's hand
        var playerCard = deck.shift()

        playerHand.push(playerCard);

        // update state of game to match everything generated here
        // since state is modified asynchronously, need to pass in a function to guarantee playerMoney is modified correctly
        this.setState((state, props) => ({
            deck: deck,
            dealerHand: dealerHand,
            playerHand, playerHand,
            playerBet: bet,
            playerMoney: state.playerMoney - bet,
            gameState: gameState.STARTED,
        }));

        console.log('game started');
    }

    hit = ()=> {

        return console.log('hit');
        // add card from deck to player's hand
        // automatically stand if the player busts
    }

    split = ()=> {
        return console.log('split');
        // yea
    }

    stand= ()=> {
        return console.log('stand');
        // check who wins
        // call endGame()
    }

    endGame= ()=> {
        // perform cleanup
    }

    render() {
        // render player/dealer hands, hit/stand/split buttons, bet field, etc

        var newGameButton = <button onClick={this.startGame} disabled={this.state.gameState === gameState.STARTED}>New Game</button>
        var hitButton = <button disabled={this.state.gameState !== gameState.STARTED}>Hit</button>

        return (
          <div className="App">
            {newGameButton}
            {hitButton}
            <Hand cards={this.state.playerHand}/>
          </div>
        );
    }
}

export default App;
