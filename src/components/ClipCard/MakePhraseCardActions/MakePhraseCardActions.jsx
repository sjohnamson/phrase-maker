// Material UI imports
import React from 'react'; 
import ModifyButton from '../../BtnOpenModify/OpenModifyButton';

import { CardActions} from '@mui/material';


export default function MainPageCardActions({clip}) {

    return (
        <>
            <CardActions>
                <ModifyButton clip={clip} />
            </CardActions>
        </>
    );
}