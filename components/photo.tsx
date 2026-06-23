import { cn } from "@/lib/utils"

/**
 * Renders a photo as a CSS background layered on top of a fallback gradient.
 *
 * Why background-image rather than <img>: the stock photo URLs can't be verified
 * from the build sandbox, and a failed <img> shows an ugly broken-image icon. A
 * background-image that 404s simply shows nothing, revealing the `grad` fallback
 * beneath it — so the layout always looks intentional. The image sits first in the
 * background-image stack (top layer); the gradient is the second layer (fallback).
 */
export function Photo({
  src,
  grad,
  label,
  className,
  overlayClassName,
  position = "center",
  children,
}: {
  src: string
  grad: string
  label: string
  className?: string
  overlayClassName?: string
  position?: string
  children?: React.ReactNode
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("relative overflow-hidden bg-cover", className)}
      style={{
        backgroundImage: `url("${src}"), ${grad}`,
        backgroundSize: "cover, cover",
        backgroundPosition: `${position}, center`,
      }}
    >
      {overlayClassName ? <div className={cn("absolute inset-0", overlayClassName)} /> : null}
      {children}
    </div>
  )
}
