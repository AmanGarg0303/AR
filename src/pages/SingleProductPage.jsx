import React from "react";
import Car from "../assets/Ferrari 812 Superfast.glb";
import Chair from "../assets/CHAIR.glb";
import QRCode from "qrcode.react";
import { useLocation } from "react-router-dom";

const SingleProductPage = () => {
  const modelViewer = {
    backgroundColor: "#eee",
    overflowX: "hidden",
    posterColor: "#eee",
    width: 400,
    height: 300,
    borderRadius: 10,
    marginTop: 40,
    marginLeft: 40,
  };

  const path = useLocation();
  const pathname = path.pathname.split("/")[2];

  return (
    <div>
      <div className="App">
        <model-viewer
          className="modelviewer"
          style={modelViewer}
          src={pathname === "1" ? Car : Chair}
          alt="Ferrari 812 SuperFast"
          ar
          auto-rotate
          camera-controls
        ></model-viewer>
        <div style={{ display: "flex", marginLeft: 50 }}>
          <QRCode
            id="1234"
            value={window.location.href}
            size={128}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"H"}
            includeMargin={true}
          />
          <h5 style={{ marginTop: 50 }}>QRCode URL: {window.location.href}</h5>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
