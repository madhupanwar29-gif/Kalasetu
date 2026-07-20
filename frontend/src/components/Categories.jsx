function Categories() {

    const categories = [

        { icon: "🎨", name: "Artisans" },
        { icon: "🧵", name: "Tailoring" },
        { icon: "💄", name: "Beauty" },
        { icon: "📸", name: "Photography" },
        { icon: "🏠", name: "Home Services" },
        { icon: "🎉", name: "Events" },
        { icon: "📚", name: "Tutors" },
        { icon: "💻", name: "Freelancers" }

    ];

    return (

        <section className="categories">

            <h2>Popular Categories</h2>

            <p>
                Discover trusted professionals across a wide range of services.
            </p>

            <div className="category-grid">

                {categories.map((category, index) => (

                    <div className="category-card" key={index}>

                        <div className="category-icon">
                            {category.icon}
                        </div>

                        <h3>{category.name}</h3>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Categories;