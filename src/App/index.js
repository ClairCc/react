import React from 'react';
import { AppUi } from './AppUi';

function App() {
    const localStorageTodos = localStorage.getItem('TODOS_V3');
    let parsedTodos;

    if (!localStorageTodos) {
        localStorage.setItem('TODOS_V3', JSON.stringify([]));
        parsedTodos = [];
    } else {
        parsedTodos = JSON.parse(localStorageTodos);
    }

    const [todos, setTodos] = React.useState(parsedTodos);
    const [search, setSearch] = React.useState('');

    const completedTodos = todos.filter((todo) => todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodo = [];

    const saveTodos = (newTodosp) => {
        const stringifiedTodos = JSON.stringify(newTodosp);
        localStorage.setItem('TODOS_V3', stringifiedTodos);
        setTodos(newTodosp);
    };

    const completeTodo = (text) => {
        const position = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[position].completed = true;
        saveTodos(newTodos);
    };
    const deleteTodos = (text) => {
        const position = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(position, 1);
        saveTodos(newTodos);
    };

    if (!search.length >= 1) {
        searchedTodo = todos;
    } else {
        searchedTodo = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = search.toLowerCase();
            return todoText.includes(searchText);
        });
    }
    return (
        <AppUi
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            search={search}
            setSearch={setSearch}
            searchedTodo={searchedTodo}
            completeTodo={completeTodo}
            deleteTodos={deleteTodos}
        />
    );
}

export default App;
