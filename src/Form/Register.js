import {useNavigate} from "react-router";

export  default function Register(){
    const navigate = useNavigate();
    return(
        <>
            <center>
                <div className="registerForm">
                    <h4>Register</h4>
                    <input placeholder={'Username'}/>
                    <br/><br/>
                    <input type="password" placeholder={'Password'}/>
                    <br/>
                    <button>Register</button>
                    <button onClick={()=>{
                        navigate('/login')
                    }}>Login</button>
                </div>
            </center>
        </>
    )
}