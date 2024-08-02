import {useEffect, useState} from "react";
import axios from "axios";
import {Outlet, useNavigate} from "react-router";
export default function Student() {
    const [listStudents, setListStudents] = useState([]);
    const [searchStu, setSearchStu] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3000/students').then(res => {
            console.log(res.data)
            setListStudents(res.data)
        })
    }, []);
    const filterStudents = listStudents.filter((stu) => {
        const searchStudentName = stu.name.toLowerCase().includes(searchStu.toLowerCase());
        console.log(searchStu)
        return searchStudentName
    })
    return (
        <>
            <button onClick={()=>{
                navigate('/')
            }}>Home</button>
            <h2>List Students</h2>
            <input onChange={(eName) => {
                setSearchStu(eName.target.value)
            }} placeholder={'Search students by name'}/>
            <button onClick={() => {
                const sortByScoreIn = [...listStudents].sort((a, b) => a.score - b.score)
                setListStudents(sortByScoreIn)
            }}>Sắp xếp tăng dần theo điểm
            </button>
            <button onClick={()=>{
                const sortByScoreDe = [...listStudents].sort((a, b) => b.score - a.score)
                setListStudents(sortByScoreDe)
            }}>Sắp xếp giảm dần theo điểm</button>
            
            <Outlet/>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Action</th>
                    <th>Score</th>
                </tr>
                {filterStudents.map((fStudent, index ) => (
                    <tr>
                        <td>{index+1}</td>
                        <td>{fStudent.name}</td>
                        <td>{fStudent.description}</td>
                        <td>{fStudent.action}</td>
                        <td>{fStudent.score}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}