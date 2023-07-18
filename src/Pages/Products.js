import React, { useEffect, useState } from "react";

const Products = () => {
  const [backendData, setbackData] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then((response) => response.json())
      .then((Data) => {
        setbackData(Data);
      });
  }, []);
  // console.log(backendData);
  var temp = "products/";

  return (
    <div
      className="m-t-50 large-m-t-100 "
      style={{}}
      id="id-3b332fa7-169c-4128-ab5b-75b47874fd18"
    >
      <div className="grid-container">
        <div className="grid-x">
          <div
            className="cell "
            style={{}}
            id="id-d2b0503c-85df-48b6-a53b-221767732923"
          >
            <div className="scroll-container">
              <div
                className="cell small-12   medium-12 large-12 text-center "
                style={{}}
              >
                <h2 className="bold">Featured Products</h2>
              </div>

              <div className="cell small-12 medium-12 large-12 m-t-40">
                <div className="grid-x grid-margin-x grid-margin-y" _bl_2="">
                  {backendData && backendData.map((prod) => {
                    const { Identifier, Title, Id, Thumbnail, Image, Price } =
                      prod;
                    return (
                      <div
                        className="cell small-12 medium-6 large-3"
                        style={{}}
                      >
                        <a
                          style={{ color: "inherit" }}
                          href={temp + Identifier}
                        >
                          <img
                            loading="lazy"
                            className="hvr-fade thumbnail"
                            src={Thumbnail.FileSrc}
                            alt={Title}
                            style={{}}
                          />
                        </a>
                        <div className="grid-x m-t-20" style={{}}>
                          <a
                            style={{ color: "inherit" }}
                            href={temp + Identifier}
                          ></a>
                          <div
                            className="cell small-12 medium-12 text-center"
                            style={{}}
                          >
                            <a
                              style={{ color: "inherit" }}
                              href={temp + Identifier}
                            ></a>
                            <h6>
                              <a
                                style={{ color: "inherit" }}
                                href={temp + Identifier}
                              />
                              <a
                                className="bold  m-t-20"
                                href={temp + Identifier}
                              >
                                {Title}
                              </a>
                            </h6>

                            <span>
                              <span> </span>
                            </span>

                            <span className="m-b-20 bold p-r-5 saleprice">
                              <span className="uppercase">INR </span>
                              <span>{Price}</span>
                            </span>

                            <span className="m-b-20 bold strike font-size-small mrp" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
