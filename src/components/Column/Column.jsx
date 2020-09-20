import React from 'react';
import './column.scss';
import Showcard from '../Cards/cards';
import NewInput from '../NewInput/NewInput';
import { Droppable, Draggable } from 'react-beautiful-dnd'

const Column = ({ title, cards, listID, index }) => {
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <div className="card-content" {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    <Droppable droppableId={String(listID)}>
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
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
                </div>
            )}
        </Draggable>
    )
};

export default Column; 