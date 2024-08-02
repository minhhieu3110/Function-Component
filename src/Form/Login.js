import React, {useState} from "react";
import {useNavigate} from "react-router";

export default function Login(){
    const [account,setAccount] = useState([
        {username: "admin", password: "admin"},
    ]);
    const [login,setLogin] = useState({username: "", password: ""});
    const [error,setError] = useState('');
    const navigate = useNavigate();
    const clickLogin =() =>{
        const dataAccount = account.find((acc) => acc.username === login.username && acc.password === login.password
        )
        dataAccount ? navigate('/') : setError('Username & Password Invalid')
    }
    return(
        <>
            <center>
                <div className="loginForm">
                    <h4>Login</h4>
                    <input onChange={(e) => {
                        setLogin({...login, username: e.target.value})
                    }} placeholder={'Username'}/>
                    <br/><br/>
                    <input type="password" onChange={(e) => {
                        setLogin({...login, password: e.target.value})
                    }} placeholder={'Password'}/>
                    <br/>
                    {error && <center>
                        <p style={{color: 'red'}}>{error}</p>
                    </center>}
                    <button onClick={clickLogin}>Login</button>
                    <button onClick={() =>{
                        navigate('/register')
                    }}>Register</button>
                </div>
            </center>
        </>
    )
}