import React, { useEffect } from "react";
import QRCode from "qrcode.react";
import { useParams } from "react-router-dom";
import { data } from "../data/data";

const SingleProductPage = () => {
  const modelViewer = {
    backgroundColor: "#eee",
    overflowX: "hidden",
    posterColor: "#eee",
    width: 300,
    height: 300,
  };

  const { id } = useParams();

  const finalData = data.find((item) => item.id == id);

  useEffect(() => {
    const toTop = () => {
      window.scrollTo(0, 0);
    };
    toTop();
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center">
        <model-viewer
          className="modelviewer"
          style={modelViewer}
          src={finalData?.cloudUrl}
          alt="Model"
          ar
          auto-rotate
          camera-controls
          touch-action="pan-y"
          shadow-intensity="1"
          poster={finalData?.imgUrl}
        ></model-viewer>

        <h2>{finalData?.title}</h2>

        <h2>
          Price: <strong>&#8377;{finalData?.price}</strong>
        </h2>
        <QRCode
          id={finalData?.id}
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
