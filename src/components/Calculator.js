import { useState, React } from 'react';
import '../styles.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
function Calculator() {
  const [data, setData] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const eventHandle = (e) => {
    setData((data) => calculate(data, e.target.textContent));
  };

  const { total, next, operation } = data;
  return (
    <>
      <h1 className="heading">Let&apos;s do some Maths!</h1>
      <div className="calculator-grid">
        <div className="output">
          <div className="operand">
            {total}
            {operation}
            {next}
          </div>
        </div>
        <button type="button" onClick={eventHandle}>AC</button>
        <button type="button" onClick={eventHandle}>+/-</button>
        <button type="button" onClick={eventHandle}>%</button>
        <button className="orange" type="button" onClick={eventHandle}>÷</button>
        <button type="button" onClick={eventHandle}>7</button>
        <button type="button" onClick={eventHandle}>8</button>
        <button type="button" onClick={eventHandle}>9</button>
        <button className="orange" type="button" onClick={eventHandle}>x</button>
        <button type="button" onClick={eventHandle}>4</button>
        <button type="button" onClick={eventHandle}>5</button>
        <button type="button" onClick={eventHandle}>6</button>
        <button className="orange" type="button" onClick={eventHandle}>-</button>
        <button type="button" onClick={eventHandle}>1</button>
        <button type="button" onClick={eventHandle}>2</button>
        <button type="button" onClick={eventHandle}>3</button>
        <button className="orange" type="button" onClick={eventHandle}>+</button>
        <button type="button" onClick={eventHandle}>0</button>
        <button type="button" onClick={eventHandle}>.</button>
        <button type="button" className="span-two" onClick={eventHandle}>=</button>
      </div>
    </>
  );
}

export default Calculator;
