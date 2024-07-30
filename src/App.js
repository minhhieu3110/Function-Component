import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Product from "./Component/Product";
import Countries from "./Component/Countries";
import Students from "./Component/Student";

function App() {
  return (
    <>
        <nav>
            <ul>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/countries">Countries</Link></li>
                <li><Link to="/students">Students</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path={'/product'} element={<Product/>}/>
            <Route path={'/countries'} element={<Countries/>}/>
            <Route path={'/students'} element={<Students/>}/>
        </Routes>
    </>
  );
}

export default App;
