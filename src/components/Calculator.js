import DigitButton from "./digitButton";

class Calculator extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
      return (
        <div className="calculator-grid">
          <div className="output">
            <div className="operand">0</div>
          </div>
          <button>AC</button>
          <DigitButton operation="+/-" />
          <DigitButton operation="%" />
          <DigitButton operation="÷" />
          <DigitButton digit="7" />
          <DigitButton digit="8" />
          <DigitButton digit="9" />
          <DigitButton operation="X" />
          <DigitButton digit="4" />
          <DigitButton digit="5" />
          <DigitButton digit="6" />
          <DigitButton operation="-" />
          <DigitButton digit="1" />
          <DigitButton digit="2" />
          <DigitButton digit="3" />
          <DigitButton operation="+" />
          <DigitButton digit="0" />
          <DigitButton digit="." />
          <button className="span-two">=</button>
        </div>
      );
    }
  }

  export default Calculator;