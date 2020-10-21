import React from "react";

export default function Delete({id, onDelete}) {
    return(
        <div>
            <p>Do you want to delete this item?</p>
            <button>go back</button>
            <button onClick={() => onDelete(id)}>delete</button>
        </div>
    );
}