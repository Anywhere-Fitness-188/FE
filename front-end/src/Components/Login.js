import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
    username: yup.string().required('Please enter your username'),
    password: yup.string().required('Please enter your password'),
})

const URL = 'https://fittness.herokuapp.com/api/auth/login';



function Login(){

    const [user, setUser] = useState({username:'', password:''})
    const [disabled, setDisabled] = useState(true);

    const history = useHistory();


    const userInput = event=>{
        setUser({...user, [event.target.name]: event.target.value});//'...user' may be unneccesary?
    }

    const userLogin= event=>{
        event.preventDefault();
        axios.post(URL, user)
        .then(res=>{
            console.log(res.data);
            localStorage.setItem('token', res.data.token)
            alert(`Welcome ${user.username}!`);
            history.push('/fitness');
        })
        .catch(err=>{
            console.log(err.data);
        })
    }
    useEffect(()=>{
        schema.isValid(user).then(valid => setDisabled(!valid))
    }, [user])

    return(
       <div>
           <form onSubmit={userLogin}>
               <p>Login </p>
               <label>
                   Username:
                   <input type='text' name='username' onChange={userInput}/>
               </label><br/>
               <label>
                   Password:
                   <input type='password' name='password' onChange={userInput}/>
               </label><br/>
               <button disabled={disabled}>Log In</button>
           </form>
       </div>
    )
}

export default Login;
