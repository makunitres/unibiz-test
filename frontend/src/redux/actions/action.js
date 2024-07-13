import axios from "axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actionTypes/actionType";

const apiUrl = process.env.REACT_APP_API_URL;

export const loginUser = (credentials, navigate) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const response = await axios.post(`${apiUrl}/login`, credentials);
        console.log('response', response)
        const data = response.data;
        console.log("data", data)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                user_name: data.user_name,
                role_name: data.role_name,
                pages_ids: data.pages_ids,
            }
        });

        if (data.role_name) {
            navigate('/user')
        }

    } catch (error) {
        dispatch({ type: LOGIN_FAILURE });
    }
};
