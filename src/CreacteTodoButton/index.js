import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const click = (msg) => {
        alert(msg);
    };
    return (
        <button
            className="todo_add"
            onClick={() => click('Aqui hira mi mensaje')}
        >
            +
        </button>
    );
}

export { CreateTodoButton };
