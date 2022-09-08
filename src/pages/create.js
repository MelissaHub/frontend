// useParams,
import { useNavigate } from "react-router-dom"
import { createbwu } from '../services/bwu-api'

function Create() {
    const nav = useNavigate()
    // const {id} = useParams()


    const createThebwu = (e) => {
        const bwu = { title: e.target.title.value, description: e.target.description.value,
             img1: e.target.img1.value, img2: e.target.img2.value, img3: e.target.img3.value, }
        createbwu(bwu)
        console.log(bwu)
        nav('/profile')
    }

    return (
        <div  className="mb-3">
           
            <h1>Create Project</h1>
            <form onSubmit={createThebwu}>
                Title:<input type='text' name='title' id='dsc'  placeholder="Title" />
                Info:<textarea class="form-control" type='textbox' name='description' id='dsc'  placeholder="What is the Pitch?" rows="3" />
                Image 1 Link:<input type='text' name='img1' id='dsc'  placeholder="name@example.com"/>
                Image 2 Link: <input type='text' name='img2' id='dsc'  placeholder="name@example.com" />
                Image 3 Link: <input type='text' name='img3' id='dsc'  placeholder="name@example.com" />

                <div class="col-auto">
                <button type='submit' class="btn btn-primary mb-3" onClick={createThebwu}>Submit</button>
                </div>
                
            </form>
        </div>
    )
}
//after submit it does not update list in profile

export default Create