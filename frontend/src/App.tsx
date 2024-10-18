import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    // Make a GET request to the back-end API
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Front-End</h1>
      <p>Message from back-end: {data}</p>
    </div>
  );
};

export default App;
