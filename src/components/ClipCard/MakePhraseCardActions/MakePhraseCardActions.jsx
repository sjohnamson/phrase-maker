// Material UI imports
import React from 'react'; 
import BtnModifyClip from '../../Btn ModifyClip/BtnModifyClip';

import { CardActions} from '@mui/material';



export default function MakePhraseCardActions({clip}) {

    return (
        <>
            <CardActions>
                <BtnModifyClip clip={clip} />
            </CardActions>
        </>
    );
}