import React from 'react';
import Column from '../Column/Column';
import { connect } from 'react-redux';
import NewInput from '../NewInput/NewInput';
import './Board.scss';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../../actions/SortAction';


const Board = props => {
    const onDragEnd = (outcome) => {
        const { destination, source } = outcome;
        if (!destination) {
            return;
        }
        props.dispatch(sort(
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,

        ))
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="row">
                {props.lists.map((list, index) => <Column listID={list.id} index={index} key={list.id} title={list.title} cards={list.cards} />)}
                <NewInput list />
            </div>
        </DragDropContext>
    )
}

const mapStateToProps = state => ({
    lists: state.lists
});

const connected = connect(mapStateToProps)(Board);
export default connected;
