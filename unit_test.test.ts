import { merge } from './merge';
import { expect, test } from '@jest/globals';

test('basic test case', () => {
    expect(merge([1, 4, 5], [1, 2, 3], [4, 3, 2])).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5]);
});

test('arrays with different lengths', () => {
    expect(merge([1, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7], [4, 3, 2])).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7]);
});

test('one empty array', () => {
    expect(merge([1, 3, 5], [], [6, 4, 2])).toEqual([1, 2, 3, 4, 5, 6]);
});

test('two empty arrays', () => {
    expect(merge([], [2, 4, 6], [])).toEqual([2, 4, 6]);
});

test('empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
});

test('duplicate single value', () => {
    expect(merge([2], [2], [2])).toEqual([2, 2, 2]);
});

test('only zero values', () => {
    expect(merge([0, 0, 0], [0, 0], [0, 0, 0])).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
});

test('arrays with negative numbers', () => {
    expect(merge([-3, -1, 0], [-2, 2, 4], [1, 0, -1])).toEqual([-3, -2, -1, -1, 0, 0, 1, 2, 4]);
});




