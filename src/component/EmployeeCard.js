import {PersonCircle,Trash,PenFill} from 'react-bootstrap-icons';

const EmployeeCard=(props)=>{
    console.log(props)
    return (
        <div className="container">
           <div className="row">
               <div className="col-md-1">
                   <PersonCircle></PersonCircle>
               </div>
               <div className="col-md-7 text-left">
                   <span>{props.employee.empid}</span>&nbsp;&nbsp;&nbsp;
                   <span>{props.employee.ename}</span>&nbsp;&nbsp;&nbsp; 
               </div>
               <div className="col-md-2" >
                   <PenFill/>
               </div>
               <div  className="col-md-2">
                   <Trash/>
               </div>
           </div>

        </div>
    )
}
export default EmployeeCard;