import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
    username: yup.string().required().min(5),
    password: yup.string().required().min(5)
})

function Register(){

    const [user, setUser] = useState({username:'', password:'', type:''})
    const [disabled, setDisabled] = useState(true);

    const userInput = event =>{
        setUser({...user, [event.target.name]: event.target.value})
    }

    const registerNewUser = event =>{
        event.preventDefault();
        const newUser = {
            username: user.username,
            password: user.password,
            type: user.type,
        }
        axios.post('URL', newUser)
        .then(res =>{
            console.log(res.data);
        })
        .catch(err =>{
            console.log(err)
        })
    }

    useEffect(()=>{
        schema.isValid(user).then(valid => setDisabled(!valid));
    }, [user])

    return(

        <div>
            <form onSubmit={registerNewUser}>
                <label>
                    Username:
                    <input type='text' name='username' onChange={userInput}/>
                </label><br/>
                <label >
                    Password:
                    <input type='text' name='password' onChange={userInput}/>
                </label><br/>
                <label>
                    {/* Should this maybe be a checkbox or selection dropdown instead of a string? */}
                    Client or Instructor? 
                    <input type='text' name='type' onChange={userInput}/>
                </label><br/>
                <label>
                    New User?
                    <button disabled={disabled} onClick={()=>alert(`Thank you ${user.username} for enrolling!`)}>Register</button><br/>
                    Already a Member?
                    <button>Login</button>
                </label>
               
            </form>
        </div>
    )
}

export default Register
