// This file will be our endpoints
import axios from 'axios'
const baseURL = 'https://bwuback.herokuapp.com/project'
// http://localhost:3001/project


//get
export const getbwus = () => {
    const URL = baseURL 
    const response = axios.get(URL)
    return response
}
//show
export const getbwu = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}
//delete
export const deletebwu = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}
//edit
export const editbwu = (id, updatedbwu) => {
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