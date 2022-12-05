import React from 'react';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Calculator />
      </>
    );
  }
}

export default App;
