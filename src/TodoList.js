import React from 'react';
import './TodoList.css';

function TodoList(props) {
    return <section className="todo_list">{props.children}</section>;
}

export { TodoList };
