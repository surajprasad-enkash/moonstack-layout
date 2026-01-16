export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL?: string
      API_URL: string
      API_KEY?: string
      X_API_KEY: string
      NEXT_PUBLIC_X_API_KEY: string
    }
  }
}
