import './App.css';
import "normalize.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { PrismicRichText, useFirstPrismicDocument, usePrismicDocumentByID, usePrismicDocumentsByType } from '@prismicio/react'
import Nav from "./components/nav/nav"
import Home from "./pages/home/home.jsx"

function App() {

  const [document] = usePrismicDocumentsByType("prispevek")
  const [page] = usePrismicDocumentByID("landing_page")
  console.log(page)
  return (
    <>
      <Nav></Nav>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
