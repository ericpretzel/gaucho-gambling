import React from 'react';
import Hand from './hand.jsx';
import BettingForm from './bet.jsx';

const util = require('./util.js');
const gameState = util.gameState;

class App extends React.Component  {

    constructor(props) {
        super(props);

        this.state = {
            deck: util.getDeck(),

            playerMoney: 100,
            playerBet: 0,

            dealerHand: [],
            playerHand: [],

            gameState: gameState.NOT_STARTED
        };
    }

    // starts the game with the given bet
    startGame = (bet)=> {
        // validate bet input
        if (isNaN(bet) || +bet <= 0 || +bet > this.state.playerMoney)
            return alert("Invalid Bet!");

        // generate new shuffled deck
        var deck = util.getDeck();

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
            playerHand: playerHand,
            playerBet: bet,
            playerMoney: state.playerMoney - bet,
            gameState: gameState.STARTED,
        }));

        console.log('game started');
    }

    hit = ()=> {

        var deck = this.state.deck;
        var playerHand = this.state.playerHand;


        var card = deck.shift();
        playerHand.push(card);
        var playerScore = util.calculateTotal(util.evaluateHand(this.state.playerHand));

        if(playerScore > 21){
            console.log("busted"); //testing to see if values work
            this.stand();
        }
        if(playerScore === 21){
            console.log("blackjack"); //testing blackjack
            this.stand();
        }

        this.setState({
            deck: deck,
            playerHand: playerHand
        });

        return console.log('hit complete');
    }

    split = ()=> {
        return console.log('split');
        // yea
    }

    // ends the game
    stand= ()=> {
        // dealer hits until the total is >=17
        var dealerHand = this.state.dealerHand;
        var deck = this.state.deck;
        while (util.calculateTotal(util.evaluateHand(dealerHand)) < 17) {
            var card = deck.shift();
            dealerHand.push(card);
        }

        var dealerScore = util.calculateTotal(util.evaluateHand(dealerHand));
        console.log("dealerscore=", dealerScore);//testing values

        var playerScore = util.calculateTotal(util.evaluateHand(this.state.playerHand));
        console.log("playerScore=", playerScore);// testing values

        var isWinner = util.getWinner(playerScore, dealerScore);

        console.log("isWinner=", isWinner); // testing winner

        // payout is x2.5 if blackjack, x2 if normal win
        var payoutMultiplier = isWinner ? (playerScore === 21 ? 2.5 : 2) : 0;

        this.setState((state, props) => ({
            gameState: gameState.FINISHED,
            playerMoney: state.playerMoney + state.playerBet * payoutMultiplier
        }));

    }

    render() {
        // render everything
        var hitButton = (
        <button onClick={this.hit}
                disabled={this.state.gameState !== gameState.STARTED}>
                <span>Hit</span>
        </button>
        );
        var standButton = (
            <button onClick={this.stand}
                disabled={this.state.gameState !== gameState.STARTED}>
                <span>Stand</span>
            </button>
        );

        var playerHand = (<Hand className="playerHand" cards={this.state.playerHand} isDealer={false} gameState={this.state.gameState}/>);
        var dealerHand = (<Hand className="dealerHand" cards={this.state.dealerHand} isDealer={true} gameState={this.state.gameState}/>);

        var bettingForm = (<BettingForm disabled={this.state.gameState===gameState.STARTED} startGame={this.startGame}/>);
        return (
            <div className="App">
            {"Money: $" + this.state.playerMoney}
            {bettingForm}
            {hitButton}
            {standButton}
            {playerHand} <br/>
            {dealerHand}
            </div>
        );
    }
}

export default App;
