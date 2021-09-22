import { SquareVal } from "../components/Square";
import { checkwinner } from "./game-utils";

// 7 cols 6 rows
test("True for horizontal win", () => {
  const g: SquareVal[][] = [
    [null, null, null, null, null, 1],
    [null, null, null, null, null, 1],
    [null, null, null, null, null, 1],
    [null, null, null, null, null, 1],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ];
  expect(checkwinner(g, 1)).toBe(true);
  expect(checkwinner(g, -1)).toBe(false);
});

test("True for vertical win", () => {
  const v: SquareVal = 1,
    g: SquareVal[][] = [
      [null, null, 1, 1, 1, 1],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
    ];
  expect(checkwinner(g, 1)).toBe(true);
  expect(checkwinner(g, -1)).toBe(false);
});

test("True for desc-diag win", () => {
  const g: SquareVal[][] = [
    [1, null, null, null, null, null],
    [null, 1, null, null, null, null],
    [null, null, 1, null, null, null],
    [null, null, null, 1, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ];
  expect(checkwinner(g, 1)).toBe(true);
  expect(checkwinner(g, -1)).toBe(false);
});

test("True for asc-diag win", () => {
  const g: SquareVal[][] = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, 1, null, null],
    [null, null, 1, null, null, null],
    [null, 1, null, null, null, null],
    [1, null, null, null, null, null],
  ];
  expect(checkwinner(g, 1)).toBe(true);
  expect(checkwinner(g, -1)).toBe(false);
});

test("False for broken vertical", () => {
  const g: SquareVal[][] = [
    [1, 1, 1, -1, 1, 1],
    [-1, -1, -1, 1, -1, -1],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ];
  expect(checkwinner(g, 1)).toBe(false);
  expect(checkwinner(g, -1)).toBe(false);
});

test("Works on smaller board", () => {
  const g: SquareVal[][] = [
    [null, null, null, 1],
    [null, null, 1, -1],
    [null, 1, -1, -1],
    [1, -1, -1, -1],
  ];
  expect(checkwinner(g, 1)).toBe(true);
  expect(checkwinner(g, -1)).toBe(false);
});
