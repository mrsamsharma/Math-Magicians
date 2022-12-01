import { useState, React } from 'react';
import '../styles.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
function Calculator() {
  
 const eventHandle = (e) => {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  const { total, next, operation } = this.state;
    return (
      <div className="calculator-grid">
        <div className="output">
          <div className="operand">
            {total}
            {operation}
            {next}
          </div>
        </div>
        <button type="button" onClick={this.eventHandle}>AC</button>
        <button type="button" onClick={this.eventHandle}>+/-</button>
        <button type="button">%</button>
        <button className="orange" type="button" onClick={this.eventHandle}>÷</button>
        <button type="button" onClick={this.eventHandle}>7</button>
        <button type="button" onClick={this.eventHandle}>8</button>
        <button type="button" onClick={this.eventHandle}>9</button>
        <button className="orange" type="button" onClick={this.eventHandle}>x</button>
        <button type="button" onClick={this.eventHandle}>4</button>
        <button type="button" onClick={this.eventHandle}>5</button>
        <button type="button" onClick={this.eventHandle}>6</button>
        <button className="orange" type="button" onClick={this.eventHandle}>-</button>
        <button type="button" onClick={this.eventHandle}>1</button>
        <button type="button" onClick={this.eventHandle}>2</button>
        <button type="button" onClick={this.eventHandle}>3</button>
        <button className="orange" type="button" onClick={this.eventHandle}>+</button>
        <button type="button" onClick={this.eventHandle}>0</button>
        <button type="button" onClick={this.eventHandle}>.</button>
        <button type="button" className="span-two" onClick={this.eventHandle}>=</button>
      </div>
    );
  
}

export default Calculator;
