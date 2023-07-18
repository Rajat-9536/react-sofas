import React, { useEffect, useState } from "react";

const MultiPage = () => {
  const [backendData, setbackData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((Data) => {
        setbackData(Data.filter((item) => item.ItemPath === "/services/"));
      });
  }, []);
  console.log(backendData)
  return (
    <>
      <div className="p-t-40 p-b-50 m-b-60 large-m-t-120 secondary aos-init aos-animate">
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell small-12 text-center b-radius-5x">
              <div className="grid-x grid-padding-y">
                <div className="cell large-12">
                  <div className="grid-x grid-margin-x grid-padding-x ">
                    {backendData && backendData.map((a) => {
                        const {
                          id,
                          Title,
                          Subtitle,
                          Summary,
                          Thumbnail,
                          ItemPath,
                        } = a;
                        return (
                          <div
                            className="cell medium-6 large-3 b-radius-5x light p-t-b-30 m-b-30 z-depth-1"
                            style={{}}
                          >
                            <a
                              style={{ color: "inherit" }}
                              href="/ProductCategory/view/professional-websites/77c238e5-8739-4252-a18f-9e43b4ecb4ba/"
                            >
                              <img
                                loading="lazy"
                                src={Thumbnail.FileSrc}
                                alt=""
                              />
                              <p className=" m-t-b-10">{Title}</p>
                            </a>
                            <div style={{}}>
                              <a
                                style={{ color: "inherit" }}
                                href="/ProductCategory/view/professional-websites/77c238e5-8739-4252-a18f-9e43b4ecb4ba/"
                              >
                                <h5>{Subtitle}</h5>
                                <p className="font-size-small">
                                  <span>{Summary}</span>
                                </p>
                              </a>
                              <a href={ItemPath}>Read more</a>
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
    </>
  );
};

export default MultiPage;