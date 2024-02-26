import { useEffect, useRef, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Title from './components/Title/Title';

function App() {
  const ws = useRef(new WebSocket('ws://localhost:8080/'));
  const [error, setEror] = useState(null);
  const [btnName, setBtnName] = useState('Test Button');
  useEffect(() => {
    connection();
  }, []);

  function connection() {
    ws.current.onopen = () => {
      console.log('Connection Established!');
    };
    ws.current.onmessage = (e) => {
      setBtnName(e.data);
    };
    ws.current.onerror = () => {
      setEror('Error, try again later! ');
    };
  }
  const handleClick = () => {
    const name = prompt('set new button name');
    ws.current.send(name);
  };
  return <>{error ? <Title title={error} /> : <Button click={handleClick}>{btnName}</Button>}</>;
}

export default App;
