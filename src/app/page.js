import Model from "./components/Model";

export default function Home() {
  return (
    <main>
      <div class="heading">
      <h1>Art in AR</h1>
      <p>View Art in your space by tapping the AR icon in the bottom right of the element on mobile.</p>
      </div>
      <Model />
      <script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js"
        async
      ></script>
    </main>
  );
}
