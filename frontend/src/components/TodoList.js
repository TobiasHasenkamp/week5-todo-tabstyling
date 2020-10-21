import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

export default function TodoList({ status, todos, onDelete, onAdvance, setIdToDelete }) {
    const filteredTodos = todos.filter((todo) => todo.status === status);
    return (
        <div>
            <StyledList>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        <Todo {...todo} onDelete={onDelete} onAdvance={onAdvance} setIdToDelete={setIdToDelete}/>
                    </li>
                ))}
            </StyledList>
        </div>
    );
}

const StyledList = styled.ul`
    list-style: none;
    padding: 0;

    li + li {
        margin-top: 12px;
    }
`;
