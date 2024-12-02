import { describe, expect, it } from 'bun:test'
import { diffLessThanLimit, isAllDecreasing, isAllIncreasing, partOne } from './day-02'
import { readInput } from './utils'

const demo = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

describe('2024-12-02', async () => {
  const data = await readInput('./src/day-02.input.txt')

  it('rule: all decreasing', () => {
    expect(isAllDecreasing([7, 6, 4, 2, 1])).toBe(true)
    expect(isAllDecreasing([8, 6, 4, 4, 1])).toBe(false)
  })

  it('rule: all increasing', () => {
    expect(isAllIncreasing([1, 3, 6, 7, 9])).toBe(true)
    expect(isAllDecreasing([1, 3, 2, 4, 5])).toBe(false)
  })

  it('rule: diff less than 3', () => {
    expect(diffLessThanLimit([7, 6, 4, 2, 1], 3)).toBe(true)
    expect(diffLessThanLimit([1, 2, 7, 8, 9], 3)).toBe(false)
    expect(diffLessThanLimit([9, 7, 6, 2, 1], 3)).toBe(false)
    expect(diffLessThanLimit([8, 6, 4, 4, 1], 3)).toBe(false)
    expect(diffLessThanLimit([1, 3, 6, 7, 9], 3)).toBe(true)
  })

  it('part one', () => {
    expect(partOne(demo)).toBe(2)
    expect(partOne(data)).toBe(483)
  })
});
