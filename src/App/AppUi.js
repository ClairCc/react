import React from 'react';
import { CreateTodoButton } from '../CreacteTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';

function AppUi({
    completedTodos,
    totalTodos,
    search,
    setSearch,
    searchedTodo,
    completeTodo,
    deleteTodos,
}) {
    return (
        <React.Fragment>
            <TodoCounter
                completedTodos={completedTodos}
                totalTodos={totalTodos}
            />
            <TodoSearch search={search} setSearch={setSearch} />

            <TodoList>
                {searchedTodo.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        complete={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodos(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUi };
