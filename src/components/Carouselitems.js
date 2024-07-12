import React from "react";

function Carousel(props) {
  let { title1, image1, description1 } = props;

  return (
    <>
      <div className="card fi mx-2 shadow-lg">
        <img src={image1} className="card-img-top fixx" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-primary">{title1}</h5>
          <p className="card-text">{description1}</p>
          <a href="#" className="btn btn-outline-primary">
            Read more
          </a>
        </div>
      </div>
    </>
  );
}

export default Carousel;
