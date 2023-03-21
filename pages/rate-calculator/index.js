import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './calculator.module.css'

export default function RateCalculator() {

  const [value, setValue] = useState(0);
  const [rate, setRate] = useState(125);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const notify = () => toast.success("Copied to clipboard.");

  const handleCopy = (e) => {
    let copyTarget = (e.target.innerHTML);
    copyTarget = copyTarget.split('-->').pop();
    navigator.clipboard.writeText(`$${copyTarget}`);
    notify();
  }

  const calculateChange = (e) => {
    e.preventDefault();
    setValue(rate * (hours + (minutes / 60) + (seconds / 60 / 60)))
  }

  return (
    <section className="mainContainer">
      <ToastContainer limit={3} autoClose={1000} />
      <form className={styles.rateCalculator} onSubmit={calculateChange}>
        <label>Rate</label>
        <input type="number" value={rate} onChange={(e) => setRate(parseInt(e.target.value))}></input>
        <label>Hours</label>
        <input type="number" value={hours} onChange={(e) => setHours(parseInt(e.target.value))}></input>
        <label>Minutes</label>
        <input type="number" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value))}></input>
        <label>Seconds</label>
        <input type="number" value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value))}></input>
        <p onClick={(e) => handleCopy(e)} className={styles.calculatedValue}>${value.toFixed(2)}</p>
        <button>Calculate</button>
      </form>
    </section>
  )
}
