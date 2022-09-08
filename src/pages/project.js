import { getbwus, deletebwu } from '../services/bwu-api'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

//show projects
const Project = () => {
    const nav = useNavigate()
    const { id } = useParams()
    const [bwu, setBwu] = useState({})

    useEffect(() => {
        getbwus(id)
        .then(res => setBwu(res.data))
    }, [])

    const deleteTheBwu = () => {
        deletebwu(id) // service in todos-api
        nav('/:id') // take us back to home screen
    }


    return (
        <div>
            <div>
                <h1>{bwu.title}</h1>
                <p>{bwu.description}</p>
                <ul>
                    <a>{bwu.img1}</a>
                    <button onClick={() => { deleteTheBwu(`/${bwu.img1}/`) }}>Delete</button>
                    <a>{bwu.img2}</a>
                    <button onClick={() => { deleteTheBwu(`/${bwu.img2}/`) }}>Delete</button>
                    <a>{bwu.img3}</a>
                    <button onClick={() => { deleteTheBwu(`/${bwu.img3}/`) }}>Delete</button>

                </ul>
            </div>
            <button onClick={() => { nav(`/${id}/edit`) }}>Edit</button>
        </div>
    )
}
//want imaegs to pop up?
export default Project