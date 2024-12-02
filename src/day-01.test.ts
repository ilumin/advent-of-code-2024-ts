import { describe, expect, it } from 'bun:test'
import { partOne, partTwo } from './day-01'
import { readInput } from './utils'

const demo = `3   4
4   3
2   5
1   3
3   9
3   3`

const input = './src/day-01.input.txt'

describe('2024-12-01', async () => {

  const data = await readInput(input)

  it('part 1', () => {
    expect(partOne(demo)).toBe(11)
    expect(partOne(data)).toBe(1603498)
  })

  it('part 2', () => {
    expect(partTwo(demo)).toBe(31)
    expect(partTwo(data)).toBe(25574739)
  })
});

