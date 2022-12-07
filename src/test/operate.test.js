import Big from 'big.js';
import operate from '../logic/operate';

const one = Big(1); 
const two = Big(2); 

test('1 + 2 equals 3', () =>{
    expect(operate(one, two, '+')).toEqual('3');
    expect(operate(one, two, '%')).toEqual('1');
    expect(operate(one, two, 'x')).toEqual('2');
    expect(operate(one, two, '÷')).toEqual('0.5');
    expect(operate(one, two, '%')).toEqual('1');
});
