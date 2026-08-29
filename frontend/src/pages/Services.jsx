import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const serviceCategories = [
  {
    id: "home",
    name: "Home & Repair",
    icon: "🏠",
    description: "Reliable professionals for your home needs.",
    services: [
      "Plumber",
      "Electrician",
      "Painter",
      "Carpenter",
      "Cleaner",
      "Gardener",
      "AC & Appliance Repair",
    ],
  },

  {
    id: "beauty",
    name: "Beauty & Personal Care",
    icon: "💄",
    description: "Beauty and personal care professionals.",
    services: [
      "Beautician",
      "Makeup Artist",
      "Mehendi Artist",
      "Hair Stylist",
      "Nail Artist",
      "Personal Groomer",
    ],
  },

  {
    id: "events",
    name: "Events & Entertainment",
    icon: "🎉",
    description: "Make your special occasions memorable.",
    services: [
      "Photographer",
      "Videographer",
      "Caterer",
      "Event Decorator",
      "Musician",
      "Singer",
      "DJ",
      "Magician",
    ],
  },

  {
    id: "fashion",
    name: "Fashion & Tailoring",
    icon: "👗",
    description: "Skilled professionals for your fashion needs.",
    services: [
      "Tailor",
      "Fashion Designer",
      "Embroidery Artist",
      "Clothing Alteration",
    ],
  },

  {
    id: "digital",
    name: "Computer & Digital",
    icon: "💻",
    description: "Technology and digital services.",
    services: [
      "Computer Repair",
      "Mobile Repair",
      "Graphic Designer",
      "Video Editor",
      "Website Developer",
    ],
  },

  {
    id: "education",
    name: "Education & Skills",
    icon: "📚",
    description: "Learn from skilled teachers and tutors.",
    services: [
      "Home Tutor",
      "Music Teacher",
      "Dance Teacher",
      "Art Teacher",
      "Language Tutor",
    ],
  },

  {
    id: "food",
    name: "Food & Household",
    icon: "🍳",
    description: "Helpful professionals for everyday needs.",
    services: [
      "Cook",
      "Baker",
      "Home Caterer",
      "Babysitter",
    ],
  },
];

function Services() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCategories = serviceCategories
    .filter((category) => {
      if (selectedCategory === "all") {
        return true;
      }

      return category.id === selectedCategory;
    })
    .map((category) => {
      const filteredServices = category.services.filter((service) =>
        service.toLowerCase().includes(search.toLowerCase())
      );

      return {
        ...category,
        services: filteredServices,
      };
    })
    .filter((category) => category.services.length > 0);

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <main className="min-h-screen bg-linear-to-br from-orange-50 via-amber-50 to-violet-100">

        {/* ================= HERO SECTION ================= */}
        <section className="px-5 pb-12 pt-28 md:px-10 lg:px-20">

          <div className="mx-auto max-w-6xl text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-600">
              KalaSetu Services
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
              Find the Right{" "}
              <span className="text-violet-700">
                Professional
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
              Discover trusted professionals for your everyday needs,
              special occasions, home services, learning and more.
            </p>

            {/* SEARCH BAR */}
            <div className="mx-auto mt-8 max-w-2xl">

              <div className="flex items-center rounded-2xl border border-stone-200 bg-white p-2 shadow-lg shadow-violet-100">

                <span className="px-3 text-xl">
                  🔍
                </span>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search for a service..."
                  className="w-full bg-transparent px-2 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 md:text-base"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="mr-2 rounded-lg px-3 py-2 text-sm font-semibold text-stone-500 transition hover:bg-stone-100 hover:text-stone-800"
                  >
                    Clear
                  </button>
                )}

              </div>

            </div>

          </div>

        </section>

        {/* ================= CATEGORY FILTER ================= */}
        <section className="px-5 md:px-10 lg:px-20">

          <div className="mx-auto max-w-6xl">

            <div className="mb-8 flex flex-wrap justify-center gap-3">

              {/* ALL SERVICES */}
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  selectedCategory === "all"
                    ? "bg-violet-700 text-white shadow-lg shadow-violet-200"
                    : "bg-white text-stone-700 shadow-sm hover:bg-violet-50 hover:text-violet-700"
                }`}
              >
                All Services
              </button>

              {/* CATEGORIES */}
              {serviceCategories.map((category) => (

                <button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    setSelectedCategory(category.id)
                  }
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    selectedCategory === category.id
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                      : "bg-white text-stone-700 shadow-sm hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  {category.icon} {category.name}
                </button>

              ))}

            </div>

          </div>

        </section>

        {/* ================= SERVICES SECTION ================= */}
        <section className="px-5 pb-20 md:px-10 lg:px-20">

          <div className="mx-auto max-w-6xl">

            {filteredCategories.length > 0 ? (

              <div className="space-y-12">

                {filteredCategories.map((category) => (

                  <div key={category.id}>

                    {/* CATEGORY TITLE */}
                    <div className="mb-5 flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-md">
                        {category.icon}
                      </div>

                      <div>

                        <h2 className="text-2xl font-extrabold text-stone-900">
                          {category.name}
                        </h2>

                        <p className="mt-1 text-sm text-stone-500">
                          {category.description}
                        </p>

                      </div>

                    </div>

                    {/* SERVICE CARDS */}
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                      {category.services.map((service) => (

                        <button
                          key={service}
                          type="button"
                          className="group rounded-2xl border border-stone-200 bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100"
                        >

                          <div className="mb-4 flex items-center justify-between">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-xl transition group-hover:bg-violet-100">
                              {category.icon}
                            </div>

                            <span className="text-lg text-violet-400 transition group-hover:translate-x-1">
                              →
                            </span>

                          </div>

                          <h3 className="font-bold text-stone-800 transition group-hover:text-violet-700">
                            {service}
                          </h3>

                          <p className="mt-2 text-xs leading-5 text-stone-500">
                            Find skilled{" "}
                            {service.toLowerCase()} professionals.
                          </p>

                        </button>

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            ) : (

              /* ================= NO RESULTS ================= */
              <div className="rounded-3xl border border-stone-200 bg-white px-6 py-16 text-center shadow-sm">

                <div className="text-5xl">
                  🔍
                </div>

                <h2 className="mt-5 text-2xl font-bold text-stone-800">
                  No services found
                </h2>

                <p className="mt-2 text-sm text-stone-500">
                  Try searching for another service.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("all");
                  }}
                  className="mt-6 rounded-xl bg-violet-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-800"
                >
                  View All Services
                </button>

              </div>

            )}

          </div>

        </section>

        {/* ================= BECOME PROFESSIONAL ================= */}
        <section className="px-5 pb-20 md:px-10 lg:px-20">

          <div className="mx-auto max-w-6xl">

            <div className="overflow-hidden rounded-3xl bg-linear-to-r from-violet-700 via-violet-600 to-orange-500 p-8 text-white shadow-2xl md:p-12">

              <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

                <div className="max-w-2xl">

                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-200">
                    Have a Skill?
                  </p>

                  <h2 className="text-3xl font-extrabold md:text-4xl">
                    Turn Your Skills Into Opportunities
                  </h2>

                  <p className="mt-4 leading-7 text-violet-100">
                    Are you a skilled professional? Join KalaSetu
                    and connect with people looking for your services.
                  </p>

                </div>

                <button
                  type="button"
                  className="whitespace-nowrap rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-violet-700 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  Become a Professional →
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default Services;