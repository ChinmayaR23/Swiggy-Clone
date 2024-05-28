import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import About from "./components/About"
import { createBrowserRouter , RouterProvider} from "react-router-dom";

/*
conflict based ui

header
-logo 
-home
-about us
-contact
body 
- Res cards

-- swiggy api fetch
--dynamic ui / conflict based ui


footer




*/



const App = ()=>
{
    return(
        <div className="App-compo">
            <Header/>
            <Body/>
        </div>
        
    )


}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App/>
    }
    ,
    {
        path : "/about",
        element : <About/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>)