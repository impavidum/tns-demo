import Model from "./components/Model";

export default function Home() {
  return (
    <main>
      <Model />
      <script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js"
      ></script>
    </main>
  );
}
