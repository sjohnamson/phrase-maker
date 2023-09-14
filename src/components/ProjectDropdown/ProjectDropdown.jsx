import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import LogOutButton from '../BtnLogOut/LogOutButton';
// material imports
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import JoinFullIcon from '@mui/icons-material/JoinFull';
import InfoIcon from '@mui/icons-material/Info';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LogoutIcon from '@mui/icons-material/Logout';
import { List, ListItemButton, Collapse, ListItemText, Divider, ListItemIcon} from '@mui/material';
import { ExpandMore, ExpandLess, Logout, Settings } from '@mui/icons-material';
// import { Link } from "react-router-dom";

export default function ProjectDropdown() {

    const userInfo = useSelector(store => store.user);
    const [projectList, setProjectList] = useState([]);

    // get the user info to set the current project and list of other projects
    useEffect(() => {
        axios.get('/api/project')
            .then(response => {
                setProjectList(response.data)
            })
            .catch(err => {
                console.error('error in dropdown get:', err)
            })
    }, [])

    const [state, setState] = useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    // handles the inner current project list
    const [listOpen, setListOpen] = useState(false);
    const handleListClick = () => {
        setListOpen(!listOpen);
    };

    // changes user's current project to clicked project
    const setCurrentProject = (newCurrent, anchor) => {
        console.log('current set in dropdown:', newCurrent)
        axios.put('/api/project', newCurrent)
            .then(response => {
                console.log('current set in dropdown:', response)
                toggleDrawer(anchor, false);
            })
            .catch(err => {
                console.error('error in dropdown put:', err)
            })
    }

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
        
        >
            <List>
            <ListItemButton>
                <ListItem
                    disablePadding
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                >

                    <ListItemIcon >
                        <Diversity3Icon color='info'/>
                    </ListItemIcon>
                    <ListItemText primary={userInfo.current_project} sx={{color: 'info'}}/>

                </ListItem>
                </ListItemButton>
            </List>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"

            >
                <ListItem disablePadding>
                    <ListItemButton onClick={handleListClick}>
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText primary='Change project' />
                        {listOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
            </List>

            <Collapse in={listOpen} timeout="auto" unmountOnExit>

                <List
                    component="div"
                    disablePadding
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                >

                    {projectList.map(project => {
                        return (
                            < ListItemButton
                                onClick={() => setCurrentProject(project, anchor)}
                                sx={{ pl: 4 }}
                                key={project.title}

                            >
                                {/* <ListItemIcon>

                                </ListItemIcon> */}
                                <ListItemText primary={project.title} />
                            </ListItemButton>
                        )
                    })}
                </List>
            </Collapse>

            <Divider />
            <List
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <ListItem disablePadding>
                    <ListItemButton
                        component={RouterLink}
                        to="/joinproject"
                        color="inherit"
                        underline="none"
                    >
                        <ListItemIcon>
                            <JoinFullIcon color='secondary'/>
                        </ListItemIcon>
                        <ListItemText primary='Join project' />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton
                        component={RouterLink}
                        to="/makeproject"
                        color="inherit"
                        underline="none"
                    >
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText primary='Create new project' />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton
                        component={RouterLink}
                        to="/about"
                        color="inherit"
                        underline="none"
                    >
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary='About Phrase Maker' />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton
                        // component={RouterLink}
                        // to="/about"
                        color="inherit"
                        underline="none"
                    >
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <LogOutButton/>
                    </ListItemButton>
                </ListItem>

            </List>


        </Box >
    );

    return (

        <Box sx={{pt: 2}}>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button color='info' onClick={toggleDrawer(anchor, true)}>
                        <Diversity3Icon fontSize='large'/>
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </Box>
    )
}