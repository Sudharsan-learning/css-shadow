import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import CssShadow from "./Components/CssShadow";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then(function (response) {
        console.log("response", response);
        return response.json();
      })
      .then(function (jsonData) {
        console.log(jsonData);
        setData(jsonData);
      });
  }, []);
  console.log("data", data);
  return (
    <div className="container">
      <section className=" mt-10">
        <h1>CSS box-shadow property examples</h1>
        <br />

        <p className="center-section mt-10">
          The box-shadow CSS property adds shadow effects around an element's
          frame. You can set multiple effects separated by commas. A box shadow
          is described by X and Y offsets relative to the element, blur and
          spread radius, and color.
        </p>
      </section>

      <section className="flex-container">
        {data.map((data, index) => (
          <CssShadow data={data} index={index} />
        ))}
      </section>
    </div>
  );
}

export default App;
