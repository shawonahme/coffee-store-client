import { createBrowserRouter } from "react-router-dom";
import Coffee from "./allComponents/Coffee";
import AddCoffee from "./allComponents/AddCoffee";
import CoffeeCards from "./allComponents/CoffeeCards";
import Details from "./allComponents/Details";
import UpdateCoffee from "./allComponents/UpdateCoffee";
import SignIn from "./allComponents/SignIn";
import SignUp from "./allComponents/SignUp";
import User from "./allComponents/User";

export const router = createBrowserRouter([
    {
      path:'/',
      element: <Coffee></Coffee>,
      children:[
        {
          path:'/addcoffee',
          element: <AddCoffee></AddCoffee>
        },
        {
          path:'/',
          element: <CoffeeCards></CoffeeCards>,
          loader: ()=> fetch('https://coffee-store-server-3ni3.onrender.com/users')
        },
        {
          path:'/Details/:id',
          element:<Details></Details>,
          loader: ({params})=> fetch(`https://coffee-store-server-3ni3.onrender.com/users/${params.id}`)

          

        }
        ,
        {
          path:'/update/:id',
          element:<UpdateCoffee></UpdateCoffee>,
          loader:({params})=> fetch(`https://coffee-store-server-3ni3.onrender.com/users/${params.id}`)
        },
        {
          path:'/login',
          element:<SignIn></SignIn>
        },
        {
          path:'/signUp',
          element: <SignUp></SignUp>
        },
        {
          path:'/users',
          element: <User></User>,
          loader:()=> fetch('https://coffee-store-server-3ni3.onrender.com/userInfo')
        }
      
  
      ]
    },
  
])