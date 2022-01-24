import React from 'react';
import { CreateTodoButton } from './CreacteTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

const todos = [
    {
        text: 'cortar cebolla',
        completed: true,
    },
    {
        text: 'Ver la saga de Star wars ',
        completed: false,
    },
    {
        text: 'Tomar el curso de ',
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
                    <TodoItem
                        text={todo.text}
                        key={todo.text}
                        complete={todo.completed}
                    />
                ))}
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export default App;
