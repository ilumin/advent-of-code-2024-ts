function prepareInput(input: string): number[][] {
  return input.split("\n")
    .map(
      (line) => line.split(/\s+/).map((num) => parseInt(num, 10))
    )
}

export function partOne(input: string): number {
  const parsedInput = prepareInput(input);
  const [left, right] = parsedInput
    .reduce<number[][]>(
      ([left, right], [a, b]) => [[...left, a], [...right, b]],
      [[], []]
    )
    .map(arr => {
      return arr.toSorted((a, b) => a - b)
    })

  return left.reduce((prev, curr, idx) => {
    return prev + Math.abs(curr - right[idx])
  }, 0)
}

export function partTwo(input: string): number {
  const parsedInput = prepareInput(input);
  const [left, right] = parsedInput
    .reduce<number[][]>(
      ([left, right], [a, b]) => [[...left, a], [...right, b]],
      [[], []]
    )
  const cache = new Map<number, number>()

  return left
    .map((l) => {
      if (cache.has(l)) {
        return cache.get(l)!
      }

      const count = right.filter(r => r === l).length * l
      cache.set(l, count)
      
      return count
    })
    .reduce((p, c) => p + c, 0)
}
