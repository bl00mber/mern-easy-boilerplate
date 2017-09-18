import axios from 'axios';

export default {
    requestMethod() {
        return axios.get(`/path`);
    }
}
