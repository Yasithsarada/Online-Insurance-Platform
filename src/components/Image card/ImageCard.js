import React from 'react'
import '../Image card/ImageCard.css'

const ImageCard = (props) => {
  return (
    <>
    <div class="card bg-dark text-white card-content">
            <img
              src={props.src}
              class="card-img"
              alt="..."
            />
            <div class="card-img-overlay">
              <h5 class="card-title">{props.title}</h5>
              <h2 class="card-text">
               {props.description}
              </h2>
              <p class="card-text"></p>
            </div>
          </div>
    </>
  )
}

export default ImageCard