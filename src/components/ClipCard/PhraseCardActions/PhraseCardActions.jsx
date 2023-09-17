// Material UI imports
import React from 'react'; 
import BtnModifyClip from '../../Btn ModifyClip/BtnModifyClip';

import { CardActions} from '@mui/material';



export default function PhraseCardActions({phrase}) {

    return (
  
            <CardActions sx={{bgcolor: 'info.main'}}>
                {/* <BtnModifyClip clip={clip} /> */}
            </CardActions> 
       
    );
}