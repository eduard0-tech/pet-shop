import { PetshopCard } from "@/components/petshop-card"

export function FeaturedPetshops() {
  const featuredPetshops = [
    {
      id: "1",
      name: "Pet & Cia",
      rating: 4.8,
      reviewCount: 124,
      distance: 1.2,
      address: "Rua Augusta, 1500 - Consolação",
      services: [
        { name: "Banho", price: 60 },
        { name: "Tosa", price: 80 },
        { name: "Banho e Tosa", price: 120 },
      ],
      discount: 15,
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "2",
      name: "Mundo Pet",
      rating: 4.5,
      reviewCount: 89,
      distance: 2.4,
      address: "Av. Paulista, 1000 - Bela Vista",
      services: [
        { name: "Banho", price: 55 },
        { name: "Tosa", price: 75 },
        { name: "Banho e Tosa", price: 110 },
      ],
      discount: 10,
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "3",
      name: "PetLove",
      rating: 4.7,
      reviewCount: 156,
      distance: 3.1,
      address: "Rua Oscar Freire, 500 - Jardins",
      services: [
        { name: "Banho", price: 65 },
        { name: "Tosa", price: 85 },
        { name: "Banho e Tosa", price: 130 },
      ],
      discount: 0,
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="grid gap-4">
      {featuredPetshops.map((petshop) => (
        <PetshopCard
          key={petshop.id}
          id={petshop.id}
          name={petshop.name}
          rating={petshop.rating}
          reviewCount={petshop.reviewCount}
          distance={petshop.distance}
          address={petshop.address}
          services={petshop.services}
          discount={petshop.discount}
          imageUrl={petshop.imageUrl}
        />
      ))}
    </div>
  )
}
