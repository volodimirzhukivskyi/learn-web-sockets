import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Title from './components/Title/Title';

function App() {
  const [ws, setWs] = useState(null);
  const [error, setEror] = useState(null);
  const [btnName, setBtnName] = useState('Test Button');
  useEffect(() => {
    connection();
  }, []);

  function connection() {
    const ws = new WebSocket('ws://localhost:8080/');
    ws.onopen = () => {
      console.log('Connection Established!');
      setWs(ws);
    };
    ws.onmessage = (e) => {
      setBtnName(e.data);
    };
    ws.onerror = () => {
      setEror('Error, try again later! ');
    };
  }
  const handleClick = () => {
    const name = prompt('set new button name');
    ws.send(name);
  };
  return <>{error ? <Title title={error} /> : <Button click={handleClick}>{btnName}</Button>}</>;
}

export default App;
