import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

export default function Todo({ id, status, description, onAdvance }) {
    return (
        <StyledTodo>
            <h3>
                {description} <small>[{status}]</small>
            </h3>
            <ButtonGroup>
                {status !== 'DONE' && (
                    <button
                        onClick={() => onAdvance({ id, description, status })}
                    >
                        Advance
                    </button>
                )}
                <Link to={"/delete"}>
                    <button>Delete</button>
                </Link>
            </ButtonGroup>
        </StyledTodo>
    );
}

const StyledTodo = styled.section`
    padding: 8px;
    border: 1px solid salmon;
    border-radius: 8px;
`;

const ButtonGroup = styled.section`
    display: flex;
    justify-content: space-between;
`;
