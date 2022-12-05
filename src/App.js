import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
      </>
    );
  }
}

export default App;
