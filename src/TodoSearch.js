import React from 'react';
import './TodoSearch.css';

function TodoSearch(props) {
    return (
        <React.Fragment>
            <input
                className="todo_search"
                type="text"
                placeholder="Escribe el TODO que buscas"
            />
        </React.Fragment>
    );
}

export { TodoSearch };
