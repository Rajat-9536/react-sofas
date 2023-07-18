import React, { useEffect, useState } from "react";

const Banner = () => {
  const [backendData, setbackData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((Data) => {
        setbackData(Data.filter((item) => item.ItemPath === "/"));
      });
  }, []);
  // console.log(backendData)
  return (
    <>
      <div
        className="grid-x m-b-40"
        style={{}}
        id="id-bf56ceec-d8ff-4e48-b313-ee846eb737dc"
      >
        <div
          className="cell "
          style={{}}
          id="id-480844ec-86b4-418c-8d82-c27dce80f0d5"
        >
          <div
            className="grid-x relative background-3by4screen-cover background right-center medium-center-top "
            style={{
              backgroundImage:
                "linear-gradient(45deg, #202224 -14%, rgba(0, 0, 0, 0) 107%),url(https://cmsblobsstore.blob.core.windows.net/547c6fa7-770d-431d-98e4-6f738629c971/1920x1080/banner-make-my-site.jpg)",
            }}
          >
            <div
              className="cell align-self-bottom medium-align-self-middle small-banner-overlay"
              style={{}}
            >
              <div className="grid-x grid-container grid-padding-2x" style={{}}>
                <div
                  className="cell small-12 medium-5 large-5 medium-offset-1 large-offset-0"
                  style={{}}
                >
                  {backendData && backendData.map((a) => {
                      const { id, BannerTitle,BannerContent } = a;
                      return (
                        <div key={id}>
                          <h1 className="fg-light">{BannerTitle}</h1>

                          <p className="fg-light font-size-large medium-m-b-30">
                            {BannerContent}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;