import { useState, React } from 'react';
import '../styles.css';
import calculate from '../logic/calculate';
import Digit from '../components/Digit';
import Operation from '../components/Operation';
import Navbar from '../components/Navbar';

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
      <Navbar />
      <h1 className="heading">Let&apos;s do some Maths!</h1>
      <div className="calculator-grid">
        <div className="output">
          <div className="operand" data-testid="operand">
            {total}
            {operation}
            {next}
          </div>
        </div>
        <Operation operation="AC" eventHandle={eventHandle} />
        <Operation operation="+/-" eventHandle={eventHandle} />
        <Operation operation="%" eventHandle={eventHandle} />
        <Operation operation="÷" eventHandle={eventHandle} />
        <Digit digit="7" eventHandle={eventHandle} />
        <Digit digit="8" eventHandle={eventHandle} />
        <Digit digit="9" eventHandle={eventHandle} />
        <Operation operation="x" eventHandle={eventHandle} />
        <Digit digit="4" eventHandle={eventHandle} />
        <Digit digit="5" eventHandle={eventHandle} />
        <Digit digit="6" eventHandle={eventHandle} />
        <Operation operation="-" eventHandle={eventHandle} />
        <Digit digit="1" eventHandle={eventHandle} />
        <Digit digit="2" eventHandle={eventHandle} />
        <Digit digit="3" eventHandle={eventHandle} />
        <Operation operation="+" eventHandle={eventHandle} />
        <Digit digit="0" eventHandle={eventHandle} />
        <Digit digit="." eventHandle={eventHandle} />
        <button type="button" className="span-two" onClick={eventHandle}>=</button>
      </div>
    </>
  );
}

export default Calculator;
