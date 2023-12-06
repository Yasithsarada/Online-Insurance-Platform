import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Motor insurance/MotorInsuranceLandingPage.css';

const MotorInsuranceLandingPage = () => {
  return (
    <>
    <div className="part1">
      <h1 className='mb-5'>Motor Insurance</h1> 
        
        <p><li>It is a long established fact that a reader will be distracted </li></p>
        <p><li>It is a long established fact that a reader will be distracted </li></p>
        <p><li>It is a long established fact that a reader will be distracted </li></p>
        <p><li>It is a long established fact that a reader will be distracted </li></p>
        <p><li>It is a long established fact that a reader will be distracted </li></p>
        <p><li>It is a long established fact that a reader will be distracted </li></p>
        <Link to="/MotorInsur-calculator" ><Button className="btn btn-success mx-5 my-4" >Get Instant Quote</Button></Link>
        <Link to="/MotorInsur-quotaion-Request" ><Button className="btn btn-success my-4" >Get Full Quote</Button></Link>
        </div>    
    

       
    </>
  )
}

export default MotorInsuranceLandingPage