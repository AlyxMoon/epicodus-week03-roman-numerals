# Epicodus | Week 03 | Convert to Roman Numeral

>Write a method to convert numbers into Roman numerals. Roman numerals are based on seven symbols. 
>
> The most basic rule is that you add the value of all the symbols: so II is 2, LXVI is 66, etc.
>
> The exception is that there may not be more than three of the same characters in a row. Instead, you switch to subtraction. So instead of writing IIII for 4, you write IV (for 5 minus 1); and instead of writing LXXXX for 90, you write XC.
>
> You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC. You cannot count higher than 3,999 in Roman numerals.

Roman Numeral Equivalents:
```
Symbol  Value
I       1
V       5
X       10
L       50
C       100
D       500
M       1,000
```

## Live Site
[https://alyxmoon.github.io/epicodus-week03-roman-numerals/](https://alyxmoon.github.io/epicodus-week03-roman-numerals/)

## Instructions
1. Write a method to convert numbers into Roman numerals

2. Do not add any UI logic until you've completed your business logic (and included testing).

## Tests

### Describe: convertToRomanNumeral();

```
Test: 'It converts 1 to I'
Code: convertToRomanNumeral(1)
Expected: 'I'
```

```
Test: 'It converts 5 to V'
Code: convertToRomanNumeral(5)
Expected: 'V'
```

```
Test: 'It converts 10 to X'
Code: convertToRomanNumeral(10)
Expected: 'X'
```

```
Test: 'It converts 50 to L'
Code: convertToRomanNumeral(50)
Expected: 'L'
```

```
Test: 'It converts 100 to C'
Code: convertToRomanNumeral(100)
Expected: 'C'
```

```
Test: 'It converts 500 to D'
Code: convertToRomanNumeral(500)
Expected: 'D'
```

```
Test: 'It converts 1000 to M'
Code: convertToRomanNumeral(1000)
Expected: 'M'
```

```
Test: 'It converts 2 to II'
Code: convertToRomanNumeral(2)
Expected: 'II'
```

```
Test: 'It converts 3 to III'
Code: convertToRomanNumeral(3)
Expected: 'III'
```

```
Test: 'It converts 4 to IV'
Code: convertToRomanNumeral(4)
Expected: 'IV'
```