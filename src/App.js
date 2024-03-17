import { Fragment } from 'react';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <Fragment className="App">
      <Nav />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
