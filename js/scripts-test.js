function logDescription (description) {
  console.log(`%c ${description}`, 'font-weight: bold;')

  $('#output-tests li:last-child')
    .addClass('text-light')
    .append(`
    <h6 class="font-bold">${description}</h6>
  `)
}

function logResult (actual, expected) {
  if (actual !== expected) {
    console.log(
      `%c -- Incorrect | actual: ${actual} | expected: ${expected}`,
      'background-color: #290000',
    )

    $('#output-tests li:last-child')
      .addClass('bg-danger')
      .append(`
      <p>Incorrect | actual: ${actual} | expected: ${expected}</p>
    `)
  } else {
    console.log('%c -- passed!', 'background-color: green')

    $('#output-tests li:last-child').addClass('bg-success')
  }
}

const tests = [
  () => {
    logDescription('It converts 1 to I')

    const actual = convertToRomanNumerals(1)
    const expected = 'I'

    logResult(actual, expected)
  },
  
  () => {
    logDescription('It converts 5 to V')

    const actual = convertToRomanNumerals(5)
    const expected = 'V'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 10 to X')

    const actual = convertToRomanNumerals(10)
    const expected = 'X'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 50 to L')

    const actual = convertToRomanNumerals(50)
    const expected = 'L'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 100 to C')

    const actual = convertToRomanNumerals(100)
    const expected = 'C'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 500 to D')

    const actual = convertToRomanNumerals(500)
    const expected = 'D'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 1000 to M')

    const actual = convertToRomanNumerals(1000)
    const expected = 'M'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 2 to II')

    const actual = convertToRomanNumerals(2)
    const expected = 'II'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 3 to III')

    const actual = convertToRomanNumerals(3)
    const expected = 'III'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 4 to IV')

    const actual = convertToRomanNumerals(4)
    const expected = 'IV'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 6 to VI')

    const actual = convertToRomanNumerals(6)
    const expected = 'VI'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 8 to VIII')

    const actual = convertToRomanNumerals(8)
    const expected = 'VIII'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 9 to IX')

    const actual = convertToRomanNumerals(9)
    const expected = 'IX'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 11 to XI')

    const actual = convertToRomanNumerals(11)
    const expected = 'XI'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 15 to XV')

    const actual = convertToRomanNumerals(15)
    const expected = 'XV'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 19 to XIX')

    const actual = convertToRomanNumerals(19)
    const expected = 'XIX'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 20 to XX')

    const actual = convertToRomanNumerals(20)
    const expected = 'XX'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 21 to XXI')

    const actual = convertToRomanNumerals(21)
    const expected = 'XXI'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 68 to LXVIII')

    const actual = convertToRomanNumerals(68)
    const expected = 'LXVIII'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 93 to XCIII')

    const actual = convertToRomanNumerals(93)
    const expected = 'XCIII'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 99 to XCIX')

    const actual = convertToRomanNumerals(99)
    const expected = 'XCIX'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 345 to CCCXLV')

    const actual = convertToRomanNumerals(345)
    const expected = 'CCCXLV'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 699 to DCXCIX')

    const actual = convertToRomanNumerals(699)
    const expected = 'DCXCIX'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 980 to CMLXXX')

    const actual = convertToRomanNumerals(980)
    const expected = 'CMLXXX'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 2100 to MMC')

    const actual = convertToRomanNumerals(2100)
    const expected = 'MMC'

    logResult(actual, expected)
  },

  () => {
    logDescription('It converts 3499 to MMMCDXCIX')

    const actual = convertToRomanNumerals(3499)
    const expected = 'MMMCDXCIX'

    logResult(actual, expected)
  },

]

function runTests () {
  tests.forEach(test => {
    $('#output-tests').append(`
      <li class="list-group-item" />
    `)

    test()
  })
}

runTests()