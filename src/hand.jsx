import React from 'react';
import Card from './card.jsx';

class Hand extends React.Component {
    render() {
        // iterate through cards and display them
        return(
            <div className="hand">
              {this.props.cards.map((card, i) => 
                  <Card suit={card[1]}
                        rank={card[0]}
                        isFaceup={true} // change this
                        key={i}      
                  />
              )}
            </div>
        );
    }
}

Hand.defaultProps = {
    cards: []
};

export default Hand;
