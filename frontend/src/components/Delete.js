import React from "react";
import {useHistory, Redirect, useParams} from "react-router-dom";

export default function Delete({id, onDelete}) {

    const history = useHistory();
    const {slug} = useParams();

    function goBackHandler() {
        history.goBack();
    }

    function deleteHandler(id) {
        onDelete(id)
        history.push("/");
    }

    return(
        <div>
            <div>Do you want to delete {slug}?</div>
            <button onClick={() => goBackHandler()}>go back</button>
            <button onClick={() => deleteHandler(id)}>delete</button>
        </div>
    );
}