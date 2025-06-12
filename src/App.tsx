import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BGSHomepage1440px from "./pages/BGSHomepage1440px";
import PersonalInformation1440px from "./pages/PersonalInformation1440px";
import PersonalVerification1440px from "./pages/PersonalVerification1440px";

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
      case "/personal-information-1440px":
        title = "";
        metaDescription = "";
        break;
      case "/personal-verification-1440px":
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
      <Route path="/" element={<BGSHomepage1440px />} />
      <Route
        path="/personal-information-1440px"
        element={<PersonalInformation1440px />}
      />
      <Route
        path="/personal-verification-1440px"
        element={<PersonalVerification1440px />}
      />
    </Routes>
  );
}
export default App;
