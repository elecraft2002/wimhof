import logo from './logo.svg';
import './App.css';
import { PrismicRichText, useFirstPrismicDocument, usePrismicDocumentsByType } from '@prismicio/react'


function App() {

  const [document] = usePrismicDocumentsByType("prispevek")
  console.log(document)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
