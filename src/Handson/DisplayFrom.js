import React, { Component } from 'react';
import '../App.css';
class DisplayForm extends Component{
  constructor(props){
     super(props);
     console.log(this.props.value)
}
render(){
    return(
      <>
      <h1 >EMPLOYEE FEEDBACK FORM</h1>
        <div  className='parent'>
       
        {this.props.value.map((item,index)=>{
            return(
              <div className="child" key={index}>
              
              
           
          <span>Name: {item.name} || Department: {item.dept} || Rate: {item.rate}</span></div>
          
        )})}<br/></div>
        <button type='button' onClick={this.props.toggleFunc}>Go Back</button>
        
        </>
    )
}
}
export default DisplayForm