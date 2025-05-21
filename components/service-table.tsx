import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface Service {
  name: string
  price: number
}

interface ServiceTableProps {
  services: Service[]
}

export function ServiceTable({ services }: ServiceTableProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Serviço</TableHead>
            <TableHead className="text-right">Preço</TableHead>
            <TableHead className="w-[100px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell className="text-right">R$ {service.price.toFixed(2)}</TableCell>
              <TableCell>
                <Button size="sm" className="w-full bg-teal-600 hover:bg-teal-700">
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
