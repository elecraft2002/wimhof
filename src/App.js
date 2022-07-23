import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { PrismicRichText, useFirstPrismicDocument, usePrismicDocumentByID, usePrismicDocumentsByType } from '@prismicio/react'
import Nav from "./components/nav/nav"

function App() {

  const [document] = usePrismicDocumentsByType("prispevek")
  const [page] = usePrismicDocumentByID("landing_page")
  console.log(page)
  return (
    <>
      <Router>
        <Nav></Nav>
      </Router>
    </>
  );
}

export default App;
