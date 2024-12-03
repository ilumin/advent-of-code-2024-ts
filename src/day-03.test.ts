import { describe, expect, it } from 'bun:test'
import { partOne, partTwo, prepareInput } from './day-03'
import { readInput } from './utils'

const cases: [string, number][] = [
  ['mul(44,46)', 44*46 ],
  ['mul(123,4)', 123*4 ],
  ['mul(4*, mul(6,9!, ?(12,34)', 0],
  ['mul ( 2 , 4 )', 0],
  ['xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))', (2*4 + 5*5 + 11*8 + 8*5)]
]

describe('2024-12-03', async () => {

  const input = await readInput('./src/day-03.input.txt')

  it.each(cases)('rule: %s = %d', (input: string, expected: number) => {
    expect(partOne(input)).toBe(expected)
  })

  it.skip('part 1', () => {
    expect(partOne(input)).toBe(175615763)
  })

  it('part 2', () => {
    expect(prepareInput(`don't()aaadon't()bbbdon't()cccdo()ddddon't()`)).toBe('ddd')
    expect(partTwo(`xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`)).toBe(48)
    expect(partTwo(input)).toBe(74361272)
  })
});