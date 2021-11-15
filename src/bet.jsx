import React from 'react';

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
            <form onSubmit={this.handleSubmit}>
                <label>
                    Bet: 
                </label>
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
            <input type="submit" disabled={this.props.disabled} value="Place Bet"/>
            </form>
        );
    }
}

export default BettingForm;
