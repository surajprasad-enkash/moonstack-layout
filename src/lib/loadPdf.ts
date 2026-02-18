import fs from "fs"
import path from "path"

// ✅ force Node require (bypasses Turbopack issues)
const pdfParse = require("pdf-parse")

let cachedText: string | null = null

export async function loadPDFText() {
  if (cachedText) return cachedText

  const filePath = path.join(process.cwd(), "public", "docs", "company.pdf")

  const dataBuffer = fs.readFileSync(filePath)

  const data = await pdfParse(dataBuffer)

  cachedText = data.text

  return cachedText
}
