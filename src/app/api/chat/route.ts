import { loadPDFText } from "@/lib/loadPdf"
export const runtime = "nodejs"

export async function POST(req: Request) {
  const { message } = await req.json()

  // 1️⃣ Load document
  const documentText = await loadPDFText()

  // 2️⃣ Build AI prompt
  const prompt = `
You are an AI assistant.

Answer ONLY using the provided document.
If answer is not in document, say:
"I don't know based on the provided document."

DOCUMENT:
${documentText}

QUESTION:
${message}
`

  // 3️⃣ Send to Ollama
  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "phi3",
      prompt,
      stream: false,
    }),
  })

  const data = await response.json()

  return Response.json({
    reply: data.response,
  })
}
