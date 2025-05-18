import { createContext, useContext, useState, ReactNode } from "react"

interface ShowCompletedContextType {
  showCompleted: boolean
  setShowCompleted: (v: boolean) => void
}

const ShowCompletedContext = createContext<
  ShowCompletedContextType | undefined
>(undefined)

export function ShowCompletedProvider({ children }: { children: ReactNode }) {
  const [showCompleted, setShowCompleted] = useState(false)
  return (
    <ShowCompletedContext.Provider value={{ showCompleted, setShowCompleted }}>
      {children}
    </ShowCompletedContext.Provider>
  )
}

export function useShowCompleted() {
  const ctx = useContext(ShowCompletedContext)
  if (!ctx)
    throw new Error("useShowCompleted must be inside ShowCompletedProvider")
  return ctx
}
