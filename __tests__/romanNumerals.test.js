import { convertToRomanNumerals } from '../js/scripts-logic.js'

describe('Roman Numerals', () => {
  test('converts 1 to I', () => {
    expect(convertToRomanNumerals(1)).toEqual('I')
  })
  
  test('converts 5 to V', () => {
    expect(convertToRomanNumerals(5)).toEqual('V')
  })

  test('converts 10 to X', () => {
    expect(convertToRomanNumerals(10)).toEqual('X')
  })
  
  test('converts 50 to L', () => {
    expect(convertToRomanNumerals(50)).toEqual('L')
  })

  test('converts 100 to C', () => {
    expect(convertToRomanNumerals(100)).toEqual('C')
  }) 

  test('converts 500 to D', () => {
    expect(convertToRomanNumerals(500)).toEqual('D')
  })

  test('converts 1000 to M', () => {
    expect(convertToRomanNumerals(1000)).toEqual('M')
  })

  test('converts 4 to IV', () => {
    expect(convertToRomanNumerals(4)).toEqual('IV')
  })
  
  test('converts 11 to XI', () => {
    expect(convertToRomanNumerals(11)).toEqual('XI')
  })

  test('returns 0 as Romans didn\'t have zero!', () => {
    expect(convertToRomanNumerals(0)).toEqual('Romans didn\'t have zero!')
  })
  
  test('converts 153 to CLIII', () => {
    expect(convertToRomanNumerals(153)).toEqual('CLIII')
  })

})