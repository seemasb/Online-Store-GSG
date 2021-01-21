import './App.css';
import React, { useState } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Contact from './Pages/Contact/Contact';
import Register from './Pages/Register/Register';
import LogIn from './Pages/LogIn/LogIn';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import firebase from 'firebase';
const NameContext = React.createContext('empty');

// const firebaseConfig = {
//   apiKey: 'AIzaSyA1unudLQxcVqOzcrwx3P9sYUfK1Jq2c7E',
//   authDomain: 'teststore-f5e52.firebaseapp.com',
//   projectId: 'teststore-f5e52',
//   storageBucket: 'teststore-f5e52.appspot.com',
//   messagingSenderId: '792894613298',
//   appId: '1:792894613298:web:d23de7e19db482981f992b',
// };
// firebase.initializeApp(firebaseConfig);
// /Register
function App() {
  const [ProductName, setProductName] = useState('yup');
  return (
    <div className="App">
      <NameContext.Provider value={NameContext}>
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route exact path="/Shop">
              <Shop setProductName={setProductName} />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/Register">
              <Register />
            </Route>
            <Route exact path="/LogIn">
              <LogIn />
            </Route>
            <Route exact path="/SingleProduct">
              <SingleProduct ProductName={ProductName} />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Redirect to="/Home" />
          </Switch>
        </BrowserRouter>
      </NameContext.Provider>
    </div>
  );
}

export default App;
