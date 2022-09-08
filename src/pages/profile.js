import {getbwus,deletebwu} from '../services/bwu-api'
import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'


//use effect works better?

export default function Profile() {
    const nav = useNavigate()
    const { id } = useParams()
    const [bwu, setBwu] = useState([])
    
    useEffect(()=>{
        getbwus()
        .then(res => setBwu(res.data))
    },[])

    const deleteTheBwu = (id) =>{
        deletebwu(id) // service in bwu-api
        nav('/profile') // take us back to home screen
    }
    console.log(bwu)
    return (

        <div>
            <div>Profile Image</div>
            <div>Fake about</div>
            <a href='/create'>Create</a>
            <div>
                <div>Img1</div>
                <div>Img2</div>
                <div>Img3</div>
            </div>
        <ul>
        {bwu.map((bwu) => {
            return (
            <li>
                <a href={`/${bwu._id}`}>{bwu.title}</a>
               
                {/* <button onClick={deleteTheBwu}>Delete</button> */}
            </li>
            )
        })}
        
        </ul>

    </div>
    )

}
//doesnt delete 
//when clicked doesnt show
//doesnt update



