import React from 'react';
import './bet.css';

class BettingForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 0};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        var bet = this.state.value;
        this.props.startGame(bet);
        event.preventDefault();
    }

    render() {
        return (
            <div className="bet-form">
            <form onSubmit={this.handleSubmit}>
            <label id="bet-label">Bet: </label>
            <input className="bet-field" type="text" value={this.state.value} onChange={this.handleChange}/> <br/>
            <input className="bet-submit" type="submit" disabled={this.props.disabled} value="Place Bet"/>
            </form>
            </div>
        );
    }
}

export default BettingForm;
