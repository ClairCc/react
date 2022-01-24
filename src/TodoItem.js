import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    const complete = (prp) => {
        alert(`has completado el TODO ${prp}`);
    };
    const deleteTODO = (prp) => {
        alert(`has eliminado el TODO ${prp}`);
    };
    return (
        <li className={`todo_item ${props.complete && 'todo_item-complete'} `}>
            <span
                className={`todo_item-check ${
                    props.complete && 'todo_item-chech-complete'
                }`}
                onClick={() => complete(props.text)}
            >
                ✅
            </span>
            <p className={`${props.complete && 'todo_item-p-complete'}`}>
                {props.text}
            </p>
            <span
                className={`todo_item-delete`}
                onClick={() => deleteTODO(props.text)}
            >
                ❎
            </span>
        </li>
    );
}

export { TodoItem };
