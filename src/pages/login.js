
import { useNavigate } from "react-router-dom"
import {createTodo} from '../src/services/todos-api'

function Login() {
    const nav = useNavigate()

    const createTheTodo = (e) => {
        const todo = {description: e.target.description.value, complete: false}
        createTodo(todo)
        nav('/')
    }

return(
    <div>
        <h1>Create a Todo</h1>
        <form onSubmit={createTheTodo}>
            <h3>Username</h3>
            <input type='text' name='description' id='dsc'/>
            <h3>Password</h3>
            <input type='text' name='description' id='dsc'/>
            <input type='submit' href='/:id'/>
        </form>
    </div>
)
}

export default Login