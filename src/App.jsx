import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./categories.styles.scss";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/"  element={<Navigation />} >
          <Route index  element={<Home />} />
          <Route path="shop" element={<div>I am the shop</div>} />  
          <Route path="sign-in" element={<SignIn />} />  
        </Route>
        
      </>
    )
    );

  return ( <RouterProvider router={router} /> )
}

export default App
