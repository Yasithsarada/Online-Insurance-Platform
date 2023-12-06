import React from 'react'
import { Link } from 'react-router-dom';
import ImageCard from '../Image card/ImageCard';
import './SettingUp.css'

export const SettingUp = () => {
  return (
    <>
      <div className="row card-set ">
        <div className="col">
          <Link to="/" ><ImageCard title=''  description=' Life Insurance' src={require("../../images/life-ins.jpg")} /></Link>
        </div>
        <div className="col">
        <Link to="/" ><ImageCard title='' description='Property Insurance' src={require("../../images/life-insu-02.jpg")} /></Link>
        </div>
        <div className="col">
        <Link to="/MotorInsurance" ><ImageCard title='' description='Vehicle Insurance'src={require("../../images/AudiRS4_1272.webp")} /></Link>
        </div>
      </div>

      <div className="row card-set ">
        <div className="col">
        <Link to="/" ><ImageCard title=' ' description='Retirement Plans' src={require("../../images/Life-Insurance-Retirement-1.jpg")}/></Link>
        </div>
        <div className="col">
        <Link to="/" ><ImageCard title=' ' description=' This is a ' src={require("../../images/moa.jpg")}/></Link>
        </div>
        <div className="col">
        <Link to="/" ><ImageCard title=' ' description=' This is a wider card with ' src={require("../../images/moa.jpg")}/></Link>
        </div>
    
      </div>
    </>
  );
}
