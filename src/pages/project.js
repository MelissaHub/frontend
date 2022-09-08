import { getbwu, deletebwu, editbwu } from '../services/bwu-api'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

//show projects
const Project = () => {
    const nav = useNavigate()
    const { id } = useParams()
    const [bwu, setBwu] = useState({})

    useEffect(() => {
        getbwu(id)
        .then(res => setBwu(res.data))
    }, [])

    const deleteTheBwu = () => {
        deletebwu(id) // service in todos-api
        nav(`/profile`) // take us back to home screen
    }
    // const editTheBwu = () => {
    //     editbwu(id) // service in todos-api
    //     nav(`/edit/${id}`) // take us back to home screen
    // }


    return (
        <div>
            <div>
                <h3>{bwu.title}This Is Supposed to Have Title</h3>
                <p>{bwu.description}This Is Supposed to Have Example</p>
                <ul>
                    <a><img src={bwu.img1}/>Image one is here</a>
             
                    <a><img src={bwu.img2}/>Image two is here</a>

                    <a><img src={bwu.img3}/>Image three is here</a>

                </ul>
                 
                <button onClick={deleteTheBwu}>Delete Project</button>
            </div>
            <button onClick={() => {nav(`/${id}/edit`)}}>This is supposed to redirect to edit</button>
        </div>
    )
}
//want imaegs to pop up?
export default Project