"use client";

const Model = () => {
  return (
    <div id="card">
      <model-viewer
        id="model-viewer"
        src="/portfolio_test.glb"
        ios-src="/portfolio_test.usdz"
        poster="/portfolio_test.png"
        alt="A 3D model of an astronaut"
        shadow-intensity="0"
        camera-controls
        auto-rotate
        ar
        ar-placement="wall"
      ></model-viewer>
    </div>
  );
};

export default Model;
