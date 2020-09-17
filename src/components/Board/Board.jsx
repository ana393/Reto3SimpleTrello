import React from 'react';
import Column from '../Column/Column';
import { connect } from 'react-redux';
import NewInput from '../NewInput/NewInput';
import './Board.scss';


const Board = ({ lists }) => {

    return (
        <div className="row">
            {lists.map(list => <Column listID={list.id} key={list.id} title={list.title} cards={list.cards} />)}
            <NewInput list />
        </div>
    )
}

const mapStateToProps = state => ({
    lists: state.lists
});
const connected = connect(mapStateToProps)(Board);
export default connected;
