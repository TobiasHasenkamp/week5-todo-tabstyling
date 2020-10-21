import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TodoList from "./TodoList";
import Todo from './Todo';
import styled from 'styled-components';


function TabPanel(props) {



    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));


export default function SimpleTabs({todos, onDelete, onAdvance, setIdToDelete}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="OPEN" {...a11yProps(0)} />
                    <Tab label="In Progress" {...a11yProps(1)} />
                    <Tab label="DONE" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>

                <TodoList
                    status="OPEN"
                    todos={todos}
                    onDelete={onDelete}
                    onAdvance={onAdvance}
                    setIdToDelete={setIdToDelete}

                />
            </TabPanel>
            <TabPanel value={value} index={1}>

                <TodoList
                    status="IN_PROGRESS"
                    todos={todos}
                    onDelete={onDelete}
                    onAdvance={onAdvance}
                    setIdToDelete={setIdToDelete}
                />

            </TabPanel>
            <TabPanel value={value} index={2}>

                <TodoList
                    status="DONE"
                    todos={todos}
                    onDelete={onDelete}
                    onAdvance={onAdvance}
                    setIdToDelete={setIdToDelete}
                />

            </TabPanel>
        </div>
    );
}