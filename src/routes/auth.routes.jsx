import { Route, Routes } from "react-router-dom";

import {SingIn} from "../pages/SingIn/SingIn";
import {SingUp} from "../pages/SingUp/SingUp";

export function AuthRoutes(){
return (

    <Routes>
        <Route path="/" element={<SingIn/>}/>
        <Route path="/register" element={<SingUp/>}/>
    </Routes>
)


}