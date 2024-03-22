import "./App.css"
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Header from "./components/layout/Header"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import ContactID from "./pages/contactID"
import Services from "./pages/services"
import  Search  from "./components/layout/Search"


const router = createBrowserRouter(
[
  {
    path:"/",
    element:<Home/>,
    errorElement:<h1>Error 404 Site</h1>
  },
  {
    path:"/about",
    element: <About/>
  },

  {
    path:"/services",
    element: <Services/>
  },

  {
    path:"/contact",
    element:<Contact/>
  },

  {
    path:"/contact/:id",
    element:<ContactID/>
  },


])

function App() {
  return (
    <div className="flex gap-45">
    <Header/>
       <div className="dashboard_layout">
       <Search/>
       <RouterProvider router={router}/>
       </div>
    </div>

    );
}

export default App;
