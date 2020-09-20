import React from 'react';
import Column from '../Column/Column';
import { connect } from 'react-redux';
import NewInput from '../NewInput/NewInput';
import './Board.scss';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../../actions/SortAction';


const Board = props => {
    const onDragEnd = (outcome) => {
        const { destination, source, draggableId, type } = outcome;
        if (!destination) {
            return;
        }
        props.dispatch(sort(
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,
            draggableId,
            type
        ))
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <Droppable droppableId="Board" direction="horizontal" type="column">
                    {provided => (
                        <div className="row" {...provided.droppableProps} ref={provided.innerRef}>
                            {props.lists.map((list, index) => <Column listID={list.id} index={index} key={list.id} title={list.title} cards={list.cards} />)}
                            <NewInput list />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    )
}

const mapStateToProps = state => ({
    lists: state.lists
});

const connected = connect(mapStateToProps)(Board);
export default connected;
