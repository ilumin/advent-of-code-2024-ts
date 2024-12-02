import { expect, it } from 'bun:test'
import { readInput } from './utils'

it('Should read input file', async () => {
  const path = './src/day-01.input.txt';
  const input = await readInput(path);
  expect(input).not.toBeUndefined();
});
