import React from 'react';
import Hand from './hand.jsx';
import BettingForm from './bet.jsx';
import './App.css';

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

            gameState: gameState.NOT_STARTED,
            message: "Welcome to Blackjack! Place a bet to start!"
        };
    }

    // starts the game with the given bet
    startGame = (bet)=> {
        // validate bet input
        bet = parseInt(bet)
        if (isNaN(bet) || bet <= 0 || bet > this.state.playerMoney)
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
            message: "Good luck!"
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
            this.stand(playerScore);
        }
        if(playerScore === 21){
            console.log("blackjack"); //testing blackjack
            this.stand(playerScore);
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
    stand = (playerScore)=> {
        // dealer hits until the total is >=17 (if player doesn't bust)
        var dealerHand = this.state.dealerHand;
        var deck = this.state.deck;
        if (playerScore <= 21) {
            while (util.calculateTotal(util.evaluateHand(dealerHand)) < 17) {
                var card = deck.shift();
                dealerHand.push(card);
            }
        }

        var dealerScore = util.calculateTotal(util.evaluateHand(dealerHand));
        console.log("dealerScore = ", dealerScore);

        var isWinner = util.getWinner(playerScore, dealerScore);
        console.log("isWinner = ", isWinner);

        // payout is x2.5 if blackjack, x2 if normal win, x1 if tie, and x0 if lose.
        var payoutMultiplier = 0;
        var message = "";
        switch (isWinner) {
            case true:
                if (playerScore===21) {
                    message = "Blackjack!";
                    payoutMultiplier = 2.5;
                } else {
                    message = "You win!";
                    payoutMultiplier = 2;
                }
                break;
            case null:
                message = "Push!";
                payoutMultiplier = 1;
                break;
            default: case false:
                if (playerScore > 21) {
                    message = "Bust!";
                } else {
                    message = "You lost!";
                }
                payoutMultiplier = 0;
                break;
        }

        this.setState((state, props) => ({
            gameState: gameState.FINISHED,
            playerMoney: state.playerMoney + state.playerBet * payoutMultiplier,
            message: message + " Play again?"
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
            <button onClick={() => this.stand(util.calculateTotal(util.evaluateHand(this.state.playerHand)))}
                disabled={this.state.gameState !== gameState.STARTED}>
                <span>Stand</span>
            </button>
        );

        var playerHand = (<Hand className="playerHand" cards={this.state.playerHand} isDealer={false} gameState={this.state.gameState}/>);
        var dealerHand = (<Hand className="dealerHand" cards={this.state.dealerHand} isDealer={true} gameState={this.state.gameState}/>);

        var bettingForm = (<BettingForm disabled={this.state.gameState===gameState.STARTED} startGame={this.startGame}/>);
        return (

            <div className="App">

            <div className="center">
            {"Money: $" + this.state.playerMoney} <br/>
            {this.state.message}
            </div>
            {bettingForm}
            {hitButton}
            {standButton}
            <div className="card-center">
            {dealerHand} <br/>
            {playerHand}
            </div>
            </div>
        );
    }
}

export default App;
