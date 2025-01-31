import api from "@/config/api";
import * as types from "./ActionTypes"

export const getAssetById = ({ assetId, jwt }) => async (dispatch) => {
    dispatch({ type: types.GET_ASSET_REQUEST });

    try {
        const response = await api.get(`api/asset/${assetId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        dispatch({
            type: types.GET_ASSET_SUCCESS,
            payload: response.data,
        });
        console.log("!get asset by id", response.data)
    } catch (error) {
        dispatch({
            type: types.GET_ASSET_FAILURE,
            error: error,
        })
    }
}


export const getAssetDetails = ({ coinId, jwt }) => async (dispatch) => {
    dispatch({ type: types.GET_ASSET_DETAILS_REQUEST });

    try {
        const response = await api.get(`api/asset/coin/${coinId}/user`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        dispatch({
            type: types.GET_ASSET_DETAILS_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: types.GET_ASSET_DETAILS_FAILURE,
            error: error.message,
        })
    }
}

export const getUserAsset = (jwt) => async (dispatch) => {
    dispatch({ type: types.GET_USER_ASSETS_REQUEST });

    try {
        const response = await api.get(`api/asset`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        dispatch({
            type: types.GET_USER_ASSETS_SUCCESS,
            payload: response.data,
        });
        console.log("!user assets", response.data)
    } catch (error) {
        dispatch({
            type: types.GET_USER_ASSETS_FAILURE,
            error: error.message,
        })
    }
}