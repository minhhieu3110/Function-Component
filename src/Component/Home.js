import {Link} from "react-router-dom";
import {Outlet, useNavigate} from "react-router";
import {useState} from "react";

export default function Home(){
    const [content,setContent]=useState('Home');
    const navigate = useNavigate();
    const clickLink = () =>{
        setContent('')
    }
    const clickBtn =()=>{
        setContent('Home')
    }
    return(
        <>
            <nav>
                <ul>
                    <li><Link to='/products' onClick={clickLink}>Product</Link></li>
                    <li><Link to='/countries' onClick={clickLink}>Countries</Link></li>
                    <li><Link to='/students' onClick={clickLink}>Students</Link></li>
                    <li><Link to='/login' onClick={clickLink}>Logout</Link></li>
                </ul>
            </nav>
            {content && <h2 style={{textAlign: 'center', color: 'red'}}>{content}</h2>}
            <Outlet/>
        </>
    )
}