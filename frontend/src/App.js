import React, { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleDownload = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage('Erro ao conectar ao servidor.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Download de Vídeos do Youtube</h1>
        <form onSubmit={handleDownload}>
          <input
            type="text"
            placeholder="Insira a URL do vídeo"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit">Baixar</button>
        </form>
        {message && <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;
