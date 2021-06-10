

function convertToRomanNumerals (number) {
  const pattern = [
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

  let convertedNumber = ''

  const onesPlace = number % 10
  const tensPlace = Math.floor(number / 10) % 10

  if (onesPlace) {
    const index = onesPlace - 1
    convertedNumber += pattern[index]
  }

  if (tensPlace) {
    const index  = tensPlace - 1

    let patternAtPlace = pattern[index]
      .replace(/X/g, 'C')
      .replace(/V/g, 'L')
      .replace(/I/g, 'X')
    convertedNumber = patternAtPlace + convertedNumber
  }

  if (number === 50) return 'L'
  if (number === 100) return 'C'
  if (number === 500) return 'D'
  if (number === 1000) return 'M'

  return convertedNumber
}
