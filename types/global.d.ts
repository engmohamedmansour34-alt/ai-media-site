export {}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }

  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GA_ID: string
    }
  }
}
