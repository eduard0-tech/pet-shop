import Link from "next/link"
import { ChevronDown, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { PetshopCard } from "@/components/petshop-card"

export default function SearchPage() {
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
      <div className="bg-teal-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Digite sua localização ou CEP"
                className="w-full h-12 bg-white"
                defaultValue="São Paulo, SP"
              />
            </div>
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Qual serviço você procura?"
                className="w-full h-12 bg-white"
                defaultValue="Banho e Tosa"
              />
            </div>
            <Button className="h-12 px-6 bg-teal-700 hover:bg-teal-800">
              <Search className="mr-2 h-4 w-4" />
              Buscar
            </Button>
          </div>
        </div>
      </div>
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-64 shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Filtros</h3>
                  <Button variant="ghost" size="sm" className="text-teal-600 h-auto p-0">
                    Limpar todos
                  </Button>
                </div>

                <div className="border-t pt-4 pb-2">
                  <h4 className="font-medium mb-3">Serviços</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="banho" defaultChecked />
                      <label htmlFor="banho" className="text-sm">
                        Banho
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="tosa" defaultChecked />
                      <label htmlFor="tosa" className="text-sm">
                        Tosa
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="hidratacao" />
                      <label htmlFor="hidratacao" className="text-sm">
                        Hidratação
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="unhas" />
                      <label htmlFor="unhas" className="text-sm">
                        Corte de Unhas
                      </label>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 pb-2">
                  <h4 className="font-medium mb-3">Preço</h4>
                  <div className="px-2">
                    <Slider defaultValue={[150]} max={300} step={1} />
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>R$0</span>
                      <span>R$150</span>
                      <span>R$300</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 pb-2">
                  <h4 className="font-medium mb-3">Avaliação</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="5stars" />
                      <label htmlFor="5stars" className="text-sm flex items-center">
                        <div className="flex text-yellow-400">★★★★★</div>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="4stars" defaultChecked />
                      <label htmlFor="4stars" className="text-sm flex items-center">
                        <div className="flex text-yellow-400">★★★★</div>
                        <span className="text-gray-400">★</span>
                        <span className="ml-1 text-gray-500">ou mais</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="3stars" />
                      <label htmlFor="3stars" className="text-sm flex items-center">
                        <div className="flex text-yellow-400">★★★</div>
                        <span className="text-gray-400">★★</span>
                        <span className="ml-1 text-gray-500">ou mais</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 pb-2">
                  <h4 className="font-medium mb-3">Distância</h4>
                  <div className="px-2">
                    <Slider defaultValue={[5]} max={20} step={1} />
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>0km</span>
                      <span>5km</span>
                      <span>20km</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Aplicar Filtros</Button>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Resultados para "Banho e Tosa"</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Ordenar por:</span>
                  <Button variant="outline" size="sm" className="flex items-center">
                    Relevância
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <PetshopCard
                  id="1"
                  name="Pet & Cia"
                  rating={4.8}
                  reviewCount={124}
                  distance={1.2}
                  address="Rua Augusta, 1500 - Consolação"
                  services={[
                    { name: "Banho", price: 60 },
                    { name: "Tosa", price: 80 },
                    { name: "Banho e Tosa", price: 120 },
                  ]}
                  discount={15}
                  imageUrl="/placeholder.svg?height=200&width=300"
                />

                <PetshopCard
                  id="2"
                  name="Mundo Pet"
                  rating={4.5}
                  reviewCount={89}
                  distance={2.4}
                  address="Av. Paulista, 1000 - Bela Vista"
                  services={[
                    { name: "Banho", price: 55 },
                    { name: "Tosa", price: 75 },
                    { name: "Banho e Tosa", price: 110 },
                  ]}
                  discount={10}
                  imageUrl="/placeholder.svg?height=200&width=300"
                />

                <PetshopCard
                  id="3"
                  name="PetLove"
                  rating={4.7}
                  reviewCount={156}
                  distance={3.1}
                  address="Rua Oscar Freire, 500 - Jardins"
                  services={[
                    { name: "Banho", price: 65 },
                    { name: "Tosa", price: 85 },
                    { name: "Banho e Tosa", price: 130 },
                  ]}
                  discount={0}
                  imageUrl="/placeholder.svg?height=200&width=300"
                />

                <PetshopCard
                  id="4"
                  name="Amigo Pet"
                  rating={4.3}
                  reviewCount={72}
                  distance={3.8}
                  address="Rua Teodoro Sampaio, 800 - Pinheiros"
                  services={[
                    { name: "Banho", price: 50 },
                    { name: "Tosa", price: 70 },
                    { name: "Banho e Tosa", price: 100 },
                  ]}
                  discount={20}
                  imageUrl="/placeholder.svg?height=200&width=300"
                />

                <PetshopCard
                  id="5"
                  name="Pet Feliz"
                  rating={4.6}
                  reviewCount={103}
                  distance={4.2}
                  address="Av. Brigadeiro Faria Lima, 1500 - Itaim Bibi"
                  services={[
                    { name: "Banho", price: 70 },
                    { name: "Tosa", price: 90 },
                    { name: "Banho e Tosa", price: 140 },
                  ]}
                  discount={5}
                  imageUrl="/placeholder.svg?height=200&width=300"
                />
              </div>

              <div className="mt-8 flex justify-center">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Anterior
                  </Button>
                  <Button variant="outline" size="sm" className="bg-teal-50">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Próxima
                  </Button>
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
