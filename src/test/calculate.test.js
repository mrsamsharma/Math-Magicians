import calculate from '../logic/calculate';

test('AC equals 0', () => {
    expect(calculate({ total: '3', next: '2', operation: '+', }, 'AC')).toEqual({ total: null, next: null, operation: null, });
    expect(calculate({ total: '5', next: '5', operation: '+', }, '+')).toEqual({ total: '10', next: null, operation: '+', });
    expect(calculate({ total: '5', next: '10', operation: '-', }, '-')).toEqual({ total: '-5', next: null, operation: '-', });
    expect(calculate({ total: '3', next: '2', operation: 'x', }, 'x')).toEqual({ total: '6', next: null, operation: 'x', });
    expect(calculate({ total: '1', next: '2', operation: '%', }, '%')).toEqual({ total: '1', next: null, operation: '%', });
});
