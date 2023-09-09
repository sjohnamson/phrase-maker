import React from 'react';
import { useState, useEffect} from 'react';
import {Link as RouterLink} from 'react-router-dom';
// material imports
import { Avatar, Box, Drawer, Divider, Button, Menu, MenuItem, ListItemIcon, Link, IconButton, Typography, Tooltip } from '@mui/material';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
// import { Link } from "react-router-dom";

export default function ProjectDropdown() {
    // get the user info to set the current project and list of other projects
    useEffect(() => {
        
    })
    
    
    // handles the menu navigation features
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'right', textAlign: 'center' }}>
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
                onClick={handleClose}
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
                            mr: 1,
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
                    <Avatar /> Current project
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Change project
                </MenuItem>
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
            </Menu>
        </>
    )
}