import './App.css';
import "normalize.css"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Nav from "./components/nav/Nav"
import Home from "./pages/home/Home.jsx"
import { useSinglePrismicDocument } from '@prismicio/react'
import { useState } from 'react';

function App() {
  const languages = [{lang:"cs-cz",text:"CZ"}, {lang:"en",text:"EN"}]

  const [languageNum, setLanguageNum] = useState(0)
  const [navigationList] = useSinglePrismicDocument("navigation", { lang: languages[languageNum % languages.length].lang })
  //const [document] = usePrismicDocumentsByType("prispevek")
  return (
    <>
      <Nav language={languages[(languageNum + 1) % languages.length].text} setLanguageNum={setLanguageNum} languageNum={languageNum} navigationList={navigationList}></Nav>
      <Router>
        <Routes>
          <Route path="/wimhof" element={<Home language={languages[languageNum % languages.length]} setLanguageNum={setLanguageNum} />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
