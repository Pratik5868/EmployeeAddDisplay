import EmployeeCard from "./EmployeeCard";


const EmployeeList = (props) => {

    const renderEmployee = () =>
        props.employees.map((emp) => {
            return <EmployeeCard employee={emp} key={emp.empid}></EmployeeCard>
        })


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <h3>From Employee List Component</h3>
                    {renderEmployee()}
                </div></div>


        </div>

    );
}

export default EmployeeList





//Simple example on how to display the data

// const EmployeeList = (props) => {

//     //    const renderEmployee=()=>{
//     //         return props.employees.map((emp,index)=>{
//     //             return <tr key={index}>
//     //                 <td>{emp.empid}</td>
//     //                 <td>{emp.ename}</td>
//     //                 <td>{emp.sal}</td>
//     //                </tr>
//     //         })
//     //     }

//     //or

//     //when a function code has a single line then no need to write {}
//     // const renderEmployee = () =>
//     //     props.employees.map((emp, index) =>
//     //         <tr key={index}>
//     //             <td>{emp.empid}</td>
//     //             <td>{emp.ename}</td>
//     //             <td>{emp.sal}</td>
//     //         </tr>
//     //     )

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-sm-12 col-md-3">
//                     {/* to retrieve the image from public folder following 2 ways are there
//                  <img src="train.png" alt="train image" height="200px" width="480px"></img> */}

//                     {/* or */}

//                     {/* In inline css whenever you want to pass the object as aparameter then write it in style={{}}  */}
//                     <img className="rounded" src={process.env.PUBLIC_URL + "train.png"} style={{ height: "200px", width: "200px",padding:"20px" }}></img>
//                 </div>
//                 <div className="col-sm-12 col-md-9">
//                     <h3>From Employee List Component</h3>
//                     <table className="table table-striped table-dark table-bordered">
//                         <thead>
//                             <tr>
//                                 <th>Employee Id</th>
//                                 <th>Employee name</th>
//                                 <th>Salary</th>
//                             </tr>
//                         </thead>

//                         <tbody>
//                             {renderEmployee()}
//                             {/* or */}
//                             {/* {
//                         props.employees.map((emp, index) => (
//                             <tr key={index}>
//                                 <td>{emp.empid}</td>
//                                 <td>{emp.ename}</td>
//                                 <td>{emp.sal}</td>
//                             </tr>
//                         ))
//                     } */}
//                         </tbody>
//                     </table>
//                 </div></div>


//         </div>

//     );
// }

// export default EmployeeList