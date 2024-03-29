import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { 
  createuserDocumentFromAuth, 
  onAuthStateChangedListener 
} from "./utils/firebase/firebase.utils";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user.action";

import "./categories.styles.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
            createuserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    }) 

    return unsubscribe;
}, []);


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
