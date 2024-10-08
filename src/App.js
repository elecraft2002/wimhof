import "./App.css";
import "normalize.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/nav";
import Home from "./pages/home/home.jsx";
// import Home from "./pages/home/Home";
import { useSinglePrismicDocument } from "@prismicio/react";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import CoursePage from "./pages/course/CoursePage";
import Gallery from "./pages/gallery/Gallery";
import Literatura from "./pages/literatura/literatura";
import InfoPage from "./pages/info/InfoPage";
import CookieConsent, { Cookies } from "react-cookie-consent";

import ReactGA from "react-ga";
const TRACKING_ID = "G-LCZ3QEF85Y"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  const url = window.location.origin;
  const languages = [
    { lang: "cs-cz", text: "CZ" },
    { lang: "en-eu", text: "EN" },
  ];
  const [languageNum, setLanguageNum] = useState(0);
  const [navigationList] = useSinglePrismicDocument("navigation", {
    lang: languages[languageNum % languages.length].lang,
  });
  //console.log(navigationList);
  //console.log(languages[(languageNum + 1) % languages.length].text);
  //const [document] = usePrismicDocumentsByType("prispevek")
  return (
    <>
      <Router>
        <Nav
          url={url}
          language={languages[(languageNum + 1) % languages.length].text}
          setLanguageNum={setLanguageNum}
          languageNum={languageNum} 
          navigationList={navigationList}
        ></Nav>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                url={url}
                language={languages[languageNum % languages.length]}
                setLanguageNum={setLanguageNum}
              />
            }
          ></Route>
          <Route
            path="/course/:id"
            element={
              <CoursePage
                url={url}
                language={languages[languageNum % languages.length]}
                setLanguageNum={setLanguageNum}
              />
            }
          ></Route>
          <Route
            path="/gallery"
            element={
              <Gallery
                url={url}
                language={languages[languageNum % languages.length]}
                setLanguageNum={setLanguageNum}
              />
            }
          ></Route>
          <Route
            path="/literatura"
            element={
              <Literatura
                url={url}
                language={languages[languageNum % languages.length]}
                setLanguageNum={setLanguageNum}
              />
            }
          ></Route>
          <Route
            path="/info"
            element={
              <InfoPage
                language={languages[languageNum % languages.length]}
                setLanguageNum={setLanguageNum}
              />
            }
          ></Route>
        </Routes>
      </Router>
      <CookieConsent
        location="bottom"
        buttonText="Souhlasím"
        cookieName="consent"
        style={{ background: "var(--primary)" }}
        buttonStyle={{ color: "var(--secondary)", fontSize: "1rem" }}
        expires={150}
      >
        Tento web používá soubory cookie.
      </CookieConsent>
      <Footer
        navigationList={navigationList}
        language={languages[(languageNum + 1) % languages.length].text}
      />
    </>
  );
}

export default App;
