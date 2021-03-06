import { GET_ORDER, GET_ORDER_ID, PUT_ORDER, FILTER_ORDER, POST_NEW_ORDER, GET_PAY } from '../types/index'
import axios from 'axios'
const url = process.env.REACT_APP_URL


export const getAllOrder = (id) => {
    return async function dispatch(dispatch) {
        const response = await axios.get(`${url}/order`);
        const r = response.data;    
        dispatch({
            type: GET_ORDER,
            payload:r
        });
    }
}

export const getOrderId = (id) => {
    return async function dispatch(dispatch) {
        const response = await axios.get(`${url}/order/${id}`);
        const r = response.data; 
        dispatch({
            type: GET_ORDER_ID,
            payload:r
        });
    }
}

export const putOrderId = (id, state) => {
    return async function dispatch(dispatch) {
        console.log("put" + id)
        console.log("pu" + state)
        const response = await fetch(`${url}/order/put/${id.toString()}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                state: state,
            }),
            headers: {
                'content-type': 'application/json',
            },
        })

        const r = response;
        dispatch({
            type: PUT_ORDER,
            payload:r
        });
    }
}


export const postOrder = ( date, total, userId, artworksId, image  ) => {
    
    return async function dispatch(dispatch) {
        const response = await fetch(`${url}/order/post`, {
            method: 'POST',
            body: JSON.stringify({
                state: "creada",
                date: date,
                credit_card: "200000",
                total: total,
                userId:userId,
                artworksId:artworksId,
                image:image,
            }),
            headers: {
                'content-type': 'application/json',
            },
        })

        const r = response;
        dispatch({
            type: POST_NEW_ORDER,
            payload:r
        });
    }
}

export const filterState = (e, u) => {
    return async function dispatch(dispatch) {
        const response = await axios.get(`${url}/order`);
        const json = response.data;
        var filtro =json.filter((f)=>f.state === e)
        if(u) filtro = filtro.filter(f=>f.userId === u)

        dispatch({
            type: FILTER_ORDER,
            payload:filtro
        });
    }
}

export const getPay = (id) => {
    return async function dispatch(dispatch) {
        const response = await axios.get(`${url}/payment/db/${id}`);
        const r = response.data;    
        dispatch({
            type: GET_PAY,
            payload:r
        });
    }
}