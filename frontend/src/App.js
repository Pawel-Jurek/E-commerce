import React, { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState({ users: [] });

  useEffect(() => {
    fetch('/api')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setBackendData(data);
      })
      .catch(error => {
      });
  }, []);

  return (
    <div>
      {backendData.users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  );
}

export default App;
