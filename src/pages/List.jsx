import {useState, useEffect} from "react";
import {Link} from "react-router-dom"
const List = ()=>{
    const [employee, setEmployee] = useState([])

    async function fetchData(){
        const response = await fetch("https://backend.jotish.in/backend_dev/gettabledata.php",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                username:"test",
                password:"123456"
            })
        });

        const json = await response.json()
        console.log(json)

        setEmployee(json.TABLE_DATA.data)
    }

    useEffect(()=>{
        fetchData()
    },[]);

    return(
        <div className="container">
            <h2>Employee List</h2>
            {employee.map((item,index)=>(
                <div className="employee-list" key={index}>
                    <Link to={`/details/${index}`}>
                       {item[0]}
                  </Link>
                </div>
            ))}
        </div>
    )
}
export default List;