export function parseInput(input: string): number[][] {
  const regex = /mul\((\d+),(\d+)\)/g
  const match = input.matchAll(regex)
  const result = []

  for (const m of match) {
    result.push([
      parseInt(m[1], 10), 
      parseInt(m[2], 10)
    ])
  }

  return result
}

export function partOne(input: string): unknown {
  return parseInput(input).reduce((acc, [a, b]) => acc + (a * b), 0)
}
