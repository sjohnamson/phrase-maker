import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function ModifyButton() {
    const dispatch = useDispatch();
    const history = useHistory();

    // deletes clip
    const handleModify = () => {
        console.log('in handle modify')
        history.push('./modifyclip')
    }

    return (

         <Button
         onClick={() => handleModify()}
         size="small"
         color="primary">
         Add clip
     </Button>

    )
}