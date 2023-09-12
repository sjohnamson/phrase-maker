// Material UI imports
import React from 'react'; 
import DeleteButton from '../../BtnDelete/DeleteButton'
import UpdateNavButton from '../../BtnUpdateNav/UpdateNavButton';

import { CardActions} from '@mui/material';


export default function MainPageCardActions({clip}) {

    return (
        <>
            <CardActions>
                <DeleteButton clip={clip} />
                <UpdateNavButton clip={clip} />
            </CardActions>
        </>
    );
}