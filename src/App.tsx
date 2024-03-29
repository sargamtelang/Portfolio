import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MacBookAir from "./pages/MacBookAir";
import MacBookAir1 from "./pages/MacBookAir1";
import MacBookAir2 from "./pages/MacBookAir2";
import MacBookAir3 from "./pages/MacBookAir3";
import MacBookAir4 from "./pages/MacBookAir4";
import MacBookAir5 from "./pages/MacBookAir5";
import MacBookAir6 from "./pages/MacBookAir6";
import MacBookAir7 from "./pages/MacBookAir7";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-air-8":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-air-7":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-air-6":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-air-5":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-air-4":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-air-2":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-air-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MacBookAir />} />
      <Route path="/macbook-air-8" element={<MacBookAir1 />} />
      <Route path="/macbook-air-7" element={<MacBookAir2 />} />
      <Route path="/macbook-air-6" element={<MacBookAir3 />} />
      <Route path="/macbook-air-5" element={<MacBookAir4 />} />
      <Route path="/macbook-air-4" element={<MacBookAir5 />} />
      <Route path="/macbook-air-2" element={<MacBookAir6 />} />
      <Route path="/macbook-air-1" element={<MacBookAir7 />} />
    </Routes>
  );
}
export default App;
