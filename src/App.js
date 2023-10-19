import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)
  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)

  const handleCal=(e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert(' Kindly complete the form')
    }
    else{
      setInterest(principle*rate*year/100)
    }
  }

  const handleReset =(e)=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
  }
  const validateData = (e) => {
    const { name, value } = e.target
    // console.log(name , value);
    // console.log(!!value.match(/^[0-9]+$/));
    if (!!value.match(/^[0-9]*.?[0-9]$/)) {
      if (name === 'principle') {
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if(name==='rate'){
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
      }


    }
    else {
      if (name === 'principle') {
        setPrinciple(value)
        setIsPrinciple(false)
      }
      else if(name==='rate'){
        setRate(value)
        setIsRate(false)
      }
      else{
        setYear(value)
        setIsYear(false)
      }
    }

  }
  return (
    <div style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div style={{ width: "470px" }} className='bg-light p-5 rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple interest easily</p>

        <div className='bg-warning mt-5 d-flex justify-content-center align-items-center w-100 rounded flex-column shawdow'>
          <h1> &#8377; {interest}</h1>
          <p>Total simple interest</p>

        </div>
        <form onSubmit={handleCal} className='mt-5'>
          <div className='mb-3'>
            <TextField name='principle' value={principle || ""} onChange={(e) => validateData(e)} className='w-100' id="outlined-basic" label=" &#8377; Principle Amount" variant="outlined" />
          </div>
          {
            !isPrinciple &&
            <div><p className='text-danger fw-bolder'>*Invalid input</p></div>}
          <div className='mb-3'>
            <TextField name='rate' value={rate || ""} onChange={(e) => validateData(e)} className='w-100' id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" />
          </div>
          {
            !isRate &&
            <div><p className='text-danger fw-bolder'>*Invalid input</p></div>}
          <div className='mb-3'>
            <TextField name='year' value={year || ""} onChange={(e) => validateData(e)} className='w-100' id="outlined-basic" label="Year (Yr)" variant="outlined" />
          </div>
          {
            !isYear &&
            <div><p className='text-danger fw-bolder'>*Invalid input</p></div>}
          <Stack direction="row" spacing={2} className='mt-4'>
            <Button type='submit' disabled={isPrinciple && isRate && isYear?false:true} className='bg-dark' style={{ height: '60px', width: '200px' }} variant="contained">Calculate</Button>
            <Button onClick={handleReset} style={{ height: '60px', width: '200px' }} variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>


    </div>
  );
}

export default App;
