

function convertToRomanNumerals (number) {
  if (number === 1) return 'I'
  if (number === 5) return 'V'
  if (number === 10) return 'X'
  if (number === 50) return 'L'
  if (number === 100) return 'C'
  if (number === 500) return 'D'
  if (number === 1000) return 'M'

  if (number === 2) return 'II'
  if (number === 3) return 'III'
  if (number === 4) return 'IV'
}
