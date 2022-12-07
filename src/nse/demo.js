// import { useEffect } from "react";
import React, { useEffect } from "react";

const Demo = () => {
  useEffect(() => {
    // if (bidPrice.length !== 0) {
    getLocalData();
    // } else {
    // }
  }, []);

  useEffect(() => {
    getLocalData();
    // getApiData();
    const interval = setInterval(() => {
      console.log(
        "Interval----------------------------------------------------------------------------------->"
      );
      getLocalData();
      //   getApiData();
      //   conditionFunction();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const getLocalData = async () => {
    await fetch(
      "https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY"
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((e) => console.log(e));
  };

  return <div></div>;
};

export default Demo;
