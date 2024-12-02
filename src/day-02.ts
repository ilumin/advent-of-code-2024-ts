function prepareData(data: string): number[][] {
  return data.split("\n")
    .map(
      (line) => line.split(/\s+/).map((num) => parseInt(num, 10))
    )
}

export function isAllDecreasing(input: number[]): boolean {
  const idxSize = input.length - 1
  return input.every((num, idx, arr) => {
    if (idx === idxSize) return true
    return num > arr[idx + 1]
  })
}

export function isAllIncreasing(input: number[]): boolean {
  const idxSize = input.length - 1
  return input.every((num, idx, arr) => {
    if (idx === idxSize) return true
    return num < arr[idx + 1]
  })
}

export function diffLessThanLimit(input: number[], limit: number): boolean {
  const idxSize = input.length - 1
  return input.every((num, idx, arr) => {
    if (idx === idxSize) return true
    const diff = Math.abs(num - arr[idx + 1])
    return diff && diff <= limit
  })
}

export function isValidSequence(row: number[]): boolean {
  if (!isAllDecreasing(row) && !isAllIncreasing(row)) return false
  return diffLessThanLimit(row, 3)
}

export function partOne(data: string): number {
  return prepareData(data)
    .filter(isValidSequence)
    .length
}