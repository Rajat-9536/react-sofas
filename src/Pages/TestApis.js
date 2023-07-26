import React, { useEffect, useState } from "react";
import { useApiContext } from "../context/api_context";

const TestApis = () => {
  const { apiRequest } = useApiContext();
  const [fetchData, setfetchData] = useState([]);

  useEffect(() => {
    const fetchDatafromApi = async () => {
      try {
        const data = await apiRequest("GET", "sitepage");
        setfetchData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDatafromApi();
  }, []);

  return (
    // <div>
    //   <button className='text-center btn' onClick={fetchData}>Fetch data from api</button>
    // </div>
    <div>
      {fetchData.map((item) => {
        const { email } = item;
        return (
          <div>
            <p>{email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TestApis;

// 236498176024-sbs5g4cd098qtahfbh8p0je70st8l3ua.apps.googleusercontent.com

// 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
