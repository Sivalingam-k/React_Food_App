import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Login1/Content.css';
const Content = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="slide4.jpg" className="d-block w-100" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img src="slide2.jpg" className="d-block w-100" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img src="slide3.jpg" className="d-block w-100" alt="Third slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Content;
