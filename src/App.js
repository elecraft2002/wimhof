import './App.css';
import "normalize.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Nav from "./components/nav/Nav"
import Home from "./pages/home/Home.jsx"
import { useSinglePrismicDocument } from '@prismicio/react'

function App() {
  //const 
  const [navigationList] = useSinglePrismicDocument("navigation", {/*  lang  */})
  console.log(navigationList)
  //const [document] = usePrismicDocumentsByType("prispevek")
  return (
    <>
      <Nav navigationList={navigationList}></Nav>
      <Router>
        <Routes>
          <Route path="/wimhof" element={<Home />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
