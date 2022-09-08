// useParams,
import { useNavigate } from "react-router-dom"
import { createbwu } from '../services/bwu-api'

function Create() {
    const nav = useNavigate()
    // const {id} = useParams()


    const createThebwu = (e) => {
        const bwu = { title: e.target.title.value, description: e.target.description.value, img1: e.target.img.value, img2: e.target.img.value, img3: e.target.img.value, }
        createbwu(bwu)
        nav('/project')
    }

    return (
        <div>
            <h1>Create Project</h1>
            <form onSubmit={createThebwu}>
                Title:<input type='text' name='title' id='dsc' />
                Info:<input type='textbox' name='description' id='dsc' />
                Image 1 Link:<input type='text' name='img1' id='dsc' />
                Image 2 Link: <input type='text' name='img2' id='dsc' />
                Image 3 Link: <input type='text' name='img3' id='dsc' />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Create