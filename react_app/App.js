
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api');
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to fetch data.');
    }
  };

  return (
    <div className="App">
      <h1>React and Flask App</h1>
      <button onClick={fetchData}>Fetch Message</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
