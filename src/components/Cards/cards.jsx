import React from 'react';
import { removeCard } from '../../actions/RemoveActions';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

import './cards.scss';

const ShowCard = props => {

    return (
        <Draggable draggableId={String(props.id)} index={props.index}>
            {provided => (
                <div className="do" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                    <span>{props.content}</span>
                    <div >
                        <button className="Remove" onClick={() => props.dispatch(removeCard(props.listID, props.card.id))}>x</button>
                    </div>
                </div >
            )}
        </Draggable>
    )
}

export default connect()(ShowCard);
