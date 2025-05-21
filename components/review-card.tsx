import { Star } from "lucide-react"
import Image from "next/image"

interface Review {
  id: string
  author: string
  rating: number
  date: string
  comment: string
  avatar: string
}

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="border-b pb-6">
      <div className="flex items-start gap-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image src={review.avatar || "/placeholder.svg"} alt={review.author} fill className="object-cover" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-medium">{review.author}</h4>
            <span className="text-sm text-gray-500">{review.date}</span>
          </div>
          <div className="flex text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-current" : "text-gray-300"}`} />
            ))}
          </div>
          <p className="text-gray-700 text-sm">{review.comment}</p>
        </div>
      </div>
    </div>
  )
}
