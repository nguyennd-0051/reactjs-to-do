import { toastr } from 'react-redux-toastr';
import history from '../routes/history';

function handleResponse(response) {
    switch (response.status) {
        case 401:
            toastr.error(response.data.message);
            history.push('/login');
            break;
        case 404:
            history.push('/not-found');
            break;
        case 422:
            toastr.error(response.data.message);
            break;
        default:
            toastr.error(response.statusText ? response.statusText : response.data.message);
            break;
    }
}

export default handleResponse;
