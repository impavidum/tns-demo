"use client";

const Model = () => {
  return (
    <div id="card">
      <model-viewer
        id="model-viewer"
        src="/art.glb"
        ios-src="/art.usdz"
        poster="/art.jpg"
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
