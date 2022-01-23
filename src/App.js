import React from 'react';
import { CreacteTodoButton } from './CreacteTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

const todos = [
    {
        text: 'cortar cebolla',
        completed: false,
    },
    {
        text: 'Ver la saga de Star Wars',
        completed: false,
    },
    {
        text: 'Tomar el curso de React',
        completed: false,
    },
];

function App() {
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {todos.map((todo) => (
                    <TodoItem text={todo.text} key={todo.text} />
                ))}
            </TodoList>
            <CreacteTodoButton />
        </React.Fragment>
    );
}

export default App;
