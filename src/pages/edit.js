// useParams,
import { useState, useEffect } from 'react'
import { editbwu, getbwu } from '../services/bwu-api'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
    const { id } = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getbwu(id) // get the todo that matches this id
            .then(res => setData(res.data)) // updating the state to the todo we get back
    }, []) // prevent a continous loop

    const editThebwu = (e) => {
        e.preventDefault()
        const updatedbwu = {
            title: e.target.title.value,
            description: e.target.description.value,
            img1: e.target.img1.value, img2: e.target.img2.value, img3: e.target.img3.value
        }
        console.log(updatedbwu)
        editbwu(id, updatedbwu)
        nav(`/${id}`)
    }

    return (
        <div className="mb-3">
            <h1>Edit Project</h1>
            <form onSubmit={editThebwu}>
                Title:<input type='text' name='title' defaultValue={data.title} />
                Info:<textarea className="form-control" type='textbox'
                 name='description' defaultValue={data.description} rows="3" />
                Image 1 Link:<input type='text' name='img1' defaultValue={data.img1} /> 
                Image 2 Link: <input type='text' name='img2' defaultValue={data.img2} />
                Image 3 Link: <input type='text' name='img3' defaultValue={data.img3} />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Edit