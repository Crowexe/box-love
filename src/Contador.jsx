import { useState,useEffect } from 'react'
import './App.css'

function Contador() {
  const destinationDate = getNextJanuary20();

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function getNextJanuary20() {
    const now = new Date();
    let nextYear = now.getFullYear();
    if (now.getMonth() > 0 || (now.getMonth() === 0 && now.getDate() > 20)) {
      nextYear++;
    }
    return new Date(nextYear, 0, 20, 0, 0, 0);
  }

  function calculateTimeRemaining() {
    const now = new Date();
    return destinationDate.getTime() - now.getTime();
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = String(Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
  const minutes = String(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
  const seconds = String(Math.floor((timeRemaining % (1000 * 60)) / 1000)).padStart(2, "0");


  return (
    <>
      <h1>20/01/23</h1>
      <p>{days} días - {hours}:{minutes}:{seconds}</p>      
    </>
  )
}

export default Contador
