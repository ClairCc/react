import React from 'react';
import './TodoSearch.css';

function TodoSearch(props) {
    const [search, setSearch] = React.useState('');

    const searchTodo = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    };

    return [
        <React.Fragment>
            <input
                className="todo_search"
                type="text"
                placeholder="Escribe el TODO que buscas"
                onChange={searchTodo}
                value={search}
            />
        </React.Fragment>,
        <p>{search}</p>,
    ];
}

export { TodoSearch };
