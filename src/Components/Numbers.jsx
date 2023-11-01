import React, { useState } from 'react';

function Numbers() {
  const [value, setValue] = useState('');
  const [up, setUP] = useState('');
  const [dark,setDark] = useState(true)


  const result = () => {
    try {
      setUP(value);
      setValue(eval(value));
    } catch {
      setValue('Invalid expression');
    }
  }

  const removeLast = () => {
    setValue(value.toString().slice(0, -1));
  };

  const Allclear = () => {
    setValue('');
    setUP('');
  };

  const calculateSquareRoot = () => {
    try {
      setUP(`√${value}`);
      setValue(Math.sqrt(parseFloat(value)).toString());
    } catch {
      setValue('Invalid expression');
    }
  };
  const handleDark = ()=>{
    if (dark==false){
        setDark(true)
    }else{
   setDark(false)

    }
  }
console.log(dark);
  return (
    <>
      <div className={`${dark?"main shadow mt-5":"main mainLight shadow mt-5"}`}>
        <button style={{float:'right',fontSize:'20px',border:'0px'}} onClick={handleDark} className=' btn mt-1'>{
            dark?<i class="fa-solid fa-sun"></i>:<i class="fa-solid fa-moon"></i>
        }
            
            </button>
        <div  className="inpt ms-3 mt-5 d-flex justify-content-center flex-column">
          <input readOnly className='in1' value={up} style={{  height: '3rem' }} type="text" />
          <input readOnly className='in2' style={{ height: '3rem' }} value={value} type="text" placeholder="0" />
        </div>

        <div className="button">
          <div className="d-flex justify-content-evenly align-items-center mt-3 button-row">
            <button onClick={Allclear} className="btn text-warning">C</button>
            <button onClick={removeLast} className="btn text-warning"><i className="fa-solid fa-delete-left"></i></button>
            <button onClick={() => (setValue(value + '%'))} className="btn text-warning">%</button>
            <button onClick={() => (setValue(value + '/'))} className="btn text-warning"><i className="fa-solid fa-divide"></i></button>
          </div>
          <div className="d-flex justify-content-evenly align-items-center mt-3 button-row">
            <button onClick={() => (setValue(value + '7'))} className="btn">7</button>
            <button onClick={() => (setValue(value + '8'))} className="btn">8</button>
            <button onClick={() => (setValue(value + '9'))} className="btn">9</button>
            <button onClick={() => (setValue(value + '*'))} className="btn text-warning">x</button>
          </div>
          <div className="d-flex justify-content-evenly align-items-center mt-3 button-row">
            <button onClick={() => (setValue(value + '4'))} className="btn">4</button>
            <button onClick={() => (setValue(value + '5'))} className="btn">5</button>
            <button onClick={() => (setValue(value + '6'))} className="btn">6</button>
            <button onClick={() => (setValue(value + '-'))} className="btn text-warning">-</button>
          </div>
          <div className="d-flex justify-content-evenly align-items-center mt-3 button-row">
            <button onClick={() => (setValue(value + '1'))} className="btn">1</button>
            <button onClick={() => (setValue(value + '2'))} className="btn">2</button>
            <button onClick={() => (setValue(value + '3'))} className="btn">3</button>
            <button onClick={() => (setValue(value + '+'))} className="btn text-warning">+</button>
          </div>
          <div className="d-flex justify-content-evenly align-items-center mt-3 button-row">
            <button onClick={() => (calculateSquareRoot())} className="btn">√</button>
            <button onClick={() => (setValue(value + '0'))} className="btn">0</button>
            <button onClick={() => (setValue(value + '.'))} className="btn">.</button>
            <button onClick={result} className="btn bg-warning">=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Numbers;
