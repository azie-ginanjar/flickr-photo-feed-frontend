import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Table from "./Table";

function App() {
  const [appState, setAppState] = useState({
    data: []
  });

  useEffect(() => {
    const apiUrl = 'https://flickr-feed-backend.herokuapp.com/api/v1/photo';
    axios.get(apiUrl).then((response) => {
      setAppState({
        data: response.data.data
      })
    });
  }, [setAppState]);

  return (
    <div className="App">
      <Table data={appState.data} />
    </div>
  );
}

export default App;
