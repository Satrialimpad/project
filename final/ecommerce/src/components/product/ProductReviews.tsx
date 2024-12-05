"use client"

import React, { useState } from 'react'
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// Types
interface Review {
  id: string
  user: string
  rating: number
  comment: string
  date: string
  helpful: number
  reported: boolean
}

interface ProductReviewsProps {
  productId: string
  reviews: Review[]
  averageRating: number
  totalReviews: number
}

const ProductReviews: React.FC<ProductReviewsProps> = ({
  productId,
  reviews,
  averageRating,
  totalReviews,
}) => {
  const [showReviewDialog, setShowReviewDialog] = useState(false)
  const [newRating, setNewRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [comment, setComment] = useState('')

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementasi submit review ke API
    console.log({
      productId,
      rating: newRating,
      comment
    })
    setShowReviewDialog(false)
    setNewRating(0)
    setComment('')
  }

  const RatingStars = ({ rating }: { rating: number }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>
    )
  }

  const InteractiveRatingStars = () => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-6 w-6 cursor-pointer ${
              star <= (hoverRating || newRating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-200 text-gray-200'
            }`}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => setNewRating(star)}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Review Summary */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Customer Reviews</h2>
          <div className="flex items-center gap-2">
            <RatingStars rating={averageRating} />
            <span className="text-sm text-gray-600">
              Based on {totalReviews} reviews
            </span>
          </div>
        </div>
        <Button onClick={() => setShowReviewDialog(true)}>
          Write a Review
        </Button>
      </div>

      {/* Review List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-gray-200 pb-4 last:border-0"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{review.user}</p>
                <RatingStars rating={review.rating} />
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <p className="mt-2 text-gray-600">{review.comment}</p>
            <div className="mt-2 flex items-center gap-4">
              <button className="text-sm text-gray-500 hover:text-gray-700">
                Helpful ({review.helpful})
              </button>
              <button className="text-sm text-gray-500 hover:text-gray-700">
                Report
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Review Dialog */}
      <Dialog open={showReviewDialog} onOpenChange={setShowReviewDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Write a Review</DialogTitle>
            <DialogDescription>
              Share your thoughts about this product with other customers
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <InteractiveRatingStars />
            </div>
            <div>
              <label
                htmlFor="comment"
                className="block text-sm font-medium text-gray-700"
              >
                Review
              </label>
              <textarea
                id="comment"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="What did you like or dislike about this product?"
                required
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowReviewDialog(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={!newRating || !comment.trim()}>
                Submit Review
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProductReviews