import {useState} from "react";
import {useNavigate} from "react-router";

export default function  Product(){
    let [arrProduct, setArrProduct] = useState([
        {id: 1, name: "Bánh", quantity: 100, price: 3600},
        {id: 2, name: "Kẹo", quantity: 200, price: 2000},
    ])
    let [newArrProduct, setNewArrProduct] = useState({id:'', name:'', quantity:'', price:''})
    const navigate = useNavigate();
    const change =(e)=>{
        const {name,value} = e.target;
        setNewArrProduct((newArrPro) =>({
            ...newArrPro,[name]: value
        }))
    }
    let addProduct =() =>{
        setArrProduct([...arrProduct,newArrProduct])
        setNewArrProduct({id:'', name:'', quantity:'', price:''})
        console.log(newArrProduct)
        
    }
    return(
        <>
            <button onClick={()=>{
                navigate('/')
            }}>Home</button>
            <h2>Danh sách sản phẩm</h2>
            <input name = 'id' value={newArrProduct.id} onChange={change} placeholder={'Id'}/>
            <input name = 'name' value={newArrProduct.name} onChange={change} placeholder={'Name'}/>
            <input name = 'quantity' value={newArrProduct.quantity} onChange={change} placeholder={'Quantity'}/>
            <input name = 'price' value={newArrProduct.price} onChange={change} placeholder={'Price'}/>
            <button onClick={addProduct}>Thêm sản phẩm</button>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                {arrProduct.map(product => (
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}