
import React, { Component } from "react";

class EmployeeAdd extends React.Component {

    constructor(props){
             super()
             this.state={
                empid:"",
                ename:"",
                sal:0
             }
    }

    adddata=(event)=>{
        event.preventDefault(); //stop refreshing the page by submit event
        //this will do the validation
        if(this.state.empid=="" || this.state.ename=="" || this.state.sal==""){
            alert("all fields are mandatory")
            return;
        }
        this.props.addEmployeeHandler(this.state)//this will call addEmployee function in app.js

        this.setState({empid:"",ename:"",sal:""})//use to blank the form after adding the data
    }
    render() {
        return (
            <form>
                <div class="form-group">
                    <label for="eid">Employee Id</label>
                    <input type="text" class="form-control" id="eid"  placeholder="Enter employee id"
                    value={this.state.empid} onChange={(event)=>this.setState({empid:event.target.value})}/>
                     
                </div>

                <div class="form-group">
                    <label for="ename">Employee Name</label>
                    <input type="text" class="form-control" id="ename"  placeholder="Enter employee name" value={this.state.ename}
                     onChange={(event)=>this.setState({ename:event.target.value})}/>
                     
                </div>
                <div class="form-group">
                    <label for="sal">Salary</label>
                    <input type="text" class="form-control" id="sal" placeholder="Enter salary"
                    value={this.state.sal}
                    onChange={(event)=>this.setState({sal:event.target.value})}/>
                </div>
                
                <button type="submit" class="btn btn-primary" onClick={this.adddata}>Submit</button>
            </form>
        )
    }
}


export default EmployeeAdd