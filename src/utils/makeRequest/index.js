import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndPoint';
import { ERROR_ROUTE } from '../../constants/routes';

const makeRequest = async (apiEndPoint, navigate, dynamicConfig = {}) => {
    const token = localStorage.getItem('token');
    console.log(token);
    try {
        const requestDetails = {
            baseURL: BACKEND_URL,
            url: apiEndPoint.url,
            method: apiEndPoint.method,
            ...dynamicConfig,
            headers: {
                authorization: `Bearer ${token}`,
            }
        };
        const { data } = await axios(requestDetails);
        return data;
    } catch (e) {
        console.log(e);
        const errorStatus = e.response?.status;
        if (errorStatus) {
            navigate(`${ERROR_ROUTE}/${errorStatus}`);
        } else {
            navigate(ERROR_ROUTE);
        }
        return null;
    }
};

export default makeRequest;
