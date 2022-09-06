// This file will be our endpoints
import axios from 'axios'
const baseURL = 'https://backexpress.herokuapp.com/bwu'

export const getbwus = () => {
    const URL = baseURL 
    const response = axios.get(URL)
    return response
}

export const getbwu = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

export const deletbwu = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}
//edit
export const editbwu = (id, updatedTodo) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedbwu)
    return response
}
//create
export const createbwu = (bwu)=> { 
    const URL = baseURL 
    const response = axios.post(URL, bwu)
    return response
}