import { useEffect, useState } from 'react';
import {
    getTodos,
    createTodo,
    removeTodo,
    updateTodo,
} from '../service/todo-service';

export default function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then((todos) => setTodos(todos));
    }, []);

    const create = (description) =>
        createTodo(description).then((newTodo) =>
            setTodos([...todos, newTodo])
        );

    const remove = (id) =>
        removeTodo(id).then(() =>
            setTodos(todos.filter((todo) => todo.id !== id))
        );

    const advance = (todo) => {
        const status = todo.status === 'OPEN' ? 'IN_PROGRESS' : 'DONE';
        updateTodo({ ...todo, status }).then((updatedTodo) =>
            setTodos([...todos.filter((t) => t.id !== todo.id), updatedTodo])
        );
    };

    return [todos, create, remove, advance];
}
