

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

  if (number <= 10) {
    const index = number - 1
    return pattern[index]
  }

  if (number === 50) return 'L'
  if (number === 100) return 'C'
  if (number === 500) return 'D'
  if (number === 1000) return 'M'
}
