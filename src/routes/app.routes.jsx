import { Route, Routes } from "react-router-dom";

import { NewNote } from "../pages/NewNote/NewNote";
import { Home }  from "../pages/home/index";
import { Profile } from "../pages/Profile/Profile";
import {Details} from "../pages/Details/Details";


export function AppRoutes(){
return (

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<NewNote/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/details/:id" element={<Details/>}/>
 
    </Routes>
)


}