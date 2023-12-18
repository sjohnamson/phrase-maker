// Material UI imports
import React from 'react'; 
import BtnModifyClip from '../../BtnAppendClip/BtnAppendClip';

import { CardActions} from '@mui/material';



export default function PhraseCardActions({phrase}) {

    return (
  
            <CardActions sx={{bgcolor: 'info.main'}}>
                {/* <BtnModifyClip clip={clip} /> */}
            </CardActions> 
       
    );
}