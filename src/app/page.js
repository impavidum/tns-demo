import Model from "./components/Model";

export default function Home() {
  return (
    <main>

      {/* Map creator controller  */}
      <div className="controller">
          <img src="/tns-logo-dark.svg" alt="" />
      </div>

      {/* Map 3d model */}
      <Model />

      {/* mode-view cdn  */}
      <script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js"
        async
      ></script>

    </main>
  );
}
