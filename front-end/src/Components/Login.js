import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import CreateEvent from "./CreateEvent";
import { CreateEventContext } from "../context/CreateEventContext";

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

const URL = "https://fittness.herokuapp.com/api/auth/login";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [disabled, setDisabled] = useState(true);
  const { userId, setUserId } = useContext(CreateEventContext);
  // const [userId, setUserId] = useState();

  const history = useHistory();

  const userInput = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value }); //'...user' may be unneccesary?
  };

  const userLogin = (event) => {
    event.preventDefault();
    axios
      .post(URL, user)
      .then((res) => {
        console.log(res.data, "LOGIN");
        setUserId(res.data.user_id);
        localStorage.setItem("token", res.data.token);
        alert(`Welcome ${user.username}!`);
        setTimeout(() => {
          history.push("/fitness");
        }, 5000);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };
  console.log(userId, "USERID");
  useEffect(() => {
    schema.isValid(user).then((valid) => setDisabled(!valid));
  }, [user]);

  return (
    <CreateEventContext.Provider value={{ userId }}>
      <div>
        <form onSubmit={userLogin}>
          <p>Login </p>
          <label>
            Username:
            <input type="text" name="username" onChange={userInput} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" onChange={userInput} />
          </label>
          <br />
          <button disabled={disabled}>Log In</button>
        </form>
        <CreateEvent />
      </div>
    </CreateEventContext.Provider>
  );
};

export default Login;
