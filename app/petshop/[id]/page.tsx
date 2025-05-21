import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Clock, Star, Calendar, ChevronRight, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ReviewCard } from "@/components/review-card"
import { ServiceTable } from "@/components/service-table"

export default function PetshopPage({ params }: { params: { id: string } }) {
  // Simulando dados do petshop baseado no ID
  const petshop = {
    id: params.id,
    name: "Pet & Cia",
    rating: 4.8,
    reviewCount: 124,
    address: "Rua Augusta, 1500 - Consolação, São Paulo - SP",
    phone: "(11) 3456-7890",
    hours: "Segunda a Sábado: 8h às 19h | Domingo: 9h às 15h",
    description:
      "Pet & Cia é um petshop completo com mais de 10 anos de experiência no mercado. Oferecemos serviços de banho e tosa, veterinário, hotel para pets, e uma loja completa com produtos de qualidade para seu animal de estimação.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    services: {
      banhoTosa: [
        { name: "Banho - Cães Pequenos", price: 50 },
        { name: "Banho - Cães Médios", price: 70 },
        { name: "Banho - Cães Grandes", price: 90 },
        { name: "Tosa Higiênica", price: 40 },
        { name: "Tosa Completa - Cães Pequenos", price: 70 },
        { name: "Tosa Completa - Cães Médios", price: 90 },
        { name: "Tosa Completa - Cães Grandes", price: 120 },
        { name: "Banho e Tosa - Cães Pequenos", price: 100 },
        { name: "Banho e Tosa - Cães Médios", price: 140 },
        { name: "Banho e Tosa - Cães Grandes", price: 180 },
        { name: "Hidratação", price: 50 },
        { name: "Corte de Unhas", price: 25 },
      ],
      veterinario: [
        { name: "Consulta Veterinária", price: 150 },
        { name: "Vacinação V8/V10", price: 120 },
        { name: "Vacinação Antirrábica", price: 80 },
        { name: "Exame de Sangue", price: 100 },
        { name: "Ultrassonografia", price: 200 },
        { name: "Castração - Cães Pequenos", price: 350 },
        { name: "Castração - Cães Médios", price: 450 },
        { name: "Castração - Cães Grandes", price: 550 },
      ],
      outros: [
        { name: "Hospedagem - Diária", price: 80 },
        { name: "Transporte - Ida e Volta", price: 60 },
        { name: "Adestramento - Sessão", price: 120 },
        { name: "Pet Sitter - Hora", price: 50 },
      ],
    },
    reviews: [
      {
        id: "1",
        author: "Carlos Silva",
        rating: 5,
        date: "15/04/2024",
        comment:
          "Excelente atendimento! Meu cachorro sempre volta feliz e cheiroso. A equipe é muito atenciosa e carinhosa com os animais.",
        avatar: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "2",
        author: "Ana Oliveira",
        rating: 4,
        date: "02/04/2024",
        comment:
          "Gostei muito do serviço de banho e tosa. Minha cachorrinha ficou linda! O único ponto negativo é que às vezes demora um pouco para ser atendido.",
        avatar: "/placeholder.svg?height=50&width=50",
      },
      {
        id: "3",
        author: "Marcos Santos",
        rating: 5,
        date: "28/03/2024",
        comment: "Veterinários muito competentes. Resolveram o problema do meu gato rapidamente. Recomendo!",
        avatar: "/placeholder.svg?height=50&width=50",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-teal-600">PetCompare</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/como-funciona" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Como funciona
            </Link>
            <Link href="/para-petshops" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Para Petshops
            </Link>
            <Link href="/contato" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Contato
            </Link>
            <Button variant="outline" className="text-sm">
              Entrar
            </Button>
            <Button className="text-sm bg-teal-600 hover:bg-teal-700">Cadastre-se</Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <div className="bg-white">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-teal-600">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <Link href="/busca" className="hover:text-teal-600">
                Busca
              </Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <span className="text-gray-900">{petshop.name}</span>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h1 className="text-3xl font-bold mb-2">{petshop.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="ml-1 text-gray-900 font-medium">{petshop.rating}</span>
                  </div>
                  <span className="text-gray-500">({petshop.reviewCount} avaliações)</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-teal-600 mt-0.5 mr-2 shrink-0" />
                    <span className="text-gray-700">{petshop.address}</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-teal-600 mt-0.5 mr-2 shrink-0" />
                    <span className="text-gray-700">{petshop.phone}</span>
                  </div>
                  <div className="flex items-start md:col-span-2">
                    <Clock className="h-5 w-5 text-teal-600 mt-0.5 mr-2 shrink-0" />
                    <span className="text-gray-700">{petshop.hours}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
                  {petshop.images.map((image, index) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${petshop.name} - Imagem ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 mb-8">{petshop.description}</p>

                <Tabs defaultValue="banhoTosa">
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="banhoTosa">Banho e Tosa</TabsTrigger>
                    <TabsTrigger value="veterinario">Veterinário</TabsTrigger>
                    <TabsTrigger value="outros">Outros Serviços</TabsTrigger>
                  </TabsList>
                  <TabsContent value="banhoTosa">
                    <ServiceTable services={petshop.services.banhoTosa} />
                  </TabsContent>
                  <TabsContent value="veterinario">
                    <ServiceTable services={petshop.services.veterinario} />
                  </TabsContent>
                  <TabsContent value="outros">
                    <ServiceTable services={petshop.services.outros} />
                  </TabsContent>
                </Tabs>

                <div className="mt-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Avaliações</h2>
                    <Button variant="outline" className="text-teal-600">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Escrever avaliação
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {petshop.reviews.map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Button variant="outline">Ver todas as avaliações</Button>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
                  <h3 className="text-xl font-bold mb-4">Agende um serviço</h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">Serviço</label>
                      <select className="w-full rounded-md border border-gray-300 p-2">
                        <option>Banho - Cães Pequenos (R$ 50)</option>
                        <option>Banho - Cães Médios (R$ 70)</option>
                        <option>Banho - Cães Grandes (R$ 90)</option>
                        <option>Tosa Higiênica (R$ 40)</option>
                        <option>Banho e Tosa - Cães Pequenos (R$ 100)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Data</label>
                      <div className="relative">
                        <input type="date" className="w-full rounded-md border border-gray-300 p-2" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Horário</label>
                      <select className="w-full rounded-md border border-gray-300 p-2">
                        <option>09:00</option>
                        <option>10:00</option>
                        <option>11:00</option>
                        <option>13:00</option>
                        <option>14:00</option>
                        <option>15:00</option>
                        <option>16:00</option>
                        <option>17:00</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Nome do Pet</label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 p-2"
                        placeholder="Ex: Rex"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Observações</label>
                      <textarea
                        className="w-full rounded-md border border-gray-300 p-2"
                        rows={3}
                        placeholder="Alguma informação importante sobre seu pet..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="border-t border-b py-4 mb-4">
                    <div className="flex justify-between mb-2">
                      <span>Banho - Cães Pequenos</span>
                      <span>R$ 50,00</span>
                    </div>
                    <div className="flex justify-between mb-2 text-teal-600">
                      <span>Desconto PetCompare (10%)</span>
                      <span>-R$ 5,00</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>R$ 45,00</span>
                    </div>
                  </div>

                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    Agendar agora
                  </Button>

                  <p className="text-xs text-gray-500 mt-4 text-center">
                    Ao agendar, você concorda com os nossos termos de serviço e política de cancelamento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© 2024 PetCompare. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
