import Link from "next/link"
import Image from "next/image"
import { MapPin, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Service {
  name: string
  price: number
}

interface PetshopCardProps {
  id: string
  name: string
  rating: number
  reviewCount: number
  distance: number
  address: string
  services: Service[]
  discount: number
  imageUrl: string
}

export function PetshopCard({
  id,
  name,
  rating,
  reviewCount,
  distance,
  address,
  services,
  discount,
  imageUrl,
}: PetshopCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative">
            <div className="aspect-video md:aspect-square relative">
              <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
              {discount > 0 && <Badge className="absolute top-2 left-2 bg-teal-600">{discount}% OFF</Badge>}
            </div>
          </div>
          <div className="p-4 md:p-6 flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">{name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400 mr-2">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-gray-900 text-sm">{rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm">({reviewCount} avaliações)</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-gray-500 text-sm">{distance} km</span>
                </div>
                <div className="flex items-start mb-4">
                  <MapPin className="h-4 w-4 text-gray-400 mt-0.5 mr-1 shrink-0" />
                  <span className="text-gray-500 text-sm">{address}</span>
                </div>
              </div>
              <Link href={`/petshop/${id}`} className="mt-2 md:mt-0">
                <Button variant="outline" size="sm">
                  Ver detalhes
                </Button>
              </Link>
            </div>

            <div className="border-t pt-4 mt-2">
              <h4 className="font-medium mb-2">Serviços disponíveis:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {services.map((service, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-sm">{service.name}</span>
                    <div className="flex items-center">
                      {discount > 0 && (
                        <span className="text-xs text-gray-500 line-through mr-1">R${service.price}</span>
                      )}
                      <span className="text-sm font-medium">
                        R${discount > 0 ? ((service.price * (100 - discount)) / 100).toFixed(0) : service.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <Link href={`/petshop/${id}`}>
                <Button className="bg-teal-600 hover:bg-teal-700">Agendar serviço</Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
