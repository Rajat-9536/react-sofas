import React, { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();
  const [backendData, setbackData] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then((response) => response.json())
      .then((Data) => {
        setbackData(Data.filter((singleprod) => singleprod.Identifier.includes(productId)));
      });
  }, []);
  return (
    <>
      <div className="grid-x grid-container">
        <div className="cell small-12">
          <div
            className="grid-x grid-margin-x grid-margin-y align-middle"
            style={{}}
          >
            {backendData && backendData.map((a) => {
                const { Id, Identifier, Thumbnail, Title, Summary, Price } = a;
                return (
                  <>
                    <div key={Id} className="cell small-12 medium-5  " style={{}}>
                      <img
                        loading="lazy"
                        className="z-depth-2" 
                        src={Thumbnail.FileSrc}
                        alt=""
                        style={{}}
                      />
                    </div>
                    <div
                      className="cell small-12 large-offset-1 medium-6 large-6  "
                      style={{}}
                    >
                      <h3>{Title}</h3>

                      <p className=" m-b-10 m-t-10">
                        <span>{Summary}</span>
                      </p>

                      <span>
                        <span> </span>
                      </span>

                      <span className="m-b-10 bold p-r-5 saleprice inline-block">
                        <span className="uppercase">INR </span>
                        <span>{Price}</span>
                      </span>

                      <span className="m-b-10 bold strike font-size-small mrp inline-block">
                        <span className="uppercase">INR </span>
                        <span>{Price}</span>
                      </span>

                      <div className="button-group m-t-20" style={{}}>
                        <div>
                          <button className="button ">Add to cart</button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      <Link to="/products">Back to Products</Link>
    </>
  );
};

export default SingleProduct;
