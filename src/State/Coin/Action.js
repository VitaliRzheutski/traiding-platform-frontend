import api, { API_BASE_URL } from "@/config/api";
import { FETCH_COIN_BY_ID_FAILURE, FETCH_COIN_BY_ID_REQUEST, FETCH_COIN_BY_ID_SUCCESS, FETCH_COIN_LIST_REQUEST, FETCH_COIN_LIST_SUCCESS, FETCH_MARKET_CHART_FAILURE, FETCH_MARKET_CHART_REQUEST, FETCH_MARKET_CHART_SUCCESS, FETCH_TOP_50_COINS_FAILURE, FETCH_TOP_50_COINS_REQUEST, FETCH_TOP_50_COINS_SUCCESS, SEARCH_COIN_FAILURE, SEARCH_COIN_REQUEST, SEARCH_COIN_SUCCESS } from "./ActionType";
import axios from "axios"

export const getCoinList = (page) => async (dispatch) => {

    dispatch({ type: FETCH_COIN_LIST_REQUEST })


    try {
        const { data } = await axios.get(`${API_BASE_URL}/coins?page=${page}`);
        console.log("coin list:", data)

        dispatch({ type: FETCH_COIN_LIST_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: FETCH_COIN_BY_ID_FAILURE, payload: error.messsage })
        console.log(error);
    }
}

export const get50CoinList = () => async (dispatch) => {

    dispatch({ type: FETCH_TOP_50_COINS_REQUEST })

    try {
        const { data } = await axios.get(`${API_BASE_URL}/coins/top50`);
        console.log("top50:", data)

        dispatch({ type: FETCH_TOP_50_COINS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: FETCH_TOP_50_COINS_FAILURE, payload: error.messsage })
        console.log(error);
    }
}

export const fetchMarketChart = (coinId, days, jwt) => async (dispatch) => {

    dispatch({ type: FETCH_MARKET_CHART_REQUEST })

    try {
        const { response } = await api.get(`/coins/${coinId}/chart?days=${days}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        console.log("fetchMarketChart:", response)

        dispatch({ type: FETCH_MARKET_CHART_SUCCESS, payload: response.data })

    } catch (error) {
        dispatch({ type: FETCH_MARKET_CHART_FAILURE, payload: error.messsage })
        console.log(error);
    }
}

export const fetchCoinById = (coinId) => async (dispatch) => {

    dispatch({ type: FETCH_COIN_BY_ID_REQUEST })

    try {
        const { response } = await axios.get(`${API_BASE_URL}/coins/${coinId}`);
        console.log("fetchCoinById:", response)

        dispatch({ type: FETCH_COIN_BY_ID_SUCCESS, payload: response.data })

    } catch (error) {
        dispatch({ type: FETCH_COIN_BY_ID_FAILURE, payload: error.messsage })
        console.log(error);
    }
}



export const fetchCoinDetails = ({ coinId, jwt }) => async (dispatch) => {
    dispatch({ type: FETCH_COIN_BY_ID_REQUEST });

    try {
        const { data } = await axios.get(`${API_BASE_URL}/coins/details/${coinId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });

        dispatch({ type: FETCH_COIN_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: FETCH_COIN_BY_ID_FAILURE,
            payload: error.message || "Something went wrong",
        });
    }
};

export const searchCoin = (keyword) => async (dispatch) => {

    dispatch({ type: SEARCH_COIN_REQUEST })

    try {
        const { response } = await api.get(`/coins/search?q=${keyword}`);
        console.log("searchCoin:", response)

        dispatch({ type: SEARCH_COIN_SUCCESS, payload: response.data })

    } catch (error) {
        dispatch({ type: SEARCH_COIN_FAILURE, payload: error.messsage })
        console.log(error);
    }
}
