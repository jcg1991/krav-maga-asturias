// Forzar redirección a HTTPS si se accede por HTTP
if (window.location.protocol !== "https:") {
  window.location.href =
    "https://" +
    window.location.hostname +
    window.location.pathname +
    window.location.search;
}

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
