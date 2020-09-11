import React from 'react';
import Column from '../Column/Column';
import { connect } from 'react-redux';

import "./Board.scss";
import NewInput from '../NewInput/NewInput';


const Board = ({ lists }) => {



    // const handleOnChange = event => {
    //    setNewCard(event.target.value.trim())

    // }
    /* const newInput = (event) => {
        if (newCard === '')
            alert('The task can´t be empty!')
        else props.addCard(newCard)

    } */

    return (
        <div className="row">
            {lists.map(list => <Column key={list.id} title={list.title} cards={list.cards} />)}
            <NewInput list />
        </div>
    )
}
//const mapStateToProps = state => ({ cards: state.cards })
/* const mapStateToProps = state => ({ cards: state.cards })
const mapDispatchToProps = (dispatch) => ({
    addCard: (content) => {
        console.log('dispatch ADD_CARD')
        dispatch({
            type: 'ADD_CARD',
            payload: content,
            id: Date.now()
        });
    }
});
*/
const mapStateToProps = state => ({
    lists: state.lists
});
const connected = connect(mapStateToProps)(Board);
export default connected;
