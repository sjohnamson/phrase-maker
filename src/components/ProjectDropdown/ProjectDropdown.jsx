import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import LogOutButton from '../BtnLogOut/LogOutButton';
import JoinProjectPage from '../JoinProjectPage/JoinProjectPage'
import MakeProjectPage from '../../screens/MakeProjectPage/MakeProjectPage'
// material imports
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import JoinFullIcon from '@mui/icons-material/JoinFull';
import InfoIcon from '@mui/icons-material/Info';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LogoutIcon from '@mui/icons-material/Logout';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { List, ListItemButton, Collapse, ListItemText, Divider, ListItemIcon, Typography, Stack } from '@mui/material';
import { ExpandMore, ExpandLess, Logout, Settings } from '@mui/icons-material';
// import { Link } from "react-router-dom";

export default function ProjectDropdown() {
    const dispatch = useDispatch();
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

    // changes state for the join project modal operation
    const [openJoin, setOpenJoin] = useState(false);
    const handleOpenJoin = () => setOpenJoin(true);
    const handleCloseJoin = () => setOpenJoin(false);

    // changes state for the make project modal operation
    const [openMake, setOpenMake] = useState(false);
    const handleOpenMake = () => setOpenMake(true);
    const handleCloseMake = () => setOpenMake(false);

    // style the modals
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        bgcolor: 'secondary.main',
        border: 'info.main',
        borderWidth: 1,
        boxShadow: 24,
        p: 4,
    };

    // state and function for side drawer open/close
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
                dispatch({ type: 'GET_CLIPS' })
                dispatch({ type: 'FETCH_USER' })

            })
            .catch(err => {
                console.error('error in dropdown put:', err)
            })
    }

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, height: '100%', bgcolor: 'info.main' }}
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
                            <Diversity3Icon color='secondary' />
                        </ListItemIcon>
                        <ListItemText primary={userInfo.current_project} sx={{ color: 'secondary.main' }} />

                    </ListItem>
                </ListItemButton>
            </List>
            <List
                sx={{ width: '100%', maxWidth: 360 }}
                component="nav"
                aria-labelledby="nested-list-subheader"

            >
                <ListItem disablePadding>
                    <ListItemButton onClick={handleListClick}>
                        <ListItemIcon>
                            <ChangeCircleIcon sx={{ color: 'secondary.main' }} />
                        </ListItemIcon>
                        <ListItemText primary='Change project' sx={{ color: 'secondary.main' }} />
                        {listOpen ? <ExpandLess sx={{ color: 'secondary.main' }} /> : <ExpandMore sx={{ color: 'secondary.main' }} />}
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

                    {projectList.map((project, index) => {
                        return (
                            < ListItemButton
                                onClick={() => setCurrentProject(project, anchor)}
                                sx={{ pl: 4 }}
                                key={index}

                            >
                                <ListItemText primary={project.title} sx={{ color: 'secondary.main' }} />
                            </ListItemButton>
                        )
                    })}
                </List>
            </Collapse>

            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={handleOpenJoin}
                        // component={RouterLink}
                        // to="/joinproject"
                        color="inherit"
                        underline="none"
                    >
                        <ListItemIcon>
                            <JoinFullIcon sx={{ color: 'secondary.main' }} />
                        </ListItemIcon>
                        <ListItemText primary='Join project' sx={{ color: 'secondary.main' }} />
                    </ListItemButton>
                    <Modal
                        open={openJoin}
                        onClose={handleCloseJoin}
                        aria-labelledby="join project modal"
                        aria-describedby="modal to join a project"
                    >
                        <Box sx={style}>
                            <JoinProjectPage
                                onClick={toggleDrawer(anchor, false)}
                                onKeyDown={toggleDrawer(anchor, false)} />
                        </Box>
                    </Modal>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton
                        onClick={handleOpenMake}
                        // component={RouterLink}
                        // to="/joinproject"
                        color="inherit"
                        underline="none"
                    >
                        <ListItemIcon>
                            <AddIcon sx={{ color: 'secondary.main' }} />
                        </ListItemIcon>
                        <ListItemText primary='Create new project' sx={{ color: 'secondary.main' }} />
                    </ListItemButton>
                    <Modal
                        open={openMake}
                        onClose={handleCloseMake}
                        aria-labelledby="Create project modal"
                        aria-describedby="modal to create a new project"
                    >
                        <Box sx={style}>
                            <MakeProjectPage
                                onClick={toggleDrawer(anchor, false)}
                                onKeyDown={toggleDrawer(anchor, false)} />
                        </Box>
                    </Modal>
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
                            <InfoIcon sx={{ color: 'secondary.main' }} />
                        </ListItemIcon>
                        <ListItemText primary='About Phrase Maker' sx={{ color: 'secondary.main' }} />
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
                            <LogoutIcon sx={{ color: 'secondary.main' }} />
                        </ListItemIcon>
                        <LogOutButton />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box >
    );

    return (

        <Box sx={{ pt: 2 }}>
            <Stack direction={'row'}>
                   <Typography variant='button' sx={{color: 'info.main', m: 2}} gutterBottom>{userInfo.current_project}</Typography>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button color='info' onClick={toggleDrawer(anchor, true)}>
                        <Diversity3Icon fontSize='large' />
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
            </Stack>
        </Box>
    )
}