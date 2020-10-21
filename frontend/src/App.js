import React, {useState} from 'react';
import styled from 'styled-components/macro';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';
import AddTodo from './components/AddTodo';
import Search from "./components/Search";
import useSearch from "./hooks/useSearch";
import {
    Switch,
    Route,
    useParams
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Delete from "./components/Delete";
import SimpleTabs from "./components/TabPanel";

export default function App() {
    const [todos, create, remove, advance] = useTodos();
    const [search, setSearch, filteredTodos] = useSearch(todos);
    const [idToDelete, setIdToDelete] = useState();

    return (
        <Main>

            <Header>
                <h1>Super Kanban Board </h1>
                <AddTodo onAdd={create} />
                <Search search={search} onChange={setSearch}/>
                {/*<NavBar/>*/}
            </Header>
            <Switch>
                <Board>
                    <Route path={"/delete"}>
                        <Delete id={idToDelete} onDelete={remove}/>
                    </Route>

                    <Route exact path={"/"}>
                        <SimpleTabs
                            todos={filteredTodos}
                            onDelete={remove}
                            onAdvance={advance}
                            setIdToDelete={setIdToDelete}/>
                    </Route>
                </Board>
            </Switch>
        </Main>
    );
}

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const Main = styled.main`
    height: 100vh;
    padding: 8px;

    h1 {
        color: royalblue;
    }
`;

const Board = styled.section`

    gap: 20px;
`;
