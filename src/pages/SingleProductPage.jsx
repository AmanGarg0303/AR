import React from "react";
import QRCode from "qrcode.react";
import { useLocation } from "react-router-dom";

const SingleProductPage = () => {
  const modelViewer = {
    backgroundColor: "#eee",
    overflowX: "hidden",
    posterColor: "#eee",
    width: 300,
    height: 300,
  };

  const { state } = useLocation();

  return (
    <div>
      <div className="flex flex-col items-center">
        <model-viewer
          className="modelviewer"
          style={modelViewer}
          src={state?.cloudUrl}
          alt="Model"
          ar
          auto-rotate
          camera-controls
          touch-action="pan-y"
          shadow-intensity="1"
          poster={state?.imgUrl}
        ></model-viewer>

        <h2>{state.title}</h2>

        <h2>
          Price: <strong>&#8377;{state.price}</strong>
        </h2>
        <QRCode
          id={state?.id}
          value={window.location.href}
          size={78}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"H"}
          includeMargin={true}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
