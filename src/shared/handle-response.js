import { toastr } from 'react-redux-toastr';
import history from '../routes/history';

function handleResponse(response) {
    switch (response.status) {
        case 404:
            history.push('/not-found');
            break;
        default:
            toastr.error(response.statusText ? response.statusText : response.data.message);
            break;
    }
}

export default handleResponse;
