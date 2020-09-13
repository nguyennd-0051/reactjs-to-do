import axios from 'axios';
import {getCookie} from '../shared/cookies';

export default axios.create({
    headers: {
        'Content-Type': 'application/json',
        'auth-token': getCookie('access_token')
    }
});
