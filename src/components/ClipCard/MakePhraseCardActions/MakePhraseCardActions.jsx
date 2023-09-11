// Material UI imports
import React from 'react'; 
import ModifyClipPage from '../../ModifyClipPage/ModifyClipPage';

import { CardActions} from '@mui/material';


export default function MainPageCardActions({clip}) {

    return (
        <>
            <CardActions>
                <ModifyClipPage clip={clip} />
            </CardActions>
        </>
    );
}