import React, { useEffect, useState } from "react";
import Containeritems from "./Containeritems";
import Carouselitems from "./Carouselitems";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";

function Container(props) {
  const [articles, setArticles] = useState([]);
  const [limit, setLimit] = useState(3);
  const [articles1, setArticles1] = useState([]);

  const updateData = async () => {
    const url = `https://fakestoreapi.com/products/${
      props.category ? "category/" + props.category : ""
    }?limit=${limit}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData);
    const url1 = "https://fakestoreapi.com/products";
    let data1 = await fetch(url1);
    let parsedData1 = await data1.json();
    setArticles1(parsedData1);
  };
  useEffect(() => {
    updateData();
  }, []);

  const handleNextClick = () => {
    setLimit(limit + 3);
    if (limit === 21) {
      setLimit(limit - 3);
    } else {
      updateData();
    }
  };

  const handlePrevClick = () => {
    setLimit(limit - 3);
    if (limit === 3) {
      document.getElementById("prev").disabled();
      setLimit(limit + 3);
    } else {
      updateData();
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
    <div style={{color:"white"}} className="container d-flex justify-content-center">
      <h1>{props.category?props.category:""}</h1>
    </div>
      <div className="my-4">
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 mb-4" key={element.id}>
                  <Containeritems
                    title={element.title ? element.title.slice(0, 24) + "..." : ""}
                    imageUrl={element.image}
                    description={element.description ? element.description.slice(0, 60) + "..." : ""}
                    price={element.price ? element.price + "$" : "$"}
                    rating={element.rating.rate ? element.rating.rate : "**"}
                    reviews={element.rating.count ? element.rating.count : "**"}
                  ></Containeritems>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container">
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="container"
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={handlePrevClick}
          >
            &larr; Previous{" "}
          </button>
          <button
            id="nxt"
            type="button"
            className="btn btn-primary"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>

      <div className="my-4">
        <div className="container">
          <div className="row">
            <Slider {...settings}>
              {articles1.map((e) => {
                return (
                  <div className="col-md-4 mb-4" key={e.id}>
                    <Carouselitems
                      title1={e.title ? e.title.slice(0, 24) + "..." : ""}
                      description1={e.description ? e.description.slice(0, 60) + "..." : ""}
                      image1={e.image}
                    ></Carouselitems>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

    </>
  );
}

export default Container;
