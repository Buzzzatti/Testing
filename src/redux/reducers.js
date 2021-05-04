import * as types from './types';

const initialState = {
    loading: false,
    photos: {
        data: [],
        meta: {
            last_page: 0
        }
    },
    users: {}
};

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case types.LOADING:
            return {
                ...state,
                loading: payload
            }
        case types.LOADED_PHOTOS:
            return {
                ...state,
                photos: {
                    ...state.photos,
                    ...state.photos.data,
                    data: [
                        ...payload
                    ]
                }
            }
        case types.LOADED_USERS:
            return {
                ...state,
                users: payload
            }
        // case types.LOADED_USER:
        //     return{
        //         ...state,
        //         users: payload
        //     }
        default:
            return state;
    }
};