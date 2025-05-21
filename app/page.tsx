import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ServiceFilter } from "@/components/service-filter"
import { FeaturedPetshops } from "@/components/featured-petshops"

export default function Home() {
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
      <main className="flex-1">
        <section className="bg-gradient-to-r from-teal-500 to-emerald-500 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Encontre o melhor petshop para o seu pet</h1>
            <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Compare preços, serviços e avaliações dos petshops mais próximos de você
            </p>
            <div className="max-w-3xl mx-auto bg-white rounded-lg p-4 shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input type="text" placeholder="Digite sua localização ou CEP" className="w-full h-12" />
                </div>
                <div className="flex-1">
                  <Input type="text" placeholder="Qual serviço você procura?" className="w-full h-12" />
                </div>
                <Button className="h-12 px-6 bg-teal-600 hover:bg-teal-700">
                  <Search className="mr-2 h-4 w-4" />
                  Buscar
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Serviços mais buscados</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ServiceFilter name="Banho e Tosa" icon="scissors" count={1240} />
              <ServiceFilter name="Veterinário" icon="stethoscope" count={856} />
              <ServiceFilter name="Pet Sitter" icon="home" count={523} />
              <ServiceFilter name="Hospedagem" icon="hotel" count={412} />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Petshops em destaque</h2>
              <Link href="/busca" className="text-teal-600 hover:text-teal-700 font-medium">
                Ver todos
              </Link>
            </div>
            <FeaturedPetshops />
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Como funciona</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Busque</h3>
                <p className="text-gray-600">
                  Digite sua localização e o serviço que procura para encontrar petshops próximos a você.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    className="h-8 w-8 text-teal-600"
                  >
                    <path d="M11 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
                    <path d="M18 12.5V12" />
                    <circle cx="16" cy="19" r="2" />
                    <path d="M22 19h-4" />
                    <circle cx="8" cy="9" r="2" />
                    <path d="M10.3 7.5c.5-.9 1.4-1.5 2.4-1.5 1.4 0 2.6 1 2.9 2.4" />
                    <path d="M13.4 12.9c-.3.8-1 1.5-1.9 1.5-1.1 0-2-.9-2-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Compare</h3>
                <p className="text-gray-600">
                  Compare preços, serviços, avaliações e distância para escolher o melhor petshop.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    className="h-8 w-8 text-teal-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Agende</h3>
                <p className="text-gray-600">
                  Agende o serviço diretamente pela plataforma e aproveite descontos exclusivos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">PetCompare</h3>
              <p className="text-gray-400 text-sm">
                A melhor plataforma para encontrar e comparar serviços para o seu pet.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/como-funciona" className="hover:text-white transition-colors">
                    Como funciona
                  </Link>
                </li>
                <li>
                  <Link href="/para-petshops" className="hover:text-white transition-colors">
                    Para Petshops
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    Perguntas Frequentes
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="/termos" className="hover:text-white transition-colors">
                    Termos de Uso
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Inscreva-se</h3>
              <p className="text-gray-400 text-sm mb-4">Receba novidades e promoções exclusivas.</p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  className="rounded-r-none bg-gray-800 border-gray-700 text-white"
                />
                <Button className="rounded-l-none bg-teal-600 hover:bg-teal-700">Enviar</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 PetCompare. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
