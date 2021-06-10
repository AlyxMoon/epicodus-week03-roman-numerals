

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
  const hundredsPlace = Math.floor(number / 100) % 10
  const thousandCount = Math.floor(number / 1000)

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

  if (hundredsPlace) {
    const index  = hundredsPlace - 1

    let patternAtPlace = pattern[index]
      .replace(/X/g, 'M')
      .replace(/V/g, 'D')
      .replace(/I/g, 'C')
    convertedNumber = patternAtPlace + convertedNumber
  }

  if (thousandCount) {
    convertedNumber = 'M'.repeat(thousandCount) + convertedNumber
  }

  return convertedNumber
}
