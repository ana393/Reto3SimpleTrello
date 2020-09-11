import React from 'react';

import { connect } from 'react-redux';
import './cards.scss';

const ShowCard = props => {

    return (
        <div className="do">
            <span>{props.content}</span>
            <div >
                <button className="Remove" onClick={() => props.RemoveCard(props.card.id)}>x
                </button>
            </div>
        </div >
    )
}

const mapDispatchToProps = (dispatch) => ({
    RemoveCard: (id) => {
        console.log('dispatch REMOVE_CARD')
        dispatch({
            type: 'REMOVE_CARD',
            payload: id
        })
    }
})

const connectedShowCard = connect(null, mapDispatchToProps)(ShowCard);
export default connectedShowCard;
