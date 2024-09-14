import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Components/pages/Login";
import Home from "./Components/Home";
import Registration from "./Components/pages/Registration";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Error from './Components/pages/Error';
import Success from './Components/pages/Success';
import OrderHistory from './Components/OrderHistory';
import Review from './Components/pages/Review';
import Profile from './Components/Profile';
import Team from './Components/pages/Team';

import Book from "./Components/apis/Book";
import Mobile from "./Components/apis/Mobile";
import Appliances from "./Components/apis/Appliances";
import Bikes from "./Components/apis/Bikes";
import Grocery from "./Components/apis/Grocery";
import Toys from "./Components/apis/Toys";
import Electronics from "./Components/apis/Electronics";
import Fashion from "./Components/apis/Fashion";
import Furnitures from "./Components/apis/Furnitures";


import MobileDetails from './Components/apisDetails/MobileDetails';
import ApplianceDetails from './Components/apisDetails/ApplianceDetails';
import BikeDetails from './Components/apisDetails/BikeDetails';
import GroceryDetails from './Components/apisDetails/GroceryDetails';
import ToyDetails from "./Components/apisDetails/ToyDetails";
import ElectronicDetails from './Components/apisDetails/ElectronicDetails';
import FashionDetails from './Components/apisDetails/FashionDetails';
import FurnitureDetails from './Components/apisDetails/FurnitureDetails';
import BookDetails from "./Components/apisDetails/BookDetails";



function App() {
  return (
    <>

      <BrowserRouter>
     
      <ToastContainer/>

        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Registration" element={<Registration />}></Route>
          <Route path="/Home" element={<Home />}></Route>


          <Route path="/book" element={<><Navbar/><Book /><Footer/></>}></Route>
          <Route path="/mobile" element={<> <Navbar/> <Mobile /> <Footer/> </>}></Route>
          <Route path="/appliances" element={<> <Navbar/> <Appliances/> <Footer/> </> }></Route>
          <Route path="/bikes" element={ <> <Navbar/> <Bikes />  <Footer/> </> }></Route>
          <Route path="/grocery" element={ <>  <Navbar/> <Grocery />  <Footer/> </> }></Route>
          <Route path="/toys" element={  <> <Navbar/> <Toys /> <Footer/> </>  }></Route>
          <Route path="/electronics" element={  <> <Navbar/>  <Electronics /> <Footer/>  </> }></Route>
          <Route path="/Fashion" element={   <>  <Navbar/> <Fashion /> <Footer/>  </> }></Route>
          <Route path="/furnitures" element={   <> <Navbar/> <Furnitures /> <Footer/>  </>}></Route>
          <Route path="/bikes" element={  <> <Navbar/> <Bikes /> <Footer/>  </> }></Route>

       
         <Route path="/mobile/:productId" element={ <> <Navbar/>  <MobileDetails/> <Review/><Footer/> </> }></Route>
          <Route path="/appliances/:productId" element={ <>  <Navbar/> <ApplianceDetails /> <Review/> <Footer/> </> }></Route>
          <Route path="/grocery/:productId" element={  <> <Navbar/> <GroceryDetails /><Review/> <Footer/> </>  }></Route>
          <Route path="/toys/:productId" element={ <> <Navbar/> <ToyDetails /> <Review/> <Footer/> </> }></Route>
          <Route path="/electronics/:productId" element={   <> <Navbar/> <ElectronicDetails /><Review/> <Footer/> </> }></Route>
          <Route path="/Fashion/:productId" element={  <> <Navbar/> <FashionDetails /><Review/> <Footer/> </> }></Route>
          <Route path="/furnitures/:productId" element={  <>  <Navbar/>  <FurnitureDetails /> <Review/><Footer/> </> }></Route>
          <Route path="/bikes/:productId" element={  <> <Navbar/>  <BikeDetails /><Review/> <Footer/> </> }></Route>
          <Route path="/book/:productId" element={  <> <Navbar/>  <BookDetails /><Review/> <Footer/>  </> }></Route>

          <Route path="/cart" element={<> <Navbar/>  <Cart />  </>}></Route>
          <Route path="/checkout" element={<> <Navbar/>  <Checkout /> <Footer/> </>}></Route>
          <Route path="*" element={<Error/>}></Route>
          <Route path="/orders" element={ <> <Navbar/> <OrderHistory/> <Footer/> </> }></Route>
          <Route path="/success" element={  <Success/>  }></Route>
          <Route path="/profile" element={ <> <Navbar/> <Profile/> <Footer/> </> }></Route>
          <Route path="/team" element={ <> <Team/>  </> }></Route>
         

        </Routes>

      
      </BrowserRouter>
    </>
  );
}

export default App;
