
export function convertToRomanNumerals (number) {
  if (number === 1) return 'I'
  if (number === 5) return 'V'
  if (number === 10) return 'X'
  if (number === 50) return 'L'
  if (number === 100) return 'C'
  if (number === 500) return 'D'
  if (number === 1000) return 'M'

  const patternForOnes = [
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
  ]

  const patternForTens = [
    'X',
    'XX',
    'XXX',
    'XL',
    'L',
    'LX',
    'LXX',
    'LXXX',
    'XC',
    'C',
  ]

  const patternForHundreds = [
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM',
    'M',
  ]
  
  let result = ''
  let numAsString = number.toString()
  // numAsString = '4'

  // figure out how to get the ones place
  if (number > 0) {
    const onesPlace = numAsString[numAsString.length - 1]
    result += patternForOnes[onesPlace - 1]
  }

  if (number >= 10) {
    const tensPlace = numAsString[numAsString.length - 2]
    result = patternForTens[tensPlace - 1] + result
  }

  if (result === '') {
    return 'Romans didn\'t have zero!'
  }

  if (number >= 100) {
    const hundrethsPlace = numAsString[numAsString.length - 3]
    result = patternForHundreds[hundrethsPlace - 1] + result
  }
  
  return result
}
