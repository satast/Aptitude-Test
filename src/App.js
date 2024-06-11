import React from 'react';
import Test from './Test';
import './App.js'
import Header from './header.js';



//const navbarStyle = {
  //backgroundColor: 'pink', // Light gray background similar to Bootstrap's default navbar
  //padding: '10px 20px', // Padding to give some space inside the navbar
  //fontSize: '24px', // Larger text size for better visibility
  //textAlign: 'center', // Centering the text
  //boxShadow: '0 2px 4px rgba(0,0,0,0.1)' // Subtle shadow for a lifted effect
//}



const App = () => {
  return (
    <body className='body'>
      <div>
      <Header/>
      

      <Test />
    </div>
    </body>
  );
};

export default App;