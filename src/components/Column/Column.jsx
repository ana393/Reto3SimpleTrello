import React from 'react';
import './column.scss';
import Showcard from '../Cards/cards'
import NewInput from '../NewInput/NewInput'

const Column = ({ title, cards, listID }) => {
    return (
        <div className="card-content">
            <h4>{title} </h4>
            <div className="todolist">
                {cards.map(card => (
                    <Showcard card={card} key={card.id} listID={listID} content={card.content} />
                ))}
            </div>
            <NewInput listID={listID} />
        </div>
    )
};

export default Column; 