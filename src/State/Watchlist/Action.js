import api from "@/config/api";
import * as types from "./ActionTypes"

export const getUserWatchlist = (jwt) => async (dispacth) => {


    dispacth({ type: types.GET_USER_WATCHLIST_REQUEST })

    try {
        const response = await api.get('/api/watchlist/user', {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        });
        dispacth({
            type: types.GET_USER_WATCHLIST_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        console.log("error", error)
        dispacth({
            type: types.GET_USER_WATCHLIST_FAILURE,
            error: error.message,
        })
    }

}

export const addItemToWatchlist = ({ jwt, coinId }) => async (dispacth) => {
    dispacth({ type: types.ADD_COIN_TO_WATCHLIST_REQUEST })

    try {
        const response = await api.patch(`/api/watchlist/add/coin/${coinId}`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        });
        dispacth({
            type: types.ADD_COIN_TO_WATCHLIST_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        console.log("error", error.response);
        dispacth({
            type: types.ADD_COIN_TO_WATCHLIST_FAILURE,
            error: error.message,
        })
    }

}