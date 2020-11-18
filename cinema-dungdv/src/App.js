import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer/index';
import Routers from './Routers/index';
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { call_load_page } from './Reducer/actions/Load_Action';
import { LoadingOutlined } from '@ant-design/icons';


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <div style={{ padding: "70px 0" }}>
          <Routers />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
