import React, { useState } from 'react';
import './NewInput.scss';

const NewInput = (props) => {
    const [formOpen, setOpenForm] = useState(false);
    const [newItem, setNewItem] = useState('');
    //Open and cloese actions of a new input
    const openForm = () => {
        return setOpenForm(true)
    }
    const closeForm = () => {
        return setOpenForm(false);
    }
    const inputChange = event => {
        setNewItem(event.target.value.trim());
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
                <input placeholder={placeholder} onBlur={closeForm} onChange={inputChange} autoFocus />
                <div>
                    <button className="button">{buttonTitle} </button>
                    <span className="close" onClick={closeForm} >X</span>
                </div>
            </div>
        )
    }
    return (
        //  return component according to what is in the state
        formOpen ? newInput() : addButton()
    )
}
export default NewInput;