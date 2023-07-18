import React, { useEffect, useState } from "react";

const TeaserBlock = () => {
  const [backendData, setbackData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((Data) => {
        setbackData(Data.filter((item) => item.ItemPath === "/about/"));
      });
  }, []);
  
  return (
    <div
      className="large-m-t-b-100 m-b-40"
      style={{}}
      id="id-16caf213-c8a1-465d-87ce-02bfbe2f7820"
    >
      <div className="grid-container">
        <div className="grid-x">
          <div
            className="cell"
            style={{}}
            id="id-2f8981e8-56b4-4c4c-b55c-ef8d8717173a"
          >
            {backendData &&
              backendData.map((a) => {
                const { id, Title, SubTitle, Summary, Thumbnail } = a;
                return (
                  <div className="grid-x grid-margin-x" style={{}}>
                    <div
                      className="cell small-12 medium-6 large-6 align-self-middle"
                      style={{}}
                    >
                      <h2>{Title}</h2>

                      <p>
                        <span>{Summary}</span>
                      </p>
                    </div>

                    <div
                      className="cell small-12 medium-6 large-offset-1 large-5 text-center"
                      style={{}}
                    >
                      <img
                        loading="lazy"
                        className="thumbnail"
                        src={Thumbnail.FileSrc}
                        style={{}}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeaserBlock;
