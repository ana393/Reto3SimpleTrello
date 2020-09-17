import React from 'react';
import { removeCard } from '../../actions/RemoveActions';
import { connect } from 'react-redux';


import './cards.scss';

const ShowCard = props => {

    return (
        <div className="do">
            <span>{props.content}</span>
            <div >
                <button className="Remove" onClick={() => props.dispatch(removeCard(props.listID, props.card.id))}>x</button>
            </div>
        </div >
    )
}

export default connect()(ShowCard);
