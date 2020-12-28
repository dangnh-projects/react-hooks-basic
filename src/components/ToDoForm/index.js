import React, { useState } from 'react';

const ToDoForm = (props) => {
    const {onSubmit} = props;
    const [value, setValue] = useState('')

    const handleValueChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        //Prevent Reloading Browser
        e.preventDefault();

        if(!onSubmit) return;

        const formValue = {
            title: value
        };

        onSubmit(formValue);

        // Reset Value
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={value} 
                onChange={handleValueChange} 
            />
        </form>
    );
}

export default ToDoForm;