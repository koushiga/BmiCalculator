import { useState } from 'react';
import './Bmi.css';

const Bmi = () => {

    const[height,setHeight]=useState("");
    const[weight,setWeight]=useState("");
    const[bmi,setBmi]=useState(null);
    const[bmiStatus,setBmiStatus]=useState("");

    const calculateBmi= () =>{
        if(height && weight){
            const heightInMeters=height/100;
            const bmiValue= weight / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2));
            if(bmiValue<18.5){
                setBmiStatus("UnderWeight");
            }
            else if(bmiValue >=18.5 && bmiValue <24.9){
                setBmiStatus("Normal Weight");
            }
            else if(bmiValue >=25 && bmiValue <29.9){
                setBmiStatus("OverWeight");
            }
            else{
                setBmiStatus("Obese");
            }
        }
        else{
            setBmi(null);
            setBmiStatus("");
        }
    }

  return (
    <>
        <div className='bmi-calculator'>
            <div className='pic'>
                <img src="bmi1.png" alt="bmi"/>
            </div>
            <div className='text'>
                <h1>BMI CALCULATOR</h1>
                <div className='input-field'>
                    <label htmlFor='height'>Height (cm): </label>
                    <input type='text' value={height} id='height' onChange={(e)=>setHeight(e.target.value)} />
                </div>
                <div className='input-field'>
                    <label htmlFor='weight'>Weight (kg): </label>
                    <input type='text' value={weight} id='height' onChange={(e)=>setWeight(e.target.value)} />
                </div>
                <button onClick={calculateBmi}>Calculate BMI</button>
            
            {bmi !== null && (
                <div className='result'>
                    <p>Your BMI is : {bmi}</p>
                    <p>Status : {bmiStatus}</p>
                </div>
            )}
            </div>    
        </div>
    </>
  )
}

export default Bmi;