import { Star, MapPin, BadgeCheck } from "lucide-react";

const professionals = [
  {
    id: 1,
    name: "Rahul Sharma",
    profession: "Electrician",
    city: "Pune",
    rating: 4.9,
    reviews: 128,
    price: "₹500 / Visit",
  },
  {
    id: 2,
    name: "Priya Patil",
    profession: "Mehendi Artist",
    city: "Mumbai",
    rating: 4.8,
    reviews: 93,
    price: "₹2,000 / Event",
  },
  {
    id: 3,
    name: "Amit Jadhav",
    profession: "Plumber",
    city: "Nashik",
    rating: 4.7,
    reviews: 85,
    price: "₹400 / Visit",
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    profession: "Tailor",
    city: "Pune",
    rating: 4.9,
    reviews: 176,
    price: "₹350 / Service",
  },
];

function FeaturedProfessionals() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="flex items-center justify-between mb-10">

        <div>

          <h2 className="text-3xl font-bold text-stone-800">
            Featured Professionals
          </h2>

          <p className="mt-2 text-stone-500">
            Discover top-rated professionals trusted by hundreds of customers.
          </p>

        </div>

        <button className="font-semibold text-orange-600 hover:underline">
          View All →
        </button>

      </div>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">

        {professionals.map((pro) => (

          <div
            key={pro.id}
            className="relative rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >

            {/* Verified Badge */}

            <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">

              <BadgeCheck size={14} />

              Verified

            </div>

            {/* Avatar */}

            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-2xl font-bold text-white">

              {pro.name
                .split(" ")
                .map((word) => word[0])
                .join("")}

            </div>

            {/* Name */}

            <h3 className="text-center text-xl font-bold text-stone-800">

              {pro.name}

            </h3>

            {/* Profession */}

            <p className="mt-1 text-center font-medium text-orange-600">

              {pro.profession}

            </p>

            {/* City */}

            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-stone-500">

              <MapPin size={15} />

              {pro.city}

            </div>

            {/* Rating */}

            <div className="mt-4 flex justify-center">

              <div className="flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1">

                <Star
                  size={15}
                  fill="gold"
                  className="text-yellow-500"
                />

                <span className="font-semibold">

                  {pro.rating}

                </span>

                <span className="text-xs text-stone-500">

                  ({pro.reviews})

                </span>

              </div>

            </div>

            {/* Price */}

            <div className="mt-5 text-center">

              <p className="text-xs uppercase tracking-wide text-stone-500">

                Starting From

              </p>

              <p className="mt-1 text-2xl font-bold text-orange-600">

                {pro.price}

              </p>

            </div>

            {/* Buttons */}

            <div className="mt-6 space-y-3">

              <button className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-500 py-2.5 font-semibold text-white transition hover:from-orange-600 hover:to-red-600">

                Book Now

              </button>

              <button className="w-full rounded-xl border border-orange-300 py-2.5 font-semibold text-orange-600 transition hover:bg-orange-50">

                View Profile

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedProfessionals;