function prepareInput(input: string): number[][] {
  return input.split("\n")
    .map(
      (line) => line.split(/\s+/).map((num) => parseInt(num, 10))
    )
}

export default function partOne(input: string): number {
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
