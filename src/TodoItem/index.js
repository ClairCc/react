import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className={`todo_item ${props.complete && 'todo_item-complete'} `}>
            <span
                className={`todo_item-check ${
                    props.complete && 'todo_item-chech-complete'
                }`}
                onClick={props.onComplete}
            >
                ✅
            </span>
            <p className={`${props.complete && 'todo_item-p-complete'}`}>
                {props.text}
            </p>
            <span className={`todo_item-delete`} onClick={props.onDelete}>
                ❎
            </span>
        </li>
    );
}

export { TodoItem };
