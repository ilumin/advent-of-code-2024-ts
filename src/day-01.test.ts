import { describe, expect, it } from 'bun:test'
import partOne from './day-01'
import { readInput } from './utils'

const demo = `3   4
4   3
2   5
1   3
3   9
3   3`

const input = './src/day-01.input.txt'

describe('2024-12-01', () => {
  it('part 1', async () => {
    expect(partOne(demo)).toBe(11)

    const data = await readInput(input)
    expect(partOne(data)).toBe(1603498)
  })
});

