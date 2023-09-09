import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
// material imports
import { List, ListItemButton, Collapse, ListItemText, Avatar, Box, Drawer, Divider, Button, Menu, MenuItem, ListItemIcon, Link, IconButton, Typography, Tooltip } from '@mui/material';
import { StarBorder, ExpandMore, ExpandLess, SendIcon, DraftsIcon, InboxIcon, Logout, Settings, PersonAdd } from '@mui/icons-material';
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


    // handles the menu navigation features
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // handles the inner current project list
    const [listOpen, setListOpen] = useState(false);
    const handleListClick = () => {
        setListOpen(!listOpen);
    };

    // changes user's current project to clicked project
    const setCurrentProject = (newCurrent) => {
        axios.put('/api/project', newCurrent)
            .then(response => {
                handleClose();
            })
            .catch(err => {
                console.error('error in dropdown put:', err)
            })
    }

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'right', textAlign: 'center', justifyContent: 'flex-end' }}>
                <Tooltip title="Project settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>

            <Menu
                anchorEl={anchorEl}
                id="project-menu"
                open={open}
                onClose={handleClose}


                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 3,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar /> {userInfo.current_project}
                </MenuItem>

                <MenuItem>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"

                    >
                        <ListItemButton onClick={handleListClick}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText primary="Change project" />
                            {listOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>


                        <Collapse in={listOpen} timeout="auto" unmountOnExit>

                            <List component="div" disablePadding>

                                {projectList.map(project => {
                                    return (
                                        < ListItemButton
                                            onClick={() => setCurrentProject(project.title)}
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
                    </List>
                </MenuItem >
                <Divider />
                <MenuItem onClick={handleClose}>
                    <Link component={RouterLink} to="/joinproject" color="inherit" underline="none">
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Join project
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link component={RouterLink} to="/makeproject" color="inherit" underline="none">
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Create new project
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link href="#" color="inherit" underline="none">
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </Link>
                </MenuItem>
            </Menu >
        </>
    )
}