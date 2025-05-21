import { Scissors, Stethoscope, Home, Hotel } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

interface ServiceFilterProps {
  name: string
  icon: string
  count: number
}

export function ServiceFilter({ name, icon, count }: ServiceFilterProps) {
  const getIcon = () => {
    switch (icon) {
      case "scissors":
        return <Scissors className="h-5 w-5" />
      case "stethoscope":
        return <Stethoscope className="h-5 w-5" />
      case "home":
        return <Home className="h-5 w-5" />
      case "hotel":
        return <Hotel className="h-5 w-5" />
      default:
        return <Scissors className="h-5 w-5" />
    }
  }

  return (
    <Link href={`/busca?service=${encodeURIComponent(name)}`}>
      <Button
        variant="outline"
        className="w-full h-auto py-4 px-4 flex flex-col items-center justify-center gap-2 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200"
      >
        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
          {getIcon()}
        </div>
        <span className="font-medium">{name}</span>
        <span className="text-xs text-gray-500">{count} petshops</span>
      </Button>
    </Link>
  )
}
