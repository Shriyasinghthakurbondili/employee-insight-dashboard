import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { FaEye } from "react-icons/fa"


const Login = () =>{
    const [username, setUsername] = useState("")
    const[password,setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    
    const navigate = useNavigate();
    function handleForm(e){
        e.preventDefault();
       if(username=="testuser" && password == "Test123"){
        const userData = {
            username : username,
            password : password
        };
        localStorage.setItem("user",JSON.stringify(userData))
        alert("Login successful")
        navigate("/list")
       }else{
        alert("Invalid username")
       }
    }
    return(
        <div className="container">
         
            <h2>Login</h2>
            {/* <Link to="/analytics">Go to Analytics</Link> */}
            <label htmlFor="">Username:</label>
            <div style={{position:"relative"}}/>
            <input type="text" placeholder="Enter the username" value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
            <br/><br/>
            <label htmlFor="">Password:</label>
            <input type={showPassword ? "text":"password"} placeholder="Enter the password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <FaEye style={{cursor:"pointer", marginLeft:"10px"}} onClick={()=>setShowPassword(!showPassword)}></FaEye>
            <br/><br/>

            <button onClick={handleForm}>Submit</button>
        </div>
    )
};
export default Login