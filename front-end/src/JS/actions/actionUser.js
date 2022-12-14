import axios from 'axios'
import { GET_USERS } from '../constants/actionsTypes'

export const getUsers = () => (dispatch) => {
    axios.get("/api/users")
        .then(res => dispatch({ type: GET_USERS, payload: res.data }))
        .catch(err => console.log(err))

}