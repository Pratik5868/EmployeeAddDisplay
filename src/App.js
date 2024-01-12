import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import EmployeeList from './component/EmployeeList';
import EmployeeAdd from './component/EmployeeAdd';
import { useState } from 'react';

//Note:- You can't modify state, you have to make copy of it and then make changes.
function App() {
  
 /* let emparr = [{ empid: 10, ename: "pratik", sal: 7000 }, { empid: 11, ename: "Rajan", sal: 8000 },
  { empid: 12, ename: "Sangita", sal: 10000 }]
  In functional compoent if we want to modify this array we have to use
  the state in functional component */

  // way to write state in functional component.Since we want to modify array we need to use it as a state in functional component 

  //usestate hook assigns value of setEmparr function to the emparr variable i.e it assigns modified value in function to the existing value
  //usestate hook is used for creating state object property.usestate will return variable and function.
  const [emparr,setEmparr]=useState([{ empid: 10, ename: "pratik", sal: 7000 }, { empid: 11, ename: "Rajan", sal: 8000 },
  { empid: 12, ename: "Sangita", sal: 10000 }])

  const addEmployee=(obj)=>{
    //spread operator : [...variable_name] will create a copy into newemparr
      let newemparr = [...emparr,{...obj}] 
      //passing newemparr to actually change the value of emparr
      setEmparr(newemparr)
  }

  return (
    <div className="App">
      <Header></Header>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <EmployeeAdd addEmployeeHandler={addEmployee}></EmployeeAdd>
          </div>
          <div className='col-6'>
            <EmployeeList employees={emparr}></EmployeeList>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
