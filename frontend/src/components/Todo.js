import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';



const useStyles = makeStyles({
    root: {
        minWidth: 150,
    },
    title: {
        fontSize: 16,
    },
});


export default function Todo({ id, status, description, onAdvance, setIdToDelete }) {
    const classes = useStyles();

    return (

        <Card>

            <CardContent>

                <h3 className={classes.title}>
                    {description}
                </h3>

            </CardContent>
            <CardActions>

                <ButtonGroup>
                    {status !== 'DONE' && (

                        <Button size="small"
                            onClick={() => onAdvance({ id, description, status })}>
                            Advance
                        </Button>
                    )}
                    <Link to={"/delete/" + description}>
                        <Button size="small"
                            onClick={() => setIdToDelete(id)}>Delete</Button>
                    </Link>
                </ButtonGroup>

            </CardActions>

        </Card>

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

const StyledButton = styled(Button)({
    background: 'linear-gradient(royalblue, cornflowerblue)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: "white",
    height: 48,
    padding: '0 30px',
})