"use client"

import { FC, useEffect } from "react"
import EmptyState from "./components/EmptyState"

interface ErrorStateProps {
  error: Error
}

const ErrorState: FC<ErrorStateProps> = ({
  error
}) => {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <EmptyState 
    title="Uh Oh"
    subtitle="Something went wrong"/> 
  )
}

export default ErrorState