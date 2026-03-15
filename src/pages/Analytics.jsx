import React from "react";
const Analytics = ()=>{
    const data = [
        {
            city:"London",
            salary:5000
        },
        {
            city:"Tokyo",
            salary: 7000
        },
        {
            city:"New York",
            salary:6000
        },
        {
            city:"Paris",
            salary: 4000
        }
    ];

    return(
        <div>
            <h2>Analytics</h2>
            <h3>Salary Distribution</h3>
            <svg width="400" height="200">
                {data.map((item,index)=>
                <rect key={index} x={index * 100 + 20} y={200 - item.salary/50} width="40" height={item.salary/50} fill="steelblue" rx="5" ry="5"></rect>
                )}
            </svg>
        </div>
    )
}
export default Analytics;