"use client";

const Model = () => {
  return (
    <div id="card">
      <model-viewer
        id="model-viewer"
        src="/Astronaut.glb"
        ios-src="/Astronaut.usdz"
        poster="/poster.webp"
        alt="A 3D model of an astronaut"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar
      ></model-viewer>
    </div>
  );
};

export default Model;
