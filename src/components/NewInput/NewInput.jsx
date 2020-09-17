import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addColumn, addCard } from '../../actions/AddingActions';
import './NewInput.scss';

const NewInput = (props) => {
    const [formOpen, setOpenForm] = useState(false);
    const [newItem, setNewItem] = useState('');

    //Open and close actions of a new input
    const openForm = () => {
        return setOpenForm(true)
    }
    const closeForm = () => {
        return setOpenForm(false);
    }
    const inputChange = event => {
        setNewItem(event.target.value.trim());
    }
    //Adding a new Column
    const addInput = () => {
        if (newItem) {
            setNewItem("");
            props.dispatch(addColumn(newItem))
        }
        closeForm();
    }

    // adding a new Card
    const AddCard = () => {
        if (newItem) {
            setNewItem("")
            props.dispatch(addCard(newItem, props.listID))
        }
        closeForm();
    }

    //Reusable button
    const addButton = () => {
        const addtext = props.list ? "Add another list" : "Add another card";
        return (
            <div className="NewContainer" onClick={openForm} >
                <h6> + {addtext} </h6>
            </div>
        )
    }
    //Reusable input
    const newInput = () => {
        const placeholder = props.list ? "Enter list title..." : "Enter content for a card...";
        const buttonTitle = props.list ? "Add list" : "Add card";
        return (
            <div className="input">
                <input placeholder={placeholder} onChange={inputChange} autoFocus />
                <div>
                    <button className="button" onClick={props.list ? addInput : AddCard} >{buttonTitle}{""} </button>
                    <span className="close" onClick={closeForm} >X</span>
                </div>
            </div>
        )
    }
    return (
        //  return component according to form´s  state
        formOpen ? newInput() : addButton()
    )
}


export default connect()(NewInput);