import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
    username: yup.string().required().min(5),
    password: yup.string().required().min(5),
    type: yup.string().oneOf(['client', 'instructor'])
})

const registerURL = 'https://fittness.herokuapp.com/api/auth/register'

function Register(){

    const [user, setUser] = useState({username:'', password:'', type:''})
    const [disabled, setDisabled] = useState(true);

    const history = useHistory();

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
        axios.post(registerURL, newUser)
        .then(res =>{
            console.log('ab: Register.js: registerNewUser: axios.then: res:',res, newUser);
            alert(`Thank you ${user.username} for enrolling!`);
            history.push('/fitness');
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
                <p>Register New User</p>
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
                    <select name='type' onChange={userInput}>
                        <option value='none'>---Please Select---</option>
                        <option value='client'>Client</option>
                        <option value='instructor'>Instructor</option>
                    </select>
                </label><br/>
                <label>
                    New User?
                    <button disabled={disabled}>Register</button><br/>
                    Already a Member?
                    <button>Login</button>
                </label>
               
            </form>
        </div>
    )
}

export default Register
