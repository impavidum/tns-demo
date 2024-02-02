"use client";

const Model = () => {
  
  return <model-viewer
        src="/tns-1.glb"
        ios-src="/tns.usdz"
        // poster="/art.jpg"
        orientation="180deg 0deg 0deg"
        alt="A 3D model of an astronaut"
        shadow-intensity="0"
        camera-controls
        ar
        ar-placement="wall"
        touch-action="pan-y"
        disable-pan
        // skybox-image="/tns-gradient.png"
        exposure="1"
        min-camera-orbit="auto 90deg auto"
        max-camera-orbit="auto 90deg auto"
        tone-mapping="commerce"
      ></model-viewer>
};

export default Model;
