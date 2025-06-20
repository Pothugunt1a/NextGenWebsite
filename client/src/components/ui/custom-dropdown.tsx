
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"

const CustomDropdown = DropdownMenuPrimitive.Root

const CustomDropdownTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex items-center justify-between gap-2 px-4 py-2 text-sm font-medium bg-transparent hover:text-primary transition-colors focus:outline-none focus:text-primary [&[data-state=open]]:text-primary",
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown className="h-4 w-4 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
  </DropdownMenuPrimitive.Trigger>
))
CustomDropdownTrigger.displayName = "CustomDropdownTrigger"

const CustomDropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & {
    image?: string
    imageAlt?: string
  }
>(({ className, children, image, imageAlt = "Dropdown image", sideOffset = 8, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[400px] max-w-[600px] overflow-hidden rounded-lg bg-white backdrop-blur-sm shadow-xl border border-gray-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    >
      <div className="flex min-h-[200px]">
        {/* Content with left border */}
        <div className="flex-1 border-l-4 border-primary pl-6 pr-4 py-6 text-black">
          {children}
        </div>
        {/* Right side image */}
        {image && (
          <div className="w-48 flex-shrink-0 relative overflow-hidden">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
))
CustomDropdownContent.displayName = "CustomDropdownContent"

const CustomDropdownItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    highlighted?: boolean
  }
>(({ className, highlighted = false, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-sm px-0 py-2 text-sm outline-none transition-colors hover:text-primary focus:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      highlighted && "text-primary",
      className
    )}
    {...props}
  />
))
CustomDropdownItem.displayName = "CustomDropdownItem"

const CustomDropdownLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-0 py-1.5 text-sm font-semibold text-black", className)}
    {...props}
  />
))
CustomDropdownLabel.displayName = "CustomDropdownLabel"

const CustomDropdownSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("my-2 h-px bg-gray-700", className)}
    {...props}
  />
))
CustomDropdownSeparator.displayName = "CustomDropdownSeparator"

export {
  CustomDropdown,
  CustomDropdownTrigger,
  CustomDropdownContent,
  CustomDropdownItem,
  CustomDropdownLabel,
  CustomDropdownSeparator,
}
