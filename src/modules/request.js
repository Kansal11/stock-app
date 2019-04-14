import axios from 'axios';

const sendRequest = (url, method, data, headers, params) => {
    return axios({
        method,
        url,
        data,
        params,
        headers
    })
	.then(result => result.data)
	.catch(err => {
        return Promise.reject(err);
	});
};

export {
    sendRequest
}