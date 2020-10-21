import React from "react";
import { useHistory, Redirect } from "react-router-dom";

export default function Delete({id, onDelete}) {

    const history = useHistory();

    const goBackHandler = () => {
        history.goBack()
    }

    const deleteHandler = (id) => {
        onDelete(id)
        return(
            <Redirect to="/"/>
        )
    }

    return(
        <div>
            <p>Do you want to delete this item?</p>
            <button onClick={goBackHandler}>go back</button>
            <button onClick={deleteHandler(id)}>delete</button>
        </div>
    );
}