import React from 'react';

import back from './assets/cards/1B.svg'

import cAH from './assets/cards/AH.svg'
import cAD from './assets/cards/AD.svg'
import cAC from './assets/cards/AC.svg'
import cAS from './assets/cards/AS.svg'
import c2H from './assets/cards/2H.svg'
import c2D from './assets/cards/2D.svg'
import c2C from './assets/cards/2C.svg'
import c2S from './assets/cards/2S.svg'
import c3H from './assets/cards/3H.svg'
import c3D from './assets/cards/3D.svg'
import c3C from './assets/cards/3C.svg'
import c3S from './assets/cards/3S.svg'
import c4H from './assets/cards/4H.svg'
import c4D from './assets/cards/4D.svg'
import c4C from './assets/cards/4C.svg'
import c4S from './assets/cards/4S.svg'
import c5H from './assets/cards/5H.svg'
import c5D from './assets/cards/5D.svg'
import c5C from './assets/cards/5C.svg'
import c5S from './assets/cards/5S.svg'
import c6H from './assets/cards/6H.svg'
import c6D from './assets/cards/6D.svg'
import c6C from './assets/cards/6C.svg'
import c6S from './assets/cards/6S.svg'
import c7H from './assets/cards/7H.svg'
import c7D from './assets/cards/7D.svg'
import c7C from './assets/cards/7C.svg'
import c7S from './assets/cards/7S.svg'
import c8H from './assets/cards/8H.svg'
import c8D from './assets/cards/8D.svg'
import c8C from './assets/cards/8C.svg'
import c8S from './assets/cards/8S.svg'
import c9H from './assets/cards/9H.svg'
import c9D from './assets/cards/9D.svg'
import c9C from './assets/cards/9C.svg'
import c9S from './assets/cards/9S.svg'
import cTH from './assets/cards/TH.svg'
import cTD from './assets/cards/TD.svg'
import cTC from './assets/cards/TC.svg'
import cTS from './assets/cards/TS.svg'
import cJH from './assets/cards/JH.svg'
import cJD from './assets/cards/JD.svg'
import cJC from './assets/cards/JC.svg'
import cJS from './assets/cards/JS.svg'
import cQH from './assets/cards/QH.svg'
import cQD from './assets/cards/QD.svg'
import cQC from './assets/cards/QC.svg'
import cQS from './assets/cards/QS.svg'
import cKH from './assets/cards/KH.svg'
import cKD from './assets/cards/KD.svg'
import cKC from './assets/cards/KC.svg'
import cKS from './assets/cards/KS.svg'

const cards = {
	'AH': cAH,
	'AD': cAD,
	'AC': cAC,
	'AS': cAS,
	'2H': c2H,
	'2D': c2D,
	'2C': c2C,
	'2S': c2S,
	'3H': c3H,
	'3D': c3D,
	'3C': c3C,
	'3S': c3S,
	'4H': c4H,
	'4D': c4D,
	'4C': c4C,
	'4S': c4S,
	'5H': c5H,
	'5D': c5D,
	'5C': c5C,
	'5S': c5S,
	'6H': c6H,
	'6D': c6D,
	'6C': c6C,
	'6S': c6S,
	'7H': c7H,
	'7D': c7D,
	'7C': c7C,
	'7S': c7S,
	'8H': c8H,
	'8D': c8D,
	'8C': c8C,
	'8S': c8S,
	'9H': c9H,
	'9D': c9D,
	'9C': c9C,
	'9S': c9S,
	'TH': cTH,
	'TD': cTD,
	'TC': cTC,
	'TS': cTS,
	'JH': cJH,
	'JD': cJD,
	'JC': cJC,
	'JS': cJS,
	'QH': cQH,
	'QD': cQD,
	'QC': cQC,
	'QS': cQS,
	'KH': cKH,
	'KD': cKD,
	'KC': cKC,
	'KS': cKS,
}

// for resizing the images
const cardWidth = 137
const cardHeight = 187

class Card extends React.Component {
    render() {
        // show front of card if faceup
        if (this.props.isFaceup)
        return (
            <img width={cardWidth} height={cardHeight} src={cards[this.props.rank+this.props.suit]} alt={back} className="card"/>
        );

        // else show back of card
        return (
            <img width={cardWidth} height={cardHeight} src={back} alt={back} className="card"/>
        );
    }
}

export default Card;
