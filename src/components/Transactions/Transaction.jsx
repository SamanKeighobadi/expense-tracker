// React Bootstrap components
import {Alert} from 'react-bootstrap'


const Transaction = ({amount,title}) => {
    return ( 
        <div>
            <Alert variant='success'  >
                {title}
            </Alert>
        </div>
     );
}
 
export default Transaction;