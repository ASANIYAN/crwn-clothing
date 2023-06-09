import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./categories.styles.scss";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/"  element={<Navigation />} >
          <Route index  element={<Home />} />
          <Route path="shop/*" element={<Shop />} />  
          <Route path="auth" element={<Authentication />} />  
          <Route path="checkout" element={<Checkout />} />  
        </Route>
        
      </>
    )
    );

  return ( <RouterProvider router={router} /> )
}

export default App
