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