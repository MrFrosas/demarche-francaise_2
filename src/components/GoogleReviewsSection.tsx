import { Star } from "lucide-react";

export const GoogleReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      author: "M. K.",
      text: "Service professionnel et efficace",
      rating: 5,
    },
    {
      id: 2,
      author: "S. B.",
      text: "Accompagnement de qualité",
      rating: 5,
    },
    {
      id: 3,
      author: "L. R.",
      text: "Démarches simplifiées",
      rating: 4,
    }
  ];

  return (
    <section className="py-12 bg-[#F6F6F6]" aria-labelledby="reviews-title">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <div className="flex items-center gap-4 mb-8">
              <img
                src="/lovable-uploads/f6a396bc-0e17-4f31-a81d-01b79e603a06.png"
                alt="Logo Google"
                className="w-6 h-6"
                width="24"
                height="24"
              />
              <div>
                <div className="text-base font-medium text-gray-900">Avis Google</div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-gray-900" aria-label="Note de 4.8 sur 5">4.8</span>
                  <div className="flex gap-0.5" aria-hidden="true">
                    {[...Array(5)].map((_, index) => (
                      <Star 
                        key={index} 
                        className="w-4 h-4 text-[#666666] fill-[#666666]" 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">182 avis</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {reviews.map((review) => (
                <div 
                  key={review.id}
                  className="p-4 bg-[#F6F6F6] rounded-lg"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, index) => (
                        <Star 
                          key={index}
                          className="w-3 h-3 text-[#666666] fill-[#666666]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{review.text}</p>
                  <p className="text-xs text-gray-500">{review.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};