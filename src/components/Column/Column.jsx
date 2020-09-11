import React from 'react';
import '../Board/Board.scss';
import './column.scss';
import Showcard from '../Cards/cards'
import NewInput from '../NewInput/NewInput'

const Column = ({ title, cards }) => {
    return (
        <div className="card-content">
            <h4>{title} </h4>
            <div className="todolist">
                {cards.map(card => (
                    <Showcard key={card.id} content={card.content} />
                ))}
            </div>
            <NewInput />
        </div>
    )
};

export default Column; 