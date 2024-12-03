export function prepareInput(input: string): string {
  return input.split(/don\'t\(\)/g)
    .map((t, idx) => {
      if (idx === 0) return t
      if (!t.match(/do\(\)/g)) return ''
      
      return t.split(/do\(\)/g).slice(1).join('')
    })
    .join('')
}

export function parseInput(input: string): number[][] {
  const regex = /mul\((\d+),(\d+)\)/g
  const matches = input.matchAll(regex)
  const result = []

  for (const m of matches) {
    result.push([
      parseInt(m[1], 10), 
      parseInt(m[2], 10)
    ])
  }

  return result
}

export function partOne(input: string): number {
  return parseInput(input).reduce((acc, [a, b]) => acc + (a * b), 0)
}

export function partTwo(input: string): number {
  return partOne(
    prepareInput(input)
  )
}
