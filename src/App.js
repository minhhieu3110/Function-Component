import './App.css';
import {Route, Routes} from "react-router-dom";
import Product from "./Component/Product";
import Countries from "./Component/Countries";
import Student from "./Component/Student";
import Home from "./Component/Home";
import Login from "./Form/Login";
import Register from "./Form/Register";

function App() {
  return (
      <>
          
          <Routes>
              <Route path={'/login'} element={<Login/>}/>
              <Route path={'/register'} element={<Register/>}/>
              <Route path={'/'} element={<Home/>}>
                  <Route path={'/products'} element={<Product/>}/>
                  <Route path={'/countries'} element={<Countries/>}/>
                  <Route path={'/students'} element={<Student/>}/>
              </Route>
          </Routes>
      </>
  );
}

export default App;
