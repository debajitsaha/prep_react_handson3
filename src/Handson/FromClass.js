import React from 'react'
import { Component } from 'react';
import DisplayForm from './DisplayFrom';
import '../App.css'

class FormClass extends Component{
    constructor(){
        super();
        this.state={
            Name:'',
            Dept :'',
            Rate:'',
            clicked:true,
            EmpData:[]
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    handleToggle=()=>{
      this.setState({clicked:!this.state.clicked})  
    }
    handleClick=()=>{
        const empobj={
            name:this.state.Name,
            dept:this.state.Dept,
            rate:this.state.Rate,
        }
        this.state.EmpData.push(empobj);
        this.setState({
            EmpData:this.state.EmpData,
            Name:'',
            Dept:'',
            Rate:'',
            clicked:false

        })
      
    }
    render(){
        return(
            < >
            
            {this.state.clicked?
            <form>
                <h1>EMPLOYEE FEEDBACK FORM</h1>
                       <label htmlFor="name">Name : </label>
           <input id='name' type="text" placeholder="Enter Name" name="Name" value={this.state.Name} onChange={this.handleChange} required /><br/>
           <label htmlFor="dept">Department : </label>
           <input id="dept" type="text" placeholder="Enter Department" name="Dept" value={this.state.Dept} onChange={this.handleChange} required/> <br/>
           <label htmlFor="rate">Rate : </label>
            <input id="rate" type="text" placeholder="Rate" name="Rate" value={this.state.Rate} onChange={this.handleChange} required/> <br/>
             <button type='button' onClick={this.handleClick}>Submit</button>
             </form>
             :<DisplayForm value={this.state.EmpData} toggleFunc={this.handleToggle}/>
             }  
             </>
        )
    }
}

export default FormClass
