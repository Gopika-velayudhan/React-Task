import { Routes,Route } from "react-router-dom";
// import { Home } from "./Component/Home";
import { About } from "./Component/About";
import { Navbar } from "./Component/Navbar";
import { OrderSummary } from "./Component/orderSummary";
import { NoMatch } from "./Component/NoMatch";
import Products from "./Component/Products";
import Feature from "./Component/feature";
import {New} from './Component/New'
import { Users } from "./Component/Users";
import { UserDetail } from "./Component/UserDetail";
import Admin from "./Component/admin";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      {/* <Route path = '/' element ={<Home/>}/> */}
      <Route path="about" element={<About/>}/>
      <Route path = 'order-summary' element={<OrderSummary/>}/>
      <Route path="products" element = {<Products/>}>
        {/* <Route index element={<Feature/>}/> */}
        <Route path="featured" element={<Feature/>}/>
        <Route path="new" element = {<New/>}/>
      </Route>
      <Route path="Users" element = {<Users/>}/>
      <Route path=":userId" element = {<UserDetail/>}>
      <Route path="Admin" element = {<Admin/>}/>
      </Route>
      <Route path="*" element = {<NoMatch/>}/>
      
     
       
      
    </Routes>
    </>  
    
  );
}

export default App;
