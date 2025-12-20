import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Hide initial loader when React starts rendering
const hideLoader = () => {
  const loader = document.getElementById('app-loader');
  if (loader) {
    loader.classList.add('hidden');
  }
};

// Start React
const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Hide loader after React mounts
hideLoader();
