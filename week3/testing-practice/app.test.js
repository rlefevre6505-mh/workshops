// app.test.js
import { findMaxValue, factorial, areArraysEqual, toTitleCase } from "./app.js";

//import vitest
import { test, expect, describe } from "vitest";

describe("findMaxValueTests", function () {
  test("maxVal 1", function () {
    const result = findMaxValue([3, 7, 2, 8, 5]);
    const expected = 8;
    expect(result).toBe(expected);
  });

  test("maxVal 2", function () {
    const result = findMaxValue([]);
    const expected = null;
    expect(result).toBe(expected);
  });

  test("maxVal 3", function () {
    const result = findMaxValue([-10, -5, -1]);
    const expected = -1;
    expect(result).toBe(expected);
  });

  test("maxVal 4", function () {
    const result = findMaxValue("not an array");
    const expected = null;
    expect(result).toBe(expected);
  });
});

describe("factorialsTests", function () {
  test("factorial 1", function () {
    const result = factorial(5);
    const expected = 120;
    expect(result).toBe(expected);
  });

  test("factorial 2", function () {
    const result = factorial(0);
    const expected = 1;
    expect(result).toBe(expected);
  });

  test("factorial 3", function () {
    const result = factorial(-3);
    const expected = null;
    expect(result).toBe(expected);
  });

  test("factorial 4", function () {
    const result = factorial("5");
    const expected = null;
    expect(result).toBe(expected);
  });
});

describe("areArraysEqualTests", function () {
  test("arrays equal 1", function () {
    const result = areArraysEqual([1, 2, 3], [1, 2, 3]);
    const expected = true;
    expect(result).toBe(expected);
  });

  test("arrays equal 2", function () {
    const result = areArraysEqual([1, 2, 3], [3, 2, 1]);
    const expected = false;
    expect(result).toBe(expected);
  });

  test("arrays equal 3", function () {
    const result = areArraysEqual([], []);
    const expected = true;
    expect(result).toBe(expected);
  });

  test("arrays equal 4", function () {
    const result = areArraysEqual([1, 2], [1, 2, 3]);
    const expected = false;
    expect(result).toBe(expected);
  });
});

describe("toTitleCaseTests", function () {
  test("to title case 1", function () {
    const result = toTitleCase("hello world");
    const expected = "Hello World";
    expect(result).toBe(expected);
  });

  test("to title case 2", function () {
    const result = toTitleCase("JAVASCRIPT IS FUN");
    const expected = "Javascript Is Fun";
    expect(result).toBe(expected);
  });

  test("to title case 3", function () {
    const result = toTitleCase("123 testing titles");
    const expected = "123 Testing Titles";
    expect(result).toBe(expected);
  });

  test("to title case 4", function () {
    const result = toTitleCase(12345);
    const expected = "";
    expect(result).toBe(expected);
  });
});
