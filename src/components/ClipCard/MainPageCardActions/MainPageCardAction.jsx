// Material UI imports
import React from 'react';
import DeleteButton from '../../BtnDelete/DeleteButton'
import UpdateNavButton from '../../BtnUpdateNav/UpdateNavButton';

import { CardActions, Stack, Divider } from '@mui/material';


export default function MainPageCardActions({ clip }) {

    return (
        <>
            <CardActions >
                <Stack
                    direction="column"
                    spacing={2}
                    justifyContent="flex-end"
                    alignItems="center"
                    divider={<Divider orientation="vertical" flexItem />}
                    sx={{ width: '100%', mr: 2, mb: 0 }}
                >
                    <DeleteButton clip={clip} />
                    <UpdateNavButton clip={clip} />
                </Stack>
            </CardActions>
        </>
    );
}