import { describe, test, it, expect } from 'vitest';
import { factorial, fizzBuzz, max } from '../src/intro';

describe('max', () => {
  // ----------------test cases------------

  it('should return the first arumgnet if it is greater', () => {
    // Arrange
    const a = 2;
    const b = 1;

    // Act
    const result = max(a, b);

    // Assert: Verify the result
    expect(result).toBe(2);
  });

  it('should return the second arumgnet if it is greater', () => {
    expect(max(1, 2)).toBe(2);
  });

  it('should return the first arumgnet if arguments are equal', () => {
    expect(max(3, 3)).toBe(3);
  });
});

describe('fizzBuzz', () => {
  it('Should return fizz', () => {
    expect(fizzBuzz(9)).toBe('Fizz');
  });

  it('Should return Buzz', () => {
    expect(fizzBuzz(20)).toBe('Buzz');
  });

  it('Should return FizzBuz', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('Should return 1', () => {
    expect(fizzBuzz(1)).toBe('1');
  });
});

describe('factorial', () => {
  it('case of 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('cases of 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('cases of 4', () => {
    expect(factorial(4)).toBe(24);
  });

  it('case of 11', () => {
    expect(factorial(11)).toBe(39916800);
  });

  it('case of -4', () => {
    expect(factorial(-4)).toBe(undefined);
  });
});
