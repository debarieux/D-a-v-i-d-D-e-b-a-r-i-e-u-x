"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: number }
>(({ className, value, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800",
        className
      )}
      {...props}
    >
      <div
        className="h-full w-full flex-1 bg-gradient-to-b transition-all"
        style={{
          backgroundImage: `var(--progress-gradient)`,
          transform: `translateX(-${100 - (value || 0)}%)`
        }}
      />
    </div>
  )
})

Progress.displayName = "Progress"

export { Progress }
