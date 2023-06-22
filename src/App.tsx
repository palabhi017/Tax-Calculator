import React from 'react';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import SplitTax from './Components/SplitTax';

// This is root component
// AllRoutes Component is used to navigate between ATC and HRA.

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
     
    </div>
  );
}

export default App;
