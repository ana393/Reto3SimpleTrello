import React from 'react';
import './column.scss';
import Showcard from '../Cards/cards';
import NewInput from '../NewInput/NewInput';
import { Droppable } from 'react-beautiful-dnd'

const Column = ({ title, cards, listID }) => {
    return (
        <Droppable droppableId={String(listID)}>
            {(provided) => (
                <div className="card-content" {...provided.droppableProps} ref={provided.innerRef}>
                    <h4>{title} </h4>
                    <div className="todolist">
                        {cards.map((card, index) => (
                            <Showcard index={index} key={card.id} card={card} listID={listID} content={card.content} id={card.id} />
                        ))}
                    </div>
                    <NewInput listID={listID} />
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
};

export default Column; 