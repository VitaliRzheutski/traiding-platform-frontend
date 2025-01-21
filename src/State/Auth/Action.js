import axios from "axios"
import {
    REGISTER_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE
} from "./ActionTypes"

export const register = (userData) => async (dispatch) => {

    dispatch({ type: REGISTER_REQUEST })

    const baseUrl = "http://localhost:5454"

    try {
        const response = await axios.post(`${baseUrl}/auth/signup`, userData);
        const user = response.data;
        console.log("user:", user)

        dispatch({ type: REGISTER_SUCCESS, payload: user.jwt })
        try {
            localStorage.setItem("jwt", user.jwt);
        } catch (storageError) {
            console.error("Failed to save JWT in localStorage:", storageError);
        }

    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error.messsage })
        console.log(error);
    }
}

//figure this out,cant login with existing user
export const login = (userData) => async (dispatch) => {


    dispatch({ type: LOGIN_REQUEST })

    const baseUrl = "http://localhost:5454"

    try {
        console.log("!userData in Login:", userData)
        const response = await axios.post(`${baseUrl}/auth/signin`, userData);
        console.log("response in login:", response)
        const user = response.data;
        console.log("user in login:", user)

        dispatch({ type: LOGIN_SUCCESS, payload: user.jwt })
        try {
            localStorage.setItem("jwt", user.jwt);
        } catch (storageError) {
            console.error("Failed to save JWT in localStorage:", storageError);
        }

    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.messsage })
        console.log(error);
    }
}

export const getUser = (jwt) => async (dispatch) => {

    dispatch({ type: GET_USER_REQUEST })

    const baseUrl = "http://localhost:5454"

    try {
        const response = await axios.get(`${baseUrl}/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        const user = response.data;
        console.log("user:", user)

        dispatch({ type: GET_USER_SUCCESS, payload: user })


    } catch (error) {
        dispatch({ type: GET_USER_FAILURE, payload: error.messsage })
        console.log(error);
    }
}




