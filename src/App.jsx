import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./pages/Login";
import List from "./pages/List";
import ProtectedRoute from "./components/ProtectedRoute";
import Analytics from "./pages/Analytics";
import Details from "./pages/Details";
import "./App.css"
const App = () =>{
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/list" element={<ProtectedRoute><List/></ProtectedRoute>}/>
            <Route path="/details/:id" element={<ProtectedRoute><Details/></ProtectedRoute>}></Route>
            <Route path="/analytics" element={<ProtectedRoute><Analytics/></ProtectedRoute>}></Route>
          </Routes>
        </BrowserRouter>
    )
}
export default App;