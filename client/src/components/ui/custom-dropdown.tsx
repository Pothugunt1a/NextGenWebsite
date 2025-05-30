
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const CustomDropdown = DropdownMenuPrimitive.Root

const CustomDropdownTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex items-center justify-between w-full px-4 py-2 text-left bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200",
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown className="h-4 w-4 text-gray-500" />
  </DropdownMenuPrimitive.Trigger>
))
CustomDropdownTrigger.displayName = "CustomDropdownTrigger"

const CustomDropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & {
    image?: string
    imageAlt?: string
  }
>(({ className, children, image, imageAlt = "Dropdown image", sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[320px] overflow-hidden rounded-lg border bg-white shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    >
      <div className="flex">
        {/* Content with left border */}
        <div className="flex-1 border-l-4 border-primary pl-4 pr-4 py-4">
          {children}
        </div>
        {/* Right side image */}
        {image && (
          <div className="w-24 h-24 flex-shrink-0 p-2">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover rounded-md"
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
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
    className={cn("px-2 py-1.5 text-sm font-semibold text-gray-900", className)}
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
    className={cn("-mx-1 my-1 h-px bg-gray-200", className)}
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
