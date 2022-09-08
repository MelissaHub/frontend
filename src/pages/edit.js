// useParams,
import {useState, useEffect} from 'react'
import {editbwu, getbwus } from '../services/bwu-api'
import {useNavigate, useParams} from 'react-router-dom'

function Edit() {
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getbwus(id) // get the todo that matches this id
        .then(res => setData(res.data)) // updating the state to the todo we get back
    }, []) // prevent a continous loop

    const editThebwu = (e) => {
        const updatedbwu = {title: e.target.title.value, description: e.target.description.value, img1: e.target.img.value, img2: e.target.img.value, img3: e.target.img.value,}
        editbwu (id, updatedbwu)
          nav(`/${id}`)
    }

return(
    <div class="mb-3">
        <h1>Create Project</h1>
        <form onSubmit={editThebwu}>
        Title:<input type='text' name='title' id='dsc'  />
                Info:<textarea class="form-control" type='textbox' name='description' defaultValue={data.description} rows="3" />
                Image 1 Link:<input type='text' name='img1' id='dsc'  />
                Image 2 Link: <input type='text' name='img2' id='dsc'  />
                Image 3 Link: <input type='text' name='img3' id='dsc'   />
            <input type='submit' onClick={() => {nav(`/profile`)}}/>
        </form>
    </div>
)
}

export default Edit