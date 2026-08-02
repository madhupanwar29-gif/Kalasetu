import {
  Wrench,
  Paintbrush,
  Hammer,
  Scissors,
  Camera,
  Laptop,
  Music,
  Utensils,
} from "lucide-react";

const categories = [
  {
    name: "Electrician",
    icon: Wrench,
    professionals: "120+ Professionals",
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Painter",
    icon: Paintbrush,
    professionals: "85+ Professionals",
    color: "from-pink-400 to-red-500",
  },
  {
    name: "Carpenter",
    icon: Hammer,
    professionals: "90+ Professionals",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Tailor",
    icon: Scissors,
    professionals: "60+ Professionals",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Photographer",
    icon: Camera,
    professionals: "70+ Professionals",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Computer Repair",
    icon: Laptop,
    professionals: "45+ Professionals",
    color: "from-slate-600 to-slate-800",
  },
  {
    name: "Musician",
    icon: Music,
    professionals: "35+ Professionals",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Catering",
    icon: Utensils,
    professionals: "110+ Professionals",
    color: "from-orange-500 to-red-500",
  },
];

function HomeCategories() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
            Browse Categories
          </h2>

          <p className="mt-3 text-stone-600 max-w-2xl mx-auto">
            Explore a wide range of verified professionals across different
            service categories.
          </p>

        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => {

            const Icon = category.icon;

            return (

              <div
                key={category.name}
                className="group rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              >

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto`}
                >

                  <Icon
                    size={30}
                    className="text-white"
                  />

                </div>

                <h3 className="mt-6 text-xl font-bold text-center text-stone-800">

                  {category.name}

                </h3>

                <p className="mt-2 text-center text-sm text-stone-500">

                  {category.professionals}

                </p>

                <div className="mt-6 text-center">

                  <span className="font-semibold text-orange-600 opacity-0 group-hover:opacity-100 transition">

                    Explore →

                  </span>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default HomeCategories;