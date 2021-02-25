import React, { useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
    username: yup.string().required('Please enter your username'),
    password: yup.string().required('Please enter your password'),
})


function Login(){

    const [user, setUser] = useState({username:'', password:''})
    const [disabled, setDisabled] = useState(true);


    const userInput = event=>{
        setUser({...user, [event.target.name]: event.target.value});
    }

    useEffect(()=>{
        schema.isValid(user).then(valid => setDisabled(!valid))
    }, [user])

    return(
       <div>
           <form>
               <label>
                   Username:
                   <input type='text' name='username' onChange={userInput}/>
               </label><br/>
               <label>
                   Password:
                   <input type='text' name='password' onChange={userInput}/>
               </label><br/>
               <button disabled={disabled}>Log In</button>
           </form>
       </div>
    )
}

export default Login;
