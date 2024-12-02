export async function readInput(path: string): Promise<string> {
  const file = Bun.file(path)
  return await file.text()
}
