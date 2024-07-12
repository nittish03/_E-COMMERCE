import React from "react";

function Containeritems(props) {
  let {
    title,
    description,
    imageUrl,
    newsUrl,
    date,
    author,
    source,
    price,
    rating,
    reviews,
  } = props;

  return (
    <>
      <div className="container my-3 col">
        <div className="card shadow-sm border-0">
          <img src={props.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-primary">{props.title}</h5>
            <p className="card-text text-muted">{props.description}</p>
            <div className="mb-2">
              <strong>
                <p className="mb-1">Price: <span className="text-success">{props.price}</span></p>
                <p className="mb-1">Rating: <span className="text-warning">{props.rating}</span></p>
                <p className="mb-1">Reviews: <span className="text-info">{props.reviews}</span></p>
              </strong>
            </div>
            <a href={props.newsUrl} className="btn btn-primary">
              Buy / Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Containeritems;
