import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";

function CssShadow({ data, index }) {
  const [bounce, setBounce] = useState("");
  const [copy, setCopy] = useState(false);

  const clipBoard = () => {
    navigator.clipboard.writeText(data.boxShadow);
  };
  if (copy) {
    clipBoard();
  }
  return (
    <>
      <div
        className={`bg-container ${bounce}`}
        onClick={() => {
          setCopy(true);
          setBounce("bounce");
        }}
        style={{ boxShadow: data.boxShadow }}
        data-tip={`Click to copy #${index} box-shadow`}
      >
        <p>
          <span className="centerize">{copy ? "Copied!" : `#${index}`}</span>
        </p>
      </div>
      <ReactTooltip globalEventOff="click" />
    </>
  );
}

export default CssShadow;
