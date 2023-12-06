import React from 'react'
import '../HomePage/HomePage.css'



export const HomePage = () => {
  return (
    <div>
         
   
   
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require('../../images/insurance-1.jpg')} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={require('../../images/se.jpg')} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={require('../../images/moa.jpg')} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="about-us">
        <div className="about-us-content">
         <h3>About us</h3>
         <p>
           here my baby goes here my baby goes here my baby goeshere my baby goeshere my baby goes here my baby goes here my baby goes here my baby goes here my baby goes here my baby goeshere my baby goeshere my baby goes
           here my baby goes here my baby goes here my baby goeshere my baby goeshere my baby goes here my baby goes here my baby goes here my baby goes here my baby goes here my baby goeshere my baby goeshere my baby goes
           here my baby goes here my baby goes here my baby goeshere my baby goeshere my baby goes here my baby goes here my baby goes here my baby goes here my baby goes here my baby goeshere my baby goeshere my baby goes
         </p>
        </div>
        <div className="about-us-image">
          <img src={require('../../images/ab.webp')} alt=''/>
        </div>
       </div>
       
    </div>
  )
}
