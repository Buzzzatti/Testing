import * as types from './types';

export const loading = (bool = false) => ({
   type: types.LOADING,
   payload: bool
});

export const loadPhotos = (start = 1, limit = 100, query = {}) => ({
    type: types.LOAD_PHOTOS,
    payload: { start, limit, query }
});

export const loadedPhotos = (data) => ({
    type: types.LOADED_PHOTOS,
    payload: data
});

export const loadUsers = () => ({
    type: types.LOAD_USERS
});

export const loadedUsers = (data) => ({
    type: types.LOADED_USERS,
    payload: data
});

// export const loadUser = () => ({
//     type: types.LOAD_USER,
// });
//
// export const loadedUser= (data) => ({
//     type: types.LOADED_USER,
//     payload:data
// })