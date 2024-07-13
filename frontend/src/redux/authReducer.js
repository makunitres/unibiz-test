import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes/actionType";

const initialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    name: '',
    role: '',
    pageIds: []
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isAuth: false,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth: true,
                name: payload.user_name,
                role: payload.role_name,
                pageIds: payload.pages_ids,
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isAuth: false,
            };

        default:
            return state;
    }
};
