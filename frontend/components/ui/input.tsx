import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        placeholder={props.title}
        className={cn(
          "flex h-10 w-full rounded-md bg-[#616A6B] text-white hover:bg-[#616A6B]/90 px-3 py-2  placeholder:text-gray-200 focus-visible:outline-none md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
